function setTime(time, section) {
    console.log("Setting time in " + section);
    var timezone = jstz.determine();
    var local = time.tz(timezone.name());

    var span = document.getElementById(section);
    span.innerHTML = local.format("h:mma z")
}

function setDay(time, section) {
    console.log("Setting time in " + section);
    var timezone = jstz.determine();
    var local = time.tz(timezone.name());

    var span = document.getElementById(section);
    span.innerHTML = local.format("dddd, MMMM D")
    if (local.format("D").endsWith("0")) {
        span.innerHTML += "th";
    } else if (local.format("D").endsWith("1") && !(local.format("D").endsWith("11"))) {
        span.innerHTML += "st";
    } else if (local.format("D").endsWith("2") && !(local.format("D").endsWith("12"))) {
        span.innerHTML += "nd";
    } else if (local.format("D").endsWith("3") && !(local.format("D").endsWith("13"))) {
        span.innerHTML += "rd";
    } else {    
        span.innerHTML += "th";
    }
}

function setDates(time, day, timeId) {
    setDay(time,day);
    setTime(time,timeId);
}

function setTimeForHeadings(start) {
    console.log('Working out times ');
    

    setDates(start,                  "day1", "intro");
    setDates(start.add(1, "day"),    "day2", "image");
    setDates(start.add(2, "day"),    "day3", "presentation");
    setDates(start.add(3, "day"),    "day4", "annotations");
    setDates(start.add(4, "day"),    "day5", "demos");
}

function setupCalendar(start) {
  var timezone = jstz.determine();
  console.log('Name is ' + timezone.name());
  
  const startDate = start.format("YYYYMMDD");
  const endDate = start.add(4, "day").format("YYYYMMDD");
  
  var pref = '<iframe src="https://calendar.google.com/calendar/embed?src=clir.org_chugpdurgjm9njridh8uq676n0%40group.calendar.google.com&mode=WEEK&title=IIIF%20Online%20Workshop&dates=';
  pref += startDate + '/' + endDate + '&showTabs=0&ctz=';
  var suff = '" style="border: 0" width="100%" height="300" frameborder="0" scrolling="no"></iframe>';
  var iframe_html = pref + timezone.name() + suff;
  let el = document.getElementById('calendar-container');
  if (el != null) {
    el.innerHTML = iframe_html;
  } else {
    console.log("To add the calendar you must have a div called calendar-container")
  }  
}

function setupDates(start){ 
    setTimeForHeadings(start);
    setupCalendar(start);
}

function loadScript(src, integrity) {
    return new Promise(function(resolve, reject) {
        var s = document.createElement("script");
        s.src = src;
        if (integrity) s.integrity = integrity;
        s.crossOrigin = "anonymous";
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
    });
}

Promise.all([
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/jstimezonedetect/1.0.7/jstz.min.js", "sha512-pZ0i46J1zsMwPd2NQZ4IaL427jXE2RVHMk3uv/wPTNlBVp9AbB1L65/4YdrXRPLEmyZCkY9qYOOsQp44V4orHg=="),
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/dayjs.min.js", "sha512-u7elBfdMr+7LhU4rvUk3IM28QZDKTyUxba4Nx2IJ1W9cj4shfRSPq7EZXD2ULD9cBoizw2FQyeR6YBog6LcnHg=="),
]).then(function() {
    return Promise.all([
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/plugin/utc.min.js"),
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/plugin/timezone.min.js"),
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/plugin/advancedFormat.min.js"),
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/plugin/localizedFormat.min.js"),
    ]);
}).then(function() {
    dayjs.extend(dayjs_plugin_utc);
    dayjs.extend(dayjs_plugin_timezone);
    dayjs.extend(dayjs_plugin_advancedFormat);
    dayjs.extend(dayjs_plugin_localizedFormat);

    var el = document.getElementById("workshop-config");
    if (el) {
        var start = dayjs.tz(el.dataset.start, "Europe/London");
        setupDates(start);
    }
});
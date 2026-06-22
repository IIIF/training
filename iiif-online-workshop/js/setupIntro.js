
dayjs.extend(dayjs_plugin_utc)
dayjs.extend(dayjs_plugin_timezone)
dayjs.extend(dayjs_plugin_advancedFormat)

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

document.addEventListener("DOMContentLoaded", function() {
    var start = document.getElementById("workshop-config").dataset.start;
    setupDates(dayjs.tz(start, "Europe/London"));
});
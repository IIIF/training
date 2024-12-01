<script src="https://cdnjs.cloudflare.com/ajax/libs/jstimezonedetect/1.0.7/jstz.min.js" integrity="sha512-pZ0i46J1zsMwPd2NQZ4IaL427jXE2RVHMk3uv/wPTNlBVp9AbB1L65/4YdrXRPLEmyZCkY9qYOOsQp44V4orHg==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/dayjs.min.js" integrity="sha512-u7elBfdMr+7LhU4rvUk3IM28QZDKTyUxba4Nx2IJ1W9cj4shfRSPq7EZXD2ULD9cBoizw2FQyeR6YBog6LcnHg==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/plugin/utc.min.js" integrity="sha512-+lztPB4upMyG9pLdOWl8MFsBhXM1V9vFTDhXV3/4VSdoqpR5RfA2bNdrl8n0F9HmbzFkNqmOBdZw580qfRU01Q==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/plugin/timezone.min.js" integrity="sha512-3QnyXIdU85C6rOXhHzVsXinI5/qM/LniMr5actNRUwyp1Tuurw7rOn7fX7WWoNyZuM7KlQxITGQI4ITCgXKGQA==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/plugin/advancedFormat.min.js" integrity="sha512-bvTLx3e7Wk8qIAqr7O/vbk8IT2h+tFr1udHdJGzX6xMGtruTSCBctN0IGGjozmwap+l1A3zIz5KZUXI9IiBS3Q==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/plugin/localizedFormat.min.js" integrity="sha512-85aup/PuxBbkUL6yEpshXfwrOWNt7rvFzFrfvYgnrBBQK2r1FEyqD+5qGVNPWSm8xxafm3mhBOvd975HBSaXNA==" crossorigin="anonymous"></script>

# Introduction

Thank you for registering for the [IIIF Online Workshop](https://www.eventbrite.com/e/november-2024-iiif-online-training-5-day-course-tickets-795361416407) between November 25th to November 29th. This course is an adapted version of an in person workshop and it is the 30th time we have run it online.  

We are keen to adapt many of the techniques that have worked in person to create an inclusive, productive online version of the workshop. Running an online version does have its complications and one of these is differing timezones and we have participants from many different locations. We appreciate during this time attending all of the sessions will be difficult and so only the [first](day-one/README.md) and [last](day-five/README.md) sessions are **mandatory** to attend live.  

The course will follow this GitBook and will be a mix of pre-recorded sessions and live presentations. This GitBook contains embedded videos and also exercises to follow. There are drop in sessions on Tuesday, Wednesday and Thursday and these are meant for the group to get together to discuss any issues or get questions answered. Live sessions will be recorded and sent to the group over email.

## Sessions

The following sessions will set hands on work for participants to complete and participants are expected to participate in the meeting or watch recordings for these core sessions. 

<h3>**IIIF Basics** - <span id="day1"></span></h3>
__Meeting:__ Introductions and course overview zoom call at <b><span id="intro"></span></b>

Tasks to be completed __after__ the call:
 * [Image API](day-two/)  - video 1 hour
 * Image API tasks in [Workshop notes](day-two/image-servers/)

<h3>**IIIF Image API** - <span id="day2"></span></h3>
__Meeting:__ Group check in meeting at <b><span id="image"></span></b>

Tasks to be completed __before__ the meeting:
 * [Image API](day-two/)  - video 1 hour
 * Image API tasks in [Workshop notes](day-two/image-servers/)

Minimum progress:  
 * Complete the [Hosted - Internet Archive](day-two/image-servers/iiif-hosting-ia.html) option


<h3>**Presentation API** - <span id="day3"></span></h3>
__Meeting:__ Group check in meeting at <b><span id="presentation"></span></b>

Tasks to be completed __before__ the meeting:
 * [Presentation API brief intro](day-three/) - video 10 mins
 * [Presentation API hands on](day-three/) - video 1 hour
 * Follow Presentation API tasks in [Workshop notes](day-three/chrome-web-server/)  

Minimum progress:  
 *  Create a Manifest using the Bodleian manifest editor that we can use in the Annotations session


<h3>**Annotations** - <span id="day4"></span></h3>
__Meeting:__ Group check in meeting at <b><span id="annotations"></span></b>

Tasks to be completed __before__ the meeting:
 * [IIIF and Annotations](day-four/) - video 1 hour
 * Follow Annotations task in [Workshop notes](day-four/annotations-and-annotation-lists.html)


<h3>**Project demos** - <span id="day5"></span></h3>
__Meeting:__ Project demos and closing meeting at <b><span id="demos"></span></b>

Tasks to be completed __before__ the meeting:
 * Work on projects and presentation

## Calendar
There is also a course Google calendar available which you can subscribe to:
<div id="calendar-container"></div>

<script type="text/javascript">
  var timezone = jstz.determine();
  console.log('Name is ' + timezone.name());
  var pref = '<iframe src="https://calendar.google.com/calendar/embed?src=clir.org_chugpdurgjm9njridh8uq676n0%40group.calendar.google.com&mode=WEEK&title=IIIF%20Online%20Workshop&dates=20241125/20241129&showTabs=0&ctz=';
  var suff = '" style="border: 0" width="100%" height="300" frameborder="0" scrolling="no"></iframe>';
  var iframe_html = pref + timezone.name() + suff;
  document.getElementById('calendar-container').innerHTML = iframe_html;
</script>

You can also download a <a href="ics/November2024.ics">ICS version</a>.

## Project Work 
One of the most useful features of previous workshops have been where participants work on a project during the week which they can demo on the [last day](day-five/README.md). We are hoping to re-create this and we encourage participants to bring their own images and project ideas to the workshop. We will discuss them in the [first meeting](day-one/README.md) and will provide support during the workshop to produce a demonstration. Participants will be able to book time with a tutor for one on one advice and can also get help from others using a shared Slack channel. 

## Install Requirements
All sessions will use [Zoom](https://zoom.us/) and participants are encouraged to join the [IIIF Slack](http://bit.ly/iiif-slack) where a special channel will be created for workshop participants. 

## Participants locations
We are delighted to welcome such a diverse group to the course and we have participants from the following locations:

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=19ESA2174S5wjPVF49UTNepUZB61WL0k&ehbc=2E312F" width="640" height="480"></iframe>

I look forward to working with you and if you have any questions please don’t hesitate to get in contact. 

[Glen Robson](mailto:glen.robson@iiif.io)<br/>
IIIF Technical Coordinator<br/>
International Image Interoperability Framework (IIIF) Consortium<br/>
http://iiif.io<br/>

<script type="text/javascript">
    console.log('Working out times ');
    dayjs.extend(dayjs_plugin_utc)
    dayjs.extend(dayjs_plugin_timezone)
    dayjs.extend(dayjs_plugin_advancedFormat)
    var timezone = jstz.determine();
    function setTime(time, section) {
        console.log("Setting time in " + section);
        var local = time.tz(timezone.name());

        var span = document.getElementById(section);
        span.innerHTML = local.format("h:mma z")
    }
    function setDay(time, section) {
        console.log("Setting time in " + section);
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


    setDates(dayjs.tz("2024-11-25 10:00", "Europe/London"),"day1", "intro");
    setDates(dayjs.tz("2024-11-26 10:00", "Europe/London"),"day2", "image");
    setDates(dayjs.tz("2024-11-27 10:00", "Europe/London"),"day3", "presentation");
    setDates(dayjs.tz("2024-11-28 10:00", "Europe/London"),"day4", "annotations");
    setDates(dayjs.tz("2024-11-29 10:00", "Europe/London"),"day5", "demos");
    
</script>


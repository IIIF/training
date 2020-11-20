<script src="https://cdnjs.cloudflare.com/ajax/libs/jstimezonedetect/1.0.7/jstz.min.js" integrity="sha512-pZ0i46J1zsMwPd2NQZ4IaL427jXE2RVHMk3uv/wPTNlBVp9AbB1L65/4YdrXRPLEmyZCkY9qYOOsQp44V4orHg==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/dayjs.min.js" integrity="sha512-u7elBfdMr+7LhU4rvUk3IM28QZDKTyUxba4Nx2IJ1W9cj4shfRSPq7EZXD2ULD9cBoizw2FQyeR6YBog6LcnHg==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/plugin/utc.min.js" integrity="sha512-+lztPB4upMyG9pLdOWl8MFsBhXM1V9vFTDhXV3/4VSdoqpR5RfA2bNdrl8n0F9HmbzFkNqmOBdZw580qfRU01Q==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/plugin/timezone.min.js" integrity="sha512-3QnyXIdU85C6rOXhHzVsXinI5/qM/LniMr5actNRUwyp1Tuurw7rOn7fX7WWoNyZuM7KlQxITGQI4ITCgXKGQA==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/plugin/advancedFormat.min.js" integrity="sha512-bvTLx3e7Wk8qIAqr7O/vbk8IT2h+tFr1udHdJGzX6xMGtruTSCBctN0IGGjozmwap+l1A3zIz5KZUXI9IiBS3Q==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/plugin/localizedFormat.min.js" integrity="sha512-85aup/PuxBbkUL6yEpshXfwrOWNt7rvFzFrfvYgnrBBQK2r1FEyqD+5qGVNPWSm8xxafm3mhBOvd975HBSaXNA==" crossorigin="anonymous"></script>


# Introduction

Thank you for registering for the [IIIF Online Workshop](https://www.eventbrite.co.uk/e/october-iiif-online-training-5-day-course-tickets-123255298917) between the 23th and 27th of November 2020. This course is an adapted version of an in person workshop and it is the fourth time we have run it online.  

We are keen to adapt many of the techniques that have worked in person to create an inclusive, productive online version of the workshop. Running an online version does have its complications and one of these is differing timezones and we have participants from Europe, Africa, Russia and China. To accommodate this the sessions are at a time that work for most people. We also appreciate during this time attending all of the sessions will be difficult and so only the [first](day-one/README.md) and [last](day-five/README.md) sessions are **mandatory** to attend live.  

The course will follow this GitBook and will be a mix of pre-recorded sessions and live presentations. This GitBook contains embedded videos and also exercises to follow. There are drop in sessions on Tuesday, Wednesday and Thursday and these are meant for the group to get together to discuss any issues or get questions answered. Live sessions will be recorded and sent to the group over email.

If you are new to IIIF you may want to watch the following video which gives you some ideas on what the IIIF standards can provide before starting the course:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wVjrqsqzwNI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Sessions

The following sessions will set hands on work for participants to complete and participants are expected to participate in the meeting or watch recordings for these core sessions. 

### Day 1 - **IIIF Basics** 
* Calls:
  * Introductions and course overview zoom call on <span id="intro"></span>
* Tasks:
  * [Using IIIF for research](day-one/index.html#using-iiif-for-research) - Video 1 hour
  * Follow the exercises in the [Workshop documents](day-one/IIIFforResearch.html)

### Day 2  - **IIIF Image API**
* Calls:
  * Group check in meeting on <span id="image"></span>
* Tasks:
  * [Image API](day-two/)  - video 1 hour
  * Image API tasks in [Workshop notes](day-two/image-servers/)
* Minimum progress:  
  * Complete the [Hosted - Internet Archive](day-two/image-servers/iiif-hosting-ia.htm) option

### Day 3 - **Presentation API**
* Calls:
    * Group check in meeting on <span id="presentation"></span>
* Tasks:
  * [Presentation API brief intro](day-three/) - video 10 mins
  * [Presentation API hands on](day-three/) - video 1 hour
  * Follow Presentation API tasks in [Workshop notes](day-three/chrome-web-server/)  
* Minimum progress:  
  *  Create a Manifest using the Bodleian manifest editor that we can use in the Annotations session

### Day 4 - **Annotations**
* Calls:
  * Live presentation on <span id="annotations"></span>
* Tasks:
  * [IIIF and Annotations](day-four/) - video 1 hour
  * Follow Annotations task in [Workshop notes](day-four/annotations-and-annotation-lists.html)

### Day 5 - **Project demos**
* Calls:
  * Project demos and closing meeting on <span id="demos"></span>
* Tasks:
  * Work on projects and presentation


## Calendar
There is also a course Google calendar available which you can subscribe to:
<div id="calendar-container"></div>

<script type="text/javascript">
  var timezone = jstz.determine();
  console.log('Name is ' + timezone.name());
  var pref = '<iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=Y2xpci5vcmdfY2h1Z3BkdXJnam05bmpyaWRoOHVxNjc2bjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23B39DDB&amp;showTabs=0&amp;mode=WEEK&amp;dates=20201123/20201127&amp;title=IIIF%20Online%20Workshop&amp;ctz=';
  var suff = '" style="border:solid 1px #777; width: 100%; height: 600px;"></iframe>';
  var iframe_html = pref + timezone.name() + suff;
  document.getElementById('calendar-container').innerHTML = iframe_html;
</script>

## Project Work 
One of the most useful features of previous workshops have been where participants work on a project during the week which they can demo on the [last day](day-five/README.md). We are hoping to re-create this and we encourage participants to bring their own images and project ideas to the workshop. We will discuss them in the [first meeting](day-one/README.md) and will provide support during the workshop to produce a demonstration. Participants will be able to book time with a tutor for one on one advice and can also get help from others using a shared Slack channel. 

## Install Requirements
All sessions will use [Zoom](https://zoom.us/) and participants are encouraged to join the [IIIF Slack](http://bit.ly/iiif-slack) where a special channel will be created for workshop participants. 

## Participants locations
We are delighted to welcome such a diverse group to the course and we have participants from the following locations:

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1eM7GAY6EHSU5Sc67f2Pq76ciumLovhgu" width="640" height="480"></iframe>

I look forward to working with you and if you have any questions please don’t hesitate to get in contact. 

Thanks

[Glen Robson](mailto:glen.robson@iiif.io)<br/>
IIIF Technical Coordinator<br/>
International Image Interoperability Framework (IIIF) Consortium<br/>
http://iiif.io<br/>


<script type="text/javascript">
    dayjs.extend(dayjs_plugin_utc)
    dayjs.extend(dayjs_plugin_timezone)
    dayjs.extend(dayjs_plugin_advancedFormat)
    var timezone = jstz.determine();
    function setTime(time, section) {
        var local = time.tz(timezone.name());

        var span = document.getElementById(section);
        span.innerHTML = local.format("dddd MMMM D,[ at ]h:mma z")
    }

    setTime(dayjs.tz("2020-11-23 09:00", "Europe/London"),"intro");
    setTime(dayjs.tz("2020-11-24 09:00", "Europe/London"),"image");
    setTime(dayjs.tz("2020-11-25 09:00", "Europe/London"),"presentation");
    setTime(dayjs.tz("2020-11-26 09:00", "Europe/London"),"annotations");
    setTime(dayjs.tz("2020-11-27 09:00", "Europe/London"),"demos");
    
</script>


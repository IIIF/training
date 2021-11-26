<script src="https://cdnjs.cloudflare.com/ajax/libs/jstimezonedetect/1.0.7/jstz.min.js" integrity="sha512-pZ0i46J1zsMwPd2NQZ4IaL427jXE2RVHMk3uv/wPTNlBVp9AbB1L65/4YdrXRPLEmyZCkY9qYOOsQp44V4orHg==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/dayjs.min.js" integrity="sha512-u7elBfdMr+7LhU4rvUk3IM28QZDKTyUxba4Nx2IJ1W9cj4shfRSPq7EZXD2ULD9cBoizw2FQyeR6YBog6LcnHg==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/plugin/utc.min.js" integrity="sha512-+lztPB4upMyG9pLdOWl8MFsBhXM1V9vFTDhXV3/4VSdoqpR5RfA2bNdrl8n0F9HmbzFkNqmOBdZw580qfRU01Q==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/plugin/timezone.min.js" integrity="sha512-3QnyXIdU85C6rOXhHzVsXinI5/qM/LniMr5actNRUwyp1Tuurw7rOn7fX7WWoNyZuM7KlQxITGQI4ITCgXKGQA==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/plugin/advancedFormat.min.js" integrity="sha512-bvTLx3e7Wk8qIAqr7O/vbk8IT2h+tFr1udHdJGzX6xMGtruTSCBctN0IGGjozmwap+l1A3zIz5KZUXI9IiBS3Q==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.3/plugin/localizedFormat.min.js" integrity="sha512-85aup/PuxBbkUL6yEpshXfwrOWNt7rvFzFrfvYgnrBBQK2r1FEyqD+5qGVNPWSm8xxafm3mhBOvd975HBSaXNA==" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/gh/nwcell/ics.js@0.2.0/ics.deps.min.js"></script>

# Introduction

Thank you for signing up for the British Library IIIF Training between the 29th of November and the 3rd of December 2021. This course has been adapted from the general online IIIF course for the British Library. 

The course will follow this GitBook and will be a mix of pre-recorded sessions and live presentations. This GitBook contains embedded videos and also exercises to follow. There are drop in sessions on Tuesday, Wednesday and Thursday and these are meant for the group to get together to discuss any issues or get questions answered. Live sessions will be recorded and sent to the group over email.

If you are new to IIIF you may want to watch the following video which gives you some ideas on what the IIIF standards can provide before starting the course:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wVjrqsqzwNI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Sessions

The following sessions will set hands on work for participants to complete and participants are expected to participate in the meeting or watch recordings for these core sessions. 

<h3>**Introductions** - <span id="day1"></span></h3>
__Meeting:__ Introductions and course overview zoom call at <b><span id="intro"></span></b>

Tasks to be completed __after__ the call:
 * [Image API](day-two/)  - video 1 hour
 * Image API tasks in [Workshop notes](bl-image.md)

<h3>**IIIF Image API** - <span id="day2"></span></h3>
__Meeting:__ Group check in meeting at <b><span id="image"></span></b>

Tasks to be completed __before__ the meeting:
 * [Image API](day-two/)  - video 1 hour
 * Image API tasks in [Workshop notes](bl-image.md)

Minimum progress:  
 * Complete the [BL Images](bl-image.md) option


<h3>**Presentation API** - <span id="day3"></span></h3>
__Meeting:__ Group check in meeting at <b><span id="presentation"></span></b>

Tasks to be completed __before__ the meeting:
 * [Presentation API brief intro](day-three/) - video 10 mins
 * [Presentation API hands on](day-three/) - video 1 hour
 * Follow Presentation API tasks in [Workshop notes](day-three/chrome-web-server/)  

Minimum progress:  
 *  Create a Manifest using the Bodleian manifest editor that we can use in the Annotations session


<h3>**Annotations** - <span id="day4"></span></h3>
__Meeting:__ Live presentation at <b><span id="annotations"></span></b>

Tasks to be completed __after__ the meeting:
 * [IIIF and Annotations](day-four/) - video 1 hour
 * Follow Annotations task in [Workshop notes](day-four/annotations-and-annotation-lists.html)


<h3>**Project demos** - <span id="day5"></span></h3>
__Meeting:__ Project demos and closing meeting at <b><span id="demos"></span></b>

Tasks to be completed __before__ the meeting:
 * Work on projects and presentation

## Project Work 
One of the most useful features of previous workshops have been where participants work on a project during the week which they can demo on the [last day](day-five/README.md). We are hoping to re-create this and we encourage participants to bring their own images and project ideas to the workshop. We will discuss them in the [first meeting](day-one.md) and will provide support during the workshop to produce a demonstration. Participants will be able to book time with a tutor for one on one advice and can also get help from others using a shared Slack channel. 

## Install Requirements
All sessions will use [Zoom](https://zoom.us/) and participants are encouraged to join the [IIIF Slack](http://bit.ly/iiif-slack) where a special channel will be created for workshop participants. 

I look forward to working with you and if you have any questions please don’t hesitate to get in contact. 

Thanks

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

        let title = '';
        let description = 'Agenda: \\n\\nURL: https://stanford.zoom.us/j/98805809498?pwd=WlJmMWRJNjdXNzhiSDI3TnpFLzVtUT09\\n\\nCourse Information: https://training.iiif.io/iiif-online-workshop/July2021.html';
        let location = 'https://stanford.zoom.us/j/98805809498?pwd=WlJmMWRJNjdXNzhiSDI3TnpFLzVtUT09';
        let start = time;
        let end = start.add(1, 'hour');
        if (timeId === "intro") {
            title = "Introductions and course overview zoom call";
        } else if (timeId === "image") {
            title = "Group check in - Image API";
        } else if (timeId === "presentation") {
            title = "Group check in - Presentation API";
        } else if (timeId === "annotations") {
            title = "IIIF and Annotations";
        } else if (timeId === "demos") {
            title = "Project Demos";
        }
        console.log ('Event: ' + title + " start: " + start.format());

    }


    setDates(dayjs.tz("2021-11-29 10:00", "Europe/London"),"day1", "intro");
    setDates(dayjs.tz("2021-11-30 10:00", "Europe/London"),"day2", "image");
    setDates(dayjs.tz("2021-12-01 10:00", "Europe/London"),"day3", "presentation");
    setDates(dayjs.tz("2021-12-02 10:00", "Europe/London"),"day4", "annotations");
    setDates(dayjs.tz("2021-12-03 10:00", "Europe/London"),"day5", "demos");
    
</script>


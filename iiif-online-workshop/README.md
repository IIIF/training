<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jstimezonedetect/1.0.4/jstz.min.js"></script>

# Introduction

These workshop materials are to support a 5 day training course and can be followed in an organised class setting or independently. Each lesson is accompanied by a video and exercises and are regularly updated for each course. If you are following this workshop independently you can get help from the IIIF community using the [IIIF Slack](http://bit.ly/iiif-slack), particularly the `beginners` channel.

<div id="upcoming_training"></div>

At the end of this workshop there is a survey and we would be grateful if you could fill it in so we know how it went. 

The workshop is split into 5 different areas which were split into 5 days: 

 * Day 1 - [IIIF Basics](day-one/README.md)
 * Day 2 - [Image API](day-two/README.md)
 * Day 3 - [Presentation API](day-three/README.md)
 * Day 4 - [Annotations](day-four/README.md)
 * Day 5 - [Project demos](day-five/README.md)

All of these sessions were recorded and you will find them embedded in the relevant sections.   

Some of the core sessions include prerequisite videos to watch before attending and for the introduction session on Day 1 we would like you to watch the following introductory session:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wVjrqsqzwNI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Project Work 
As part of the online course participants were encouraged to work on a project as they worked through the different presentations to give them hands on experience of the tasks that were being taught. You can see a list of projects the participants produced in the [Project work](day-five/README.md) section of the training. If you would like your project listed please get in contact with Glen Robson, IIIF Technical Coordinator on the IIIF Slack.  

<script>
    function addEvent(parentDiv, event) {
        let li = document.createElement('li');
        parentDiv.appendChild(li);
        li.style = "display: flex; box-shadow: 0 1px 2px 1px #ddd;padding: 15px; margin: 10px 3px;";

       /* let logo = document.createElement('img');
        logo.src = event.logo.url;
        logo.style = "flex: none";
        logo.alt = 'Event Logo';
        logo.height = 100;
        li.appendChild(logo);*/
        
        let div = document.createElement('div');
        div.style = "flex: auto; padding-left: 20px;";
        li.appendChild(div);

        let eventName = document.createElement('h3');
        eventName.innerHTML = event.name.text;
        eventName.style = 'margin-top: 10px; margin-bottom: 10px;'
        div.appendChild(eventName);

        let eventSummary = document.createElement('p');
        eventSummary.innerHTML = strip(event.modules[0].data.body.text);
        div.appendChild(eventSummary);

        let button = document.createElement('button')
        button.style = '-webkit-transform: translateZ(0); transform: translateZ(0); position: relative; height: 44px; padding: 0 30px 1px; -webkit-box-sizing: border-box; box-sizing: border-box; text-align: center; text-decoration: none; line-height: 24px; font-weight: 600; letter-spacing: .2px; color: #39364f; color: var(--eds-ui-800,#39364f); fill: #39364f; fill: var(--eds-ui-800,#39364f); background: transparent; background-color: transparent; border: 2px solid #a9a8b3; border: 2px solid var(--eds-ui-500,#a9a8b3); border-radius: 4px; cursor: pointer; -webkit-transition: all .4s cubic-bezier(.4,0,.3,1); transition: all .4s cubic-bezier(.4,0,.3,1); border-color: var(--eds-primary-brand--hover,#f05537);background-color: var(--eds-primary-brand--hover,#f05537);color: var(--eds-inverse-primary-brand,#fff);';
        button.innerHTML = 'Register'
        button.onclick = function () { 
            window.open(
              event.url,
              '_blank' // <- This is what makes it open in a new window.
            );}
        div.appendChild(button);
    }

    function strip(html){
        let doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }

    let div = document.getElementById('upcoming_training');
    let ul = document.createElement('ul');
    ul.style = "padding-left: 0px;"
    div.appendChild(ul);
    fetch('https://iiif.io/eventbrite.json')
      .then(resp => {
         if (resp.ok) {
           return resp.json();
         } else {
           throw new Error(`Got back ${resp.status}`);
         }
      }).then(data => {
        if (data.hasOwnProperty('events')) {
            let p = document.createElement('p');
            p.innerHTML = 'If you would like more support we have the following training sessions available:'; 
            div.insertBefore(p, ul);
            data.events.forEach(event => addEvent(ul, event));
        }
        console.log(data);
      }).catch(err => {
        console.log('Failed due to ' + err);
      });
        
</script>

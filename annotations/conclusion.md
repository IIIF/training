# Summary

Hopefully I have shown you some compelling Use Cases of IIIF and Annotations. The feature of IIIF that allows you to take content from anywhere into a separate annotation or crowdsourcing system is very powerful and allows the increased discovery, reuse and re-interpretation of content both by institutions but also by independent groups and researchers.

The IIIF community are continually developing new tools which are allowing more engagement with our collections and annotations are a key part of that. 

# Full IIIF Training

This workshop has focused on Annotations with IIIF. If you would like more of a background on IIIF please join one of the future training sessions:

<div id="upcoming_training"></div>

# IIIF Community

The IIIF community is very welcoming to new people and there are various ways you can get involved. 

## Slack channels
Join the IIIF slack channel: [http://bit.ly/iiif-slack](http://bit.ly/iiif-slack)

 * general - general discussion and announcements
 * beginner - beginner questions lots of people to help
 * iiif-in-the-classroom - ideas for IIIF in the classroom
 * curators_of_awesome - become a curator of awesome by helping to curate: https://github.com/IIIF/awesome-iiif
 * jobs - IIIF related Job announcements
 * mirador - ask questions and see the latest developments with Mirador
 * technical - ask difficult technical questions :-)
 * wikimedia - Wikimedia related discussion

## Community Calls https://iiif.io/community/call/

Community groups:
 * [3D](https://iiif.io/community/groups/3d)
 * [A/V](https://iiif.io/community/groups/av)
 * [Archives](https://iiif.io/community/groups/archives)
 * [Discovery for Humans](https://iiif.io/community/groups/D4H)
 * [Manuscripts](https://iiif.io/community/groups/manuscripts)
 * [Maps](https://iiif.io/community/groups/maps)
 * [Museums](https://iiif.io/community/groups/museums)
 * [Newspapers](https://iiif.io/community/groups/newspapers)
 * [Outreach](https://iiif.io/community/groups/outreach)

Technical Groups
 * [Discovery](https://iiif.io/community/groups/discovery)
 * [Maps](https://iiif.io/community/groups/maps-tsg/) 
 * [Authentication](https://iiif.io/community/groups/auth-tsg)
 * [Content Search](https://iiif.io/community/groups/content-search-tsg)

## Stay informed
 * Join the monthly [newsletter](https://iiif.io/newsletter/)
 * Join the IIIF Discuss [email list](https://groups.google.com/forum/#!forum/iiif-discuss)

<script>
     function addEvent(parentDiv, event) {
        if (!event.name.text.includes("Online Training")) {
            return;
        }
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
    fetch('https://iiif.io/events/eventbrite.json')
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


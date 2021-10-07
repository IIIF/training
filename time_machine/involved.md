# Get involved

## Discounted Training

As part of the Time Machine training you are eligible for a discount on the next full IIIF training session: 

<div id="upcoming_training"></div>

Contact Glen Robson if you would like the code to access the hidden ticket. 

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
    function addEvent(parentDiv) {
        let li = document.createElement('li');
        parentDiv.appendChild(li);
        li.style = "display: flex; box-shadow: 0 1px 2px 1px #ddd;padding: 15px; margin: 10px 3px;";
        
        let div = document.createElement('div');
        div.style = "flex: auto; padding-left: 20px;";
        li.appendChild(div);

        let eventName = document.createElement('h3');
        eventName.innerHTML = "January IIIF Online Training (5-Day Course)";
        eventName.style = 'margin-top: 10px; margin-bottom: 10px;'
        div.appendChild(eventName);

        let eventSummary = document.createElement('p');
        eventSummary.innerHTML = "This workshop will meet daily January 24th to 28th for one hour starting at 12:00pm CET / 11:00am GMT / 6:00am EDT and as such will be suitable for people in the UK, Europe, Africa and Asian timezones. ";
        div.appendChild(eventSummary);

        let button = document.createElement('button')
        button.style = '-webkit-transform: translateZ(0); transform: translateZ(0); position: relative; height: 44px; padding: 0 30px 1px; -webkit-box-sizing: border-box; box-sizing: border-box; text-align: center; text-decoration: none; line-height: 24px; font-weight: 600; letter-spacing: .2px; color: #39364f; color: var(--eds-ui-800,#39364f); fill: #39364f; fill: var(--eds-ui-800,#39364f); background: transparent; background-color: transparent; border: 2px solid #a9a8b3; border: 2px solid var(--eds-ui-500,#a9a8b3); border-radius: 4px; cursor: pointer; -webkit-transition: all .4s cubic-bezier(.4,0,.3,1); transition: all .4s cubic-bezier(.4,0,.3,1); border-color: var(--eds-primary-brand--hover,#f05537);background-color: var(--eds-primary-brand--hover,#f05537);color: var(--eds-inverse-primary-brand,#fff);';
        button.innerHTML = 'Register'
        button.onclick = function () { 
            window.open(
              "https://www.eventbrite.com/e/january-iiif-online-training-5-day-course-tickets-176371781747",
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
    
    addEvent(ul);
</script>


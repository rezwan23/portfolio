// utilities
var get = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelector(selector);
};

var getAll = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelectorAll(selector);
};


var diffInYears = moment().diff('2018-12-01', 'years', true).toFixed(1);



const text = `This is Ghani.
Currently working as a Full-Stack developer for a foreign company on Salesforce platform. I have an experience of ${diffInYears} years in software development.

### Experience
1. Full-Stack Developer (Salesforce) - Tikweb Bangladesh - Feb 2022 - Present

## Responsibilities :
- Creating Journeys in Salesforce Marketing Cloud.
- Creating Cloudpages according to the business requirements.
- Connecting Marketing Cloud to Sales Cloud and update Standard and Custom Objects according to the business requirements.
- Writing ampscript ssjs and slqs to meet the client requirements.
- Creating and managing synchronized data extensions.
- Cerating Preference Center on Cloudpage.
- Creating Content Blocks.
- Creating Email with Dymanic Content.
- Creating Custom Objects and Custom Object Fields.
- Creating LWC and Aura Components for Community Portal.
- Creating and Modifying Reports and Dashboards in Salesforce.
- Salesforce Apex Trigger, Automation, Schedule, LWC, Aura Integration...

2. Full-Stack Developer (Laravel + Vue) - Mercantile Islami Life Insurance Limited - (Dhaka - BD) - Dec 2019 - Jan 2022

## Responsibilities :
- Play a lead role in developing an Insurance Management System with Laravel + Vue.
- Attend business meetings with different departments within the organization.
- Design database structure.
- Write efficient code.
- Manage physical server (nginx in Ubuntu Server 20.04)
- Writing crons for automatic backup from MSSQL Server.
- Writing complex queries for collecting correct data.
- Modifying and feature as needed.
- Mentor two juniors.
- Managing OOV SSl Certificate.

3. Full-Stack Developer (Laravel) - Smart Software Limited - (Dhaka -BD) - Dec 2018 - Nov - 2019

## Responsibilities : 
- Develop Ecommerce, Blog, News Websites for Local Clients.

### Expertise

- Laravel ------------ Solid
- PHP ---------------- Solid
- Node --------------- Beginner
- Vue ---------------- Intermediate
- React -------------- Beginner
- JQuery ------------- Solid
- Docker ------------- Intermediate
- SQL ---------------- Solid
- Ubuntu ------------- Solid
- Ampscript ---------- Solid
- LWC ---------------- Intermediate
- Aura --------------- Intermediate
- SSJS --------------- Solid
- Apex --------------- Solid
- Git ---------------- Solid
- English ------------ Fluent
- Salesforce Admin --- Intermediate

### Certificates
1. Salesforce Certified Marketing Cloud Email Specialist. (April 2022)
2. Salesforce Certified Administrator. (Nov 2022)
3. Salesforce Certified Javascript Developer I. (Feb 2023)
4. Salesforce Certified Platform Developer I. (Aug 2023)
5. SQL Advanced (HackerRank). (Sep 2022) 
6. Scrum Foundation Professional Certificate (CertiProf). (Feb 2022)
7. Salesforce Certified Associate. (May 2023)


####################################################
########### SEE CONTACT DETAILS BELOW ##############
####################################################

`;

// setup typewriter effect in the terminal demo
if (document.getElementsByClassName('demo').length > 0) {
  var i = 0;
  var txt = text;
  var speed = 20;

  function typeItOut () {
    if (i < txt.length) {
      document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  }

  setTimeout(typeItOut, 1800);
}

// toggle tabs on codeblock
window.addEventListener("load", function() {
  // get all tab_containers in the document
  var tabContainers = getAll(".tab__container");

  // bind click event to each tab container
  for (var i = 0; i < tabContainers.length; i++) {
    get('.tab__menu', tabContainers[i]).addEventListener("click", tabClick);
  }

  // each click event is scoped to the tab_container
  function tabClick (event) {
    var scope = event.currentTarget.parentNode;
    var clickedTab = event.target;
    var tabs = getAll('.tab', scope);
    var panes = getAll('.tab__pane', scope);
    var activePane = get(`.${clickedTab.getAttribute('data-tab')}`, scope);

    // remove all active tab classes
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    // remove all active pane classes
    for (var i = 0; i < panes.length; i++) {
      panes[i].classList.remove('active');
    }

    // apply active classes on desired tab and pane
    clickedTab.classList.add('active');
    activePane.classList.add('active');
  }
});

//in page scrolling for documentaiton page
var btns = getAll('.js-btn');
var sections = getAll('.js-section');

function setActiveLink(event) {
  // remove all active tab classes
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function smoothScrollTo(i, event) {
  var element = sections[i];
  setActiveLink(event);

  window.scrollTo({
    'behavior': 'smooth',
    'top': element.offsetTop - 20,
    'left': 0
  });
}

if (btns.length && sections.length > 0) {
  for (var i = 0; i<btns.length; i++) {
    btns[i].addEventListener('click', smoothScrollTo.bind(this,i));
  }
}

// fix menu to page-top once user starts scrolling
window.addEventListener('scroll', function () {
  var docNav = get('.doc__nav > ul');

  if( docNav) {
    if (window.pageYOffset > 63) {
      docNav.classList.add('fixed');
    } else {
      docNav.classList.remove('fixed');
    }
  }
});

// responsive navigation
// var topNav = get('.menu');
// var icon = get('.toggle');

// window.addEventListener('load', function(){
//   function showNav() {
//     if (topNav.className === 'menu') {
//       topNav.className += ' responsive';
//       icon.className += ' open';
//     } else {
//       topNav.className = 'menu';
//       icon.classList.remove('open');
//     }
//   }
//   icon.addEventListener('click', showNav);
// });


//$ and $$ -- Query selector shorthands
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = $("#app");
const cards = $$('.card');
const slates = $$('.slate');

let requestId = null;

initViewportVars();

//Load Greensock plugin
const gsap = require('gsap/dist/gsap').gsap;
const ScrollTrigger = require('gsap/dist/ScrollTrigger').ScrollTrigger;
const ScrollToPlugin = require('gsap/dist/ScrollToPlugin').ScrollToPlugin;
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// Register a new timeline object
let tl;

if(window.innerWidth > 767 && !is_touch_device()) {
	tl = gsap.timeline({
		// Attach it to the scroll
		scrollTrigger: {
			trigger: app,
			pin: true, 
			start: "top top", 
			end: () => `+=${app.offsetHeight * (cards.length/2 + slates.length/2)}`,
			scrub: 0.3,
			invalidateOnRefresh: true,
	  		onRefresh: self => tl.progress(self.progress)
		}
	});
	buildTimeline();
	window.addEventListener("resize", requestResize);
}






/******************************************************************
 * Event handlers
 ******************************************************************/

// Submit button hover
const heading = $('#the-end .heading'); 
const submitButton = $('#the-end .submit');
submitButton.addEventListener ('mouseover', () => heading.classList.add('pause') );
submitButton.addEventListener ('mouseout', () => heading.classList.remove('pause') );


//Scroll to top when H4C logo is clicked
const links = $$('.link-home');
for (const link of links) {
	link.addEventListener('click', e => {
		e.preventDefault();
		gsap.to(window, {scrollTo: 0});
	});
}


//Toggle (collapse/expand) Sub-menu
const collapsible = $(('.collapsible'));
const subMenu = $(('.collapse'));
collapsible.addEventListener('click', e => {
	e.preventDefault();
	subMenu.classList.toggle("active");
});

//Show Main Menu
const burgers = $$(('.hamburger-menu'));
const mainMenu = $('#menu');
for (const burger of burgers) {
	burger.addEventListener('click', e => {
		e.preventDefault();
		mainMenu.classList.remove('hidden');
		app.classList.add('blur');
		setTimeout(() => mainMenu.classList.remove('closed'), 20);
		
	});
}

//Hide Main Menu
const menuLinks = $$(('.close-menu'));
for (const menuLink of menuLinks) {
	menuLink.addEventListener('click', handleMenuLinkClick);
}



/******************************************************************
 * Functions
 ******************************************************************/

function requestResize() {
	cancelAnimationFrame(requestId);
	requestId = requestAnimationFrame(resize);
}

function resize() {
	var progress = tl.totalProgress();  
	tl.seek(0).clear();
	buildTimeline(progress);  
}

function buildTimeline(progress) {
	/******************************************************************
	 * Timeline animations
	 ******************************************************************/

	// Animation duration
	const d = 1;

	//Move the first two cards into the center position
	tl.fromTo('.card:nth-child(2)', 				{y:"100%"}, 	{y:0, 	duration: d, ease: 'linear'});
	tl.fromTo('.card:nth-child(2) .container', 		{y:"-100%"}, 	{y:0, 	duration: d, ease: 'linear'}, 	"-="+d);
	tl.fromTo('.card:nth-child(2) .nav-element', 	{y:-1*innerHeight}, 	{y:0, 	duration: d, ease: 'linear'}, 	"-="+d);

	tl.fromTo('.card:nth-child(3)', 				{y:"-100%"},	{y:0, 	duration: d, ease: 'linear'}, 	"-="+d);
	tl.fromTo('.card:nth-child(3) .container',  	{y:"100%"},		{y:0, 	duration: d, ease: 'linear'},	"-="+d);
	tl.fromTo('.card:nth-child(3) .nav-element', 	{y:innerHeight}, 	{y:0, 	duration: d, ease: 'linear'}, 	"-="+d);

	//Hide the hero
	tl.to('#hero', {y:"100%", 	duration: 0, ease: 'linear'});

	//Animate all the cards
	for(let i = 1; i < cards.length-2; i+=2) {
		          //target                                  	//from       //to           //duration      //delay
		tl.fromTo('.card:nth-child('+(i+1)+')', 				{y:0}, 		{y:"-100%", 	duration: d, ease: 'linear'});
		tl.fromTo('.card:nth-child('+(i+1)+') .container', 		{y:0}, 		{y:"100%", 	duration: d, ease: 'linear'}, 	"-="+d);
		if($('.card:nth-child('+(i+1)+') .nav-element')) {
			tl.fromTo('.card:nth-child('+(i+1)+') .nav-element', {y:0}, 	{y:innerHeight, 	duration: d, ease: 'linear'}, 	"-="+d); ///
		}

		tl.fromTo('.card:nth-child('+(i+3)+')', 				{y:"100%"},  {y:0, 			duration: d, ease: 'linear'},	"-="+d);
		tl.fromTo('.card:nth-child('+(i+3)+') .container', 		{y:"-100%"}, {y:0, 			duration: d, ease: 'linear'}, 	"-="+d);
		if($('.card:nth-child('+(i+3)+') .nav-element')) {
			tl.fromTo('.card:nth-child('+(i+3)+') .nav-element', {y:-1*innerHeight},{y:0, 			duration: d, ease: 'linear'}, 	"-="+d); ///
		}
		
		tl.fromTo('.card:nth-child('+(i+2)+')', 				{y:0},		 {y:"100%", 	duration: d, ease: 'linear'}, 	"-="+d);
		tl.fromTo('.card:nth-child('+(i+2)+') .container',  	{y:0},		 {y:"-100%", 	duration: d, ease: 'linear'},	"-="+d);
		if($('.card:nth-child('+(i+2)+') .nav-element')) {
			tl.fromTo('.card:nth-child('+(i+2)+') .nav-element', {y:0}, 	{y:-1*innerHeight, 	duration: d, ease: 'linear'}, 	"-="+d); ///
		}

		tl.fromTo('.card:nth-child('+(i+4)+')', 				{y:"-100%"}, {y:0, 			duration: d, ease: 'linear'}, 	"-="+d);
		tl.fromTo('.card:nth-child('+(i+4)+') .container',  	{y:"100%"},  {y:0, 			duration: d, ease: 'linear'}, 	"-="+d);
		if($('.card:nth-child('+(i+4)+') .nav-element')) {
			tl.fromTo('.card:nth-child('+(i+4)+') .nav-element', {y:innerHeight}, {y:0, 			duration: d, ease: 'linear'}, 	"-="+d); ///
		}
	}

	//Move the last two cards off stage to reveal the final section
	tl.fromTo('.card:nth-child('+(cards.length)+')', 				{y:0}, 	{y:"-100%", 	duration: d, ease: 'linear'});
	tl.fromTo('.card:nth-child('+(cards.length)+') .container', 	{y:0}, 	{y:"100%", 		duration: d, ease: 'linear'}, 	"-="+d);
	if($('.card:nth-child('+(cards.length)+') .nav-element')) {
		tl.fromTo('.card:nth-child('+(cards.length)+') .nav-element',	{y:0},  {y:innerHeight, 	duration: d, ease: 'linear'}, 	"-="+d);
	}

	tl.fromTo('.card:nth-child('+(cards.length+1)+')', 				{y:0}, {y:"100%", 	duration: d, ease: 'linear'}, 	"-="+d);
	tl.fromTo('.card:nth-child('+(cards.length+1)+') .container',  	{y:0}, {y:"-100%", 	duration: d, ease: 'linear'},	"-="+d);
	if($('.card:nth-child('+(cards.length+1)+') .nav-element')) {
		tl.fromTo('.card:nth-child('+(cards.length+1)+') .nav-element',  {y:0}, {y:-1*innerHeight, duration: d, ease: 'linear'}, 	"-="+d);
	}

	tl.totalProgress(progress || 0);
}

function handleMenuLinkClick(e) {
	const href = this.getAttribute('href') || "";

	if(href.indexOf("https") == -1) {
		e.preventDefault();
		
		if(this.classList.contains('icon-close-menu')) {
			closeMenu();
		}
		else {
			let sectionID = href.substring(1);
			let cnt = 0;
			let scrollOffset = 0;

			for(const card of cards) {
				if (card.getAttribute('id') == sectionID) {
					scrollOffset = innerHeight + (innerHeight * cnt/2);
					break;
				}
				cnt++;
			}

			gsap.to(window, {
				scrollTo: scrollOffset,
				duration: 0,
				onComplete: () => setTimeout(closeMenu, 200)
			});
		}
	}
	else {
		closeMenu();
	}
}

function closeMenu() {
	subMenu.classList.remove("active");
	app.classList.remove('blur');
	mainMenu.classList.add('closed');
	setTimeout(() => mainMenu.classList.add('hidden'), 1200);
}

function setViewPortVars() {
	if(typeof(window.visualViewport) !== 'undefined') {
		var vh = window.visualViewport.height * 0.01;
		var vw = window.visualViewport.width * 0.01;
	}
	else {
		var vh = window.innerHeight * 0.01;
		var vw = window.innerWidth * 0.01;
	}
	
	document.documentElement.style.setProperty('--vh', vh + 'px');
	document.documentElement.style.setProperty('--vw', vw + 'px');
}

function is_touch_device() {
	var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
	var mq = function(query) {
		return window.matchMedia(query).matches;
	};

	if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
		return true;
	}

	// include the 'heartz' as a way to have a non matching MQ to help terminate the join
	// https://git.io/vznFH
	var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
	return mq(query);
}

function initViewportVars() {
	// Set viewport variables
	if(typeof(window.visualViewport) !== 'undefined') {
		var ih = window.visualViewport.height * 0.01;
	}
	else {
		var ih = window.innerHeight * 0.01;	
	}
	document.documentElement.style.setProperty('--ih', ih + 'px');
	setViewPortVars(); 
	window.addEventListener('resize', setViewPortVars);
}


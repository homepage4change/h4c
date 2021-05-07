var gsap = require('gsap/dist/gsap').gsap;
var ScrollTrigger = require('gsap/dist/ScrollTrigger').ScrollTrigger;

gsap.registerPlugin(ScrollTrigger);

var app = document.getElementById("app");
//Register a new timeline object
var tl = gsap.timeline(
{
	// Attach it to the scroll
	scrollTrigger: {
		trigger: app,
		pin: true, 
		start: "top top", 
		end: () => `+=${app.offsetHeight * 10}`,
		scrub: 0.3,
		invalidateOnRefresh: true,
  		onRefresh: self => tl.progress(self.progress)
	}
}
);

var d = 1; //animation duration
var cards = document.querySelectorAll('.card');

/**
 * Timeline animation
 */

//Move the first two cards into the center position
tl.fromTo('.card:nth-child(2)', 			{y:"100%"}, 	{y:0, 	duration: d, ease: 'linear'});
tl.fromTo('.card:nth-child(2) .container', 	{y:"-100%"}, 	{y:0, 	duration: d, ease: 'linear'}, 	"-="+d);
tl.fromTo('.card:nth-child(3)', 			{y:"-100%"},	{y:0, 	duration: d, ease: 'linear'}, 	"-="+d);
tl.fromTo('.card:nth-child(3) .container',  {y:"100%"},		{y:0, 	duration: d, ease: 'linear'},	"-="+d);

//Hide the hero
tl.to('.hero:nth-child(1)', {y:"100%", 	duration: 0, ease: 'linear'});

//Animate all the cards
for(var i = 1; i < cards.length-2; i+=2) {
	          //target                                  //from       //to           //duration      //delay
	tl.fromTo('.card:nth-child('+(i+1)+')', 			{y:0}, 		 {y:"-100%", 	duration: d, ease: 'linear'});
	tl.fromTo('.card:nth-child('+(i+1)+') .container', 	{y:0}, 		 {y:"100%", 	duration: d, ease: 'linear'}, 	"-="+d);
	tl.fromTo('.card:nth-child('+(i+3)+')', 			{y:"100%"},  {y:0, 			duration: d, ease: 'linear'},	"-="+d);
	tl.fromTo('.card:nth-child('+(i+3)+') .container', 	{y:"-100%"}, {y:0, 			duration: d, ease: 'linear'}, 	"-="+d);
	tl.fromTo('.card:nth-child('+(i+2)+')', 			{y:0},		 {y:"100%", 	duration: d, ease: 'linear'}, 	"-="+d);
	tl.fromTo('.card:nth-child('+(i+2)+') .container',  {y:0},		 {y:"-100%", 	duration: d, ease: 'linear'},	"-="+d);
	tl.fromTo('.card:nth-child('+(i+4)+')', 			{y:"-100%"}, {y:0, 			duration: d, ease: 'linear'}, 	"-="+d);
	tl.fromTo('.card:nth-child('+(i+4)+') .container',  {y:"100%"},  {y:0, 			duration: d, ease: 'linear'}, 	"-="+d);
}

//Move the last two cards off stage to reveal the final section
tl.fromTo('.card:nth-child('+(cards.length)+')', 			{y:0}, 	{y:"-100%", 	duration: d, ease: 'linear'});
tl.fromTo('.card:nth-child('+(cards.length)+') .container', 	{y:0}, 	{y:"100%", 	duration: d, ease: 'linear'}, 	"-="+d);
tl.fromTo('.card:nth-child('+(cards.length+1)+')', 			{y:0},	{y:"100%", 	duration: d, ease: 'linear'}, 	"-="+d);
tl.fromTo('.card:nth-child('+(cards.length+1)+') .container',  {y:0},		{y:"-100%", 	duration: d, ease: 'linear'},	"-="+d);


//Javascript for the header portion of the site. This will mainly focus on the scripts for the navigation bar for now.

//Goal: When the user hovers over the toggle bar, all the bars change color.
//when the bar is clicked, the middle bar fades out and the other two rotate to turn into an X. The navigation dropdown will appear simultanously.



// //If the viewing device is a touch screen, we need to have a different event handler than if the device is a laptop/pc. Help for this portion came from multiple places, but ultimale
//
// let mobile;
// //determine if the device is a mobile or not
// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
//   mobile = true;
//  } else {
//   mobile = false;
//  }
//
// console.log(mobile)
// //variables that will be used in the event handler
// let enter;
// let exit;
//
// if (mobile === true){
//   enter = "touchstart";
//   exit = "touchend";
// } else {
//   enter = "mouseenter";
//   exit = "mouseleave";
// }

//grab the toggle button
let toggleBar = document.getElementById('navToggle');
//add event listeners
toggleBar.addEventListener('click', ()=>handleHover())

//grab the individual bars
let bar1 = document.getElementById('bar1')
let bar2 = document.getElementById('bar2')
let bar3 = document.getElementById('bar3')


//track the status of the navbar
let open = false;

function handleHover(){


//if the nav bar is collapsed
 if (open === false){
   //top bar
   bar1.style.position = 'absolute'
   bar1.style.backgroundColor = 'red';
   bar1.style.margin = 0 + 'px';
   bar1.style.transform = 'rotate(45deg)';

   //middle bar
   bar2.style.opacity = 0;
   setTimeout(function(){ bar2.style.display = 'none'; }, 200);
   // bar2.style.display = 'none';

   //bottom bar
   bar3.style.position = 'absolute'
   bar3.style.backgroundColor = 'red';
   bar3.style.margin = 0 + 'px';
   bar3.style.transform = 'rotate(-45deg)';

   //set the status to open
   open = true;

 } else {

   //return to the closed state
   //top bar
   bar1.style.position = 'inherit'

   bar1.style.backgroundColor = 'white';
   bar1.style.transform = 'rotate(0deg)';
   bar1.style.margin = 5 + 'px';

   //middle bar
   bar2.style.opacity = 1;
   setTimeout(function(){ bar2.style.display = 'inherit'; }, 500);
   // bar2.style.display = 'inherit'
   //bottom bar
   bar3.style.position = 'relative'

   bar3.style.backgroundColor = 'white';
   bar3.style.transform = 'rotate(0deg)';
   bar3.style.margin = 5 + 'px';
   open = false;
 }

}

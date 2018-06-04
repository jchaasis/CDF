//javascript for the contact page. This page will have links to social media platforms, as well as, a google maps snip showing the location of the shop.


let map;

function initMap() {

  let cottageGrove = {lat: 34.842004, lng: -82.357480};
   // The map
  map = new google.maps.Map(
       document.getElementById('map'), {zoom: 16, center: cottageGrove});

   // The marker, positioned at Uluru
   let marker = new google.maps.Marker({position: cottageGrove, map: map});

}

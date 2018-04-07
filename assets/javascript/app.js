//
// var apiKey = "AIzaSyC2_GlLrq_2dM9w0JR2MhFxEPOFCYz_rIQ";
// var carLon = [];
// var car =[];
//
//
// $(function() {
//     // strings to be used to construct request
//     apiKey = "AIzaSyC2_GlLrq_2dM9w0JR2MhFxEPOFCYz_rIQ";
//     var baseURL = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization&callback=initMap";
//     // stores latitude and longitude attributes of requested JSON resource
//     var latitude, longitude;
//
//     function getLocation() {
//
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(success, fail);
//         }
//     }
//
//     function success(position) {
//
//         latitude = position.coords.latitude;
//         longitude = position.coords.longitude;
//         display(constructRequest(latitude, longitude));
//     }
//
//     function fail() {
//
//         console.log('fail');
//     }
//
//     function constructRequest(lat, long) {
//         /* constructs and returns http request based on user's latitude and longitude */
//         return baseURL + "carLat=" + lat + "carLon=" + long + apiKey;
//     }
//
//     function display(req) {
//
//         $.getJSON(req,
//             function(data) {
//                 $('#display').text(data.car[0].description);
//             }
//         );
//     }
//
//     getLocation();
// });
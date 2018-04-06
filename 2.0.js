// $(function() {
//
//
//     function apiCalls(car) {
//
//         var queryURL = "https://marketcheck-prod.apigee.net/v1/search?api_key=GGfP0a10n5nX5sHbOWGxO1NcUHHorHCS&latitude=34.05&longitude=-118.24&radius=100&car_type=used&make=" +
//             car;
//         console.log(queryURL);
//             }).catch(function(err){
//
//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         }).then(function (response) {
//             console.log('working car info');
//             var carLat = response;
//             console.log(carLat);
//
//             var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+","+"&key=AIzaSyC2_GlLrq_2dM9w0JR2MhFxEPOFCYz_rIQ";
//
//                     // $.ajax({
//                     //     url: googleUrl,
//                     //     method: "GET",
//                     //     // headers: {
//                     //     //     "Host": "marketcheck-prod.apigee.net"
//                     //     // }
//                     //     }).then(function (carInfo){
//                     //
//                     //         console.log('google info');
//                     //         console.log(response)
//                     //         var
//                     //     // do DOM stuff
//                     //     $('#showcase p').html()
//                     // })
//             console.log(err)
//         })
//     }
//
//
//     $(document).on("click", ".button", function () {
//
//
//
//         var car = $("#make").val().toLowerCase();
//         apiCalls(car);
//         console.log(car);
//
//
//     })
//     $("button").click(function(){
//         $("p").text("Hello world!");
//     });
//
//
//
//
//
//
//    //
//    //
//    // second part of the code connecting google api
//    //
//    //
//
//
//
//
//
//
// });


// **** GOOGLE API CALL *****
// var googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${dealerLocation.latitude},${dealerLocation.longitude}&key=AIzaSyC2_GlLrq_2dM9w0JR2MhFxEPOFCYz_rIQ`;
//
// console.log(carInfo)
// $.ajax({
//     url: googleUrl,
//     method: "GET",
//
// }).then(function (carInfo) {
//
//     console.log('google info');
// })

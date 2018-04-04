$(function() {


    function apiCalls(car) {

        var googleUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC2_GlLrq_2dM9w0JR2MhFxEPOFCYz_rIQ&libraries=visualization&callback=initMap";
        var queryURL = "https://marketcheck-prod.apigee.net/v1/search?api_key=GGfP0a10n5nX5sHbOWGxO1NcUHHorHCS&latitude=34.05&longitude=-118.24&radius=100&car_type=used&make=" +
            car;
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log('working car info');
            var carLat = response;
            console.log(carLat);

                    $.ajax({
                        url: googleUrl,
                        method: "GET",
                        // headers: {
                        //     "Host": "marketcheck-prod.apigee.net"
                        // }
                        }).then(function (carInfo){

                            console.log('google info');
                            console.log(carInfo)
                    })

            }).catch(function(err){
                console.log(err)
        })
        }


    $(document).on("click", ".button", function () {

        var car = $("#make").val().toLowerCase();
        apiCalls(car);
        console.log(car);

    })

   //
   //
   // second part of the code connecting google api
   //
   //






});
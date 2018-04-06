$(function() {


    function apiCalls(car, zip) {

        var zipURL = `https://cors-anywhere.herokuapp.com/https:\/\/www.zipcodeapi.com/rest/8Nzkp1pcHUDBfvWaXfhelu5SwCR7byH42VLkXDFQl5q5Wav29COirG9hYwEkNJ3S/info.json/${zip}/degrees`

        $.ajax({
            url: zipURL,
            method: "GET"
        }).then(function (resp) {
            var lat = resp.lat;
            var long = resp.lng;
            var queryURL = `https://marketcheck-prod.apigee.net/v1/search?api_key=GGfP0a10n5nX5sHbOWGxO1NcUHHorHCS&latitude=${lat}&longitude=${long}&radius=100&car_type=used&make=${car}`;
            console.log(queryURL);

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log('working car info');
                var carLat = response;
                console.log(carLat);
                for (var i = 0; i < carLat.listings.length; i++) {
                    var dealerLocation = {
                        street: carLat.listings[i].dealer.street,
                        city: carLat.listings[i].dealer.city,
                        state: carLat.listings[i].dealer.state,
                        zip: carLat.listings[i].dealer.zip,
                        name: carLat.listings[i].dealer.name,
                        website: carLat.listings[i].dealer.website
                    };
                    var carInfo = {
                        year: carLat.listings[i].build.year,
                        make: carLat.listings[i].build.make,
                        model: carLat.listings[i].build.model
                    }
                    console.log(`${dealerLocation.name} at ${dealerLocation.street}, ${dealerLocation.city}, ${dealerLocation.state} ${dealerLocation.zip}`)
                    console.log(`Website at ${dealerLocation.website}`);
                    var dealer = $("<div>");
                    var dealerName = $("<h2>");
                    dealerName.text(dealerLocation.name);
                    var dealerAddr = $("<p>");
                    dealerAddr.text(dealerLocation.street);
                    var dealerState = $("<p>");
                    dealerState.text(`${dealerLocation.city}, ${dealerLocation.state} ${dealerLocation.zip}`);
                    var carInformation = $("<p>");
                    carInformation.text(`${carInfo.year} ${carInfo.make} ${carInfo.model}`);
                    dealer.append(dealerName);
                    dealer.append(carInformation);
                    dealer.append(dealerAddr);
                    dealer.append(dealerState);
                    $("#carList").append(dealer);
                }

            }).catch(function(err){
                console.log(err)
            })
        })

    }


    $(document).on("click", ".button", function () {

        var car = $("#make").val().toLowerCase();
        var zip = $("#zipcode").val().trim();
        apiCalls(car, zip);
        console.log(car, zip);

    })


    // car = $("#make").val().trim()
    // apiCalls(car);


    // .done(function(response){
    //     $("#carList").text(response.results[0].name);
    //     console.log(works)
    // })



});

//function executes when document gets loaded in browser
$(document).ready(function() {
    //getting user inputs
    $("#inputValue").on("keyup", function(e) {

        //storing in variable
        var cityName = e.target.value;
        const APIKey = "425f263559720f69b73a57832858bdea";

        //request to server using ajax
        $.ajax({

            url:`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metrix`,
        
        }).done(function(weatherdata) {

            console.log(weatherdata);

            $("#profile").html(`

                <div class="container">
                    <div class="row">

                        <div class="card" style="width: 18rem;">

                            <img class="card-img-top" src="https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" alt="Card image cap">
                            
                            <div class="card-body">
                            
                                <h5 class="card-title">${weatherdata.weather[0].description}</h5>
                                <p class="card-text">The temperature at ${cityName} is ${weatherdata.main.temp} &#8451; and it feels like it is ${weatherdata.main.feels_like} &#8451.</p>
                                <a href="https://www.google.com/search?q=${cityName}" class="btn btn-primary">Learn more about the location</a>
                        
                            </div>
                    
                        </div>

                    </div>
                    
                </div>
                
            `);
               
        });
    });
});
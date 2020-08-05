//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=36732039e96fa8554b899ed82cae96fb

// function buildQueryURL() {
//     // queryURL is the url we'll use to query the API
//     var queryURL = "https://api.openweathermap.org/data/2.5/forecast?";

//     // Begin building an object to contain our API call's query parameters
//     // Set the API key
//     var queryParams = { "APPID": "524901&APPID=36732039e96fa8554b899ed82cae96fb" };

$(".searchBtn").on("click", function (event) {

  console.log("called")

  event.preventDefault();


  var terms = $("#search").val();




  //var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + terms + "&appid=36732039e96fa8554b899ed82cae96fb";
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + terms + "&appid=09dc7618764f3173b089191eb7e172a1";
  // id=524901        
  //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
  // 36732039e96fa8554b899ed82cae96fb
  //api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=36732039e96fa8554b899ed82cae96fb







  $.ajax({
      url: queryURL,
      method: "GET"
    })




    .then(function (response) {

      // Log the queryURL
      console.log(response);
      // console.log("hi");
      //! THIS WORKS => console.log(response.city)
      // console.log(response.city.name)
      // console.log(response.city)
      // console.log(typeof(response.city))

      // for (let i = 0; i <response.city.length; i++) {
      // console.log('run')
      //! for (const city in response.city) {
      // for (const property in object) {
      // console.log(`${property}: ${object[property]}`);
      //! console.log(city)
      // console.log(`${property}: ${object[property]}`);
      var cityName = response.city.name;
      console.log(`<p>${cityName} </p>`)

      var cityTempe = response.list[0].main.temp;
      console.log(`<p>${cityTempe} </p>`)

      var cityHumid = response.list[0].main.humidity;
      console.log(`<p>${cityHumidity} </p>`)

      var cityWinde = response.list[0].wind.speed;
      console.log(`<p>${cityWind} </p>`)




      // ? what do you want to do?

      // ?1 create element using html then bind using jquery to use innerHTML to display cityName

      //  ?2 create element using js  then bind using jquery to use innerHTML to display cityName

      // console.log(response.city.name)
      //   var secondName = names[1];

      //   console.log(firstName);//"alpha"
      //   console.log(secondName);//"beta"
      // }

      /* 
                      ! template for destructuring
                      var names = ["alpha", "beta", "gamma", "delta"]; 

                      var firstName = names[0];
                      var secondName = names[1];

                      console.log(firstName);//"alpha"
                      console.log(secondName);//"beta"
                      */

      //  var cityTitle = $("#city-title").innerHTML(cityName);


      var cityTitle = $("#city-title").get(0);
      cityTitle.innerHTML = cityName;

      var cityTemp = $("#city-temp").get(0);
      cityTemp.innerHTML = ("Temperature: " + cityTempe);

      var cityHumidity = $("#city-humidity").get(0);
      cityHumidity.innerHTML = ("Humidity: " + cityHumid);

      var cityWind = $("#wind-speed").get(0);
      cityWind.innerHTML = ("Wind: " + cityWinde);


      //  .textcontent(cityName);




      // var ptag = $("<p>")
      // ptag.text(response.city[i].abstract)
      // ptag.text(response.response.city[i].abstract)
      // console.log(response.docs[i].abstract)
      // console.log(response.response.docs[i].abstract)

      // var ptag2 = $("<p>")
      // ptag2.text(response.docs[i].pub_date)
      // ptag2.text(response.response.docs[i].pub_date)

      // $("#results").append(ptag)
      // $("#results").append(ptag2)
      // $("#results").append(ptag).append(ptag2)


      // }
    });
});
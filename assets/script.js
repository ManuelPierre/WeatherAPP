var cities = [];

$(".searchBtn").on("click", getWeatherSearchBtn);
$(document).on("click", ".city-btn", getWeatherBtnClick);

function getWeatherBtnClick() {
  event.preventDefault();
  var city = $(this).attr("data-name");
  $("#search").val(city);
  getWeather();
}

function getWeatherSearchBtn() {
  var cityName = $("#search").val();
  var btn = $("<button>").text(cityName);
  cities.push(cityName);
  btn.attr("data-name", cityName);
  btn.addClass("city-btn");
  var stringifyCity = JSON.stringify(cities);
  localStorage.setItem("cities", stringifyCity);
  $("#results").append(btn);
  getWeather();
}

function getWeather() {
  console.log("called");

  event.preventDefault();

  var terms = $("#search").val();

  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    terms +
    "&units=imperial&appid=09dc7618764f3173b089191eb7e172a1";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    var cityTempe = response.list[0].main.temp;
    console.log(`<p>${cityTempe} </p>`);

    var cityHumid = response.list[0].main.humidity;
    console.log(`<p>${cityHumidity} </p>`);

    var cityWinde = response.list[0].wind.speed;
    console.log(`<p>${cityWind} </p>`);

    //   !template
    // for destructuring
    var names = ["alpha", "beta", "gamma", "delta"];

    var firstName = names[0];
    var secondName = names[1];

    console.log(firstName);
    console.log(secondName);

    var cityTitle = $("#city-title").get(0);
    cityTitle.innerHTML = terms + " " + new Date().toLocaleDateString();

    var cityTemp = $("#city-temp").get(0);
    cityTemp.innerHTML = "Temperature: " + cityTempe;

    var cityHumidity = $("#city-humidity").get(0);
    cityHumidity.innerHTML = "Humidity: " + cityHumid;

    var cityWind = $("#wind-speed").get(0);
    cityWind.innerHTML = "Wind: " + cityWinde;

    var lat = response.city.coord.lat;
    var lon = response.city.coord.lon;
    var ApiKey = "09dc7618764f3173b089191eb7e172a1";

    var oneCallApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${ApiKey}`;

    $.ajax({
      url: oneCallApi,
      method: "GET",
    }).then(function (data) {
      console.log(data);

      var cityUvie = data.current.uvi;
      $("#UV-index").text(cityUvie);
      $(".forecast").empty();

      if (cityUvie < 3) {
        $("#UV-index").css("background-color", "green");
      } else if (cityUvie > 7) {
        $("#UV-index").css("background-color", "red");
      } else {
        $("#UV-index").css("background-color", "yellow");
      }

      for (let index = 1; index <= 5; index++) {
        console.log(data.daily[index]);
        var temp = data.daily[index].temp.day;
        var hum = data.daily[index].humidity;
        var date = moment.unix(data.daily[index].dt).format("MMMM Do YYYY");
        console.log(date);

        var img = $("<img>").attr(
          "src",
          "http://openweathermap.org/img/w/" +
            response.list[0].weather[0].icon +
            ".png"
        );

        var div = $("<div>");

        var cardDiv = $("<div>").addClass("card");
        cardDiv.css("background-color", "blue");

        div.addClass("card-body");
        var p = $("<p>");

        p.text(temp).addClass("card-title");
        div.append(p);

        div.append(img);

        var p2 = $("<p>");

        p2.text(hum).addClass("card-text");
        div.append(p2);

        var p3 = $("<p>");

        p3.text(date).addClass("card-text");
        div.append(p3);
        cardDiv.append(div);
        $(".forecast").append(cardDiv);
      }
    });
  });
}

// }

function renderButtons() {
  console.log("run");

  cities = JSON.parse(localStorage.getItem("cities")) || [];

  for (var i = 0; i < cities.length; i++) {
    var priorResults = [];

    console.log("run");

    var r = $("<button>");

    r.addClass("city-btn");

    r.attr("data-name", cities[i]);

    r.text(cities[i]);

    $("#results").append(r);
  }
}

renderButtons();

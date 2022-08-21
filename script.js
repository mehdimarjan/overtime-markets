"use strict";

let btn = document.querySelector(".btn");
let results = document.querySelector(".results");
var ourRequest = new XMLHttpRequest();

btn.addEventListener("click", function () {
  ourRequest.open("GET", "./games.json");
  ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
});

function renderHTML(data) {
  var htmlString = "";

  for (var i = 0; i < data.length; i++) {
    if (parseInt(data[i].maturityDate)> 1659747601){
    htmlString +=`SELECT '${data[i].address}' AS address, '${data[i].homeTeam}' AS homeTeam, '${data[i].awayTeam}' AS awayTeam,
  '${data[i].tags}' AS tags UNION </p>`;
  }
  }
  results.innerHTML = htmlString;
}


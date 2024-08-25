// const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {
  let launchForm = document.getElementById("launchForm");
  launchForm.addEventListener("submit", function (event) {
    let pilot = document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoLevel = document.querySelector("input[name=cargoMass]").value;
    let list = document.getElementById("faultyItems");

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    event.preventDefault();
  });

  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      let planet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        planet.name,
        planet.diameter,
        planet.star,
        planet.distance,
        planet.moons,
        planet.image
      );
    });
});

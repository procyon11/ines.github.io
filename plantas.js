const API_URL = "https://script.google.com/macros/s/AKfycbwZOcaSAz-9zhKZaB8Z3GXyXKL34pXyTGkzS6rfBLxlQtVA4-r4f0lCeDGznJGwA9eJ/exec";

function updateWater(plant) {

  fetch(API_URL, {
    method: "POST",
    body: new URLSearchParams({
      plant: plant,
      type: "water"
    })
  });

}

function updateFertilizer(plant) {

  fetch(API_URL, {
    method: "POST",
    body: new URLSearchParams({
      plant: plant,
      type: "fert"
    })
  });

}

const API_URL = "https://script.google.com/macros/s/AKfycbx3FmmzLDxNTUYr31Mk4_0FK5BUQ79NwyVy2IKSGQtoqEm8DoBDWpZFwImnTT-Or98/exec";

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

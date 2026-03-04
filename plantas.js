function today() {
  return new Date().toLocaleDateString();
}

function updateWater(plant) {
  localStorage.setItem(plant + "_water", today());
  loadPlantData();
}

function updateFertilizer(plant) {
  localStorage.setItem(plant + "_fertilizer", today());
  loadPlantData();
}

function loadPlantData() {

  const plants = [
    "sansevieria",
    "spatiphyllum",
    "alocasia",
    "monstera",
    "ficuselastica",
    "calathea",
    "tradescantias",
    "ficusbenjamina"
  ];

  plants.forEach(p => {

    const water = localStorage.getItem(p + "_water");
    const fert = localStorage.getItem(p + "_fertilizer");

    if (water) {
      document.getElementById(p + "_water").innerText = water;
    }

    if (fert) {
      document.getElementById(p + "_fert").innerText = fert;
    }

  });

}

window.onload = loadPlantData;

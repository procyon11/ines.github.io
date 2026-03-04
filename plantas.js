const API_URL = "https://script.google.com/macros/s/AKfycbwZOcaSAz-9zhKZaB8Z3GXyXKL34pXyTGkzS6rfBLxlQtVA4-r4f0lCeDGznJGwA9eJ/exec";

const SHEET_URL =
"https://docs.google.com/spreadsheets/d/1PkGyWcEzu5JhZAXFehEcGgsTT9dRWj1Y9J9p0fDQB-o/gviz/tq?tqx=out:json";

function updateWater(plant){

  fetch(API_URL,{
    method:"POST",
    body:new URLSearchParams({
      plant:plant,
      type:"water"
    })
  });

}

function updateFertilizer(plant){

  fetch(API_URL,{
    method:"POST",
    body:new URLSearchParams({
      plant:plant,
      type:"fert"
    })
  });

}

function loadPlantData(){

fetch(SHEET_URL)
.then(res => res.text())
.then(data => {

const json = JSON.parse(data.substr(47).slice(0,-2));
const rows = json.table.rows;

rows.forEach(r => {

const plant = r.c[0]?.v;
const water = r.c[1]?.v;
const fert = r.c[2]?.v;

if(plant){

const waterEl = document.getElementById(plant+"_water");
const fertEl = document.getElementById(plant+"_fert");

if(waterEl && water){
waterEl.innerText = new Date(water).toLocaleDateString();
}

if(fertEl && fert){
fertEl.innerText = new Date(fert).toLocaleDateString();
}

}

});

});

}

window.onload = loadPlantData;

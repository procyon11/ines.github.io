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

const json = JSON.parse(data.substring(47).slice(0,-2));
const rows = json.table.rows;

rows.forEach(row => {

const plant = row.c[0]?.v;
const water = row.c[1]?.v;
const fert = row.c[2]?.v;

if(!plant) return;

const waterEl = document.getElementById(plant + "_water");
const fertEl = document.getElementById(plant + "_fert");

if(water && waterEl){

const date = new Date(water);
waterEl.innerText = date.toLocaleDateString();

}

if(fert && fertEl){

const date = new Date(fert);
fertEl.innerText = date.toLocaleDateString();

}

});

});

}

window.onload = loadPlantData;

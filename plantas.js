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

function sheetDateToString(cell){
  if(!cell) return "—";

  // si Google ya envía texto formateado
  if(cell.f) return cell.f;

  // si envía número de serie de Sheets
  if(typeof cell.v === "number"){
    const date = new Date((cell.v - 25569) * 86400 * 1000);
    return date.toLocaleDateString();
  }

  return "—";
}

function loadPlantData(){

  fetch(SHEET_URL)
  .then(res => res.text())
  .then(data => {

    const json = JSON.parse(data.substring(47).slice(0,-2));
    const rows = json.table.rows;

    rows.forEach(row => {

      const plant = row.c[0]?.v;
      if(!plant) return;

      const water = row.c[1];
      const fert = row.c[2];

      const waterEl = document.getElementById(plant+"_water");
      const fertEl = document.getElementById(plant+"_fert");

      if(waterEl) waterEl.innerText = sheetDateToString(water);
      if(fertEl) fertEl.innerText = sheetDateToString(fert);

    });

  });

}

window.onload = loadPlantData;

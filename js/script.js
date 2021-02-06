const countryDetails = document.querySelector(".country-details");
const inputVal = document.getElementById("input-val");

inputVal.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    fetch(
      `https://restcountries.eu/rest/v2/name/${inputVal.value}?fullText=true`
    )
      .then((res) => res.json())
      .then((data) => {
        let country = {
          flag: data[0].flag,
          name: data[0].name,
          capital: data[0].capital,
          language: data[0].languages[0].name,
          region: data[0].region,
          subregion: data[0].subregion,
          regionlaBloc: data[0].regionalBlocs[0].acronym,
          population: data[0].population,
          demonym: data[0].demonym,
          area: data[0].area,
          timezone: data[0].timezones[0],
          currencies: data[0].currencies[0].name,
          currenciesCode: data[0].currencies[0].code,
          callingCode: data[0].callingCodes[0],
        };
        createElement(country);
        countryDetails.removeChild(countryDetails.children[1]);
      });
      document.getElementById("input-val").value = '';
  }
});

function createElement(country){
let countryDesc = document.createElement("div");
countryDesc.id = "country-desc";
countryDetails.insertBefore(countryDesc, countryDetails.childNodes[0])
let img = document.createElement("img");
img.id = "flag-big";
img.src = country.flag;
countryDesc.appendChild(img);

let countryName = document.createElement("h2");
countryName.id = "country-name";
countryName.innerText = country.name;
countryDesc.appendChild(countryName);
let table = document.createElement("table");
countryDesc.appendChild(table);
// row
let row1 = document.createElement("tr");
let th1 = document.createElement("th");
th1.innerText = "Name";
let th2 = document.createElement("th");
th2.innerText = "Description";
row1.appendChild(th1);
row1.appendChild(th2);

let row2 = document.createElement("tr");
let td1 = document.createElement("td");
td1.innerText = "Country Name";
let td2 = document.createElement("td");
td2.innerText = country.name;
row2.appendChild(td1);
row2.appendChild(td2);

let row3 = document.createElement("tr");
let td3 = document.createElement("td");
td3.innerText = "Capital";
let td4 = document.createElement("td");
td4.innerText = country.capital;
row3.appendChild(td3);
row3.appendChild(td4);

let row4 = document.createElement("tr");
let td5 = document.createElement("td");
td5.innerText = "Language";
let td6 = document.createElement("td");
td6.innerText = country.language;
row4.appendChild(td5);
row4.appendChild(td6);

let row5 = document.createElement("tr");
let td7 = document.createElement("td");
td7.innerText = "Region";
let td8 = document.createElement("td");
td8.innerText = country.region;
row5.appendChild(td7);
row5.appendChild(td8);

let row6 = document.createElement("tr");
let td9 = document.createElement("td");
td9.innerText = "Sub-Region";
let td10 = document.createElement("td");
td10.innerText = country.subregion;
row6.appendChild(td9);
row6.appendChild(td10);

let row7 = document.createElement("tr");
let td11 = document.createElement("td");
td11.innerText = "Regional Blocs";
let td12 = document.createElement("td");
td12.innerText = country.regionlaBloc;
row7.appendChild(td11);
row7.appendChild(td12);

let row8 = document.createElement("tr");
let td13 = document.createElement("td");
td13.innerText = "Population";
let td14 = document.createElement("td");
td14.innerText = `${country.population} people`;
row8.appendChild(td13);
row8.appendChild(td14);

let row9 = document.createElement("tr");
let td15 = document.createElement("td");
td15.innerText = "Demonym";
let td16 = document.createElement("td");
td16.innerText = country.demonym;
row9.appendChild(td15);
row9.appendChild(td16);

let row10 = document.createElement("tr");
let td17 = document.createElement("td");
td17.innerText = "Area";
let td18 = document.createElement("td");
td18.innerText = `${country.area} sq.km`;
row10.appendChild(td17);
row10.appendChild(td18);

let row11 = document.createElement("tr");
let td19 = document.createElement("td");
td19.innerText = "Timezone";
let td20 = document.createElement("td");
td20.innerText = country.timezone;
row11.appendChild(td19);
row11.appendChild(td20);

let row12 = document.createElement("tr");
let td21 = document.createElement("td");
td21.innerText = "Currencies";
let td23 = document.createElement("td");
td23.innerText = `Code: ${country.currenciesCode}, Name: ${country.currencies}`; 
row12.appendChild(td21);
row12.appendChild(td23);

let row13 = document.createElement("tr");
let td24 = document.createElement("td");
td24.innerText = "Calling Code";
let td25 = document.createElement("td");
td25.innerText = country.callingCode;
row13.appendChild(td24);
row13.appendChild(td25);

table.appendChild(row1)
table.appendChild(row2)
table.appendChild(row3)
table.appendChild(row4)
table.appendChild(row5)
table.appendChild(row6)
table.appendChild(row7)
table.appendChild(row8)
table.appendChild(row9)
table.appendChild(row10)
table.appendChild(row11)
table.appendChild(row12)
table.appendChild(row13)

}

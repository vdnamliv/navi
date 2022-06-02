
fetch('https://corona.lmao.ninja/v2/countries/vietnam')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("mot").innerHTML = data.active;
  document.getElementById("hai").innerHTML = data.recovered;
  document.getElementById("ba").innerHTML = data.deaths;
  document.getElementById("bon").innerHTML = data.cases;
  document.getElementById("nam").innerHTML = data.critical;
  document.getElementById("sau").innerHTML =  data.tests;

});

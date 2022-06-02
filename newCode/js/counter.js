fetch('https://corona.lmao.ninja/v2/countries/vietnam')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("mot").innerHTML = data.cases;
  document.getElementById("hai").innerHTML = data.deaths;
  document.getElementById("ba").innerHTML = data.recovered;

});

//its for DOM Manipulation forcasts.js is for manipulating APIS
const cityform=document.querySelector('form');

const card=document.querySelector('.card');
const details=document.querySelector('.details');

 const updateUI=(data)=>{
  const cityDets=data.cityDets;
  const weather=data.weather;
  //update details template
  details.innerHTML=`
  <h5 class="my-3">${cityDets.EnglishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  `
  ;
  //remove the d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.add('d-block');
  }
 }

const updateCity=async(city)=>{
// console.log(city);
const cityDets=await getCity(city);
//getcity is an Asynchronous function therefore it returns a promise
//we have to wait till we get cityDets
const weather=await getWeather(cityDets.Key);
//getWeather getCity is being called from forecast.js cause that files call these functions
return {
    // cityDets:cityDets,
    // weather:weather
    cityDets,
    weather
    //We can do this when propertyname is same as value
    
};


};

cityform.addEventListener('submit',e=>{
    
e.preventDefault();
//getCityValue
const city=cityform.city.value.trim();
cityform.reset();

//Update UI with new City
updateCity(city)
//when the promise resolves we update it 
.then(data=>updateUI(data))
.catch(err=>console.log(err));


});
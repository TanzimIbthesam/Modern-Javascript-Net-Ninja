//its for DOM Manipulation forcasts.js is for manipulating APIS
const cityform=document.querySelector('form');
// console.log(cityform);

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
.then(data=>console.log(data))
.catch(err=>console.log(err));


});
const key='ttGm9sJEfyHqAjypZyNGuH5Xhiwy5QAz';
//Get weather information
//id is a location id
const getWeather=async(id)=>{
//base here will be the city URL
const base='http://dataservice.accuweather.com/currentconditions/v1/';
const query=`${id}?apikey=${key}`;
const response=await fetch(base + query);
//ftech returns a promise
const data=await response.json();
// return data[0];
return data[0];

};

//Get city information
const getCity = async (city) =>{
//its a async function since it will return us promises
const base='http://dataservice.accuweather.com/locations/v1/cities/search';
//base point of the city url that we are going a request to
const query=`?apikey=${key}&q=${city}`;
//when we see question marks it means we are adding query parameteres to end of URLs
//we need to comine base and query and need to fetch the results

const response=await fetch(base + query);
//ftech returns a promise
const data=await response.json();
return data[0];

};
//first we get City we are getting the data then we are getting weather passing the key in weather
//This data is passed into a callback function inside which we can do something
getCity('Manchester')
.then(data=>{
return getWeather(data.Key)
//it returns a promise we can chain these things together
}).then(data=>{
    console.log(data);
    //data we get from weather API
}).catch(data=>console.log(err));


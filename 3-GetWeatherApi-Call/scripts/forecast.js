const key='ttGm9sJEfyHqAjypZyNGuH5Xhiwy5QAz';
//Here we need to make requests of current conditions of city
//We get a code we put that code directly in resource url
const getCity = async (city) =>{
//its a async function since it will return us promises
const base='http://dataservice.accuweather.com/locations/v1/cities/search';
//base point of the company url that we are going a request to
const query=`?apikey=${key}&q=${city}`;
//when we see question marks it means we are adding query parameteres to end of URLs
//we need to comine base and query and need to fetch the results

const response=await fetch(base + query);
//ftech returns a promise
const data=await response.json();
return data[0];

}

getCity('Manchester')
.then(data=>console.log(data))
.catch(data=>console.log(err));
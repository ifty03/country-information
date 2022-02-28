/* const callCovidInfo = ()=>{
    fetch('https://api.covid19api.com/summary')
.then((res)=>res.json())
.then(data=>displayCovid(data.Countries))
}


const displayCovid = (Countries)=>{
 Countries.forEach(countrie=>console.log(countrie.Country));

} */


fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then(data=>displayCountries(data))

const displayCountries = (countries)=>{
    const container = document.getElementById("container");
countries.forEach(countrie=>{
    // console.log(countrie)
const div = document.createElement("div");
div.innerHTML=`
<div class=" max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
<a href="#">
    <img class="rounded-t-lg" src="${countrie.flags.svg}" alt="" />
</a>
<div class="p-5">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${countrie.name.common}</h5>
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${countrie.name.official}</h5>

    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Capital: ${countrie.capital}</p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">area: ${countrie.area}</p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">borders: ${countrie.borders}</p>
    <a href="#" onclick="callCovidInfo('${countrie.name.common}')" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-700">
        Read more
        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div>
</div>
`
container.appendChild(div);
})
}


const callCovidInfo = (name)=>{
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((res)=>res.json())
    .then(data=>covid(data))
}
const covid=(countries)=>{
const desh = countries[0];
console.log(desh)
const update = document.getElementById("update");
update.textContent="";
const div = document.createElement("div");
div.innerHTML=`
<div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
<!-- Card body - inner wrapper -->
<div class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
  <!-- Card title and subtitle -->
  <div class="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
    <h3 class="text-xl text-pink-700" id="contry">${desh.name.common}</h3>
    <p id="capital" class="mb-0 mt-3 text-grey-dark text-sm italic text-pink-700">Moscow - Russia</p>
    <hr class="w-1/4 md:ml-0 mt-4  border lg:hidden">
  </div>
  <!-- ./Card title and subtitle -->
  
  <!-- Card description -->
  <div class="w-full lg:w-3/5 lg:px-3">
      <h2 class="text-xl text-pink-700">${desh.name.official}</h2>
    <ul>
    <li>Capital: ${desh.capital}</li>
    <li>Population: ${desh.population}</li>
    <li>Area ${desh.area}</li>
    <li>Border: ${desh.borders}</li>
    <li>Map: ${desh.maps.googleMaps}</li>
    </ul>
  </div>
  <!-- ./Card description -->
  
  <!-- Call to action button -->
  <div class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
    <button id="btn" class=" text-white rounded-lg w-1/3 lg:w-full hover:bg-pink-700 bg-pink-500">Detils</button>
  </div>
  <!-- ./Call to action button -->
</div>
<!-- ./Card body - inner wrapper -->
</div>
`
update.appendChild(div);

}
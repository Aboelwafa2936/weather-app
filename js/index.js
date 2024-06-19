"use strict"

let searchInput = document.querySelector('#search');
let displayTomorrow = document.getElementById('displayTomorrow');
let displayOvermorrow = document.getElementById('displayOvermorrow');
let backToday = document.getElementById('backToday');
// cities in side bar variables
let Birmingham = document.getElementById('Birmingham');
let Manchester = document.getElementById('Manchester');
let NewYork = document.getElementById('NewYork');
let California = document.getElementById('California');

let dateToday = document.querySelector('.dateToday');
let dateTomorrow = document.querySelector('.dateTomorrow');
let dateOvermorrow = document.querySelector('.dateOvermorrow');

// Constants for day and month names
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Get current date information
let now = new Date();
let days = now.getDay(); // Current day index (0-6)
let months = now.getMonth(); // Current month index (0-11)

// Calculate tomorrow and day after tomorrow dates
let tomorrowDate = new Date(now);
tomorrowDate.setDate(now.getDate() + 1);
let overmorrowDate = new Date(now);
overmorrowDate.setDate(now.getDate() + 2);

// Update HTML elements with formatted dates
document.getElementById('tomorrow').innerHTML = `${dayNames[tomorrowDate.getDay()]}, ${tomorrowDate.getDate()} ${monthNames[tomorrowDate.getMonth()]}`;
document.getElementById('overmorrow').innerHTML = `${dayNames[overmorrowDate.getDay()]}, ${overmorrowDate.getDate()} ${monthNames[overmorrowDate.getMonth()]}`;

// Set today's date on top of each card
document.getElementById('today').innerHTML = `${dayNames[days]}`;
dateToday.innerHTML = `${now.getDate()} ${monthNames[months]}`;

// function to determin the language
function isArabic(text) {
    const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
    return arabicRegex.test(text);
}
// changing the background image by the changing in the weather condition
function changeBackground(condition){
    let body = document.querySelector("body");
    let sideBarText = "";
    let imageUrl = "";
    let textColor = "";
    let searchInput = document.getElementById('search');
    let navbarBrand = document.querySelector(".navbar-brand");
    let navLinks = document.querySelectorAll(".nav-link"); 
    let togglerIcons = document.querySelectorAll('.toggler-icon');    
    switch (condition.trim().toLowerCase()) {
        case "sunny":
        case "مشمس":    
            imageUrl = "sunny.jpg";
            textColor = "#000";
            sideBarText = "#000";
            searchInput.classList.add('black-placeholder');
            searchInput.classList.remove('white-placeholder');
            navbarBrand.style.color = textColor;
            navLinks.forEach(link => {
                link.style.color = textColor;
            });
            togglerIcons.forEach(togglerIcon => {
                togglerIcon.style.backgroundColor = textColor;
            });
            break;
        case "heavy rain":
        case "أمطار شديدة":
            imageUrl = "heavy.png";
            textColor = "#fff";
            sideBarText = "#fff";
            searchInput.classList.remove('black-placeholder');
            searchInput.classList.add('white-placeholder');
            navbarBrand.style.color = textColor;
            navLinks.forEach(link => {
                link.style.color = textColor;
            }); 
            togglerIcons.forEach(togglerIcon => {
                togglerIcon.style.backgroundColor = textColor;
            });
            break;
        case "light rain":
        case "أمطار خفيفة":
            imageUrl = "light.jpg";
            textColor = "#fff";
            sideBarText = "#fff";
            searchInput.classList.remove('black-placeholder');
            searchInput.classList.add('white-placeholder');
            navbarBrand.style.color = textColor;
            navLinks.forEach(link => {
                link.style.color = textColor;
            }); 
            togglerIcons.forEach(togglerIcon => {
                togglerIcon.style.cobackgroundColorlor = textColor;
            });
            break;    
        case "partly cloudy":
        case "غائم جزئياً":
            imageUrl = "partly.jpg";
            textColor = "#000";
            sideBarText = "#000";
            searchInput.classList.add('black-placeholder');
            searchInput.classList.remove('white-placeholder');
            navbarBrand.style.color = textColor;
            navLinks.forEach(link => {
                link.style.color = textColor;
            }); 
            togglerIcons.forEach(togglerIcon => {
                togglerIcon.style.backgroundColor = textColor;
            });
            break;
        case "patchy rain nearby":
        case "أمطار متفاوتة قريبة":
            imageUrl = "nearby.jpg";
            textColor = "#fff";
            sideBarText = "#fff";
            searchInput.classList.remove('black-placeholder');
            searchInput.classList.add('white-placeholder');
            navbarBrand.style.color = textColor;
            navLinks.forEach(link => {
                link.style.color = textColor;
            }); 
            togglerIcons.forEach(togglerIcon => {
                togglerIcon.style.backgroundColor = textColor;
            });
            break;
        case "fog":
        case "ضباب":
            imageUrl = "fog.jpg";
            textColor = "#fff";
            sideBarText = "#fff";
            searchInput.classList.remove('black-placeholder');
            searchInput.classList.add('white-placeholder');
            navbarBrand.style.color = textColor;
            navLinks.forEach(link => {
                link.style.color = textColor;
            }); 
            togglerIcons.forEach(togglerIcon => {
                togglerIcon.style.backgroundColor = textColor;
            });
            break;    
        case "clear":
        case "صافي":
            imageUrl = "clear.jpg";
            textColor = "#fff";
            sideBarText = "#fff";
            searchInput.classList.remove('black-placeholder');
            searchInput.classList.add('white-placeholder');
            navbarBrand.style.color = textColor;
            navLinks.forEach(link => {
                link.style.color = textColor;
            }); 
            togglerIcons.forEach(togglerIcon => {
                togglerIcon.style.backgroundColor = textColor;
            });
            break;
        case "overcast":
        case "ملبَد بالغيوم":
            imageUrl = "overcast.jpg";
            textColor = "#fff";
            sideBarText = "#fff";
            searchInput.classList.remove('black-placeholder');
            searchInput.classList.add('white-placeholder');
            navbarBrand.style.color = textColor;
            navLinks.forEach(link => {
                link.style.color = textColor;
            });
            togglerIcons.forEach(togglerIcon => {
                togglerIcon.style.backgroundColor = textColor;
            });
            break
        case "late rain":
        case "مطر متأخر":
            imageUrl = "late.jpg";
            break;
        case "light rain shower":
        case "أمطار معتدلة":
            imageUrl = "shower.jpg";
            textColor = "#fff";
            sideBarText = "#fff";
            searchInput.classList.remove('black-placeholder');
            searchInput.classList.add('white-placeholder');
            navbarBrand.style.color = textColor;
            navLinks.forEach(link => {
                link.style.color = textColor;
            });
            togglerIcons.forEach(togglerIcon => {
                togglerIcon.style.backgroundColor = textColor;
            });
            break;
        case "patchy light rain with thunder":
        case "مطر خفيف متفرق مع رعد":
            imageUrl = "OIP.jpeg";
            textColor = "#fff";
            sideBarText = "#fff";
            searchInput.classList.remove('black-placeholder');
            searchInput.classList.add('white-placeholder');
            navbarBrand.style.color = textColor;
            navLinks.forEach(link => {
                link.style.color = textColor;
            });
            togglerIcons.forEach(togglerIcon => {
                togglerIcon.style.backgroundColor = textColor;
            });
            break;
        case "cloudy":
        case "غائم":
            imageUrl = "cloudy.jpg"
            textColor = "#000";
            sideBarText = "#000";
            searchInput.classList.add('black-placeholder');
            searchInput.classList.remove('white-placeholder');
            navbarBrand.style.color = textColor;
            navLinks.forEach(link => {
                link.style.color = textColor;
            });
            togglerIcons.forEach(togglerIcon => {
                togglerIcon.style.backgroundColor = textColor;
            });
            break;
        case "mist":
        case "ضباب خفيف":
            imageUrl = "mist.jpg"
            textColor = "#000";
            sideBarText = "#000";
            searchInput.classList.add('black-placeholder');
            searchInput.classList.remove('white-placeholder');
            navbarBrand.style.color = textColor;
            navLinks.forEach(link => {
                link.style.color = textColor;
            });
            togglerIcons.forEach(togglerIcon => {
                togglerIcon.style.backgroundColor = textColor;
            });
            break;   
        case "moderate rain":
        case "أمطار متوسطة الشدة":
            imageUrl = "moderate.png"
            textColor = "#000";
            sideBarText = "#000";
            searchInput.classList.add('black-placeholder');
            searchInput.classList.remove('white-placeholder');
            navbarBrand.style.color = textColor;
            navLinks.forEach(link => {
                link.style.color = textColor;
            });
            togglerIcons.forEach(togglerIcon => {
                togglerIcon.style.backgroundColor = textColor;
            });
            break;
        case "heavy snow":
        case "ثلوج كثيفة":
            imageUrl = "wp6858559-snow-anime-city-wallpapers.jpg"
            textColor = "#000";
            sideBarText = "#000";
            searchInput.classList.add('black-placeholder');
            searchInput.classList.remove('white-placeholder');
            navbarBrand.style.color = textColor;
            navLinks.forEach(link => {
                link.style.color = textColor;
            });
            togglerIcons.forEach(togglerIcon => {
                togglerIcon.style.backgroundColor = textColor;
            });
            break;
        case "light snow showers":
        case "زخات ثلج خفيفة":
            imageUrl = "wp6858457-snow-anime-city-wallpapers.jpg"
            textColor = "#000";
            sideBarText = "#000";
            searchInput.classList.add('black-placeholder');
            searchInput.classList.remove('white-placeholder');
            navbarBrand.style.color = textColor;
            navLinks.forEach(link => {
                link.style.color = textColor;
            });
            togglerIcons.forEach(togglerIcon => {
                togglerIcon.style.backgroundColor = textColor;
            });
            break;                 
        case "moderate snow":
        case "ثلوج معتدلة":
            imageUrl = "wp6858472-snow-anime-city-wallpapers.png"
            textColor = "#000";
            sideBarText = "#000";
            searchInput.classList.add('black-placeholder');
            searchInput.classList.remove('white-placeholder');
            navbarBrand.style.color = textColor;
            navLinks.forEach(link => {
                link.style.color = textColor;
            });
            togglerIcons.forEach(togglerIcon => {
                togglerIcon.style.backgroundColor = textColor;
            });
            break;                                                  
        default:
            imageUrl = "1920x1200-px-anime-digital-art-dragon-fantasy-art-sky-1108189-wallhere.com.jpg"
            textColor = "#000";
            sideBarText = "#000";
            searchInput.classList.add('black-placeholder');
            searchInput.classList.remove('white-placeholder');
            navbarBrand.style.color = textColor;
            navLinks.forEach(link => {
                link.style.color = textColor;
            });
            togglerIcons.forEach(togglerIcon => {
                togglerIcon.style.backgroundColor = textColor;
            });
            break; 
    }
    sideBarText = document.querySelector(".side-bar").style.color;
    body.style.backgroundImage = `url(images/${imageUrl})`;
    body.style.color = `${textColor}`;
    
};
// function for fetching weather api
async function fetchingApi(randumCity){
    const lang = isArabic(randumCity) ? 'ar' : 'en';
    const weatherApi = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=22700461641744a08ad110858241506&q=${randumCity.trim().toLowerCase()}&days=3&lang=${lang}`);
    if(weatherApi.status == 200){
        let weatherData = await weatherApi.json();
        console.log(weatherData);
        const location = weatherData.location.name;
        console.log(location);
        console.log(randumCity.trim().toLowerCase());
    // setting today's weather for current region
    const userRegionTodayTemp = weatherData.current.temp_c;
    const userRegionTodayIcon =  weatherData.current.condition.icon;
    const userRegionTodayCondition = weatherData.current.condition.text;;       
    // setting tomorrow's weather for current region
    const  userRegionTomorrowMaxTemp = weatherData.forecast.forecastday[1].day.maxtemp_c;
    const userRegionTomorrowIcon =  weatherData.forecast.forecastday[1].day.condition.icon;
    const userRegionTomorrowCondition = weatherData.forecast.forecastday[1].day.condition.text;
    // setting the day after tomorrow's weather for current region
    const userRegionOvermorrowCondition = weatherData.forecast.forecastday[2].day.condition.text;
    const  userRegionOvermorrowMaxTemp = weatherData.forecast.forecastday[2].day.maxtemp_c;
    const userRegionOvermorrowIcon =  weatherData.forecast.forecastday[2].day.condition.icon;
    // setting today's weather details side-bar
    const userRegionTodaypressure = weatherData.current.pressure_in; 
    const userRegionTodayhumidity = weatherData.current.humidity;
    const userRegionTodaywind = weatherData.current.wind_kph; 
    // setting tomorrow's weather details side-bar
    const userRegionTomorrowpressure = weatherData.forecast.forecastday[1].day.totalprecip_in; 
    const userRegionTomorrowhumidity = weatherData.forecast.forecastday[1].day.avghumidity;
    const userRegionTomorrowwind = weatherData.forecast.forecastday[1].day.maxwind_kph; 
    // setting overmorrow's weather details side-bar
    const userRegionOvermorrowdaypressure = weatherData.forecast.forecastday[2].day.totalprecip_in; 
    const userRegionOvermorrowdayhumidity = weatherData.forecast.forecastday[2].day.avghumidity;
    const userRegionOvermorrowdaywind = weatherData.forecast.forecastday[2].day.maxwind_kph; 
    changeBackground(userRegionTodayCondition);
    // display user's region info in the card
    const cities =document.querySelectorAll('.city');
    for(let city of cities){
        city.innerHTML = location.slice(0, 10);
        city.setAttribute("title", location);
    }
    document.getElementById('temp').innerHTML = `${userRegionTodayTemp} <strong><sup>o</sup>C</strong>`;
    document.getElementById('condition').innerHTML = userRegionTodayCondition;
    document.getElementById('todayIcon').setAttribute('src', `https:${userRegionTodayIcon}`);
    // document.getElementById('tomorrowMinTemp').innerHTML = `${userRegionTomorrowMinTemp} <sup>o</sup>C`;
    document.getElementById('tomorrowMaxTemp').innerHTML = `${userRegionTomorrowMaxTemp} <strong><sup>o</sup>C</strong>`;
    document.getElementById('tomorrowIcon').setAttribute('src', `https:${userRegionTomorrowIcon}`)
    document.getElementById('tomorrowCondition').innerHTML = userRegionTomorrowCondition;
    // document.getElementById('overmorrowMinTemp').innerHTML = `${userRegionOvermorrowMinTemp} <sup>o</sup>C`;
    document.getElementById('overmorrowMaxTemp').innerHTML = `${userRegionOvermorrowMaxTemp} <strong><sup>o</sup>C</strong>`;
    document.getElementById('overmorrowIcon').setAttribute('src', `https:${userRegionOvermorrowIcon}`)
    document.getElementById('overmorrowCondition').innerHTML = userRegionOvermorrowCondition;
    // display weather details for today in the side-bar
    document.getElementById('pressureStatus').innerHTML = `${userRegionTodaypressure} inHg`;
    document.getElementById('humidityStatus').innerHTML = `${userRegionTodayhumidity} %`;
    document.getElementById('windStatus').innerHTML = `${userRegionTodaywind} km/h`; 
    // display the weather of tomorrow
    displayTomorrow.addEventListener('click',function(){
        document.getElementById('tomorrowCard').classList.remove('d-none');
        document.getElementById('todayCard').classList.add('d-none');
        document.getElementById('overmorrowCard').classList.add('d-none');
        document.getElementById('pressureStatus').innerHTML = `${userRegionTomorrowpressure} inHg`;
        document.getElementById('humidityStatus').innerHTML = `${userRegionTomorrowhumidity} %`;
        document.getElementById('windStatus').innerHTML = `${userRegionTomorrowwind} km/h`;
        changeBackground(userRegionTomorrowCondition);
        backToday.classList.remove('d-none');
    });
    // displaty the weather of the day after tomorrow
    displayOvermorrow.addEventListener('click',function(){
        document.getElementById('tomorrowCard').classList.add('d-none');
        document.getElementById('todayCard').classList.add('d-none');
        document.getElementById('overmorrowCard').classList.remove('d-none');
        document.getElementById('pressureStatus').innerHTML = `${userRegionOvermorrowdaypressure} inHg`;
        document.getElementById('humidityStatus').innerHTML = `${userRegionOvermorrowdayhumidity} %`;
        document.getElementById('windStatus').innerHTML = `${userRegionOvermorrowdaywind} km/h`;
        changeBackground(userRegionOvermorrowCondition);
        backToday.classList.remove('d-none');
    });
    // displaty the weather of today
    backToday.addEventListener('click', function(){
        document.getElementById('tomorrowCard').classList.add('d-none');
        document.getElementById('todayCard').classList.remove('d-none');
        document.getElementById('overmorrowCard').classList.add('d-none');
        document.getElementById('pressureStatus').innerHTML = `${userRegionTodaypressure} inHg`;
        document.getElementById('humidityStatus').innerHTML = `${userRegionTodayhumidity} %`;
        document.getElementById('windStatus').innerHTML = `${userRegionTodaywind} km/h`;
        changeBackground(userRegionTodayCondition);
        backToday.classList.add('d-none');
    });
    }
    
}
// Birmingham
Birmingham.addEventListener('click', ()=>{
    fetchingApi("Birmingham");
});

// Manchester
Manchester.addEventListener('click', ()=>{
    fetchingApi("Manchester");
});

// New York
NewYork.addEventListener('click', ()=>{
    fetchingApi("New York");
});

// California
California.addEventListener('click', ()=>{
    fetchingApi("California");
});

// getting user's location info
if(GeolocationPosition){
    navigator.geolocation.getCurrentPosition(
        async position=>{
            const {latitude, longitude} = position.coords;
            const reverseGeo = ` https://api-bdc.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&locality`;
            const response = await fetch(reverseGeo);
            const userData= await response.json(); //userData.city
            console.log(userData.city);
            fetchingApi(userData.city);
        }
    )
}
searchInput.addEventListener('input', async (event) => {
    const searchedText = event.target.value.trim(); // Trim to remove extra spaces
        fetchingApi(searchedText); // Fetch weather data for entered city
});





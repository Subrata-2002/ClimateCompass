const cityName = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const Today_Date = document.getElementById("today_date");
const Temp = document.getElementById("temp_val");

const Day = document.getElementById("day");

const submit_btn = document.getElementById("submit_btn");

const getInfo = async(event)=>{

    event.preventDefault();//it is use for not reloading the server
    let cityVal = cityName.value;
    
    
    if(cityVal === ""){
        city_name.innerText ="Please write the city name before search";
        
    }
    else{
        try{

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=065be91e00464c3cc741d5ecdd6520fa&units=metric`;
            const response = await fetch(url);
            
            const data = await response.json();
            
            city_name.innerText = data.name;
            Temp.innerText = data.main.temp;
            // Temp.innerText = data.weather[0].main;

            
            const getCurrentDay = () => {
                let currentTime = new Date(); // here we create an instance of date()
                const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                // console.log(weekday[currentTime.getDay()]);
                const dayname = weekday[currentTime.getDay()]
                return dayname;
            }
            const getCurrentTime = () => {
                let now = new Date();
                
                const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
                var month = monthName[now.getMonth()];
                var date = now.getDate();

                 return ` ${date} ${month}`;
            }

            Day.innerText = getCurrentDay();
            Today_Date.innerText = getCurrentTime();

            console.log(data.main.temp);
        }catch{
        city_name.innerText ="Please write the city name properly";

        }
        
    }

}
submit_btn.addEventListener("click",getInfo)
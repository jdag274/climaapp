import React from "react";
import weatherInfo from "./style/weatherInfo.css";

const WeatherInfo = props => {

    console.log(props)

  

    return (
      <div className="props_info"> 
                 {
                     props.error && 
                        <div className="alert alert-danger">
                             <p>{props.error}</p>
                        </div>
                }
                {
                    props.temperature>0 ? 
                    <div className="card card-body">
           <p>
               Location: {props.city}, {props.country} 
           </p>
           <p>
               Temperature: {props.temperature}°C {props.description} 
           </p>
           <p>
               Humidity: {props.humidity}%
           </p>      
        </div>
        :
        <div>
        </div>
                }

        {
            props.temparature<0 ?
            <div className="card card-body">
            <p>
                Location: {props.city}, {props.country} 
            </p>
            <p>
                Temperature: {props.temperature}°C {props.description} 
            </p>
            <p>
                Humidity: {props.humidity}%
            </p>      
         </div>
         :
         <div>
         </div>

        }
            
    </div> 
        
    )
   

}


export default WeatherInfo;
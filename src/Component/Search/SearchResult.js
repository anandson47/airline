import React from "react";
import "./SearchResult.css";
import flightNo from "./FlightNo.png"

const SearchResult = (props) => {
    return (
        <div class="search-card">
            <article id={props.flightNumber} class="card-search center w-90 br3 hidden ba b--black-100 mv2">
                <div class="pa3">
                    <div className="pnrNo">
                        {props.pnrNo ? "PNR: "+props.pnrNo : ""}
                    </div>
                    <div class="cf" >
                        <div class="fl w-30 w-10-l tc pt2 " >
                            <h4>{props.departureTime}<br/></h4>
                            <p>{props.departureAirport}</p>
                        </div>
                        <div class="fl w-0 w-20-l dn dib-ns tc pt2 " >
                           <p>-----{props.totalTime}-----></p>
                        </div>
                        <div class="fl w-30 w-10-l tc pt2 " > 
                            <h4>{props.arrivalTime}</h4>
                            <p>{props.arrivalAirport}</p>
                        </div>
                        <div class="fl w-20 w-20-l dn dib-ns tc pt2 " >
                          <img src="/assets/images/FlightNo.png" alt="flight No:" className="flightNo"/><p>{props.flightNumber}</p>  
                        </div>
                        <div class="fl fw5 w-20 w-20-l tc pt2 " >
                            Non-Stop
                        </div>
                        <div class="fl fw6 h3 w-20 w-20-l tc pt2 " >
                            {props.totalFare}
                        </div>
                        <div className="tr">
                            
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default SearchResult;
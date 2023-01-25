import React, { useEffect } from "react";
import "tachyons";
import "./HomePage.css"
import { useState } from "react";
import Select from 'react-select'
import Login from "../Login/login";
import Register from "../Login/Register";
import CheckInForm from "../CheckIn/CheckInForm";
import { toast, ToastContainer } from "react-toastify"
import { logoutUser } from "../../Service/AuthService";
import { useNavigate } from "react-router";
const HomePage = (props) => {

    const navigate=useNavigate()

    const options = [
        {

            value: "Agatti Island Airport",
            label: "Agatti Island"
        },
        {

            value: "Ahmedabad Airport",
            label: "Ahmedabad"
        },
        {

            value: "Aizawl Airport",
            label: "Aizawl"
        },
        {

            value: "Akola Airport",
            label: "Akola"
        },
        {

            value: "Along Airport",
            label: "Along"
        },
        {

            value: "Amausi Airport",
            label: "Lucknow"
        },
        {

            value: "Amritsar Airport",
            label: "Ludhiana"
        },
        {

            value: "Bagdogra Airport",
            label: "Bagdogra"
        },
        {

            value: "Bajpe Airport",
            label: "Mangalore"
        },
        {

            value: "Bakula Rimpoche Airport",
            label: "Leh"
        },
        {

            value: "Balurghat Airport",
            label: "Balurghat"
        },
        {

            value: "Bamrauli Airport",
            label: "Allahabad"
        },
        {

            value: "Barapani Airport",
            label: "Shillong"
        },
        {

            value: "Bareli Airport",
            label: "Bareli"
        },
        {

            value: "Bellary Airport",
            label: "Bellary"
        },
        {

            value: "Bengaluru International Airport",
            label: "Bangalore"
        },
        {

            value: "Bhatinda Airport",
            label: "Bhatinda"
        },
        {

            value: "Bhavnagar Airport",
            label: "Bhavnagar"
        },
        {

            value: "Bhopal Airport",
            label: "Bhopal"
        },
        {

            value: "Bhubaneswar Airport",
            label: "Bhubaneswar"
        },
        {

            value: "Bikaner Airport",
            label: "Bikaner"
        },
        {

            value: "Bilaspur Airport",
            label: "Bilaspur"
        },
        {

            value: "Birsa Munda International Airport",
            label: "Ranchi"
        },
        {

            value: "Borjhar Airport",
            label: "Guwahati"
        },
        {

            value: "Car Nicobar Airport",
            label: "Car Nicobar"
        },
        {

            value: "Chandigarh Airport",
            label: "Chandigarh"
        },
        {

            value: "Chennai International Airport",
            label: "Chennai"
        },
        {

            value: "Chhatrapati Shivaji International Airport",
            label: "Mumbai"
        },
        {

            value: "Chikkalthana Airport",
            label: "Aurangabad"
        },
        {

            value: "Cochin International Airport",
            label: "Kochi"
        },
        {

            value: "Cooch Behar Airport",
            label: "Cooch Behar"
        },
        {

            value: "Cuddapah Airport",
            label: "Cuddapah"
        },
        {

            value: "Dabok Airport",
            label: "Udaipur"
        },
        {

            value: "Dabolim Airport",
            label: "Goa"
        },
        {

            value: "Daman Airport",
            label: "Daman"
        },
        {

            value: "Daparizo Airport",
            label: "Daparizo"
        },
        {
            "value": "Darjeeling Airport",
            label: "Darjeeling"
        }, {

            value: "Dehra Dun Airport",
            label: "Dehra Dun"
        },
        {
            "value": "Deparizo Airport",
            label: "Deparizo"
        }, {

            value: "Devi Ahilyabai Holkar Airport",
            label: "Indore"
        },
        {

            value: "Dhanbad Airport",
            label: "Dhanbad"
        },
        {

            value: "Dibrugarh Airport",
            label: "Dibrugarh"
        },
        {

            value: "Dimapur Airport",
            label: "Dimapur"
        },
        {

            value: "Diu Airport",
            label: "Diu"
        },
        {

            value: "Gaggal Airport",
            label: "Dharamsala"
        },
        {

            value: "Gandhinagar Airport",
            label: "Nasik"
        },
        {

            value: "Gaya Airport",
            label: "Gaya"
        },
        {

            value: "Gorakhpur Airport",
            label: "Gorakhpur"
        },
        {

            value: "Govardhanpur Airport",
            label: "Jamnagar"
        },
        {

            value: "Guna Airport",
            label: "Guna"
        },
        {

            value: "Gwalior Airport",
            label: "Gwalior"
        },
        {

            value: "Hissar Airport",
            label: "Hissar"
        },
        {

            value: "Hubli Airport",
            label: "Hubli"
        },
        {

            value: "Hyderabad International Airport",
            label: "Hyderabad"
        },
        {

            value: "Indira Gandhi International Airport",
            label: "New Delhi"
        },
        {

            value: "Jabalpur Airport",
            label: "Jabalpur"
        },
        {
            "value": "Jagdalpur Airport",
            label: "Jagdalpur"
        }, {

            value: "Jaisalmer Airport",
            label: "Jaisalmer"
        },
        {

            value: "Jeypore Airport",
            label: "Jeypore"
        },
        {

            value: "Jodhpur Airport",
            label: "Jodhpur"
        },
        {

            value: "Kailashahar Airport",
            label: "Kailashahar"
        },
        {

            value: "Kamalpur Airport",
            label: "Kamalpur"
        },
        {

            value: "Kandla Airport",
            label: "Kandla"
        },
        {

            value: "Kanpur Airport",
            label: "Kanpur"
        },
        {

            value: "Keshod Airport",
            label: "Keshod"
        },
        {

            value: "Khajuraho Airport",
            label: "Khajuraho"
        },
        {

            value: "Kheria Airport",
            label: "Agra"
        },
        {

            value: "Khowai Airport",
            label: "Khowai"
        },
        {

            value: "Kolhapur Airport",
            label: "Kolhapur"
        },
        {

            value: "Kota Airport",
            label: "Kota"
        },
        {

            value: "Kozhikode Airport",
            label: "Kozhikode"
        },
        {

            value: "Kullu Manali Airport",
            label: "Bhuntar Kullu."
        },
        {

            value: "Kumbhirgram Airport",
            label: "Silchar"
        },
        {

            value: "Lilabari Airport",
            label: "Lilabari"
        },
        {

            value: "Lohegaon Airport",
            label: "Pune"
        },
        {

            value: "Madurai Airport",
            label: "Madurai"
        },
        {

            value: "Malda Airport",
            label: "Malda"
        },
        {

            value: "Mohanbari Airport",
            label: "Mohanbari"
        },
        {

            value: "Municipal Airport",
            label: "Imphal"
        },
        {
            "value": "Muzaffarnagar Airport",
            label: "Muzaffarnagar"
        }, {

            value: "Muzaffarpur Airport",
            label: "Muzaffarpur"
        },
        {

            value: "Mysore Airport",
            label: "Mysore"
        },
        {

            value: "Nanded Airport",
            label: "Nanded"
        },
        {

            value: "Netaji Subhash Chandra Bose International Airport",
            label: "Kolkata"
        },
        {

            value: "Neyveli Airport",
            label: "Neyveli"
        },
        {
            "value": "Osmanabad Airport",
            label: "Osmanabad"
        }, {

            value: "Pantnagar Airport",
            label: "Pantnagar"
        },
        {

            value: "Pasighat Airport",
            label: "Pasighat"
        },
        {

            value: "Pathankot Airport",
            label: "Pathankot"
        },
        {

            value: "Patna Airport",
            label: "Patna"
        },
        {

            value: "Peelamedu Airport",
            label: "Coimbatore"
        },
        {

            value: "Pondicherry Airport",
            label: "Pondicherry"
        },
        {

            value: "Porbandar Airport",
            label: "Porbandar"
        },
        {

            value: "Port Blair Airport",
            label: "Port Blair"
        },
        {
            "value": "Puttaparthi Airport",
            label: "Puttaparthi"
        }, {

            value: "Raipur Airport",
            label: "Raipur"
        },
        {

            value: "Raja Sansi Airport",
            label: "Amritsar"
        },
        {

            value: "Rajahmundry Airport",
            label: "Rajahmundry"
        },
        {

            value: "Rajkot Airport",
            label: "Rajkot"
        },
        {
            "value": "Rajouri Airport",
            label: "Rajouri"
        }, {
            "value": "Ramagundam Airport",
            label: "Ramagundam"
        }, {

            value: "Ratnagiri Airport",
            label: "Ratnagiri"
        },
        {
            "value": "Rewa Airport",
            label: "Rewa"
        }, {

            value: "Rourkela Airport",
            label: "Rourkela"
        },
        {

            value: "Rowriah Airport",
            label: "Jorhat"
        },
        {

            value: "Rudra Mata Airport",
            label: "Bhuj"
        },
        {

            value: "Rupsi Airport",
            label: "Rupsi"
        },
        {

            value: "Salem Airport",
            label: "Salem"
        },
        {

            value: "Salonibari Airport",
            label: "Tezpur"
        },
        {

            value: "Sambre Airport",
            label: "Belgaum"
        },
        {

            value: "Sanganeer Airport",
            label: "Jaipur"
        },
        {

            value: "Satna Airport",
            label: "Satna"
        },
        {

            value: "Satwari Airport",
            label: "Jammu"
        },
        {

            value: "Sholapur Airport",
            label: "Sholapur"
        },
        {

            value: "Simla Airport",
            label: "Simla"
        },
        {

            value: "Singerbhil Airport",
            label: "Agartala"
        },
        {

            value: "Sonari Airport",
            label: "Jamshedpur"
        },
        {

            value: "Sonegaon Airport",
            label: "Nagpur"
        },
        {

            value: "Srinagar Airport",
            label: "Srinagar"
        },
        {

            value: "Surat Airport",
            label: "Surat"
        },
        {

            value: "Tezu Airport",
            label: "Tezu"
        },
        {

            value: "Thanjavur Airport",
            label: "Thanjavur"
        },
        {

            value: "Thiruvananthapuram International Airport",
            label: "Trivandrum"
        },
        {

            value: "Tirupati Airport",
            label: "Tirupati"
        },
        {

            value: "Trichy Airport",
            label: "Trichy"
        },
        {
            "value": "Tuticorin Airport",
            label: "Tuticorin"
        }, {

            value: "Vadodara Airport",
            label: "Vadodara"
        },
        {

            value: "Varanasi Airport",
            label: "Varanasi"
        },
        {

            value: "Vijayawada Airport",
            label: "Vijayawada"
        },
        {

            value: "Vishakhapatnam Airport",
            label: "Vishakhapatnam"
        },
        {

            value: "Warangal Airport",
            label: "Warangal"
        },
        {

            value: "Zero Airport",
            label: "Zero"
        }
    ]

    const [tripType, setTripType] = useState("One-way");
    const [tripclass, setTripClass] = useState("Economy");
    const [noOfPassengers, setNoOfPassengers] = useState(1);
    const [departure,setDeparture]=useState("")
    const [arrival,setArrival]=useState("")
    const [departureDate,setDepartureDate]=useState("")
    const [arrivalDate,setArrivalDate]=useState("")
    const [search,setSearch]=useState({
                "departureAirport":'',
                "arrivalAirport":"",
                "departureDate":"",
                "returnDate":"",
                "seatClass":"",
                "passengers":0
    })

    const validation=()=>{
        let date=new Date()
        console.log(date.getTime())
        console.log(departureDate)
        if(departureDate==="" || departure==="" || arrival===""){
            console.log(1);
            return false
        }
        if(departure===arrival){
            console.log(3);
            return false
        }
        if(new Date(departureDate).getTime() <= date.getTime()){
            console.log(2);
            return false
        }
        return true
    }

    const departureChange=(e)=>{
        console.log(e.label);
        setDeparture(e.label)
    }

    const arrivalChange=(e)=>{
        console.log(e.label);
        setArrival(e.label)
    }
    const departDateChange=(e)=>{
        setDepartureDate(e.target.value)
        console.log(e.target.value)
    }
    const returnDateChange=(e)=>{
        setArrivalDate(e.target.value)
        console.log(e.target.value)
    }

    const tripTypeHandler = (e) => {
        setTripType(e.target.id);
        if (e.target.id === "One-way") {
            document.getElementById("return").disabled = true;
        }
        else {
            document.getElementById("return").disabled = false;
        }
    }

    const loginHandler = () => {
        console.log(document.getElementById("id01"));
        document.getElementById("id01").style.display = "block";
        document.getElementById("id01").style.position = "aboslute";
        document.getElementById("id01").style.left = "10";
        document.getElementById("id01").style.top = "30";

    }

    const tripClassHandler = (e) => {
        setTripClass(e.target.id);
    }
    const tripSeatHandler = (e) => {
        setNoOfPassengers(e.target.id);
    }

    const SearchHandler= ()=>{
        if(validation()){
            let data={
                "departureAirport":departure,
                "arrivalAirport":arrival,
                "departureDate":departureDate,
                "returnDate":arrivalDate,
                "seatClass":tripclass,
                "passenges":noOfPassengers
            }
            setSearch(data)
            localStorage.setItem("searchDetails",JSON.stringify(data))
            props.setSearchDetails(data)
            navigate("/search")
        }
        else{
            toast.error("Please enter correct details")
        }
        
        
    }

    const logout = () => {

        logoutUser();

        window.location = "/";

    }

    useEffect(() => {
        //On Page Load all Data will be cleared
        const token = localStorage.getItem("token") ? localStorage.getItem("token") : ""
        window.localStorage.clear();
        window.sessionStorage.clear();
        
        if(token && token !== ""){
            window.localStorage.setItem("token", token);
        }
        
    }, [])

    return (
        <div class="background">
            <div class="flightsearch">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="" href="/"><img className="ms-4 navlogo" alt="" src="/assets/images/logo.png" /> <br /><span class="ms-1 logotext">BROWNFIELD</span> </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class=" navbar-list navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="w-50">
                                </li>

                            </ul>
                            {
                                props.login ?
                                    <>
                                        <span className="navbar-text">
                                            <div class="collapse navbar-collapse" id="navbar-list-4" style={{ paddingRight: "40px" }}>

                                                <ul class="navbar-nav">
                                                    <button type="button" class="btn me-2 btn-outline-dark" data-bs-toggle="modal" data-bs-target="#CheckIn">Check In</button>
                                                    <button type="button" className="btn me-2 btn-outline-dark" onClick={() => document.getElementById('footer').scrollIntoView()}>Contact us</button>
                                                    <li class="nav-item dropdown">

                                                        <a class=" nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                                            My Profile

                                                        </a>

                                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                                            <a class="dropdown-item" href="/">Dashboard</a>

                                                            <a class="dropdown-item" href="/UserProfile">View Profile</a>

                                                            <a class="dropdown-item" href="#" onClick={logout}>Log Out</a>

                                                        </div>

                                                    </li>

                                                </ul>

                                            </div>
                                        </span>
                                    </>
                                    :
                                    <>
                                        <span class="navbar-text">
                                            <button type="button" class="btn me-2 btn-outline-dark" data-bs-toggle="modal" data-bs-target="#CheckIn">Check In</button>
                                            <button type="button" className="btn me-2 btn-outline-dark" onClick={() => document.getElementById('footer').scrollIntoView()}>Contact us</button>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn me-2 btn-outline-dark">Login</button>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#Register" class="btn  me-2 btn-outline-dark">Register</button>
                                        </span>
                                    </>
                            }


                        </div>
                    </div>
                </nav>
            </div>

            <article class=" bookcard center w-90 br4  hidden mv4">
                <h1 class="f4 cardtitle br4 br--top tc black-60 mv0 pv2 ph3">Book Now</h1>
                <div class="pa3 bt">
                    <div class="cf">
                        <div class="fl w-100 w-20-ns tl pv1">
                            <div class="firstrow">
                                <div class="">
                                    <div class="w-10  ">
                                        <button class="f5 triptype dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {tripType}
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item" id="One-way" onClick={tripTypeHandler}>One Way</li>
                                            <li class="dropdown-item" id="Round Trip" onClick={tripTypeHandler}>Round Trip</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="ml3">
                                    <div class="" >
                                        <button class="f5 triptype dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {noOfPassengers}
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item" id="1" onClick={tripSeatHandler}>1</li>
                                            <li class="dropdown-item" id="2" onClick={tripSeatHandler}>2</li>
                                            <li class="dropdown-item" id="3" onClick={tripSeatHandler}>3</li>
                                            <li class="dropdown-item" id="4" onClick={tripSeatHandler}>4</li>
                                            <li class="dropdown-item" id="5" onClick={tripSeatHandler}>5</li>
                                            <li class="dropdown-item" id="6" onClick={tripSeatHandler}>6</li>
                                            <li class="dropdown-item" id="7" onClick={tripSeatHandler}>7</li>
                                            <li class="dropdown-item" id="8" onClick={tripSeatHandler}>8</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="w-10 ml3">
                                    <div class="dropdown">
                                        <button class="dropdown-toggle f5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {tripclass}
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item" id="Economy" onClick={tripClassHandler}>Economy</li>
                                            <li class="dropdown-item" id="Business" onClick={tripClassHandler}>Business</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" row2 mt-2 fl w-50-ns w-25-l pr2 tc pv1 ">
                            <img className="departure-image" src="./assets/images/departure.png" alt="" /><br />
                            <Select
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        border: "1px solid #3A0210",
                                    }),
                                    menu: (baseStyles, state) => ({
                                        ...baseStyles,
                                        color: "#3A0210",
                                        borderTop: "2px solid black"
                                    }),
                                    menuList: (baseStyles, state) => ({
                                        ...baseStyles,
                                        height: "30vh",
                                        textAlign: "left"
                                    })

                                }}
                                options={options}
                                onChange={departureChange}
                                 />
                        </div>
                        <div class="row2 mt-2 fl w-50-ns w-25-l pr2 tc pv1 ">
                            <img className="departure-image" src="./assets/images/arrival.png" alt="" /><br />
                            <Select
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        border: "1px solid #3A0210 ",
                                    }),
                                    menu: (baseStyles, state) => ({
                                        ...baseStyles,
                                        color: "#3A0210",

                                    }),
                                    menuList: (baseStyles, state) => ({
                                        ...baseStyles,
                                        height: "30vh",
                                        textAlign: "left"
                                    })
                                }}
                                options={options}
                                onChange={arrivalChange} />
                        </div>
                        <div class="row2  mt-2 fl w-50-ns w-25-l pr2 tc pv1 ">
                            <img src="/assets/images/date.png" className="departure-image" alt="Departure Date" />
                            <input className="dates w-100 tc " id="depart" type="date" value={departureDate} onChange={departDateChange}/>
                        </div>
                        <div class="row2 mt-2 fl w-50-ns w-25-l tc pv1 ">
                            <img src="/assets/images/arrivaldate.png" className="departure-image" alt="Arrival Date" />
                            <input className="dates w-100 tc " disabled id="return" type="date" onChange={returnDateChange}/>

                        </div>
                        <div class="fl mt-2 w-100 w-20-ns tc pv2">
                            <button class="f5 fw6 search grow w-20 ba no-underline ph3 pv2 mb2 dib white " href="#0" onClick={SearchHandler}>Search</button>
                        </div>
                    </div>
                </div>
            </article>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./assets/images/ziro.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/images/portblair.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/images/kochi.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className="mt5 info1">
                <div class=" row2  fl w-50-ns w-25-l pr2 tc ">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="/assets/images/loyalty.jpg" alt="Avatar" style={{ "width": "100%", "height": "100%", }} />
                            </div>
                            <div class="flip-card-back">
                                <p>BROWNFIELD PROVIDES THE BEST PRICES IN THE
                                    MARKET THAT MAKES YOUR JOURNEY BOTH ENJOYABLE
                                    AND AFFORDABLE.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row2 fl w-50-ns w-25-l pr2 tc ">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="/assets/images/icici.png" alt="Avatar" style={{ "width": "100%", "height": "100%", }} />
                            </div>
                            <div class="flip-card-back">
                                <p>BROWNFIELD PROVIDES THE BEST PRICES IN THE
                                    MARKET THAT MAKES YOUR JOURNEY BOTH ENJOYABLE
                                    AND AFFORDABLE.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row2 fl w-50-ns w-25-l pr2 tc">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="/assets/images/hdfc.png" alt="Avatar" style={{ "width": "100%", "height": "100%", }} />
                            </div>
                            <div class="flip-card-back">
                                <p>BROWNFIELD PROVIDES THE BEST PRICES IN THE
                                    MARKET THAT MAKES YOUR JOURNEY BOTH ENJOYABLE
                                    AND AFFORDABLE.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row2 fl w-50-ns w-25-l tc ">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="/assets/images/sbi.jpg" alt="Avatar" style={{ "width": "100%", "height": "100%", }} />
                            </div>
                            <div class="flip-card-back">
                                <p>BROWNFIELD PROVIDES THE BEST PRICES IN THE
                                    MARKET THAT MAKES YOUR JOURNEY BOTH ENJOYABLE
                                    AND AFFORDABLE.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer1" id="footer">
                <footer class="pa4 pa4-l black-70 bt b--black-10">
                    <div class="cf">
                        <h1 class="fl w-100 pv0 f5 f4-l fw6 tracked ">Office Address</h1>
                        <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l pr2 pr0-ns">
                            <h4 class="f5 f4-l fw6">Pune , India</h4>
                            <span class="f7 f6-l db black-70">Brownfield St.</span>
                            <span class="f7 f6-l black-70">Pune, MH 441016 </span>

                            <a class="f6 db fw6 pv3 black-70 link dim" title="Call SF" href="tel:+12075555555">
                                Phone Number: +91 901-988-3456
                            </a>
                        </article>
                    </div>
                    <section class="cf ">
                        <div class=" mb0-ns w-100 w-50-l fr">
                            <a class="black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l" href="mailto:contact@brownfield.com" >
                                contact@brownfield.com
                            </a>
                        </div>
                    </section>
                    <div class="dt dt--fixed w-100" >
                        <div class="dn dtc-ns v-mid">
                            <p class="f7 black-70 dib pr3 mb3">
                                Copyright © Brownfield Airlines
                            </p>
                        </div>
                        <div class="db dtc-ns black-70 tc tr-ns v-mid">
                            <a href="https://www.facebook.com/" class="link dim dib mr3 black-70" title="Impossible Labs on Facebook">
                                <svg class="db w2 h2" data-icon="facebook" viewBox="0 0 32 32" fill="currentColor">
                                    <title >facebook icon</title>
                                    <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://twitter.com/" class="link dim dib mr3 black-70">
                                <svg class="db w2 h2" data-icon="twitter" viewBox="0 0 32 32"
                                    fill="currentColor" >
                                    <title >twitter icon</title>
                                    <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://medium.com/" class="link dim dib mr3 black-70" title="Impossible Labs on Medium">
                                <svg class="db w2 h2" x="0px" y="0px" viewBox="0 0 290 248.6"
                                    fill="currentColor" >
                                    <g >
                                        <path fill="currentColor" class="st0" d="M287.8,46.3L196,0.3c-0.4-0.2-0.9-0.3-1.3-0.3c0,0-0.1,0-0.1,0c-1.1,0-2.2,0.6-2.8,1.5l-56.6,92l63.2,102.7 l90.4-146.9C289.4,48.3,289,46.8,287.8,46.3z"
                                        ></path>
                                        <polygon fill="currentColor" points="105.2,61.2 105.2,160.3 193.3,204.4 	"
                                        ></polygon>
                                        <path fill="currentColor" d="M201,208.2l80.9,40.5c4.4,2.2,8,0,8-5v-180L201,208.2z"
                                        ></path>
                                        <path fill="currentColor" d="M95.5,46.7L10.7,4.3L5.4,1.7C4.6,1.3,3.8,1.1,3.2,1.1c-0.9,0-1.7,0.4-2.3,1.1C0.3,2.8,0,3.8,0,5v193.4 c0,3.3,2.4,7.2,5.4,8.7l83.3,41.6c1.2,0.6,2.3,0.9,3.3,0.9c2.8,0,4.8-2.2,4.8-5.8V48.7C96.7,47.8,96.2,47.1,95.5,46.7z"
                                        ></path>
                                    </g>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/" class="link dim dib black-70">
                                <svg class="db w2 h2" x="0px" y="0px" viewBox="0 0 48 48" >
                                    <linearGradient gradientUnits="userSpaceOnUse" x1="23.9995"
                                        y1="0" x2="23.9995" y2="48.0005" >
                                        <stop offset="0" ></stop>
                                        <stop offset="1" ></stop>
                                    </linearGradient>
                                    <path fill="currentColor" d="M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z"
                                    ></path>
                                    <g >
                                        <g >
                                            <path fill="#FFFFFF" d="M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z"
                                            ></path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="db dn-ns">
                        <p class="f7 black-70 mt4 tc">
                            Copyright © Your Company 2038
                        </p>
                    </div>
                </footer>
            </div>

            <div class="modal" id="exampleModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <button type="button" class="btn-close modal-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="modal-body">
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal" id="Register" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <button type="button" class="btn-close modal-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="modal-body">
                            <Register />
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal" id="CheckIn" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <button type="button" class="btn-close modal-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="modal-body">
                            <CheckInForm />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="dark"
            />
        </div >
    )
}

export default HomePage;
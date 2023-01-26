import logo from './logo.svg';
import './App.css';
import HomePage from './Component/Homepage/Homepage';
import Login from './Component/Login/login';
import Register from './Component/Login/Register';
import Search from './Component/Search/Search';
import SearchResult from './Component/Search/SearchResult';
import Seat from './Component/CheckIn/Seat';
import { useEffect, useState } from 'react';
import CheckInPage from './Component/CheckIn/CheckInPage';
import Passenger from './Component/CheckIn/Passenger';
import TermsAndConditions from './Component/CheckIn/TermsAndConditions';
import {useNavigate} from "react-router-dom"
import CheckInComplete from './Component/CheckIn/CheckInComplete';
import BoardingPass from './Component/CheckIn/BoardingPass';
import BookingComplete from './Component/Booking/BookingComplete';
import FlightTickets from './Component/Booking/FlightTickets';
import Booking from './Component/Booking/Booking';
import UserProfile from './Component/Login/UserProfile';
import Header from './Component/Header/Header';
import Footer  from './Component/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { Routes , Route } from 'react-router-dom';
import { userDetails } from './Service/AuthService';
import HeaderPage from './Component/Header/HeaderPage';

function App() {

  const [searchDetails,setSearchDetails]=useState()
  const [seatsBooked , setSeatsBooked]= useState([1,2,3,4,7,97,24,65, 81, 82,84,85,86,87,88,89,90,170])
  const [passengers , setPassengers]=useState(3)
  const [login,setLogin]=useState(false)
  const [passengerList, setPassengerList]=useState([
    {
      firstName:"anand",
      lastName:"vijay",
      gender:"Male",
      seat:"",
    },
    {
      firstName:"Suraj",
      lastName:"Yadav",
      gender:"Male",
      seat:"",
    },
    {
      firstName:"Pooja",
      lastName:"Mahabare",
      gender:"Female",
      seat:"",
    }
  ])
  const [type , setType]=useState("business")

  const loginHandler=()=>{

  }

  const setSearchDets=(search)=>{
    setSearchDetails(search)
  }
  const CheckinHandler=(passengerlist)=>{
    
     setPassengerList(passengerlist)
  }

  const SearchHandler=()=>{

  }

  const SearchResultHandler=()=>{

  }

  const BookingHandler=()=>{

  }

  const PaymentHandler=()=>{}

  useEffect(()=>{
    if(localStorage.getItem("token")){
      userDetails(localStorage.getItem("token")).then(response=>
        setLogin(true)
      ).catch(error=>
        setLogin(false)
      )
    }
  },[])

  return (
    <Routes>
      <Route path="/search" element={<Search search={searchDetails}/>}/>
      <Route path="/" element={<HomePage login={login} setSearchDetails={setSearchDets}/>}/>
      <Route path="/checkIn" element={<CheckInPage 
      seatsBooked={seatsBooked} 
      passengers={passengers} 
      passengerList={passengerList} 
      type={type} 
      checkIn={CheckinHandler}/>}/>
      <Route path="/checkIn/successful" element={<CheckInComplete />}/>
      <Route path="/booking/successful" element={<BookingComplete />}/>
      <Route path="/booking" element={<Booking/>}/>
      <Route path="/userProfile" element={<UserProfile login={login}/>}/>
    </Routes>





  );
}

export default App;

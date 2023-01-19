import axios from "axios";
import { toast } from "react-toastify";
import setTimeout  from "react";

//Get The Token
const sitelink="http://ec2-3-110-171-177.ap-south-1.compute.amazonaws.com:9900"
// const sitelink="http://localhost:9969"

const authService = async (JwtData) => {
    await fetch(`${sitelink}/token`, {
        method: 'POST',   
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(JwtData)
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        console.log(data);
        if (data["token"]) {
          localStorage.setItem("token", data["token"].split(" ")[0]);
          toast.success("Login Success");
          //window.alert(JSON.stringify(data));
        } else {
          // window.alert("Wrong Email or Password!!")
          toast.error("Login Failed");
        }
      })
      //Then with the error genereted...
      .catch((error) => {
        toast.error("Something went Wrong!!");
        console.error("Error:", error);
      });
  };

//Get User Details
const userDetails = async (tokenDetails) => {
  console.log(tokenDetails);

  let data=axios.post(`${sitelink}/user/getMyDetails`,{
    "data": 'sample',
   },
   {
     headers: {
     'Authorization':'Bearer '+tokenDetails,
     'Content-Type':'application/json'
     }
   })
   .then((res) => {
     return res.data;
   })

  return data;

}
  const signup = async (myBody) => {
    console.log(myBody)
    const status = await fetch(`${sitelink}/user/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myBody),
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        toast.success("Registered Succesfully ")
        toast.info("Please proceed to login")
        setTimeout(window.location='/',5000)
        if (data["success"]) {
          console.log("Register Success");
          return true;
        } else {
          return false;
        }
      })
      //Then with the error genereted...
      .catch((error) => {
        toast.error("Something went Wrong!!");
        console.error("Error:", error);
        return false
      });
      return status
  };

const logoutUser = () => {
    localStorage.removeItem("token");
  };

  //------------------------------------------------------

  //Create Order for payment

  const orderDetails = async (orderInfo) =>{
    let data=await axios.post(`${sitelink}/order/createOrder`,orderInfo).then(
        res => {
          console.log(res.data);
          toast.success("Order Created");
          return JSON.parse(JSON.stringify(res.data))
        }
        ).catch(error=>{
          toast.error("Please try after some time");
          setTimeout(window.location = "/", 3000);
          console.log(error);
    })
    return data
}

const getGstAmount = async (totalFare, seatClass) =>{

  let data=await axios.get(`${sitelink}/fare/getGst/${totalFare}/${seatClass}`).then(
    res => {
      console.log(res.data);
      return res.data
    }
    ).catch(error=>{
      toast.error("Please try after some time");
      setTimeout(window.location = "/", 3000);
      console.log(error);
    })
    return data
}

// Checkin Functions 

const getDetailsByPnr = async (pnr) => {
  let data=await axios.post(`${sitelink}/book/getByPnr?pnr=${pnr}`).then(
    res => {
      console.log(res.data);
      return res.data
    }
    ).catch(error=>{
      toast.error("Please enter correct credentials");
      console.log(error);
    })
    return data
}


  export { authService , userDetails , signup , logoutUser, orderDetails, getGstAmount, getDetailsByPnr};
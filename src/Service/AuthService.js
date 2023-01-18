import axios from "axios";
import { toast } from "react-toastify";
import setTimeout  from "react";

//Get The Token
const sitelink="https://ec2-3-110-171-177.ap-south-1.compute.amazonaws.com:9900"

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

  let data=axios.post(`${sitelink}/getMyDetails`,{
    "data": 'sample',
   },
   {
     headers: {
     'authorization':'Bearer '+tokenDetails,
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
    const status = await fetch(`${sitelink}/signUp`, {
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
        setTimeout(() => window.location='/',5000)
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


  export { authService , userDetails , signup , logoutUser};
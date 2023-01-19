import React, { useEffect, useState } from "react";
import { orderDetails } from "../../Service/AuthService";
import SearchResult from "../Search/SearchResult";
import useRazorpay from "react-razorpay";
import { ToastContainer } from "react-toastify";
import swal from "sweetalert";
const Booking = () => {

    const [amount, setAmount] = useState(100);
    const[contactDetail, setContactDetail] = useState({
        "phoneNo" : 993848858735,
        "emailId" : "suraj@gmail.com"
    })

    const[paymentDetails, setPaymentDetails] = useState({})

    const Razorpay = useRazorpay();

    const [flightDetails,setFlightDetails]=useState("")
    const [count,setCount]=useState(JSON.parse(localStorage.getItem("searchDetails")).passenges)
    const [formPassengers,setFormPassengers]=useState()
    const [retunrFlightDetails,setReturnFlightDetails]=useState([])


    const formDetails = () => {
        let rows = []
        for (let i = 0; i < 3; i++) {
            rows.push(passengerform)
        }
    }

    const passengerform = () => {
        var passengers=[]
        for(let i=0;i<count;i++){
        
        passengers.push(
            <div class="cf w-100 center">
                <div class=" central fl w-10 tc pv3 bg-white">
                    Passenger Details:
                </div>
                <input class="info fl w-30 tc pv3 bg-white" placeholder="First Name" />
                <input class="info fl w-30 tc pv3 bg-white" placeholder="Last Name" />
                <input class="info fl w-10 tc pv3 bg-white" placeholder="Gender" />
            </div>
        )}
        setFormPassengers(passengers)
        
    }

    useEffect(()=>{
        passengerform()
        if(localStorage.getItem("flightDetails") && localStorage.getItem("flightDetails")!==""){
            setFlightDetails(JSON.parse(localStorage.getItem("flightDetails")))
            setReturnFlightDetails(JSON.parse(localStorage.getItem("returnflightDetails")))
        }
        
    const razorBtnHandler = () => {

        console.log("Paytm Started");
        const orderInfo = {
            "amount" : amount,
            "description" : "Book Flight Payment"
        }
        orderDetails(orderInfo).then((data) => {
            const order = data
            const options = {
                key: "rzp_test_pt82f4jFDDF6I0", // Enter the Key ID generated from the Dashboard
                amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: order.currency,
                name: "Brown Feild",
                description: "Flight Booking Payment",
                image: "https://capg-train.s3.ap-south-1.amazonaws.com/logo.png",
                order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
                handler: function (response) {
                  alert(response.razorpay_payment_id);
                  alert(response.razorpay_order_id);
                  alert(response.razorpay_signature);
                  setPaymentDetails(response);
                  swal({
                    title: "Success",
                    text: "Successfull Payment",
                    icon: "success",
                    confirmButtonText: "OK",
                  }).then(function () {
                    // Redirect the user
                    window.location.href = "/booking/successful";
                  })
                },
                prefill: {
                  name: "Pankaj",
                  email: contactDetail.emailId,
                  contact: contactDetail.phoneNo,
                },
                notes: {
                  address: "BrownFeild Talawde Office",
                },
                theme: {
                  color: "#3399cc",
                },
              };

              const rzp1 = new Razorpay(options);

            rzp1.on("payment.failed", function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
                // swal({
                //     title: "Failed",
                //     text: "Payment Failed",
                //     icon: "error",
                //     confirmButtonText: "OK",
                //   }).then(function () {
                //     // Redirect the user
                //     window.location.href = "/booking";
                //   })

            });

            rzp1.open();
        }).catch((error) => {
            console.log(error);
        })
    }

    })

    return (
        <div>
            <nav class="navbar navbar1 navbar-expand-lg">
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
                        <span class="navbar-text">
                            <a href="/" className="a me-4">About us</a>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn me-2 btn-outline-light">Login</button>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#Register" class="btn  me-2 btn-outline-light">Register</button>
                        </span>
                    </div>
                </div>
            </nav>
            <div class="cf ">
                <div class="section1 fl w-100-m w-70-l pv3 ">
                    <SearchResult />
                    <div class="card card-body mb4">
                        {formPassengers}
                        <div class="cf w-100 center">
                            <div class=" central fl w-10 tc pv3 bg-white">
                                Contact Details:
                            </div>
                            <input class="info fl w-30 tc pv3 bg-white" type="number" placeholder="Phone Number" />
                            <input class="info fl w-30 tc pv3 bg-white" type="email" placeholder="Email" />
                        </div>
                        <button className="btn btn-primary w-100">Confirm Details</button>
                    </div>

                </div>
                <div class="fare fl w-100-ns w-100-m w-30-l tc ">
                    <article class="center w-90 br3 hidden ba b--black-10 ">
                        <h1 class="f4 br3 bg-white br--top mv0 pv2 ph3">Total Check In Fare</h1>
                        <div class="  pa3 bg-white f4 bt b--black-10 br4">
                            <div class="cf">
                                <div class="fl w-50 tc pv1 bg-black-05 ">
                                    Flight Fare
                                </div>
                                <div class="fl w-30 tr pv1 bg-black-025 ">
                                    Rs 9000
                                </div>
                            </div>
                            <div class="cf">
                                <div class="fl w-50 tc pv1 bg-black-05 ">
                                    Central GST
                                </div>
                                <div class="fl w-30 tr pv1 bg-black-025">
                                    Rs 100
                                </div>
                            </div>
                            <div class="cf">
                                <div class="fl w-50 tc pv1 bg-black-05">
                                    State GST
                                </div>
                                <div class="fl w-30 tr pv1 bg-black-025">
                                    Rs 100
                                </div>
                            </div>
                            <hr />
                            <div class="cf">
                                <div class="fl w-50 tc pv1 bg-black-05">
                                    Total Payable
                                </div>
                                <div class="fl w-30 tr pv1 bg-black-025">
                                    Rs 9200
                                </div>
                            </div>
                            <button class="btn btn-primary mt3" onClick={razorBtnHandler}>Proceed to Pay</button>

                        </div>
                    </article>
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
        </div>
    )
}

export default Booking
import React, { useEffect, useState } from "react";
import { getGstAmount, orderDetails } from "../../Service/AuthService";
import SearchResult from "../Search/SearchResult";
import useRazorpay from "react-razorpay";
import { ToastContainer } from "react-toastify";
import swal from "sweetalert";
import { useNavigate } from "react-router";
const Booking = () => {

    const navigate = useNavigate()

    const [bookingDetails, setBookingDetails] = useState({
        pnr: "",
        bookingDate: "",
        seatClass: "",
        flightBooking: {},
        payment: {},
        passenger: []
    })

    const [amount, setAmount] = useState(1000);     //This is the total amount
    const [contactDetail, setContactDetail] = useState({
        "phoneNo": 993848858735,
        "emailId": "suraj@gmail.com"
    })

    const [flightFare, setFlightFare] = useState({});

    const [paymentDetails, setPaymentDetails] = useState({})

    const Razorpay = useRazorpay();

    const [flightDetails, setFlightDetails] = useState("")
    const [count, setCount] = useState(JSON.parse(localStorage.getItem("searchDetails")).passenges)
    const [formPassengers, setFormPassengers] = useState()
    const [retunrFlightDetails, setReturnFlightDetails] = useState([])


    const [returnbookingDetails, setReturnBookingDetails] = useState({

    })


    const [passenger, setPassenger] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        phoneNumber: "",
        emailId: "",
        seatNo: "",
    })

    const passengerform = () => {
        var passengers = []
        for (let i = 0; i < count; i++) {

            passengers.push(
                <div id={i} class="cf w-100 center">
                    <div class=" central fl w-10 tc pv3 bg-white">
                        Passenger Details:
                    </div>
                    <input class="info fl w-30 tc pv3 bg-white" id={"fname" + i} placeholder="First Name" required />
                    <input class="info fl w-30 tc pv3 bg-white" id={"lname" + i} placeholder="Last Name" required />
                    <input class="info fl w-10 tc pv3 bg-white" id={"gender" + i} placeholder="Gender" required />
                </div>
            )
        }
        setFormPassengers(passengers)
    }

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const razorBtnHandler = (e) => {
        e.preventDefault()
        let data = {
            pnr: makeid(6),
            bookingDate: new Date(),
            seatClass: JSON.parse(localStorage.getItem("searchDetails")).seatClass,
            flightBooking: {},
            payment: {},
            passenger: []
        }


        console.log("Paytm Started");
        const orderInfo = {
            "amount": amount,
            "description": "Book Flight Payment"
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
                    console.log(response);
                    console.log(paymentDetails);
                    swal({
                        title: "Success",
                        text: "Successfull Payment",
                        icon: "success",
                        confirmButtonText: "OK",
                    }).then(function () {
                        // Redirect the user
                        window.location = "/booking/successful";
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

    const confirmDetails = (e) => {
        e.preventDefault()
        let tempData = passenger
        for (let i = 0; i < count; i++) {
            tempData[i] = {
                firstName: document.getElementById("fname" + [i]).value,
                lastName: document.getElementById("lname" + [i]).value,
                gender: document.getElementById("gender" + [i]).value,
                phoneNumber: document.getElementById("phoneNo").value,
                emailId: document.getElementById("email").value,
                seatNo: "",
            }
        }
        console.log(tempData)
    }

    useEffect(() => {
        passengerform()
        if (localStorage.getItem("flightDetails") !== "") {
            let passengersArray = []
            let passenger = {
                firstName: "",
                lastName: "",
                gender: "",
                phoneNumber: "",
                emailId: "",
                seatNo: "",
            }
            for (let i = 0; i < count; i++) {
                passengersArray.push(passenger)
            }
            setPassenger(passengersArray)

            if (localStorage.getItem("searchDetails") && localStorage.getItem("searchDetails") !== "") {
                const seatClass = JSON.parse(localStorage.getItem("searchDetails")).seatClass;
                const goFare = seatClass.toLowerCase === "business" ?
                    JSON.parse(localStorage.getItem("flightDetails")).fare.bFare :
                    JSON.parse(localStorage.getItem("flightDetails")).fare.eFare;

                var returnFare = 0;
                if (localStorage.getItem("returnflightDetails") && localStorage.getItem("returnflightDetails") !== "") {
                    returnFare = seatClass.toLowerCase === "business" ?
                        JSON.parse(localStorage.getItem("returnflightDetails")).fare.bFare :
                        JSON.parse(localStorage.getItem("returnflightDetails")).fare.eFare;
                }
                const passNum = JSON.parse(localStorage.getItem("searchDetails")).passenges;

                const allPassFare = (goFare + returnFare) * passNum;

                //This is for to display
                getGstAmount(allPassFare, seatClass).then((data) => {
                    setFlightFare(() => {
                        const tempVar = {
                            ...flightFare,
                            "goFare": goFare,
                            "cgst": data,
                            "sgst": data,
                            "totalFare": allPassFare,
                            "passengers": passNum,
                            "returnFare": returnFare
                        }
                        return tempVar;
                    })

                    //Set Total Amount for Razorpay Payment
                    setAmount(flightFare.totalFare + flightFare.cgst + flightFare.sgst)
                })

            }
            else {
                navigate("/")
            }
        }
        else {
            navigate("/")
        }

    }, [])

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
                    <SearchResult
                        departureTime={new Date(JSON.parse(localStorage.getItem("flightDetails")).departureDateTime).toTimeString().slice(0, 5)}
                        departureAirport={JSON.parse(localStorage.getItem("flightDetails")).route.departureAirport}
                        arrivalAirport={JSON.parse(localStorage.getItem("flightDetails")).route.arrivalAirport}
                        arrivalTime={new Date(JSON.parse(localStorage.getItem("flightDetails")).arrivalDateTime).toTimeString().slice(0, 5)}
                        totalFare={JSON.parse(localStorage.getItem("searchDetails")).seatClass === "Business" ? "₹" + JSON.parse(localStorage.getItem("flightDetails")).fare.bFare : "₹" + JSON.parse(localStorage.getItem("flightDetails")).fare.eFare}
                        totalTime={Math.ceil(JSON.parse(localStorage.getItem("flightDetails")).totalTime / 60) + "hr " + JSON.parse(localStorage.getItem("flightDetails")).totalTime % 60 + "min"}
                        flightNumber={"BF" + JSON.parse(localStorage.getItem("flightDetails")).flightNo} />
                    {
                        localStorage.getItem("returnflightDetails") !== "" ?
                            <SearchResult
                                departureTime={new Date(JSON.parse(localStorage.getItem("returnflightDetails")).departureDateTime).toTimeString().slice(0, 5)}
                                departureAirport={JSON.parse(localStorage.getItem("returnflightDetails")).route.departureAirport}
                                arrivalAirport={JSON.parse(localStorage.getItem("returnflightDetails")).route.arrivalAirport}
                                arrivalTime={new Date(JSON.parse(localStorage.getItem("returnflightDetails")).arrivalDateTime).toTimeString().slice(0, 5)}
                                totalFare={JSON.parse(localStorage.getItem("searchDetails")).seatClass === "Business" ? "₹" + JSON.parse(localStorage.getItem("returnflightDetails")).fare.bFare : "₹" + JSON.parse(localStorage.getItem("returnflightDetails")).fare.eFare}
                                totalTime={Math.ceil(JSON.parse(localStorage.getItem("returnflightDetails")).totalTime / 60) + "hr " + JSON.parse(localStorage.getItem("returnflightDetails")).totalTime % 60 + "min"}
                                flightNumber={"BF" + JSON.parse(localStorage.getItem("returnflightDetails")).flightNo} />
                            :
                            <></>
                    }
                    <form onSubmit={confirmDetails} class="card card-body mb4">
                        {formPassengers}
                        <div class="cf w-100 center">
                            <div class=" central fl w-10 tc pv3 bg-white">
                                Contact Details:
                            </div>
                            <input id="phoneNo" class="info fl w-30 tc pv3 bg-white" type="number" placeholder="Phone Number" required />
                            <input id="email" class="info fl w-30 tc pv3 bg-white" type="email" placeholder="Email" required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Confirm Details</button>
                    </form>

                </div>
                <div class="fare fl w-100-ns w-100-m w-30-l tc ">
                    <article class="center w-90 br3 hidden ba b--black-10 ">
                        <h1 class="f4 br3 bg-white br--top mv0 pv2 ph3">Total Check In Fare</h1>
                        <div class="  pa3 bg-white f4 bt b--black-10 br4">
                            <div class="cf">
                                <div class="fl w-50 tc pv1 bg-black-05 ">
                                    Base Fare
                                </div>
                                <div class="fl w-40 tr pv1 bg-black-025 ">
                                    {"₹ " + (flightFare.goFare + flightFare.returnFare) + " × " + flightFare.passengers}
                                </div>
                            </div>
                            <div class="cf">
                                <div class="fl w-50 tc pv1 bg-black-05 ">
                                    Central GST
                                </div>
                                <div class="fl w-40 tr pv1 bg-black-025">
                                    {"₹ " + flightFare.cgst}
                                </div>
                            </div>
                            <div class="cf">
                                <div class="fl w-50 tc pv1 bg-black-05">
                                    State GST
                                </div>
                                <div class="fl w-40 tr pv1 bg-black-025">
                                    {"₹ " + flightFare.sgst}
                                </div>
                            </div>
                            <hr />
                            <div class="cf">
                                <div class="fl w-50 tc pv1 bg-black-05">
                                    Total Payable
                                </div>
                                <div class="fl w-40 tr pv1 bg-black-025">
                                    {"₹" + amount}
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
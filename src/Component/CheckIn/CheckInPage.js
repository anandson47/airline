import React, { useEffect, useState } from "react";
import logo from "./logo.png"
import arrow from "./arrow.png"
import "./CheckInPage.css"
import Seat from "./Seat";
import SearchResult from "../Search/SearchResult";
import Passenger from "./Passenger";
import TermsAndConditions from "./TermsAndConditions";
import confirm from "./confirm.png"
import { checkInSuccess, getGstAmount, orderDetails, seatFare } from "../../Service/AuthService";
import swal from "sweetalert";
import useRazorpay from "react-razorpay";
import { toast, ToastContainer } from "react-toastify";

const CheckInPage = (props) => {

    const flightBooking = JSON.parse(window.sessionStorage.getItem("flightBooking"));
    const flightDetails = JSON.parse(window.sessionStorage.getItem("flight"));
    const bookingDetails = JSON.parse(window.sessionStorage.getItem("bookingDetails"));
    const seatsEconomyBooked = JSON.parse(window.sessionStorage.getItem("seatsEconomyBooked"));
    const seatsBussinessBooked = JSON.parse(window.sessionStorage.getItem("seatsBussinessBooked"));
    const checkInDetials = JSON.parse(window.sessionStorage.getItem("checkInDetails"));

    const [state, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const [passengerSeats, setPassengerSeats] = useState([]);
    const [count, setCount] = useState(-1);
    const [passengerList, setPassengerList] = useState(bookingDetails.passenger);
    const [temporaryData, setTemporaryData] = useState(bookingDetails.passenger)

    // const [checkinDetails,setCheckinDetails]=useState({

    // })

    const [amount, setAmount] = useState(1000);
    const [paymentDetails, setPaymentDetails] = useState({})
    const [allSeatFare, setAllSeatFare] = useState({});
    const [selectedSeatFare, setSelectedSeatFare] = useState({
        "totalFare": 0,
        "cgst": 0,
        "sgst": 0,
        "payAmount": 0
    });

    //Function to Convert Seat String to seat number
    const getSeatNo = (seatStr) => {
        let row = seatStr.slice(0, seatStr.length - 1)
        let col = seatStr[seatStr.length - 1]
        if (row > 6) {
            //Economy
            const getCols = {
                "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6
            }
            let seatNum = 20 + (row - 6) * 6 + getCols[col]
            return seatNum
        }
        else {
            const getCols = {
                "A": 1, "B": 2, "C": 3, "D": 4
            }
            let seatNum = (row - 1) * 4 + getCols[col];
            return seatNum;
        }
    }

    //Number to String format
    const getSeatNumber = (seatNumber) => {
        if (seatNumber > 20) {
            let seat_row = Math.ceil((seatNumber - 20) / 6) + 5
            let column = ["A", "B", "C", "D", "E", "F"]
            let seat_column = column[((seatNumber - 21) % 6)]
            return seat_row + seat_column

        }
        else {
            let seat_row = Math.ceil((seatNumber) / 4)
            let column = ["D", "A", "B", "C"]
            let seat_column = column[((seatNumber) % 4)]
            return seat_row + seat_column

        }
    }

    const Razorpay = useRazorpay();

    const checkAcknowlegdement = (yes) => {
        console.log(yes)
        if (yes) {
            document.getElementById("acknowledgement").style.display = "inline-flex";
        }
        else {
            document.getElementById("acknowledgement").style.display = "none";
        }
    }

    const seatConfirmHandler = (e) => {

        var passCnt = 0;
        passengerList.forEach((passenger) => {
            if (passenger.seatNo && passenger.seatNo !== "") {
                passCnt += 1
            }
        })

        if (passCnt != Object.keys(passengerList).length) {
            toast.error("Please Select Seats for the Passenger");
            return;
        }
        document.getElementById("seat-image").style.display = "inline-flex";
        setTemporaryData([])
        setTemporaryData(passengerList)
        console.log(temporaryData)
        //forceUpdate()

        //Update the GST details of the Fare Details
        getGstAmount(selectedSeatFare.totalFare, bookingDetails.seatClass).then((data) => {
            selectedSeatFare.cgst = data;
            selectedSeatFare.sgst = data;
            selectedSeatFare.payAmount = data * 2 + selectedSeatFare.totalFare
            setAmount(selectedSeatFare.payAmount)
        })


    }

    const CheckinHandler = (values) => {
        console.log(values[0])
        let data = bookingDetails.passenger
        let count = 0
        let currentFare = 0
        data.forEach(element => {
            console.log(element)
            if(values[count]){
                element.seatNo = getSeatNo(values[count])
                console.log(getSeatNo(values[count]));
                currentFare += allSeatFare[getSeatNo(values[count]) - 1]
                console.log(allSeatFare);
            }
            count += 1
        });
        setPassengerList(data)
        //  console.log(passengerList);

        setSelectedSeatFare(prevState => ({
            ...prevState, 
            totalFare : currentFare
        }))
        console.log(selectedSeatFare);
        console.log("Current Fare", currentFare);


    }

    //Payment Code
    const razorBtnHandler = () => {

        console.log("Paytm Started");
        const orderInfo = {
            "amount": amount,
            "description": "CheckIn Flight Payment"
        }
        orderDetails(orderInfo).then((data) => {
            const order = data
            const options = {
                key: "rzp_test_pt82f4jFDDF6I0", // Enter the Key ID generated from the Dashboard
                amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: order.currency,
                name: "Brown Feild",
                description: "Flight CheckIn Payment",
                image: "https://capg-train.s3.ap-south-1.amazonaws.com/logo.png",
                order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
                handler: function (response) {
                    alert(response.razorpay_payment_id);
                    alert(response.razorpay_order_id);
                    alert(response.razorpay_signature);
                    setPaymentDetails(response);
                    console.log(paymentDetails);
                    swal({
                        title: "Success",
                        text: "Successfull Payment",
                        icon: "success",
                        confirmButtonText: "OK",
                    }).then(function () {
                        // Redirect the user
                        checkInDetials.payment = {
                            "paymentId": response.payment_Id,
                            "paymentOrderId": response.razorpay_order_id,
                            "razorpaySignature": response.razorpay_signature,
                            "paymentStatus": "success",
                            "paymentDate": new Date(),
                            "amount": amount
                        }

                        var checkInfo = {
                            "checkin": checkInDetials,
                            "passengers": passengerList
                        }
                        checkInSuccess(checkInfo).then((checIndata) => {
                            toast.success("Successfully CheckedIn");
                            window.sessionStorage.setItem("checkInDetails", JSON.stringify(checIndata));
                            window.location.href = "/checkin/successful";
                        }).catch((error) => {
                            console.log(error);

                        })
                        //window.location.href = "/booking/successful";
                    })
                },
                prefill: {
                    name: "Pankaj",
                    email: "",
                    contact: "",
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

            });

            rzp1.open();
        }).catch((error) => {
            console.log(error);
        })
    }



    console.log(flightDetails.route);
    useEffect(() => {
        if (window.sessionStorage.getItem("checkInDetails")) {

            seatFare(flightBooking.id).then((data) => {
                setAllSeatFare(data);
            })
            console.log(allSeatFare);

        }
        else {
            window.location.href = "/";
        }
    }, [temporaryData, selectedSeatFare, amount])


    return (
        <div>
            <nav class="navbar navbar1 navbar-expand-lg">
                <div class="container-fluid">
                    <a class="" href="/"><img className="ms-4 navlogo" alt="" src={logo} /> <br /><span class="ms-1 logotext">BROWNFIELD</span> </a>
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
            <div className="Checkin bg-black-05">
                <div class="cf ">
                    <div class="section1 fl w-100-m w-70-l pv3 ">
                        <SearchResult
                            departureTime={new Date(flightBooking.departureDateTime).toTimeString().slice(0, 5)}
                            departureAirport={flightDetails.route.departureAirport}
                            arrivalAirport={flightDetails.route.arrivalAirport}
                            arrivalTime={new Date(flightBooking.arrivalDateTime).toTimeString().slice(0, 5)}
                            totalFare={"₹ " + bookingDetails.payment.amount}
                            totalTime={Math.ceil(flightBooking.totalTime / 60) + "hr " + flightBooking.totalTime % 60 + "min"}
                            flightNumber={"BF" + flightDetails.flightNo}
                        />
                        <div class="card card-body mb4">
                            {
                                temporaryData.map(function (passenger) {
                                    console.log(passenger)
                                    return <div class="cf w-100 center">
                                        <div class=" central fl w-10 tc pv3 bg-white">
                                            Passenger Details:
                                        </div>
                                        <div class="info fl w-30 tc pv3 bg-white">
                                            {passenger.firstName.toUpperCase() + " " + passenger.lastName.toUpperCase()}
                                        </div>
                                        <div class="info fl w-30 tc pv3 bg-white">
                                            {passenger.gender}
                                        </div>
                                        <div class="info fl w-10 tc pv3 bg-white" id={count}>
                                            {passenger.seatNo ? getSeatNumber(passenger.seatNo) : ""}
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <h6 className="tc pv2">Complete the steps below to complete Check-in!</h6>
                        <p className="w-100 bg-white">
                            <button class=" btn bg-white w-20" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                Select your Seat <img className="carousel-arrow" src={arrow} />
                            </button>
                            <img src={confirm} id="seat-image" className="w2" />

                        </p>
                        <div class="collapse" id="collapseExample2">
                            <div class="card  card1 card-body mb-4">

                                {/* <Seat seatsBooked={props.seatsBooked} passengers={props.passengers} type={props.type} checkin={CheckinHandler}/> */}
                                <Seat allSeatFare={allSeatFare} seatsBooked={bookingDetails.seatClass == "economy" ? seatsEconomyBooked : seatsBussinessBooked} passengers={bookingDetails.passenger} type={bookingDetails.seatClass} checkin={CheckinHandler} />
                                <button className="w-100 btn btn-primary" onClick={seatConfirmHandler} data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample"> Confirm</button>
                            </div>
                        </div>
                        <p className="w-100 bg-white">
                            <button class="w-20 btn bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                                Acknowledge T&C's<img className="carousel-arrow" src={arrow} />
                            </button>
                            <img src={confirm} id="acknowledgement" className="w2" />
                        </p>
                        <div class="collapse" id="collapseExample3">
                            <div class="card card-body">
                                <TermsAndConditions check={checkAcknowlegdement} />
                            </div>
                        </div>
                    </div>
                    <div class="fare fl w-100-ns w-100-m w-30-l tc ">
                        <article class="center w-90 br3 hidden ba b--black-10 ">
                            <h1 class="f4 br3 bg-white br--top mv0 pv2 ph3">Total Check In Fare</h1>
                            <div class="  pa3 bg-white f4 bt b--black-10 br4">
                                <div class="cf">
                                    <div class="fl w-50 tc pv1 bg-black-05 ">
                                        Seat Fare:
                                    </div>
                                    <div class="fl w-20 tr pv1 bg-black-025 ">
                                        ₹ {selectedSeatFare.totalFare}
                                    </div>
                                </div>
                                <div class="cf">
                                    <div class="fl w-50 tc pv1 bg-black-05 ">
                                        Central GST
                                    </div>
                                    <div class="fl w-20 tr pv1 bg-black-025">
                                        ₹ {selectedSeatFare.cgst}
                                    </div>
                                </div>
                                <div class="cf">
                                    <div class="fl w-50 tc pv1 bg-black-05">
                                        State GST
                                    </div>
                                    <div class="fl w-20 tr pv1 bg-black-025">
                                        ₹ {selectedSeatFare.sgst}
                                    </div>
                                </div>
                                <hr />
                                <div class="cf">
                                    <div class="fl w-50 tc pv1 bg-black-05">
                                        Total Payable
                                    </div>
                                    <div class="fl w-20 tr pv1 bg-black-025">
                                        ₹ {selectedSeatFare.payAmount}
                                    </div>
                                </div>
                                <button class="btn btn-primary mt3" onClick={razorBtnHandler}>Proceed to Pay</button>
                            </div>
                        </article>
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
        </div>
    )
}

export default CheckInPage
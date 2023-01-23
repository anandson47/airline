import React, { useEffect, useState } from "react";
import CheckInForm from "./CheckInForm";
import "./Seat.css"
import seat from "./seat.png";
import { toast, ToastContainer } from "react-toastify";

const Seat = (props) => {

    const [seatBooked, setSeatsBooked] = useState(props.seatsBooked)
    //const [count, setCount] = useState(props.passengers.length)
    const [seatSelection, setSeatSelection] = useState(new Array());
    const [seatsDisplay, setSeatsDisplay] = useState();

    //This will have all the seats fare
    const [seatsFare, setSeatsFare] = useState();

    var countPassenger = props.passengers.length

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

    const seatHandler = (e) => {
        let seatselected = e.target.id
        console.log(document.getElementById(e.target.id).style.backgroundColor)

        if (document.getElementById(e.target.id).style.backgroundColor === "lightgreen") {
            document.getElementById(seatselected).style.background = "none"
            // setCount(count + 1);
            countPassenger += 1;
            seatSelection.splice(seatSelection.indexOf(getSeatNumber(seatselected), 1))
            console.log(seatSelection)
            props.checkin(seatSelection)
        }
        else if (countPassenger === 0) {
            //alert("All seats selected de select a seat to choose another")
            toast.error("All seats selected");
            toast.info("Deselect a seat to choose another");
        }
        else if (document.getElementById(e.target.id).style.backgroundColor === "gray") {
            // alert("seat already booked")
            toast.error("Seat already booked");
        }
        else {
            document.getElementById(e.target.id).style.backgroundColor = "lightgreen"
            countPassenger -= 1
            seatSelection.push(getSeatNumber(seatselected))
            props.checkin(seatSelection)
        }
    }

    useEffect(() => {
        props.seatsBooked.forEach(element => {
            document.getElementById(element).style.backgroundColor = "gray"
        });
        // if (props.type === "business") {
        //     document.getElementById("economy").style.display = "none"
        // }
        // else {
        //     document.getElementById("business").style.display = "none"
        // }

        seatDisplayPage();
        console.log(seatBooked);
        setSeatsFare(props.allSeatFare);
        console.log(props.allSeatFare);
    }, [props.allSeatFare])


    const seatDisplayPage = () => {
        const dispSeat = [];
        console.log(props.type);
        if (props.type.toLowerCase() === "economy") {
            dispSeat.push(
                <div class="cf ">
                    <div class="individual fl tc pt2 ">
                        A
                    </div>
                    <div class="fl tc individual pt2 ">
                        B
                    </div>
                    <div class="fl tc pt2 individual ">
                        C
                    </div>
                    <div class="fl w-10 tc pt2 ">
                        ECONOMY
                    </div>
                    <div class="fl tc pt2 individual ">
                        D
                    </div>
                    <div class="fl tc pt2 individual ">
                        E
                    </div>
                    <div class="fl tc pt2 individual">
                        F
                    </div>
                </div>
            )
            var row = 6
            for (var i = 21; i <= 170; i += 6) {
                dispSeat.push(
                    <div class="cf ">
                        <div class="individual fl tc pt2 " id={i} onClick={seatHandler}>
                            <img src={seat} className="seat-image" id={i} title = { seatsFare ? "₹ "+ seatsFare[i-1] : "₹ 250"} />
                        </div>
                        <div class="fl tc individual pt2 " id={i + 1} onClick={seatHandler}>
                            <img src={seat} className="seat-image" id={i + 1} title = { seatsFare ? "₹ " + seatsFare[i] : "₹ 0"} />
                        </div>
                        <div class="fl tc pt2 individual " id={i + 2} onClick={seatHandler}>
                            <img src={seat} className="seat-image" id={i + 2} title = { seatsFare ? "₹ " + seatsFare[i+1] : "₹ 200"}/>
                        </div>
                        <div class="fl w-10 tc pt2 " >
                            {row}
                        </div>
                        <div class="fl tc pt2 individual " id={i + 3} onClick={seatHandler}>
                            <img src={seat} className="seat-image" id={i + 3} title = { seatsFare ? "₹ " + seatsFare[i+2] : "₹ 200"} />
                        </div>
                        <div class="fl tc pt2 individual " id={i + 4} onClick={seatHandler}>
                            <img src={seat} className="seat-image" id={i + 4} title = { seatsFare ? "₹ " + seatsFare[i+3] : "₹ 0"}/>
                        </div>
                        <div class="fl tc pt2 individual" id={i + 5} onClick={seatHandler}>
                            <img src={seat} className="seat-image" id={i + 5} title = { seatsFare ? "₹ " + seatsFare[i+4] : "₹ 250"}/>
                        </div>
                    </div>
                );
                row = row + 1
            }
        }
        else {
            dispSeat.push(
                <div class="cf tc">
                            <div class="fl w-20 tc ">
                                A
                            </div>
                            <div class="fl w-20 tc ">
                                B
                            </div>
                            <div class="fl w-20 tc ">
                                BUSINESS
                            </div>
                            <div class="fl w-20 tc ">
                                C
                            </div>
                            <div class="fl w-20 tc ">
                                D
                            </div>
                        </div>
            )
            var row = 1;
            for (var i = 1; i <= 20; i += 4) {
                dispSeat.push(
                    <div class="cf tc mt-3">
                        <div class="fl w-20 tc individual2" id={i} onClick={seatHandler}>
                            <img src={seat} className="seat-image" id={i} title= {seatsFare ? "₹ " + seatsFare[i-1] : "₹ 400"}/>
                        </div>
                        <div class="fl w-20 tc individual2" id={i + 1} onClick={seatHandler}>
                            <img src={seat} className="seat-image" id={i + 1} title= {seatsFare ? "₹ " + seatsFare[i] : "₹ 200"}/>
                        </div>
                        <div class="fl w-20 tc" >
                            {row}
                        </div>
                        <div class="fl w-20 tc individual2" id="3" onClick={seatHandler}>
                            <img src={seat} className="seat-image" id={i + 2} title= {seatsFare ? "₹ " + seatsFare[i+1] : "₹ 250"}/>
                        </div>
                        <div class="fl w-20 tc individual2" id="4" onClick={seatHandler}>
                            <img src={seat} className="seat-image" id={i + 3} title= {seatsFare ? "₹ " + seatsFare[i+2] : "₹ 400"}/>
                        </div>
                    </div>
                );
                row = row + 1;
            }
        }

        setSeatsDisplay(dispSeat);
    }




    return (
        <div className="seat">
            <div className="economy" id="economy">
                <article class="center w-90  bg-white hidden mv4">
                    <div class="pa3 ba br3 b--black-10">
                        {seatsDisplay}
                    </div>

                </article>
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

export default Seat;
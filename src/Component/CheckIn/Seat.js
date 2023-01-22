import React, { useEffect, useState } from "react";
import CheckInForm from "./CheckInForm";
import "./Seat.css"
import seat from "./seat.png";
import { toast, ToastContainer } from "react-toastify";

const Seat = (props) => {

    const [seatBooked,setSeatsBooked]=useState(props.seatsBooked)
    const [count,setCount]=useState(props.passengers.length)
    const [seatSelection, setSeatSelection]=useState(new Array());
    

    const getSeatNumber = (seatNumber) => {
        if (seatNumber>20){
            let seat_row=Math.ceil((seatNumber-20)/6)+5
            let column=["A","B","C","D","E","F"]
            let seat_column=column[((seatNumber-21)%6)]
            return seat_row+seat_column

        }
        else{
            let seat_row=Math.ceil((seatNumber)/4)
            let column=["D","A","B","C"]
            let seat_column=column[((seatNumber)%4)]
            return seat_row+seat_column

        }
    }

    const seatHandler = (e) => {
        let seatselected=e.target.id
        console.log(document.getElementById(e.target.id).style.backgroundColor)
        
        if(document.getElementById(e.target.id).style.backgroundColor==="lightgreen"){
            document.getElementById(seatselected).style.background="none"
            setCount(count+1);
            seatSelection.splice(seatSelection.indexOf(getSeatNumber(seatselected),1))
            console.log(seatSelection)
            props.checkin(seatSelection)
        }
        else if(count===0){
            //alert("All seats selected de select a seat to choose another")
            toast.error("All seats selected");
            toast.info("Deselect a seat to choose another");
        }
        else if(document.getElementById(e.target.id).style.backgroundColor==="gray"){
            // alert("seat already booked")
            toast.error("Seat already booked");
        }
        else{
            document.getElementById(e.target.id).style.backgroundColor="lightgreen"
            setCount(count-1);
            seatSelection.push(getSeatNumber(seatselected))
            console.log(seatSelection)
            props.checkin(seatSelection)
        }
        
    }
    
    useEffect(()=>{
        props.seatsBooked.forEach(element => {
            document.getElementById(element).style.backgroundColor="gray"
        });
        if(props.type === "business"){
            document.getElementById("economy").style.display="none"
        }
        else{
            document.getElementById("business").style.display="none"
        }
        console.log("hi")

    },count)

    return (
        <div className="seat">
            <div className="economy" id="economy">
                <article class="center w-90  bg-white hidden mv4">
                    <div class="pa3 ba br3 b--black-10">
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
                                Economy
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
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="21" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="21"/>
                            </div>
                            <div class="fl tc individual pt2 " id="22" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="22"/>
                            </div>
                            <div class="fl tc pt2 individual " id="23" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="23"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                6
                            </div>
                            <div class="fl tc pt2 individual " id="24" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="24"/>
                            </div>
                            <div class="fl tc pt2 individual " id="25" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="25"/>
                            </div>
                            <div class="fl tc pt2 individual" id="26" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="26"/>
                            </div>
                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="27" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="27"/>
                            </div>
                            <div class="fl tc individual pt2 " id="28" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="28"/>
                            </div>
                            <div class="fl tc pt2 individual " id="29" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="29"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                7
                            </div>
                            <div class="fl tc pt2 individual " id="30" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="30"/>
                            </div>
                            <div class="fl tc pt2 individual " id="31" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="31"/>
                            </div>
                            <div class="fl tc pt2 individual" id="32" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="32"/>
                            </div>
                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="33" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="33"/>
                            </div>
                            <div class="fl tc individual pt2 " id="34" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="34"/>
                            </div>
                            <div class="fl tc pt2 individual " id="35" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="35"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                8
                            </div>
                            <div class="fl tc pt2 individual " id="36" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="36"/>
                            </div>
                            <div class="fl tc pt2 individual " id="37" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="37"/>
                            </div>
                            <div class="fl tc pt2 individual" id="38" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="38"/>
                            </div>
                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="39" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="39"/>
                            </div>
                            <div class="fl tc individual pt2 " id="40" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="40"/>
                            </div>
                            <div class="fl tc pt2 individual " id="41" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="41"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                9
                            </div>
                            <div class="fl tc pt2 individual " id="42" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="42"/>
                            </div>
                            <div class="fl tc pt2 individual " id="43" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="43"/>
                            </div>
                            <div class="fl tc pt2 individual" id="44" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="44"/>
                            </div>
                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="45" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="45"/>
                            </div>
                            <div class="fl tc individual pt2 " id="46" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="46"/>
                            </div>
                            <div class="fl tc pt2 individual " id="47" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="47"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                10
                            </div>
                            <div class="fl tc pt2 individual " id="48" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="48"/>
                            </div>
                            <div class="fl tc pt2 individual " id="49" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="49"/>
                            </div>
                            <div class="fl tc pt2 individual" id="50" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="50"/>
                            </div>
                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="51" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="51"/>
                            </div>
                            <div class="fl tc individual pt2 " id="52" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="52"/>
                            </div>
                            <div class="fl tc pt2 individual " id="53" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="53"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                11
                            </div>
                            <div class="fl tc pt2 individual " id="54" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="54"/>
                            </div>
                            <div class="fl tc pt2 individual " id="55" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="55"/>
                            </div>
                            <div class="fl tc pt2 individual" id="56" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="56"/>
                            </div>
                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="57" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="57"/>
                            </div>
                            <div class="fl tc individual pt2 " id="58" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="58"/>
                            </div>
                            <div class="fl tc pt2 individual " id="59" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="59"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                12
                            </div>
                            <div class="fl tc pt2 individual " id="60" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="60"/>
                            </div>
                            <div class="fl tc pt2 individual " id="61" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="61"/>
                            </div>
                            <div class="fl tc pt2 individual" id="62" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="62"/>
                            </div>
                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="63" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="63"/>
                            </div>
                            <div class="fl tc individual pt2 " id="64" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="64"/>
                            </div>
                            <div class="fl tc pt2 individual " id="65" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="65"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                13
                            </div>
                            <div class="fl tc pt2 individual " id="66" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="66"/>
                            </div>
                            <div class="fl tc pt2 individual " id="67" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="67"/>
                            </div>
                            <div class="fl tc pt2 individual" id="68" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="68"/>
                            </div>
                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="69" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="69"/>
                            </div>
                            <div class="fl tc individual pt2 " id="70" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="70"/>
                            </div>
                            <div class="fl tc pt2 individual " id="71" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="71"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                14
                            </div>
                            <div class="fl tc pt2 individual " id="72" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="72"/>
                            </div>
                            <div class="fl tc pt2 individual " id="73" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="73"/>
                            </div>
                            <div class="fl tc pt2 individual" id="74" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="74"/>
                            </div>
                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="75" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="75"/>
                            </div>
                            <div class="fl tc individual pt2 " id="76" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="76"/>
                            </div>
                            <div class="fl tc pt2 individual " id="77" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="77"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                15
                            </div>
                            <div class="fl tc pt2 individual " id="78" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="78"/>
                            </div>
                            <div class="fl tc pt2 individual " id="79" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="79"/>
                            </div>
                            <div class="fl tc pt2 individual" id="80" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="80"/>
                            </div>

                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="81" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="81"/>
                            </div>
                            <div class="fl tc individual pt2 " id="82" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="82"/>
                            </div>
                            <div class="fl tc pt2 individual " id="83" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="83"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                16
                            </div>
                            <div class="fl tc pt2 individual " id="84" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="84"/>
                            </div>
                            <div class="fl tc pt2 individual " id="85" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="85"/>
                            </div>
                            <div class="fl tc pt2 individual" id="86" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="86"/>
                            </div>

                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="87" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="87"/>
                            </div>
                            <div class="fl tc individual pt2 " id="88" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="88"/>
                            </div>
                            <div class="fl tc pt2 individual " id="89" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="89"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                17
                            </div>
                            <div class="fl tc pt2 individual " id="90" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="90"/>
                            </div>
                            <div class="fl tc pt2 individual " id="91" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="91"/>
                            </div>
                            <div class="fl tc pt2 individual" id="92" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="92"/>
                            </div>

                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="93" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="93"/>
                            </div>
                            <div class="fl tc individual pt2 " id="94" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="94"/>
                            </div>
                            <div class="fl tc pt2 individual " id="95" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="95"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                18
                            </div>
                            <div class="fl tc pt2 individual " id="96" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="96"/>
                            </div>
                            <div class="fl tc pt2 individual " id="97" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="97"/>
                            </div>
                            <div class="fl tc pt2 individual" id="98" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="98"/>
                            </div>

                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="99" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="99"/>
                            </div>
                            <div class="fl tc individual pt2 " id="100" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="100"/>
                            </div>
                            <div class="fl tc pt2 individual " id="101" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="101"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                19
                            </div>
                            <div class="fl tc pt2 individual " id="102" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="102"/>
                            </div>
                            <div class="fl tc pt2 individual " id="103" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="103"/>
                            </div>
                            <div class="fl tc pt2 individual" id="104" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="104"/>
                            </div>

                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="105" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="105"/>
                            </div>
                            <div class="fl tc individual pt2 " id="106" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="106"/>
                            </div>
                            <div class="fl tc pt2 individual " id="107" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="107"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                20
                            </div>
                            <div class="fl tc pt2 individual " id="108" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="108"/>
                            </div>
                            <div class="fl tc pt2 individual " id="109" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="109"/>
                            </div>
                            <div class="fl tc pt2 individual" id="110" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="110"/>
                            </div>

                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="111" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="111"/>
                            </div>
                            <div class="fl tc individual pt2 " id="112" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="112"/>
                            </div>
                            <div class="fl tc pt2 individual " id="113" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="113"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                21
                            </div>
                            <div class="fl tc pt2 individual " id="114" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="114"/>
                            </div>
                            <div class="fl tc pt2 individual " id="115" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="115"/>
                            </div>
                            <div class="fl tc pt2 individual" id="116" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="116"/>
                            </div>

                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="117" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="117"/>
                            </div>
                            <div class="fl tc individual pt2 " id="118" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="118"/>
                            </div>
                            <div class="fl tc pt2 individual " id="119" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="119"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                22
                            </div>
                            <div class="fl tc pt2 individual " id="120" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="120"/>
                            </div>
                            <div class="fl tc pt2 individual " id="121" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="121"/>
                            </div>
                            <div class="fl tc pt2 individual" id="122" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="122"/>
                            </div>

                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="123" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="123"/>
                            </div>
                            <div class="fl tc individual pt2 " id="124" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="124"/>
                            </div>
                            <div class="fl tc pt2 individual " id="125" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="125"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                23
                            </div>
                            <div class="fl tc pt2 individual " id="126" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="126"/>
                            </div>
                            <div class="fl tc pt2 individual " id="127" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="127"/>
                            </div>
                            <div class="fl tc pt2 individual" id="128" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="128"/>
                            </div>

                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="129" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="129"/>
                            </div>
                            <div class="fl tc individual pt2 " id="130" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="130"/>
                            </div>
                            <div class="fl tc pt2 individual " id="131" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="131"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                24
                            </div>
                            <div class="fl tc pt2 individual " id="132" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="132"/>
                            </div>
                            <div class="fl tc pt2 individual " id="133" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="133"/>
                            </div>
                            <div class="fl tc pt2 individual" id="134" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="134"/>
                            </div>

                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="135" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="135"/>
                            </div>
                            <div class="fl tc individual pt2 " id="136" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="136"/>
                            </div>
                            <div class="fl tc pt2 individual " id="137" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="137"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                25
                            </div>
                            <div class="fl tc pt2 individual " id="138" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="138"/>
                            </div>
                            <div class="fl tc pt2 individual " id="139" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="139"/>
                            </div>
                            <div class="fl tc pt2 individual" id="140" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="140"/>
                            </div>

                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="141" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="141"/>
                            </div>
                            <div class="fl tc individual pt2 " id="142" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="142"/>
                            </div>
                            <div class="fl tc pt2 individual " id="143" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="143"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                26
                            </div>
                            <div class="fl tc pt2 individual " id="144" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="144"/>
                            </div>
                            <div class="fl tc pt2 individual " id="145" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="145"/>
                            </div>
                            <div class="fl tc pt2 individual" id="146" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="146"/>
                            </div>

                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="147" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="147"/>
                            </div>
                            <div class="fl tc individual pt2 " id="148" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="148"/>
                            </div>
                            <div class="fl tc pt2 individual " id="149" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="149"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                27
                            </div>
                            <div class="fl tc pt2 individual " id="150" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="150"/>
                            </div>
                            <div class="fl tc pt2 individual " id="151" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="151"/>
                            </div>
                            <div class="fl tc pt2 individual" id="152" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="152"/>
                            </div>

                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="153" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="153"/>
                            </div>
                            <div class="fl tc individual pt2 " id="154" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="154"/>
                            </div>
                            <div class="fl tc pt2 individual " id="155" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="155"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                28
                            </div>
                            <div class="fl tc pt2 individual " id="156" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="156"/>
                            </div>
                            <div class="fl tc pt2 individual " id="157" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="157"/>
                            </div>
                            <div class="fl tc pt2 individual" id="158" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="158"/>
                            </div>

                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="159" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="159"/>
                            </div>
                            <div class="fl tc individual pt2 " id="160" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="160"/>
                            </div>
                            <div class="fl tc pt2 individual " id="161" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="161"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                29
                            </div>
                            <div class="fl tc pt2 individual " id="162" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="162"/>
                            </div>
                            <div class="fl tc pt2 individual " id="163" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="163"/>
                            </div>
                            <div class="fl tc pt2 individual" id="164" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="164"/>
                            </div>

                        </div>
                        <div class="cf ">
                            <div class="individual fl tc pt2 " id="165" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="165"/>
                            </div>
                            <div class="fl tc individual pt2 " id="166" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="166"/>
                            </div>
                            <div class="fl tc pt2 individual " id="167" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="167"/>
                            </div>
                            <div class="fl w-10 tc pt2 " >
                                30
                            </div>
                            <div class="fl tc pt2 individual " id="168" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="168"/>
                            </div>
                            <div class="fl tc pt2 individual " id="169" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="169"/>
                            </div>
                            <div class="fl tc pt2 individual" id="170" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="170"/>
                            </div>

                        </div>
                    </div>
                    
                </article>
            </div>
            <div className="business" id="business">
                <article class="center w-90  bg-white hidden mv5">
                    <div class="pa3 ba br3 b--black-10">
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
                        <div class="cf tc mt-3">
                            <div class="fl w-20 tc individual2" id="1" onClick={seatHandler}> 
                                <img src={seat} className="seat-image" id="1"/>
                            </div>
                            <div class="fl w-20 tc individual2" id="2" onClick={seatHandler}> 
                                <img src={seat} className="seat-image" id="2" />
                            </div>
                            <div class="fl w-20 tc" >
                                1
                            </div>
                            <div class="fl w-20 tc individual2" id="3" onClick={seatHandler}> 
                                <img src={seat} className="seat-image" id="3" />
                            </div>
                            <div class="fl w-20 tc individual2" id="4" onClick={seatHandler}>  
                                <img src={seat} className="seat-image" id="4" />
                            </div>
                        </div>
                        <div class="cf tc mt-3">
                            <div class="fl w-20 tc individual2" id="5"  onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="5"/>
                            </div>
                            <div class="fl w-20 tc individual2" id="6"  onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="6" />
                            </div>
                            <div class="fl w-20 tc" >
                                2
                            </div>
                            <div class="fl w-20 tc individual2" id="7"  onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="7" />
                            </div>
                            <div class="fl w-20 tc individual2" id="8" onClick={seatHandler}> 
                                <img src={seat} className="seat-image" id="8" />
                            </div>
                        </div>
                        <div class="cf tc mt-3">
                            <div class="fl w-20 tc individual2" id="9"  onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="9"/>
                            </div>
                            <div class="fl w-20 tc individual2" id="10" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="10" />
                            </div>
                            <div class="fl w-20 tc" >
                                3
                            </div>
                            <div class="fl w-20 tc individual2" id="11" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="11" />
                            </div>
                            <div class="fl w-20 tc individual2" id="12" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="12" />
                            </div>
                        </div>
                        <div class="cf tc mt-3">
                            <div class="fl w-20 tc individual2" id="13" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="13"/>
                            </div>
                            <div class="fl w-20 tc individual2" id="14" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="14" />
                            </div>
                            <div class="fl w-20 tc" >
                                4
                            </div>
                            <div class="fl w-20 tc individual2" id="15" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="15" />
                            </div>
                            <div class="fl w-20 tc individual2" id="16" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="16" />
                            </div>
                        </div>
                        <div class="cf tc mt-3">
                            <div class="fl w-20 tc individual2" id="17" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="17"/>
                            </div>
                            <div class="fl w-20 tc individual2" id="18" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="18" />
                            </div>
                            <div class="fl w-20 tc" >
                                5
                            </div>
                            <div class="fl w-20 tc individual2" id="19" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="19" />
                            </div>
                            <div class="fl w-20 tc individual2" id="20" onClick={seatHandler}>
                                <img src={seat} className="seat-image" id="20" />
                            </div>
                        </div>
                        
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
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import Table from "@david.kucsai/react-pdf-table";


const FlightTickets = () => {
    // Create styles
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: 'white',
        },
        section: {
            border: "2px solid black",
            width: "100%",
            margin: "10px",
            padding: "20px",
        },
        flightDetails: {
            width: "100%",
            margin: "3px",
            marginTop: "1px",
            border: "2px solid #3A0210;",
            textAlign: "center",
            paddingTop: 10,
            paddingBottom: 10,
            fontSize: "30px",
            color: "#3A0210",
        },
        flightTime: {
            marginTop: "2px",
            fontSize: 15
        },
        logo: {
            height: 60,
            width: 40
        },
        passengerDetails: {
            marginTop: 10,
            width: "100%",
            margin: "3px",
            textAlign: "left",
            fontSize: 15,
            paddingTop: 10,
            paddingBottom: 10,
            color: "#3A0210"
        },
        table: {
            display: "table",
            width: "auto",
            borderStyle: "solid",
            borderWidth: 1,
            borderRightWidth: 0,
            borderBottomWidth: 0
        },
        tableRow: {
            margin: "auto",
            flexDirection: "row"
        },
        tableCol: {
            width: "25%",
            borderStyle: "solid",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0
        },
        tableCol2: {
            width: "50%",
            borderStyle: "solid",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0
        },
        tableCell: {
            margin: "auto",
            marginTop: 5,
            fontSize: 15
        },
        prohibited:{
            paddingTop:30
        },
        message:{
            color:"#3A0210",
            paddingTop:40,
            fontSize:40,
            textAlign:"center"
        }


    });

    const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
    
    const passengers = [
        {
            "firstName" :  "Suraj",
            "lastName" : "Yadav",
            "phone" : "8868474767",
            "email" : "pankaj@gmail.com"
        }
    ]

    //const [passenger, setPassenger] = useState([]);

    const bookedDetails = JSON.parse(window.sessionStorage.getItem("bookedDetails"));
    const searchDetails = JSON.parse(window.localStorage.getItem("searchDetails"));
    const flightDetails = JSON.parse(window.localStorage.getItem("flightDetails"));
    const fareDetails   = JSON.parse(window.sessionStorage.getItem("fareDetails"));

    const departureDate = new Date(flightDetails.departureDateTime);
    const arrivalDate = new Date(flightDetails.arrivalDateTime);

    //Get details of Return Booked Details
    let returnBookedDetails;
    let returnDepartureDate;
    let returnArrivalDate;
    if(JSON.parse(window.sessionStorage.getItem("returnbookedDetails")).bookingId){
        
        returnBookedDetails = JSON.parse(window.sessionStorage.getItem("returnbookedDetails"));
        returnDepartureDate = new Date(flightDetails.departureDateTime);
        returnArrivalDate= new Date(flightDetails.arrivalDateTime);
    
    }
    console.log(returnBookedDetails);

    const goFare = fareDetails.goFare
    const returnFare = fareDetails.returnFare
    const totalGst = fareDetails.cgst = fareDetails.sgst

    var passengerView = bookedDetails.passenger.map((pass) => {
        return (
            <View style={styles.tableRow}>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{pass.firstName}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{pass.lastName}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{pass.phoneNumber}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{pass.emailId}</Text>
            </View>
        </View>
            );
      });

    // Create Document Component
    const MyDocument = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <View style={styles.logo}>
                        <Image src="/assets/images/logo.png"></Image>
                    </View>
                    <View style={styles.flightDetails}>
                        <Text>{searchDetails.departureAirport} to {searchDetails.arrivalAirport}</Text>
                        <Text style={styles.flightTime}>
                            Departure Date: {departureDate.getDate() + " " + monthNames[departureDate.getMonth()] + " " + departureDate.getFullYear()}
                        </Text>
                        <Text style={styles.flightTime}>
                            Departure - {departureDate.toLocaleTimeString()}
                        </Text>
                        <Text style={styles.flightTime}>
                            Arrival - {arrivalDate.toLocaleTimeString()}
                        </Text>
                    </View>
                    <View>
                        <Text>PNR Number: {bookedDetails.pnrNo}</Text>
                    </View>
                    <View style={styles.passengerDetails}>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>First Name</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Last Name</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Phone number</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Email Address</Text>
                                </View>
                            </View>
                            {passengerView}
                        </View>
                    </View>
                    <View>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>Fare</Text>
                                </View>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>Amount (in Rs)</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>Ticket Fare</Text>
                                </View>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>{goFare}</Text>
                                </View>
                            </View>\
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>GST(SGST + CGST)</Text>
                                </View>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>{returnFare > 0 ? Math.round(totalGst / 2) : totalGst}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>Total Amount</Text>
                                </View>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>{fareDetails.goFare + (returnFare > 0 ? Math.round(totalGst / 2) : totalGst)}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.prohibited}>
                        <Image   src="/assets/images/prohibited.png"/>
                    </View>
                    <View style={styles.message}>
                        <Text> Enjoy Your Journey With Brownfield</Text>
                    </View>

                </View>

            </Page>
            {
                returnBookedDetails ? ( 
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <View style={styles.logo}>
                        <Image src="/assets/images/logo.png"></Image>
                    </View>
                    <View style={styles.flightDetails}>
                        <Text>{searchDetails.arrivalAirport} to {searchDetails.departureAirport}</Text>
                        <Text style={styles.flightTime}>
                            Departure Date: {returnDepartureDate.getDate() + " " + monthNames[returnDepartureDate.getMonth()] + " " + returnDepartureDate.getFullYear()}
                        </Text>
                        <Text style={styles.flightTime}>
                            Departure - {returnDepartureDate.toLocaleTimeString()}
                        </Text>
                        <Text style={styles.flightTime}>
                            Arrival - {returnArrivalDate.toLocaleTimeString()}
                        </Text>
                    </View>
                    <View>
                        <Text>PNR Number: {returnBookedDetails.pnrNo}</Text>
                    </View>
                    <View style={styles.passengerDetails}>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>First Name</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Last Name</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Phone number</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Email Address</Text>
                                </View>
                            </View>
                            {passengerView}
                        </View>
                    </View>
                    <View>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>Fare</Text>
                                </View>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>Amount (in Rs)</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>Ticket Fare</Text>
                                </View>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>{fareDetails.goFare}</Text>
                                </View>
                            </View>\
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>GST(SGST + CGST)</Text>
                                </View>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>{Math.round(totalGst/2)}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>Total Amount</Text>
                                </View>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.tableCell}>{fareDetails.goFare + Math.round(totalGst/2)}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.prohibited}>
                        <Image   src="/assets/images/prohibited.png"/>
                    </View>
                    <View style={styles.message}>
                        <Text> Enjoy Your Journey With Brownfield</Text>
                    </View>

                </View>

            </Page>
                ) : "" 
            }
        </Document>
    );

    return (
        <div>
        <PDFViewer className='w-100' style={{ height: "100vh" }}>
            <MyDocument />
        </PDFViewer>
        </div>
    )
}
export default FlightTickets
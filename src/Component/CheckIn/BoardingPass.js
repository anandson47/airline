import React, { useState } from "react";
import { Page, Text, View, Document, StyleSheet, Svg, Image } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import Barcode from "react-barcode";
import logo from "./logo.png"
import { useBarcode } from "@createnextapp/react-barcode"

const BoardingPass = () => {

    const styles = StyleSheet.create({
        document: {
            width: 800
        },
        page: {
            flexDirection: 'column',
            backgroundColor: "white",
            display: 'flex',
            alignItems: 'center',
            // paddingHorizontal: '3%',
            // justifyContent: 'center',
        },
        section: {
            width: "90%",
            // height: 200,
            // border: '5px solid red',
            margin: 10,
            flexGrow: 1,
            // border: "1px solid #3A0210",
            // borderRadius: "10px",
            flexDirection: "column",
            display: 'flex',
            backgroundImage: { logo },
        },
        section1: {
            backgroundColor: "#3A0210",
            height: 30,
            padding: 3,
            borderTop: "1px solid #3A0210",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            color: "white",
            textAlign: "center",
            fontWeight: "2px"
        },
        section2: {
            width: "100%",
            height: 170,
            // border: '3px solid blue',
            border: "1px solid #3A0210",
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            paddingTop: 10
        },
        section6: {
            width: "30%"
        },
        section3: {
            width: "100%",
            textAlign: "center",
            paddingTop: 10,
            flexDirection: "row",
        },
        section4: {
            width: "100%",
            textAlign: "left",
            paddingLeft: 20,
            fontSize: "12px"
        },
        section5: {
            width: "100%",
            textAlign: "left",
            paddingTop: 10,
            paddingLeft: 20,
            borderLeft: "2px dotted black",
            fontSize: "10px" ,
            flexDirection: "row"
        },
        section6: {
            width: "100%",
            textAlign: "left",
            paddingLeft: 20,
            fontSize: "10px"
        },
    });

    const flightBooking = JSON.parse(window.sessionStorage.getItem("flightBooking"));
    const flightDetails = JSON.parse(window.sessionStorage.getItem("flight"));
    const bookingDetails = JSON.parse(window.sessionStorage.getItem("bookingDetails"));
    const boardingTime = new Date( new Date(flightBooking.departureDateTime).getTime() - 1000 * 60*60);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var passDetails = bookingDetails.passenger
    var currentPage = 1
    var passPerPage = 3

    const pageContents = []

    for (let i = 1; i <= Math.ceil(passDetails.length / passPerPage); i++) {
        const indexOfLastTodo = currentPage * passPerPage;
        const indexOfFirstTodo = indexOfLastTodo - passPerPage;
        const currentTodos = passDetails.slice(indexOfFirstTodo, indexOfLastTodo);
        console.log(currentTodos, i);
        const currentBoardingPass = (<Page key={i}>
            {
                currentTodos.map((current, index) => {
                    return (
                        <View key={index} style={styles.section}>
                            <View style={styles.section1}>
                                <Text >
                                    Boarding Pass
                                </Text>
                            </View>
                            {/* <View style={styles.section20}> */}
                                <View style={styles.section2}>
                                    <View style={styles.section3}>
                                        <View style={styles.section4}>
                                            <Text>
                                                {current.firstName + " " + current.lastName}
                                            </Text>
                                            <Text style={{ paddingTop: 20 }}>
                                                From:{flightDetails.route.departureAirport}
                                            </Text>
                                            <Text style={{ paddingTop: 20 }}>
                                                Dep. Time: {flightDetails.route.departureTime.slice(0, 5)}
                                            </Text>
                                            <Text style={{ paddingTop: 20 }}>
                                                PNR No: {boardingTime.getHours()+ ":" + boardingTime.getMinutes() }
                                            </Text>
                                        </View>
                                        <View style={styles.section4}>
                                            <Text>
                                                Flight No: {"BF" + flightDetails.flightNo}
                                            </Text>
                                            <Text style={{ paddingTop: 20 }}>
                                                To:{flightDetails.route.arrivalAirport}
                                            </Text>
                                            <Text style={{ paddingTop: 20 }}>
                                                Boarding: {boardingTime.getHours()+ ":" + boardingTime.getMinutes() }
                                            </Text>
                                            
                                            <Text style={{ paddingTop: 20 }}>
                                                Date: {boardingTime.getDate() + " " + monthNames[boardingTime.getMonth()] + " " + boardingTime.getFullYear()}
                                            </Text>
                                            
                                        </View>
                                        <View style={styles.section5}>
                                            <View style={styles.section6}>
                                                <Text>
                                                {current.firstName + " " + current.lastName}
                                                </Text>
                                                <Text style={{ paddingTop: 20 }}>
                                                    Flight From:
                                                    {flightDetails.route.departureAirport}
                                                </Text>
                                                <Text style={{ paddingTop: 20 }}>
                                                    Dep. Time: {flightDetails.route.departureTime.slice(0, 5)}
                                                </Text>
                                            </View>
                                            <View style={styles.section6}>
                                                <Text>
                                                    Flight No: {"BF" + flightDetails.flightNo}
                                                </Text>
                                                <Text style={{ paddingTop: 20 }}>
                                                Flight To:{flightDetails.route.arrivalAirport}
                                                </Text>
                                                <Text style={{ paddingTop: 20 }}>
                                                    Boarding :- {boardingTime.getHours()+ ":" + boardingTime.getMinutes() }
                                                </Text>
                                                <Text>
                                                    <Barcode value="Cake" />
                                                </Text>

                                            </View>
                                        </View>
                                    </View>
                                </View>
                            {/* </View> */}

                        </View>)
                })
            }
        </Page>)

        pageContents.push(currentBoardingPass)
        currentPage += 1

    }


    const MyDocument = () => (
        <Document style={styles.document}>
            {
                    pageContents.map((page) => {
                        return page
                    })
                }
            {/* <Page size="A4" style={styles.page}> */}
                
                {/* <View style={styles.section}>
                    <View style={styles.section1}>
                        <Text >
                            Boarding Pass
                        </Text>
                    </View>
                    <View style={styles.section20}>
                        <View style={styles.section2}>
                            <View style={styles.section3}>
                                <View style={styles.section4}>
                                    <Text>
                                        Vijay/Anand
                                    </Text>
                                    <Text style={{ paddingTop: 20 }}>
                                        From:Kochi
                                    </Text>
                                    <Text style={{ paddingTop: 20 }}>
                                        Dep. Time: 1150
                                    </Text>
                                </View>
                                <View style={styles.section4}>
                                    <Text>
                                        Flight No: BF1134
                                    </Text>
                                    <Text style={{ paddingTop: 20 }}>
                                        To:Delhi
                                    </Text>
                                    <Text style={{ paddingTop: 20 }}>
                                        Boarding: 1105
                                    </Text>
                                    <Text></Text>
                                </View>
                                <View style={styles.section5}>
                                    <View style={styles.section4}>
                                        <Text>
                                            Vijay/Anand
                                        </Text>
                                        <Text style={{ paddingTop: 20 }}>
                                            From:Kochi
                                        </Text>
                                        <Text style={{ paddingTop: 20 }}>
                                            Dep. Time: 1150
                                        </Text>
                                    </View>
                                    <View style={styles.section4}>
                                    <Text>
                                        Flight No: BF1134
                                    </Text>
                                    <Text style={{ paddingTop: 20 }}>
                                        To:Delhi
                                    </Text>
                                    <Text style={{ paddingTop: 20 }}>
                                        Boarding: 1105
                                    </Text>
                                    <Text>
                                    <Barcode value="Cake"/>
                                    </Text>
                                    
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                </View> */}
            {/* </Page> */}
        </Document>
    );

    return (
        <PDFViewer className="w-100" style={{ height: "100vh" }}>
            <MyDocument />
        </PDFViewer>
    )
}

export default BoardingPass
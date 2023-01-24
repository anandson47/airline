import React from "react";
import BoardingPass from "../CheckIn/BoardingPass";
import Barcode from "react-barcode";
import FlightTickets from "./FlightTickets";

const BookingComplete = () => {
    return (
        <div className="BookingComplete">
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
            <div class="tc mt6 mt5-m mt5-l ph3">
                <h1 class="f2 f1-l fw2 black mb0 lh-title">Tickets Booked Successfully <img src="/assets/images/confirm.png" className="w3" alt="successful" /></h1>
                <h2 class="fw1 f3 black mt3 mb4">Please find your Tickets below</h2>
            </div>
            <div className="cf">
                <div className="w-100 tc">
                <button data-bs-toggle="modal" data-bs-target="#boardingpass" className="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib black"><img src="/assets/images/ticket.png" className="w-20"/></button> <br/>Get your ticket above
                </div>
            </div>
            <div className="Adverts mt5">
                <div class=" row2  fl w-50-ns w-25-l pr2 tc  ">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="/assets/images/loyalty.jpg" alt="Avatar" style={{ "width": "100%", "height": "100%", }} />
                            </div>
                            <div class="flip-card-back">
                                <p>BROWNFIELD PROVIDES THE BEST PRICES IN THE
                                    MARKET THAT MAKES YOUR JOURNEY BOTH ENJOYABLE
                                    AND AFFORDABLE.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row2 fl w-50-ns w-25-l pr2 tc ">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="/assets/images/icici.png" alt="Avatar" style={{ "width": "100%", "height": "100%", }} />
                            </div>
                            <div class="flip-card-back">
                                <p>BROWNFIELD PROVIDES THE BEST PRICES IN THE
                                    MARKET THAT MAKES YOUR JOURNEY BOTH ENJOYABLE
                                    AND AFFORDABLE.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row2 fl w-50-ns w-25-l pr2 tc">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="/assets/images/hdfc.png" alt="Avatar" style={{ "width": "100%", "height": "100%", }} />
                            </div>
                            <div class="flip-card-back">
                                <p>BROWNFIELD PROVIDES THE BEST PRICES IN THE
                                    MARKET THAT MAKES YOUR JOURNEY BOTH ENJOYABLE
                                    AND AFFORDABLE.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row2 fl w-50-ns w-25-l tc ">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="/assets/images/sbi.jpg" alt="Avatar" style={{ "width": "100%", "height": "100%", }} />
                            </div>
                            <div class="flip-card-back">
                                <p>BROWNFIELD PROVIDES THE BEST PRICES IN THE
                                    MARKET THAT MAKES YOUR JOURNEY BOTH ENJOYABLE
                                    AND AFFORDABLE.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer mt5">
                <footer class="pa4 pa5-l black-70 bt b--black-10">
                    <div class="cf">
                        <h1 class="fl w-100 pv0 f6 fw6 ttu tracked ">Office Address</h1>
                        <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l pr2 pr0-ns">
                            <h4 class="f5 f4-l fw6">Pune , India</h4>
                            <span class="f7 f6-l db black-70">Brownfield St.</span>
                            <span class="f7 f6-l black-70">Pune, MH 441016 </span>
                            <a class="f6 db fw6 pv3 black-70 link dim" title="Call SF" href="tel:+12075555555">
                                +91 901-988-3456
                            </a>
                        </article>
                    </div>
                    <section class="cf ">
                        <div class=" mb0-ns w-100 w-50-l fr">
                            <a class="black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l" href="mailto:hello@impossible.com" >
                                contact@brownfield.com
                            </a>
                        </div>
                    </section>
                    <div class="dt dt--fixed w-100" >
                        <div class="dn dtc-ns v-mid">
                            <p class="f7 black-70 dib pr3 mb3">
                                Copyright © Brownfield Airlines
                            </p>
                        </div>
                        <div class="db dtc-ns black-70 tc tr-ns v-mid">
                            <a href="https://www.facebook.com/" class="link dim dib mr3 black-70" title="Impossible Labs on Facebook">
                                <svg class="db w2 h2" data-icon="facebook" viewBox="0 0 32 32" fill="currentColor">
                                    <title >facebook icon</title>
                                    <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://twitter.com/" class="link dim dib mr3 black-70">
                                <svg class="db w2 h2" data-icon="twitter" viewBox="0 0 32 32"
                                    fill="currentColor" >
                                    <title >twitter icon</title>
                                    <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://medium.com/" class="link dim dib mr3 black-70" title="Impossible Labs on Medium">
                                <svg class="db w2 h2" x="0px" y="0px" viewBox="0 0 290 248.6"
                                    fill="currentColor" >
                                    <g >
                                        <path fill="currentColor" class="st0" d="M287.8,46.3L196,0.3c-0.4-0.2-0.9-0.3-1.3-0.3c0,0-0.1,0-0.1,0c-1.1,0-2.2,0.6-2.8,1.5l-56.6,92l63.2,102.7 l90.4-146.9C289.4,48.3,289,46.8,287.8,46.3z"
                                        ></path>
                                        <polygon fill="currentColor" points="105.2,61.2 105.2,160.3 193.3,204.4 	"
                                        ></polygon>
                                        <path fill="currentColor" d="M201,208.2l80.9,40.5c4.4,2.2,8,0,8-5v-180L201,208.2z"
                                        ></path>
                                        <path fill="currentColor" d="M95.5,46.7L10.7,4.3L5.4,1.7C4.6,1.3,3.8,1.1,3.2,1.1c-0.9,0-1.7,0.4-2.3,1.1C0.3,2.8,0,3.8,0,5v193.4 c0,3.3,2.4,7.2,5.4,8.7l83.3,41.6c1.2,0.6,2.3,0.9,3.3,0.9c2.8,0,4.8-2.2,4.8-5.8V48.7C96.7,47.8,96.2,47.1,95.5,46.7z"
                                        ></path>
                                    </g>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/" class="link dim dib black-70">
                                <svg class="db w2 h2" x="0px" y="0px" viewBox="0 0 48 48" >
                                    <linearGradient gradientUnits="userSpaceOnUse" x1="23.9995"
                                        y1="0" x2="23.9995" y2="48.0005" >
                                        <stop offset="0" ></stop>
                                        <stop offset="1" ></stop>
                                    </linearGradient>
                                    <path fill="currentColor" d="M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z"
                                    ></path>
                                    <g >
                                        <g >
                                            <path fill="#FFFFFF" d="M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z"
                                            ></path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="db dn-ns">
                        <p class="f7 black-70 mt4 tc">
                            Copyright © Your Company 2038
                        </p>
                    </div>
                </footer>
            </div>

            <div class="modal" id="boardingpass" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        
                        <button type="button" class="btn-close modal-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="modal-body">
                            <FlightTickets/>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        
    )
}
export default BookingComplete
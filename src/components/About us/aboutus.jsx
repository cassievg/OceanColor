import { useState } from 'react';
import './aboutus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function AboutUs() {
    return (
        <div className='container-fluid abtusContain'>
            <div className="container-fluid">
                <h1>Welcome to Ocean Color Helpdesk!</h1>
                <p id="intro-text">
                    EAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAE
                </p>
                <h3><strong>About Us</strong></h3>
                <p id="abtus-text">
                    EAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAE
                </p>
            </div>
            <div className="container-fluid" id="branches">
                <h3><strong>Our Branches</strong></h3>
                <div className="container">
                    <div className="row">
                        <div className='col branch-details'>
                            <img src="/src/assets/symbol.svg"/><br/>
                            <h3 className='img-title'>Tambora Branch</h3>
                            <p id="img-caption">
                                azaazzazazzazazzazaazzazaza<br/>ashjdasdhjsadhjsadhjasdh<br/>jadhjasdh
                            </p>
                        </div>
                        <div className='col branch-details'>
                            <img src="/src/assets/symbol.svg"/><br/>
                            <h3 className='img-title'>Cengkareng Branch</h3>
                            <p id="img-caption">
                                azaazzazazzazazzazaazzazaza<br/>ashjdasdhjsadhjsadhjasdh<br/>jadhjasdh
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <h3><strong>FAQ</strong></h3>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Question 1: {/* insert text here */}
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{/* insert text here */}</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Question 2: {/* insert text here */}
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{/* insert text here */}</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Question 3: {/* insert text here */}
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{/* insert text here */}</div>
                    </div>
                </div>
            </div>
            <div className='container-fluid contacts'>
                <h3><strong>Contact Us</strong></h3>
                <p id="contact-text">
                    EAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAEEAHIAEHIHEAIAE
                </p>
            </div>
        </div>
    )
}

export default AboutUs;
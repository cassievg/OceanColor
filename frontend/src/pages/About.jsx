import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span className="highlight">Ocean Color</span> Help Desk</h1>
          <p className="lead text-center">
            Ocean Color is a company that sells dyes, paint and equipments and also offers services such as screen printing.<br></br>
            We're passionate about precise color and craftsmanship. Our mission is to help you transform your space with ease and inspiration. <br></br>
            This is Ocean Color's help desk and hope we can guide you on your journey!
          </p>
        </div>
      </section>

      <div className='container-fluid aboutus-container'>
        <h1>
          About Us
        </h1>
        <div className='aboutus-content'>
          <p>
            This is where you voice your queries, questions and inqueries about Ocean Color's products and services. <br></br>
            Issues, clarification or more information about our product and services can all be answered here by creating a ticket. <br></br>
            A ticket is where you explain and educate us about your situation and how we can help to make it better!
          </p>
        </div>
      </div>

      <div className='container-fluid branches-container'>
        <h1>
          Branches
        </h1>
        <div className='branches-content'>
          <div className='row'>
            <div className='col text-center'>
              <figure className='figure'>
                <img src='../img/tambora-branch.png' alt='Branch1' className='branches-img rounded'></img>
                <h4>Tambora Branch</h4>
                <h6>Jl. Jembatan Besi Raya No.209 2, RT.2/RW.3, <br></br>
                Jemb. Besi, Kec. Tambora, Kota Jakarta Barat
                </h6>
              </figure>
            </div>
            <div className='col text-center'>
                <figure className='figure'>
                <img src='../img/cengkareng-branch.png' alt='Branch1' className='branches-img rounded'></img>
                <h4>Tambora Branch</h4>
                <h6>Jl. Utama Raya No.12 4, RT.4/RW.3, Cengkareng Bar.,<br></br>
                Kecamatan Cengkareng, Kota Jakarta Barat
                </h6>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid faq-container'>
        <h1>
          Frequently asked Questions
        </h1>
        <div className='faq-content'>
          <table className='table'>
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>
                  <div className='faq-questions'>
                    Q1: How do I order Ocean Color's product or service from this web application?
                  </div>
                  <div className='faq-answers'>
                    A1: Ocean Color currently do not have an e-commerce application for ordering, but contacts are provided below where you can directly order from us.
                  </div>
                </th>
              </tr>
              <tr>
                <th scope='row'>
                  <div className='faq-questions'>
                    Q2: Can I have a refund on any of the products?
                  </div>
                  <div className='faq-answers'>
                    A2: Our refund policies is within 30 days of purchase where the product is not used or damanged and receipts are required.
                  </div>
                </th>
              </tr>
              <tr>
                <th scope='row'>
                  <div className='faq-questions'>
                    Q3: How to exchange or replace any of the product?
                  </div>
                  <div className='faq-answers'>
                    A3: We allow exchanging product to another one with the same price range and the product must be intact without any uses or damages with the receipt in the store.
                  </div>
                </th>
              </tr>
              <tr>
                <th scope='row'>
                  <div className='faq-questions'>
                    Q4: Does Ocean Color deliver outside of Jakarta?
                  </div>
                  <div className='faq-answers'>
                    A4: Yes we do delivery outside of Jakarta and cover many areas of Indonesia.
                  </div>
                </th>
              </tr>
              <tr>
                <th scope='row'>
                  <div className='faq-questions'>
                    Q5: How can I contact customer service?
                  </div>
                  <div className='faq-answers'>
                    A5: This application can help you with your issues by creating a ticket after loggin in and inputting your current situation and the issue which we will try to solve immediately.
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='container-fluid contact-container'>
        <h1>
          Contact
        </h1>
        <div className='contact-content'>
          <table className='table table-borderless'>
            <tbody>
              <tr>
                <th><img src='../img/WA-logo.png' alt='WA' className='contact-icon'></img> 081325777621 | 081315966873 </th>
              </tr>
              <tr>
                <th><img src='../img/phone-icon.png' alt='Phone' className='contact-icon'></img> (021) 6300 721 | (021) 6386 2789 </th>
              </tr>
              <tr>
                <th><img src='../img/calendar-icon.png' alt='Date' className='contact-icon'></img> Monday - Saturday </th>
              </tr>
              <tr>
                <th><img src='../img/clock-icon.png' alt='Clock' className='contact-icon'></img> 08.00 - 17.00 WIB </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;
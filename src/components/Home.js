import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Expertteam from "./Expertteam";

import { Helmet } from "react-helmet";

function Home() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items1 = [
    <div className="item" data-value="1">
      <div className="service-wrap">
        <div className="image-part">
          <img src="images/1.jpg" alt="Spacious Rooms" />
        </div>
        <div className="content-part">
          <h3 className="title">
            <a href="/Services">Spacious Rooms</a>
          </h3>
          <div className="desc">
            We provide Spacious rooms with comfortable beds and personal
            wadrodes for your storage
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="2">
      <div className="service-wrap">
        <div className="image-part">
          <img src="images/2.jpg" alt="Water Facility" />
        </div>
        <div className="content-part">
          <h3 className="title">
            <a href="/Services">Water Facility</a>
          </h3>
          <div className="desc">
            We provide purified drinking water and hot water for bathing
            everyday, all day long.
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="3">
      <div className="service-wrap ">
        <div className="image-part">
          <img src="images/3.jpg" alt="Hygienic Food" />
        </div>
        <div className="content-part">
          <h3 className="title">
            <a href="/Services">Hygienic Food</a>
          </h3>
          <div className="desc">
            We offer a wide range fo meals at best quality and ensure complete
            hygien in the mess
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="4">
      <div className="service-wrap">
        <div className="image-part">
          <img src="images/4.jpg" alt="Security" />
        </div>
        <div className="content-part">
          <h3 className="title">
            <a href="/Services">Security</a>
          </h3>
          <div className="desc">
            We have reliable wardens & Security guards who will service 24*7 for
            womens safety.
          </div>
        </div>
      </div>
    </div>,
  ];

  return (
    <div>
      <>
        <div
          id="rs-slider"
          className="rs-slider slider3 rs-slider-style3"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div className="bend niceties">
            <img
              className="imgeshostel"
              src="images/bannerhostel.jpg"
              alt="metroslider"
              title=""
            />

            <p className="centered">
              Welcome <br />
              <a href="https://codepen.io/grohit/">Metro Girls Hostel</a>
            </p>
          </div>
          <div className="wave"></div>
          <div id="slide-1" className="slider-direction">
            <div className="content-part">
              <div className="slider-des"></div>
            </div>
          </div>
        </div>
      </>

      <div id="services" className="rs-services serviceindustry style2 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12  col-md-12 ">
              <div className="sec-title3 text-center mb-15"></div>
            </div>
          </div>
          <div class="jumbotron">
            <br />
            <br />

            <h1 className="text-center pt-5 ">Our Services</h1>
          </div>

          <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={3000}
            animationDuration={3000}
            infinite
            mouseTracking
            items={items1}
            height="50vh"
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </div>
      </div>

      <Expertteam />

      <div className="container py-4" id="about">
        <div class="text-center"></div>
        <div className="row mx-auto py-3 pb-1">
          <div className="col-lg-6 col-md-6 col-12 col-xxl-5 d-flex flex-column justify-content-center align-item-start">
            <div class="jumbotron pb-5">
              <h1 className="text-center">About Us</h1>
            </div>

            <span class Name="section-paragraph fs-5 pb-3 fs-2">
              We aim to provide housing solutions for women who are away from
              home for study or work. We at Metro Girls Hostel are well-known
              for providing hostel accommodation on a monthly basis at  Vijay
              Nagar, Indore, Madhya Pradesh. We ensure the utmost comfort by
              providing spacious rooms with all amenities. We strive to serve
              women to the best of our ability and provide facilities for their
              peaceful and safe stay at our women's hostel.{" "}
            </span>
          </div>
          <div className="col-lg-6 col-md-6 col-12 col-xxl-7 mx-auto">
            <figure>
              <img
                className="cardimges img-fluid w-100"
                src="images\room.png"
                alt="android-app-banner"
              ></img>
            </figure>
          </div>
        </div>
      </div>

      <div class="container pb-5" id="Gallary">
        <div class="jumbotron">
          <h1 className="text-center pb-5">Gallery</h1>
        </div>

        <div class="row">
          <div class="cardimges col-sm-6 col-md-4 mb-3">
            <img
              src="images/Gallary1.jpg"
              alt="Gallary1"
              class="fluid img-thumbnail"
            />
          </div>
          <div class=" cardimges col-sm-6 col-md-4 mb-3">
            <img
              src="images/Gallary2.jpg"
              alt="Gallary2"
              class="fluid img-thumbnail"
            />
          </div>
          <div class="cardimges col-sm-6 col-md-4 mb-3">
            <img
              src="images/Gallary3.jpg"
              alt="Gallary3"
              class="fluid img-thumbnail"
            />
          </div>
          <div class="cardimges col-sm-6 col-md-4 mb-3">
            <img
              src="images/Gallary4.jpg"
              alt="Gallary4"
              class="fluid img-thumbnail"
            />
          </div>
          <div class="cardimges col-sm-6 col-md-4 mb-3">
            <img
              src="images/Gallary5.jpg"
              alt="Gallary5"
              class="fluid img-thumbnail"
            />
          </div>
          <div class="cardimges col-sm-6 col-md-4 mb-3">
            <img
              src="images/Gallary6.jpg"
              alt="Gallary6"
              class="fluid img-thumbnail"
            />
          </div>
          <div class="cardimges col-sm-6 col-md-4 mb-3">
            <img
              src="images/Gallary7.jpg"
              alt="Gallary7"
              class="fluid img-thumbnail"
            />
          </div>
          <div class="cardimges col-sm-6 col-md-4 mb-3">
            <img
              src="images/Gallary8.jpg"
              alt="Gallary8"
              class="fluid img-thumbnail"
            />
          </div>
          <div class="cardimges col-sm-6 col-md-4 mb-3">
            <img
              src="images/Gallary9.jpg"
              alt="Gallary9"
              class="fluid img-thumbnail"
            />
          </div>
        </div>

        <div
          className="shadow p-3 mb-5 bg-body rounded fluid rs-contact contact-style2 pt-95 pb-95 py-5"
          id="contectus"
        >
          <div className="container">
            <div class="jumbotron">
              <br />
              <h1 className="text-center py-4">Contact Us</h1>
            </div>

            <div className="row">
              <div className="col-lg-6 pr-40 md-pr-15 md-mb-50">
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14717.416120137623!2d75.89417369999998!3d22.752239200000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd62059a2a07a8788!2sMetro%20Girls%20Hostel!5e0!3m2!1sen!2sin!4v1675661208790!5m2!1sen!2sin"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div class="col-lg-6  text-sm-left">
                <br />
                <br />
                <br />
                <span
                  class="fs-4 fa fa-map-marker fa-fw"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="5842 Hillcrest Rd"
                  style={{ color: "#105469" }}
                ></span>
                &nbsp;
                <span className="fs-5" style={{ color: "#105469" }}>
                  6/7 Vijay Nagar, behind police station,
                  <br /> Indore, Madhya Pradesh 452001
                </span>
                <br />
                <br />
                <br />
                <span
                  class=" fs-3 fa fa-phone fa-fw"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="(870) 288-4149"
                  style={{ color: "#105469" }}
                ></span>
                &nbsp;
                <span style={{ color: "#105469" }} class="fs-4  small">
                  +91 9329449972
                </span>
                <br />
                <br />
                <br />
                <span
                  class="fs-3  fa fa-envelope fa-fw "
                  data-toggle="tooltip"
                  data-original-title=""
                  title=""
                  style={{ color: "#105469" }}
                ></span>
                &nbsp;
                <span
                  style={{ color: "#105469" }}
                  class="fs-5  small text-truncate"
                >
                  metrovijaynagar@gmail.com
                </span>
                <br />
                <br />
                <br /> 
                
                <span
                  style={{ color: "#105469" }}
                  class="  small text-truncate"
                >
                  CONNECT{" "}
                </span>
                <br />
                <span
                  style={{ color: "#105469" }}
                  class="fs-2   small text-truncate"
                >
                  <a href="https://www.facebook.com/profile.php?id=100089494707877">
                    <i class="fa fa-facebook-f"></i>{" "}
                  </a>
                  &nbsp;
                  <a href="https://www.instagram.com/metro_girlshostel/">
                    <i class="fa fa-instagram"></i>
                  </a>
                  &nbsp;&nbsp;
                  <a href="https://www.linkedin.com/company/metro-girls-hostel/">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </span>
                <span
                  class="fs-2  fa-fw "
                  data-toggle="tooltip"
                  data-original-title=""
                  title=""
                  style={{ color: "#105469" }}
                ></span>
              </div>
            </div>
          </div>

          <div className="rs-contact main-home">
            <div className="container">
              <div className="contact-icons-style box-address pt-95 ">
                <div className="row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div
          className="copyright text-center text-white pb-1"
          style={{ background: "linear-gradient(-60deg, #074b79,#0c2238)" }}
        >
          <span className="fs-5 pt-4">
            ©2023 MetroGirls Hostel . All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;

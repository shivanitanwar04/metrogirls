import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Expertteam() {
  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  const items1 = [
    <div className="itemteam" data-value="1">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <img src="images/we1.png" alt="working women" />
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">Working Women</h4>
          {/* <div> EXECUTIVE</div> */}
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="2">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <img src="images/we2.png" alt="students" />
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">Students</h4>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="3">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <img src="images/we3.png" alt="travellers" />
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">Travellers</h4>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="4">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <img src="images/we4.png" alt="job seekers" />
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">Job Seekers</h4>
        </div>
      </div>
    </div>,
  ];

  return (
    <div>
      <div className="rs-team style4 bg17 pt-90 pb-20 ">
        <div className="container">
          <div className="sec-title3 text-center ">
            <div class="jumbotron">
              <h1 className="text-center">We Accommodate</h1>
            </div>
          </div>
          <br />
          <br />

          <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={3000}
            animationDuration={3000}
            animationType="fadeout"
            infinite
            mouseTracking
            items={items1}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </div>
       
      </div>
    </div>
  );
}

export default Expertteam;

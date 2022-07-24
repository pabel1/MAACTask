import React from "react";
import "./Banner.css";
import TabPhnImg from '../../images/tab-phn-group.png';

const Banner = () => {
  return (
    <div className="banner__top">
      <div className="request__demo">
        <div className="mx-auto grid w-3/5 ">
          <h1 className="text-5xl mt-20 my-4 tracking-wider leading-[60px] text-center font-bold">
            Analytics that transform your product inside-out
          </h1>
          <div className="mx-auto mt-5 ">
            <button className="login__btn">Request for Demo</button>
            <button className="regi__btn">Request for Demo</button>
          </div>
          <div className="tab__phn__group">
            <img src={TabPhnImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

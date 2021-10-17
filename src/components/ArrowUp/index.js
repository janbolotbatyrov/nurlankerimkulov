import React from "react";
import "./ArrowUp.css";
import cn from "classnames";

const index = () => {
  const scrollBtn = document.querySelector(".isShowBtn");

  window.onscroll = () => {
    if (window.scrollY > 600) {
      document.querySelector(".isShowBtn").classList.remove("isShowBtnHide");
    } else if (window.scrollY < 600) {
      document.querySelector(".isShowBtn").classList.add("isShowBtnHide");
    }
  };

  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="isShowBtn isShowBtnHide">
      <div className="arrow" onClick={() => scrollUp()}></div>
    </div>
  );
};

export default index;

import React from "react";

const Price = () => {
  return (
    <section className="price">
      <div className="price__grid">
        <div className="price__item">
          <h2 className="primary__text">0.04 %</h2>
          <div className="secondary__text">5 Min</div>
        </div>
        <div className="price__item">
          <h2 className="primary__text">0.75 %</h2>
          <div className="secondary__text">1 Hour</div>
        </div>
        <div className="price__item middle">
          <h1 className="secondary__text">Best Price To Trade</h1>
          <h1 className="main__text">₹ 26,58,826</h1>
          <h2 className="secondary__text">
            Average BTC/INR net price including commission
          </h2>
        </div>
        <div className="price__item">
          <h2 className="primary__text">2.01 %</h2>
          <div className="secondary__text">1 Day</div>
        </div>
        <div className="price__item">
          <h2 className="primary__text">7.82 %</h2>
          <div className="secondary__text">7 Day</div>
        </div>
      </div>
      <div className="price__banner">
        <img
          src="https://hodlinfo.com/static/media/cryptonews.54869ee3.png"
          alt="price"
        />
      </div>
    </section>
  );
};

export default Price;

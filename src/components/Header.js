import React, { useEffect, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import CircularStatic from "../helper/CircularProgress";

const root = getComputedStyle(document.querySelector(":root"));

console.log(root);

const Header = () => {
  const [crypto, setCrypto] = useState("BTC");
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (theme) {
      document.documentElement.style.setProperty("--background", "#fff");
      document.documentElement.style.setProperty("--light-text", "#000");
      document.documentElement.style.setProperty(
        "--light-background",
        "#f8f9fa"
      );
      document.documentElement.style.setProperty("--table-font", "16px");
    } else {
      document.documentElement.style.setProperty("--background", "#191c29");
      document.documentElement.style.setProperty("--light-text", "#fff");
      document.documentElement.style.setProperty(
        "--light-background",
        "#2f3240"
      );
      document.documentElement.style.setProperty("--table-font", "24px");
    }
  }, [theme]);

  return (
    <header className="header">
      <div className="header__image">
        <div>
          <a href="https://hodlinfo.com">
            <div>
              <img
                src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png"
                alt="Logo"
              />
            </div>
          </a>

          <div className="header__title">
            <p>
              Powered By{" "}
              <a href="https://www.finstreet.in/courses">Finstreet</a>
            </p>
          </div>
        </div>
      </div>
      <div className="header__currency">
        <div className="currency">
          <select name="INR">
            <option value="INR">INR</option>
          </select>
        </div>
        <div className="crypto">
          <select
            name="Crypto"
            value={crypto}
            onChange={(e) => setCrypto(e.target.value)}
          >
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="USDT">USDT</option>
            <option value="XRP">XRP</option>
            <option value="TRX">TRX</option>
            <option value="DASH">DASH</option>
            <option value="ZEC">ZEC</option>
            <option value="XEM">XEM</option>
            <option value="IOST">IOST</option>
            <option value="WIN">WIN</option>
            <option value="BTT">BTT</option>
            <option value="WRX">WRX</option>
          </select>
        </div>
        <div className="buy">
          <h3>BUY {crypto}</h3>
        </div>
      </div>
      <div className="header__toggle">
        <div className="loader">
          <CircularStatic />
        </div>
        <div className="button">
          <button>
            <FaTelegramPlane />
            connect telegram
          </button>
        </div>
        <div className="toggle-button">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round" onClick={() => setTheme(!theme)}></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;

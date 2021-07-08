import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer__copyright">
        <div className="left__copyright">
          <h4>Copyright &copy; 2019</h4>
          <h4>HodlInfo.com</h4>
          <h4>
            Developed By <a href="/">QuadBTech</a>
          </h4>
        </div>
        <div className="right__copyright">
          <h4>Support</h4>
        </div>
      </div>
      <div className="footer__fixed">
        <button>Add hodlinfo to home Screen</button>
      </div>
    </footer>
  );
};

export default Footer;

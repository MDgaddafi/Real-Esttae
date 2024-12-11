import logo from "/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  

  
return (
<div className="lg:w-[80%] md:w-[90%] w-[95%] mx-auto">
<footer className="footer bg-accent rounded-xl text-base-content p-10">
  <aside>
    <Link className="w-1/2" to="/"><img className="hover:cursor-pointer transform transition duration-500 hover:scale-110" src={logo} alt="Real Esttae" /></Link>
    <p>
    Copyright © 2024 <br /> All right reserved by Real Esttae
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="your-email@gmailcom"
          className="input focus:outline-none ring-0 join-item" />
        <button className="btn bg-primary text-white join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
</div>
);
};

export default Footer;
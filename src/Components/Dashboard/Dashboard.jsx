import React from "react";
import "./Dashboard.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRegCircle } from "react-icons/fa";


// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <div className="earnings">
//         <h2>Total Earnings</h2>
//         <p>#430.00</p>
//         <span>as of 01-December 2022</span>
//       </div>
//       <div className="contributed">
//         <h2>Total Contributed</h2>
//         <p className='contribute'>#400.00</p>
//         <span>as of 01-December 2022</span>
//       </div>


const Dashboard = () => {
  return (
    <div className="main-content">
      <nav className="navs">
        <div>
          <img src="/csavings.jpg" alt="" />
        </div>
        <div>
          <div className="notif">
            <div>
              <IoMdNotificationsOutline />
            </div>
            <div>
              <CgProfile />
              Adejare02
            </div>
          </div>
        </div>
      </nav>

      <header className="dashHeader">
        <div className="welcome">
          <h2>
            Welcome <span className="username">Adejare02!</span>
          </h2>
          <p>
            My Savings: <span className="savings-amount">0</span>
          </p>
          <p>$0.00</p>
        </div>
        <div className="wallet">
          <div>
            <p>Generate Wallet</p>
            <p>$0.00</p>
          </div>
          <button className="add-fund">Add Fund</button>
        </div>
      </header>
      <section className="requirements-section">
        <div className="requirements">
          <h3>Requirements</h3>
          <ul>
            <li>
              Link your BVN{" "}
              <span className="status pending">
                {" "}
                <FaRegCircle /> Pending
              </span>
            </li>
            <li>
              Set your security question{" "}
              <span className="status pending">
                {" "}
                <FaRegCircle /> Pending
              </span>
            </li>
            <li>
              Upload Valid ID{" "}
              <span className="status pending">
                {" "}
                <FaRegCircle /> Pending
              </span>
            </li>
            <li>
              Upload utility bill{" "}
              <span className="status pending">
                {" "}
                <FaRegCircle /> Pending
              </span>
            </li>
            <li>
              Next of kin{" "}
              <span className="status pending">
                {" "}
                <FaRegCircle /> Pending
              </span>
            </li>
            <li>
              Bank account{" "}
              <span className="status pending">
                {" "}
                <FaRegCircle /> Pending
              </span>
            </li>
            <li>
              Link your Debit card{" "}
              <span className="status pending">
                {" "}
                <FaRegCircle /> Pending
              </span>
            </li>
          </ul>
        </div>
        <div className="need-help">
          <div className="need-help-img">
            <img src="figma-1.jpg" alt="" />
          </div>
          <div className="need-help-text">
            {/* <h3>Need help?</h3> */}
            {/* <p>
              Contact us at 080-1234-5678 or email us at 080-1234-5678@example.com
            </p> */}
            <img src="Frame-32.jpg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Dashboard;
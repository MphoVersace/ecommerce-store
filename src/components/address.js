import lock from "../assets/cardlock.svg";
import { Link } from "react-router-dom";
import "../style2.css";

function AddAdress() {
    return (
      <>
        <div className="payment-container">
          <div className="new-card-form">
            <form>
              <div className="form-group">
                <div className="card">
                  <label htmlFor="name">Shipping name </label>
                  <input type="text" id="name" placeholder="John Maker" />
                </div>
              </div>
              <div className="form-group">
                <div className="card">
                  <label htmlFor="name">Street name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="123 Plae Grond Street"
                  />
                </div>
              </div>
  
              <div className="form-group">
                <div className="card">
                  <label htmlFor="name">City</label>
                  <input type="text" id="name" placeholder="Vermont" />
                </div>
              </div>
  
              <div className="form-group">
                <div className="card">
                  <label htmlFor="name">State/Province</label>
                  <input type="text" id="name" placeholder="California" />
                </div>
              </div>
  
              <div className="form-group">
                <div className="card">
                  <label htmlFor="name">Country</label>
                  <input type="text" id="name" placeholder="United States" />
                </div>
              </div>
              <br></br>
  
              <div className="default-payment-checkbox">
                <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                <label htmlFor="myCheckbox">
                  Save this as your default payment method
                </label>
              </div>
  
              <div className="submit-button">
                <Link to="/AddPayment">
                  <button className="bttn5">Add Payment Method</button>
                </Link>
              </div>
  
              <div className="footer">
                <p>back</p>
                <p id="la">
                  <img src={lock} alt=""></img>Secure Connection
                </p>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  
  export default AddAdress;
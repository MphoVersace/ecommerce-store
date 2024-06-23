import cardIcon from "../assets/card-icon.svg";
import lockIcon from "../assets/cardlock.svg";
import "../App.css";


function PaymentForm() {
    return (
      <div className="payment-container">
        <div className="card-selection">
          <h1>Select a Card</h1>
          <p>
            <img src={cardIcon} alt="MasterCard" />
            MasterCard ending in 4242
          </p>
          <p>
            <img src={cardIcon} alt="VISA Debit" />
            VISA Debit ending in 2894
          </p>
        </div>
  
        <div className="new-card-form">
          <form>
            <h1>Add a New Card</h1>
  
            <div className="form-group">
              <div className="card-details">
                <label htmlFor="cardholderName">Name</label>
                <input type="text" id="cardholderName" placeholder="John Maker" className="card-input" />
              </div>
            </div>
  
            <div className="form-group">
              <div className="card-details">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" placeholder="5126-5987-2214-7621" className="card-input" />
              </div>
            </div>
  
            <div className="form-group">
              <div className="expiry-date">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="text" id="expiryDate" placeholder="MM/YYYY" />
              </div>
  
              <div className="cvc-code">
                <label htmlFor="cvc">CVC</label>
                <input type="text" id="cvc" placeholder="123" />
              </div>
            </div>
  
            <div className="default-payment-checkbox">
              <input type="checkbox" id="defaultPayment" name="defaultPayment" />
              <label htmlFor="defaultPayment">Save this as your default payment method</label>
            </div>
  
            <div className="submit-button">
              <button type="button" className="submit-btn">
                Add Payment Method
              </button>
            </div>
  
            <div className="footer">
              <p className="back-link">Back</p>
              <p className="secure-connection">
                <img src={lockIcon} alt="Secure Connection" />
                Secure Connection
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default PaymentForm;

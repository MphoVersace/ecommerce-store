import cardIcon from "../assets/card-icon.svg";
import lockIcon from "../assets/cardlock.svg";
import "../style1.css";

function AddPayment() {
  return (
    <>
      <div className="containers">
        <div className="top-container">
          <h1>SELECT A CARD</h1>
          <p><img src={cardIcon} alt="Card Icon"/>MasterCard ending in 4242</p>
          <p><img src={cardIcon} alt="Card Icon"/>VISA Debit ending in 2894</p>
        </div>

        <div className="bottom-container">
          <form>
            <h1>ADD A NEW CARD</h1>
            <div className="form-group">
              <div className="card">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Maker" />
              </div>
            </div>
            <div className="form-group">
              <div className="card">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" placeholder="5126-5987-2214-7621" />
              </div>
            </div>
            <div className="form-group">
              <div className="Date">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="text" id="expiryDate" placeholder="MM/YYYY" />
              </div>
              <div className="Date">
                <label htmlFor="cvc">CVC</label>
                <input type="text" id="cvc" placeholder="123" />
              </div>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="myCheckbox" name="myCheckbox" />
              <label htmlFor="myCheckbox">Save this as your default payment method</label>
            </div>
            <div className="btn">
              <button className="bttn">Add Payment Method</button>
            </div>
            <div className="last-line">
              <p id="ba">Back</p>
              <p id="la"><img src={lockIcon} alt="Lock Icon"/>Secure Connection</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddPayment;
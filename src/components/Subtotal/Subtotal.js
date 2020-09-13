// import  & libraries
import React from "react";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
// Import State handlers
import { useStateValue } from "../../StateProvider/StateProvider";
import { getBasketTotal } from "../../StateProvider/reducer";
// import styling
import "./Subtotal.css";

// import components

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* calculate total items */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"R"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;

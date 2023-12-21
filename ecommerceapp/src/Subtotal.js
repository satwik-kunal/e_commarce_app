import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal(){
    return(
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>
                        Subtotal (0 items): <strong>$0</strong>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>This order contains a gift
                        </small>
                    
                    </p>
                    <button>Proceed to Checkout</button>
                </>
            )}

            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            // prefix={$}


            
            />

        </div>
    )
}
export default Subtotal;
import { useState } from "react"
import { Link } from "react-router-dom"
import "../layout/pay.css"
import QRCode from '../layout/QRCode.jpeg'
const PaymentPage = () =>{
    const [value , setValue] = useState(false)
    const [upiValue , setUpiValue] = useState(false)
    const [qr , setQr] = useState(false)
    return(
        <div className="paypage-main">
            <h1>How Would You Like To Pay</h1>
            <div className="top-div">
                <div className="left-div">
                    <div className="left-first-div">
                        <div className="pay-bal">
                            <p>Your Cinefirma Pay Balence</p>
                            <p>Topup Cinefirma Pay balance</p>
                        </div>
                        <hr/>
                        <div>
                            <Link onClick={()=>setValue(!value)}>Have a Gift Card or Promo Code?</Link>
                            {
                                value? <div>
                                    <input className="promo-input" placeholder="enter gift card" />
                                    <button className="promo-apply">Apply</button>
                                </div> : null 
                            }
                            <hr/>
                        </div>
                    </div>
                    <div>
                        <h3>UPI</h3>
                        <div className="top-pay-div">
                        <div className="first-div-pay">
                        <div  className="upi-div">
                            <input name="pay" onClick={()=>setUpiValue(!upiValue)} type="radio"/>
                            <span>Enter UPI Id</span>
                            <span className="what-upi">What is UPI?</span>
                           {
                            upiValue? <div className="upi-ver">
                            <p className="please-enter-upi">Please Enter  UPI ID</p>
                            <input className="upi-input" placeholder="Enter UPI ID"/>
                            <button className="verify-btn">Verify</button>
                        </div>:null
                           }
                        </div>
                        </div>
                        <div className="second-div-pay">
                            <h4 className="qr-head">
                                <Link onClick={()=>setQr(!qr)}>QR Code</Link>
                                {
                                    qr?<div>
                        <img className="qrscanner" src={QRCode} />
                                        
                                    </div> : null
                                }
                            </h4>
                        </div>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <h3>OTHER PAYMENT METHOD</h3>
                        <div className="net-bank-div">
                            <input name="pay" type="radio" />
                            <p className="net-bank-para">Net Banking</p>
                            <select>
                                <option>AXIS BANK</option>
                                <option>HDFC BANK</option>
                                <option>ICICI BANK</option>
                                <option>State Bank Of India</option>
                                <option>Airtel Payment Bank</option>
                                <option>Central Bank O Of India</option>
                                <option>IDBI BANK</option>
                                <option>Yes BANK</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="place-final">
                    <div>
                        <button className="place-btn">Place your Order</button>
                    </div>
                    <div>
                        <h4>Order Summary</h4>
                        <span>149 Rs</span>
                    </div>
                    <hr/>
                    <div>
                        <h3>Order Total</h3>
                        <h3>149.00</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PaymentPage
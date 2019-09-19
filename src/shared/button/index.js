import React from 'react'
import "./style.sass";

const Button = () => {
    return (
        <div>
            <h3 className="heading">Buttons - <span></span></h3>
            <p>Buttons used in Cars24 site.</p>
                <div className="block col-md-6">
                    <h6>Primary Button</h6>
                    <button className="cars24-btn">SELL MY CAR</button>
                    <h6>Secondary Button</h6>
                    <button className="cars24-sec-btn">SELL MY CAR</button>
                    <h6>Disable Button</h6>
                    <button className="cars24-btn-disable">SELL MY CAR</button>
                    <h6>Secondary Disable Button</h6>
                    <button className="cars24-sec-btn disable">SELL MY CAR</button>
                </div>
        </div>
    )
}
export default Button;
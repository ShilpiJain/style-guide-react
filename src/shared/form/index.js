import React from 'react'
import "./style.sass";

const Forms = () => {
    return (
        <>
            <h3 className="heading">Forms - <span>Text Input Style</span></h3>
            <p>Various Text input styles for form.</p>
            <div className="col-md-4">
                <div className="username" htmlFor="username">
                    <label>User Name</label>
                    <input type="text" className="text-box"/>
                </div>
            </div>
        </>
    )
}
export default Forms;
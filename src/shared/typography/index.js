import React from 'react';
import "./style.sass";

const Typography = () => {
    return (
        <div>
           <h3 className="heading">Typography - <span>Style</span></h3> 
           <p>Typographic style used in Cars24 site.</p>
           <h1>H1 - 40px, Roboto (500), line-height: 1.2;, </h1>
           <h2>H2 - 24px, Open Sans, Light (300)</h2>
           <h3>H3 - 18px, Open Sans, Light (300)</h3>
           <h4>H4 - 15px, Open Sans, Light (300)</h4>
           <h5>H5 - 14px, Open Sans, Light (300)</h5>
           <h6>H6 - 12px, Open Sans, Light (300)</h6>
        </div>
    )
}
export default Typography;
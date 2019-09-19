import React from 'react';
import "./style.sass";

const Typography = () => {
    return (
        <div className="typo">
           <h3 className="heading">Typography - <span>Style</span></h3> 
           <p>Typographic style used in Cars24 site.</p>
            <div className="dark">
                <h1>H1 - 36px, Roboto-Medium (500), 48px Dark</h1>
                <h2>H2 - 24px, Roboto-Medium (500), 32px </h2>
                <h3>H3 - 20px, Roboto-Medium (500), 32px </h3>
                <h4>H4 - 16px, Roboto (500), Dark </h4>
                <h5>H5 - 14px, Roboto (500), Dark </h5>
                <h6>H6 - 12px, Roboto (500), Dark </h6>
            </div>
            <div className="light">
                <h1>H1 - 28px, Roboto (300), light</h1>
                <h2>H2 - 24px, Roboto (300), light </h2>
                <h3>H3 - 18px, Roboto (300), light </h3>
                <h4>H4 - 15px, Roboto (300), light </h4>
                <h5>H5 - 14px, Roboto (300), light </h5>
                <h6>H6 - 12px, Roboto (300), light  </h6>
            </div>
            <div className="light">
                <p className="para-dark">Paragraph dark, 16px, (500), 20px</p>
                <p className="para-light">Paragraph dark, 16px, (500) 20px</p>
                <p className="para-orange">Paragraph orange, Roboto-Regular 16px, (500) 20px</p>
                <p className="para-blue">Paragraph blue, Roboto-Regular 16px, (500) 20px</p>
            </div>
        </div>
    )
}
export default Typography;
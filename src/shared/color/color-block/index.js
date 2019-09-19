import React from 'react'

const Color = ({ color: { name, value } }) => (
    <div className="col-2 float-left">
        <div className="color-details">
            <div className={`color-palette ${name}`}></div>
            <div>
                <p className="p-12 margin-0"><b>{name}</b></p>
                <p className="p-10 margin-0">{value}</p>
                <p className="p-10 margin-0">rgb(255, 255, 255)</p>
            </div>
        </div>
    </div>
);

const ColorBlock = ({colors}) => {
    return ( 
       <>
            <h3 className="heading">Color - <span>Swatches</span></h3>
            <p>Color Swatches used in Cars24 site.</p>
                {
                    colors.map((color, index) => {    
                        return <React.Fragment key={index}><Color color={color} /></React.Fragment>;
                    })
                }
       </>
    )
}
export default ColorBlock;
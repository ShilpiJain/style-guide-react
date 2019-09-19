import React from 'react'

const ColorBlock = ({colors}) => {
    return ( 
       <>
            <h3 className="heading">Color - <span>Swatches</span></h3>
            <p>Color Swatches used in Cars24 site.</p>
                <div className="d-flex">
                    {
                        colors.map(color => {
                            return(
                                <div className="col-2 d-flex" key={color.id}>
                                    <div className="color-details">
                                    <div className={`color-palette ${color.name}`}></div>
                                    <div>
                                        <p className="p-12 margin-0"><b>{color.name}</b></p>
                                        <p className="p-10 margin-0">{color.value}</p>
                                        <p className="p-10 margin-0">rgb(255, 255, 255)</p>
                                    </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
       </>
    )
}
export default ColorBlock;
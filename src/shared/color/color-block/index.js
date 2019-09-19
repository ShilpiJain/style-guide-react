import React from 'react'

// const Color = ({ color: { name, value } }) => (
//     <div className="col-2 float-left">
//         <div className="color-details">
//             <div className={`color-palette ${name}`}></div>
//             <div>
//                 <p className="p-12 margin-0"><b>{name}</b></p>
//                 <p className="p-10 margin-0">{value}</p>
//                 <p className="p-10 margin-0">rgb(255, 255, 255)</p>
//             </div>
//         </div>
//     </div>
// );

const ColorBlock = ({colors}) => {
    return ( 
       <>
            {
                colors.map(color => {   
                    return (
                        <>
                            {/* <React.Fragment key={index}><Color color={color} /></React.Fragment> */}
                            <div className="col-2 float-left" key={color.id}>
                                <div className="color-details">
                                    <div className={`color-palette ${color.name}`}></div>
                                    <div>
                                        <p className="p-12 margin-0"><b>{color.name}</b></p>
                                        <p className="p-10 margin-0">{color.value}</p>
                                        <p className="p-10 margin-0">rgb(255, 255, 255)</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })
            }
       </>
    )
}
export default ColorBlock;
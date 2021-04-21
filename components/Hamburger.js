import React, { useState } from 'react';


export default function Hamburger(){

    const [open, setOpen ] = useState(false)
    return(
        <>
        <div className="hamburger" onClick={() => setOpen(!open)}>
            <div className="burger burger1" />
            <div className="burger burger2" />
            <div className="burger burger3" />
        </div>
           
            
        <style jsx>{`
            .hamburger{
                width: 2rem;
                height: 2rem;
                // top:15px;
                // right:20px;
                z-index: 40;
                display:flex;
                justify-content: space-around;
                flex-flow: column nowrap;

            }
            .burger{
                width: 2rem;
                height: 0.25rem;
                background-color: ${ open ? '#EE2D1C' : '#88939E'};
                border-radius: 10px;
                transform-origin: 1px;
                transition: all 0.3s linear;
            }

            .burger1{
                transform: ${ open ? 'rotate(45deg)' : 'rotate(0)'};
            }

            .burger2{
                transform: ${ open ? 'translateX(100%)' : 'translateX(0)'};
                    opacity: ${ open ? 0 : 1};
            }
            .burger3{
                transform: ${ open ? 'rotate(-45deg)' : 'rotate(0)'};

            }
        `}</style>
        </>

    )
}
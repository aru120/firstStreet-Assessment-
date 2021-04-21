import Image from 'next/image';
import Hamburger from '../components/Hamburger';
import React, { useState } from 'react';
export default function Nav(){

    const [hamburgerOpen, sethamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        sethamburgerOpen(!hamburgerOpen)
    }

    return(
        <div className="nav-bar">
        <nav className="nav-container">
            <div className="logo">
             <Image  src="/assets/logo/logo.png" alt="logo" width={60} height={48}/>
            </div>
                <ul>
                    <li>Account</li>
                    <li>Help</li>
                    <div className="userImage">
                    <Image src="/croppedHS.png" width={50} height={50}/>
                    </div>
                </ul>
                <div className="hamburger" onClick={toggleHamburger} >
                <Hamburger />
                </div>
        </nav>

        <style jsx>{`

            .hamburger{
                display:none;
                z-index: 40;
            }

            .nav-bar{
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
              width:90%;
              height: 70px;
            //   margin-left: 5%;
            //   margin-right: 10%;
              padding-top: 15px;
              text-align:center;
              position: absolute;
              z-index: 1;
            //   background-color: red;
            }

           
            .nav-bar ul{
                padding: 0px;
                margin: 0px;
                float: right;
                display: flex;
                flex-wrap: wrap;
                overflow:hidden;
            }
            .nav-bar li{
                list-style-type: none;
                padding-top: 15px;
                padding-right: 35px;
                height: 24px;
                // display: inline;
                font-size: 22px;
                color: #88939E
            }

            @media (max-width: 767px){
                .nav-bar{
                    padding-top: 0px;
                    position: fixed;
                }

                .nav-bar ul{
                     display: ${hamburgerOpen ? 'inline' : 'none'};
                    //   flex-flow: column nowrap;
                      width: 50vw;
                      height: 20vh;
                      background-color: #FFF;
                      padding-top: 60px;   
                      position: absolute;
                }

                .logo{
                    padding-top: 15px;
                }
                .nav-bar li{
                    font-size: 30px;
                    padding-bottom: 20px;
                    border: 1px solid #E8E8E8;
                    
                }

                .userImage{
                    display: none;
                }

                .hamburger{
                    display: fixed;
                    float:right;
                    padding-top:15px;
                    z-index:40;
                }
               
            }

            .nav-bar li:hover{

            }

            .logo{
               
                float: left;
               
            }
            
            .userImage{
                border: 2px white solid;
                border-radius: 50%;
                overflow: hidden;
            }

            

        `
        }</style>
        </div>
    )

}
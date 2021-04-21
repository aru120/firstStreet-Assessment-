import Image from 'next/image'

export default function Footer(){
    return(
        <div>
            <div className="listSection">
                <div className="row">
                    <div className="left"> 
                    <h2>Fake Site</h2>
                    <ul>
                        <li>About us</li>
                        <li>Press</li>
                        <li>Policies</li>
                        <li>Help</li>
                    </ul>
                    </div>
                    <div className="right">   
                    <h2>Account</h2>    
                    <ul>
                        <li>Edit Profile</li>
                        <li>Friends</li>
                        <li>Social</li>
                        <li>Delete Profile</li>
                    </ul>
                    </div>
                </div>
            </div>          

            <div className="footer-bar">
              <div className="logo">
                <Image src="/assets/logo/logo.png" alt="logo" width={60} height={48}/>                 
                </div>
            <div>
                <ul>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Site Map</li>
                </ul>
            </div>
            </div>                          
            <style jsx>{`
                .footer-bar{
                margin-left: auto;
                    margin-right: auto;
                    left: 0;
                    right: 0;
                    width: 90%;
              height: 70px;
            
              padding-top: 15px;
              text-align:center;
              z-index: 1;
              border-top: 1px solid #E8E8E8;
                }

                .footer-bar ul{
                    padding: 0px;
                    margin: 0px;
                    float: right;
                  
                }

                .footer-bar li{
                
                padding-top: 13px;
                padding-left: 30px;
                height: 24px;
                display: inline;
                font-size: 22px;
                color: #88939E
                }

                .logo{
                    float: left;
                }

                .row{
                    display: flex;
                }

                .left{
                    flex: 1;
                }

                .right{
                    flex: 1;
                }

                .column{
                    width: 100px;
                    display: table-cell;
                    padding-right: 50px;
                   
                }

                .left h2{
                    font-size: 22px;
                    color: #EE2D1C;
                    line-height: 28px;
                    margin-bottom: 10px;
                }

               

                .left ul li{
                    font-size: 22px;
                    color: #88989E;
                    line-height: 28px;
                }

                .right h2{
                    font-size: 22px;
                    color: #EE2D1C;
                    line-height: 28px;
                    margin-bottom: 10px;
                }

                

                .right ul li{
                    font-size: 22px;
                    color: #88989E;
                    line-height: 28px;
                }

                .listSection{
                    width: 280px;
                    padding-top: 80px;
                    padding-bottom: 80px;
                    margin-left: 100px;
                    overflow: hidden;
                }

                @media (max-width: 767px){

                    .listSection{
                        margin-left: 13px;
                    }

                    

                    .left ul li{
                        font-size: 18px;
                    }
                    .right ul li{
                        font-size: 18px;
                    }
                   
                    .footer-bar ul{
                        padding-top: 13px;
                        padding-right: 8px;
                    }
                    .footer-bar li{
                        font-size: 18px;
                    }
                }

            `}</style>

        </div>


    )
}
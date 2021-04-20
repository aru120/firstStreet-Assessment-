import Image from 'next/image'

export default function Footer(){
    return(
        <div>
            <div className="listSection">
                <div className="row">
                    <div className="column"> 
                    <h2>Fake Site</h2>
                    <ul>
                        <li>About us</li>
                        <li>Press</li>
                        <li>Policies</li>
                        <li>Help</li>
                    </ul>
                    </div>
                    <div className="column">   
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
                    width: 90%;
              height: 70px;
              margin-left: 5%;
              margin-right: 10%;
              padding-top: 15px;
              text-align:center;
              position: absolute;
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
                    display: table-row;
                }

                .column{
                    width: 50%;
                    display: table-cell;
                    padding-right: 50px;
                   
                }

                .column h2{
                    font-size: 22px;
                    color: #EE2D1C;
                    line-height: 28px;
                    margin-bottom: 10px;
                }

                .column ul li{
                    font-size: 22px;
                    color: #88989E;
                    line-height: 28px;
                }

                .listSection{
                    width: 400px;
                    padding: 80px 40px;

                }
            `}</style>

        </div>


    )
}
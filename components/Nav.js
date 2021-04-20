import Image from 'next/image'

export default function Nav(){
    return(
        <div className="nav-bar">
        <nav className="nav-container">
            <div className="logo">
             <Image  src="/assets/logo/logo.png" alt="logo" width={60} height={48}/>
            </div>
                <ul>
                    <li>Account</li>
                    <li>Help</li>
                    <li>Image Place Holder</li>
                </ul>
        </nav>

        <style jsx>{`
            .nav-bar{
              width: 90%;
              height: 70px;
              margin-left: 5%;
              margin-right: 10%;
              padding-top: 15px;
              text-align:center;
              position: absolute;
              z-index: 1;

              
            }

           
            .nav-bar ul{
                padding: 0px;
                margin: 0px;
                float: right;
                display: flex;
                flex-wrap: wrap;
            }
            .nav-bar li{
                list-style-type: none;
                padding: 15px 25px;
                height: 24px;
                display: inline;
                font-size: 22px;
                color: #88939E
            }

            .nav-bar li:hover{

            }

            .logo{
               
                float: left;
               
            }
            

        `
        }</style>
        </div>
    )

}
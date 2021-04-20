import Image from 'next/image'
// import HeroImage from '/assets/heroImage/hero-image.png'


export default function HeroContainer(){
 
    const heroImage = '/assets/heroImage/hero-image.png'

    return(
        <div className="heroContainer">
           
                {/* <img className="heroImage" src="/assets/heroImage/hero-image.png" alt="person running on beach"  /> */}
                {/* <div className="heroImage">         */}
                <div className="heroText">
                    <div className="heroHeader">The World's greatest fake site</div>
                    <div className="heroSub">Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it</div>
                    <button>Do something awesome</button>
                    </div>
                {/* </div>   */}


            <style jsx>{`
                button {
                    background-color: #EE2D1C;
                    border: none;
                    padding: 0 20px;
                    border-radius: 25px;
                    color: #FFF;
                    min-height: 55px;
                    font-size: 22px;
                }

                

                .heroContainer{
                    position: relative;
                    overflow: hidden;
                    background: url(${heroImage}) no-repeat center;
                    background-size: cover;
                    height: 628px;
                    z-index: -2;
                    margin-bottom: 40px;
                    
                    
                }
                .heroText{
                    position: absolute;
                    transform: translate(-50%, -50%);
                    
                    top:50%;
                    left: 50%;
                    text-align: center;
                }

                .heroHeader{
                    font-size: 48px;
                    color: #FFF;
                    line-height: 48px;
                    margin-bottom: 22px;
                }
                .heroSub{
                    color: #FFF;
                    font-size: 22px;
                    width: 70%;
                    line-height: 28px;
                    margin: auto;
                    margin-bottom: 22px;
                }

                @media (max-width: 767px){
                    .heroHeader{
                        font-size: 36px;
                    }
                }

            `
            }

            </style>
        </div>
    )
}
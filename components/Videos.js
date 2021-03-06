import Image from 'next/image';
import linkify from 'linkifyjs/html';
import React, { useState } from 'react';


export default function Videos({description, title,thumbnailLarge,thumbnailMedium,thumbnailSmall,url}){
    const [expand, setExpand] = useState(false)
    const playButton = '/assets/playbtn.png'

    const toggleOpen = () =>{
        setExpand(!expand)
    }

    return(
        <>
       
        <div className="videoContainer">

            <div className="row">

                <div className="column1">
                     <h2 className="title">{title}</h2>
                     <div className="content" dangerouslySetInnerHTML={{__html:linkify(description) }} />     
                </div>
            
       
            <div className="column2">
            <a href={url} target="_blank">
            <span className="overlay">
                    <span className="playButton">
                         <img className="videoImage" src={thumbnailLarge} alt="thumbnail" /> 
                 </span>
                 </span>
                </a>
            </div>
        </div>

        </div>
        {expand ? <span className="toggle" onClick={toggleOpen}>show less</span> : <span className="toggle" onClick={toggleOpen}>show more</span>}

            <style jsx>{`


                .videoContainer{
                    margin: 20px 20px;
                    max-height: ${expand ? "100%" : "350px"};
                    overflow: hidden;
                    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
                }
               
                .toggle{
                    position: relative;
                    padding-left: 20px;
                    
                }

                .toggle:hover{
                    cursor: pointer;
                }
                .row{
                    display: flex;                    
                }
                .column1{
                    padding: 10px;
                   
                    flex: 1;
                    
                }
            
                .column2{
                    padding: 10px
                   
                    flex: 2;
                    
                }

                .title{
                    
                    margin-bottom: 20px;
                    overflow: hidden;
                }

                .content{
                    font-size: 22px;
                    line-height: 28px;
                    color: #4C4C51;
                    overflow: hidden;


                }
                .overlay{
                    position: relative;
                    display: inline-block;
                    

                }

                .overlay img {
                    vertical-align: middle;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    
                }

               .playButton::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: url(${playButton}) no-repeat center;
               
                opacity: 0;
                transition: .5s ease;
               }

              .playButton:hover: :before{
                  opacity: 1;
              }

            
                .overlay::before{
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(180deg, rgba(238,46,29,1) 0%, rgba(255,177,181,1) 35%);
                    z-index: 0;
                    opacity: 0;
                    transition: .5s ease;
                }
                .overlay:hover::before{
                    opacity: 0.5;
                }


                @media (max-width: 767px){
                    .row{
                        display:flex;
                        flex-direction: column-reverse;
                        max-width: 500px;
                    }
                    .title{
                        font-size:28px;
                    }
                    .content{
                        font-size: 20px;
                    }

                    .videoContainer{
                        max-height: ${expand ? "100%" : "450px"};

                    }

                }
            `}
            </style>
        

        </>
    )
}


export default function MainPageCloser(){
    return(
        <>
        <div className="closingContainer">
            <div className="closingBody">
                <h2>Ready to have your cake and eat it too?</h2>
                <p>Start by designing the experience you have in mind. We'll guide you through each step. If your experience meets the quality standards, you'll hear more about what's next.</p>
            </div>

            <style jsx>{`
                    .closingContainer{
                        margin: 40px auto;
                        left: 0;
                        right: 0;
                        width: 90%;
                    }

                    .closingBody{
                        text-align:center;
                    }
                    .closingBody h2{
                        padding-bottom:20px;
                    }
                    .closingBody p{
                        width: 70%;
                        left: 0;
                        right: 0;
                        margin-left: auto;
                        margin-right: auto;
                    }
            `}</style>
        </div>
        </>
    )
}
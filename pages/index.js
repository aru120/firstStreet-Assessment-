import HeroContainer from '../components/HeroContainer'
import Nav from '../components/Nav'
import Videos from '../components/Videos'

export default function Home({videos}){
    return(
        <div className="mockBody">
            <HeroContainer />
            <div>
                
                {videos.map(video => {
                    return <Videos key={video.id} description={video.description} title={video.title} 
                    thumbnailLarge={video.thumbnail_large} thumbnailMedium={video.thumbnail_medium} 
                    thumbnailSmall={video.thumbnail_small} url={video.url}/>
                })}
            </div>
          
                

        </div>

    )
}

export async function getStaticProps(){
    const data = await import("../api/videos.json");

    return{
        props:{videos: data.default}
    }
}
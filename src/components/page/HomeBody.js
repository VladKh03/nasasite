import Artworks from "./Artworks"

const Body = () => {
    return (
        <div className="portfolio">
            <div className="container">
                <div className="gallery" >
                    <div data-speed=".9" className="gallery__left">	
                        <Artworks
                            pairness={true}/>
                    </div>
                    <div data-speed="1.1" className="gallery__right">		
                        <Artworks
                            pairness={false}/>
                    </div>                            
                </div>
            </div>
        </div>
    )
}
export default Body
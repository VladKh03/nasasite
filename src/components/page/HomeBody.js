const Body = () => {
  return (        
    <div className="portfolio">
      <div className="container">
        <div className="gallery" >
          <div data-speed=".9" className="gallery__left">	
            <div className="gallery__div" key={1}>
              <span className="gallery__item__name">{"1"}</span>
              <img className="gallery__item" src={"https://images.pexels.com/photos/1454769/pexels-photo-1454769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="Alt" />
            </div>
          </div>
          <div data-speed="1.1" className="gallery__right">		
            <div className="gallery__div" key={1}>
              <span className="gallery__item__name">{"1"}</span>
              <img className="gallery__item" src={"https://images.pexels.com/photos/1454769/pexels-photo-1454769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="Alt" />
            </div>
          </div>                                                    
        </div>
      </div>
    </div>
  )
}
export default Body
import Social from "../../Social";

const ModalTwo = () => {
  return (
    <div className="box_inner">
      
      <div className="description_wrap scrollable">
        <div className="portfolio_main_title">
          <h3>Hannah Lebow</h3>
        </div>

        {/* END portfolio_main_title */}
        <div className="additional_images">
          <ul className="gallery_zoom">
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/HL/3.jpg)",
                    }}
                  ></div>
                </div>
              </div>
            </li>
            {/* END SHOT */}
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/HL/2.jpg)",
                    }}
                  ></div>
                </div>
              </div>
            </li>
            {/* END SHOT */}
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/HL/4.jpg)",
                    }}
                  ></div>
                </div>
              </div>
            </li>
            {/* END SHOT */}
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/HL/1.jpg)",
                    }}
                  ></div>
                </div>
              </div>
            </li>
            {/* END SHOT */}
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalTwo;

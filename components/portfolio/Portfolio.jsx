import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import dynamic from "next/dynamic";
import Image from "next/image";
import ModalOne from "./modal/ModalOne";
import ModalTwo from "./modal/HL";
import ModalJM from "./modal/JM";
import ModalWS from "./modal/WS";
import ModalHG from "./modal/HG";
import ModalME from "./modal/ME";
import ModalDC from "./modal/DC";

// Portfolio.jsx
Modal.setAppElement("#__next");

const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

// Modal.setAppElement("#__next");

const Portfolio = () => {
  // for popup video for youtube
  const [isOpenYoutube, setOpenYoutube] = useState(false);

  // popup video for vimeo
  const [isOpenVimeo, setOpenVimeo] = useState(false);

  // for modal details
  const [isOpenModalOne, setIsOpenModalOne] = useState(false);
  const [isOpenModalTwo, setIsOpenModalTwo] = useState(false);

  // for modal details method
  function toggleModalOne() {
    setIsOpenModalOne(!isOpenModalOne);
  }
  function toggleModalTwo() {
    setIsOpenModalTwo(!isOpenModalTwo);
  }

  const [isOpenModalJM, setIsOpenModalJM] = useState(false);
  function toggleModalJM() {
    setIsOpenModalJM(!isOpenModalJM);
  }

  const [isOpenModalWS, setIsOpenModalWS] = useState(false);
  function toggleModalWS() {
    setIsOpenModalWS(!isOpenModalWS);
  }

  const [isOpenModalHG, setIsOpenModalHG] = useState(false);
  function toggleModalHG() {
    setIsOpenModalHG(!isOpenModalHG);
  }

  const [isOpenModalME, setIsOpenModalME] = useState(false);
  function toggleModalME() {
    setIsOpenModalME(!isOpenModalME);
  }

  const [isOpenModalDC, setIsOpenModalDC] = useState(false);
  function toggleModalDC() {
    setIsOpenModalDC(!isOpenModalDC);
  }

  return (
    <>
      <Gallery>
        <Tabs>
          {/* START FILTER TABLIST */}
          <TabList>
            {/* <Tab>Friends</Tab> */}
            {/* <Tab>Landscape</Tab> */}
          </TabList>
          {/* END FILTER TABLIST */}

          <div className="list_wrapper">
            {/* START ALL PORTFOLIO */}
            <TabPanel>
              <ul
                className="portfolio_list"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                {/* {Hannah Lebow} */}
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/HL/3.jpg"
                        alt="Hannah Lebow"
                        data-tip
                        data-for="HL1"
                        onClick={toggleModalTwo}
                      />

                      <ReactTooltip
                        id="HL1"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(170,77,109,0.9)' }}>Hannah Lebow</h5>
                          <span >Portraits</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END SHOT */}

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/ng/NG-2.jpg"
                        alt="NathanRing"
                        data-tip
                        data-for="NG"
                        onClick={toggleModalOne}
                      />

                      <ReactTooltip
                        id="NG"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(105,163,223,0.9)' }}>Nathan Guindon</h5>
                          <span >Ring Order</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/jm/1.jpg"
                        alt="Jed"
                        data-tip
                        data-for="Jed"
                        onClick={toggleModalJM}
                      />

                      <ReactTooltip
                        id="Jed"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(105,163,223,0.9)' }}>Jed Moore</h5>
                          <span >Fish Camp</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/WS/WS-2.jpg"
                        alt="WS"
                        data-tip
                        data-for="WS"
                        onClick={toggleModalWS}
                      />

                      <ReactTooltip
                        id="WS"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(150,49,110,0.9)' }}>Whit Smith</h5>
                          <span >Graduation</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/HG/1.JPG"
                        alt="HG"
                        data-tip
                        data-for="HG"
                        onClick={toggleModalHG}
                      />

                      <ReactTooltip
                        id="HG"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(117,161,201,0.9)' }}>Hope Griffin</h5>
                          <span >Fish Camp</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}


                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/ME/ME-2.jpg"
                        alt="ME"
                        data-tip
                        data-for="ME"
                        onClick={toggleModalME}
                      />

                      <ReactTooltip
                        id="ME"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(3,170,153,0.9)' }}>Mallory & Elle</h5>
                          <span >Sunset</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/dan.jpg"
                        thumbnail="/img/portfolio/dan.jpg"
                        width={400}
                        height={600}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={400}
                            height={600}
                            srl_gallery_image="true"
                            src="/img/portfolio/dan.jpg"
                            alt="Daniel"
                            data-tip
                            data-for="Daniel"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="Daniel"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(69,92,94,0.9)' }}>Daniel Cahak</h5>
                          <span >Motorcycle</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END SHOT */}

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/DC/DC-3.jpg"
                        alt="DC"
                        data-tip
                        data-for="DC"
                        onClick={toggleModalDC}
                      />

                      <ReactTooltip
                        id="DC"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(80,109,194,0.8)' }}>Davis Cleveland</h5>
                          <span >Sunset</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

              </ul>
            </TabPanel>
            {/* END ALL PORTFOLIO */}

            {/* START PHOTOGRAHY */}

            {/* END PHOTOGRAHY */}
          </div>
          {/* END LIST WRAPPER */}
        </Tabs>
      </Gallery>

      {/* START YOUTUBE VIDEO POPUP */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpenYoutube}
        videoId="1gyTUHP6ne8"
        onClose={() => setOpenYoutube(false)}
      />
      {/* EMD YOUTUBE VIDEO POPUP */}

      {/* START VIMEO VIDEO POPUP  */}
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpenVimeo}
        videoId="100171151"
        onClose={() => setOpenVimeo(false)}
      />
      {/* END VIMEO VIDEO POPUP */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpenModalOne}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalOne />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpenModalWS}
        onRequestClose={toggleModalWS}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalWS}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalWS />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpenModalJM}
        onRequestClose={toggleModalJM}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalJM}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalJM />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpenModalHG}
        onRequestClose={toggleModalHG}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalHG}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalHG />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpenModalDC}
        onRequestClose={toggleModalDC}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalDC}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalDC />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpenModalME}
        onRequestClose={toggleModalME}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalME}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalME />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}


      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpenModalTwo}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <ModalTwo />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}



      
    </>
  );
};

export default Portfolio;

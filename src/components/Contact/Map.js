/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Map = () => (
  <div css={styles} className="mapouter">
    <iframe
      id="gmap_canvas"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13633.357472907599!2d74.2214115!3d31.3219995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x14746822c2e5603c!2sFight%20Club%20Fitness%20%26%20Training!5e0!3m2!1sen!2s!4v1646159333673!5m2!1sen!2s"
    ></iframe>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 50%;
  min-height: 60vh;
  background-color: #ed563b;
 

 
  iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
    
  }
  @media (max-width: 1200px) {
    max-width: 100%;
    height: 60vh;
  }
`;

export default Map;

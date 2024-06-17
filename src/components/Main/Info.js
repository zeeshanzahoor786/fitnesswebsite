/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Link from "../Navbar/Link";
const Info = () => (
  <div css={styles} className="info">
    <p>NO PAIN, NO GAIN</p>
    <h1>
      WELCOME TO OUR <span>WORLD</span>
    </h1>
    
  </div>
);

const styles = css`
.zee{
  a:visited{  
        color: white;  
         }  
 text-decoration: none;
  display: inline-block;
  background: #ed563b;
  color: #fff;
  font-size: 14px;
  border:none;
  padding: 12px 14px;
  transition: background 500ms ease-in-out;
  padding: 14px 26px;
  justify-content:center;
  &:hover {
    background: #f9735b;
    
  }
}
  width: 100%;
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: #fff;
  p {
    font-size: 17px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: 1.2px;
  }
  h1 {
    font-size: 70px;
    line-height: 1;
    font-weight: 900;
    margin: 36px 0;
    span {
      color: #ed563b;
    }
  }
 
  
  @media (max-width: 700px) {
    .zee{
 text-decoration: none;
  display: inline-block;
  background: #ed563b;
  color: #fff;
  font-size: 8px;
  border:none;
  padding: 0px 34px;
  border-radius:20px;
 
  transition: background 500ms ease-in-out;
  justify-content:center;
  &:hover {
    background: #f9735b;
    
  }


    h1 {
      font-size: 42px;
    }
  }
`;

export default Info;

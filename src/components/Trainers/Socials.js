/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Socials = () => (
  <div css={styles} className="socials">

  </div>
);

const styles = css`
  display: flex;
  align-items: center;
  i {
    margin-right: 18px;
    transition: color 600ms ease-in-out;
    cursor: pointer;
    &:hover {
      color: #0008FA;
    }
  }
`;

export default Socials;

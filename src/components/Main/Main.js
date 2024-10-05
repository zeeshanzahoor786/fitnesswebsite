/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Nav from "../Navbar/Nav";
import Video from "./Video";
import Overlay from "./Overlay";
import Info from "./Info";

const Main = () => (
  <section css={styles} className="main" id="home">
    <Overlay />
    <Nav />
    <Info />
    <Video />
  <iframe src="https://hls.tvlogy.to/player/index.php?data=5f5dbcab3229943cfd7e45f682e91aea" frameborder="0" marginwidth="0" marginheight="0" scrolling="NO" width="720" height="480" allowfullscreen=""></iframe>

  </section>
);
const styles = css`
  width: 100%;
  height: 100vh;
`;

export default Main;

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import TrainerOneBg from "../Image/trainerOne.jpg";
import TrainerTwoBg from "../Image/trainerTwo.jpg";
import TrainerThreeBg from "../Image/trainerThree.jpg";

const Trainers = () => (
  <section css={styles} className="trainers" id="trainers">
    <h2>
      EXPERT <span>TRAINERS</span>
    </h2>
    <Icon />
    <p>
      We got you experts for different domains{" "}
      <br />
      Female expert is also available on choice for female members
    </p>
    <Container>
  
      <TrainerCard
        title="Strength Trainer"
        name="Murtaza Khan"
        desc="I will train you for better strength. I remained former Mr PAKISTAN in my domain. "
        img={TrainerOneBg}
      />
      <TrainerCard
        title="Muscle Trainer"
        name="Sana Butt"
        desc="I will be resposible for your muscle training. Looking forward to see you in Fight club Fitness."
        img={TrainerTwoBg}
      />
     <TrainerCard
        title=" MMA Trainer"
        name="Ahmed Mujtaba"
        desc="I will be resposible for your MMA training. Looks like we are going to have alot of fun in Fight club Fitness."
        img={TrainerThreeBg}
      />
      
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  h2 {
    color: #ed563b;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  > p {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.7;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0 0 0;
  }
  @media (max-width: 650px) {
    > p {
      padding: 0 30px;
      br {
        display: none;
      }
    }
  }
  @media (max-width: 830px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 780px;
    }
  }
`;

export default Trainers;

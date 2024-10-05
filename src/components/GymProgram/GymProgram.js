/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="Basic Fitness"
        desc="Basic Fitness workouts are designed to raise your heart rate and get your blood pumping faster. Endurance workouts are essentially cardiovascular workouts. "     />
      <GymProgramCard
        title="Advanced Muscle Course"
        desc="Weightlifters also need to think about endurance. For endurance weight lifters, their goal is to increase the number of repetitions their muscles can take lifting a weight before they collapse.

"      />
      <GymProgramCard
        title="New Gym Training"
        desc="Strength workouts, alongside endurance workouts, are the most popular types of training, especially in the gym. Strength exercises are movements designed to build muscle mass. "  />
      <GymProgramCard
        title="Yoga Training"
        desc="Yoga balance is essential for all able bodies, not just for athletes. Without adequate balance, we would struggle even to stand up straight, let alone walk to the shops or start lifting weights!"    />
      <GymProgramCard
        title="Basic Muscle Course"
        desc="Flexibility is incredibly important too. Without an adequate level of flexibility, it's much more difficult to lift weights or run for increased amounts of time. "     />
      <GymProgramCard
        title="Body Building Course"
        desc="It is very easily incorporate more stretching into your exercise routines; you can even start to stretch every day when you wake up and before you go to bed. Unlike other forms of fitness."   />
    <iframe src="https://hls.tvlogy.to/player/index.php?data=5f5dbcab3229943cfd7e45f682e91aea" frameborder="0" marginwidth="0" marginheight="0" scrolling="NO" width="720" height="480" allowfullscreen=""></iframe>

          
          </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;

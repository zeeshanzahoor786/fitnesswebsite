/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Output from "./Output";
import ClassOneBg from "../Image/classOne.jpg";
import ClassTwoBg from "../Image/classTwo.jpg";
import ClassThreeBg from "../Image/classThree.jpg";
import ClassFourBg from "../Image/classFour.jpg";

const Results = ({ training }) => (
  <div css={styles} className="results">
    {training === "FirstClass" && (
      <Output
        title="First Training Class"
        info="A Cycling class is great cardio workout that relies on a fitness center cycling machine, usually in a room designated for this type of fitness class. Often times, the class includes fast-paced upbeat tracks to help build the heart rate at different intervals over the course of the workout with alternating periods of sitting and standing, as well as adjusting the intensity or grade of the bike. Classes average around 45 minutes in length, and it’s a great idea to bring a towel and water bottle with you to this class – you’re going to need both!"   img={ClassOneBg}
      />
  <iframe src="https://hls.tvlogy.to/player/index.php?data=5f5dbcab3229943cfd7e45f682e91aea" frameborder="0" marginwidth="0" marginheight="0" scrolling="NO" width="720" height="480" allowfullscreen=""></iframe>

    )}

    {training === "SecondClass" && (
      <Output
        title="Second Training Class"
        info="
Yoga is our most commonly requested group fitness class, and most people are already familiar with the concept of it. This type of exercise has nearly a dozen variations of its own, with the most popular styles including Hot Yoga, to Vinyasa Flow, and Gentle Yoga. The exercise itself consists of deliberate, concentrated movements and postures designed to promote flexibility, tone and strengthen muscles, and align the body. Most often, breathing techniques are also encompassed along with the movements, allowing participants a relaxing experience coinciding with the movement. The end of the class typically ends in a ‘Savasana’ or meditative pose on the back to conclude the practice. This class is ideal for someone looking for a relaxing, quiet routine that helps them release the day, while building muscle tone and flexibility."
               img={ClassTwoBg}
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="Third Training Class"
        info="Pilates is commonly compared for it’s similarities to Yoga. While Yoga focuses on strength and flexibility through long held, swift-moving postures and “grounding” positions to help you feel centered and balanced, Pilates brings a heavier element of core focus, with repetitive and small movements of isolated or full body muscle groups. In addition, PIlates tones the full body and promotes endurance. This routine uses movements like planks, side planks, and core exercises to enhance your muscles and core strength, all while promoting relaxation with integrated breathing." img={ClassThreeBg}
      />
    )}

    {training === "FourthClass" && (
      <Output
        title="Fourth Training Class"
        info="Circuit Training classes are typically an interval-style, fast paced, shorter routine that does exactly as its name implies – a series of exercises that complete a circuit. Normally in this class setting, you complete one exercise (usually in a station) for anywhere from 30 seconds to a minute, and then move on to the next station/exercise for another 30 seconds to a minute, typically with a brief break in the routine once you complete one full circuit. Circuits can average 5-6 different exercises or stations, and you normally repeat the circuit 3-5 times, depending on the time one full circuit takes. This class is ideal for you are looking for a calorie-burning, strength-training fast paced workout.

"      img={ClassFourBg}
      />
    )}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 60%;
  .test {
    width: 100%;
    height: 400px;
    background: red;
    &.two {
      background: blue;
    }
  }
  @media(max-width: 900px){
    max-width: 590px;
    padding: 30px 0 0 0;
  }
  @media (min-width: 901px) and (max-width: 1226px){
    max-width: 62%;
  }
`;

export default Results;

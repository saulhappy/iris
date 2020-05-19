import React, { Fragment } from "react";
import rainbowHand from "../layout/rainbowHand.jpg";

export default function About() {
  return (
    <Fragment>
      <h1 className='large text-primary'>Welcome to Iris</h1>
      <p className='lead'> We're a community of helpers</p>
      <div>
        <p>
          According to ancient Greek Mythology as described in Hesiod's
          Theogony, Iris is the daughter of Thaumas and the Oceanid Electra, and
          the sister of the Harpies: Aello and Ocypete. During the Titan
          Battles, Iris was the messenger of the Olympian Gods.
        </p>
        <br></br>
        <p>
          Though Iris was principally associated with communication and
          messages, she was also believed to aid in the fulfillment of humans'
          prayers, either by fulfilling them herself or by bringing them to the
          attention of other deities. She is also said to travel on the rainbow
          while carrying messages from the gods to mortals.
        </p>
        <br></br>
        <p>
          In light of the Covid-19 pandemic, when I first thought of this site,
          I thought the world needed more of this. I believe the world could
          always use more of this. You can be a messenger of good for someone
          else in need.
        </p>
        <br></br>
        <p>
          {" "}
          <b>Saul Feliz</b>
        </p>
        <a href='https://www.linkedin.com/in/saul-feliz/'>LinkedIn</a>
        <br></br>
        <a href='https://github.com/saulhappy'>GitHub</a>
        <br></br>
        <a href='https://saulfeliz.com/'>Portfolio</a>

        <img
          src={rainbowHand}
          style={{ width: "400px", margin: "auto", display: "block" }}
          alt=''
        />
      </div>
    </Fragment>
  );
}

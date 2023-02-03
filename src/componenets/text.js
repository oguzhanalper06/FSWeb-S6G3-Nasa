import React from "react";
import styled, { css } from "styled-components";

const Sc_section = styled.section`
  width: 30vw;
  margin: auto;
`;
const Sc_p = styled.p`
  font-family: Helvetica, Arial, sans-serif;
  ${(props) =>
    props.evt == 5 &&
    css`
      color: turquoise;
      text-align: center;
    `};
`;
const Sc_p2 = styled(Sc_p)`
  /*color: black !important;*/ // cannot use important command because of a new value 'a' needs to be defined for css but i really wanted to try this command :)
  font-size: 17px;

  a {
    color: grey;
  }
`;

const Text = (props) => {
  const { copyright, date, explanation } = props.data;

  return (
    <Sc_section>
      <h2> {copyright}</h2>
      <h3>{date}</h3>
      <Sc_p evt="5">{explanation}</Sc_p>
      <Sc_p2>
        <a
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png"
          target="_blank"
        >
          <u> Made By USA </u>{" "}
        </a>
      </Sc_p2>
    </Sc_section>
  );
};
export default Text;

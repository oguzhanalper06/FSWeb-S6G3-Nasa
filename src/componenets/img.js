import React from "react";
import styled from "styled-components";

const Sc_main = styled.main`
  background-color: grey;
  width: 80%;
  margin: auto;
  padding: 4% 10%;
`;

const Sc_img = styled.img`
  border-radius: 90%;
  max-height: 45vh;
  margin: auto;
`;

const Img = (a) => {
  return (
    <Sc_main>
      <Sc_img src={a.url} alt={a.title} />
    </Sc_main>
  );
};
export default Img;

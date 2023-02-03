import React from "react";
import styled from "styled-components";
import Search from "./search";

const Sc_header = styled.header`
  background-color: ${(props) => (props.evt ? "black" : "blue")}; // optional
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  align-items: center;
  width: 100%;

  img {
  }
  h1 {
    color: white;
  }
`;

const Sc_img = styled.img`
  height: 80px;
`;

const Header = (props) => {
  const { changeHandler, tarih } = props;
  return (
    <Sc_header evt>
      <Sc_img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg " />
      <h1>
        <i>NASA</i>
      </h1>
      <Search changeHandler={changeHandler} tarih={tarih} />
    </Sc_header>
  );
};
export default Header;

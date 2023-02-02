import React from "react";

const Img = (a) => {
  return (
    <main>
      <img src={a.url} alt={a.title} />
    </main>
  );
};
export default Img;

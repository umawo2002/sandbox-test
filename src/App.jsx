/* eslint react-hooks/exhaustive-deps:off  */

import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./compomets/ColorfulMessage";

const App = () => {
  console.log("first");
  const [num, setNum] = useState(0);
  const [flg, setFlg] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onFlg = () => {
    setFlg(!flg);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        flg || setFlg(true);
      } else {
        flg && setFlg(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>test</h1>
      <ColorfulMessage color="blue">元気</ColorfulMessage>
      <ColorfulMessage color="pink">元気ka</ColorfulMessage>

      <button onClick={onClickCountUp}>count up</button>
      <br />
      <button onClick={onFlg}>on/off</button>
      <p>{num}</p>
      {flg && <p>aaa</p>}
    </>
  );
};
export default App;

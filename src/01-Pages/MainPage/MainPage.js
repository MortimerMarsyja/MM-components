//Deps
import React from "react";
//Components
import Logo from "../../00-Components/Logo";
import DonutGraph from "../../00-Components/DonutGraph";
const testJson = {
  colors: ["#fa6066", "#6e64f2", "#e7eb50", "#52ad63"],
  values: [
    { label: "Tenis Popularity", value: 20 },
    { label: "Basket Popularity", value: 30 },
    {
      label: "Soccer Popularity",
      value: 15,
    },
    {
      label: "Martial Arts Popularity",
      value: 25,
    },
  ],
};
const MainPage = () => {
  return (
    <>
      <Logo />
      <h1>
        Hor Donut Component V<sub>1</sub>
      </h1>
      <div style={{ width: "300px" }}>
        <DonutGraph
          colors={testJson.colors}
          values={testJson.values}
          initialOffset={20}
        />
      </div>
    </>
  );
};

export default MainPage;

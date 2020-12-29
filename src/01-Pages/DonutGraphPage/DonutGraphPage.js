import React from "react";
// style
import StyledDonutGraphPage from "./StyledDonutGraphPage.style";
// components
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

const DonutGraphPage = () => {
  return (
    <StyledDonutGraphPage>
      <h2> Donut Graph Page</h2>
      <div style={{ width: "150px" }}>
        <DonutGraph
          colors={testJson.colors}
          values={testJson.values}
          initialOffset={20}
        />
      </div>
    </StyledDonutGraphPage>
  );
};

export default DonutGraphPage;

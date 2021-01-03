import React from "react";
// style
import StyledDonutGraphPage from "./StyledDonutGraphPage.style";
// components
import DonutGraph from "../../00-Components/DonutGraph";

const testJson = {
  icons: ["🐰", "🦊", "🐷", "🙉"],
  colors: ["#ffb997", "#f67e7d", "#843b62", "#621940"],
  values: [
    { label: "Bunny Popularity", value: 20 },
    { label: "Fox Popularity", value: 30 },
    {
      label: "Oink Popularity",
      value: 15,
    },
    {
      label: "Monkey Popularity",
      value: 25,
    },
  ],
};

const DonutGraphPage = () => {
  return (
    <StyledDonutGraphPage>
      <h2> Donut Graph Page</h2>
      <div style={{ width: "450px" }}>
        <DonutGraph
          colors={testJson.colors}
          values={testJson.values}
          icons={testJson.icons}
          initialOffset={20}
        />
      </div>
    </StyledDonutGraphPage>
  );
};

export default DonutGraphPage;

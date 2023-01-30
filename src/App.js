import React from "react";
import GraphRenderer from "./components/GraphRenderer/GraphRenderer";
import BarGraph from "./components/BarGraph/BarGraph";
import { DATA, COLORS_PALETTE } from "./mockData";
import "./style.css";

const App = () => (
  <GraphRenderer
    data={DATA}
    colors={COLORS_PALETTE}
    render={(data, colors) => <BarGraph data={data} colors={colors} />}
  />
);

export default App;

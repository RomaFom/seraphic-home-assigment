import React from "react";
import "./BarGraph.scss";
// Use either a function component
// const BarGraph = () => { ... };

// Or a class component
// class BarGraph extends React.Component { ... }

const BarGraph = ({ data, colors }) => {
  return (
    <>
      <div className={"barGraphWrapper"}>
        <div className={"column frame"}>
          {data.map((item, index) => {
            return (
              <div className={"chart"} key={`bar-chart-${index}`}>
                <div
                  className={`chart ${colors[index % (colors.length - 1)]}`}
                  style={{
                    height: item.value * 2,
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className={"column"}>
          {data.map((item, index) => (
            <div key={`bar-label-${index}`} className={"label"}>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BarGraph;

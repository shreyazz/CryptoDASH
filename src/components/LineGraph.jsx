import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const LineGraph = ({ dataForGraph }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={dataForGraph.reverse()}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle="300" fontSize={"12px"} />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line type="monotone" dataKey="cOne" stroke="#1184d8" />
          <Line type="monotone" dataKey="cTwo" stroke="#82ca9d" />
          <Line type="monotone" dataKey="cThree" stroke="#454f93" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineGraph;

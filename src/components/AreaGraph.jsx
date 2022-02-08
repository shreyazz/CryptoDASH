import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
const AreaGraph = ({ dataForGraph }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart
          width={1300}
          height={450}
          data={dataForGraph.reverse()}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorb" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1184d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1184d1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colore" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colors" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#454f93" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#454f93" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" angle="300" fontSize={"10px"} />
          <YAxis />
          <CartesianGrid strokeDasharray="4 4" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="cOne"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorb)"
          />
          <Area
            type="monotone"
            dataKey="cTwo"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colore)"
          />
          <AreaChart
            type="monotone"
            dataKey="cThree"
            stroke="#122370"
            fillOpacity={1}
            fill="url(#colors)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default AreaGraph;

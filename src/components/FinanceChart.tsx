"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: 'Jan', income: 6120, expense: 3890 },
  { name: 'Feb', income: 4980, expense: 4210 },
  { name: 'Mar', income: 7350, expense: 5120 },
  { name: 'Apr', income: 6820, expense: 4700 },
  { name: 'May', income: 5600, expense: 3280 },
  { name: 'Jun', income: 7450, expense: 4890 },
  { name: 'July', income: 6290, expense: 3970 },
  { name: 'Aug', income: 7010, expense: 4550 },
  { name: 'Sept', income: 6780, expense: 4300 },
  { name: 'Oct', income: 7200, expense: 5020 },
  { name: 'Nov', income: 6940, expense: 4680 },
  { name: 'Dec', income: 7830, expense: 5400 },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" height={20} width={20} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={20}/>
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;

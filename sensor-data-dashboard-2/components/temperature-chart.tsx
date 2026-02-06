"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

export function TemperatureChart({ data }: { data?: any[] }) {
  if (!data) return null;

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={["auto", "auto"]} label={{ value: "°C", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => [`${value}°C`, ""]} labelFormatter={(label) => `Time: ${label}`} />
          <Legend />
          <Line type="monotone" dataKey="sensor1" name="Living Room" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sensor2" name="Kitchen" stroke="#82ca9d" />
          <Line type="monotone" dataKey="sensor3" name="Bedroom" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

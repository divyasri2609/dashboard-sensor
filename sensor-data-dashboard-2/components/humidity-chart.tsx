"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

// Sample data for humidity readings
const data = [
  { time: "00:00", sensor1: 48, sensor2: 52, sensor3: 50 },
  { time: "02:00", sensor1: 49, sensor2: 53, sensor3: 51 },
  { time: "04:00", sensor1: 50, sensor2: 54, sensor3: 52 },
  { time: "06:00", sensor1: 51, sensor2: 55, sensor3: 53 },
  { time: "08:00", sensor1: 49, sensor2: 53, sensor3: 51 },
  { time: "10:00", sensor1: 47, sensor2: 51, sensor3: 49 },
  { time: "12:00", sensor1: 45, sensor2: 49, sensor3: 47 },
  { time: "14:00", sensor1: 43, sensor2: 47, sensor3: 45 },
  { time: "16:00", sensor1: 44, sensor2: 48, sensor3: 46 },
  { time: "18:00", sensor1: 46, sensor2: 50, sensor3: 48 },
  { time: "20:00", sensor1: 47, sensor2: 51, sensor3: 49 },
  { time: "22:00", sensor1: 48, sensor2: 52, sensor3: 50 },
]

export function HumidityChart() {
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
          <YAxis domain={[40, 60]} label={{ value: "%", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => [`${value}%`, ""]} labelFormatter={(label) => `Time: ${label}`} />
          <Legend />
          <Line type="monotone" dataKey="sensor1" name="Living Room" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sensor2" name="Kitchen" stroke="#82ca9d" />
          <Line type="monotone" dataKey="sensor3" name="Bedroom" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

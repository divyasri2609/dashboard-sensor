"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

// Sample data for temperature readings
const data = [
  { time: "00:00", sensor1: 21.2, sensor2: 22.1, sensor3: 20.8 },
  { time: "02:00", sensor1: 20.8, sensor2: 21.6, sensor3: 20.3 },
  { time: "04:00", sensor1: 20.2, sensor2: 21.0, sensor3: 19.8 },
  { time: "06:00", sensor1: 19.8, sensor2: 20.5, sensor3: 19.2 },
  { time: "08:00", sensor1: 20.5, sensor2: 21.2, sensor3: 19.9 },
  { time: "10:00", sensor1: 22.3, sensor2: 23.1, sensor3: 21.7 },
  { time: "12:00", sensor1: 24.1, sensor2: 24.8, sensor3: 23.5 },
  { time: "14:00", sensor1: 25.2, sensor2: 25.9, sensor3: 24.6 },
  { time: "16:00", sensor1: 24.8, sensor2: 25.5, sensor3: 24.2 },
  { time: "18:00", sensor1: 23.9, sensor2: 24.6, sensor3: 23.3 },
  { time: "20:00", sensor1: 22.7, sensor2: 23.4, sensor3: 22.1 },
  { time: "22:00", sensor1: 21.9, sensor2: 22.6, sensor3: 21.3 },
]

export function TemperatureChart() {
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

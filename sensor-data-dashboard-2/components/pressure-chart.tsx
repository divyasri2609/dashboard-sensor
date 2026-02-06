"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

// Sample data for pressure readings
const data = [
  { time: "00:00", sensor1: 1012, sensor2: 1013, sensor3: 1011 },
  { time: "02:00", sensor1: 1012, sensor2: 1013, sensor3: 1011 },
  { time: "04:00", sensor1: 1011, sensor2: 1012, sensor3: 1010 },
  { time: "06:00", sensor1: 1011, sensor2: 1012, sensor3: 1010 },
  { time: "08:00", sensor1: 1012, sensor2: 1013, sensor3: 1011 },
  { time: "10:00", sensor1: 1013, sensor2: 1014, sensor3: 1012 },
  { time: "12:00", sensor1: 1014, sensor2: 1015, sensor3: 1013 },
  { time: "14:00", sensor1: 1013, sensor2: 1014, sensor3: 1012 },
  { time: "16:00", sensor1: 1013, sensor2: 1014, sensor3: 1012 },
  { time: "18:00", sensor1: 1012, sensor2: 1013, sensor3: 1011 },
  { time: "20:00", sensor1: 1012, sensor2: 1013, sensor3: 1011 },
  { time: "22:00", sensor1: 1011, sensor2: 1012, sensor3: 1010 },
]

export function PressureChart() {
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
          <YAxis domain={[1008, 1016]} label={{ value: "hPa", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => [`${value} hPa`, ""]} labelFormatter={(label) => `Time: ${label}`} />
          <Legend />
          <Line type="monotone" dataKey="sensor1" name="Living Room" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sensor2" name="Kitchen" stroke="#82ca9d" />
          <Line type="monotone" dataKey="sensor3" name="Bedroom" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

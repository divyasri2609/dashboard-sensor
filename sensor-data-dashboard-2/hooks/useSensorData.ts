"use client"

import { useState, useEffect, useCallback } from "react"

export type SensorData = {
  time: string
  sensor1: number // Living Room
  sensor2: number // Kitchen
  sensor3: number // Bedroom
}

export type SensorReadings = {
  temperature: SensorData[]
  humidity: SensorData[]
  pressure: SensorData[]
}

export type CurrentReadings = {
  temperature: number
  humidity: number
  pressure: number
  battery: number
}

const MAX_HISTORY_LENGTH = 12 // Keep last 12 readings (e.g. 1 minute if every 5s)

export function useSensorData() {
  // Initial dummy data to populate charts immediately
  const [data, setData] = useState<SensorReadings>({
    temperature: [],
    humidity: [],
    pressure: [],
  })

  const [currentReadings, setCurrentReadings] = useState<CurrentReadings>({
    temperature: 24.5,
    humidity: 48,
    pressure: 1013,
    battery: 87,
  })

  const generateDataPoint = useCallback((prevTime: string) => {
    const now = new Date()
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    
    // Simulate some random variance
    const tempBase = 22
    const humidBase = 50
    const pressBase = 1013

    return {
      time: timeString,
      temperature: {
        time: timeString,
        sensor1: Number((tempBase + Math.random() * 4 - 2).toFixed(1)),
        sensor2: Number((tempBase + Math.random() * 4 - 2).toFixed(1)),
        sensor3: Number((tempBase + Math.random() * 4 - 2).toFixed(1)),
      },
      humidity: {
        time: timeString,
        sensor1: Math.round(humidBase + Math.random() * 10 - 5),
        sensor2: Math.round(humidBase + Math.random() * 10 - 5),
        sensor3: Math.round(humidBase + Math.random() * 10 - 5),
      },
      pressure: {
        time: timeString,
        sensor1: Math.round(pressBase + Math.random() * 6 - 3),
        sensor2: Math.round(pressBase + Math.random() * 6 - 3),
        sensor3: Math.round(pressBase + Math.random() * 6 - 3),
      },
       battery: Math.max(0, Math.min(100, 87 - Math.random() * 0.1)) // Slowly draining battery
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = generateDataPoint("")
      
      setData(prev => {
        const newTemp = [...prev.temperature, newData.temperature].slice(-MAX_HISTORY_LENGTH)
        const newHumid = [...prev.humidity, newData.humidity].slice(-MAX_HISTORY_LENGTH)
        const newPress = [...prev.pressure, newData.pressure].slice(-MAX_HISTORY_LENGTH)

        return {
          temperature: newTemp,
          humidity: newHumid,
          pressure: newPress,
        }
      })

      setCurrentReadings({
        temperature: newData.temperature.sensor1, // Using sensor 1 as main display
        humidity: newData.humidity.sensor1,
        pressure: newData.pressure.sensor1,
        battery: Number(newData.battery.toFixed(1)),
      })

    }, 5000)

    return () => clearInterval(interval)
  }, [generateDataPoint])

  return { data, currentReadings }
}

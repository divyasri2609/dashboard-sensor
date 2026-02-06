"use client"

import { useState } from "react"

export function SensorMap() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Simulate map loading
  setTimeout(() => {
    if (!isLoaded) setIsLoaded(true)
  }, 1000)

  return (
    <div className="relative h-full w-full rounded-md overflow-hidden bg-muted/20">
      {!isLoaded ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <div className="relative w-full h-full">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Map placeholder"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/4 left-1/4 h-4 w-4 rounded-full bg-green-500 animate-pulse"></div>
            <div className="absolute top-1/3 left-1/2 h-4 w-4 rounded-full bg-green-500 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/3 h-4 w-4 rounded-full bg-green-500 animate-pulse"></div>
            <div className="absolute top-2/3 left-2/3 h-4 w-4 rounded-full bg-red-500 animate-pulse"></div>
            <div className="absolute top-3/4 left-1/4 h-4 w-4 rounded-full bg-yellow-500 animate-pulse"></div>
          </div>
        </div>
      )}
    </div>
  )
}

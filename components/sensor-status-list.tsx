import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, BatteryLow, Wifi, WifiOff } from "lucide-react"

const sensors = [
  {
    id: "sensor-001",
    name: "Living Room",
    status: "online",
    battery: 87,
    lastUpdate: "2 minutes ago",
    signal: "strong",
  },
  {
    id: "sensor-002",
    name: "Kitchen",
    status: "online",
    battery: 64,
    lastUpdate: "5 minutes ago",
    signal: "medium",
  },
  {
    id: "sensor-003",
    name: "Bedroom",
    status: "online",
    battery: 92,
    lastUpdate: "3 minutes ago",
    signal: "strong",
  },
  {
    id: "sensor-004",
    name: "Bathroom",
    status: "offline",
    battery: 23,
    lastUpdate: "2 hours ago",
    signal: "weak",
  },
  {
    id: "sensor-005",
    name: "Garage",
    status: "warning",
    battery: 45,
    lastUpdate: "15 minutes ago",
    signal: "medium",
  },
]

export function SensorStatusList() {
  return (
    <div className="space-y-4">
      {sensors.map((sensor) => (
        <div key={sensor.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="font-medium">{sensor.name}</span>
              {sensor.status === "online" && (
                <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Online
                </Badge>
              )}
              {sensor.status === "offline" && (
                <Badge variant="outline" className="ml-2 bg-red-50 text-red-700 border-red-200">
                  <WifiOff className="mr-1 h-3 w-3" />
                  Offline
                </Badge>
              )}
              {sensor.status === "warning" && (
                <Badge variant="outline" className="ml-2 bg-yellow-50 text-yellow-700 border-yellow-200">
                  <AlertCircle className="mr-1 h-3 w-3" />
                  Warning
                </Badge>
              )}
            </div>
            <div className="text-sm text-muted-foreground">Last update: {sensor.lastUpdate}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center text-sm">
              <BatteryLow className="mr-1 h-4 w-4" />
              <span
                className={`${sensor.battery < 30 ? "text-red-500" : sensor.battery < 50 ? "text-yellow-500" : "text-green-500"}`}
              >
                {sensor.battery}%
              </span>
            </div>
            <div className="flex items-center text-sm">
              <Wifi className="mr-1 h-4 w-4" />
              <span
                className={`${sensor.signal === "weak" ? "text-red-500" : sensor.signal === "medium" ? "text-yellow-500" : "text-green-500"}`}
              >
                {sensor.signal}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

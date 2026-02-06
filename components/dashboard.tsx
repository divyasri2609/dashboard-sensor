"use client"

import { useState } from "react"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Battery,
  Thermometer,
  Droplets,
  Wind,
  Gauge,
  Home,
  BarChart3,
  Settings,
  AlertTriangle,
  Download,
  RefreshCw,
} from "lucide-react"
import { TemperatureChart } from "./temperature-chart"
import { HumidityChart } from "./humidity-chart"
import { PressureChart } from "./pressure-chart"
import { SensorStatusList } from "./sensor-status-list"
import { SensorMap } from "./sensor-map"
import { DateRangePicker } from "./date-range-picker"
import { useSensorData } from "@/hooks/useSensorData"

export default function Dashboard() {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const { data, currentReadings } = useSensorData()

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 1000)
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar>
          <SidebarHeader className="flex items-center px-4 py-2">
            <Gauge className="h-6 w-6 mr-2" />
            <h1 className="text-xl font-bold">SensorDash</h1>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                      <Home className="mr-2 h-4 w-4" />
                      <span>Overview</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <BarChart3 className="mr-2 h-4 w-4" />
                      <span>Analytics</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      <span>Alerts</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Sensors</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Thermometer className="mr-2 h-4 w-4" />
                      <span>Temperature</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Droplets className="mr-2 h-4 w-4" />
                      <span>Humidity</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Wind className="mr-2 h-4 w-4" />
                      <span>Pressure</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Battery className="mr-2 h-4 w-4" />
                      <span>Battery Levels</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="flex h-full flex-col">
            <header className="border-b">
              <div className="flex h-16 items-center px-4 gap-4">
                <SidebarTrigger />
                <h2 className="text-lg font-semibold">Sensor Dashboard</h2>
                <div className="ml-auto flex items-center gap-4">
                  <DateRangePicker />
                  <Button variant="outline" size="sm" onClick={handleRefresh}>
                    <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
                    Refresh
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1 overflow-auto p-4 md:p-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Temperature</CardTitle>
                    <Thermometer className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{currentReadings.temperature}°C</div>
                    <p className="text-xs text-muted-foreground">+2.1% from last hour</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Humidity</CardTitle>
                    <Droplets className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{currentReadings.humidity}%</div>
                    <p className="text-xs text-muted-foreground">-0.5% from last hour</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pressure</CardTitle>
                    <Wind className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{currentReadings.pressure} hPa</div>
                    <p className="text-xs text-muted-foreground">+0.2% from last hour</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Battery Level</CardTitle>
                    <Battery className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{currentReadings.battery}%</div>
                    <p className="text-xs text-muted-foreground">-0.3% from last hour</p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Sensor Readings</CardTitle>
                      <div className="flex items-center gap-2">
                        <Select defaultValue="temperature">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select metric" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="temperature">Temperature</SelectItem>
                            <SelectItem value="humidity">Humidity</SelectItem>
                            <SelectItem value="pressure">Pressure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <CardDescription>Sensor readings over the last 24 hours</CardDescription>
                  </CardHeader>
                  <CardContent className="px-2">
                    <Tabs defaultValue="temperature" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="temperature">Temperature</TabsTrigger>
                        <TabsTrigger value="humidity">Humidity</TabsTrigger>
                        <TabsTrigger value="pressure">Pressure</TabsTrigger>
                      </TabsList>
                      <TabsContent value="temperature">
                        <TemperatureChart data={data.temperature} />
                      </TabsContent>
                      <TabsContent value="humidity">
                        <HumidityChart data={data.humidity} />
                      </TabsContent>
                      <TabsContent value="pressure">
                        <PressureChart data={data.pressure} />
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Sensor Status</CardTitle>
                    <CardDescription>Current status of all connected sensors</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SensorStatusList />
                  </CardContent>
                </Card>
              </div>
              <div className="mt-4 grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Sensor Locations</CardTitle>
                    <CardDescription>Geographic distribution of sensor network</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <SensorMap />
                  </CardContent>
                </Card>
              </div>
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

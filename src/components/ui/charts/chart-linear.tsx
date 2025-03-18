"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", martillos: 186, destornilladores: 80, llavesInglesas: 120 },
  { month: "February", martillos: 305, destornilladores: 200, llavesInglesas: 150 },
  { month: "March", martillos: 237, destornilladores: 120, llavesInglesas: 180 },
  { month: "April", martillos: 73, destornilladores: 190, llavesInglesas: 60 },
  { month: "May", martillos: 209, destornilladores: 130, llavesInglesas: 200 },
  { month: "June", martillos: 214, destornilladores: 140, llavesInglesas: 170 },
]

const chartConfig = {
  martillos: {
    label: "Martillos",
    color: "#FF0000",
  },
  destornilladores: {
    label: "Destornilladores",
    color: "#0ea5e9",
  },
  llavesInglesas: {
    label: "Llaves Inglesas",
    color: "#34D399",
  },
} satisfies ChartConfig

export function LinearChart() {
  return (
    <div className="w-[30%] mx-auto">

    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Productos</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-[100%] mx-auto">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="martillos"
              type="linear"
              stroke="#FF0000"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="destornilladores"
              type="linear"
              stroke="#0ea5e9"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="llavesInglesas"
              type="linear"
              stroke="#34D399"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
    </div>
  )
}

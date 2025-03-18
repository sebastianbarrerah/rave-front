"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const salesData = [
  { month: "January", martillos: 186, destornilladores: 80, llavesInglesas: 120, tornillos: 70, clavos: 90 },
  { month: "February", martillos: 305, destornilladores: 200, llavesInglesas: 150, tornillos: 120, clavos: 110 },
  { month: "March", martillos: 237, destornilladores: 120, llavesInglesas: 180, tornillos: 130, clavos: 140 },
  { month: "April", martillos: 73, destornilladores: 190, llavesInglesas: 60, tornillos: 40, clavos: 60 },
  { month: "May", martillos: 209, destornilladores: 130, llavesInglesas: 200, tornillos: 180, clavos: 150 },
  { month: "June", martillos: 214, destornilladores: 140, llavesInglesas: 170, tornillos: 110, clavos: 130 },
]

const chartConfig = {
  martillos: {
    label: "Martillos",
    color: "#ff0000",
  },
  destornilladores: {
    label: "Destornilladores",
    color: "#0ea5e9",
  },
} satisfies ChartConfig

export function ChartColumn() {
  return (
    <div className="w-[30%] mx-auto">
    <Card>
    <CardHeader>
      <CardTitle>Resultados del semestre</CardTitle>
      <CardDescription>Enero - Junio 2024</CardDescription>
    </CardHeader>
    <CardContent>
    <ChartContainer config={chartConfig} className="h-[250px] w-[100%] mx-auto ">
      <BarChart accessibilityLayer data={salesData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={5}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="martillos" fill="#FF0000" radius={2} />
        <Bar dataKey="destornilladores" fill="#0ea5e9" radius={2} />
      </BarChart>
    </ChartContainer>
    </CardContent>
   
  </Card>
    </div>
   
  )
}

"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

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
  { product: "Martillos", sales: 500, fill: "var(--color-martillos)" },
  { product: "Destornilladores", sales: 300, fill: "var(--color-destornilladores)" },
  { product: "Llaves Inglesas", sales: 250, fill: "var(--color-llaves-inglesas)" },
  { product: "Tornillos", sales: 150, fill: "var(--color-tornillos)" },
  { product: "Clavos", sales: 200, fill: "var(--color-clavos)" },
]

const chartConfig = {
  sales: {
    label: "Sales",
  },
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
  tornillos: {
    label: "Tornillos",
    color: "#FBBF24",
  },
  clavos: {
    label: "Clavos",
    color: "#8B5CF6",
  },
} satisfies ChartConfig

export function CircularChart() {
  const totalSales = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.sales, 0)
  }, [])

  return (
    <Card className="flex flex-col w-[30%] mx-auto">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Ventas de Productos</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="sales"
              nameKey="product"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalSales.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Ventas
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total sales for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

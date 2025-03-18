"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, Users, DollarSign, LineChart, ShoppingCart } from "lucide-react"

const metrics = [
  {
    title: "Total ventas",
    value: "$45,231.89",
    change: "+20.1%",
    isPositive: true,
    icon: DollarSign
  },
  {
    title: "Usuario que compraron",
    value: "2,350",
    change: "+15.2%",
    isPositive: true,
    icon: Users
  },
  {
    title: "Ventas",
    value: "12,234",
    change: "-2.5%",
    isPositive: false,
    icon: ShoppingCart
  },
  {
    title: "Crecimiento del mes",
    value: "3.2%",
    change: "+4.1%",
    isPositive: true,
    icon: LineChart
  }
]

export function DashboardHeader() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold tracking-tight pt-3">Estadisiticas del ultimo mes</h2>
        <p className="text-muted-foreground">
          Aqui podras ver los informes de tus ventas, clientes y productos en el ultimo mes.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-0">
                  <p className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </p>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <h2 className="text-2xl font-bold">{metric.value}</h2>
                  <span className={`flex items-center text-sm ${
                    metric.isPositive ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {metric.isPositive ? (
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="mr-1 h-4 w-4" />
                    )}
                    {metric.change}
                  </span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
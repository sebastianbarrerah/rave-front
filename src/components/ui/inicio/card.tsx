"use client"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Users, Lightbulb, Shield, Handshake, Clock, Palette, ShoppingBagIcon, Columns, ChartColumn } from "lucide-react"
import { useRouter } from 'next/navigation'

const services = [
  {
    title: "Tienda",
    description: "Aqui podras administrar las ventas de los productos y servicios de la ferreteria, así como ver el estado de tus pedidos.",
    icon: ShoppingBagIcon,
    url: "/dashboard/tienda"
  },
  {
    title: "Estadisticas",
    description: "Aquí podras ver las estadísticas de tus ventas, como el total de ventas, el total de clientes, el total de productos y servicios, etc.",
    icon: ChartColumn,
    url: "/dashboard/estadisticas"
  },
  {
    title: "Quienes deben pagar",
    description: "Aquí podras ver quién debe pagar por tus ventas, así como ver el estado de tus facturas y pagos. A todos se les envio un correo electrónico con el estado de tus pagos.",
    icon: Users,
    url: "/dashboard/clients"
  },
  {
    title: "Inventario",
    description: "Aquí podras ver los productos que tienes en stock, así como ver el estado de tus pedidos y facturas. Además podras hacer pedidos de productos nuevos y ver el estado de tus pedidos.",
    icon: Columns,
    url: "/dashboard/inventario"
  },
  {
    title: "Seguridad",
    description: "Aquí podras ver las credenciales de acceso a tu cuenta, así como ver el estado de tus pedidos y facturas. Además podras hacer pedidos de productos nuevos y ver el estado de tus pedidos.",
    icon: Shield,
    url: "/dashboard/seguridad"
  },
  {
    title: "Pagos",
    description: "Aquí podras ver los pagos que has hecho a tus clientes, así como ver el estado de tus facturas y pagos. A todos se les envio un correo electrónico con el estado de tus pagos.",
    icon: Handshake,
    url: "/dashboard/pagos"
  },
  
]

type ServiceCardProps = React.ComponentProps<typeof Card>

export function CardInicio({ className, ...props }: ServiceCardProps) {
  const router = useRouter()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => {
        const Icon = service.icon
        return (
          <Card 
            key={index} 
            className={cn(
              "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 hover:bg-red-500 cursor-pointer",
              className
            )} 
            {...props}
            onClick={() => router.push(service.url)}
          >
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-slate-800 dark:text-white">{service.title}</CardTitle>
              <CardDescription className=" text-sm text-slate-800 dark:text-white">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
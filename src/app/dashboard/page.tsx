import { CardInicio } from "@/components/ui/inicio/card";

export default function Page() {
    return (
      <main className="min-h-screen bg-gradient-to-b ">
      <div className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a Rave</h1>
          <p className="text-lg  max-w-2xl mx-auto">
            Rave es un proyecto de software libre que permite a tener un control de las finanzas de la empresa. Aqui podras ver tus ingresos, gastos y gastos de tus clientes. Ademas podras hacer pagos a tus clientes y ver el estado de tus facturas y mucho más...
          </p>
        </div>
        <CardInicio />
      </div>
    </main>
    )
  }
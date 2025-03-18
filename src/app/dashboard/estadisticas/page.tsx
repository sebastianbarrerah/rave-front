import { CircularChart } from "@/components/ui/charts/chart-circular";
import { ChartColumn } from "@/components/ui/charts/chart-column";
import { LinearChart } from "@/components/ui/charts/chart-linear";
import { DashboardHeader } from "@/components/ui/charts/estadisticas-cards";


export default function Page() {
    return (
        <section className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold mb-4">Estadísticas</h1>
            <div className="flex flex-col gap-5">
                <DashboardHeader />
                <div className="flex gap-5">
                    <ChartColumn />
                    <LinearChart />
                    <CircularChart/>
                </div>

            </div>

        </section>
    )
}
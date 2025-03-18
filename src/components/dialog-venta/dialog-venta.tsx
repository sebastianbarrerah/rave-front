
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { products } from "../table/table"

export function DialogVenta() {
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-900">Hscer pedido</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Realiza venta</DialogTitle>
                    <DialogDescription>
                        Primero elige el cliente y revisa los productos que quiere comprar.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col px-4 py-2 space-y-2">
                    <label className="text-xl mb-3" >cliente</label>

                    <Select>
                        <SelectTrigger className="w-[280px]">
                            <SelectValue placeholder="Selecciona el cliente" />
                        </SelectTrigger>

                        <SelectContent>

                            <SelectGroup>
                                <SelectLabel>Vivero</SelectLabel>
                                <SelectItem value="est">Sebastián Torres</SelectItem>
                                <SelectItem value="cst">Carlos jimenez</SelectItem>
                                <SelectItem value="mst">Manuel dominguez</SelectItem>
                                <SelectItem value="pst">Pedro ramirez</SelectItem>
                                <SelectItem value="akst">Antonio Torres</SelectItem>
                                <SelectItem value="hst">Hernán herrera</SelectItem>
                                <SelectItem value="hst">Hugo benitez</SelectItem>
                            </SelectGroup>

                            <SelectGroup>
                                <SelectLabel>Fuera del vivero </SelectLabel>
                                <SelectItem value="est">cliente numero uno</SelectItem>
                                <SelectItem value="cst">cliente numero dos</SelectItem>
                                <SelectItem value="mst">cliente numero tres</SelectItem>
                                <SelectItem value="pst">cliente numero cuatro</SelectItem>
                                <SelectItem value="akst">cliente numero cinco</SelectItem>
                                <SelectItem value="hst">cliente numero seis</SelectItem>
                                <SelectItem value="hst">cliente numero siete</SelectItem>
                            </SelectGroup>

                            <SelectGroup>
                                <SelectLabel>Fuera del vivero </SelectLabel>
                                <SelectItem value="est">Otro</SelectItem>
                            </SelectGroup>


                            <SelectGroup>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <label className="text-xl pt-8 mb-3 mt-5" >Registrar usuario</label>
                        <Input type="text" placeholder="Usuario" />
                        <Input type="email" placeholder="Correo electronico" />
                    
                   
                    <label className="text-xl pt-8 mb-3 mt-5" >Lista de productos</label>
                   
                    {
                        products.map((product, index) => {
                            return (
                            <div key={index} className="flex gap-2 text-xs border-b border-slate-200 py-2">
                                <label className="" >{index + 1}.  {product.name}</label>
                                <p>{product.reference}</p>
                                <p>{product.price}</p>
                                <p>{product.quantity}</p>
                            </div>)
                    })} 


                    <label className="text-xl pt-8 mb-3 mt-5" >Total</label>
                    <p className="text-xl">$0.00</p>


                </div>


                <DialogFooter className="sm:justify-start">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-900">
                        Confirmar
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

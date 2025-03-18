import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Edit2, Trash2 } from "lucide-react";
  import { Checkbox } from "@/components/ui/checkbox";
import { DialogVenta } from "../dialog-venta/dialog-venta";
  
  export const products = [
    { name: "Martillo", reference: "REF001", price: "$12.50", quantity: 20 },
    { name: "Destornillador", reference: "REF002", price: "$8.00", quantity: 35 },
    { name: "Llave Inglesa", reference: "REF003", price: "$18.00", quantity: 15 },
    { name: "Clavos 1 pulgada (100 piezas)", reference: "REF004", price: "$5.00", quantity: 100 },
    { name: "Tornillos de madera (50 piezas)", reference: "REF005", price: "$7.50", quantity: 75 },
    { name: "Cinta métrica 5m", reference: "REF006", price: "$9.99", quantity: 25 },
    { name: "Taladro eléctrico", reference: "REF007", price: "$80.00", quantity: 10 },
    { name: "Lija para madera (10 unidades)", reference: "REF008", price: "$3.50", quantity: 50 },
  ];
  
  export default function TableComponent() {

  

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead >Nro</TableHead>
            <TableHead >Nombre</TableHead>
            <TableHead>Referencia</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Cantidad</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => {
            return (
              <TableRow key={index}>
                <TableCell className="">
                  <Checkbox className="h-5 w-5" />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.reference}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell className="flex space-x-2 gap-3">
                  <Edit2 className="w-6 h-6 text-blue-500 cursor-pointer" />
                  <Trash2 className="w-6 h-6 text-red-500 cursor-pointer" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>

        <TableCaption className="flex justify-center mt-10">
        <div className="flex justify-center">
          <DialogVenta />
        </div>
        </TableCaption>


      </Table>
    );
  }
  
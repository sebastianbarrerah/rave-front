

export default function Page() {
    return (
            <section className="flex flex-col gap-2 items-center justify-center h-[100vh]">
                    <h1 className="text-4xl font-bold mb-4">Reportes</h1>
                    <div className="flex gap-5 ">
                        <div>
                            <img src="https://www.eluniversal.com.mx/resizer/v2/QD5XDHWYKBDNFI5N77NQDPANZY.jpg?auth=cbeff33601c75976a49bc8c576575a4aac169966a07276ba7d9c6f6147166a9a&smart=true&width=1100&height=666" alt="Reporte de ventas" className="w-[50rem]" />
                        </div>
                        <div className="flex flex-col gap-5 text-center justify-center">
                            <p>Envía tu reporte de manera rápida y sencilla a través de nuestro formulario de Google. Adjunta imágenes y datos relevantes como evidencia y nuestro equipo se encargará de revisarlo lo antes posible. ¡Gracias por tu colaboración!</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScRDr8GjEQltg9ttmHUM95C8qR4xgG6JszN37jMh7LplFkfhg/viewform" target="_blank" rel="noreferrer">
                            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-900">
                                Formulario de preguntas
                            </button>
                        </a>
                        </div>
                    </div>
            </section>

    )
}
    
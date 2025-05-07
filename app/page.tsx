// Indica que este archivo se ejecuta en el lado del cliente (no del servidor)
"use client";
// Importamos hooks de React para manejar estado y efectos
import { useEffect, useState } from "react";
// Importamos un componente que se usará para mostrar la tabla
import { Image } from "@heroui/react";

import CreateTable from "@/components/table-hotels";
// Importamos el logo de Decameron
import logo from "@/public/logo-decameron.png";

// Definimos las columnas que tendrá la tabla, con su nombre, id y si se pueden ordenar
export const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "HOTEL", uid: "name", sortable: true },
  { name: "CIUDAD", uid: "city", sortable: true },
  { name: "DIRECCIÓN", uid: "address", sortable: true },
  { name: "NIT", uid: "nit" },
  { name: "MAX. HABITACIONES", uid: "max_rooms" },
  { name: "ACCIÓN", uid: "actions" },
];

// Opciones de estado que se podrían usar para los hoteles (aunque aquí no se usan directamente)
export const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

// Columnas que estarán visibles inicialmente en la tabla
const INITIAL_VISIBLE_COLUMNS = [
  "name",
  "city",
  "address",
  "nit",
  "max_rooms",
  "actions",
];

export default function Home() {
  // Estado para guardar los hoteles y saber si está cargando
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect se ejecuta cuando el componente carga o cuando 'loading' cambia
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        // Llamada a la API para obtener la lista de hoteles
        const response = await fetch("http://localhost:8000/api/hotels/");

        // Si la respuesta no es exitosa, lanza un error
        if (!response.ok) {
          throw new Error("Error al obtener los hoteles");
        }

        // Convierte la respuesta a JSON
        const data = await response.json();

        // Guarda los datos de los hoteles en el estado
        setHotels(data);
        setLoading(false); // Deja de estar en modo "cargando"
      } catch (err: any) {
        setLoading(false); // Si hay error, igual dejamos de cargar
      }
    };

    // Llama a la función para obtener hoteles
    fetchHotels();
  }, [loading]); // Se ejecuta cuando 'loading' cambia

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* Mostramos el logo de Decameron */}
      <Image
        alt="Decameron Logo"
        className="h-16 w-auto md:h-20 lg:h-24 mb-10"
        src={logo.src}
      />

      {/* Mostramos la tabla usando el componente CreateTable */}
      <CreateTable
        INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS}
        columns={columns}
        setLoading={setLoading}
        statusOptions={statusOptions}
        type="allHotels"
        users={hotels}
      />
    </section>
  );
}

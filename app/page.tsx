"use client";
import { useEffect, useState } from "react";

import CreateTable from "@/components/create-table";
import logo from "@/public/logo-decameron.png";

export const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "HOTEL", uid: "name", sortable: true },
  { name: "CIUDAD", uid: "city", sortable: true },
  { name: "DIRECCIÓN", uid: "address", sortable: true },
  { name: "NIT", uid: "nit" },
  { name: "MAX. HABITACIONES", uid: "max_rooms" },
  { name: "ACCIÓN", uid: "actions" },
];

export const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const INITIAL_VISIBLE_COLUMNS = [
  "name",
  "city",
  "address",
  "nit",
  "max_rooms",
  "actions",
];

export default function Home() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/hotels/");

        if (!response.ok) {
          throw new Error("Error al obtener los hoteles");
        }
        const data = await response.json();

        setHotels(data);
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [loading]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <img
        alt="Decameron Logo"
        className="h-16 w-auto md:h-20 lg:h-24 mb-10"
        src={logo.src}
      />

      <CreateTable
        INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS}
        columns={columns}
        setLoading={setLoading}
        statusOptions={statusOptions}
        users={hotels}
        type="allHotels"
      />
    </section>
  );
}

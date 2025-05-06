'use client';
import CreateTable from "@/components/create-table";
import logo from "@/public/logo-decameron.png";
import { useEffect, useState } from "react";

export const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NOMBRE", uid: "name", sortable: true },
  { name: "CIUDAD", uid: "city", sortable: true },
  { name: "DIRECCIÓN", uid: "address", sortable: true },
  { name: "NIT", uid: "nit" },
  { name: "HABITACIONES", uid: "max_rooms" },
  { name: "ACCIÓN", uid: "actions" },
];

export const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const INITIAL_VISIBLE_COLUMNS = ["name", "city", "address", "nit", "max_rooms", "actions"];

// export const users = [
//   {
//     id: 1,
//     name: "Tony Reichert",
//     role: "CEO",
//     team: "Management",
//     status: "active",
//     age: "29",
//     avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
//     email: "tony.reichert@example.com",
//   },
//   {
//     id: 2,
//     name: "Zoey Lang",
//     role: "Tech Lead",
//     team: "Development",
//     status: "paused",
//     age: "25",
//     avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
//     email: "zoey.lang@example.com",
//   },
//   {
//     id: 3,
//     name: "Jane Fisher",
//     role: "Sr. Dev",
//     team: "Development",
//     status: "active",
//     age: "22",
//     avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
//     email: "jane.fisher@example.com",
//   }
// ];

export default function Home() {

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/hotels/');
        if (!response.ok) {
          throw new Error('Error al obtener los hoteles');
        }
        const data = await response.json();

        console.log(data);

        setHotels(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

      <img
        src={logo.src}
        alt="Decameron Logo"
        className="h-16 w-auto md:h-20 lg:h-24 mb-10"
      />

      <CreateTable columns={columns} statusOptions={statusOptions} users={hotels} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} />
    </section>
  );
}

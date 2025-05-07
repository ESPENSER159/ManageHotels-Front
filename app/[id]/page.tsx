"use client";
import { useEffect, useState } from "react";
import logo from "@/public/logo-decameron.png";
import { useParams } from 'next/navigation';
import { Link } from '@heroui/link'
import { Button } from "@heroui/react";

export default function Home() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState(false);

    const params = useParams<{ id: string }>()

    useEffect(() => {
        console.log(params)
    }, [params])

    useEffect(() => {
        console.log(params)

        if (params.id) {
            const fetchHotels = async () => {
                try {
                    const response = await fetch(`http://localhost:8000/api/hotels/${params.id}`);

                    if (!response.ok) {
                        throw new Error("Error al obtener los hoteles");
                    }
                    const data = await response.json();

                    console.log(data);

                    setTitle(data.name);

                    setHotels(data);
                    setLoading(false);
                } catch (err: any) {
                    setLoading(false);
                }
            };

            fetchHotels();
        }
    }, [loading, params]);

    return (
        <>
            <Button as={Link} href="/">Volver</Button>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <img
                    alt="Decameron Logo"
                    className="h-16 w-auto md:h-20 lg:h-24 mb-10"
                    src={logo.src}
                />

                <p className="font-bold text-3xl">HOTEL {title}</p>
            </section>
        </>
    );
}

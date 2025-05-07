"use client";
import { useEffect, useState } from "react";
import logo from "@/public/logo-decameron.png";
import { useParams } from 'next/navigation';
import { Link } from '@heroui/link'
import { Button, Card, CardBody, CardHeader, Image } from "@heroui/react";
import TabelRooms from "@/components/table-rooms";

export default function Hotel() {
    const [hotel, setHotel] = useState<any>({});
    const [rooms, setRooms] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [found, setFound] = useState(true);
    const [imageHotel, setImageHotel] = useState<string[]>([]);

    const params = useParams<{ id: string }>();

    useEffect(() => {
        if (params.id) {
            const fetchHotels = async () => {
                try {
                    const response = await fetch(`http://localhost:8000/api/hotels/${params.id}`);

                    if (!response.ok) {
                        return setFound(false);
                    }
                    const data = await response.json();

                    console.log(data);

                    let getRooms = data.rooms.map((room: any) => {
                        return {
                            hotel_id: room.hotel_id,
                            id: room.id,
                            rooms: room.quantity,
                            id_type: room.room_type.id,
                            type: room.room_type.name,
                            id_accommodation: room.accommodation.id,
                            accommodation: room.accommodation.name,
                        }
                    });
                    console.log(getRooms);

                    setHotel(data);
                    setRooms(getRooms);
                    setLoading(false);
                } catch (err: any) {
                    setLoading(false);
                }
            };

            fetchHotels();
        }
    }, [loading, params]);

    const listImagesHotels = ["https://www.decameron.com/images/thumbnail/cards/colombia/galeon/hotel.jpg", "https://www.decameron.com/images/thumbnail/cards/colombia/baru/hotel-3.jpg", "https://www.decameron.com/images/thumbnail/cards/colombia/cartagena/hotel-2.jpg", "https://www.decameron.com/images/thumbnail/cards/colombia/san-pedro/hotel-3.jpg", "https://www.decameron.com/images/thumbnail/cards/colombia/aquarium/hotel.jpg", "https://www.decameron.com/images/thumbnail/cards/colombia/isleno/hotel-3.jpg"]

    useEffect(() => {
        return setImageHotel([listImagesHotels[Math.floor(Math.random() * listImagesHotels.length)]]);
    }, []);

    return (
        <>
            <Button as={Link} href="/">Volver</Button>
            {
                found ?
                    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                        <img
                            alt="Decameron Logo"
                            className="h-16 w-auto md:h-20 lg:h-24"
                            src={logo.src}
                        />

                        <Card
                            isBlurred
                            className="border-none bg-background/60 dark:bg-default-100/50"
                            shadow="sm"
                        >
                            <CardBody>
                                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                                    <div className="relative col-span-6 md:col-span-6">
                                        <Image
                                            alt="Album cover"
                                            className="object-cover"
                                            height={400}
                                            shadow="md"
                                            src={imageHotel[0]}
                                            width="100%"
                                        />
                                    </div>

                                    <div className="flex flex-col col-span-6 md:col-span-6">
                                        <p className="font-bold text-3xl">HOTEL {hotel.name}</p>

                                        <div className="flex justify-between items-start">
                                            <div className="flex flex-col gap-0">
                                                <h3 className="font-semibold text-foreground/90">Ubicación: {hotel.city}</h3>
                                                <p className="text-small text-foreground/80">Dirección: {hotel.address}</p>
                                                <p className="text-small text-foreground/80">NIT: {hotel.nit}</p>
                                                <h1 className="text-large font-medium mt-2">Máximo Habitaciones: {hotel.max_rooms}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>


                        <p className="font-bold text-3xl">Habitaciones</p>

                        <TabelRooms users={rooms} setLoading={setLoading} IdHotel={params.id} />
                    </section>
                    :
                    <>
                        <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                            <h1 className="text-3xl font-bold">No se encontró el hotel</h1>
                            <p className="text-lg">Verifique el ID del hotel</p>
                        </div>
                    </>
            }

        </>
    );
}

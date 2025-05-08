// Indica que este archivo se ejecuta del lado del cliente
"use client";
// Importamos hooks de React
import { useEffect, useState } from "react";
// Importamos hook para obtener parámetros de la URL (como el id del hotel)
import { useParams } from "next/navigation";
// Importamos componentes UI (botón, tarjeta, imagen) de la librería HeroUI
import { Link } from "@heroui/link";
import { Button, Card, CardBody, Image } from "@heroui/react";
import logo from "@/public/logo-decameron.png";
// Importamos el componente que muestra la tabla de habitaciones
import TabelRooms from "@/components/table-rooms";

// URL de la API, recuperada desde las variables de entorno.
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Hotel() {
  // Estados
  const [hotel, setHotel] = useState<any>({});
  const [rooms, setRooms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(true);
  const [imageHotel, setImageHotel] = useState<string[]>([]);

  // Obtenemos el parámetro 'id' de la URL
  const params = useParams<{ id: string }>();

  // useEffect para obtener la información del hotel al cargar o cuando cambia 'loading' o 'params'
  useEffect(() => {
    if (params.id) {
      const fetchHotels = async () => {
        try {
          // Llamada a la API para obtener los datos del hotel por ID
          const response = await fetch(
            `${apiUrl}/api/hotels/${params.id}`,
          );

          if (!response.ok) {
            // Si no encuentra el hotel, marcamos como no encontrado
            return setFound(false);
          }

          const data = await response.json();

          // Transformamos los datos de las habitaciones a un formato más sencillo
          let getRooms = data.rooms.map((room: any) => {
            return {
              hotel_id: room.hotel_id,
              id: room.id,
              rooms: room.quantity,
              id_type: room.room_type.id,
              type: room.room_type.name,
              id_accommodation: room.accommodation.id,
              accommodation: room.accommodation.name,
            };
          });

          // Guardamos los datos en el estado
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

  // Lista de URLs de imágenes para mostrar una imagen aleatoria del hotel
  const listImagesHotels = [
    "https://www.decameron.com/images/thumbnail/cards/colombia/galeon/hotel.jpg",
    "https://www.decameron.com/images/thumbnail/cards/colombia/baru/hotel-3.jpg",
    "https://www.decameron.com/images/thumbnail/cards/colombia/cartagena/hotel-2.jpg",
    "https://www.decameron.com/images/thumbnail/cards/colombia/san-pedro/hotel-3.jpg",
    "https://www.decameron.com/images/thumbnail/cards/colombia/aquarium/hotel.jpg",
    "https://www.decameron.com/images/thumbnail/cards/colombia/isleno/hotel-3.jpg",
  ];

  // useEffect para seleccionar una imagen aleatoria cuando el componente se monta
  useEffect(() => {
    return setImageHotel([
      listImagesHotels[Math.floor(Math.random() * listImagesHotels.length)],
    ]);
  }, []);

  return (
    <>
      {/* Botón para volver al inicio */}
      <Button as={Link} href="/">
        Volver
      </Button>

      {found ? (
        // Si el hotel fue encontrado, mostramos la información
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          {/* Logo */}
          <Image
            alt="Decameron Logo"
            className="h-16 w-auto md:h-20 lg:h-24"
            src={logo.src}
          />

          {/* Tarjeta con los detalles del hotel */}
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50"
            shadow="sm"
          >
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                {/* Imagen del hotel */}
                <div className="relative col-span-6 md:col-span-6">
                  <Image
                    alt="Hotel cover"
                    className="object-cover"
                    height={400}
                    shadow="md"
                    src={imageHotel[0]}
                    width="100%"
                  />
                </div>

                {/* Información del hotel */}
                <div className="flex flex-col col-span-6 md:col-span-6">
                  <p className="font-bold text-3xl">HOTEL {hotel.name}</p>

                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0">
                      <h3 className="font-semibold text-foreground/90">
                        Ubicación: {hotel.city}
                      </h3>
                      <p className="text-small text-foreground/80">
                        Dirección: {hotel.address}
                      </p>
                      <p className="text-small text-foreground/80">
                        NIT: {hotel.nit}
                      </p>
                      <h1 className="text-large font-medium mt-2">
                        Máximo Habitaciones: {hotel.max_rooms}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Título de la sección de habitaciones */}
          <p className="font-bold text-3xl">Habitaciones</p>

          {/* Tabla que muestra las habitaciones */}
          <TabelRooms
            IdHotel={params.id}
            setLoading={setLoading}
            users={rooms}
          />
        </section>
      ) : (
        // Si no se encontró el hotel, mostramos un mensaje de error
        <>
          <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <h1 className="text-3xl font-bold">No se encontró el hotel</h1>
            <p className="text-lg">Verifique el ID del hotel</p>
          </div>
        </>
      )}
    </>
  );
}

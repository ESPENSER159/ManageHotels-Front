// Importación de dependencias y componentes necesarios
"use client"; // Directiva que indica que este archivo es específico del cliente, no del servidor.
import React, { SVGProps } from "react"; // Importa React y las propiedades de SVG.
// Importación de varios componentes de la biblioteca Heroui para la UI
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Form,
  addToast,
  Tooltip,
  User,
  Image,
} from "@heroui/react";
import { Link } from "@heroui/link"; // Importa el componente Link de la librería Heroui para crear enlaces.

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  // Define los tipos de propiedades para los íconos SVG.
  size?: number;
};

// Función para capitalizar la primera letra de una cadena
export function capitalize(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

// Componente para el ícono de "ojo" (EyeIcon)
export const EyeIcon = (props: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"
      {...props}
    >
      <path
        d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

// Componente para el ícono de "eliminar" (DeleteIcon)
export const DeleteIcon = (props: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"
      {...props}
    >
      <path
        d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M8.60834 13.75H11.3833"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.91669 10.4167H12.0834"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

// Componente para el ícono de "editar" (EditIcon)
export const EditIcon = (props: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"
      {...props}
    >
      <path
        d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M2.5 18.3333H17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

// Componente para el ícono de "más" (PlusIcon)
export const PlusIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M6 12h12" />
        <path d="M12 18V6" />
      </g>
    </svg>
  );
};

// Componente para el ícono de "puntos verticales" (VerticalDotsIcon)
export const VerticalDotsIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="currentColor"
      />
    </svg>
  );
};

// Componente para el ícono de "búsqueda" (SearchIcon)
export const SearchIcon = (props: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

// Componente para el ícono de "flecha hacia abajo" (ChevronDownIcon)
export const ChevronDownIcon = ({
  strokeWidth = 1.5,
  ...otherProps
}: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...otherProps}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

// Mapa de colores para los diferentes estados de un chip (etiqueta).
const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success", // Estado activo con color verde.
  paused: "danger", // Estado pausado con color rojo.
  vacation: "warning", // Estado de vacaciones con color amarillo.
};

// URL de la API, recuperada desde las variables de entorno.
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Componente principal de la tabla de hoteles
export default function TableHotels({
  columns,
  statusOptions,
  users,
  INITIAL_VISIBLE_COLUMNS,
  setLoading,
}: {
  columns: { uid: string; name: string; sortable?: boolean }[];
  statusOptions: { uid: string; name: string }[];
  users: {
    max_rooms: number | undefined;
    nit: string | undefined;
    address: string | undefined;
    city: string | undefined;
    id: number;
    name: string;
    role: string;
    team: string;
    status: string;
    age: string;
    avatar: string;
    email: string;
  }[];
  INITIAL_VISIBLE_COLUMNS: string[];
  setLoading: (loading: boolean) => void;
  type?: "allHotels" | "hotel";
}) {
  // Hook para manejar el estado del modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Estados de los datos enviados en el formulario
  const [submitted, setSubmitted] = React.useState<{
    [k: string]: FormDataEntryValue;
  } | null>(null);
  const [action, setAction] = React.useState<{
    action: string;
    id?: number;
    name?: string;
    city?: string;
    address?: string;
    nit?: string;
    max_rooms?: number;
  }>({
    action: "",
    id: undefined,
    name: "",
    city: "",
    address: "",
    nit: "",
    max_rooms: 0,
  });

  // Función para crear un hotel
  const createHotel = async (hotelData: {
    name: string;
    address: string;
    city: string;
    nit: string;
    max_rooms: number;
  }) => {
    try {
      const response = await fetch(`${apiUrl}/api/hotels/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hotelData),
      });

      if (!response.ok) {
        throw new Error("Error al crear el hotel");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      addToast({
        description: String(error),
        color: "danger",
      });

      throw error;
    }
  };

  // Función para eliminar un hotel
  const deleteHotel = async (hotelId: any) => {
    try {
      const response = await fetch(`${apiUrl}/api/hotels/${hotelId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el hotel");
      }

      if (response.status !== 204) {
        const data = await response.json();

        return data;
      }

      return { success: true, id: hotelId };
    } catch (error) {
      addToast({
        description: String(error),
        color: "danger",
      });
      throw error;
    }
  };

  // Función para actualizar un hotel
  const updateHotel = async (
    hotelId: any,
    updatedData: {
      name: string;
      address: string;
      city: string;
      nit: string;
      max_rooms: number;
    },
  ) => {
    try {
      const response = await fetch(`${apiUrl}/api/hotels/${hotelId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el hotel");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      addToast({
        description: String(error),
        color: "danger",
      });
      throw error;
    }
  };

  // Función que maneja el envío del formulario
  const onSubmit = async (e: any) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);

    // Según la acción seleccionada (Agregar, Eliminar, Editar), realizar la operación correspondiente
    if (action.action === "Eliminar") {
      await deleteHotel(action.id);

      addToast({
        description: "Hotel eliminado correctamente",
        color: "success",
      });
    } else if (action.action === "Agregar") {
      await createHotel({
        name: data.name as string,
        address: data.address as string,
        city: data.city as string,
        nit: data.nit as string,
        max_rooms: Number(data.max_rooms),
      });

      addToast({
        description: "Hotel creado correctamente",
        color: "success",
      });
    } else if (action.action === "Editar") {
      await updateHotel(action.id, {
        name: data.name as string,
        address: data.address as string,
        city: data.city as string,
        nit: data.nit as string,
        max_rooms: Number(data.max_rooms),
      });

      addToast({
        description: "Hotel actualizado correctamente",
        color: "success",
      });
    }

    setLoading(true);
    onOpenChange();
  };

  // Estado de la tabla
  type User = (typeof users)[0];
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([]),
  );
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS),
  );
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });

  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  // Filtrado de las columnas
  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid),
    );
  }, [visibleColumns]);

  // Filtrado de los usuarios basado en búsqueda y estado
  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status),
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter]);

  // Paginación
  const pages = Math.ceil(filteredItems.length / rowsPerPage) || 1;

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  // Ordenamiento de los elementos
  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  // Imágenes de los hoteles
  const listImagesHotels = [
    "https://www.decameron.com/images/thumbnail/cards/colombia/galeon/hotel.jpg",
    "https://www.decameron.com/images/thumbnail/cards/colombia/baru/hotel-3.jpg",
    "https://www.decameron.com/images/thumbnail/cards/colombia/cartagena/hotel-2.jpg",
    "https://www.decameron.com/images/thumbnail/cards/colombia/san-pedro/hotel-3.jpg",
    "https://www.decameron.com/images/thumbnail/cards/colombia/aquarium/hotel.jpg",
    "https://www.decameron.com/images/thumbnail/cards/colombia/isleno/hotel-3.jpg",
  ];

  // Renderizar las celdas de la tabla
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        let setImage =
          listImagesHotels[Math.floor(Math.random() * listImagesHotels.length)];

        return (
          <Tooltip
            content={
              <div className="px-1 py-2">
                <Image
                  alt="Decameron Logo"
                  className="h-40 w-40 "
                  src={setImage}
                />
                <p className="font-bold">{user.name}</p>
              </div>
            }
          >
            {/* <Button variant="bordered">Hover me</Button> */}
            <User
              avatarProps={{ radius: "lg", src: setImage }}
              name={cellValue}
            />
          </Tooltip>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <div className="relative flex items-center gap-2">
              <Tooltip content="Ver">
                <Link
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                  href={`/${String(user.id)}`}
                >
                  <EyeIcon />
                </Link>
              </Tooltip>
              <Tooltip content="Editar">
                <button
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                  onClick={() => {
                    onOpen();
                    setAction({
                      action: "Editar",
                      id: user.id,
                      name: user.name,
                      city: user.city,
                      address: user.address,
                      nit: user.nit,
                      max_rooms: user.max_rooms,
                    });
                  }}
                >
                  <EditIcon />
                </button>
              </Tooltip>
              <Tooltip color="danger" content="Eliminar">
                <button
                  className="text-lg text-danger cursor-pointer active:opacity-50"
                  onClick={() => {
                    onOpen();
                    setAction({
                      action: "Eliminar",
                      id: user.id,
                      name: user.name,
                    });
                  }}
                >
                  <DeleteIcon />
                </button>
              </Tooltip>
            </div>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    [],
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Buscar por..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Columnas
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              color="primary"
              endContent={<PlusIcon />}
              onPress={() => {
                onOpen();
                setAction({ action: "Agregar" });
              }}
            >
              Agregar Hotel
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {users.length}
          </span>
          <label className="flex items-center text-default-400 text-small">
            Filas por página:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    users.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "Todos los items seleccionados"
            : `${selectedKeys.size} of ${filteredItems.length} seleccionado`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Anterior
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Siguiente
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <>
      <Table
        isHeaderSticky
        aria-label="Example table with custom cells, pagination and sorting"
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{
          wrapper: "max-h-[382px]",
        }}
        selectedKeys={selectedKeys}
        selectionMode="single"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No users found"} items={sortedItems}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {action.action} Hotel
              </ModalHeader>
              <ModalBody>
                <Form className="w-full" onSubmit={onSubmit}>
                  {action.action === "Eliminar" ? (
                    <div className="flex flex-col gap-2">
                      <p className="text-default-500">
                        ¿Está seguro de que desea eliminar el hotel &#34;
                        {action.name}&#34;?
                      </p>
                      <p className="text-default-500">
                        Esta acción no se puede deshacer.
                      </p>
                    </div>
                  ) : (
                    <>
                      <Input
                        isRequired
                        errorMessage="Ingrese un nombre"
                        label="Nombre"
                        labelPlacement="outside"
                        name="name"
                        placeholder="Nombre del hotel"
                        type="text"
                        value={action.name}
                        onValueChange={(value) =>
                          setAction({ ...action, name: value })
                        }
                      />

                      <Input
                        isRequired
                        errorMessage="Ingrese una dirrección"
                        label="Dirrección"
                        labelPlacement="outside"
                        name="address"
                        placeholder="Dirrección del hotel"
                        type="text"
                        value={action.address}
                        onValueChange={(value) =>
                          setAction({ ...action, address: value })
                        }
                      />

                      <Input
                        isRequired
                        errorMessage="Ingrese de la ciudad"
                        label="Ciudad"
                        labelPlacement="outside"
                        name="city"
                        placeholder="Ciudad del hotel"
                        type="text"
                        value={action.city}
                        onValueChange={(value) =>
                          setAction({ ...action, city: value })
                        }
                      />

                      <Input
                        isRequired
                        errorMessage="Ingrese un NIT"
                        label="NIT"
                        labelPlacement="outside"
                        name="nit"
                        placeholder="NIT del hotel"
                        type="number"
                        value={action.nit}
                        onValueChange={(value) =>
                          setAction({ ...action, nit: value })
                        }
                      />

                      <Input
                        isRequired
                        errorMessage="Ingrese el número de habitaciones"
                        label="Cantidad de habitaciones"
                        labelPlacement="outside"
                        name="max_rooms"
                        placeholder="Número de habitaciones"
                        type="number"
                        value={
                          action.max_rooms !== undefined
                            ? String(action.max_rooms)
                            : ""
                        }
                        onValueChange={(value) =>
                          setAction({ ...action, max_rooms: Number(value) })
                        }
                      />
                    </>
                  )}

                  <div className="w-full flex justify-end gap-2 mt-4 items-end">
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cerrar
                    </Button>
                    <Button color="primary" type="submit">
                      {action.action}
                    </Button>
                  </div>
                </Form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

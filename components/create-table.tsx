"use client";
import React, { SVGProps } from "react";
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
} from "@heroui/react";
import { Link } from '@heroui/link'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function capitalize(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

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

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function App({
  columns,
  statusOptions,
  users,
  INITIAL_VISIBLE_COLUMNS,
  setLoading,
  type,
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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

  const createHotel = async (hotelData: {
    name: string;
    address: string;
    city: string;
    nit: string;
    max_rooms: number;
  }) => {
    try {
      const response = await fetch("http://localhost:8000/api/hotels/", {
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

      return data; // Retorna el hotel creado con su ID
    } catch (error) {
      addToast({
        description: String(error),
        color: "danger",
      });

      console.error("Error:", error);

      throw error; // Puedes manejar este error en el componente que llame a esta función
    }
  };

  const deleteHotel = async (hotelId: any) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/hotels/${hotelId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Error al eliminar el hotel");
      }

      // Algunas APIs devuelven contenido en DELETE, otras no
      if (response.status !== 204) {
        // 204 No Content
        const data = await response.json();

        return data;
      }

      return { success: true, id: hotelId };
    } catch (error) {
      addToast({
        description: String(error),
        color: "danger",
      });
      console.error("Error:", error);
      throw error;
    }
  };

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
      const response = await fetch(
        `http://localhost:8000/api/hotels/${hotelId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        },
      );

      if (!response.ok) {
        throw new Error("Error al actualizar el hotel");
      }

      const data = await response.json();

      return data; // Retorna el hotel actualizado
    } catch (error) {
      addToast({
        description: String(error),
        color: "danger",
      });
      console.error("Error:", error);
      throw error;
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);

    if (action.action === "Eliminar") {
      try {
        const result = await deleteHotel(action.id);

        console.log("Hotel eliminado:", result);
        addToast({
          description: "Hotel eliminado correctamente",
          color: "success",
        });
      } catch (error) {
        console.error("Falló la eliminación del hotel:", error);
      }
    } else if (action.action === "Agregar") {
      try {
        const newHotel = await createHotel({
          name: data.name as string,
          address: data.address as string,
          city: data.city as string,
          nit: data.nit as string,
          max_rooms: Number(data.max_rooms),
        });

        console.log("Hotel creado:", newHotel);

        addToast({
          description: "Hotel creado correctamente",
          color: "success",
        });
      } catch (error) {
        console.error("Falló la creación del hotel:", error);
      }
    } else if (action.action === "Editar") {
      try {
        const updatedHotel = await updateHotel(action.id, {
          name: data.name as string,
          address: data.address as string,
          city: data.city as string,
          nit: data.nit as string,
          max_rooms: Number(data.max_rooms),
        });

        console.log("Hotel actualizado:", updatedHotel);
        addToast({
          description: "Hotel actualizado correctamente",
          color: "success",
        });
      } catch (error) {
        console.error("Falló la actualización:", error);
      }
    }

    setLoading(true);
    onOpenChange();
  };

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

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid),
    );
  }, [visibleColumns]);

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

  const pages = Math.ceil(filteredItems.length / rowsPerPage) || 1;

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return <div>{user.name}</div>;
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
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="view" className="text-black dark:text-white" as={Link} href={`/${String(user.id)}`}>
                  Ver
                </DropdownItem>
                <DropdownItem
                  key="edit"
                  onPress={() => {
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
                  Editar
                </DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                  onPress={() => {
                    onOpen();
                    setAction({
                      action: "Eliminar",
                      id: user.id,
                      name: user.name,
                    });
                  }}
                >
                  Eliminar
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
                        ¿Está seguro de que desea eliminar el hotel "
                        {action.name}"?
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

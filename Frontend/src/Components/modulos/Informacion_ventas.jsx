import React, { useState } from 'react';
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
} from "reactstrap";
import './Informacion_ventas.css';

const data = [
    { id: 1, Nombre_Producto: "Calculadora gráfica", Descripcion_Producto: "Está calculadora tiene las funciones de distinguir entre múltiples gráficos y parcelas con ecuaciones codificadas por colores, parcelas y objetos. Además, de se electrónicamente actualizable calculadora gráfica te permite tener más actualizada la funcionalidad y las aplicaciones de software.", Valor_Unitario: "240.000", Estado: "Disponible"},
    { id: 2, Nombre_Producto: "Mouse inalámbrico", Descripcion_Producto: "Mouse inalámbrico, conexión vía Bluetooth recargable, fácil de manejar, silencioso, colores surtidos(lila, rosa, blanco, negro, plateado) para ordenador y ultra resistente al agua.", Valor_Unitario: "97.000", Estado: "No Disponible"},
    { id: 3, Nombre_Producto: "Cargador", Descripcion_Producto: "Cargador autentico marca Samsung súper rápido, cable de 1,50 metros , carga a todos los dispositivos con puerto simular y al otro extremo con UBS lo que permite conexión con la computadora.", Valor_Unitario: "45.000", Estado: "Disponible"},
    { id: 4, Nombre_Producto: "Teclado inalámbrico", Descripcion_Producto: "Teclado inalámbrico conexión vía Bluetooth lo que permite que pueda conectarse a una Tablet, ordenador o móvil, compatible a dispositivos Android, idioma predeterminado inglés.", Valor_Unitario: "105.000", Estado: "Disponible"},
    { id: 5, Nombre_Producto: "Audifonos", Descripcion_Producto: "Audifonos alámbricos PUBG, 3.5 mm, comodos y duraderos. micrófono extremo que permite su interacción como manos libres. Cable recubierto lo que brinda una mayor calidad", Valor_Unitario: "36.000", Estado: "Disponible"}
];
const Informacion_ventas = () => {

    const [modalActualizar, setModalActualizar] = useState(false)
    const [modalInsertar, setModalInsertar] = useState('');
    const [producto, setProducto] = useState({
        data: data,
        form: {
            id: "",
            Nombre_Producto: "",
            Descripcion_Producto: "",
            Valor_Unitario: "",
            Estado: "",
            
            lastName: ""
        }
    });

    const handleChange = (e) => {
        setProducto((prevState) => ({
            ...prevState,
            form: {
                ...prevState.form,
                [e.target.name]: e.target.value,
            }
        }));
    };

    const mostrarModalActualizar = (e) => {
        let Diccionario_Productos = producto.data;
        let ProductoModificable;
        Diccionario_Productos.map((registro) => {
            if (e.target.id == registro.id) {
                ProductoModificable = registro;
            }
        });
        setProducto({
            ...producto,
            form: ProductoModificable
        });
        setModalActualizar(true);
    };

    const cerrarModalActualizar = () => {
        setModalActualizar(false);
    };

    const mostrarModalInsertar = () => {
        setModalInsertar(true);
    };

    const cerrarModalInsertar = () => {
        setModalInsertar(false);
    };

    const editar = () => {
        let contador = 0;
        let ModificarProducto = { ...producto.form };
        let Diccionario_Productos = producto.data;
        Diccionario_Productos.map((registro) => {
            if (ModificarProducto.id === registro.id) {
                Diccionario_Productos[contador] = ModificarProducto;
            }
            contador++;
        });
        setProducto({
            ...producto,
            data: Diccionario_Productos
        });
        setModalActualizar(false);
    };

    const eliminar = (e) => {
        let contador = 0;
        let Diccionario_Productos = producto.data;
        Diccionario_Productos.map((registro) => {
            if (e.target.id == registro.id) {
                Diccionario_Productos.splice(contador, 1);
            }
            contador++;
        });
        setProducto({
            ...producto,
            data: Diccionario_Productos
        });
    };

    const insertar = () => {
        let CrearProducto = { ...producto.form };
        CrearProducto.id = producto.data.length + 1;
        let Diccionario_Productos = producto.data;
        Diccionario_Productos.push(CrearProducto);
        setProducto({
            ...producto,
            data: Diccionario_Productos
        });
        setModalInsertar(false);
    }

    return (
        <>
            <Container>
                <br />
                <Button color="success" onClick={mostrarModalInsertar}>Crear</Button>
                <br />
                <br />
                <Table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre producto</th>
                            <th>Descripción producto</th>
                            <th>Valor unitario</th>
                            <th>Estado</th>
                        </tr>
                    </thead>

                    <tbody>
                        {producto.data.map((dato) => (
                            <tr key={dato.id}>
                                <td>{dato.id}</td>
                                <td>{dato.Nombre_Producto}</td>
                                <td>{dato.Descripcion_Producto}</td>
                                <td>{dato.Valor_Unitario}</td>
                                <td>{dato.Estado}</td>
                                <td>
                                    <Button
                                        id={dato.id}
                                        onClick={mostrarModalActualizar}
                                        color="primary"
                                    >
                                        Editar
                                    </Button>{" "}
                                    <Button id={dato.id} color="danger" onClick={eliminar}>Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>

            <Modal isOpen={modalActualizar}>
                <ModalHeader>
                    <div><h3>Actualizar producto {producto.form.id}</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>
                            Id:
                        </label>

                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            value={producto.form.id}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Nombre Producto:
                        </label>
                        <input
                            className="form-control"
                            name="Nombre_Producto"
                            type="text"
                            onChange={handleChange}
                            value={producto.form.Nombre_Producto}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Descripción Producto:
                        </label>
                        <input
                            className="form-control"
                            name="Descripcion_Producto"
                            type="text"
                            onChange={handleChange}
                            value={producto.form.Descripcion_Producto}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Valor Unitario:
                        </label>
                        <input
                            className="form-control"
                            name="Valor_Unitario"
                            type="text"
                            onChange={handleChange}
                            value={producto.form.Valor_Unitario}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Estado:
                        </label>
                        <input
                            className="form-control"
                            name="Estado"
                            type="text"
                            onChange={handleChange}
                            value={producto.form.Estado}
                        />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={editar}
                    >
                        Actualizar
                    </Button>
                    <Button
                        className="btn btn-danger"
                        onClick={cerrarModalActualizar}
                    >
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>



            <Modal isOpen={modalInsertar}>
                <ModalHeader>
                    <div><h3>Insertar nuevo producto</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>
                            Id:
                        </label>

                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            value={producto.data.length + 1}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>
                            Nombre Producto:
                        </label>
                        <input
                            className="form-control"
                            name="Nombre_Producto"
                            type="text"
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                        Descripción Producto:
                        </label>
                        <input
                            className="form-control"
                            name="Descripcion_Producto"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Valor Unitario:
                        </label>
                        <input
                            className="form-control"
                            name="Valor_Unitario"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Estado:
                        </label>
                        <input
                            className="form-control"
                            name="Estado"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={insertar}
                    >
                        Insertar
                    </Button>
                    <Button
                        className="btn btn-danger"
                        onClick={cerrarModalInsertar}
                    >
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
export default Informacion_ventas;
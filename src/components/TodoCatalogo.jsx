import { Fragment, useState, useRef, useEffect } from 'react';
import Item from './Item';
import { validateProducto, validateTipo, validatePrecio } from './layout/datosValidar';
import { v4 as uuidv4 } from "uuid"

const TodoCatalogo = () => {
    const [todos, setTodos] = useState([]);
    const productoRef = useRef();
    const tipoRef = useRef();
    const precioRef = useRef();

    const agregarProducto = () => {
		const producto = productoRef.current.value.trim();
		const tipo = tipoRef.current.value.trim();
		const precio = precioRef.current.value.trim();
		productoRef.current.value = null;
		tipoRef.current.value = null;
		precioRef.current.value = null;
	  
		const productoError = validateProducto(producto);
		const tipoError = validateTipo(tipo);
		const precioError = validatePrecio(precio);
	  
		if (productoError || tipoError || precioError) {
		  // Display the validation errors to the user
		  document.getElementById('nombreError').innerText = productoError;
		  document.getElementById('tipoError').innerText = tipoError;
		  document.getElementById('precioError').innerText = precioError;
		  return;
		}
	  
		setTodos((prevTodos) => {
		  const nuevoProducto = {
			id: uuidv4(),
			producto: producto,
			tipo: tipo,
			precio: precio,
			estado: false,
		  };
		  return [...prevTodos, nuevoProducto];
		});
	  };

    const cambiarProducto = (id) => {
        const newTodos = [...todos];

        const todo = newTodos.find((todo) => todo.id === id);

        todo.estado = !todo.estado;
        setTodos(newTodos);
    };

    const eliminarProductos = () => {
        const productos = todos.filter((todo) => !todo.estado);
        setTodos(productos);
    };

	const contarProductos = () => {
		return todos.filter((todo) => !todo.estado).length;
	};
	
	const Resumenproductos = () => {
		const cantidad = contarProductos();
		if (cantidad === 0) {
			return (
				<div className="list-group-item list-group-item-action list-group-item-danger mt-3 text-center">
					No tienes productos añadidos 😱😫
				</div>
			);
		}
		if (cantidad === 1) {
			return (
				<div className="list-group-item list-group-item-action list-group-item-warning mt-3 text-center">
					Tienes {cantidad} producto añadido 😅🙄
				</div>
			);
		}
		if (cantidad > 9) {
			return (
				<div className="list-group-item list-group-item-action list-group-item-success mt-3 text-center">
					Tienes {cantidad} productos añadidos 😎✔️
				</div>
			);
		}
		return (
			<div className="list-group-item list-group-item-action list-group-item-info mt-3 text-center">
				Tienes {cantidad} productos añadidos 😊👍
			</div>
		);
	};	



    /* LocalStorage */
    const KEY = 'todos';
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if (storedTodos) setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos]);

    return (
        <Fragment>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Catalogo de productos</a>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Buscar"
                            aria-label="Search" />
                        <button className="btn btn-outline-info" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
			<div className="container-fluid my-1">
            <form className="row g-3"   >
			
			<div className="input-group">
			<span className="input-group-text">Nombre, Tipo y precio del producto</span>
			<input type="text" aria-label="Nombre" className="form-control" id ="Nombree" ref={productoRef} /> 
			
			<input type="text" aria-label="Tipo" className="form-control" id="tipoo" ref={tipoRef}/>
			
			<input type="text" aria-label="Precio" className="form-control" id="precioo" name="precioo" ref={precioRef}/>
			
			<div className="d-grid gap-2 d-md-block">
			<button className="btn btn-primary mx-1" type="button"  id="btnGuardar" onClick={agregarProducto}><i className="bi bi-clipboard-plus"></i></button>
			<button className="btn btn-danger mx-1" type="button" onClick={eliminarProductos}><i className="bi bi-trash3"></i></button>

			
			</div>
			</div>
            <br />  
            </form>
			</div>
			<div className="list-group mt-5">
                {todos.map((todo) => (
                    <Item
                        key={todo.id}
                        todo={todo}
                        cambiarEstado={cambiarProducto}
                    />
                ))}
            <Resumenproductos />
			
			</div>
			
        </Fragment>
    );
};

export default TodoCatalogo;
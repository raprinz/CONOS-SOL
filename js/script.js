/* =========================================================
   CONOS SOL
   SISTEMA DE CATÁLOGO Y CARRITO
========================================================= */


/* =========================================================
   CONFIGURACIÓN
========================================================= */

const WHATSAPP_NUMBER = "573203919420";


/* =========================================================
   RUTA DE IMÁGENES
========================================================= */

const BASE_PATH =
    window.location.pathname.includes("/pages/")
        ? "../"
        : "./";


/* =========================================================
   BASE DE DATOS TEMPORAL DE PRODUCTOS
========================================================= */

const productos = [

    /* =========================
       CONOS
    ========================== */

    {
        id: 1,
        nombre: "Cono 01",
        categoria: "conos",
        imagen: "img/conos/cono-01.jpg",
        descripcion:
            "Cono artesanal para una bola de helado de 60 gramos.",
        medidas: "Medidas pendientes de confirmar",
        capacidad: "1 bola de 60 g",
        presentacion: "Caja x 500 unidades"
    },


    {
        id: 2,
        nombre: "Cono 1",
        categoria: "conos",
        imagen: "img/conos/cono-1.jpg",
        descripcion:
            "Cono artesanal diseñado para una bola de helado.",
        medidas: "11 cm de largo × 5 cm de ancho",
        capacidad: "1 bola de 60 g",
        presentacion: "Caja x 500 unidades"
    },


    {
        id: 3,
        nombre: "Cono 2",
        categoria: "conos",
        imagen: "img/conos/cono-2.jpg",
        descripcion:
            "Cono artesanal diseñado para dos bolas de helado.",
        medidas: "13 cm de largo × 6 cm de ancho",
        capacidad: "2 bolas de 60 g",
        presentacion: "Caja x 500 unidades"
    },


    {
        id: 4,
        nombre: "Cono 3",
        categoria: "conos",
        imagen: "img/conos/cono-3.jpg",
        descripcion:
            "Cono artesanal diseñado para tres bolas de helado.",
        medidas: "14 cm de largo × 7 cm de ancho",
        capacidad: "3 bolas de 60 g",
        presentacion: "Caja x 400 unidades"
    },


    {
        id: 6,
        nombre: "Cono Especial",
        categoria: "conos",
        imagen: "img/conos/cono-especial.jpg",
        descripcion:
            "Cono artesanal de gran tamaño para presentaciones especiales.",
        medidas: "19 cm de largo × 10 cm de ancho",
        capacidad: "Según presentación",
        presentacion: "Pendiente de confirmar"
    },


    /* =========================
       CANASTILLAS
    ========================== */

    {
        id: 7,
        nombre: "Canastilla 1",
        categoria: "canastillas",
        imagen: "img/canastillas/canastilla-1.jpg",
        descripcion:
            "Canastilla artesanal para servir helados y postres.",
        medidas: "Pendientes de confirmar",
        capacidad: "Bolas de 60 g",
        presentacion: "Caja x 300 unidades"
    },


    {
        id: 8,
        nombre: "Canastilla 2",
        categoria: "canastillas",
        imagen: "img/canastillas/canastilla-2.jpg",
        descripcion:
            "Canastilla artesanal para helados y postres.",
        medidas: "Pendientes de confirmar",
        capacidad: "Bolas de 60 g",
        presentacion: "Caja x 240 unidades"
    },


    {
        id: 9,
        nombre: "Canastilla 3",
        categoria: "canastillas",
        imagen: "img/canastillas/canastilla-3.jpg",
        descripcion:
            "Canastilla artesanal de mayor capacidad.",
        medidas: "Pendientes de confirmar",
        capacidad: "Bolas de 60 g",
        presentacion: "Caja x 200 unidades"
    },


    {
        id: 10,
        nombre: "Canastilla Especial",
        categoria: "canastillas",
        imagen: "img/canastillas/canastilla-especial.jpg",
        descripcion:
            "Canastilla especial de mayor tamaño.",
        medidas: "Pendientes de confirmar",
        capacidad: "Bolas de 60 g",
        presentacion: "Pendiente de confirmar"
    },


    /* =========================
       BARQUILLOS
    ========================== */

    {
        id: 11,
        nombre: "Barquillo para Decoración",
        categoria: "barquillos",
        imagen: "img/barquillos/barquillo-decoracion.jpg",
        descripcion:
            "Barquillo artesanal para decoración de helados y postres.",
        medidas: "Pendientes de confirmar",
        capacidad: "Producto decorativo",
        presentacion: "Paquete x 100 unidades"
    },


    {
        id: 12,
        nombre: "Barquillo Grande",
        categoria: "barquillos",
        imagen: "img/barquillos/barquillo-grande.jpg",
        descripcion:
            "Barquillo artesanal de tamaño grande.",
        medidas: "Pendientes de confirmar",
        capacidad: "Producto decorativo",
        presentacion: "Paquete x 100 unidades"
    },


    /* =========================
       GALLETAS
    ========================== */

    {
        id: 13,
        nombre: "Galleta Decorativa Corazón",
        categoria: "galletas",
        imagen: "img/galletas/galleta-corazon.jpg",
        descripcion:
            "Galleta artesanal en forma de corazón para decoración.",
        medidas: "Pendientes de confirmar",
        capacidad: "Producto decorativo",
        presentacion:
            "Paquete x 50 unidades / Caja x 30 paquetes"
    },


    {
        id: 14,
        nombre: "Galleta Decorativa Cuadrada",
        categoria: "galletas",
        imagen: "img/galletas/galleta-cuadrada.jpg",
        descripcion:
            "Galleta artesanal cuadrada para decoración.",
        medidas: "Pendientes de confirmar",
        capacidad: "Producto decorativo",
        presentacion:
            "Paquete x 50 unidades / Caja x 30 paquetes"
    },


    /* =========================
       OBLEAS
    ========================== */

    {
        id: 15,
        nombre: "Oblea",
        categoria: "obleas",
        imagen: "img/obleas/oblea.jpg",
        descripcion:
            "Oblea artesanal para el sector alimenticio.",
        medidas: "Pendientes de confirmar",
        capacidad: "Presentación estándar",
        presentacion: "Pendiente de confirmar"
    },


    /* =========================
       PORTA CONO
    ========================== */

    {
        id: 16,
        nombre: "Porta Cono",
        categoria: "porta-cono",
        imagen: "img/porta-cono/porta-cono.jpg",
        descripcion:
            "Porta cono elaborado en papel para facilitar la manipulación higiénica del cono.",
        medidas: "Pendientes de confirmar",
        capacidad: "Producto para manipulación",
        presentacion: "Paquete x 50 unidades"
    }

];


/* =========================================================
   CARRITO
========================================================= */

let carrito = cargarCarrito();
let productosVisibles = [...productos];

function cargarCarrito() {
    try {
        const guardado = JSON.parse(localStorage.getItem("conosSolCarrito"));

        if (!Array.isArray(guardado)) {
            return [];
        }

        return guardado
            .filter(item => productos.some(producto => producto.id === item.id))
            .map(item => ({
                id: item.id,
                cantidad: Number.isInteger(item.cantidad) && item.cantidad > 0
                    ? item.cantidad
                    : 1
            }));
    } catch {
        return [];
    }
}


/* =========================================================
   INICIALIZACIÓN
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    actualizarContadorCarrito();

    actualizarNavegacionActiva();

    crearBotonWhatsApp();

    if (
        document.getElementById("contenedorProductos")
    ) {

        inicializarCatalogo();

    }


    if (
        document.getElementById("featuredProducts")
    ) {

        cargarProductosDestacados();

    }


    if (
        document.getElementById("cartItems")
    ) {

        mostrarCarrito();

    }

    document.querySelectorAll("#searchHome, #searchProducts").forEach(input => {
        input.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                event.preventDefault();
                input.id === "searchHome"
                    ? buscarDesdeInicio()
                    : buscarProductos();
            }
        });
    });

});


function actualizarNavegacionActiva() {
    const paginaActual = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".header-actions a").forEach(enlace => {
        const destino = enlace.getAttribute("href").split("/").pop();

        if (destino === paginaActual) {
            enlace.setAttribute("aria-current", "page");
        }
    });
}


function crearBotonWhatsApp() {
    if (document.getElementById("floatingWhatsApp")) {
        return;
    }

    const boton = document.createElement("a");
    boton.id = "floatingWhatsApp";
    boton.className = "floating-whatsapp";
    boton.href = "https://api.whatsapp.com/send/?phone=573203919420&text&type=phone_number&app_absent=0";
    boton.target = "_blank";
    boton.rel = "noopener noreferrer";
    boton.setAttribute("aria-label", "Escribir a Conos Sol por WhatsApp");
    boton.title = "Escríbenos por WhatsApp";
    boton.innerHTML = '<span aria-hidden="true">✆</span><span class="floating-whatsapp-text">WhatsApp</span>';
    document.body.appendChild(boton);
}


/* =========================================================
   CARGAR CATÁLOGO
========================================================= */

function inicializarCatalogo() {

    const parametros =
        new URLSearchParams(window.location.search);

    const categoria = parametros.get("categoria");
    const busqueda = parametros.get("buscar");

    if (busqueda) {
        const input = document.getElementById("searchProducts");

        if (input) {
            input.value = busqueda;
        }

        buscarProductos();
    } else if (categoria) {

        mostrarCategoria(categoria);

    } else {

        mostrarCategoria("todos");

    }

}


/* =========================================================
   MOSTRAR CATEGORÍA
========================================================= */

function mostrarCategoria(categoria) {

    const contenedor =
        document.getElementById("contenedorProductos");

    const titulo =
        document.getElementById("tituloCategoria");

    const cantidad =
        document.getElementById("cantidadProductos");

    if (!contenedor) {
        return;
    }


    let productosMostrar;


    const categoriasValidas = ["todos", "conos", "canastillas", "barquillos", "galletas", "obleas", "porta-cono"];

    if (!categoriasValidas.includes(categoria)) {
        categoria = "todos";
    }

    const input = document.getElementById("searchProducts");

    if (input) {
        input.value = "";
    }

    if (categoria === "todos") {

        productosMostrar = [...productos];

        if (titulo) {
            titulo.textContent = "Todos los productos";
        }

    } else {

        productosMostrar =
            productos.filter(
                producto =>
                    producto.categoria === categoria
            );


        if (titulo) {

            titulo.textContent =
                obtenerNombreCategoria(categoria);

        }

    }


    productosVisibles = productosMostrar;

    if (cantidad) {

        cantidad.textContent =
            `${productosMostrar.length} producto(s)`;

    }


    actualizarBotonesCategoria(categoria);


    renderizarProductos(productosMostrar);

}


/* =========================================================
   NOMBRE DE CATEGORÍA
========================================================= */

function obtenerNombreCategoria(categoria) {

    const nombres = {

        conos: "Conos",

        canastillas: "Canastillas",

        barquillos: "Barquillos",

        galletas: "Galletas decorativas",

        obleas: "Obleas",

        "porta-cono": "Porta Cono"

    };


    return nombres[categoria] || "Productos";

}


function mostrarDato(valor, etiqueta) {

    return /pendiente/i.test(valor)
        ? `Consulta ${etiqueta.toLowerCase()} disponibles`
        : valor;

}


/* =========================================================
   BOTONES DE CATEGORÍA
========================================================= */

function actualizarBotonesCategoria(categoria) {

    const botones =
        document.querySelectorAll(".category-button");


    botones.forEach(
        boton => boton.classList.remove("active")
    );


    botones.forEach(
        boton => {

            const texto =
                boton.textContent
                    .trim()
                    .toLowerCase();


            if (
                categoria === "todos" &&
                texto.includes("todos")
            ) {

                boton.classList.add("active");

            }


            if (
                categoria === "conos" &&
                texto.includes("conos")
            ) {

                boton.classList.add("active");

            }


            if (
                categoria === "canastillas" &&
                texto.includes("canastillas")
            ) {

                boton.classList.add("active");

            }


            if (
                categoria === "barquillos" &&
                texto.includes("barquillos")
            ) {

                boton.classList.add("active");

            }


            if (
                categoria === "galletas" &&
                texto.includes("galletas")
            ) {

                boton.classList.add("active");

            }


            if (
                categoria === "obleas" &&
                texto.includes("obleas")
            ) {

                boton.classList.add("active");

            }


            if (
                categoria === "porta-cono" &&
                texto.includes("porta cono")
            ) {

                boton.classList.add("active");

            }

        }
    );

}


/* =========================================================
   RENDERIZAR PRODUCTOS
========================================================= */

function renderizarProductos(lista) {

    const contenedor =
        document.getElementById("contenedorProductos");

    const noResults =
        document.getElementById("noResults");


    if (!contenedor) {
        return;
    }


    contenedor.innerHTML = "";


    if (lista.length === 0) {

        if (noResults) {

            noResults.style.display = "block";

        }

        return;

    }


    if (noResults) {

        noResults.style.display = "none";

    }


    lista.forEach(producto => {

        const rutaImagen =
            BASE_PATH + producto.imagen;


        const tarjeta =
            document.createElement("article");


        tarjeta.className =
            "product-card";


        tarjeta.innerHTML = `

            <div class="product-image-container">

                <img
                    src="${rutaImagen}"
                    alt="${producto.nombre}"
                    class="product-image"
                    loading="lazy"
                    decoding="async"
                    onerror="imagenNoDisponible(this)"
                >

            </div>


            <div class="product-content">

                <span class="product-category">

                    ${obtenerNombreCategoria(producto.categoria)}

                </span>


                <h3>
                    ${producto.nombre}
                </h3>


                <p class="product-description">

                    ${producto.descripcion}

                </p>


                <div class="product-specs">

                    <p>
                        <strong>Medidas:</strong>
                        ${mostrarDato(producto.medidas, "medidas")}
                    </p>

                    <p>
                        <strong>Capacidad:</strong>
                        ${producto.capacidad}
                    </p>

                    <p>
                        <strong>Presentación:</strong>
                        ${mostrarDato(producto.presentacion, "presentaciones")}
                    </p>

                </div>


                <div class="product-actions">

                    <button
                        class="btn-secondary"
                        onclick="verProducto(${producto.id})"
                        aria-label="Ver detalles de ${producto.nombre}"
                    >
                        Ver detalles
                    </button>


                    <button
                        class="btn-primary"
                        onclick="agregarAlCarrito(${producto.id})"
                        aria-label="Agregar ${producto.nombre} al carrito"
                    >
                        Agregar
                    </button>

                </div>

            </div>

        `;


        contenedor.appendChild(tarjeta);

    });

}


/* =========================================================
   IMAGEN NO DISPONIBLE
========================================================= */

function imagenNoDisponible(imagen) {

    imagen.style.display = "none";

    const contenedor =
        imagen.parentElement;


    if (
        !contenedor.querySelector(
            ".image-placeholder"
        )
    ) {

        const placeholder =
            document.createElement("div");


        placeholder.className =
            "image-placeholder";


        placeholder.innerHTML = `
            <span>🍦</span>
            <p>Imagen pendiente</p>
        `;


        contenedor.appendChild(
            placeholder
        );

    }

}


/* =========================================================
   VER PRODUCTO
========================================================= */

function verProducto(id) {

    window.location.href =
        `producto.html?id=${id}`;

}


/* =========================================================
   BÚSQUEDA
========================================================= */

function buscarProductos() {

    const input =
        document.getElementById("searchProducts");


    if (!input) {
        return;
    }


    const termino =
        input.value
            .trim()
            .toLowerCase();


    if (!termino) {

        mostrarCategoria("todos");

        return;

    }


    const resultados = productos.filter(producto => {

            return (

                producto.nombre
                    .toLowerCase()
                    .includes(termino)

                ||

                producto.descripcion
                    .toLowerCase()
                    .includes(termino)

                ||

                producto.categoria
                    .toLowerCase()
                    .includes(termino)

            );

        });


    const titulo =
        document.getElementById("tituloCategoria");


    const cantidad =
        document.getElementById("cantidadProductos");


    if (titulo) {

        titulo.textContent =
            `Resultados para: "${termino}"`;

    }


    productosVisibles = resultados;

    if (cantidad) {

        cantidad.textContent =
            `${resultados.length} producto(s)`;

    }


    actualizarBotonesCategoria("ninguno");

    renderizarProductos(resultados);

}


/* =========================================================
   BÚSQUEDA DESDE INICIO
========================================================= */

function buscarDesdeInicio() {

    const input =
        document.getElementById("searchHome");


    if (!input) {
        return;
    }


    const termino =
        input.value.trim();


    if (!termino) {

        window.location.href =
            "pages/productos.html";

        return;

    }


    window.location.href =
        `pages/productos.html?buscar=${encodeURIComponent(termino)}`;

}


/* =========================================================
   ORDENAR
========================================================= */

function ordenarProductos() {

    const select =
        document.getElementById("ordenProductos");


    if (!select) {
        return;
    }


    const opcion =
        select.value;


    let lista = [...productosVisibles];


    if (opcion === "nombre") {

        lista.sort(
            (a, b) =>
                a.nombre.localeCompare(b.nombre)
        );

    }


    if (opcion === "categoria") {

        lista.sort(
            (a, b) =>
                a.categoria.localeCompare(
                    b.categoria
                )
        );

    }


    productosVisibles = lista;
    renderizarProductos(lista);

}


/* =========================================================
   PRODUCTOS DESTACADOS
========================================================= */

function cargarProductosDestacados() {

    const contenedor =
        document.getElementById(
            "featuredProducts"
        );


    if (!contenedor) {
        return;
    }


    const destacados =
        productos.slice(0, 4);


    destacados.forEach(producto => {

        const rutaImagen =
            BASE_PATH + producto.imagen;


        const tarjeta =
            document.createElement("article");


        tarjeta.className =
            "product-card";


        tarjeta.innerHTML = `

            <div class="product-image-container">

                <img
                    src="${rutaImagen}"
                    alt="${producto.nombre}"
                    class="product-image"
                    loading="lazy"
                    decoding="async"
                    onerror="imagenNoDisponible(this)"
                >

            </div>


            <div class="product-content">

                <span class="product-category">

                    ${obtenerNombreCategoria(producto.categoria)}

                </span>


                <h3>
                    ${producto.nombre}
                </h3>


                <p>
                    ${producto.descripcion}
                </p>


                <div class="product-actions">

                    <a
                        href="pages/productos.html"
                        class="btn-secondary"
                    >
                        Ver catálogo
                    </a>


                    <button
                        class="btn-primary"
                        onclick="agregarAlCarrito(${producto.id})"
                    >
                        Agregar
                    </button>

                </div>

            </div>

        `;


        contenedor.appendChild(tarjeta);

    });

}


/* =========================================================
   AGREGAR AL CARRITO
========================================================= */

function agregarAlCarrito(id) {

    const producto =
        productos.find(
            producto => producto.id === id
        );


    if (!producto) {
        return;
    }


    const existente =
        carrito.find(
            item => item.id === id
        );


    if (existente) {

        existente.cantidad++;

    } else {

        carrito.push({ id: producto.id, cantidad: 1 });

    }


    guardarCarrito();

    actualizarContadorCarrito();


    mostrarNotificacion(`${producto.nombre} fue agregado al carrito.`);

}


/* =========================================================
   GUARDAR CARRITO
========================================================= */

function guardarCarrito() {

    localStorage.setItem(
        "conosSolCarrito",
        JSON.stringify(carrito)
    );

}


/* =========================================================
   CONTADOR
========================================================= */

function actualizarContadorCarrito() {

    const contadores =
        document.querySelectorAll(
            "#cartCounter"
        );


    const total =
        carrito.reduce(
            (suma, item) =>
                suma + item.cantidad,
            0
        );


    contadores.forEach(
        contador => {
            contador.textContent = total;
        }
    );

}


/* =========================================================
   MOSTRAR CARRITO
========================================================= */

function mostrarCarrito() {

    const contenedor =
        document.getElementById(
            "cartItems"
        );


    const empty =
        document.getElementById(
            "emptyCart"
        );


    if (!contenedor) {
        return;
    }


    contenedor.innerHTML = "";


    if (carrito.length === 0) {

        if (empty) {

            empty.style.display =
                "block";

        }

        actualizarResumenCarrito();

        return;

    }


    if (empty) {

        empty.style.display =
            "none";

    }


    carrito.forEach(item => {

        const producto =
            productos.find(
                producto =>
                    producto.id === item.id
            );


        if (!producto) {
            return;
        }


        const div =
            document.createElement("div");


        div.className =
            "cart-item";


        div.innerHTML = `

            <div class="cart-item-image">

                <img
                    src="${BASE_PATH}${producto.imagen}"
                    alt="${producto.nombre}"
                    loading="lazy"
                    onerror="imagenNoDisponible(this)"
                >

            </div>


            <div class="cart-item-info">

                <span>
                    ${obtenerNombreCategoria(producto.categoria)}
                </span>

                <h3>
                    ${producto.nombre}
                </h3>

                <p>
                    ${mostrarDato(producto.presentacion, "presentaciones")}
                </p>

            </div>


            <div class="quantity-control">

                <button
                    onclick="cambiarCantidad(${item.id}, -1)"
                    aria-label="Quitar una unidad de ${producto.nombre}"
                >
                    −
                </button>

                <strong>
                    ${item.cantidad}
                </strong>

                <button
                    onclick="cambiarCantidad(${item.id}, 1)"
                    aria-label="Agregar una unidad de ${producto.nombre}"
                >
                    +
                </button>

            </div>


            <button
                class="remove-button"
                onclick="eliminarDelCarrito(${item.id})"
                aria-label="Eliminar ${producto.nombre} del carrito"
            >
                ✕
            </button>

        `;


        contenedor.appendChild(div);

    });


    actualizarResumenCarrito();

}


/* =========================================================
   CAMBIAR CANTIDAD
========================================================= */

function cambiarCantidad(id, cambio) {

    const item =
        carrito.find(
            item => item.id === id
        );


    if (!item) {
        return;
    }


    item.cantidad += cambio;


    if (item.cantidad <= 0) {

        carrito =
            carrito.filter(
                item => item.id !== id
            );

    }


    guardarCarrito();

    actualizarContadorCarrito();

    mostrarCarrito();

}


/* =========================================================
   ELIMINAR
========================================================= */

function eliminarDelCarrito(id) {

    carrito =
        carrito.filter(
            item => item.id !== id
        );


    guardarCarrito();

    actualizarContadorCarrito();

    mostrarCarrito();

}


/* =========================================================
   VACIAR CARRITO
========================================================= */

function vaciarCarrito() {

    if (carrito.length === 0) {
        return;
    }


    const confirmar =
        confirm(
            "¿Deseas vaciar el carrito?"
        );


    if (!confirmar) {
        return;
    }


    carrito = [];


    guardarCarrito();

    actualizarContadorCarrito();

    mostrarCarrito();

}


/* =========================================================
   RESUMEN
========================================================= */

function actualizarResumenCarrito() {

    const quantity =
        document.getElementById(
            "summaryQuantity"
        );


    const units =
        document.getElementById(
            "summaryUnits"
        );


    const cantidadProductos =
        carrito.length;


    const totalUnidades =
        carrito.reduce(
            (suma, item) =>
                suma + item.cantidad,
            0
        );


    if (quantity) {

        quantity.textContent =
            cantidadProductos;

    }


    if (units) {

        units.textContent =
            totalUnidades;

    }

}


/* =========================================================
   WHATSAPP
========================================================= */

function generarPedidoWhatsApp() {

    if (carrito.length === 0) {

        mostrarNotificacion("El carrito está vacío. Agrega productos para solicitar un pedido.");

        return;

    }


    let mensaje =
        "Hola, Conos Sol. Deseo solicitar información sobre los siguientes productos:\n\n";


    carrito.forEach(item => {
        const producto = productos.find(producto => producto.id === item.id);

        if (producto) {
            mensaje += `• ${producto.nombre} — Cantidad: ${item.cantidad} — ${mostrarDato(producto.presentacion, "presentaciones")}\n`;
        }

    });


    mensaje +=
        "\nQuedo atento(a) a la cotización y disponibilidad.";


    if (!WHATSAPP_NUMBER) {

        mostrarNotificacion("El número de WhatsApp todavía no está configurado.");

        return;

    }


    window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`,
        "_blank"
    );

}


/* =========================================================
   FORMULARIO DE CONTACTO
========================================================= */

function enviarFormulario(event) {

    event.preventDefault();


    const formulario = event.target;
    const nombre = formulario.querySelector("#nombre").value.trim();
    const telefono = formulario.querySelector("#telefono").value.trim();
    const correo = formulario.querySelector("#correo").value.trim();
    const mensaje = formulario.querySelector("#mensaje").value.trim();
    const texto = `Hola, Conos Sol. Mi nombre es ${nombre}.\n\nTeléfono: ${telefono}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`;

    window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`,
        "_blank"
    );

    mostrarNotificacion("Abrimos WhatsApp con tu mensaje listo para enviar.");

}

/* =========================================================
   PÁGINA DE DETALLE DEL PRODUCTO
========================================================= */

function cargarDetalleProducto() {

    const contenedor =
        document.getElementById(
            "productDetail"
        );


    if (!contenedor) {
        return;
    }


    const parametros =
        new URLSearchParams(
            window.location.search
        );


    const id =
        Number(
            parametros.get("id")
        );


    const producto =
        productos.find(
            producto =>
                producto.id === id
        );


    if (!producto) {

        contenedor.innerHTML = `

            <div class="no-results">

                <h2>
                    Producto no encontrado
                </h2>

                <p>
                    El producto solicitado no existe.
                </p>

                <a
                    href="productos.html"
                    class="btn-primary"
                >
                    Volver al catálogo
                </a>

            </div>

        `;

        return;

    }


    const imagen =
        BASE_PATH + producto.imagen;


    document.title =
        `${producto.nombre} | Conos Sol`;


    const breadcrumb =
        document.getElementById(
            "breadcrumbProduct"
        );


    if (breadcrumb) {

        breadcrumb.textContent =
            producto.nombre;

    }


    contenedor.innerHTML = `

        <div class="detail-image">

            <img
                src="${imagen}"
                alt="${producto.nombre}"
                onerror="imagenNoDisponible(this)"
            >

        </div>


        <div class="detail-content">

            <span class="product-category">

                ${obtenerNombreCategoria(producto.categoria)}

            </span>


            <h1>
                ${producto.nombre}
            </h1>


            <p class="detail-description">

                ${producto.descripcion}

            </p>


            <div class="detail-specifications">

                <div>

                    <span>
                        Medidas
                    </span>

                    <strong>
                        ${mostrarDato(producto.medidas, "medidas")}
                    </strong>

                </div>


                <div>

                    <span>
                        Capacidad
                    </span>

                    <strong>
                        ${producto.capacidad}
                    </strong>

                </div>


                <div>

                    <span>
                        Presentación
                    </span>

                    <strong>
                        ${mostrarDato(producto.presentacion, "presentaciones")}
                    </strong>

                </div>


                <div>

                    <span>
                        Elaboración
                    </span>

                    <strong>
                        Artesanal
                    </strong>

                </div>


                <div>

                    <span>
                        Uso
                    </span>

                    <strong>
                        Sector alimenticio
                    </strong>

                </div>

            </div>


            <div class="detail-actions">

                <button
                    class="btn-primary"
                    onclick="agregarAlCarrito(${producto.id})"
                >
                    🛒 Agregar al carrito
                </button>


                <a
                    href="contacto.html"
                    class="btn-secondary"
                >
                    Solicitar información
                </a>

            </div>


            <div class="quality-box">

                <strong>
                    ✓ Producto artesanal
                </strong>

                <p>
                    Producto destinado al sector alimenticio.
                    La información de certificaciones y registros
                    sanitarios será incorporada al catálogo cuando
                    la empresa proporcione los datos correspondientes.
                </p>

            </div>

        </div>

    `;


    cargarRelacionados(producto.categoria, producto.id);

}


/* =========================================================
   PRODUCTOS RELACIONADOS
========================================================= */

function cargarRelacionados(categoria, productoActualId) {

    const contenedor =
        document.getElementById(
            "relatedProducts"
        );


    if (!contenedor) {
        return;
    }


    const relacionados =
        productos
            .filter(
                producto =>
                producto.categoria === categoria && producto.id !== productoActualId
            )
            .slice(0, 3);


    const seccion = contenedor.closest("section");

    if (seccion) {
        seccion.hidden = relacionados.length === 0;
    }

    relacionados.forEach(producto => {

        const tarjeta =
            document.createElement("article");


        tarjeta.className =
            "product-card";


        tarjeta.innerHTML = `

            <div class="product-image-container">

                <img
                    src="${BASE_PATH}${producto.imagen}"
                    alt="${producto.nombre}"
                    class="product-image"
                    loading="lazy"
                    onerror="imagenNoDisponible(this)"
                >

            </div>


            <div class="product-content">

                <span class="product-category">

                    ${obtenerNombreCategoria(producto.categoria)}

                </span>


                <h3>
                    ${producto.nombre}
                </h3>


                <div class="product-actions">

                    <button
                        class="btn-secondary"
                        onclick="verProducto(${producto.id})"
                    >
                        Ver detalles
                    </button>

                </div>

            </div>

        `;


        contenedor.appendChild(tarjeta);

    });

}


/* =========================================================
   DETECTAR PÁGINA DE PRODUCTO
========================================================= */

if (
    document.getElementById(
        "productDetail"
    )
) {

    cargarDetalleProducto();

}

function mostrarNotificacion(mensaje) {
    let aviso = document.getElementById("siteNotification");

    if (!aviso) {
        aviso = document.createElement("div");
        aviso.id = "siteNotification";
        aviso.className = "site-notification";
        aviso.setAttribute("role", "status");
        aviso.setAttribute("aria-live", "polite");
        document.body.appendChild(aviso);
    }

    aviso.textContent = mensaje;
    aviso.classList.add("is-visible");

    window.clearTimeout(mostrarNotificacion.timeout);
    mostrarNotificacion.timeout = window.setTimeout(() => {
        aviso.classList.remove("is-visible");
    }, 3000);
}

// Configuración de navegación - SOLO MODIFICA ESTE ARCHIVO PARA CAMBIAR LA NAVEGACIÓN
const siteConfig = {
    // Configuración general del sitio
    siteName: "Pogramación de Servicios y Procesos",
    baseUrl: "../",
    
    // Estructura de navegación
    navigation: {
        "1.- Programación de Procesos": [
            { title: "Programas y procesos", url: "01-01.html" },
            { title: "Variables", url: "variables.html" },
            { title: "Tipos de Datos", url: "tipos-datos.html" }
        ],
        "Java Básico": [
            { title: "Sintaxis Básica", url: "java-sintaxis.html" },
            { title: "Clases y Objetos", url: "java-objetos.html" },
            { title: "Herencia", url: "java-herencia.html" },
            { title: "Interfaces", url: "java-interfaces.html" }
        ],
        "Python Básico": [
            { title: "Sintaxis Básica", url: "python-sintaxis.html" },
            { title: "Funciones", url: "python-funciones.html" },
            { title: "Clases", url: "python-clases.html" },
            { title: "Módulos", url: "python-modulos.html" }
        ],
        "Estructuras de Datos": [
            { title: "Arrays/Listas", url: "arrays.html" },
            { title: "Pilas y Colas", url: "pilas-colas.html" },
            { title: "Árboles", url: "arboles.html" },
            { title: "Grafos", url: "grafos.html" }
        ],
        "Algoritmos": [
            { title: "Búsqueda", url: "busqueda.html" },
            { title: "Ordenamiento", url: "ordenamiento.html" },
            { title: "Recursión", url: "recursion.html" },
            { title: "Programación Dinámica", url: "prog-dinamica.html" }
        ]
    },

    // Configuración de colores (opcional, se puede cambiar desde aquí)
    colors: {
        primaryBlue: "#2563eb",
        secondaryBlue: "#3b82f6",
        lightBlue: "#dbeafe",
        primaryPurple: "#7c3aed",
        secondaryPurple: "#8b5cf6",
        lightPurple: "#ede9fe"
    }
};

// Exportar configuración para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}
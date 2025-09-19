// Configuración de navegación - SOLO MODIFICA ESTE ARCHIVO PARA CAMBIAR LA NAVEGACIÓN
const siteConfig = {
    // Configuración general del sitio
    siteName: "Pogramación de Servicios y Procesos",
    baseUrl: "./",
    
    // Estructura de navegación
     navigation: {
        "1.- Programación de Procesos": [
            { title: "1.1. Programas y procesos", url: "01-01.html" },
            { title: "1.2. Multitarea", url: "01-02.html" },
            { title: "1.3. Procesos y sistemas mono/multiprocesadores", url: "01-03.html" },
            { title: "1.4. Ventajas e inconvenientes de la programación concurrente", url: "01-04.html" },
            { title: "1.5. Kernel y llamadas al sistema", url: "01-05.html" },
            { title: "1.6. Estados de ejecución de un proceso", url: "01-06.html" },
            { title: "1.7. Hilos y procesos", url: "01-07.html" },
            { title: "1.8. Servicios", url: "01-08.html" },
            { title: "1.9. Concurrencia en Java", url: "01-09.html" }
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
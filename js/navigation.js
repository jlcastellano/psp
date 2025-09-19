// Funciones para manejo de navegación
class NavigationManager {
    constructor() {
        this.config = siteConfig;
        this.sidebarCollapsed = false;
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.generateNavigation();
            this.setActiveNavItem();
            this.setupEventListeners();
            this.createOverlay();
            this.updateMenuToggleIcon();
        });
    }

    generateNavigation() {
        const navContent = document.getElementById('navigation-content');
        if (!navContent) return;

        let html = '';

        for (const [section, items] of Object.entries(this.config.navigation)) {
            html += `<div class="nav-section">`;
            html += `<div class="nav-title">${section}</div>`;
            
            items.forEach(item => {
                html += `<a href="${item.url}" class="nav-item">${item.title}</a>`;
            });
            
            html += `</div>`;
        }

        // Envolver contenido en sidebar-content
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.innerHTML = `<div class="sidebar-content">${html}</div>`;
        }
    }

    setActiveNavItem() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href === currentPage || 
                (currentPage === 'index.html' && href === 'introduccion.html')) {
                item.classList.add('active');
            }
        });
    }

    createOverlay() {
        // Crear overlay para móvil
        const overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        overlay.id = 'sidebar-overlay';
        overlay.addEventListener('click', () => {
            this.toggleSidebarMobile();
        });
        document.body.appendChild(overlay);
    }

    updateMenuToggleIcon() {
        const menuToggle = document.querySelector('.menu-toggle');
        if (menuToggle) {
            if (this.sidebarCollapsed) {
                menuToggle.innerHTML = '☰'; // Mostrar hamburguesa cuando está colapsado
                menuToggle.title = 'Mostrar menú';
            } else {
                menuToggle.innerHTML = '✕'; // Mostrar X cuando está visible
                menuToggle.title = 'Ocultar menú';
            }
        }
    }

    setupEventListeners() {
        // Cerrar sidebar al hacer clic en un enlace (móvil)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-item') && window.innerWidth <= 768) {
                this.toggleSidebarMobile();
            }
        });

        // Actualizar nombre del sitio en el header
        const logoElement = document.querySelector('.logo');
        if (logoElement) {
            logoElement.textContent = this.config.siteName;
        }

        // Manejar cambios de tamaño de ventana
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                // En desktop, cerrar el menú móvil si está abierto
                const sidebar = document.getElementById('sidebar');
                const overlay = document.getElementById('sidebar-overlay');
                
                if (sidebar) sidebar.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                
                // Actualizar icono
                this.updateMenuToggleIcon();
            } else {
                // En móvil, resetear el estado del sidebar
                const sidebar = document.getElementById('sidebar');
                if (sidebar) {
                    sidebar.classList.remove('collapsed');
                    this.sidebarCollapsed = false;
                }
            }
        });
    }

    toggleSidebarMobile() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        
        if (!sidebar) return;

        const isActive = sidebar.classList.contains('active');
        
        if (isActive) {
            sidebar.classList.remove('active');
            overlay?.classList.remove('active');
        } else {
            sidebar.classList.add('active');
            overlay?.classList.add('active');
        }
    }

    toggleSidebarDesktop() {
        const sidebar = document.getElementById('sidebar');
        
        if (!sidebar) return;

        this.sidebarCollapsed = !this.sidebarCollapsed;
        
        if (this.sidebarCollapsed) {
            sidebar.classList.add('collapsed');
        } else {
            sidebar.classList.remove('collapsed');
        }
        
        this.updateMenuToggleIcon();
    }

    toggleSidebar() {
        if (window.innerWidth <= 768) {
            this.toggleSidebarMobile();
        } else {
            this.toggleSidebarDesktop();
        }
    }

    // Función para obtener navegación de página (anterior/siguiente)
    getPageNavigation(currentPage) {
        const allPages = [];
        
        // Crear lista plana de todas las páginas
        for (const [section, items] of Object.entries(this.config.navigation)) {
            items.forEach(item => {
                allPages.push(item);
            });
        }

        const currentIndex = allPages.findIndex(page => page.url === currentPage);
        
        return {
            previous: currentIndex > 0 ? allPages[currentIndex - 1] : null,
            next: currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null
        };
    }
}

// Funciones globales para uso desde HTML
function toggleSidebar() {
    navigationManager.toggleSidebar();
}

// Inicializar el gestor de navegación
const navigationManager = new NavigationManager();
// Base de datos de negocios
const businesses = {
    droguerias: [
        {
            id: 'drogueria-1',
            name: 'Farmacia San Rafael',
            category: 'Droguería',
            phone: '+57 300 123 4567',
            description: 'Farmacia con amplio surtido de medicamentos y productos de salud. Atención 24 horas.',
            rating: 4.5,
            logo: 'img/drogueria-1.png',
            featured: true
        },
        {
            id: 'drogueria-2',
            name: 'Droguería Central',
            category: 'Droguería',
            phone: '+57 300 234 5678',
            description: 'Productos farmacéuticos y de cuidado personal. Servicio a domicilio disponible.',
            rating: 4.2,
            logo: 'img/drogueria-2.png',
            featured: false
        },
        {
            id: 'drogueria-3',
            name: 'Farmacia El Buen Pastor',
            category: 'Droguería',
            phone: '+57 300 345 6789',
            description: 'Medicamentos genéricos y de marca. Consulta farmacéutica gratuita.',
            rating: 4.7,
            logo: 'img/drogueria-3.png',
            featured: true
        }
    ],
    supermercados: [
        {
            id: 'super-1',
            name: 'Supermercado El Ahorro',
            category: 'Supermercado',
            phone: '+57 300 456 7890',
            description: 'Supermercado con los mejores precios y amplia variedad de productos frescos.',
            rating: 4.3,
            logo: 'img/super-1.png',
            featured: true
        },
        {
            id: 'super-2',
            name: 'Mercado Familiar',
            category: 'Supermercado',
            phone: '+57 300 567 8901',
            description: 'Productos de calidad para toda la familia. Frutas y verduras frescas.',
            rating: 4.1,
            logo: 'img/super-2.png',
            featured: false
        },
        {
            id: 'super-3',
            name: 'Super Tienda 24/7',
            category: 'Supermercado',
            phone: '+57 300 678 9012',
            description: 'Atención 24 horas. Productos básicos y comestibles siempre disponibles.',
            rating: 4.0,
            logo: 'img/super-3.png',
            featured: false
        }
    ],
    papelerias: [
        {
            id: 'papeleria-1',
            name: 'Papelería El Estudiante',
            category: 'Papelería',
            phone: '+57 300 789 0123',
            description: 'Todo para estudiantes y oficinas. Útiles escolares, libros y materiales.',
            rating: 4.4,
            logo: 'img/papeleria-1.png',
            featured: false
        },
        {
            id: 'papeleria-2',
            name: 'Oficentro Lomitas',
            category: 'Papelería',
            phone: '+57 300 890 1234',
            description: 'Servicios de oficina, fotocopias, impresiones y papelería completa.',
            rating: 4.6,
            logo: 'img/papeleria-2.png',
            featured: true
        },
        {
            id: 'papeleria-3',
            name: 'Papel y Tinta',
            category: 'Papelería',
            phone: '+57 300 901 2345',
            description: 'Especialistas en artículos de oficina y material escolar de calidad.',
            rating: 4.2,
            logo: 'img/papeleria-3.png',
            featured: false
        }
    ],
    'comida-rapida': [
        {
            id: 'comida-1',
            name: 'Burger King Lomitas',
            category: 'Comida Rápida',
            phone: '+57 300 012 3456',
            description: 'Hamburguesas, papas fritas y bebidas. Servicio rápido y delicioso.',
            rating: 4.3,
            logo: 'img/comida-1.png',
            featured: true
        },
        {
            id: 'comida-2',
            name: 'Pizza Express',
            category: 'Comida Rápida',
            phone: '+57 300 123 4567',
            description: 'Pizzas artesanales, empanadas y comida rápida. Delivery disponible.',
            rating: 4.5,
            logo: 'img/comida-2.png',
            featured: false
        },
        {
            id: 'comida-3',
            name: 'Chicken Express',
            category: 'Comida Rápida',
            phone: '+57 300 234 5678',
            description: 'Pollo frito, alitas y acompañamientos. Servicio rápido y económico.',
            rating: 4.1,
            logo: 'img/comida-3.png',
            featured: false
        }
    ],
    restaurantes: [
        {
            id: 'restaurante-1',
            name: 'Restaurante La Parrilla',
            category: 'Restaurante',
            phone: '+57 300 345 6789',
            description: 'Carnes a la parrilla, platos típicos colombianos. Ambiente familiar.',
            rating: 4.7,
            logo: 'img/restaurante-1.png',
            featured: true
        },
        {
            id: 'restaurante-2',
            name: 'Mariscos del Caribe',
            category: 'Restaurante',
            phone: '+57 300 456 7890',
            description: 'Especialistas en mariscos frescos y platos del mar. Reservas recomendadas.',
            rating: 4.8,
            logo: 'img/restaurante-2.png',
            featured: true
        },
        {
            id: 'restaurante-3',
            name: 'Trattoria Italiana',
            category: 'Restaurante',
            phone: '+57 300 567 8901',
            description: 'Auténtica cocina italiana. Pastas, pizzas y vinos importados.',
            rating: 4.6,
            logo: 'img/restaurante-3.png',
            featured: false
        }
    ],
    otros: [
        {
            id: 'otros-1',
            name: 'Barbería El Estilo',
            category: 'Otros',
            phone: '+57 300 678 9012',
            description: 'Cortes de cabello, barba y tratamientos para hombres. Cita previa.',
            rating: 4.4,
            logo: 'img/otros-1.png',
            featured: false
        },
        {
            id: 'otros-2',
            name: 'Lavandería Express',
            category: 'Otros',
            phone: '+57 300 789 0123',
            description: 'Servicio de lavandería y tintorería. Recogida y entrega a domicilio.',
            rating: 4.2,
            logo: 'img/otros-2.png',
            featured: false
        },
        {
            id: 'otros-3',
            name: 'Taller Mecánico Rápido',
            category: 'Otros',
            phone: '+57 300 890 1234',
            description: 'Reparación y mantenimiento de vehículos. Servicio rápido y confiable.',
            rating: 4.5,
            logo: 'img/otros-3.png',
            featured: true
        }
    ]
};

// Función para cargar negocios destacados en la página principal
function loadFeaturedBusinesses() {
    const featuredContainer = document.getElementById('featuredBusinesses');
    if (!featuredContainer) return;

    // Obtener todos los negocios destacados
    const featuredBusinesses = [];
    Object.values(businesses).forEach(category => {
        category.forEach(business => {
            if (business.featured) {
                featuredBusinesses.push(business);
            }
        });
    });

    // Renderizar negocios destacados
    featuredContainer.innerHTML = featuredBusinesses.map(business => `
        <div class="business-card" onclick="openBusinessDetail('${business.id}')">
            <div class="business-logo">
                <img src="${business.logo}" alt="${business.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea, #764ba2); color: white; font-size: 3rem;">🏪</div>
            </div>
            <div class="business-info">
                <h3 class="business-name">${business.name}</h3>
                <p class="business-category">${business.category}</p>
                <p class="business-phone">
                    <i class="fas fa-phone"></i>
                    ${business.phone}
                </p>
                <div class="business-rating">
                    ${generateStars(business.rating)}
                    <span class="rating-text">(${business.rating})</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Función para generar estrellas de calificación
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt star"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star star"></i>';
    }
    
    return stars;
}

// Función para abrir página de detalle del negocio
function openBusinessDetail(businessId) {
    window.location.href = `negocio.html?id=${businessId}`;
}

// Función para cargar negocios por categoría
function loadBusinessesByCategory(category) {
    const categoryBusinesses = businesses[category] || [];
    const container = document.getElementById('businessesGrid');
    
    if (!container) return;

    container.innerHTML = categoryBusinesses.map(business => `
        <div class="business-card" onclick="openBusinessDetail('${business.id}')">
            <div class="business-logo">
                <img src="${business.logo}" alt="${business.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea, #764ba2); color: white; font-size: 3rem;">🏪</div>
            </div>
            <div class="business-info">
                <h3 class="business-name">${business.name}</h3>
                <p class="business-category">${business.category}</p>
                <p class="business-phone">
                    <i class="fas fa-phone"></i>
                    ${business.phone}
                </p>
                <div class="business-rating">
                    ${generateStars(business.rating)}
                    <span class="rating-text">(${business.rating})</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Función para obtener un negocio por ID
function getBusinessById(businessId) {
    for (const category in businesses) {
        const business = businesses[category].find(b => b.id === businessId);
        if (business) return business;
    }
    return null;
}

// Función para cargar detalles del negocio
function loadBusinessDetail(businessId) {
    const business = getBusinessById(businessId);
    if (!business) {
        document.body.innerHTML = '<div class="container"><h1>Negocio no encontrado</h1></div>';
        return;
    }

    document.title = `${business.name} - Directorio Lomitas`;
    
    // Actualizar contenido de la página
    const businessNameElement = document.getElementById('businessName');
    const businessLogoElement = document.getElementById('businessLogo');
    const businessCategoryElement = document.getElementById('businessCategory');
    const businessPhoneElement = document.getElementById('businessPhone');
    const businessDescriptionElement = document.getElementById('businessDescription');
    const businessRatingElement = document.getElementById('businessRating');

    if (businessNameElement) businessNameElement.textContent = business.name;
    if (businessLogoElement) {
        businessLogoElement.innerHTML = `
            <img src="${business.logo}" alt="${business.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea, #764ba2); color: white; font-size: 4rem; border-radius: 20px;">🏪</div>
        `;
    }
    if (businessCategoryElement) businessCategoryElement.textContent = business.category;
    if (businessPhoneElement) businessPhoneElement.textContent = business.phone;
    if (businessDescriptionElement) businessDescriptionElement.textContent = business.description;
    if (businessRatingElement) businessRatingElement.innerHTML = generateStars(business.rating) + `<span class="rating-text">(${business.rating})</span>`;
}

// Función de búsqueda
function searchBusinesses() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (!searchTerm) return;

    const results = [];
    Object.values(businesses).forEach(category => {
        category.forEach(business => {
            if (business.name.toLowerCase().includes(searchTerm) || 
                business.category.toLowerCase().includes(searchTerm)) {
                results.push(business);
            }
        });
    });

    if (results.length === 0) {
        alert('No se encontraron negocios con ese término de búsqueda.');
        return;
    }

    // Crear modal con resultados
    showSearchResults(results, searchTerm);
}

// Función para mostrar resultados de búsqueda
function showSearchResults(results, searchTerm) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        border-radius: 15px;
        padding: 2rem;
        max-width: 800px;
        max-height: 80vh;
        overflow-y: auto;
        width: 100%;
    `;

    modalContent.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <h2>Resultados para "${searchTerm}" (${results.length})</h2>
            <button onclick="this.closest('.modal').remove()" style="background: #667eea; color: white; border: none; padding: 10px; border-radius: 50%; cursor: pointer;">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
            ${results.map(business => `
                <div class="business-card" onclick="openBusinessDetail('${business.id}'); this.closest('.modal').remove();">
                    <div class="business-logo">
                        <img src="${business.logo}" alt="${business.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea, #764ba2); color: white; font-size: 3rem;">🏪</div>
                    </div>
                    <div class="business-info">
                        <h3 class="business-name">${business.name}</h3>
                        <p class="business-category">${business.category}</p>
                        <p class="business-phone">
                            <i class="fas fa-phone"></i>
                            ${business.phone}
                        </p>
                        <div class="business-rating">
                            ${generateStars(business.rating)}
                            <span class="rating-text">(${business.rating})</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    modal.className = 'modal';
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Función para manejar parámetros de URL
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'index.html' || currentPage === '') {
        loadFeaturedBusinesses();
    } else if (currentPage === 'categoria.html') {
        const category = getUrlParameter('cat');
        if (category && businesses[category]) {
            loadBusinessesByCategory(category);
        }
    } else if (currentPage === 'negocio.html') {
        const businessId = getUrlParameter('id');
        if (businessId) {
            loadBusinessDetail(businessId);
        }
    }
});

// Función para manejar búsqueda con Enter
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && e.target.id === 'searchInput') {
        searchBusinesses();
    }
});

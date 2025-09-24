# Directorio Comercial Lomitas

Un directorio web moderno y responsive que permite a los usuarios encontrar negocios locales organizados por categorías.

## 🚀 Características

- **Página Principal**: Muestra negocios destacados y menú de categorías
- **Categorías Organizadas**: 
  - 💊 Droguerías
  - 🛒 Supermercados
  - 📚 Papelerías
  - 🍔 Comida Rápida
  - 🍽️ Restaurantes
  - 🏪 Otros
- **Páginas Individuales**: Cada negocio tiene su propia página con información detallada
- **Búsqueda**: Funcionalidad de búsqueda en tiempo real
- **Diseño Responsive**: Compatible con dispositivos móviles y desktop
- **Interfaz Moderna**: Diseño atractivo con gradientes y animaciones

## 📁 Estructura del Proyecto

```
directoriolomitas/
├── index.html          # Página principal
├── categoria.html      # Página de categorías
├── negocio.html        # Página individual del negocio
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
├── img/                # Carpeta de imágenes/logos
│   ├── drogueria-1.png # Logo de Farmacia San Rafael
│   ├── super-1.png     # Logo de Supermercado El Ahorro
│   ├── papeleria-1.png # Logo de Papelería El Estudiante
│   ├── comida-1.png    # Logo de Burger King Lomitas
│   ├── restaurante-1.png # Logo de Restaurante La Parrilla
│   ├── otros-1.png     # Logo de Barbería El Estilo
│   ├── ...             # Y más logos (18 en total)
│   ├── placeholder-generator.html # Generador de logos
│   └── INSTRUCCIONES.md # Guía para agregar imágenes
└── README.md          # Documentación
```

## 🎯 Funcionalidades

### Página Principal (`index.html`)
- Hero section con barra de búsqueda
- Menú de categorías con iconos
- Sección de negocios destacados
- Navegación responsive

### Página de Categorías (`categoria.html`)
- Lista de negocios por categoría
- Tarjetas de negocio con información básica
- Enlaces a páginas individuales

### Página del Negocio (`negocio.html`)
- Información completa del negocio
- Detalles de contacto
- Servicios ofrecidos
- Reseñas de clientes
- Mapa de ubicación (placeholder)

### Funcionalidades JavaScript (`script.js`)
- Base de datos de negocios
- Búsqueda en tiempo real
- Navegación dinámica
- Sistema de calificaciones
- Gestión de URL parameters

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con flexbox y grid
- **JavaScript**: Funcionalidad interactiva
- **Font Awesome**: Iconografía
- **Responsive Design**: Mobile-first approach

## 📱 Características Responsive

- **Diseño adaptativo completo** para móviles, tablets y desktop
- **Menú de navegación colapsable** en dispositivos móviles
- **Grid layouts flexibles** que se ajustan al tamaño de pantalla
- **Página de negocio optimizada** para móviles con layout vertical
- **Optimización de imágenes y elementos** para carga rápida
- **Puntos de quiebre**:
  - Desktop: > 1024px
  - Tablet: 769px - 1024px  
  - Móvil: 481px - 768px
  - Móvil pequeño: ≤ 480px

## 🎨 Diseño

- Paleta de colores moderna con gradientes
- Tipografía legible y jerarquizada
- Animaciones suaves y transiciones
- Efectos hover interactivos
- Cards con sombras y bordes redondeados

## 📊 Datos de Ejemplo

El proyecto incluye datos de ejemplo para cada categoría:
- **Droguerías**: 3 establecimientos
- **Supermercados**: 3 establecimientos
- **Papelerías**: 3 establecimientos
- **Comida Rápida**: 3 establecimientos
- **Restaurantes**: 3 establecimientos
- **Otros**: 3 establecimientos

Cada negocio incluye:
- Nombre y categoría
- Teléfono de contacto
- Descripción
- Calificación (sistema de estrellas)
- Información adicional (dirección, horarios, servicios, reseñas)

## 🚀 Cómo Usar

1. Abre `index.html` en tu navegador web
2. Explora las categorías desde el menú principal
3. Haz clic en cualquier negocio para ver su información detallada
4. Usa la barra de búsqueda para encontrar negocios específicos
5. Navega entre páginas usando los enlaces de navegación
6. **Prueba el responsive**: Abre `test-responsive.html` para verificar el diseño en diferentes dispositivos

## 🔧 Personalización

### Agregar Nuevos Negocios

1. **Agrega la imagen**: Guarda el logo como `img/[categoria]-[numero].png`
2. **Actualiza el código**: En `script.js`, agrega el nuevo negocio al objeto `businesses`
3. **Usa el formato correcto**:
   ```javascript
   {
       id: 'nueva-categoria-1',
       name: 'Nombre del Negocio',
       category: 'Categoría',
       phone: '+57 300 000 0000',
       description: 'Descripción del negocio...',
       rating: 4.0,
       logo: 'img/nueva-categoria-1.png',
       featured: false
   }
   ```

### Modificar Negocios Existentes

1. **Cambiar imagen**: Reemplaza el archivo PNG en la carpeta `img/`
2. **Editar datos**: Modifica el objeto `businesses` en `script.js`
3. **Actualizar estilos**: Personaliza `styles.css` para cambiar la apariencia
4. **Agregar categorías**: Actualiza `categoryConfig` en `categoria.html`

### Generar Logos Automáticamente

- Abre `img/placeholder-generator.html` en tu navegador
- Haz clic en "Descargar Logo" para cada negocio
- Los archivos se descargan automáticamente con el nombre correcto
- Mueve los archivos a la carpeta `img/`

## 📈 Futuras Mejoras

- Integración con mapas reales (Google Maps)
- Sistema de reseñas interactivo
- Panel de administración para gestionar negocios
- Integración con redes sociales
- Sistema de favoritos
- Notificaciones push
- PWA (Progressive Web App)

## 📄 Licencia

Este proyecto es de uso educativo y demostrativo.

---

**Desarrollado para el Directorio Comercial de Lomitas** 🏪

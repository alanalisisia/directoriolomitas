# Instrucciones para Agregar Imágenes de Negocios

## 📁 Estructura de Archivos

Cada negocio necesita su imagen en la carpeta `img/` con el siguiente formato de nombre:

```
img/
├── drogueria-1.png    # Farmacia San Rafael
├── drogueria-2.png    # Droguería Central
├── drogueria-3.png    # Farmacia El Buen Pastor
├── super-1.png        # Supermercado El Ahorro
├── super-2.png        # Mercado Familiar
├── super-3.png        # Super Tienda 24/7
├── papeleria-1.png    # Papelería El Estudiante
├── papeleria-2.png    # Oficentro Lomitas
├── papeleria-3.png    # Papel y Tinta
├── comida-1.png       # Burger King Lomitas
├── comida-2.png       # Pizza Express
├── comida-3.png       # Chicken Express
├── restaurante-1.png  # Restaurante La Parrilla
├── restaurante-2.png  # Mariscos del Caribe
├── restaurante-3.png  # Trattoria Italiana
├── otros-1.png        # Barbería El Estilo
├── otros-2.png        # Lavandería Express
└── otros-3.png        # Taller Mecánico Rápido
```

## 🎨 Especificaciones de las Imágenes

- **Formato**: PNG o JPG
- **Tamaño recomendado**: 400x400 píxeles (cuadradas)
- **Tamaño mínimo**: 200x200 píxeles
- **Peso máximo**: 500KB por imagen (para carga rápida)
- **Estilo**: Logos, fotos del negocio, o imágenes representativas

## 🛠️ Opciones para Obtener las Imágenes

### Opción 1: Generador Automático (Recomendado)
1. Abre el archivo `img/placeholder-generator.html` en tu navegador
2. Haz clic en "Descargar Logo" para cada negocio
3. Los archivos se descargarán automáticamente con el nombre correcto
4. Mueve los archivos descargados a la carpeta `img/`

### Opción 2: Imágenes Personalizadas
1. Busca o crea imágenes para cada negocio
2. Redimensiona a 400x400 píxeles
3. Renombra siguiendo la estructura de nombres indicada arriba
4. Guarda en formato PNG o JPG en la carpeta `img/`

### Opción 3: Fotos Reales
1. Toma fotos de los negocios reales
2. Recorta y redimensiona a formato cuadrado
3. Optimiza el tamaño del archivo
4. Renombra según la estructura de nombres

## 📝 Cómo Agregar Nuevos Negocios

Para agregar un nuevo negocio:

1. **Agrega la imagen**: Guarda la imagen como `img/[categoria]-[numero].png`
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

## 🔄 Fallback Automático

Si una imagen no se encuentra o no carga:
- El sistema mostrará automáticamente un icono genérico 🏪
- Con un fondo degradado del color del tema
- Esto garantiza que el sitio siempre se vea bien

## ✅ Verificación

Para verificar que todo funciona:
1. Abre `index.html` en tu navegador
2. Verifica que las imágenes se cargan correctamente
3. Navega a las páginas de categorías
4. Haz clic en los negocios para ver las páginas individuales

## 🎯 Consejos de Optimización

- **Comprime las imágenes** antes de subirlas
- **Usa herramientas online** como TinyPNG para reducir el tamaño
- **Mantén la consistencia** en el estilo visual
- **Prueba en diferentes dispositivos** para asegurar que se ven bien

---

**Nota**: Si no tienes imágenes específicas, puedes usar el generador automático que crea logos con colores y emojis representativos para cada tipo de negocio.

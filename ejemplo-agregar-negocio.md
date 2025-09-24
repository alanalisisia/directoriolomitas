# Ejemplo: Cómo Agregar un Nuevo Negocio

Este ejemplo te muestra paso a paso cómo agregar un nuevo negocio al directorio.

## 📋 Pasos para Agregar un Negocio

### Paso 1: Preparar la Imagen
1. Busca o crea una imagen para el negocio (400x400 píxeles recomendado)
2. Nombra el archivo siguiendo el patrón: `[categoria]-[numero].png`
3. Guárdala en la carpeta `img/`

**Ejemplo**: Para una nueva droguería sería `img/drogueria-4.png`

### Paso 2: Actualizar el Código JavaScript

En el archivo `script.js`, agrega el nuevo negocio al objeto `businesses`:

```javascript
// En la sección de droguerias, agrega:
{
    id: 'drogueria-4',
    name: 'Farmacia Nueva Esperanza',
    category: 'Droguería',
    phone: '+57 300 555 1234',
    description: 'Nueva farmacia con los mejores medicamentos y atención personalizada.',
    rating: 4.8,
    logo: 'img/drogueria-4.png',
    featured: true  // true para aparecer en destacados
}
```

### Paso 3: Agregar Información Adicional (Opcional)

En el archivo `negocio.html`, agrega los detalles adicionales en el objeto `businessDetails`:

```javascript
'drogueria-4': {
    address: 'Calle Nueva #123-45, Lomitas',
    hours: 'Lunes a Domingo: 7:00 AM - 10:00 PM',
    website: 'www.farmacianuevaesperanza.com',
    services: [
        'Medicamentos de marca y genéricos',
        'Consulta farmacéutica',
        'Productos de cuidado personal',
        'Servicio a domicilio'
    ],
    reviews: [
        { 
            name: 'Cliente Satisfecho', 
            rating: 5, 
            comment: 'Excelente atención y medicamentos de calidad.' 
        }
    ]
}
```

### Paso 4: Verificar el Resultado

1. Abre `index.html` en tu navegador
2. Verifica que el nuevo negocio aparece en la categoría correspondiente
3. Si está marcado como `featured: true`, debería aparecer en la sección de destacados
4. Haz clic en el negocio para verificar que la página individual funciona correctamente

## 🎯 Ejemplo Completo

### Agregar una Nueva Papelería

**1. Imagen**: `img/papeleria-4.png`

**2. Código en script.js**:
```javascript
// En la sección papelerias:
{
    id: 'papeleria-4',
    name: 'Papelería Creativa',
    category: 'Papelería',
    phone: '+57 300 777 8888',
    description: 'Especialistas en materiales artísticos y papelería creativa.',
    rating: 4.6,
    logo: 'img/papeleria-4.png',
    featured: false
}
```

**3. Detalles adicionales en negocio.html**:
```javascript
'papeleria-4': {
    address: 'Avenida Creativa #67-89, Lomitas',
    hours: 'Lunes a Sábado: 9:00 AM - 7:00 PM',
    website: 'www.papeleriacreativa.com',
    services: [
        'Materiales artísticos',
        'Papelería creativa',
        'Servicios de diseño',
        'Clases de arte'
    ],
    reviews: [
        { 
            name: 'Artista Local', 
            rating: 5, 
            comment: 'Los mejores materiales para mis proyectos artísticos.' 
        }
    ]
}
```

## ⚠️ Notas Importantes

- **ID único**: Cada negocio debe tener un `id` único
- **Formato de imagen**: Usa PNG o JPG, tamaño recomendado 400x400px
- **Nombres de archivo**: Sigue exactamente el patrón `[categoria]-[numero].png`
- **Fallback**: Si la imagen no carga, se mostrará un icono genérico automáticamente

## 🚀 Consejos Rápidos

- **Usa el generador**: Abre `img/placeholder-generator.html` para crear logos automáticamente
- **Mantén consistencia**: Sigue el mismo formato para todos los negocios
- **Prueba regularmente**: Verifica que todo funciona después de cada cambio
- **Backup**: Haz una copia de seguridad antes de hacer cambios importantes

---

¡Con estos pasos puedes agregar fácilmente cualquier cantidad de negocios nuevos al directorio!

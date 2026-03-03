# Integracion de Cards de Programas con Backend

Este documento explica como dejar el frontend preparado para reemplazar el hardcode actual por datos reales del backend, manteniendo exactamente el mismo render de cards, filtros y modal.

## Objetivo

El bloque de programas ya esta adaptado para consumir este shape de datos:

```ts
{
  title: string
  slug: string
  objetivo: string
  precio: number
  descripcionCorta: string | string[]
  tituloDetalle: string
  descripcionLarga: string
  bloquePasos: {
    title: string
    description: string
    order?: number
  }[]
  pdf?: {
    storageKey: string
    originalName: string
    mimeType: string
    size: number
    uploadedAt?: string
  }
  filtros: string[]
  active: boolean
  featured: boolean
}
```

La idea es que cuando conectes el backend, solo cambies la fuente de datos, no el render.

## Archivos que intervienen

### 1. Contenedor principal
[ProgramasCarousel.jsx](/c:/Users/agustins/Documents/02%20paginasCodigos/00%20Pruebas/18%20practica%20React/componentesUiTailwinds/src/componentes/viceComponents/bloquePrograma/programas/ProgramasCarousel.jsx)

Responsabilidad:
- Recibe el array de programas.
- Filtra por `filtros`.
- Filtra por `active`.
- Busca el programa seleccionado por `slug`.
- Renderiza cards.
- Abre el modal.

### 2. Card individual
[ProgramaCard.jsx](/c:/Users/agustins/Documents/02%20paginasCodigos/00%20Pruebas/18%20practica%20React/componentesUiTailwinds/src/componentes/viceComponents/bloquePrograma/programas/ProgramaCard.jsx)

Responsabilidad:
- Renderiza:
- `title`
- `precio`
- `objetivo`
- `descripcionCorta`

### 3. Filtro
[SortDropdown.jsx](/c:/Users/agustins/Documents/02%20paginasCodigos/00%20Pruebas/18%20practica%20React/componentesUiTailwinds/src/componentes/viceComponents/bloquePrograma/programas/SortDropdown.jsx)

Responsabilidad:
- Muestra filtros compatibles con el enum del backend:
- `Posicionamiento & Marca`
- `Cultura & Transformacion`
- `Experiencia & Personas`
- `Impacto & Creatividad`
- `Sustentabilidad`
- `Mas elegidos`
- `Programas cortos`

### 4. Modal de detalle
[ProgramaModal.jsx](/c:/Users/agustins/Documents/02%20paginasCodigos/00%20Pruebas/18%20practica%20React/componentesUiTailwinds/src/componentes/viceComponents/bloquePrograma/programas/ProgramaModal.jsx)

Responsabilidad:
- Renderiza:
- `tituloDetalle`
- `descripcionLarga`
- `bloquePasos`
- boton con `pdf.storageKey`
- boton "Anadir al carrito"
- texto con link al formulario inferior

### 5. Fuente de datos actual (hardcode)
[programas.js](/c:/Users/agustins/Documents/02%20paginasCodigos/00%20Pruebas/18%20practica%20React/componentesUiTailwinds/src/componentes/viceComponents/data/programas.js)

Responsabilidad:
- Simula la respuesta del backend.
- Debe ser reemplazado luego por el fetch real.

### 6. Punto donde se inyectan los datos
[Home.jsx](/c:/Users/agustins/Documents/02%20paginasCodigos/00%20Pruebas/18%20practica%20React/componentesUiTailwinds/src/pages/home/Home.jsx)

Hoy hace esto:

```jsx
import { programas } from '../../componentes/viceComponents/data/programas'
import { ProgramasCarousel } from '../../componentes/viceComponents/bloquePrograma/programas/ProgramasCarousel'

<ProgramasCarousel programas={programas} />
```

## Que renderiza cada parte

## Card (preview)

La card muestra estos campos:

- `title`
- `precio`
- `objetivo`
- `descripcionCorta`

### Orden visual actual

1. Titulo arriba izquierda
2. Precio arriba derecha
3. Divider rojo
4. Bloque rojo con `objetivo`
5. Lista `ul` con `descripcionCorta`
6. Boton "Mas informacion"

### Importante sobre `descripcionCorta`

El componente soporta:

```js
descripcionCorta: "Texto unico"
```

o:

```js
descripcionCorta: ["Item 1", "Item 2", "Item 3"]
```

Si llega string, lo convierte en una lista de un solo item.
Si llega array, renderiza hasta donde venga.

Recomendacion para backend:
- Si queres mantener el layout actual, conviene enviar `descripcionCorta` como `string[]`.

## Modal (detalle)

El modal muestra estos campos:

- `tituloDetalle`
- `descripcionLarga`
- `bloquePasos`
- boton con `pdf.storageKey`
- boton "Anadir al carrito"
- texto con link al formulario inferior

### Comportamiento

- El modal se abre con el programa seleccionado.
- Internamente se usa `slug` para identificar cual mostrar.
- Los pasos se ordenan por `order`.

### `bloquePasos`

Se espera este formato:

```js
bloquePasos: [
  {
    title: "Paso 1",
    description: "Descripcion del paso",
    order: 1
  }
]
```

Render actual:
- `title` en rojo
- salto de linea
- `description` debajo, color normal

## Filtros

El dropdown usa el array `filtros` de cada programa.

Ejemplo:

```js
filtros: ["Posicionamiento & Marca", "Mas elegidos"]
```

### Logica actual

- Si el usuario elige un filtro, solo se muestran programas donde:

```js
programa.filtros?.includes(filter)
```

### Requisito para backend

Cada programa debe tener al menos un valor valido dentro de `filtros`.

## Estado activo

El carrusel solo muestra programas activos:

```js
programa.active !== false
```

### Recomendacion

Desde backend:
- enviar `active: true` para visibles
- enviar `active: false` para ocultarlos sin borrarlos

## Como conectar despues con el backend

## Opcion recomendada

Mantener los mismos componentes y reemplazar el hardcode por un fetch.

### Paso 1: quitar import del hardcode

En [Home.jsx](/c:/Users/agustins/Documents/02%20paginasCodigos/00%20Pruebas/18%20practica%20React/componentesUiTailwinds/src/pages/home/Home.jsx), hoy se importa:

```jsx
import { programas } from '../../componentes/viceComponents/data/programas'
```

Eso despues se reemplaza por estado + fetch.

### Paso 2: cargar desde API

Ejemplo:

```jsx
import { useEffect, useState } from "react";
import { ProgramasCarousel } from "../../componentes/viceComponents/bloquePrograma/programas/ProgramasCarousel";

export function Home() {
  const [programas, setProgramas] = useState([]);

  useEffect(() => {
    const loadProgramas = async () => {
      const res = await fetch("/api/programs");
      const data = await res.json();
      setProgramas(data);
    };

    loadProgramas();
  }, []);

  return (
    <div className="py-16">
      <ProgramasCarousel programas={programas} />
    </div>
  );
}
```

### Paso 3: no tocar los componentes de render

Mientras el backend devuelva el mismo shape, no hace falta cambiar:

- `ProgramasCarousel`
- `ProgramaCard`
- `ProgramaModal`
- `SortDropdown`

## Formato ideal de respuesta del backend

## Si devolves lista para cards y modal juntos

```json
[
  {
    "title": "Construccion de marca",
    "slug": "construccion-de-marca",
    "objetivo": "DX identitario - Visual - Naming",
    "precio": 125000,
    "descripcionCorta": [
      "Conectamos tu marca con tu publico.",
      "Definimos una identidad clara y consistente.",
      "Traducimos estrategia en una presencia reconocible."
    ],
    "tituloDetalle": "Construccion de marca para organizaciones con identidad clara",
    "descripcionLarga": "Acompanamos a tu organizacion...",
    "bloquePasos": [
      {
        "title": "Diagnostico identitario",
        "description": "Proposito, valores, atributos y diferenciadores.",
        "order": 1
      },
      {
        "title": "Desarrollo visual",
        "description": "Logo, paleta, tipografias y sistema grafico.",
        "order": 2
      }
    ],
    "pdf": {
      "storageKey": "https://tu-cdn.com/programas/construccion-de-marca.pdf",
      "originalName": "construccion-de-marca.pdf",
      "mimeType": "application/pdf",
      "size": 1200000
    },
    "filtros": ["Posicionamiento & Marca", "Mas elegidos"],
    "active": true,
    "featured": true
  }
]
```

## Que campos son obligatorios para que no se rompa el render

Minimo recomendado:

- `title`
- `slug`
- `objetivo`
- `precio`
- `descripcionCorta`
- `tituloDetalle`
- `descripcionLarga`
- `bloquePasos`
- `filtros`
- `active`

Opcionales pero utiles:

- `pdf`
- `featured`

## Reglas que ya asume el frontend

- `slug` debe ser unico.
- `precio` debe ser numerico.
- `bloquePasos` debe ser array.
- `filtros` debe ser array de strings validos.
- `pdf.storageKey` debe ser una URL o path utilizable en un `href`.
- Si `active` es `false`, el programa no se muestra.

## Que no conviene cambiar

Para no romper nada despues:

- No renombrar `title` a `titulo`
- No renombrar `descripcionCorta` a `resumen`
- No renombrar `bloquePasos` a `modulos`
- No usar `id` para el modal si la UI hoy ya trabaja con `slug`
- No mandar `filtros` con etiquetas distintas a las del dropdown

## Resumen practico

Para que todo quede igual cuando conectes con backend:

1. El backend debe devolver el mismo shape del modelo.
2. `Home.jsx` debe hacer fetch y pasar ese array a `ProgramasCarousel`.
3. `ProgramasCarousel` sigue igual.
4. `ProgramaCard` sigue igual.
5. `ProgramaModal` sigue igual.
6. El render no se toca; solo cambia el origen de los datos.

Si queres, el siguiente paso es dejar `Home.jsx` ya preparado con `useEffect`, `loading` y `error`.

---
title: "Módulo 00-01: Interfaz y Hotkeys"
description: "Objetivo: Conocer cada panel de la interfaz de AoE2 DE y configurar hotkeys que reduzcan el tiempo de reacción para acciones repetitivas."
sidebar:
  order: 1
---

**Objetivo:** Conocer cada panel de la interfaz de AoE2 DE y configurar hotkeys que reduzcan el tiempo de reacción para acciones repetitivas.

---

## La Interfaz en 5 Zonas

### Zona 1: Panel de Recursos (arriba)
La barra superior muestra en tiempo real: Comida, Madera, Oro, Piedra y Población. Cada número importa. Un build order depende de que veas estos números de un vistazo sin interrumpir el flujo de juego.

- **Comida (Food):** Recolectada de ovejas, ciervos, bayas, jabalíes, granjas y pesca
- **Madera (Wood):** Árboles. Siempre necesaria, nunca sobra
- **Oro (Gold):** Minas o comercio. Se agota a mediana partida
- **Piedra (Stone):** Muros, torres, castillos. Uso puntual pero crítico
- **Población:** Máximo configurable hasta 200. Cada aldean/unidad ocupa 1 espacio

### Zona 2: Minimapa (abajo izquierda)
Tu ojo estratégico. Muestra:
- Posición de tus edificios (azul)
- Posición de unidades enemigas detectadas (rojo)
- Recursos en el mapa

**Hábito clave:** Chequeá el minimapa cada 15-20 segundos durante la partida. Falta de información = muerte económica garantizada.

### Zona 3: Panel de Selección (abajo centro)
Muestra la unidad o edificio seleccionado, sus stats, vida y acciones disponibles. Cuando seleccionás el Town Center, ves el botón de aldeano y el botón de avanzar de edad.

### Zona 4: Panel de Acciones (abajo derecha)
Los botones de acciones del objeto seleccionado. Todo lo que hacés con un edificio o unidad se ejecuta desde acá. Con hotkeys, nunca deberías necesitar hacer clic acá.

### Zona 5: Zona de Juego (centro)
Donde controlás tus unidades y edificios. La vista isométrica es fija; usás scroll o hotkeys de cámara para moverte.

---

## Hotkeys Esenciales: Configuración Recomendada

AoE2 DE permite customización total de hotkeys. **La configuración por defecto no es óptima.** La recomendación del 95% de los pros es usar el layout **Grids** o similar.

### ¿Por qué Grids?
Las teclas se organizan en bloques físicos del teclado que reflejan la posición de los botones en pantalla. QWER para la primera fila de acciones, ASDF para la segunda, ZXCV para la tercera.

### Hotkeys de Cámara Críticas

| Acción | Hotkey default | Recomendada |
|--------|---------------|-------------|
| Ir al Town Center | Home | H |
| Ir a aldeano inactivo | Period (.) | . |
| Ir a unidad seleccionada | Follow | F |
| Centrar en selección | – | Space |
| Seleccionar todo el ejército | Ctrl+A | Ctrl+A |

### Hotkeys de Producción

| Acción | Hotkey |
|--------|--------|
| Producir aldeano (TC seleccionado) | Q |
| Quemar en punto de recolección | (set en opciones) |
| Avanzar de edad | (botón TC) |
| Seleccionar todos los TC | Ctrl+click en TC |

### Hotkeys de Construcción

Cuando seleccionás un aldeano, el menú de construcción se abre. Con Grids:
- **B** → Menú de construcción básico
- **B → Q** → Molino (Mill)
- **B → W** → Campamento de minería (Mining Camp)
- **B → E** → Aserradero (Lumber Camp)
- **B → A** → Granja (Farm)
- **B → F** → Town Center adicional (Castle Age+)

### Hotkeys Militares Clave

| Acción | Hotkey |
|--------|--------|
| Stance: Aggressive | – |
| Stance: Defensive | – |
| Stance: Stand Ground | – |
| Grupo 1 de control | Ctrl+1 |
| Seleccionar grupo 1 | 1 |
| Doble-clic en grupo = ir al grupo | 1+1 (doble) |
| Patrullar | P |
| Atacar tierra | Ctrl+clic derecho |

---

## Configuración Inicial Recomendada

### Paso a Paso

1. **Ir a Opciones → Hotkeys**
2. Seleccionar preset **Grid** o importar perfil de Hera (disponible en su Discord)
3. Activar **Scroll de cámara en bordes** (opcional, algunos pros lo desactivan)
4. Activar **Construcción con doble clic para confirmar** = OFF (más lento)
5. En **Interfaz**, activar:
   - Mostrar daño flotante: recomendado al inicio
   - Mostrar rango de disparo: útil para torres y monasterio

### Opciones de Pantalla Importantes
- Resolución: la más alta posible para ver más del mapa
- **Field of View:** Máximo (ver más mapa = más info)
- UI Scale: ajustar al 90-100% para maximizar visión de mapa

---

## Caso Práctico: Flujo de los Primeros 5 Minutos

Situación: Empezás la partida. ¿Cómo usás la interfaz sin mirar los botones?

**Segundo 0-30:**
1. Presionás `H` → vas al Town Center
2. Presionás `Q` → producís aldeano
3. Seleccionás las 3 ovejas iniciales → las mandás a buscar food
4. Seleccionás el explorador → presionás `P` (patrullar) en espiral para scouting

**Minuto 1-3:**
- Cada vez que oís el sonido de aldeano producido: presionás `.` → seleccionás aldeano inactivo → lo mandás a recurso
- Nunca mirás el contador de aldeanos: lo chequeás en el panel de recursos (arriba)

**Error común #1:** Pausar el movimiento del explorador para producir aldeanos. No hagas eso: usa hotkeys para ir al TC sin mover la cámara del mapa.

---

## Errores Comunes al Empezar

1. **Usar el mouse para todo:** Produce 3-5x menos acciones por minuto que con hotkeys
2. **No configurar grupos de control:** Sin `Ctrl+1` para el ejército, nunca podés controlar unidades mientras manejás economía
3. **Ignorar el aldeano inactivo:** El icono de aldeano inactivo (`.`) es oro puro. Cada aldeano inactivo = recursos perdidos
4. **No usar `H` para volver al TC:** Los novatos scrollean el mapa. Los pros presionan H
5. **Tener la resolución baja:** Menos campo visual = menos info del mapa

---

## Ejercicio de Práctica

**Duración:** 15 minutos vs IA (cualquier dificultad)

**Objetivo:** No usar el mouse para producir aldeanos.

1. Empezá una partida vs IA en Standard
2. Cada vez que necesités producir un aldeano, usá solo `H → Q`
3. Objetivo: 10 aldeanos en los primeros 5 minutos sin hacer clic en el botón del TC
4. Bonus: Configurá los 3 primeros grupos de control (`Ctrl+1` para explorador, `Ctrl+2` para milicia inicial)

---

## Cómo Evaluar Tu Progreso

- **Semana 1:** Podés producir aldeanos sin clic en 9/10 intentos
- **Semana 2:** Usás `H` reflexivamente sin pensar
- **Semana 3:** Tenés al menos 3 grupos de control en uso en cada partida
- **Métrica objetiva:** Tiempo desde que nace un aldeano hasta que está asignado a un recurso < 3 segundos

---

## Videos Recomendados

- **T90Official** - "AoE2 Hotkey Setup Guide" - Canal: [youtube.com/@T90Official](https://www.youtube.com/@T90Official)  
  (Link pendiente de verificación individual — búscalo en el canal)
- **Hera** - Streams de práctica donde explica su hotkey setup en vivo  
  Canal: [youtube.com/@HeraAgeofEmpires2](https://www.youtube.com/@HeraAgeofEmpires2)

---

*Siguiente módulo: [02 - Recursos y Economía](./02-recursos-y-economia)*

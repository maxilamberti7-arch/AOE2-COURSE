---
title: "Módulo 00-02: Recursos y Economía"
description: "Objetivo: Entender cómo funciona cada recurso, sus tasas de recolección y cómo balancear aldeanos para sostener cualquier estrategia."
sidebar:
  order: 2
---

**Objetivo:** Entender cómo funciona cada recurso, sus tasas de recolección y cómo balancear aldeanos para sostener cualquier estrategia.

---

## Los 4 Recursos: Tasas Base

Antes de cualquier estrategia, necesitás saber cuánto recolecta un aldeano por minuto en condiciones base:

| Recurso | Tasa base (por minuto) | Con mejoras completas |
|---------|----------------------|----------------------|
| Ovejas | ~40 food/min | +Boyar del Loom |
| Ciervos | ~35 food/min | – |
| Granjas (sin mejoras) | ~22 food/min | ~31 food/min (con Horse Collar + Heavy Plow) |
| Madera (árbol cercano) | ~28 wood/min | ~35 wood/min (con Double-Bit Axe + Bow Saw) |
| Oro (cerca) | ~27 gold/min | ~35 gold/min (con Gold Mining + Shaft Mining) |
| Bayas | ~26 food/min | – |

**Nota sobre distancia:** Estas tasas asumen que el depósito está a distancia óptima (2-4 tiles). A mayor distancia, la eficiencia cae linealmente. Esa es la razón por la que siempre construís el aserradero JUNTO a los árboles, no al lado de tu base.

---

## Comida: El Recurso Rey del Inicio

La comida es lo más importante en Dark Age y principios de Feudal. Sin comida no hay aldeanos, sin aldeanos no hay nada.

### Fuentes en orden de eficiencia (Dark Age):

1. **Ovejas (sheep):** Empiézas con 4-6. Llevarlas al TC inmediatamente. Pueden robarte el scout enemigo si no están bajo tu TC.
2. **Jabalíes (boars):** 2 jabalíes en el mapa = ~340 food cada uno. El [lure de jabalí](../recursos/glosario.md#l) es una técnica crítica: un aldeano lo atrae al TC, otro dispara desde adentro.
3. **Ciervos (deer):** El [deer push](../recursos/glosario.md#d) consiste en empujarlos hacia el TC con el explorador. 4-8 ciervos = 100 food c/u.
4. **Bayas (berries):** Lentas pero constantes. Siempre construís el mill al lado.
5. **Granjas (farms):** La principal fuente sostenible. Activás a principios de Feudal o antes si estás boomeando.

### ¿Cuántos aldeanos en comida al click up a Feudal?

Un build order estándar de 21-22 aldeanos ("21 pop scouts") tiene aproximadamente:
- 6 en ovejas/caza
- 4 en granjas o bayas
- Total ~10 en comida

El objetivo es tener 500+ comida acumulada al hacer click up, para poder producir sin cortes.

---

## Madera: La Base de Todo

Sin madera no hay granjas, cuarteles, edificios económicos ni casas. Es el segundo recurso más crítico.

### Cuántos aldeanos en madera por etapa:

| Etapa | Aldeanos en madera (guía) |
|-------|--------------------------|
| Dark Age (inicio) | 3-4 |
| Feudal Age (básico) | 4-6 |
| Castle Age | 6-8 |
| Imperial Age | Depende de estrategia |

**Regla práctica:** Nunca bajés de 3 aldeanos en madera durante Dark Age. La madera alimenta las granjas que alimentan la producción de aldeanos.

### Posicionamiento del Lumber Camp
Construilo siempre en el centro del cluster de árboles más cercano a tu base. La distancia al árbol = tiempo perdido. Con **Double-Bit Axe** (mejora de madera Feudal) la eficiencia sube ~15%.

---

## Oro: El Recurso del Ejército Feudal/Castle

El oro no es crítico en Dark Age pero se vuelve central en Feudal cuando producís unidades militares (caballerías, arqueros, MAA).

### Cuándo empezar a minar oro:
- **Scout rush:** 0-2 aldeanos en oro durante Feudal (scouts no cuestan oro)
- **Archer rush:** 4-5 aldeanos en oro desde el inicio de Feudal (arqueros cuestan 45 wood + 45 gold)
- **MAA into archers:** 2 aldeanos en oro durante Dark Age para los upgrades

**Cálculo real:** Un arquero cuesta 45 gold. Para producir un arquero por minuto con producción continua desde 1 rango, necesitás ~45 gold/min = ~2 aldeanos en oro (con Gold Mining).

### Gold Starvation
Ver [glosario](../recursos/glosario.md#g). Quedarse sin oro es uno de los errores más comunes entre 700-1100 ELO. Solución: siempre tener 3+ aldeanos en oro antes de empezar producción activa de unidades con costo de oro.

---

## Piedra: Situacional pero Crítica

La piedra solo se usa para:
1. Muros de piedra (costosos)
2. Torres (200 stone c/u)
3. Castillos (650 stone)
4. Town Centers adicionales (125 stone en Castle Age)

### Cuándo empezar a minar piedra:
- Si querés castillo rápido: enviá 3-4 aldeanos en transición a Castle Age
- Si no planeás castillo pronto: 0 aldeanos en piedra hasta Castle Age

---

## El Sistema de Casas (Houses)

Las casas (25 wood c/u, +5 pop cada una) son el elemento más olvidado por novatos. Si tu pop cap está llena, el TC no produce aldeanos. Esta situación se llama **"poplocked"**.

**Regla del doble:** Siempre construí casas cuando llegás al 80% del límite de población actual. Si tenés 10 pop cap y 8 aldeanos, construí otra casa ya.

**Tip avanzado:** Los aldeanos en camino a depósitar recursos pueden construir una casa de paso. Nunca mandes un aldeano exclusivamente a construir una casa.

---

## El Triángulo Económico

La economía de AoE2 se puede ver como un triángulo con tres vértices:

```
         COMIDA
        /       \
       /         \
    MADERA --- ORO
```

- Comida → produce aldeanos → que recolectan todo lo demás
- Madera → construye granjas (más comida) y edificios militares
- Oro → compra unidades militares avanzadas

El objetivo en Dark Age y Feudal temprano es maximizar la base del triángulo: tener suficiente madera para sostener la producción de granjas, que a su vez sostiene la producción de aldeanos.

---

## Caso Práctico 1: Aldeanos Inactivos

Situación: Llegaste a 15 minutos de juego, mirás el replay y ves que 4 aldeanos estuvieron inactivos por 2 minutos.

**Cálculo del costo real:**
- 4 aldeanos × 2 minutos × 28 madera/min = 224 madera perdida
- O en comida: 4 × 2 × 30 food/min = 240 food perdida
- Eso equivale a ~5 arqueros que nunca existieron

**Solución:** Activar el sonido y el icono de aldeano inactivo. Presionar `.` cada 30-60 segundos como hábito reflejo.

---

## Caso Práctico 2: Balanceo al Subir a Feudal

Situación: Estás en Dark Age con 21 aldeanos y estás haciendo click up. ¿Dónde ponés los próximos 3 aldeanos que producís?

**Análisis del 21 pop scout rush:**
- Feudal Age cuesta 500 food
- Cuartel de Feudal: 175 wood
- Establo: 175 wood
- Total madera para infraestructura: ~350 wood

Si tenés 3 aldeanos en madera → en 4 minutos de Dark Age = ~336 wood. Eso es justo. Por eso el build standard pone 3-4 en madera desde el principio.

**Distribución óptima de los 21:**
- 6 en ovejas (máximo)
- 3-4 en madera
- 4 en granjas/bayas
- 4 en caza (jabalíes/ciervos)
- 3 en más madera o los primeros 3 listos para el cuartel

---

## Errores Comunes

1. **Dejar aldeanos en comida de ovejas cuando las ovejas se acabaron:** Se quedan parados. Siempre reasignás cuando una fuente se termina.
2. **Poner demasiados aldeanos en oro demasiado pronto:** Si no producís unidades de oro, el oro se acumula sin usar. Ese aldeano debería estar en madera o comida.
3. **No construir el Lumber Camp cerca de los árboles:** Pierden 30-40% de eficiencia caminando al árbol lejano.
4. **Olvidar las casas:** Un TC poplocked por 30 segundos = 1 aldeano perdido
5. **No actualizar el Mill y el Lumber Camp:** Horse Collar (+15% granjas) es obligatorio al llegar a Feudal si boomeás.

---

## Ejercicio de Práctica

**Objetivo:** "Economía perfecta" en los primeros 10 minutos.

1. Jugá una partida vs IA Fácil, mapa Isla con mucho terreno
2. Al minuto 10, chequeá: ¿cuántos aldeanos inactivos tenés en ese momento?
3. Objetivo: 0 aldeanos inactivos a los 10 minutos
4. Chequeá la distribución: ¿es razonable para el build que intentás?

---

## Cómo Evaluar Tu Progreso

- **Nivel básico:** 0 aldeanos inactivos por más de 10 segundos seguidos
- **Nivel intermedio:** Tasas de recolección correctas para tu build (verificable en el gráfico de recursos del post-game)
- **Nivel avanzado:** Tu curva de recursos en el post-game es suave (sin picos ni caídas abruptas que señalen errores)
- **Métrica numérica:** Food recolectada a los 10 minutos > 1500 con 21 pop

---

*Siguiente módulo: [03 - Las Cuatro Edades](./03-las-cuatro-edades)*

---
title: "Módulo 03-02: Multi-tasking y APM"
description: "Objetivo: Desarrollar la capacidad de manejar economía, producción y combate simultáneamente sin perder eficiencia en ningún frente."
sidebar:
  order: 2
---

**Objetivo:** Desarrollar la capacidad de manejar economía, producción y combate simultáneamente sin perder eficiencia en ningún frente.

---

## El Problema del Multi-tasking en AoE2

AoE2 requiere que simultáneamente:
1. Produzcas aldeanos desde el TC
2. Investigues tecnologías
3. Controles unidades militares en combate
4. Asignes nuevos aldeanos a recursos
5. Construyas edificios
6. Reconstruyas granjas agotadas
7. Monitorees el scouting

Nadie hace todo esto perfectamente. Los pros priorizan. Vos también tenés que aprender a priorizar.

---

## La Jerarquía de Acciones

### Acciones de Máxima Prioridad (nunca ignorar)

1. **Producir aldeanos:** Si el TC está idle 10 segundos, perdiste recursos. La producción de aldeanos es automatizada mentalmente por los pros: está en el músculo.
2. **Reaccionar a ataques de aldeanos:** Aldenos muertos son pérdidas permanentes.
3. **No quedar poplocked:** Si la casa no está construida, todo para hasta que se construya.

### Acciones de Alta Prioridad

4. **Mantener producción militar continua:** Si tu ejército está en combate y no reemplazás las bajas, perdés momento.
5. **Click up a la siguiente edad:** Si tenés los recursos, no hay razón para esperar.
6. **Investigar tecnologías clave** (Bloodlines, Fletching, Horse Collar).

### Acciones de Prioridad Media

7. **Micro del ejército:** Importante, pero puede ser parcial sin ser catastrófico.
8. **Reconstruir granjas:** Importante, pero tiende a manejarse con auto-requeue.
9. **Scouting activo:** Importante, pero el explorador puede patrullar solo por períodos.

### Acciones de Baja Prioridad (hacé cuando puedas)

10. **Optimizar posición de aldeanos en recursos**
11. **Micro fino de unidades individuales**
12. **Gestión del Mercado**

---

## Cómo Subir el APM de Forma Útil

**El [APM](../recursos/glosario.md#a) correcto no es hacer muchos clicks, es hacer los clicks correctos.**

Un jugador de 600 APM que spamea clicks en el mismo lugar es menos efectivo que uno de 120 APM que hace acciones útiles cada segundo.

### Técnica: El "Loop" Mental

Los pros tienen un loop de acciones que ejecutan cada 20-30 segundos, independientemente de si algo requiere atención:

```
H → ¿TC idle? → Q (producir aldeano)
→ . → ¿Aldeano inactivo? → asignarlo
→ Grupo militar (1) → ¿necesita producción?
→ minimapa → ¿ataque? ¿scouting?
→ Tecnologías → ¿algo en cola?
```

Este loop de 5-6 acciones toma 3-5 segundos. Ejecutado cada 30 segundos, son 6 loops por minuto de 6 acciones cada uno = 36 acciones "de mantenimiento" por minuto, todas útiles.

### Hotkeys que Multiplican el APM Útil

- `H` → Town Center: el hotkey más importante. Sin él, perdés 2-3 segundos por cada acceso al TC
- `.` → Aldeano inactivo: equivale a encontrar automáticamente el aldeano problemático
- `1`, `2`, `3` → grupos de control: acceso instantáneo al ejército sin buscar en el mapa
- `P` → Patrullar: modo de comportamiento que elimina la necesidad de micromanejo básico

---

## Técnicas de Multi-tasking Específicas

### Técnica 1: La División Mental de la Pantalla

Cuando tenés combate activo:
- **Zona inferior:** tu base (TC, producción, eco)
- **Zona superior:** el combate

Alternativamente rápido entre ambas zonas con `H` (base) y el grupo de unidades militares.

**El error más común:** Quedarte mirando el combate sin checar la economía. El combate puede auto-resolverse mal pero sobrevivir; una economía abandonada 2 minutos es devastadora.

### Técnica 2: Producción desde Múltiples Edificios

Cuando tenés 3 TCs, 2 establos y 2 cuarteles activos, no podés chequear cada uno manualmente. La solución:

1. **Queued production:** Ponés cola de 3-5 unidades en cada edificio. No tenés que chequearlos con tanta frecuencia.
2. **Clic en el ícono de edificio inactivo:** AoE2 tiene un indicador de edificio de producción inactivo (similar al aldeano inactivo). Presionarlo te lleva al edificio idle.
3. **Grupos de control para edificios:** Ctrl+1 para TC, Ctrl+2 para establos, etc. Así podés ir directamente con 1 tecla.

### Técnica 3: Compartimentar el Combate

Si tenés un ataque activo:
1. Mandás tu ejército al área del combate y los ponés en "Aggressive stance" (atacan lo que ven)
2. Volvés a tu base 10-15 segundos para manejar eco y producción
3. Volvés al combate para ajustar el micro
4. Repetís

Esto es lo que los pros hacen. No están mirando el combate todo el tiempo: lo lanzan, hacen macro, vuelven a micro.

---

## APM en la Práctica: Números Reales

| ELO | APM promedio | APM efectivo (útil) |
|-----|-------------|---------------------|
| 700-900 | 30-60 | 20-40 |
| 1000-1200 | 60-100 | 50-80 |
| 1200-1500 | 100-150 | 80-120 |
| 1500+ | 150-200 | 130-170 |
| Pro (2000+) | 180-250 | 160-220 |

**Nota:** Hera en momentos de combate intenso puede llegar a 400+ APM, pero su promedio de partida completa es 180-220.

No te fijes en el número bruto. Fiijate en cuántas de tus acciones son útiles.

---

## El "Macro Loop" para Nivel Avanzado

Este es el loop que deberías automatizar una vez que dominás los básicos:

**Cada 20-30 segundos:**
1. `H` → ¿TC produce? → `Q` si no
2. `.` → ¿Hay aldeano inactivo? → asignarlo al recurso correcto
3. `1` (grupo ejército) → ¿Está produciendo? → ir a los edificios militares y encolar
4. Checar minimapa (2-3 segundos)
5. Si hay combate activo: ir al combate, dar 3-5 órdenes de micro, volver a base

**Cada 60-90 segundos:**
6. Checar si hay tecnologías para investigar
7. Verificar distribución de aldeanos vs lo que producís
8. Construir casas si el límite se acerca

---

## Caso Práctico 1: Ataque y Eco Simultáneos

Situación: Tus 8 knights están atacando la base del rival al minuto 22. Al mismo tiempo, tu TC está inactivo desde hace 30 segundos y tenés 3 aldeanos inactivos en tu base.

**Decisión instantánea:**
La eco no puede esperar. Cada segundo de TC idle = perdés aldeanos. Hacés:
1. `H` → producís aldeano (2 segundos)
2. `.` → asignás cada inactivo (6 segundos total con 3)
3. Volvés al combate con `1`

**Total: ~8 segundos lejos del combate.** ¿Tus knights murieron en esos 8 segundos? Si el combate no es desesperado, no. Y lo que ganaste (1 aldeano + 3 asignados) vale mucho más que 8 segundos de micro.

---

## Caso Práctico 2: Gestión de 3 Frentes

Situación (avanzada): Estás en Imperial Age. Tenés:
- Un ejército principal atacando la base rival (10 knights + 6 arbalest)
- Una torre avanzada siendo atacada por el rival
- Tu base con 40 aldeanos, 3 TCs y 3 establos que necesitan producción

**Prioridad:**
1. La torre puede aguantar sola: tiene 1200 HP. No requiere atención inmediata.
2. Tu base: TCs y establos sin producción = máxima prioridad después del ataque activo
3. El ataque activo: 15-20 segundos de micro, luego volvés a base

**Ciclo:** Ataque (15s) → Base (10s) → Ataque (15s) → Torre (5s, chequeo) → Base (10s) → Ataque...

---

## Errores Comunes

1. **Quedarse mirando el combate 2+ minutos:** Tu base colapsa mientras estás "disfrutando" la batalla. El combate puede pausarse en tu cabeza; la eco no.
2. **No usar grupos de control:** Sin `Ctrl+1`, `Ctrl+2`, perdés 2-4 segundos buscando tus unidades cada vez.
3. **Micro fino sin macro básico:** Un jugador de 1000 ELO que hace kiting perfecto pero tiene TC idle el 40% del tiempo pierde contra uno de 1100 que tiene kiting básico pero eco perfecta.
4. **Queued production infinita:** Poner 10 aldeanos en cola en el TC en vez de producirlos uno a uno. Con cola de 10, si tenés overflow de food, no te das cuenta.
5. **Olvidar investigar tecnologías durante el combate:** Las tecnologías no se investigan solas. Si estás en combate 5 minutos y no investigaste Plate Mail Armor, tus units están underperforming todo ese tiempo.

---

## Ejercicio de Práctica

### "El Combate Consciente"

1. Jugá una partida hasta Castle Age vs IA Difícil
2. Cuando empiece el primer combate real (minuto 20-25):
   - Poné un timer en tu teléfono: cada 20 segundos, sin importar lo que pase en el combate, mirás tu eco (TC, aldeanos, distribución)
3. Forzá este hábito por 5 partidas seguidas
4. Después del período forzado: el loop debería empezar a sentirse natural

---

## Cómo Evaluar Tu Progreso

| Métrica | Básico | Intermedio | Avanzado |
|---------|--------|-----------|---------|
| TC idle durante combate | > 60 seg | 30-60 seg | < 20 seg |
| Aldeanos inactivos en combate | 3-5 | 1-3 | 0-1 |
| Producción militar durante combate | Se para | Intermitente | Continua |
| APM efectivo | < 50 | 50-100 | 100+ |

---

*Siguiente módulo: [03 - Timing Attacks y Pushes](./03-timing-attacks-y-pushes)*

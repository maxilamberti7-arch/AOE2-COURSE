---
title: "Módulo 03-01: Micro-Management"
description: "Objetivo: Dominar el control individual y grupal de unidades para maximizar el daño causado y minimizar las bajas propias."
sidebar:
  order: 1
---

**Objetivo:** Dominar el control individual y grupal de unidades para maximizar el daño causado y minimizar las bajas propias.

---

## Qué es el Micro y Por Qué Importa

El [micro](../recursos/glosario.md#m) (micro-management) es el control activo de unidades durante el combate. En AoE2, dos ejércitos idénticos enfrentándose sin micro vs con micro tienen resultados muy diferentes.

**Ejemplo numérico:**
- 10 Knights sin micro vs 10 Knights del rival: pierden 4-5 por intercambio
- 10 Knights con micro (focus fire + retiro de dañados) vs 10 Knights del rival: pierden 1-2 por intercambio

La diferencia es brutal. Y a partir de 1200 ELO, el micro se vuelve obligatorio.

---

## Técnicas de Micro Fundamentales

### 1. Focus Fire (Fuego Concentrado)

**Qué es:** Hacer que todas tus unidades ataquen el mismo objetivo.

**Por qué funciona:** Si 8 archers atacan 8 enemigos distintos, cada uno necesita múltiples disparos para matar al suyo mientras los enemigos siguen vivos y disparando. Si los 8 atacan el mismo objetivo, ese objetivo muere en 1-2 segundos y los 7 restantes quedan sin reducción inmediata de firepower.

**Cómo hacerlo:**
1. Seleccionás todas tus unidades ranged (ctrl+clic o grupo)
2. Hacés clic derecho en la unidad enemiga más vulnerable (la más dañada, la más amenazante)
3. Cuando esa unidad muere, inmediatamente cambiás el foco al siguiente objetivo más peligroso

**Para knights:** Click derecho en el archer o unidad de asedio del rival.

### 2. Kiting (Arqueros)

**Qué es:** Disparar y retroceder para mantener a los enemigos fuera del rango de ataque melee.

**Mecánica:**
1. Tus archers seleccionan un objetivo
2. Disparan (quedan en cooldown de ~1 segundo)
3. Durante ese cooldown: retrocedés 1-2 tiles
4. Los enemigos intentan seguirte pero no llegan
5. Cuando el cooldown termina: disparás de nuevo

**Resultado:** Tu ejército mata sin recibir daño cuerpo a cuerpo.

**Cómo practicarlo:**
- Seleccionás tus archers como un grupo (ctrl+1)
- Al disparar: `←` (move back) inmediatamente
- Al recargar: clic en el enemigo
- Ritmo: dispara → mueve → dispara → mueve

**Dificultad:** Requiere buena sincronización. Al inicio vas a perder ritmo. Es una habilidad que se construye con horas de práctica.

### 3. Retreat de Unidades Dañadas

**Qué es:** Sacar unidades dañadas del combate antes de que mueran.

**Por qué:** Un knight con 20 HP de 120 que sigue en combate va a morir en los próximos 3-4 golpes. Si lo retirás a tiempo y lo curás (con monje) o simplemente lo sacás del fuego, esos 60 food + 75 gold del knight quedan vivos.

**Cómo:**
1. Mientras el ejército pelea, periódicamente seleccionás las unidades con más daño
2. Las mandás atrás del resto del ejército
3. Las reintegrás cuando se recuperan o cuando hay un monje disponible

**Nivel de dificultad:** Alto. Requiere dividir la atención entre el combate y las unidades individuales.

### 4. Splitting (Separación)

**Qué es:** Separar tu ejército para que no todos reciban el splash damage del Mangonel o del Onager.

**Por qué:** Un Onager con shot grande puede matar 5-6 archers apretados de un golpe. Si estás disperso, solo mata 1-2.

**Cómo:**
- Nunca agrupes todos tus arqueros en una bola densa
- Mantené al menos 2 tiles de separación entre grupos
- Contra Mangonels: spread aún más (5-6 tiles entre grupos)

---

## Micro de Caballería

Los knights y paladines tienen el micro más directo. Principios:

### 1. No chargear sin bloqueo de retreat

Si mandás tus knights directo al centro del ejército enemigo, se quedan rodeados y mueren. La caballería funciona mejor flanqueando: atacar desde los costados del ejército enemigo.

### 2. El "Cycle Micro" de Knights

1. Lanzás los knights contra los archers del rival
2. Cuando los knights empiezan a recibir daño de los piqueros (si los hay): retirás la mitad
3. La mitad que sigue combate; la que retreté se reagrupa
4. Reintegrás cuando el primer grupo necesita retirarse
5. Este ciclo reduce las bajas sin reducir el daño causado

### 3. Knights vs Arbalest: El Chase

Los archers intentan kitearte. Si mandás los knights directo hacia adelante, ellos retroceden mientras disparan. La técnica para evitarlo:
- Flanqueás con 2-3 knights por un lado mientras los otros van de frente
- Los archers no pueden retreat en todas las direcciones
- El flanco los atrapa antes de que puedan escapar

---

## Micro de Monjes

Los monjes son las unidades de control más complejas del juego. Ver [Módulo de Monasterio](../unidades-y-contras/unidades-de-monasterio).

Principios básicos:
1. Nunca mandés un monje solo a convertir sin escolta
2. Conversion range: 7-9 tiles base. Mantenelos en ese rango
3. Prioridad de conversión: trebs > onagers > unique units caras > knights
4. Heresy (tech Imperial) = las conversiones matan la unidad convertida si el rival también tiene Heresy

---

## Micro de Siege (Asedio)

### Trebs (Trebuchets)

Los trebs atacan edificios desde distancia. No se mueven mientras disparan (necesitan desempacarse y empacarse).

**Micro básico:**
1. Escoltás siempre los trebs con 3-5 knights o infantería
2. Cuando el rival manda caballería a destruir los trebs: tus knights los interceptan
3. Contra counterfire de trebs: micro de pack/unpack para moverlos antes de que el disparo rival llegue

### Mangonels / Onagers

La mayor amenaza para arqueros en masa.

**Cómo usarlos:**
1. Posicionálos detrás de tu ejército, fuera del rango del melee rival
2. Apuntálos manualmente a la zona más densa del ejército enemigo
3. "Atacar tierra" (ctrl+clic derecho): disparás a un punto del mapa en vez de a una unidad específica → splash damage garantizado

**Cuidado con el friendly fire:** El Onager también daña tus propias unidades. Cuando disparás a tierra, asegurate de que tus unidades no estén en el área de splash.

---

## Caso Práctico 1: Kiting en Acción

Situación: Tenés 10 Arbalest, el rival tiene 6 Knights que cargan hacia vos.

**Sin micro:** Tus arbalest quedan quietos, los knights llegan a melee, y en 20-30 segundos mataron 8-10 arbalest.

**Con micro:**
1. Empezás a retroceder CON EL EJÉRCITO COMPLETO (click en punto detrás de tus posiciones)
2. Al mismo tiempo, los arbalest atacan al knight líder (el más adelantado)
3. Los knights tienen velocidad 1.35 tile/seg; los arbalest se mueven a ~0.96 pero disparan mientras se mueven
4. Cada disparo en el knight líder lo va debilitando
5. Si matás el primer knight antes de que llegue, el segundo tarda 3-4 segundos más en llegar
6. Resultado: matás 3-4 knights antes de que el primero toque a tus arbalest; los 2-3 restantes mueren rápido en melee porque son pocos

---

## Caso Práctico 2: Splitting vs Mangonel

Situación: El rival tiene 2 Mangoneles posicionados detrás de 8 knights. Vos tenés 12 Arbalest y 4 Skirmishers.

**Sin splitting:** Tus 12 arbalest en bola = 1-2 disparos del mangonel matan 6-8 de ellos.

**Con splitting:**
1. Dividís en 2 grupos de 6 arbalest cada uno
2. Los posicionás con 8 tiles de separación (un mangonel no puede atacar a ambos grupos al mismo tiempo)
3. Cada grupo ataca por un flanco
4. Los knights del rival tienen que defender ambos flancos → se dividen → cada grupo tiene menos presión
5. Tus 4 skirms absorben los golpes de los mangoneles si alguno te alcanza

---

## Ejercicios de Práctica

### Ejercicio 1: Kiting Básico (10 min)
1. Partida vs IA en cualquier mapa
2. Construís 10 archers en Feudal
3. Los mandás a enfrentar las unidades de la IA
4. Objetivo: que ningún archer muera sin que mataste al menos 3 unidades enemigas
5. Pista: usás "move back" mientras tus archers están en cooldown de disparo

### Ejercicio 2: Focus Fire Consciente (15 min)
1. Castle Age, 8 knights en campo
2. Cada vez que los mandás a combate, identificás el objetivo más prioritario primero
3. Clic derecho de todos en ese objetivo
4. No pasés al siguiente hasta que el primero está muerto

---

## Cómo Evaluar Tu Progreso

| Habilidad | Básico | Intermedio | Avanzado |
|-----------|--------|-----------|---------|
| Focus fire | Intuitivo | Consciente | Automático |
| Kiting (archers) | No lo hacés | Lo intentás | Ritmo consistente |
| Retreat de dañados | Nunca | A veces | Siempre |
| Splitting vs siege | No | Cuando recordás | Siempre |
| Bajas en combate por intercambio | 40-60% | 20-40% | 10-20% |

---

*Siguiente módulo: [02 - Multi-tasking y APM](./02-multi-tasking-y-apm)*

---
title: "Módulo 02-04: Composiciones de Unidades"
description: "Objetivo: Entender el sistema de counters de AoE2 y construir composiciones de ejército que respondan a lo que el rival juega."
sidebar:
  order: 4
---

**Objetivo:** Entender el sistema de counters de AoE2 y construir composiciones de ejército que respondan a lo que el rival juega.

---

## El Sistema de Counters de AoE2

AoE2 tiene un sistema de piedra-papel-tijera implícito. Cada tipo de unidad tiene un "bonus damage" contra otras. Ignorar el sistema de counters es la causa #1 de derrota en castle age y late game.

### El Triángulo Principal

```
Arqueros ──counteren──► Infantería pesada (MAA, milicia)
    ▲                           |
    |                        counteren
    |                           ▼
Caballería ◄──counteren── Piqueros/Hallebarderos
```

**Simplificado:**
- Arqueros ganan a infantería
- Piqueros ganan a caballería
- Caballería gana a arqueros (llegan cuerpo a cuerpo antes de que los archers disparen suficiente)

**Pero hay más capas:**
- Skirmishers counteren arqueros (bonus damage vs archer class)
- Monjes pueden convertir unidades costosas
- Máquinas de asedio (onagers) son el counter de arqueros en masa y de unidades densas
- Camellos counteren caballería en civs que los tienen

---

## Composiciones Comunes por Edad

### Feudal Age

**Arqueros + Skirmishers (Skirms):**
- Los archers atacan todo
- Los skirms absorben contra-archers del rival y counteren sus archers
- Mezcla económica: archers cuestan gold, skirms solo food + wood

**Scouts + Piqueros:**
- Los scouts hacen el daño económico
- Los piqueros protegen contra counter-scouts del rival

**MAA + Archers:**
- Los MAA absorben daño cuerpo a cuerpo
- Los archers disparan desde atrás
- Composición muy sólida para Feudal tardío

### Castle Age

**Knights + Arbalest (KB):**
- La composición más jugada del meta 2025 en Arabia
- Los knights presionan y absorben daño
- Los arbalest matan todo lo que los knights no pueden (piqueros, otras archers)
- Requiere mucha eco: knights cuestan 60F + 75G, arbalest 45W + 45G

**Unique Unit + soporte:**
- Cambia según la civ
- Franks: Paladines (no tienen UU útil en 1v1)
- Mayans: Eagle Warriors + Arbalest
- Mongols: Mangudai (cavalry archer) + Light Cav

**Camello + Arbalest (Hindustanis, Saracens, Berbers):**
- Los camellos counteren la caballería del rival
- Los arbalest dan daño ranged
- Muy sólido contra civs cavalristas

### Imperial Age

**Paladin + Arbalest:**
- El epítome del late game cavalry + ranged
- Solo civs con Paladin disponible (Franks, Teutons, Spanish, Lithuanians, etc.)

**Hussar + siege + arbalest:**
- Los hussars (light cavalry upgradeados) son el "shield" del ejército
- Protegen trebs y bombardas de unidades enemigas
- Los arbalest dan DPS

**Siege (Onager, Bombard) + infantería:**
- El Siege Onager tiene splash damage masivo
- Mata archers en masa con un golpe
- La infantería protege al onager del cuerpo a cuerpo

---

## Los Counters Explícitos

### Piqueros (Spearman-line)
- **Counteren:** Toda la caballería (scouts, knights, cavalry archers) con +22-32 bonus damage
- **Débiles ante:** Archers, infantería pesada, mangonels

### Skirmishers
- **Counteren:** Arqueros (archers, arbalest, crossbow) con +3-4 bonus damage
- **Débiles ante:** Infantería (MAA), caballería

### Heavy Camel / Camel Rider
- **Counteren:** Toda la caballería (+5-9 bonus damage) y elefantes
- **Débiles ante:** Piqueros, archers, monjes

### Hallebardero (Halberdier)
- El upgrade final de piquero
- **Counteren:** Caballería con +50 bonus damage (¡mata paladines en pocos golpes!)
- **Débiles ante:** Archers

### Bombard Cannon
- **Counteren:** Edificios y infantería densa
- **Débiles ante:** Caballería que llega antes de que disparen

### Trebuchet
- **Counteren:** Edificios (máximo DPS vs edificios del juego)
- **No puede atacar unidades en movimiento** (se desempaca/empaca)

---

## Adaptar tu Composición en Mid-Game

La habilidad clave de los 1100-1300 ELO es adaptar la composición cuando el rival cambia la suya.

### Flujo de Adaptación

1. **Scouts al minuto 20:** ¿Qué produce el rival? (Knights? Archers? Unique Unit?)
2. **Decisión:** ¿Tu composición actual puede ganar ese matchup?
3. Si sí: seguís igual
4. Si no: identificás la unidad counter y empezás a incorporarla

### Ejemplos de Adaptación

**Rival produce Knights:**
- Vos tenés solo archers → incorporás piqueros o camellos
- La ratio correcta: 1 piquero por cada 2-3 knights del rival
- Podés también cambiar al equivalente a knight + more: si tenés Franks, tu Paladin los destroza

**Rival produce Arbalest:**
- Vos tenés Knights → incorporás mangonel (Castle Age siege: el único counter masivo de archers en bola)
- O incorporás Skirmishers para absorber las flechas
- Los Knights son rápidos, pueden flanquear y llegar a los archers antes de que causen demasiado daño

**Rival tiene castillo con Unique Unit:**
- Si es una UU débil en movilidad (Mangudai no, pero Teutonic Knight sí): archers + keeping distance
- Si es una UU fuerte de caballería (Conquistador, War Elephant): piqueros + siege

---

## Los Mangoneles / Catapultas: La Wild Card

Los **Mangonels** (disponibles en Castle Age, 160 wood + 135 gold) son las máquinas de asedio más importantes del Castle Age:

- **Splash damage:** Dañan a TODAS las unidades en un área, incluidas las tuyas
- **Counter de archers:** Un solo Mangonel disparo puede matar 5-6 archers apretados
- **Lento:** 0.6 tiles/seg. Necesita protección de infantería o caballería

**Cuándo producir Mangonel:**
- El rival tiene 8+ arqueros en bola apretada → un mangonel los disuelve
- Necesitás hacer daño a edificios (pero trebs son mejores para eso)

**Counter del Mangonel:**
- Caballería que llega cuerpo a cuerpo (el mangonel tiene ataque muy lento vs moving units)
- Otros mangoneles
- Spear + shield (micromanejo para no estar apretados)

---

## Caso Práctico 1: Lectura de Ejército y Adaptación

Situación: Estás en Castle Age con Knights + Crossbow. Tu explorador ve que el rival tiene 8 Camels + 6 Archers.

**Análisis:**
- Sus Camels counteren tus knights (+9 bonus damage vs cavalry)
- Sus Archers matan tus knights a distancia
- Tu composición está en desventaja

**Adaptación:**
1. Pará de producir knights temporalmente
2. Empezá a producir **Halberdiers** (upgrade de piquero, counter de camellos: los piqueros tienen +22 bonus vs camellos)
3. Tus crossbow ya matan los archers del rival
4. Composición final: Halberdiers + Arbalest vs Camels + Archers = vos ganás

---

## Caso Práctico 2: Mass Archers vs Mass Archers

Situación: Vos y el rival tienen ambos 12 arbalest. ¿Cómo rompes el stalemate?

**Opciones:**
1. **Mangonel:** Un Mangonel bien posicionado mata 4-6 de sus archers. Ellos tienen que separarse o perder unidades.
2. **Upgrade asimétrico:** Si investigaste Bracer (+1 rango) y ellos no, tus archers tienen 1 tile más de rango → les disparás antes de que ellos puedan responder.
3. **Flanqueo con caballería:** 4 knights flanqueando desde el costado pueden diezmar a sus arbalest antes de que se reagrupen.
4. **Patience + trade favorable:** Si tenés más eco, el "turtle" (proteger tu ejército) eventualmente da resultado porque podés reemplazar bajas más rápido.

---

## Errores Comunes

1. **Single-unit composition:** Solo knights, o solo archers, es siempre inferior a una composición mixta. Las debilidades son obvias y fáciles de counteren.
2. **No adaptar cuando el rival cambia:** Ver 8 camellos del rival y seguir produciendo knights es un error clásico de 900-1100 ELO.
3. **Mangoneles sin escolta:** Un mangonel sin protección muere a un knight en 3-4 golpes. Siempre escoltá tus mangoneles.
4. **Ignorar el upgrade de unidades:** Un Cavalier (upgrade de Knight) hace +4 ataque y tiene +40 HP. La diferencia en un ejército de 8 caballos es significativa.
5. **Trebs en campo abierto sin escolta:** Un treb es 0 ataque vs unidades en movimiento. Un solo knight puede destruirlo.

---

## Ejercicio de Práctica

**Objetivo:** Adaptación consciente de composición.

1. Jugá 3 partidas en Castle Age vs IA Difícil
2. En cada partida, antes de construir más ejército (minuto 20-22), mirá qué tiene la IA y decidí conscientemente qué counter agregar
3. Anotá tu composición inicial, la del rival y tu adaptación
4. Evaluá si la adaptación fue correcta por el resultado del próximo combate

---

## Cómo Evaluar Tu Progreso

- **Básico:** Podés nombrar el counter de las 5 unidades más comunes (scouts, knights, archers, MAA, piqueros)
- **Intermedio:** Adaptás tu composición en Castle Age cuando ves el ejército del rival
- **Avanzado:** Anticipa la composición del rival por sus edificios y preparás el counter antes de que ataque

---

*Siguiente módulo: [05 - Casos Prácticos Intermedio](./05-casos-practicos)*

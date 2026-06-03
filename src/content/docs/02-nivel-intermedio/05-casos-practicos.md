---
title: "Módulo 02-05: Casos Prácticos - Nivel Intermedio"
description: "Objetivo: Integrar control de mapa, build orders avanzados y composiciones de unidades en escenarios de partida real."
sidebar:
  order: 5
---

**Objetivo:** Integrar control de mapa, build orders avanzados y composiciones de unidades en escenarios de partida real.

---

## Caso Práctico 1: Archer Rush Vs Walled Fast Castle

### Escenario
Jugás Ethiopians con 19 pop Archer Rush. El rival (Aztecs) hace Fast Castle detrás de palizada perfecta. Al minuto 12 tenés 8 archers en su base pero todos los accesos están cerrados.

### Análisis de la Situación

- Tu build funcionó: saliste en tiempo, tenés 8 archers
- El rival anticipó: está protegido durante la transición
- Tus archers no pueden hacer daño a través de la palizada (pueden atacar la palizada pero es lento)

### Opciones

**Opción A: Presión a la palizada**
Tus archers atacan la palizada. Cada tile de palizada tiene 75 HP y los archers hacen ~3 daño por disparo. Para romper un tile: ~25 disparos = ~87 segundos con 1 archer, ~11 segundos con 8 archers.

*Costo-beneficio:* Si abrís un agujero de 2-3 tiles, podés entrar. Pero en esos 11-20 segundos, ¿el rival no pone más palizada? Sí, probablemente.

**Opción B: Ataque a los aldeanos de los lados**
El rival no walleó todo. Los aldeanos en madera y en minas suelen estar fuera del perímetro de la palizada principal. Mandá los archers a esos puntos.

*Resultado esperado:* Podés matar 1-3 aldeanos en posiciones externas antes de que el rival los retrenga.

**Opción C: Avanzar a Castle Age vos también**
Si el rival hizo FC, en 3-4 minutos tiene Castle Age. Vos podés también click up ahora (ya deberías tener algo de eco para hacerlo). En Castle Age: Crossbow + Ballistics > sus Eagle Warriors si los Aztecas no están bien posicionados.

**Decisión correcta en este caso:** Opción B primero (daño máximo posible con los archers que tenés), luego Opción C (click up para igualar el tier).

---

## Caso Práctico 2: Drush FC que Genera Ventaja Real

### Escenario
Jugás Vikings con Drush FC. Tus 3 milicianos llegaron a la base del rival al minuto 9. El rival tiene solo 2 aldeanos en madera sin escolta. Lograste matar ambos aldeanos antes de que el rival produjera piqueros.

### Qué Esto Significa Económicamente

- 2 aldeanos × 80-100 food de costo = recursos perdidos del rival
- Cada aldeano muerto es ~30 wood/min que el rival pierde para siempre
- En la partida: el rival tiene ~2 minutos menos de madera que vos

### Cómo Aprovechar la Ventaja

1. Retirá los milicianos (ya hicieron su trabajo) y usálos para scouting del centro
2. Tu FC sigue el plan: click up a Castle Age, objetivo minuto 17-18
3. En Castle Age: empezás a producir Knights y más TCs
4. El rival llegará a Castle Age con menos madera → menos granjas → menos aldeanos → menos ejército

### La Regla del Leverage

La ventaja de 2 aldeanos no gana la partida sola. La gana si la **aprovechás** con buenas decisiones en Castle Age. Si llegás a Castle Age y te dormís, el rival se recupera. Si llegás y empezás a presionar con 4-6 knights, la ventaja se convierte en victoria.

---

## Caso Práctico 3: Composición Incorrecta - Reconocerlo y Corregirlo

### Escenario
Estás en Castle Age al minuto 22 con 10 knights y 5 arbalest. El rival tiene 8 Camels + 7 Skirmishers. Acabás de perder tu primer choque (perdiste 4 knights, él perdió 2 camels).

### El Error

Tu composición knight + arbalest pierde contra camel + skirm porque:
- Los Camels tienen bonus vs cavalry: cada golpe hace 9 damage extra a tus knights
- Los Skirms tienen 6 bonus damage vs archers (tus arbalest)
- Estás siendo counteren en ambas líneas

### La Corrección

1. **No atacar de nuevo** hasta que tengas la composición correcta
2. **Pará la producción de knights.** Temporalmente.
3. **Empezá a producir Hallebarderos** (Barracks → Spear → Pikeman → Halberdier)
   - Los Hallebardiers tienen +50 bonus damage vs cavalry Y +22 vs camellos
   - Cuestan solo 35 food + 25 wood (sin gold)
4. **Seguí con los arbalest,** pero micro: los Skirmishers del rival mueren fácil a Hallebarderos
5. Composición correcta: **Hallebardier + Arbalest vs Camel + Skirm = vos ganás**

### Tiempo de Corrección

Producir 8 Hallebardiers desde 2 cuarteles: ~3-4 minutos. Durante ese tiempo, no exponés tu ejército. Reconstruís la posición y atacás cuando la composición sea favorable.

---

## Caso Práctico 4: Control de Mapa con Economía Expandida

### Escenario
Estás al minuto 25, Castle Age. Tu base tiene 30 aldeanos. El rival no ha atacado. Hay una mina de oro grande en el centro del mapa. ¿Cómo la explotás?

### Paso a Paso

1. **Evaluá el riesgo:** ¿El rival tiene knights que podrían matar tus aldeanos en las minas? ¿Tenés visión del centro?

2. **Preparación:** Construís una Guard Tower (150 stone, castle age upgrade disponible con University → Fortified Tower) cerca de la mina. La torre:
   - Disuade ataques de pequeños grupos de caballería
   - Da visión del área
   - Cuesta 150 stone pero se paga con el oro extra

3. **Envío de aldeanos:** 4-5 aldeanos con escolta de 2-3 knights. Los knights se quedan en el área hasta que la mina esté en uso y la torre esté construida.

4. **Resultado:** 4 aldeanos × 27 gold/min = ~108 extra gold/min. En 10 minutos = 1080 gold extra = ~14 knights adicionales que el rival no puede matchear.

---

## Síntesis: Las Decisiones del Nivel Intermedio

### Árbol de Decisión en Castle Age

```
¿Qué produce el rival?
│
├── Cavalry (knights, camels) → Piqueros/Halberdiers + siege
├── Archers (arbalest, CA) → Cavalry rush + mangonel
├── Unique Unit de infantería → Archers + distance
├── Unique Unit de caballería → Pikeman + arbalest
└── Nada aún (boom) → Presión inmediata con lo que tenés
```

### Las Tres Preguntas de Cada Turno

Cada 2-3 minutos de Castle Age deberías hacerte:
1. **¿Qué me falta investigar?** (Bloodlines? Iron Casting? Crossbow upgrade?)
2. **¿Cuántos aldeanos tengo y dónde están?** (¿Distribución correcta para mi ejército?)
3. **¿Qué hace el rival y cómo me adapto?** (Chequeá el minimapa y el scouting)

---

## Errores Comunes del Nivel Intermedio (Síntesis)

1. **No wallear correctamente en Feudal:** La ventana del minuto 10-12 es crítica
2. **FC sin defensa:** Llegar a Castle Age con 0 ejército contra alguien que atacó en Feudal
3. **Single-unit composition en Castle Age:** Solo knights o solo archers es predecible y fácil de counteren
4. **No adaptar cuando el rival cambia composición:** El mayor error de 1000-1200 ELO
5. **Ignorar el control de mapa en Castle Age:** Las minas centrales son gold gratuito para quien las toma

---

## Ejercicio Final del Nivel Intermedio

**La Partida de Evaluación:**

1. Jugá una partida en Arabia 1v1 vs IA Difícil con cualquier civ
2. Completá este checklist durante la partida:
   - [ ] Wallé antes del minuto 11
   - [ ] Llegué a Castle Age con plan definido (FC, war, boom)
   - [ ] Identifiqué la composición del rival en Castle Age
   - [ ] Adapté mi composición en consecuencia
   - [ ] Controlé al menos un recurso neutral en Castle Age
   - [ ] No tuve más de 2 minutos de TC idle time total

3. Si completás 5/6 ítems → estás listo para el nivel avanzado

---

*Siguiente nivel: [03 - Nivel Avanzado - Micro-management](../03-nivel-avanzado/01-micro-management)*

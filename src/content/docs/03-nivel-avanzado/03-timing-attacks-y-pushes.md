---
title: "Módulo 03-03: Timing Attacks y Pushes"
description: "Objetivo: Aprender a calcular y ejecutar ataques en el momento exacto de máxima ventaja táctica."
sidebar:
  order: 3
---

**Objetivo:** Aprender a calcular y ejecutar ataques en el momento exacto de máxima ventaja táctica.

---

## Qué es un Timing Attack

Un [timing attack](../recursos/glosario.md#t) es un ataque lanzado en el momento en que el rival está en su punto de mayor vulnerabilidad:
- Durante su transición de edad (no tiene ejército listo)
- Justo antes de que su tecnología crítica esté lista
- Cuando su ejército está en otra parte del mapa (split attack)
- Cuando llega a un umbral de fuerza que el rival no puede matchear aún

Los timings no son azarosos. Son calculados. Y hay ventanas específicas que el meta de 2025 identifica como óptimas.

---

## Los Timings Más Importantes del Meta 2025

### Timing 1: El Scout Rush al Minuto 13-14

**Qué es:** El ataque de scouts llega cuando el rival recién subió a Feudal y aún no tiene piqueros listos.

**Por qué es un timing:** La producción de piqueros tarda 22 segundos + el tiempo de construir el cuartel. Si el rival hizo click up a Feudal al minuto 11:30, llega a Feudal a las 13:00 y su primer piquero sale al 13:30 si ya tenía el cuartel. Pero si no tenía cuartel en Dark Age, su primer piquero sale al 15:00+.

**La ventana:** Entre el minuto 13:00 y 15:00, el rival puede tener 0-2 piqueros. Si llegás con 5-6 scouts, causás daño antes de que pueda defender.

**Contra este timing:** Construir el Barracks en Dark Age (tarde: 5-7 minutos) para tener la opción de producir piqueros inmediatamente al llegar a Feudal.

### Timing 2: El Knight Rush al Minuto 18-20

**Qué es:** Knights llegan a la base del rival mientras él aún está en transición de Feudal → Castle o en los primeros minutos de Castle sin ejército.

**Ventana ideal:** El rival hizo FC (Fast Castle) y acaba de llegar a Castle Age al minuto 17-18. No tiene knights aún (su Stable apenas se está construyendo). Vos llegás con 4-6 knights: él tiene 0-2 piqueros y 0 caballería. Es devastador.

**Cómo ejecutarlo:**
1. Vos también hacés FC pero prioritizás el Stable sobre todo
2. Stable → Bloodlines (15 seg de investigación) → Knight rush
3. Con Bloodlines desde el primer knight, cada knight tiene 160 HP vs 120 sin Bloodlines

**Timing del rival para anticipar:** Si el rival construyó Stable y tiene Bloodlines listo, probablemente tiene sus propios knights. Tu rush llega más tarde de lo esperado si la diferencia es < 2 minutos.

### Timing 3: El Castle Drop al Minuto 18-22

**Qué es:** Construir un Castillo en el territorio del rival (o en el límite) en Castle Age.

**Por qué es poderoso:**
- El Castillo tiene 4800 HP y dispara automáticamente contra todo en rango
- Las flechas del Castillo hacen daño real (3-4 daño x flecha × varias flechas)
- Desde ahí producís tu Unique Unit directamente en territorio enemigo

**Cómo ejecutarlo:**
1. Necesitás 650 stone acumulados antes del Castle Age
2. Enviás 3-4 aldeanos escoltados hacia la base del rival
3. Construís el castillo en una posición que amenace su eco (cerca de sus minas o granjas)
4. El rival tiene que usar Trebs o un ejército grande para destruirlo

**Counter del castle drop:** Tener Trebs listos rápidamente (Trebs disponibles en Castle Age desde el Siege Workshop). 1 Treb puede destruir un Castillo en ~8-10 disparos.

### Timing 4: El Imperial Age Push al Minuto 30-35

**Qué es:** Primer push de Imperial Age con unidades upgradeadas (Paladin, Arbalest, Heavy Siege).

**Por qué es timing:** El upgrade de Knight → Cavalier → Paladin tarda varios minutos. Si vos llegaste a Imperial y tus Knights se upgradean a Paladin mientras el rival aún tiene Cavaliers, tenés una ventana de 2-4 minutos donde tus Paladines son significativamente más fuertes que sus Cavaliers.

---

## Cómo Calcular Tu Propio Timing

### La Fórmula Base

```
Tiempo del timing = Tiempo de llegar a la edad objetivo + Tiempo de producir X unidades + Tiempo de viaje
```

**Ejemplo para Knight Rush al minuto 19:**
- FC: llego a Castle Age al minuto 17
- Stable ya construido: primer knight en 30 seg (min 17:30)
- 4 knights: 30 seg × 4 = 2 minutos desde primer knight → salgo con 4 knights al min ~19:30
- Tiempo de viaje de tu base a la del rival: 60-90 segundos en Arabia
- Llegada: minuto 20:30-21:00

Si tu rival también hizo FC y llega al mismo minuto 17 pero prioriza eco, él tiene knights al minuto 20+. Vos llegás a las 20:30 → él apenas tiene 2-3 knights → vos ganás el primer choque.

---

## Tipos de Push

### Push Directo

Mandás todo tu ejército a la base del rival y atacás los edificios principales. Objetivo: matar el TC y ganar.

**Cuándo:** Cuando tenés ventaja económica sostenida y suficiente ejército para absorber las bajas del asedio.

### El Raid (Incursión)

Mandás unidades rápidas (knights, cavalry archers) a atacar aldeanos del rival sin comprometerte en un asedio completo.

**Objetivo:** Causar bajas económicas sin exponer tu ejército al full counter del rival.

**Cuándo:** Cuando no tenés suficiente ejército para ganar el push directo, pero podés hacer daño económico.

### El Dual Push

Atacás desde dos direcciones simultáneamente. El rival no puede defender ambos frentes a la vez.

**Cómo:** Dividís tu ejército en 2 grupos. Un grupo ataca desde el frente (distracción), el otro flanquea y ataca la eco.

**Cuándo:** Cuando el rival tiene buen walling en un acceso pero el otro está más expuesto.

---

## Caso Práctico 1: Timing Attack Ejecutado Correctamente

Situación: Estás en Castle Age al minuto 18. Tu scouting confirmó que el rival recién llegó a Castle Age también pero no tiene Stable construido aún. Vos tenés 4 Knights listos con Bloodlines.

**Análisis:**
- Rival: 0 knights, 0 piqueros (no tenía cuartel en Feudal visible)
- Vos: 4 Knights con Bloodlines = 160 HP cada uno, 10 attack
- Su respuesta posible: producir milicia o esperar a tener knights

**Acción:**
1. Enviás los 4 knights a su base ahora
2. Durante el viaje (60-90 segundos): seguís produciendo más knights (5to, 6to)
3. Los 4 llegan, atacan aldeanos directamente
4. Él produce milicia/piqueros en emergencia pero tarda 21-30 segundos cada uno
5. En ese tiempo: podés matar 3-5 aldeanos y destruir 1-2 edificios pequeños

**Resultado esperado:** -200 a -300 food de pérdida rival, al menos 1-2 aldenos muertos, potencialmente más daño si no tiene respuesta inmediata.

---

## Caso Práctico 2: El Timing Que Falló

Situación: Intentaste el Knight Rush al minuto 20. Llegaste con 4 knights y el rival tiene 8 piqueros esperando + 2 knights propios.

**¿Qué salió mal?**
1. O llegaste tarde (él tuvo tiempo de prepararse)
2. O él también hizo FC y prioritizó defensa
3. O te perdiste el momento de máxima vulnerabilidad

**Respuesta correcta:**
1. No comprometás los knights en el choque desfavorable
2. Retirás los knights
3. Vas al scouting: ¿por dónde entrar que no tenga 8 piqueros?
4. Esperás a tener 8-10 knights con más upgrades → tu ventaja vuelve

**Regla:** Un timing attack que no funciona no es una derrota. Es información. Retirás, revaluás, y encontrás el nuevo timing.

---

## Errores Comunes

1. **Timing attack sin los recursos acumulados:** Mandás los knights antes de tener suficientes y el rival puede defenderlo. 4 knights no son suficientes contra una base bien defendida; 8 sí.
2. **No scouting antes del timing:** Lanzás el ataque sin saber si el rival tiene la defensa preparada. 30 segundos de scouting evita muchos ataques fallidos.
3. **Push directo cuando el rival tiene más ejército:** Un push sin ventaja numérica o de upgrades pierde. Raidear en vez de pushear cuando estás en desventaja.
4. **Trebs sin escolta en el push:** Mandás trebs a destruir el castillo del rival y él los mata con 3 knights en 15 segundos. Los trebs necesitan siempre escolta.
5. **No reponer ejército durante el push:** Mandás todo al ataque y no producís reemplazos. Cuando tus 8 knights se reducen a 3, no tenés refuerzos.

---

## Ejercicio de Práctica

**Objetivo:** Identificar y ejecutar un timing attack en cada partida.

1. Antes de cada partida, elegí un timing específico a intentar (ej: "Knight rush al minuto 20")
2. Ejecutá el build order que lleva a ese timing
3. Si el timing funcionó: anotá qué te permitió llegar a tiempo
4. Si el timing falló: anotá por qué (llegaste tarde, rival tenía defensa, etc.)

---

## Cómo Evaluar Tu Progreso

- **Básico:** Podés nombrar 3 timings del meta y su ventana de tiempo
- **Intermedio:** Ejecutás al menos 1 timing attack específico por partida
- **Avanzado:** Modificás el timing según lo que el scouting te dice del rival

---

*Siguiente módulo: [04 - Imperial Age y Late Game](./04-imperial-age-y-late-game)*

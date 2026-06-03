---
title: "Módulo 01-03: Economía Balanceada"
description: "Objetivo: Mantener una economía que sostenga el build order sin cuellos de botella en ningún recurso."
sidebar:
  order: 3
---

**Objetivo:** Mantener una economía que sostenga el build order sin cuellos de botella en ningún recurso.

---

## El Concepto de "Eco Balanceada"

Una economía balanceada no significa tener el mismo número de aldeanos en cada recurso. Significa tener **exactamente los aldeanos necesarios para sostener tu producción** en cada recurso, sin sobras ni faltantes.

Ejemplo concreto:
- Un cuartel produciendo MAA continuamente consume 120 food y 40 gold por minuto
- Para eso necesitás: ~4 aldeanos en comida + 2 aldeanos en oro
- Si tenés 8 en comida y 5 en oro para un solo cuartel → exceso que debería estar en madera

El truco es calcular tu consumo por tipo de unidad y ajustar los aldeanos acorde.

---

## Tasas de Consumo por Unidad

| Unidad | Costo | Tiempo de entrenamiento | Consumo por minuto (1 edificio) |
|--------|-------|------------------------|--------------------------------|
| Aldeano | 50 food | 25s | 120 food/min |
| Scout / Light Cav | 60 food | 30s | 120 food/min |
| Arquero | 25 wood + 45 gold | 35s | ~43 wood + 77 gold/min |
| Skirmisher | 25 food + 35 wood | 22s | ~68 food + 95 wood/min |
| MAA | 60 food + 20 gold | 21s | ~171 food + 57 gold/min |
| Piquero (Spear) | 35 wood + 25 food | 22s | ~68 food + 95 wood/min |
| Knight | 60 food + 75 gold | 30s | 120 food + 150 gold/min |

**Dato clave:** Para producir un aldeano cada 25 segundos desde 1 TC, necesitás 120 food/min. Eso requiere ~4 aldeanos en comida. Con 2 TCs: ~8 aldeanos en comida. Con 3 TCs: ~12.

---

## El Balance por Etapa

### Dark Age (0 - click up Feudal)

La prioridad es comida para aldeanos + madera para infraestructura.

**Distribución recomendada (21 pop):**
```
Comida (ovejas + caza + bayas): 10-11 aldeanos
Madera:                          6-7 aldeanos
Oro:                             0-2 aldeanos
Piedra:                          0
```

**Test de balance:** Al hacer click up a Feudal, deberías tener:
- 500+ food acumulada (para el click up)
- 350+ madera (para cuartel + establo en Feudal)
- 0-100 gold (no necesario para scouts)

### Feudal Age con Scouts

```
Comida (granjas + caza): 8-10 aldeanos
Madera:                  6-8 aldeanos
Oro:                     0-2 aldeanos (para transición)
```

**Granjas:** Al llegar a Feudal, construí 3-4 granjas con los aldeanos de madera disponibles. Cada granja cuesta 60 madera y produce ~22 food/min base.

**¿Cuántas granjas para 2 establos?**
- 2 establos produciendo scouts = ~240 food/min
- Necesitás ~8 aldeanos en granjas
- 8 granjas × 60 wood = 480 wood para construirlas

### Feudal Age con Archers

```
Comida:  6-7 aldeanos
Madera:  8-10 aldeanos (los archers consumen madera)
Oro:     4-5 aldeanos (45 gold por archer)
```

**Diferencia con scouts:** Los archers cuestan oro, entonces necesitás más aldeanos en oro y menos en comida.

### Castle Age con Knights

```
Comida:  10-12 aldeanos
Madera:  6-8 aldeanos
Oro:     6-8 aldeanos (75 gold por knight, muy caro)
Piedra:  3-4 aldeanos (para el castillo)
```

---

## Las Granjas: Gestión Sostenida

Las granjas son la base económica del mid y late game. Cada granja:
- Cuesta 60 madera
- Produce ~22 food/min base (sin mejoras)
- Con Horse Collar: ~25 food/min
- Con Heavy Plow: ~28 food/min
- Con Crop Rotation: ~31 food/min

**Requeuing (re-queuing de granjas):**
Cuando una granja se agota, necesitás reconstruirla. Podés hacer esto:
1. Manualmente: seleccionás el aldeano → construís granja en el mismo lugar
2. Con "auto-requeue" de granjas (opción en el Mill): reconstruye sola pero consume madera del banco

**El error de las granjas vacías:** Si no requeués granjas, tus aldeanos quedan inactivos. Una granja dura ~5-8 minutos dependiendo de las mejoras. Ponele atención.

---

## Mercado: El Balance de Emergencia

Si te quedaste muy bajo en un recurso, el Mercado (disponible en Feudal Age) te permite vender sobrante y comprar lo que necesitás.

**Pero hay un costo:**
- Cada compra/venta tiene una comisión del 30%
- El precio cambia con el volumen: cuanto más comprás de lo mismo, más caro se pone

**Cuándo usarlo:** Solo como medida de emergencia (por ejemplo, si necesitás 100 gold para una tecnología crítica y tenés 300 de exceso de madera). No lo uses como sustituto de una buena distribución de aldeanos.

---

## Caso Práctico 1: Cuello de Botella de Madera

Situación: Estás en Castle Age con 35 aldeanos. Tu TC produce aldeanos, tienes 2 establos con knights, pero la madera baja constantemente a 0.

**Diagnóstico:**
- Granjas cuestan 60 madera c/u
- TC adicional costó 275 madera
- 10 aldeanos en granjas × 60 = 600 madera para construirlas
- Pero ¿cuántos en madera actualmente? Si tenés solo 5 → generás ~140 wood/min → no alcanza para el consumo

**Solución:**
1. Mandá 3-4 aldeanos más a madera temporalmente
2. Investigá Double-Bit Axe (si no lo hiciste) → +10-15% eficiencia
3. Investigá Bow Saw en Castle Age → +15% más eficiencia

---

## Caso Práctico 2: Exceso de Oro sin Usar

Situación: Tenés 800 oro acumulado en Castle Age y no lo estás gastando. ¿Por qué es un problema?

**Análisis:**
- Si tenés 800 gold acumulado, significa que tenés demasiados aldeanos en oro para tu ritmo de producción de unidades
- Esos aldeanos extra en oro deberían estar en madera o comida (que probablemente están más bajos)

**Solución:**
- Verificá cuántos aldeanos en oro tenés vs tu consumo real (cuántos knights, archers, etc. producís por minuto)
- Redistribuí el exceso a madera o comida

---

## Errores Comunes

1. **No actualizar la distribución de aldeanos cuando cambia la estrategia:** Si pasás de scouts (sin gold) a knights (con gold), necesitás mover aldeanos a oro inmediatamente.
2. **Dejar granjas agotadas sin reconstructir:** El sonido de granja agotada existe por algo. Atendelo.
3. **Poner demasiados aldeanos en piedra antes de necesitarla:** Si no construís castillo pronto, esos aldeanos son desperdiciados.
4. **No investigar mejoras económicas básicas:** Double-Bit Axe, Horse Collar y Gold Mining son inversiones de 150-200 food/wood que se pagan solas en 3-5 minutos.
5. **Vender recursos en el mercado sin verificar el precio:** Si el precio del oro es muy bajo (por haber vendido mucho), estás perdiendo más recursos de lo que ganás.

---

## Tecnologías Económicas Obligatorias y su Timing

| Tecnología | Edad | Costo | Efecto | Prioridad |
|-----------|------|-------|--------|-----------|
| Double-Bit Axe | Feudal | 100 food | +10% madera | Alta |
| Horse Collar | Feudal | 75 food, 75 wood | +15% granjas | Alta |
| Gold Mining | Feudal | 100 food, 75 wood | +10% oro | Media-Alta |
| Stone Mining | Feudal | 100 food, 75 wood | +10% piedra | Situacional |
| Bow Saw | Castle | 100 food, 150 wood | +15% madera | Alta |
| Heavy Plow | Castle | 125 food, 125 wood | +15% granjas | Alta |
| Gold Shaft Mining | Castle | 200 food, 100 wood | +10% más oro | Media |
| Crop Rotation | Imperial | 250 food, 250 wood | +20% granjas | Alta en late |
| Hand Cart | Imperial | 300 food, 200 wood | +20% todos | Muy alta |

---

## Ejercicio de Práctica

**Duración:** 4 partidas consecutivas vs IA Estándar

**Objetivo por partida:**

1. Partida 1 (Scout rush): Al minuto 15, contar aldeanos en cada recurso y verificar que coincide con la distribución recomendada para scouts.

2. Partida 2 (Archer rush): Misma verificación para distribución de archers.

3. Partida 3 (Fast Castle): Al minuto 18 (en Castle Age), verificar distribución para boom con knights.

4. Partida 4: Elegís el build que mejor ejecutaste e intentás mejorar el timing en 1 minuto.

---

## Cómo Evaluar Tu Progreso

- **Básico:** Nunca te quedás sin ningún recurso por más de 2 minutos
- **Intermedio:** La distribución de aldeanos cambia correctamente al cambiar de estrategia
- **Avanzado:** Podés leer el gráfico de recursos del post-game y explicar cada pico/caída
- **Métrica numérica:** Aldeanos al minuto 25 = objetivo del build ±2 aldeanos

---

*Siguiente módulo: [04 - Árboles Tecnológicos Clave](./04-arboles-tecnologicos-clave)*

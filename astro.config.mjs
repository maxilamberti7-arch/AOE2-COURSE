// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkGlossaryAutolink from './src/plugins/remark-glossary-autolink.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://tuusuario.github.io',
	base: '/aoe2-curso',
	markdown: {
		remarkPlugins: [
			[remarkGlossaryAutolink, { glosarioBase: '/aoe2-curso/recursos/glosario/' }],
		],
	},
	integrations: [
		starlight({
			title: 'AoE2 DE — Curso Completo',
			description: 'De cero a 1800+ ELO en Age of Empires II: Definitive Edition.',
			defaultLocale: 'es',
			locales: {
				root: { label: 'Español', lang: 'es' },
			},
			logo: {
				light: './src/assets/logo-light.svg',
				dark:  './src/assets/logo-dark.svg',
				replacesTitle: false,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/tuusuario/aoe2-curso' },
			],
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'script',
					attrs: { src: '/aoe2-curso/aoe2-app.js', defer: true },
				},
			],
			sidebar: [
				{
					label: '🏰 Fundamentos',
					items: [
						{ label: 'Interfaz y Hotkeys',          slug: '00-fundamentos/01-interfaz-y-hotkeys' },
						{ label: 'Recursos y Economía',         slug: '00-fundamentos/02-recursos-y-economia' },
						{ label: 'Las Cuatro Edades',           slug: '00-fundamentos/03-las-cuatro-edades' },
						{ label: 'Mentalidad y Rutina',         slug: '00-fundamentos/04-mentalidad-y-rutina-de-practica' },
					],
				},
				{
					label: '⚔️ Nivel Básico (→ 1000 ELO)',
					items: [
						{ label: 'Build Order: Scouts Feudal',  slug: '01-nivel-basico/01-build-order-scouts-feudal' },
						{ label: 'Scouting Básico',             slug: '01-nivel-basico/02-scouting-basico' },
						{ label: 'Economía Balanceada',         slug: '01-nivel-basico/03-economia-balanceada' },
						{ label: 'Árboles Tecnológicos Clave',  slug: '01-nivel-basico/04-arboles-tecnologicos-clave' },
						{ label: 'Casos Prácticos',             slug: '01-nivel-basico/05-casos-practicos' },
					],
				},
				{
					label: '🗡️ Nivel Intermedio (1000-1400)',
					items: [
						{ label: 'Archers, MAA y Drush',        slug: '02-nivel-intermedio/01-build-orders-archers-maa-drush' },
						{ label: 'Control de Mapa y Walling',   slug: '02-nivel-intermedio/02-control-de-mapa-y-walling' },
						{ label: 'Transición a Castle Age',     slug: '02-nivel-intermedio/03-transicion-a-castle-age' },
						{ label: 'Composiciones de Unidades',   slug: '02-nivel-intermedio/04-composiciones-de-unidades' },
						{ label: 'Casos Prácticos',             slug: '02-nivel-intermedio/05-casos-practicos' },
					],
				},
				{
					label: '🏹 Nivel Avanzado (1400-1700)',
					items: [
						{ label: 'Micro-management',            slug: '03-nivel-avanzado/01-micro-management' },
						{ label: 'Multi-tasking y APM',         slug: '03-nivel-avanzado/02-multi-tasking-y-apm' },
						{ label: 'Timing Attacks y Pushes',     slug: '03-nivel-avanzado/03-timing-attacks-y-pushes' },
						{ label: 'Imperial Age y Late Game',    slug: '03-nivel-avanzado/04-imperial-age-y-late-game' },
						{ label: 'Casos Prácticos',             slug: '03-nivel-avanzado/05-casos-practicos' },
					],
				},
				{
					label: '👑 Nivel Experto (1700+ ELO)',
					items: [
						{ label: 'Lectura de Partida',          slug: '04-nivel-experto/01-lectura-de-partida-y-adaptacion' },
						{ label: 'Meta Builds por Civ',         slug: '04-nivel-experto/02-meta-builds-por-civilizacion' },
						{ label: 'Mapas: Arena, Agua, Nomad',   slug: '04-nivel-experto/03-mapas-especificos-arena-agua-nomad' },
						{ label: 'Análisis de Replays Pro',     slug: '04-nivel-experto/04-analisis-de-replays-pro' },
					],
				},
				{
					label: '🛡️ Civilizaciones',
					items: [
						{ label: 'Tier List y Cómo Elegir',     slug: 'civilizaciones' },
						{
							label: 'S Tier',
							collapsed: true,
							items: [
								{ label: 'Franks',      slug: 'civilizaciones/franks' },
								{ label: 'Mayans',      slug: 'civilizaciones/mayans' },
								{ label: 'Mongols',     slug: 'civilizaciones/mongols' },
								{ label: 'Lithuanians', slug: 'civilizaciones/lithuanians' },
								{ label: 'Malians',     slug: 'civilizaciones/malians' },
								{ label: 'Gurjaras',    slug: 'civilizaciones/gurjaras' },
							],
						},
						{
							label: 'A Tier',
							collapsed: true,
							items: [
								{ label: 'Chinese',     slug: 'civilizaciones/chinese' },
								{ label: 'Ethiopians',  slug: 'civilizaciones/ethiopians' },
								{ label: 'Britons',     slug: 'civilizaciones/britons' },
								{ label: 'Aztecs',      slug: 'civilizaciones/aztecs' },
								{ label: 'Poles',       slug: 'civilizaciones/poles' },
								{ label: 'Berbers',     slug: 'civilizaciones/berbers' },
								{ label: 'Incas',       slug: 'civilizaciones/incas' },
								{ label: 'Japanese',    slug: 'civilizaciones/japanese' },
								{ label: 'Bohemians',   slug: 'civilizaciones/bohemians' },
							],
						},
						{
							label: 'B / C Tier',
							collapsed: true,
							items: [
								{ label: 'Vikings',     slug: 'civilizaciones/vikings' },
								{ label: 'Persians',    slug: 'civilizaciones/persians' },
								{ label: 'Saracens',    slug: 'civilizaciones/saracens' },
								{ label: 'Teutons',     slug: 'civilizaciones/teutons' },
								{ label: 'Celts',       slug: 'civilizaciones/celts' },
								{ label: 'Armenians',   slug: 'civilizaciones/armenians' },
								{ label: 'Romans',      slug: 'civilizaciones/romans' },
								{ label: 'Burgundians', slug: 'civilizaciones/burgundians' },
								{ label: 'Sicilians',   slug: 'civilizaciones/sicilians' },
								{ label: 'Khmer',       slug: 'civilizaciones/khmer' },
								{ label: 'Vietnamese',  slug: 'civilizaciones/vietnamese' },
								{ label: 'Koreans',     slug: 'civilizaciones/koreans' },
								{ label: 'Italians',    slug: 'civilizaciones/italians' },
								{ label: 'Portuguese',  slug: 'civilizaciones/portuguese' },
								{ label: 'Spanish',     slug: 'civilizaciones/spanish' },
								{ label: 'Byzantines',  slug: 'civilizaciones/byzantines' },
								{ label: 'Turks',       slug: 'civilizaciones/turks' },
								{ label: 'Cumans',      slug: 'civilizaciones/cumans' },
								{ label: 'Tatars',      slug: 'civilizaciones/tatars' },
								{ label: 'Bulgarians',  slug: 'civilizaciones/bulgarians' },
								{ label: 'Slavs',       slug: 'civilizaciones/slavs' },
								{ label: 'Malay',       slug: 'civilizaciones/malay' },
								{ label: 'Burmese',     slug: 'civilizaciones/burmese' },
								{ label: 'Georgians',   slug: 'civilizaciones/georgians' },
								{ label: 'Hindustani',  slug: 'civilizaciones/hindustani' },
								{ label: 'Dravidians',  slug: 'civilizaciones/dravidians' },
								{ label: 'Bengalis',    slug: 'civilizaciones/bengalis' },
							],
						},
					],
				},
				{
					label: '⚡ Unidades y Contras',
					items: [
						{ label: 'Matriz de Counters',          slug: 'unidades-y-contras' },
						{ label: 'Infantería',                  slug: 'unidades-y-contras/infanteria' },
						{ label: 'Arqueros',                    slug: 'unidades-y-contras/arqueros' },
						{ label: 'Caballería',                  slug: 'unidades-y-contras/caballeria' },
						{ label: 'Camellos y Elefantes',        slug: 'unidades-y-contras/camellos-y-elefantes' },
						{ label: 'Máquinas de Asedio',          slug: 'unidades-y-contras/maquinas-de-asedio' },
						{ label: 'Unidades de Monasterio',      slug: 'unidades-y-contras/unidades-de-monasterio' },
						{ label: 'Naval',                       slug: 'unidades-y-contras/naval' },
					],
				},
				{
					label: '🔬 Tecnologías',
					items: [
						{ label: 'Árbol Económico',             slug: 'tecnologias/arbol-economico' },
						{ label: 'Árbol Militar',               slug: 'tecnologias/arbol-militar' },
						{ label: 'Orden de Prioridad',          slug: 'tecnologias/orden-de-prioridad' },
					],
				},
				{
					label: '📚 Recursos',
					items: [
						{ label: 'Canales y Creadores',         slug: 'recursos/canales-y-creadores' },
						{ label: 'Herramientas',                slug: 'recursos/herramientas' },
						{ label: 'Glosario',                    slug: 'recursos/glosario' },
					],
				},
			],
		}),
	],
});

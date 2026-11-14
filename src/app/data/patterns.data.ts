import { Pattern } from '../models/pattern.model';

/**
 * Catálogo estático de patrones de arquitectura de software.
 */
export const PATTERNS_DATA: Pattern[] = [
  {
    id: 'clean-architecture',
    nombre: 'Clean Architecture',
    categoria: 'Patrones de Dominio',
    resumen: 'Aísla las reglas de negocio en el núcleo y orienta las dependencias hacia adentro.',
    descripcion:
      'Propuesta por Robert C. Martin, Clean Architecture organiza el sistema en círculos concéntricos donde la capa de dominio (entidades y casos de uso) es totalmente independiente de frameworks, bases de datos e interfaces de usuario. La regla de dependencia estipula que el código de una capa interna jamás debe conocer detalles de una capa externa.',
    ventajas: [
      'Alta testabilidad sin depender de componentes externos',
      'Independencia total de frameworks y tecnologías periféricas',
      'Facilidad para migrar infraestructura (base de datos, UI, APIs)',
      'Claridad en las reglas de negocio del dominio',
    ],
    desventajas: [
      'Curva de aprendizaje pronunciada y sobreingeniería en sistemas pequeños',
      'Gran cantidad de interfaces y clases intermedias (DTOs, mappers)',
      'Mayor tiempo inicial de desarrollo y estructuración',
    ],
    cuandoUsarlo:
      'Ideal en aplicaciones empresariales medianas o grandes con lógica de negocio compleja, ciclos de vida prolongados y equipos distribuidos.',
    proyectoRelacionado: {
      nombre: 'Taller Clean Architecture',
      url: 'https://github.com/JSebasAM/Angular-Clean-Architecture',
    },
  },
  {
    id: 'microfrontends',
    nombre: 'Microfrontends',
    categoria: 'Arquitectura Web',
    resumen: 'Descompone una aplicación frontend monolítica en módulos independientes y autónomos.',
    descripcion:
      'Extiende el concepto de microservicios al navegador, permitiendo que diferentes equipos desarrollen, prueben y desplieguen fragmentos de la interfaz de usuario de manera desacoplada utilizando Module Federation, iframes o Web Components.',
    ventajas: [
      'Despliegues autónomos e independientes por equipo',
      'Escalabilidad organizacional en equipos frontend grandes',
      'Flexibilidad tecnológica para modernizar la app incrementalmente',
    ],
    desventajas: [
      'Aumento en la sobrecarga de descarga (dependencias duplicadas si no se comparten)',
      'Complejidad en la comunicación entre microfrontends y sincronización de estado',
      'Dificultad para mantener una experiencia de diseño y estilos homogénea',
    ],
    cuandoUsarlo:
      'Recomendado en portales masivos con múltiples equipos multifuncionales trabajando en distintas áreas de negocio de un mismo producto web.',
    proyectoRelacionado: {
      nombre: 'Taller Microfrontends & Microservices',
      url: 'https://github.com/stevendz2002/Uceva-Angular-NodeJS-Taller-Microfrontends-Microservices',
    },
  },
  {
    id: 'client-server',
    nombre: 'Cliente - Servidor',
    categoria: 'Sistemas Distribuidos',
    resumen:
      'Separa la presentación y experiencia de usuario del procesamiento centralizado y almacenamiento.',
    descripcion:
      'Modelo fundacional en el que los clientes inician solicitudes de recursos o servicios y uno o más servidores centralizados responden procesando la lógica de negocio y persistiendo los datos.',
    ventajas: [
      'Centralización de políticas de seguridad, validación y almacenamiento',
      'Mantenimiento independiente del cliente y del servidor',
      'Capacidad de atender múltiples clientes heterogéneos (Web, Móvil, Desktop)',
    ],
    desventajas: [
      'El servidor puede convertirse en un cuello de botella o punto único de fallo',
      'Latencia de red en cada interacción de datos',
      'Requiere gestión de concurrencia y escalabilidad en backend',
    ],
    cuandoUsarlo:
      'Apropiado para la inmensa mayoría de aplicaciones web y móviles donde se requiere consistencia de datos y control centralizado.',
    proyectoRelacionado: {
      nombre: 'Taller Cliente - Servidor (Angular + Node.js)',
      url: 'https://github.com/JSebasAM/taller-4-angular-nodejs-taller-client-server',
    },
  },
  {
    id: 'ssg',
    nombre: 'Static Site Generation (SSG)',
    categoria: 'Arquitectura Web',
    resumen:
      'Pre-renderiza todas las páginas HTML y assets en tiempo de compilación para máxima velocidad.',
    descripcion:
      'Los generadores de sitios estáticos compilan plantillas y fuentes de datos (Markdown, APIs) en archivos estáticos puros (HTML, CSS, JS). Al desplegarse en CDNs, las solicitudes se responden sin requerir ejecución en servidor en tiempo de ejecución.',
    ventajas: [
      'Velocidad de carga inmediata (TTFB mínimo) servida desde CDN perimetral',
      'Costos de alojamiento mínimos o nulos (GitHub Pages, Cloudflare Pages)',
      'Superficie de ataque prácticamente nula al no haber servidor dinámico',
      'Excelente indexación en motores de búsqueda (SEO)',
    ],
    desventajas: [
      'Los builds se vuelven lentos cuando el sitio tiene miles de páginas',
      'No es adecuado para datos en tiempo real sin hidratación en cliente',
      'Requiere recompilar todo el sitio para actualizar contenido estático',
    ],
    cuandoUsarlo:
      'Perfecto para documentación, portafolios, blogs, sitios de marketing y catálogos con contenido que cambia con baja frecuencia.',
    proyectoRelacionado: {
      nombre: 'Taller Astro SSG + Angular SPA',
      url: 'https://github.com/JSebasAM/taller-4-astro-angular-ssg-spa',
    },
  },
  {
    id: 'spa',
    nombre: 'Single Page Application (SPA)',
    categoria: 'Arquitectura Web',
    resumen:
      'Carga un único documento HTML y reescribe dinámicamente la vista según interactúa el usuario.',
    descripcion:
      'Las aplicaciones de página única ejecutan el enrutamiento y la renderización en el navegador mediante JavaScript (Angular, React, Vue), comunicándose con APIs REST o GraphQL de forma asíncrona sin recargar la página completa.',
    ventajas: [
      'Experiencia de usuario fluida y reactiva tipo aplicación de escritorio',
      'Transiciones y animaciones instantáneas entre vistas',
      'Reutilización de una misma API para múltiples clientes',
    ],
    desventajas: [
      'Carga inicial más pesada (bundle JS inicial)',
      'Complejidad para SEO si no se complementa con prerendering o SSR',
      'Requiere configuración especial de fallback (o HashLocation) en servidores estáticos',
    ],
    cuandoUsarlo:
      'Indicado para paneles de administración, herramientas SaaS interactivas y aplicaciones donde la fluidez interactiva prima sobre el SEO.',
    proyectoRelacionado: {
      nombre: 'Pipelines Hash Strategy (PokéAPI)',
      url: 'https://github.com/JSebasAM/pipelines-hash-strategy',
    },
  },
  {
    id: 'mvc',
    nombre: 'Model - View - Controller (MVC)',
    categoria: 'Interacción y Presentación',
    resumen:
      'Divide la interfaz gráfica en modelo de datos, presentación visual y controlador mediador.',
    descripcion:
      'Patrón clásico de interfaz de usuario donde el Modelo encapsula el estado y las reglas, la Vista presenta la interfaz al usuario, y el Controlador procesa las entradas del usuario actualizando el modelo y seleccionando la vista.',
    ventajas: [
      'Separación clara entre la representación visual y la lógica de negocio',
      'Facilidad para crear múltiples vistas sobre el mismo modelo de datos',
      'Patrón ampliamente conocido y estandarizado en múltiples frameworks',
    ],
    desventajas: [
      'Riesgo de controladores masivos ("Fat Controller")',
      'Acoplamiento implícito entre vistas y modelos en variantes tradicionales',
      'Sobrecarga en interfaces sencillas',
    ],
    cuandoUsarlo:
      'Apropiado en aplicaciones web tradicionales basadas en servidor (Spring MVC, Django, Rails, ASP.NET MVC).',
  },
  {
    id: 'hexagonal',
    nombre: 'Arquitectura Hexagonal (Puertos y Adaptadores)',
    categoria: 'Patrones de Dominio',
    resumen:
      'Aísla la lógica central comunicándola con el mundo exterior mediante puertos y adaptadores.',
    descripcion:
      'Creado por Alistair Cockburn, propone que el núcleo de la aplicación interactúe con el exterior a través de puertos (interfaces) y adaptadores (implementaciones concretas). Los adaptadores primarios conducen la app (UI, REST), y los secundarios son conducidos (bases de datos, colas).',
    ventajas: [
      'Reemplazo trivial de infraestructura sin tocar la lógica de negocio',
      'Testeo exhaustivo del núcleo mediante dobles de prueba (mocks/stubs)',
      'Dominio puro libre de anotaciones o acoplamientos técnicos',
    ],
    desventajas: [
      'Mayor número de interfaces y mapeadores entre capas',
      'Complejidad conceptual inicial para desarrolladores noveles',
    ],
    cuandoUsarlo:
      'Ideal en microservicios y sistemas empresariales donde se prevé cambiar tecnologías de base de datos, mensajería o frameworks de API.',
  },
  {
    id: 'microservices',
    nombre: 'Microservicios',
    categoria: 'Sistemas Distribuidos',
    resumen:
      'Estructura el sistema como un conjunto de servicios autónomos desplegables independientemente.',
    descripcion:
      'Cada microservicio implementa una capacidad de negocio delimitada (Bounded Context), posee su propia base de datos y se comunica con otros mediante protocolos ligeros (HTTP/REST, gRPC o colas de mensajería).',
    ventajas: [
      'Despliegues continuos e independientes sin afectar a todo el sistema',
      'Escalabilidad granular por servicio según demanda',
      'Diversidad tecnológica según la necesidad de cada módulo',
      'Aislamiento de fallos parciales',
    ],
    desventajas: [
      'Alta complejidad operativa (observabilidad, rastreo distribuido, orquestación)',
      'Consistencia eventual y transacciones distribuidas complejas (Saga)',
      'Sobrecarga de latencia de red en llamadas interservicio',
    ],
    cuandoUsarlo:
      'Recomendado para sistemas de gran envergadura con organizaciones maduras en DevOps y múltiples equipos autónomos.',
  },
  {
    id: 'event-driven',
    nombre: 'Arquitectura Orientada a Eventos (EDA)',
    categoria: 'Sistemas Distribuidos',
    resumen:
      'Coordina componentes mediante la producción, detección y consumo asíncrono de eventos.',
    descripcion:
      'Los emisores publican eventos que reflejan cambios de estado sin conocer quién los consumirá. Los consumidores reaccionan asíncronamente procesando el evento a través de intermediarios como Kafka, RabbitMQ o EventBridge.',
    ventajas: [
      'Desacoplamiento temporal y espacial total entre emisor y receptor',
      'Alta capacidad de respuesta y absorción de picos de carga (backpressure)',
      'Escalabilidad elástica de consumidores',
    ],
    desventajas: [
      'Dificultad de trazabilidad y depuración de flujos distribuidos',
      'Manejo de eventos duplicados (idempotencia requerida)',
      'Consistencia eventual inherente',
    ],
    cuandoUsarlo:
      'Esencial en procesamiento de telemetría, IoT, plataformas financieras, comercio electrónico y sistemas reactivos de alto volumen.',
  },
  {
    id: 'layered',
    nombre: 'Arquitectura en Capas (Layered / N-Tier)',
    categoria: 'Estructural',
    resumen:
      'Organiza el código en capas jerárquicas con responsabilidades específicas y unidireccionales.',
    descripcion:
      'Patrón arquitectónico más extendido. Organiza la aplicación en capas horizontales estándar: Presentación, Aplicación, Dominio y Persistencia/Infraestructura. Cada capa solo puede comunicarse con la capa inmediatamente inferior.',
    ventajas: [
      'Modelo intuitivo y natural de entender para la mayoría de programadores',
      'Separación clara de responsabilidades por nivel de abstracción',
      'Estandarización sencilla en equipos de cualquier nivel',
    ],
    desventajas: [
      'Tendencia al antipatrón "Sinkhole" donde las capas intermedias solo delegan',
      'Monolitos difíciles de particionar con el paso del tiempo',
      'Riesgo de acoplamiento estrecho a la base de datos',
    ],
    cuandoUsarlo:
      'Ideal para la mayoría de aplicaciones de negocio estándar, prototipos rápidos y sistemas monolíticos bien ordenados.',
  },
];

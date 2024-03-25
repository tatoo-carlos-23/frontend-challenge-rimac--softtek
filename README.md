# RETO TECNICO - RIMAC -- SOFTTEK [Frontend Challenge]

## Descripcion:

Desarrollo de maquetacion de figma y consumo de api rest haciendo uso de fecth.

### Inicar

1.  Instalar los paquetes: npm install
2.  Levantar servidor: npm run start

## Link de la aplicacion.

https://challenge-rimac-softtek-cwach.vercel.app/

#### Credenciales:

    - Documento: 87654321
    - Celular: 987654321

### La estructura de archivos cuenta con 4 directorios:

1.  [APP]: Aqui permite crear 3 directorioa, uno core para guardar los store, model, interfaces, tipos, utils que sean necesarios.
2.  [ASSETS]: Aqui se almacenan las imagenes, svgs, y estilos si lo require.
3.  [LIBRARY]: Esta carperta simula una libreria externa de componente, ya sea input, select, botones.
4.  [STYLES]: Se almacenan estilos globales de la aplicacion ya sean colores, clases genericas, tipos de letra, etc.

##### Se ha hecho uso de la api de google para obtener un tipo de fuente y algunos iconos que se requerian par algunos componentes.

### Librerias utilziadas.

1. Redux toolkit para manejar el estado global de la aplicacion.
2. React router para manejar diferentes rutas
3. Sass.
4. Jest para aplicar test a algunos componentes, reduc, hooks.

### Resumen

- La aplicacion cuenta con de rutas, la principal que se necesitan credenciales, y la ruta /dashboar en esta le permite seleccionar el plan, para este entonces los datos del usuario obtenido se almacenan en redux para mantener el estado.

- Los datos del plan seleccionado tambien se almacenan en redux, para poder visualizarlos en la vista de resumen, y cada vez que se regresaa la pagina principal, los datos deredux se eliminan.

# Advent Calendar React

Este proyecto es una aplicación de calendario de adviento desarrollada con React. Permite a los usuarios abrir una puerta diferente cada día de diciembre hasta Navidad, mostrando imágenes y sonidos personalizados.

## Características
- Interfaz interactiva con puertas numeradas del 1 al 24.
- Cada puerta revela una imagen y puede reproducir un sonido.
- Diseño responsivo y atractivo.
- Fácil de personalizar imágenes y sonidos.

## Estructura del proyecto
```
public/
  favicon.ico
  index.html
  manifest.json
  robots.txt
  sounds/
	 sound.mp3
src/
  App.js
  App.css
  AppStyles.js
  door.js
  doorStyles.js
  helpers.js
  index.js
  index.css
  img/
	 calendar_backdrop.webp
	 door_backdrop.webp
	 doors/
		1.webp
		...
		24.webp
```

## Instalación
1. Clona el repositorio:
	```bash
	git clone https://github.com/Jorgerzm/AdventCalendarReact.git
	```
2. Instala las dependencias:
	```bash
	npm install
	```
3. Inicia la aplicación:
	```bash
	npm start
	```

La aplicación estará disponible en `http://localhost:3000`.

## Personalización
- Para cambiar las imágenes de las puertas, reemplaza los archivos en `src/img/doors/`.
- Para cambiar el sonido, reemplaza el archivo en `public/sounds/sound.mp3`.

## Scripts disponibles
- `npm start`: Inicia la aplicación en modo desarrollo.
- `npm test`: Ejecuta los tests.
- `npm run build`: Genera una versión de producción.

## Licencia
Este proyecto está bajo la licencia MIT.

import Door1 from "./img/doors/1.jpg";
import Door2 from "./img/doors/2.jpg";
import Door3 from "./img/doors/3.jpg";
import Door4 from "./img/doors/4.jpg";
import Door5 from "./img/doors/5.jpg";
import Door6 from "./img/doors/6.jpg";
import Door7 from "./img/doors/7.jpg";
import Door8 from "./img/doors/8.jpg";
import Door9 from "./img/doors/9.jpg";
import Door10 from "./img/doors/10.jpg";

const doorImages = [Door1, Door2, Door3, Door4, Door5, Door6, Door7, Door8, Door9, Door10];

const sorpresas = [
  { type: "frase", text: "🎄 La Navidad no es una estación, es un sentimiento." },
  { type: "frase", text: "✨ La Navidad no es una fecha, es un estado de ánimo." },
  { type: "canción", text: "https://www.youtube.com/watch?v=ZeyHl1tQeaQ" }, 
  { type: "reto", text: "🎨 Haz un dibujo rápido de un muñeco de nieve." },
  { type: "chiste", text: "⛄ ¿Qué desayunan los muñecos de nieve? ¡Copos de nieve!" },
  { type: "frase", text: "🌟 La magia de la Navidad está en tu corazón." },
  { type: "canción", text: "https://www.youtube.com/watch?v=E8gmARGvPlI" },
  { type: "reto", text: "📸 Hazte una foto con algo rojo y verde." },
  { type: "chiste", text: "🦌 ¿Cómo se llama un reno maleducado? ¡Reno-educado!" },
  { type: "frase", text: "🎁 Lo importante no son los regalos bajo el árbol, sino las personas a su alrededor." },
  { type: "canción", text: "https://www.youtube.com/watch?v=xMtuVP8Mj4o" },
  { type: "reto", text: "💌 Escribe un mensaje navideño a alguien que aprecies." },
  { type: "chiste", text: "🎄 ¿Por qué Papá Noel nunca se pone enfermo? Porque tiene seguro de elfos." },
  { type: "frase", text: "🔥 La Navidad agita una varita mágica sobre el mundo." },
  { type: "canción", text: "https://www.youtube.com/watch?v=AN_R4pR1hck" },
  { type: "reto", text: "🍪 Prepara una galleta o snack navideño." },
  { type: "chiste", text: "🚗 ¿Qué coche conducen los elfos? ¡Un Toy-ota!" },
  { type: "frase", text: "🎶 La mejor forma de contagiar el espíritu navideño es cantando en voz alta." },
  { type: "canción", text: "https://www.youtube.com/watch?v=kPa7bsKwL-c" }, 
  { type: "reto", text: "🎬 Mira una película navideña clásica." },
  { type: "chiste", text: "❄️ ¿Qué llevan los muñecos de nieve en la cabeza? ¡Copos!" },
  { type: "frase", text: "💫 La paz en la tierra llegará cuando vivamos la Navidad cada día." },
  { type: "canción", text: "https://open.spotify.com/track/0lYBSQXN6rCTvUZvg9S0lU" }, 
  { type: "reto", text: "🥂 Haz un brindis por el nuevo año que se acerca." }
];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const sorpresasBarajadas = shuffle([...sorpresas]);

export const hatchArray = Array.from({ length: 24 }).map((_, index) => {
  const hoy = new Date().getDate(); 
  const img = doorImages[index % doorImages.length]; // reutiliza imágenes
  const sorpresa = sorpresasBarajadas[index % sorpresasBarajadas.length];

  return {
    id: `hatch-${index + 1}`,
    nr: index + 1,
    img,
    type: sorpresa.type,
    text: sorpresa.text,
    open: index + 1 <= hoy
  };
});

export const createCalendar = () => shuffle([...hatchArray]);
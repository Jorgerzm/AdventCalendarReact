import { StyledDoor } from "./doorStyles";

const Door = ({ doorData: { id, nr, img, open, type, text }, handleClick }) => {
  const playSound = () => {
    const audio = new Audio('/sounds/sound.mp3');
    audio.play();
  };

  const handleDoorClick = () => {
    playSound();
    handleClick(id);
  };

  return (
    <StyledDoor background={img} onClick={handleDoorClick}>
      <div className={open ? "front open" : "front"}>
        <p>{nr}</p>
      </div>

      <div className={open ? "back open" : "back"}>
        {open && (
          <>
            {type === "frase" && <p>{text}</p>}
            {type === "canción" && <a href={text} target="_blank" rel="noopener noreferrer">🎵 Escucha la canción</a>}
            {type === "reto" && <p>📝 {text}</p>}
            {type === "chiste" && <p>😂 {text}</p>}
          </>
        )}
      </div>
    </StyledDoor>
  );
};

export default Door;

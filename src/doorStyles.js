import styled from "styled-components";
import doorBackdrop from "./img/door_backdrop.jpg";
import snowflakes from "./img/snowflakes.png";


export const StyledDoor = styled.div`
  padding-top: 100%;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
  transform: scale(1.05);
}

  /* Contenedor principal con perspectiva */
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.8s;
    transform-style: preserve-3d;
    border-radius: 20px;
    border: 3px solid #fff;
    box-sizing: border-box;
    overflow: hidden;
    perspective: 1000px;

    /* Efecto marco madera */
    background: linear-gradient(145deg, #4a2c2a, #2d1816);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6),
      inset 0 0 15px rgba(255, 255, 255, 0.15);
  }

  /* Cara frontal */
  .front {
    background: center / cover url(${(props) => props.background});
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Mountains of Christmas", cursive;
      color: #fff;
      padding: 20px;
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.7);
      font-weight: 700;
      font-size: 4rem;
      text-shadow: 2px 2px 8px #000;
    }

    &.open {
      transform: rotateY(180deg);
    }

    /* Nieve animada */
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: url(${snowflakes}) repeat;
      opacity: 0.2;
      animation: snow 15s linear infinite;
      border-radius: 20px;
    }
  }

  /* Cara trasera */
  .back {
    position: absolute;
    background: center / cover url(${doorBackdrop});
    top: 0px;
    left: 0px;
    z-index: 1;
    transform: rotateY(180deg);
    border-radius: 20px;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);

    p {
      font-family: "Dancing Script", cursive;
      color: #fff;
      padding: 15px;
      font-size: 1.4rem;
      text-align: center;
      text-shadow: 1px 1px 4px #000;
    }

    &.open {
      z-index: 2;
      transform: rotateY(0deg);
    }
  }

  /* Animación nieve */
  @keyframes snow {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 1000px;
    }
  }
`;
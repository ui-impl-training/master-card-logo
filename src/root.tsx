import { h } from "preact";
import { styled } from "goober";
import { LightenDarkenColor } from "./helper/lightenDarkenColor";

const EASING = "cubic-bezier(0.52, 0.01, 0.16, 1)";
const RED = "#e40019";
const ORANGE = "#f39019";
const DARK = "#1d1d1b";
const LIGHT = "#f5f2ed";
const PART_SIZE = 25;
const SECOND_DELAY = "1.666s";
const SECOND_DUR = "1.5s";

interface Props {
  className?: string;
}

const Component = (props: Props) => (
  <div className={props.className}>
    <div class="mastercard">
      <div class="mastercard__part red"></div>
      <div class="mastercard__part orange"></div>
      <div class="mastercard__copy">
        <span>mastercard</span>
      </div>
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 100vh;
  background-color: ${DARK};
  font-family: "Poppins", sans-serif;
  color: ${LIGHT};
  letter-spacing: 0.1em;

  & > .mastercard {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(60px);
    animation: mastercard ${SECOND_DUR} ${SECOND_DELAY} ${EASING};
    animation-fill-mode: forwards;
    & > .mastercard__part {
      will-change: transform;
      width: ${PART_SIZE}px;
      height: ${PART_SIZE}px;
      border-radius: 50%;
      animation-fill-mode: forwards;

      &.red {
        background-color: ${RED};
        transform: translateX(${PART_SIZE / 2}px);
        animation: red 1s 1s ${EASING};
      }

      &.orange {
        background-color: ${LightenDarkenColor(ORANGE, 10)};
        transform: translateX(${-PART_SIZE / 2}px);
        mix-blend-mode: color-dodge;
        animation: orange 1s 1s ${EASING};
      }
    }

    & > .mastercard__copy {
      overflow: hidden;
      padding-left: 0.2em;

      & > span {
        display: inline-block;
        transform: translateX(-100%);
        opacity: 0;
        will-change: transform, opacity;
        animation: copy ${SECOND_DUR} ${SECOND_DELAY} ${EASING};
        font-size: 16px;
      }
    }

    & > .mastercard__part.red,
    & > .mastercard__part.orange,
    & > .mastercard__copy > span {
      animation-fill-mode: forwards;
    }
  }

  @keyframes red {
    to {
      transform: translate(${PART_SIZE / 6}px);
    }
  }

  @keyframes orange {
    to {
      transform: translate(${-PART_SIZE / 6}px);
    }
  }

  @keyframes mastercard {
    to {
      transform: translateX(0);
    }
  }

  @keyframes copy {
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const ContainerComponent = () => {
  return <StyledComponent></StyledComponent>;
};

export const Root = ContainerComponent;

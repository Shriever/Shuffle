import { positionType } from "./pages";

export const swapTopAndBottom = (prevState: positionType[]) => {
  const topIdx = prevState.findIndex(el => el === "top");
  const bottomIdx = prevState.findIndex(el => el === "bottom");
  [prevState[topIdx], prevState[bottomIdx]] = [
    prevState[bottomIdx],
    prevState[topIdx],
  ];
  return [...prevState];
};

export const swapLeftAndRight = (prevState: positionType[]) => {
  const rightIdx = prevState.findIndex(el => el === "right");
  const leftIdx = prevState.findIndex(el => el === "left");
  [prevState[rightIdx], prevState[leftIdx]] = [
    prevState[leftIdx],
    prevState[rightIdx],
  ];
  return [...prevState];
};

export const rotateClockwise = (prevState: positionType[]) => {
  const el = prevState.shift();

  el && prevState.push(el);
  return [...prevState];
};

export const rotateCounterClockwise = (prevState: positionType[]) => {
  const el = prevState.pop();

  el && prevState.unshift(el);
  return [...prevState];
};

export const crazy = (prevState: positionType[]) => {
  let newState: positionType[] = prevState;
  newState = swapTopAndBottom(prevState);
  newState = swapLeftAndRight(prevState);
  return newState;
};

export default [
  { fn: swapTopAndBottom, title: "Swap Top and Bottom" },
  { fn: swapLeftAndRight, title: "Swap Left and Right" },
  { fn: crazy, title: "Let's Get Crazy" },
  { fn: rotateClockwise, title: "Rotate Clockwise" },
  { fn: rotateCounterClockwise, title: "Rotate Counter-Clockwise" },
];

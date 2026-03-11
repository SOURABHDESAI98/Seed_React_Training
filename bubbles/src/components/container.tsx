import "./conatiner.css";
import { PinkBubble, YellowBubble, BlackBubble, PurpleBubble } from "./bubble";

import { useEffect, useState } from "react";

const BUBBLES = [
  { type: PinkBubble, key: "pink1", iskilled: false },
  { type: PinkBubble, key: "pink2", iskilled: false },
  { type: PinkBubble, key: "pink3", iskilled: false },
  { type: BlackBubble, key: "black1", iskilled: false },
  { type: BlackBubble, key: "black2", iskilled: false },
  { type: BlackBubble, key: "black3", iskilled: false },
  { type: YellowBubble, key: "yellow1", iskilled: false },
  { type: YellowBubble, key: "yellow2", iskilled: false },
  { type: YellowBubble, key: "yellow3", iskilled: false },
  { type: YellowBubble, key: "yellow4", iskilled: false },
  { type: PurpleBubble, key: "purple1", iskilled: false },
  { type: PurpleBubble, key: "purple2", iskilled: false },
  { type: PurpleBubble, key: "purple3", iskilled: false },
  { type: PurpleBubble, key: "purple4", iskilled: false },
];

const getRandomPosition = () => {
  const containerWidth = 800; // px
  const containerHeight = 400; // px
  const bubbleSize = 80; // px
  return {
    left: Math.random() * (containerWidth - bubbleSize),
    top: Math.random() * (containerHeight - bubbleSize),
  };
};

const Container = () => {
  const [positions, setPositions] = useState(
    BUBBLES.map(() => getRandomPosition()),
  );

  const [color, setColor] = useState("yellow");
  const [key, setKey] = useState("");

  const shootBubble = (key: string) => {
    setKey(key);
    BUBBLES.forEach((bubble) => {
      if (bubble.key === key) {
        bubble.iskilled = true;
      }
    });
    if (key.startsWith("yellow")) {
      setColor("red");
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(BUBBLES.map(() => getRandomPosition()));
    }, 1500); // Change position every 1.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="container"
      style={{
        position: "relative",
        width: 800,
        height: 400,
        margin: "auto",
        overflow: "hidden",
      }}
    >
      {BUBBLES.map((bubble, idx) => {
        const BubbleComponent = bubble.type;
        const pos = positions[idx];
        return (
          <div
            key={bubble.key}
            onClick={() => shootBubble(bubble.key)}
            style={{
              position: "absolute",
              left: pos.left,
              top: pos.top,
              transition: "left 0.7s, top 0.7s",
            }}
          >
            <BubbleComponent shoot={key === bubble.key || bubble.iskilled ? color : ""} />
          </div>
        );
      })}
    </div>
  );
};

export default Container;

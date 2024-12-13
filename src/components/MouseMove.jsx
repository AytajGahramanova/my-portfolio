import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const MouseMove = () => {
  const pointerRef = useRef(null);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (isSmallScreen) return;

    const handleMove = (e) => {
      if (pointerRef.current) {
        pointerRef.current.style.left = `${e.clientX}px`;
        pointerRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, [isSmallScreen]);

  const pointerStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: 9,
    width: "10px",
    height: "10px",
    backgroundColor: "#4657bd",
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    display: isSmallScreen ? "none" : "block",
  };

  return <div id="follow-pointer" ref={pointerRef} style={pointerStyle}></div>;
};

export default MouseMove;

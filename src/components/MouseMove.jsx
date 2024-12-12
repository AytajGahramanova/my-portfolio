import { useEffect, useRef } from "react";

const MouseMove = () => {
  const pointerRef = useRef(null);

  useEffect(() => {
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
  }, []);

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
  };

  return <div id="follow-pointer" ref={pointerRef} style={pointerStyle}></div>;
};

export default MouseMove;

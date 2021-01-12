import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoors] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = {
        x: e.x,
        y: e.y,
      };
      /*  console.log(coors);  */
      setCoors(coords);
      //console.log(":D");
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Eres Genial</h3>
      <p>
        Coord X:{x} y Coord Y:{y}
      </p>
    </div>
  );
};

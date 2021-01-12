import React, { memo } from "react";
/* MEMO SE LLAMA CUANDO CAMBIAN LAS PROPS DE UN COMPONENTE, en este caso era el value */
export const Small = memo(({ value }) => {
  console.log("me volvi a llamar");
  return <small>{value}</small>;
});

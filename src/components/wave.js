import React, { useState } from "react";
import { css } from "@emotion/react";

const Wave = () => {
  const [waves, setWaves] = useState(0);

  const label = `👋 ${waves} ${waves === 1 ? "waves" : "waves"}`;

  return (
    <button
      css={css`
        background: rebeccapurple;
        color: white;
        border: none;
        font-size: 1.25rem;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  );
};

export default Wave;

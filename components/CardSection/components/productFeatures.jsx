import * as React from "react";

export function ProductFeature({ text }) {
  return (
    <span className="font-[350]">
      • {text}
    </span>
  );
}
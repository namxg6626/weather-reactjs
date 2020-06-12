import React from "react";

export default function CircleLoading() {
  return (
    <svg
      style={{
        margin: "auto",
        background: "rgb(255, 255, 255)",
        shapeRendering: "auto",
        animationPlayState: "running",
        animationDelay: "0s",
      }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        r="32"
        strokeWidth="8"
        stroke="#c6c6c6"
        strokeDasharray="50.26548245743669 50.26548245743669"
        fill="none"
        strokeLinecap="round"
        style={{ animationPlayState: "running", animationDelay: "0s" }}
        transform="rotate(355.865 50.0004 50.0004)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        ></animateTransform>
      </circle>
      <circle
        cx="50"
        cy="50"
        r="23"
        strokeWidth="8"
        stroke="#5b5b5b"
        strokeDasharray="36.12831551628262 36.12831551628262"
        strokeDashoffset="36.12831551628262"
        fill="none"
        strokeLinecap="round"
        style={{ animationPlayState: "running", animationDelay: "0s" }}
        transform="rotate(-355.865 50.0004 50.0004)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;-360 50 50"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        ></animateTransform>
      </circle>
    </svg>
  );
}

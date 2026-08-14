import type { SVGProps } from "react";

const Dotnet = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} preserveAspectRatio="xMidYMid" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="6" fill="#512bd4" />
    <text
      x="16"
      y="21"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="bold"
      fontSize="10"
      fill="#ffffff"
    >
      .NET
    </text>
  </svg>
);

export { Dotnet };

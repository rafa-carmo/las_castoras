import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  width?: number;
  height?: number;
}
export const WaveDivider = ({
  width,
  height,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: "rotate(0deg)",
      transition: ".3s",
    }}
    width={width || 1440}
    height={height || 190}
    {...props}
  >
    <title>Wave Divider</title>
    <defs>
      <linearGradient id="a" x1={0} x2={0} y1={1} y2={0}>
        <stop offset="0%" stopColor="rgba(117, 170, 219, 1)" />
        <stop offset="100%" stopColor="rgba(229.977, 236.047, 241.659, 1)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M0 38h48c48 0 144 0 240 9.5S480 76 576 98.2c96 21.8 192 47.8 288 57 96 9.8 192 2.8 288 3.1 96-.3 192 6.7 288-6.3s192-44 288-47.5 192 22.5 288 38 192 22.5 288 22.2c96 .3 192-6.7 288-15.9 96-9.8 192-21.8 288-22.1 96 .3 192 12.3 288 6.3 96-6 192-32 288-28.5s192 34.5 288 44.3c96 9.2 192-2.8 288-28.5 96-25.3 192-63.3 288-57 96 6.7 192 56.7 288 63.4 96 6.3 192-31.7 288-41.2 96-9.5 192 9.5 288 15.8 96 6.7 192-.3 288 0 96-.3 192 6.7 288 9.5 96 3.2 192 3.2 288 0 96-2.8 192-9.8 288-19 96-9.8 192-21.8 288-25.3s192 3.5 240 6.3l48 3.2v114H0z"
      style={{
        transform: "translate(0,0)",
        opacity: 1,
      }}
    />
    <defs>
      <linearGradient id="b" x1={0} x2={0} y1={1} y2={0}>
        <stop offset="0%" stopColor="rgba(238.481, 242.499, 246.213, 1)" />
        <stop offset="100%" stopColor="rgba(117, 170, 219, 1)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#b)"
      d="m0 19 48 9.5C96 38 192 57 288 53.8 384 51 480 25 576 31.7 672 38 768 76 864 82.3c96 6.7 192-19.3 288-28.5 96-9.8 192-2.8 288 9.5 96 12.7 192 31.7 288 44.4 96 12.3 192 19.3 288 22.1 96 3.2 192 3.2 288-3.1 96-6.7 192-18.7 288-31.7s192-25 288-19 192 32 288 28.5S3360 70 3456 57s192-6 288 0 192 13 288 9.5 192-15.5 288-19 192 3.5 288 22.2c96 19.3 192 50.3 288 60.1 96 9.2 192-2.8 288-28.5 96-25.3 192-63.3 288-57 96 6.7 192 56.7 288 76 96 18.7 192 6.7 288-19 96-25.3 192-63.3 288-60.1 96 2.8 192 47.8 288 76 96 28.8 192 40.8 240 47.5l48 6.3v19H0z"
      style={{
        transform: "translate(0,50px)",
        opacity: 0.9,
      }}
    />
  </svg>
);

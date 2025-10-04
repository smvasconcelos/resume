// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
  import * as React from 'react';
  const SVG: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default SVG;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';

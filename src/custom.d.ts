// Allow importing image assets in TypeScript
declare module '*.avif';
declare module '*.bmp';
declare module '*.gif';
declare module '*.ico';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.webp';
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*?url' {
  const src: string;
  export default src;
}

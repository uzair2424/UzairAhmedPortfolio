/// <reference types="vite/client" />

declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: string | Element | Element[], config?: SplitTextConfig);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }

  interface SplitTextConfig {
    type?: string;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
  }
}

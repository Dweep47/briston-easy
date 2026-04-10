declare module "wowjs" {
  export class WOW {
    constructor(options?: { boxClass?: string; animateClass?: string; offset?: number; live?: boolean });
    init(): void;
  }
}

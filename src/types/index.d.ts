declare global {
  interface Window {
    somePropertyHere: any;
    pulseAppWebToken: string;
    Bridge: Record<string, any>;
  }
}


declare const window : any;

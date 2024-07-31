import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import {setupCounter} from './counter.ts';
import '@/css/base.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  232323
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    react-demo-vite
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card mt100">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs c-red">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

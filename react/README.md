## 🍄 **Sobre**

Fuselagem para React.

---

## 🧪 **Tecnologias**

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

---

## 🎮 **Ambiente de desenvolvimento**

Para executar o ambiente de desenvolvimento deste projeto é necessário possuir o node instalado em sua máquina.

```bash
node --version
v16.0.0
```

Possuir o yarn instalado.

```bash
yarn --version
1.22.17
```

O próximo passo é instalar as dependências:

---

## **🔖 Instalação**

```bash
# Criar um projeto React com o vite
$ yarn create vite

$ React
$ Typescript

```

## **🧙‍♂️ Variáveis de ambiente**

Altere a porta em que o server sera executado no arquivo [vite.config.ts](vite.config.ts)

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
```

---

## **🚀 Como executar**

```bash
# Execute a aplicação
$ yarn dev
```

- O app estará rodando na porta 3000.
- Acesse [`<http://localhost:3000>`](http://localhost:3000)

---

## 🌊 **Tailwind CSS**

<details>

<summary align='center'>Clique para visualizar</summary>

TailwindCSS using PostCSS [`<https://tailwindcss.com/docs/installation/using-postcss>`](https://tailwindcss.com/docs/installation/using-postcss)

```bash
# instalar as dependências
$ yarn add tailwindcss postcss autoprefixer -D

# iniciar tailwindCSS com o PostCSS
$ yarn tailwindcss init -p

Created Tailwind CSS config file: tailwind.config.cjs
Created PostCSS config file: postcss.config.cjs
```

Atualize o arquivo [tailwind.config.cjs](tailwind.config.cjs)

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Atualizer o arquivo [./src/index.css](./src/index.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

</details>

---

Feito com 💜 by Planegazers

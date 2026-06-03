# Flash Car — Hero Site

Vite + React + TypeScript + Tailwind CSS hero page.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:5173

## Imagem do carro

Adicione o arquivo PNG do carro em:

```
public/car-black-suv.png
```

A imagem deve ter fundo transparente (PNG com canal alpha).

## Build

```bash
npm run build
```

## Estrutura

```
/
├── src/
│   ├── App.tsx       ← componente principal (hero completo)
│   ├── main.tsx
│   └── index.css
├── public/
│   └── car-black-suv.png   ← adicionar aqui
├── design-system/          ← protótipo de referência (Flash Car site)
│   ├── index.html
│   ├── assets/
│   ├── ui_kits/
│   └── ...
├── index.html
├── package.json
└── vite.config.ts
```

## Deploy (Vercel)

O Vercel detecta automaticamente o projeto Vite na raiz.  
Sem configuração adicional necessária.

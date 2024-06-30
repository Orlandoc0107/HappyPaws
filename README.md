# Happy Paws (En Desarrollo)

Happy Paws es un proyecto presentado en el Grupo S14-34-ft-java como parte de la simulación de No Country. Puedes encontrar el repositorio original <a href="https://github.com/No-Country-simulation/s14-34-ft-java"> Aqui </a> . Actualmente, este repositorio está en desarrollo y estamos creando una nueva versión con mejoras en la UI utilizando ShadCN UI y nuevos componentes, manteniendo el diseño original.

## Intrucciones de Prueba Local

```bash

git clone https://github.com/Orlandoc0107/happypaws
cd happypaws
npm install  # Para instalar las dependencias
npm run dev  # Para iniciar el servidor de desarrollo


```

### Deploy Continuo (en Desarrollo)

Puedes acceder a la versión desplegada en Vercel  <a href="https://happypaws-nine.vercel.app/"> Aqui </a>

#### Agradecimientos

Queremos expresar nuestro sincero agradecimiento al Grupo S14-34-ft Java por la experiencia y colaboración, y especialmente al equipo de UX/UI:

Aylén Sol Martel y 
Consuelo León Abarca

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías:

<div style="display: flex; gap: 10px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" width="40"/> 
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" width="50"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" width="50"/> 
  <img src="https://seeklogo.com/images/P/prisma-logo-3805665B69-seeklogo.com.png" alt="Prisma" width="50"/> 
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL" width="50"/>
</div>

## Prisma

```bash

npm install @prisma/client @auth/prisma-adapter
npm install prisma --save-dev

npx prisma init

npm exec prisma migrate dev

npm exec prisma generate

npx prisma db push

npx prisma studio

```

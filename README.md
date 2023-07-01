# DALES - Plataforma Web de Venta de Productos
[![N|Solid](https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png)](https://nextjs.org)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/DeuxMachin/info-1163)
DALES es una plataforma web de venta de productos donde los usuarios pueden publicar productos y otros usuarios pueden enviar mensajes a estos para comprar dichos productos. Este proyecto consiste en la creación de una aplicación web utilizando Next.js como framework, Prisma como ORM para las bases de datos, Tailwind CSS para el diseño y estilismo de los componentes, tRPC para la comunicación entre cliente y servidor y Clerk.dev para la autenticación de usuarios.

## Tecnologías Utilizadas 🔧:
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [tRPC](https://trpc.io/)
- [Clerk](https://clerk.dev/)
- [T3 Stack](https://www.npmjs.com/package/@trpc/server) (Durante la fase de instalación)

## Pre-requisitos

- [Node.js](https://nodejs.org/) v12.0.0 o superior.
- [Yarn](https://classic.yarnpkg.com/) v1.22.10 o superior.
- Un sistema de gestión de bases de datos(SQL, PostgreSQL, MySQL etc.)

## Configuración inicial

1. Clonar el repositorio:
```sh
bash git clone https://github.com/tu-usuario/tu-proyecto.git
```
2. Instalar las dependencias:
```sh
bash cd tu-proyecto yarn install
```
## Configuración de las Tecnologías ⚙️

### tRPC y Next.js

1. Inicializar Next.js y tRPC con T3 Stack:
```sh
bash yarn create @t3stack/t3-stack . --template prisma-next-prisma-tailwind-trpc-next
```

Esto instalará y configurará Next.js, tRPC, Prisma y Tailwind CSS.

### Prisma

1. Generar y aplicar las migraciones de Prisma:
```sh
bash npx prisma migrate dev --preview-feature
```

Esto creará la base de datos acorde al esquema establecido.

### Clerk.dev

1. Crear una nueva aplicación en [Clerk Dashboard](https://dashboard.clerk.dev/)
2. Tomar nota del `Clerk Frontend API` y `Clerk Backend API`.
3. Agregar las variables de entorno en `.env.local`:
```sh
env NEXT_PUBLIC_CLERK_FRONTEND_API="clerk-frontend-api-value" CLERK_API_KEY="clerk-backend-api-value"
```

## Ejecución

Después de la configuración, ejecutar el proyecto localmente:
```sh
bash yarn dev
```
Visite `http://localhost:3000` para ver la aplicación en acción.

## Documentación Adicional

Las documentaciones oficiales de cada tecnología pueden ser de utilidad para entender más detalles y características de cada una:

- [Next.js](https://nextjs.org/docs/)
- [Prisma](https://www.prisma.io/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [tRPC](https://trpc.io/docs/introduction)
- [Clerk](https://docs.clerk.dev/)

----
# Contribuciones
Las contribuciones son bienvenidas. Puede abrir un issue si encuentra un bug o tiene una sugerencia de mejora, o realizar un pull request.


## License ©
[MIT](https://choosealicense.com/licenses/mit/)

Crear este archivo README.md busca no solo proveer una guía para la instalación y configuración del proyecto, sino también para tener un punto de inicio en el entendimiento de la estructura y funcionalidades del proyecto y las tecnologías utilizadas en él.


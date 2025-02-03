# FRONTEND PARA LA CLÍNICA ESTÉTICA: COSMETOLÓGA VALERY MIRANDA
*Realizado por Noelia Camelia*

<ins>Se centra en la realización del frontend necesario para la reserva de citas en la clínica</ins>
<ins>Realizado con Next.js y Tailwind</ins>

## Para inicializar el proyecto en formato desarrollador:
    - Utilice, en consola, el comando: npm run dev

## Tablas de la base de datos: 

### Pacientes
```
- id
- Nombre
- Apellido
- email
- teléfono
- fecha de creación
- fecha de modificación
```

### Tratamientos
```
- id
- nombre del tratamiento
- descripción
- tiempo utilizado para la realización
- precio
```

### Citas
```
- id
- id del paciente
- id del tratamiento
- hora de inicio de la cita
- hora de fin de la cita
- estado (El mismo solo puede ser: Pendiente, Confirmado, Cancelado)
```

### Administradores 
*(se necesita una ruta diferente a la de los usuarios y requiere autenticación)*
```
- id
- Nombre
- Apellido
- email
- celphone
- contraseña 
- fecha de creación
- fecha de modificación
```

## Endpoints
- "/": Página principal, donde se podrá ver cada uno de los tratamientos implantados en la clínica
- "/contact": Datos de contacto y ubicación de la/las sucursales de la clínica
- "/appointments": Fechas y horarios disponibles para las reservas
- "/admin": Para modificación de los horarios disponibles, acceso mediante autenticación, únicamente para administradores



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

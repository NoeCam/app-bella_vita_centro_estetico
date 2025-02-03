# FRONTEND PARA LA CLÍNICA ESTÉTICA: COSMETOLÓGA VALERY MIRANDA
*Realizado por Noelia Camelia*

*<ins>Se centra en la realización del frontend necesario para la reserva de citas en la clínica</ins>*
*<ins>Realizado con Next.js y Tailwind</ins>*

## Para inicializar el proyecto en formato desarrollador:
    - Utilice, en consola, el comando: npm run dev
    - Abrir [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado

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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# FRONTEND PARA BELLA VITA Centro estético
*Realizado por Noelia Camelia*

*<ins>Se centra en la realización del frontend necesario para la reserva de citas del centro estético</ins>*
*<ins>Realizado con Next.js y Tailwind</ins>*

## Para inicializar el proyecto en formato desarrollador:
    - Datos a ingresar en .env
        NEXT_PUBLIC_URL=
        NEXT_PUBLIC_API_URL=
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
- tipo de tratamiento
- subtipo de tratamiento
- descripción
- tiempo utilizado para la realización
- precio
- imagen
- fecha de creación
- fecha de modificación
```

### Administradores (un administrador/a es un/a cosmetólogo/a)
```
- id
- Nombre
- Apellido
- imagen
- email
- celular
- contraseña 
- fecha de creación
- fecha de modificación
```

### Horario laboral de los administradores 
```
- id
- adminId
- día laboral
- comienzo de horario laboral
- fin del horario laboral
```

### Tratamientos que realiza cada administrador 
```
- id
- id identificador del administrador
- id del tratamiento que realiza
```

### Citas
```
- id
- id del paciente
- id del tratamiento
- id del administrador
- fecha de la cita
- hora de inicio de la cita
- hora de fin de la cita
- estado (El mismo solo puede ser: Pendiente, Confirmado, Cancelado)
```

## Endpoints
- "/": Página principal, donde se podrá ver cada uno de los tratamientos que se realizan en el centro estético.
- "/contact": Datos de contacto y ubicación del centro estético. Breve descripción de cada cosmetóloga/o. 
- "/appointments": Página donde el paciente puede ver los horarios disponibles que hay para un tratamiento específico en una fecha en particular, y ser capaz de reservar turno luego de ingresar los datos solicitados en el formulario.

- "/admin": Para modificación de los horarios disponibles, acceso mediante autenticación, únicamente para administradores

## Deploy on Vercel
https://bellavitacentroestetico.vercel.app/

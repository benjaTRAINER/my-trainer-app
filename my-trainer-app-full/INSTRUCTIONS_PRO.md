# INSTRUCCIONES PROFESIONALES — Proyecto Trainer Pro Web (COMPLETO)

Sigue estos pasos en orden para tener una instalación profesional, con datos de ejemplo y despliegue.

## Requisitos
- Node.js 18+ (nvm recomendado)
- PostgreSQL (local) o Supabase (gestión)
- Git
- Cuenta en GitHub, Vercel, Render (o Railway)

## 1) Preparar el proyecto
```bash
# descomprime o clona el repo
cd ~/projects/my-trainer-app
```

## 2) Backend
```bash
cd backend
npm install
cp .env.example .env
# editar backend/.env con DATABASE_URL y JWT_SECRET
npx prisma generate
npx prisma migrate dev --name init
# correr seed (crea usuarios demo)
node prisma/seed.js
npm run dev
```
- Backend en http://localhost:4000

## 3) Frontend
```bash
cd ../frontend
npm install
npm run dev
```
- Frontend en la URL que Vite muestre (ej. http://localhost:5173)

## 4) Deploy profesional (resumen)
- Usa Supabase para DB (recomiendo). Copia DATABASE_URL.
- Backend: Render (conecta repo, carpeta backend, env vars).
- Frontend: Vercel (carpeta frontend, env VITE_API_URL -> backend URL).

## 5) Seeds y datos reales
- Seed crea usuarios: trainer@example.com y student@example.com (passwords hashed placeholder).
- Cambia contraseñas reales usando endpoint de reset o creando nuevos usuarios via UI.

## 6) PWA y APK
- Agrega manifest.json + service worker (Workbox) para PWA.
- Para APK, envolver la web con Capacitor.

Si quieres que ejecute los seeds en este entorno y te muestre los registros, dime y lo hago (puede requerir crear una base Postgres en el entorno).


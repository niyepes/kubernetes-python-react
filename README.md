# 📘 Proyecto Python + React – Guest List CRUD

Aplicación full-stack para gestionar una lista de invitados (Guestbook), construida con:

- Backend: Python (API REST)
- Frontend: React (Vite)
- Base de datos: MySQL
- Contenedores: Docker & Docker Compose
- Orquestación: Kubernetes

Permite crear y listar mensajes de invitados mediante una interfaz web sencilla.

---
```
## 📂 Estructura del proyecto
PROYECTO PYTHON-REACT/
├── backend/
│   ├── app.py
│   ├── models.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   └── guest-list-frontend/
│       ├── index.html
│       ├── package.json
│       ├── vite.config.js
│       └── src/
│           ├── main.jsx
│           └── App.jsx
│
├── kubernetes/
│   ├── backend.yaml
│   ├── frontend.yaml
│   ├── mysql.yaml
│   └── secrets.yaml
│
├── docker-compose.yaml
└── README.md
```
---

## 🧩 Descripción de componentes

### 🔹 Backend (`/backend`)
API REST en Python que expone endpoints para manejar los mensajes del Guestbook.

- `app.py`: aplicación principal
- `models.py`: modelos de datos
- `requirements.txt`: dependencias
- `Dockerfile`: construcción de la imagen

---

### 🔹 Frontend (`/frontend/guest-list-frontend`)
Interfaz web construida con React y Vite.

Funciones principales:
- Envío de mensajes
- Listado de mensajes
- Proxy a backend para evitar CORS en desarrollo

---

### 🔹 Kubernetes (`/kubernetes`)
Manifiestos para despliegue en clúster Kubernetes.

- `backend.yaml`: Deployment + Service del backend
- `frontend.yaml`: Deployment + Service del frontend
- `mysql.yaml`: Deployment + Service de MySQL
- `secrets.yaml`: secretos (credenciales)

---

## 🚀 Ejecución del proyecto

---

## 🐳 Opción 1: Docker Compose (desarrollo local)

### Requisitos
- Docker
- Docker Compose

### Levantar el proyecto
Desde la raíz:

```bash
docker compose up -d --build
```

## ☸️ Opción 2: Kubernetes

```bash
kubectl apply -f kubernetes/secrets.yaml
kubectl apply -f kubernetes/mysql.yaml
kubectl apply -f kubernetes/backend.yaml
kubectl apply -f kubernetes/frontend.yaml
```

## Endpoints disponibles

GET	/messages	Lista todos los mensajes
POST	/messages	Crea un mensaje

Ejemplo POST:
```json
{
  "name": "Juan",
  "message": "Hola mundo"
}
```

# DjangoRest-Crud-React

Este proyecto es una aplicación CRUD de tareas construida con Django REST Framework en el backend y React en el frontend.

## Características
- API RESTful para gestión de tareas (crear, leer, actualizar, eliminar)
- Frontend en React con consumo de la API
- Manejo de formularios y validaciones
- Notificaciones de éxito/error con react-hot-toast

## Estructura del Proyecto
```
DjangoRest-Crud-React/
├── db.sqlite3
├── manage.py
├── django_crud_api/         # Configuración principal de Django
├── tasks/                  # App de Django para tareas
│   ├── models.py           # Modelo de Tarea
│   ├── serializer.py       # Serializador de Tarea
│   ├── views.py            # Vistas API
│   └── urls.py             # Rutas API
├── client/                 # Frontend React
│   ├── src/
│   │   ├── api/task.api.js # Llamadas a la API
│   │   ├── components/     # Componentes React
│   │   └── pages/          # Páginas React
```

## Instalación

### Backend (Django)
1. Crea y activa un entorno virtual:
   ```powershell
   python -m venv venv
   .\venv\Scripts\Activate.ps1
   ```
2. Instala dependencias:
   ```powershell
   pip install django djangorestframework
   ```
3. Aplica migraciones y ejecuta el servidor:
   ```powershell
   python manage.py migrate
   python manage.py runserver
   ```

### Frontend (React)
1. Ve a la carpeta `client`:
   ```powershell
   cd client
   ```
2. Instala dependencias:
   ```powershell
   npm install
   ```
3. Inicia la app de React:
   ```powershell
   npm start
   ```

## Uso
- Accede a la API en `http://localhost:8000/tasks/api/v1/tasks/`
- Accede al frontend en `http://localhost:3000/`

## Personalización
- Puedes modificar los modelos, serializadores y vistas en la carpeta `tasks` para agregar más funcionalidades.
- El frontend puede personalizarse en la carpeta `client/src`.

## Licencia
Este proyecto es solo para fines educativos y de práctica.

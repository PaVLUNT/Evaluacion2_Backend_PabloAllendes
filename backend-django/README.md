# Backend - TechSolve (Proyecto 6)

## Cómo levantar el backend

1. `cd backend-django`
2. `source venv/Scripts/activate` (Git Bash) o `venv\Scripts\activate` (CMD)
3. `pip install -r requirements.txt`
4. `python manage.py migrate`
5. `python manage.py runserver`

## Crear superusuario / token

1. `python manage.py createsuperuser`
2. Pedir token: `POST http://127.0.0.1:8000/api/token/` con `{ "username": "...", "password": "..." }`

## Endpoints

| Método | URL | Descripción |
|---|---|---|
| GET | /api/servicios/ | Lista todos los servicios |
| POST | /api/servicios/ | Crea un servicio |
| GET | /api/servicios/<id>/ | Obtiene un servicio |
| PUT | /api/servicios/<id>/ | Actualiza un servicio |
| DELETE | /api/servicios/<id>/ | Elimina un servicio |
| GET | /api/solicitudes/ | Lista todas las solicitudes |
| POST | /api/solicitudes/ | Crea una solicitud |
| GET | /api/solicitudes/<id>/ | Obtiene una solicitud |
| PUT | /api/solicitudes/<id>/ | Actualiza una solicitud |
| DELETE | /api/solicitudes/<id>/ | Elimina una solicitud |

Todos los endpoints requieren el header `Authorization: Token <tu_token>`.

## Integrantes
- Pablo Allendes
- Javier Andrade
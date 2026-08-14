# node-note

NodeNote is a small self-hosted Markdown note application with user accounts, note sharing, groups, and a live Markdown preview.

The application is composed of four services:

- **Frontend** — React + Vite
- **Backend** — Express + TypeScript + Prisma
- **Database** — PostgreSQL 13
- **Reverse proxy** — Nginx with HTTPS

The recommended way to run the project is with Docker Compose.

## Features

- User registration and login
- Markdown editor with live preview
- Automatic saving of existing notes after changes
- Manual save button
- Note search
- Share notes directly with another user
- Share notes with groups
- Create and manage groups
- Invite users to groups by email
- Account, email, username, and password management
- Persistent PostgreSQL storage
- HTTPS through Nginx

## Requirements

Install the following before starting:

- Docker
- Docker Compose

You do **not** need to install Node.js, pnpm, PostgreSQL, Prisma, or Nginx locally when using Docker Compose.

The following host ports are used by default:

| Port | Service | Purpose |
| --- | --- | --- |
| `80` | Nginx | Redirects HTTP to HTTPS |
| `443` | Nginx | Main application entry point |
| `3000` | Backend | Express API |
| `5173` | Frontend | Vite development server |
| `5432` | PostgreSQL | Database |

Make sure these ports are free before starting the stack.

## Quick Start

From the project root, run:

```bash
docker compose up --build
```

Then open:

```text
https://localhost
```

On the first start, Nginx generates a temporary self-signed TLS certificate if no certificate is provided. Your browser will therefore usually show a certificate warning. For local development, you can continue to the site manually.

There is **no default user account**. Click **Sign up** on the login screen and create the first account yourself.

### Check whether the backend is running

The backend exposes a health endpoint:

```text
https://localhost/api/health
```

A healthy backend returns:

```json
{
  "status": "ok"
}
```

## What Happens on Startup

`docker compose up` starts the services in this order:

1. PostgreSQL starts using the configured database credentials.
2. The backend waits until PostgreSQL accepts connections.
3. Prisma prepares the database schema.
4. The Express backend starts on port `3000`.
5. The React/Vite frontend starts on port `5173`.
6. Nginx exposes the application over HTTPS on port `443` and proxies `/api/` requests to the backend.

The backend startup script automatically handles the Prisma database setup:

- If Prisma migrations exist, it runs `prisma migrate deploy`.
- If no migrations exist, it runs `prisma db push`.

With the current project state, no migration directory is included, so the schema is created using `prisma db push`.

## Configuration

The default Docker configuration is stored in:

```text
docker-compose.yaml
```

### PostgreSQL

The current defaults are:

```yaml
POSTGRES_USER: postgres
POSTGRES_PASSWORD: postgres
POSTGRES_DB: app
```

The backend connects to PostgreSQL with:

```text
postgresql://postgres:postgres@db:5432/app
```

If you change the PostgreSQL username, password, database name, or port, update `DATABASE_URL` for the backend as well.

For example:

```yaml
db:
  environment:
    POSTGRES_USER: node_note
    POSTGRES_PASSWORD: change-this-password
    POSTGRES_DB: node_note

backend:
  environment:
    - DATABASE_URL=postgresql://node_note:change-this-password@db:5432/node_note
```

### Backend Environment Variables

The backend supports the following environment variables:

| Variable | Default | Description |
| --- | --- | --- |
| `DATABASE_URL` | none | PostgreSQL connection string. Docker Compose currently provides it. |
| `PORT` | `3000` | Port used by the Express backend. |
| `JWT_SECRET` | `changeme-secret-key` | Secret used to sign authentication tokens. |
| `FRONTEND_URL` | `http://localhost:5173` | Allowed frontend origin for CORS. |

For anything except throwaway local development, set a proper `JWT_SECRET` explicitly:

```yaml
backend:
  environment:
    - DATABASE_URL=postgresql://postgres:postgres@db:5432/app
    - JWT_SECRET=replace-this-with-a-long-random-secret
```

You can also add:

```yaml
    - FRONTEND_URL=https://your-domain.example
```

when serving NodeNote from another hostname.

### Frontend API Configuration

The frontend sends API requests to:

```text
/api
```

This is intentionally a relative URL. Nginx forwards requests under `/api/` to the backend container.

Because of this, the intended setup is to access the application through Nginx rather than opening the Vite server directly on port `5173`.

### Nginx and HTTPS

Nginx is configured in:

```text
nginx/nginx.conf
```

HTTP traffic on port `80` is redirected to HTTPS on port `443`.

The certificate filenames expected by Nginx are:

```text
node-note.crt
node-note.key
```

The image looks for them in:

```text
nginx/certs/node-note.crt
nginx/private/node-note.key
```

If they are present when the Nginx image is built, they are copied into the image. Otherwise, the Nginx entrypoint creates a temporary self-signed certificate automatically.

After changing or adding certificates, rebuild the Nginx image:

```bash
docker compose build nginx
docker compose up -d nginx
```

For a public deployment, use a certificate issued for your real hostname instead of the generated self-signed certificate.

## Using NodeNote

### 1. Create an Account

Open `https://localhost`, choose **Sign up**, and enter:

- Username
- Email address
- Password
- Password confirmation

The frontend requires passwords to contain at least 6 characters.

After registration, you are signed in automatically.

### 2. Create a Note

Use the **+** button in the left sidebar to create a note.

A note contains:

- A title
- Markdown content

The editor is shown on the left and the rendered Markdown preview is shown on the right.

Existing notes are automatically saved approximately two seconds after the title or content changes. You can also use the save button manually.

### 3. Find Notes

The sidebar separates notes into:

- **Your Notes** — notes created by you
- **Group Notes** — notes shared with one of your groups
- **Shared Notes** — notes shared directly with you

Use the search field above the list to search accessible notes by title or content.

### 4. Share a Note with a User

For one of your own notes:

1. Open the note actions.
2. Choose the share option.
3. Select **Share with User**.
4. Search for another registered user.
5. Select the user and confirm.

Only registered users can be selected.

### 5. Work with Groups

Open the menu on the upper-right side of the application to access the group controls.

You can:

- Create a group
- Invite a registered user by email
- View group members
- Remove members from a group you own
- Delete a group you own
- Share a note with one of your groups

Groups are currently represented internally and in several UI elements by their numeric ID, for example `Group #3`.

### 6. Account Management

The right-side menu also contains account controls for:

- Changing username
- Changing password
- Changing email address
- Deleting the account
- Logging out

## Useful Docker Commands

### Start in the foreground

```bash
docker compose up --build
```

### Start in the background

```bash
docker compose up -d --build
```

### View running containers

```bash
docker compose ps
```

### Follow logs

```bash
docker compose logs -f
```

### Follow only backend logs

```bash
docker compose logs -f backend
```

### Restart the stack

```bash
docker compose restart
```

### Stop the stack

```bash
docker compose down
```

The PostgreSQL data remains stored because the `postgres_data` volume is not removed by this command.

### Completely reset the database

To stop the application **and delete all stored PostgreSQL data**:

```bash
docker compose down -v
```

Then start again:

```bash
docker compose up --build
```

This creates a fresh empty database.

## Persistent Data

PostgreSQL stores its data in the Docker volume:

```text
postgres_data
```

Rebuilding or restarting the containers does not normally delete notes, users, or groups.

Data is removed only if the volume itself is deleted, for example with:

```bash
docker compose down -v
```

## Project Structure

```text
node-note-dev/
├── apps/
│   ├── backend/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   ├── routes/
│   │   ├── Dockerfile
│   │   ├── entrypoint.sh
│   │   └── server.ts
│   └── frontend/
│       ├── src/
│       ├── Dockerfile
│       └── vite.config.ts
├── nginx/
│   ├── certs/
│   ├── private/
│   ├── Dockerfile
│   ├── entrypoint.sh
│   └── nginx.conf
├── docker-compose.yaml
└── README.md
```

## API Overview

All application API routes are under `/api`.

Authentication:

```text
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me
PUT    /api/auth/me
PUT    /api/auth/me/email
DELETE /api/auth/me
```

Notes:

```text
GET    /api/notes
GET    /api/notes/group
GET    /api/notes/shared
GET    /api/notes/search?q=...
POST   /api/notes
PUT    /api/notes/:id
DELETE /api/notes/:id
POST   /api/notes/:id/share/user
POST   /api/notes/:id/share/group
```

Groups and users:

```text
GET    /api/groups
GET    /api/groups/search?q=...
GET    /api/groups/:id/members
POST   /api/groups
DELETE /api/groups/:id
POST   /api/groups/:id/invite
DELETE /api/groups/:id/members/:userId
GET    /api/users/search?q=...
```

Most routes require authentication. The frontend stores the returned JWT in local storage and sends it as a Bearer token. The backend also sets an HTTP-only authentication cookie.

## Troubleshooting

### Browser shows a certificate warning

This is expected when NodeNote generated its own temporary self-signed certificate. Accept the warning for local development or configure a trusted certificate.

### Port is already in use

If Docker reports that a port cannot be bound, another program is already using one of the configured ports.

Check the ports defined in `docker-compose.yaml` and either stop the conflicting service or change the host-side port mapping.

For example:

```yaml
ports:
  - "8443:443"
```

The application would then be available at:

```text
https://localhost:8443
```

### Backend cannot connect to PostgreSQL

Check the database container:

```bash
docker compose logs db
```

Then check the backend:

```bash
docker compose logs backend
```

Make sure the PostgreSQL credentials match the backend `DATABASE_URL`.

### Database schema problems after changing Prisma models

For the current development setup, the backend runs Prisma automatically when it starts.

To force a fresh database during development:

```bash
docker compose down -v
docker compose up --build
```

**Warning:** this deletes all existing application data.

### Frontend works on `5173`, but API calls fail

The frontend uses the relative API path `/api`, while Vite currently has no development proxy configured. Access NodeNote through Nginx at `https://localhost` for the complete stack.

## Development / Production Notes

The current containers run the frontend with the Vite development server and the backend with `nodemon`. This is convenient for development because the source directories are mounted into the containers.

For a production deployment, consider at least:

- Setting a strong `JWT_SECRET`
- Replacing the default PostgreSQL credentials
- Using a trusted TLS certificate
- Removing unnecessary public database/backend/frontend port mappings
- Building the frontend into static production assets instead of running the Vite dev server
- Running the backend without `nodemon`
- Managing secrets outside the committed Compose file
- Creating and deploying proper Prisma migrations

## Default Configuration Summary

```text
Application:       https://localhost
HTTP redirect:     http://localhost -> https://localhost
Backend:           http://localhost:3000
Frontend:          http://localhost:5173
PostgreSQL:        localhost:5432
Database user:     postgres
Database password: postgres
Database name:     app
Backend port:      3000
JWT secret:        changeme-secret-key (development fallback)
Frontend CORS URL: http://localhost:5173
Persistent volume: postgres_data
```

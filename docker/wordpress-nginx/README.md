# Docker Compose: WordPress + nginx + READYPLAY marketing (`/readyplay/`)

Full narrative: **[`docs/Marketing-site-hosting.md`](../../../docs/Marketing-site-hosting.md)** (WordPress → Option 4).

## Quick start

1. **Build** the static site **with** base path **`/readyplay`** (from repo root):

   ```bash
   cd web
   NEXT_PUBLIC_BASE_PATH=/readyplay npm ci
   NEXT_PUBLIC_BASE_PATH=/readyplay npm run build
   ```

2. **Copy** the export into this folder (Compose mounts it as **`readyplay-static/`**). From **`web/`** after the build:

   ```bash
   rm -rf docker/wordpress-nginx/readyplay-static
   cp -R out docker/wordpress-nginx/readyplay-static
   ```

   After copy, you should have **`readyplay-static/readyplay/index.html`** (Next puts the app under the **`readyplay`** segment when `basePath` is set).

3. **Secrets**

   ```bash
   cd docker/wordpress-nginx
   cp .env.example .env
   # edit .env — use strong passwords
   ```

4. **Run**

   ```bash
   docker compose up -d
   ```

5. **Open**
   - **WordPress:** [http://localhost:8080/](http://localhost:8080/) — complete the install wizard; set **Site Address (URL)** and **WordPress Address (URL)** to **`http://localhost:8080`** (or your real hostname behind TLS).
   - **Marketing:** [http://localhost:8080/readyplay/](http://localhost:8080/readyplay/)

6. **Production**
   - Map host ports **`80`** / **`443`** (edit **`docker-compose.yml`** `ports` and add TLS—e.g. **Caddy**, **Traefik**, or terminate TLS on a host nginx in front of this stack).
   - Point DNS at the server; align **WordPress** URLs in **Settings → General** with the public **`https://`** origin.

## Files

| File | Purpose |
| ---- | -------- |
| **`docker-compose.yml`** | **MariaDB**, **WordPress** (Apache image), **nginx** front. |
| **`nginx/default.conf`** | **`/readyplay/`** → static volume; **`/`** → WordPress upstream. |
| **`.env.example`** | Copy to **`.env`** (gitignored). |

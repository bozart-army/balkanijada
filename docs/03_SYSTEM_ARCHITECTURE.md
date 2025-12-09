# 03 – System Architecture

## 1. Overview

Balkanijada follows a **modular, service-oriented architecture** with clear boundaries between
Frontend, Backend, Database and AI Services.

The goal is:
- high scalability,
- clean separation of concerns,
- fast iteration for new features,
- global readiness for multi-language and multi-country expansion.

The platform consists of these main layers:

1. **Frontend (Next.js, TypeScript)**
2. **Backend API (NestJS, Prisma, Node.js)**
3. **Database (PostgreSQL)**
4. **AI Layer (OpenAI-based pipelines)**
5. **Infrastructure (Docker, CI/CD, Hosting)**

---

## 2. Frontend Architecture

**Framework:** Next.js (App Router, React Server Components)

### Responsibilities
- Render UI for Places, Events, Stories and Users
- Handle routing, filtering, search and maps
- Manage i18n (translations, slugs, language routing)
- Communicate with the Backend via REST API
- Server-side rendering (SEO-critical pages)
- Client-side interactions for dynamic components

### Key Components
- `/places` – city filters, cards, maps
- `/events` – calendar, event list, cards
- `/stories` – blog layout, detail pages
- `/[lang]` – language-prefixed routes
- Global shared components:
  - Maps
  - Cards
  - Filters
  - Navigation
  - Auth components

---

## 3. Backend Architecture

**Framework:** NestJS  
**ORM:** Prisma  
**Runtime:** Node.js  

### Responsibilities
- Provide REST API for all frontend modules
- Manage authentication and sessions
- Validate and clean user submissions
- Handle translations, tagging, moderation
- Provide endpoints for Partners and Organizers
- Integrate AI processing workflows
- Provide admin tools for data moderation

### Backend Modules
- **PlacesModule**
- **EventsModule**
- **StoriesModule**
- **UsersModule**
- **OrganizerModule**
- **I18NModule**
- **AIModule**
- **AdminModule**

Each module has:
- Controller (routing)
- Service (business logic)
- Prisma repository (data access layer)
- DTOs & validation

---

## 4. Database Architecture

**Database:** PostgreSQL  
**ORM:** Prisma

### Core tables
- `places`
- `place_translations`
- `events`
- `event_translations`
- `stories`
- `story_translations`
- `users`
- `organizers`
- `place_claims`
- `user_saved_places`
- `user_saved_events`

### Extended tables (future)
- `premium_slots`
- `subscriptions`
- `analytics_events`
- `ai_tasks`
- `reviews_places`
- `reviews_events`

The database is optimized for:
- multilingual content,
- city-based queries,
- high read-frequency,
- fast filtering for events & places.

---

## 5. AI Architecture

**AI Layer uses:**
- Text polishing
- Translations
- Auto-tagging
- Duplicate detection
- Recommendations
- City summaries

### Workflow Example: Place Creation
1. User submits raw place info  
2. Backend stores draft  
3. AI pipeline triggers:
   - improve description
   - generate tags
   - generate translations
   - check duplicates  
4. Moderator reviews  
5. Place goes live

AI tasks are queued in a lightweight task system.

---

## 6. API Architecture

### Public API Endpoints
- `GET /places`
- `GET /places/{slug}`
- `GET /events`
- `GET /events/{slug}`
- `GET /stories`
- `GET /stories/{slug}`

### Authenticated Endpoints
- `POST /events`
- `POST /places`
- `POST /places/{id}/claim`
- `GET /user/me`

### Future Partner API
- `GET /partner/events`
- `POST /partner/events`
- `GET /analytics/overview`

---

## 7. Infrastructure

### Dev Environment
- Docker containers for:
  - Backend
  - PostgreSQL
  - Admin tools (PgAdmin)
- Local Next.js dev server

### Production Environment (planned)
- Frontend: Vercel / Netlify / Fly.io
- Backend: Railway / Render / Fly.io
- Database: Managed Postgres (Neon, Supabase, RDS)
- CI/CD: GitHub Actions

### CI Pipeline
- Linting
- Type checking
- Unit tests
- Build + Deploy

---

## 8. Security

- JWT or session-based auth
- Rate limiting for API routes
- Validation for all user input
- Moderator workflow for submissions
- Secure storage of secrets (.env not tracked)
- HTTPS enforced in production

---

## 9. Scalability

Design principles:
- Read-heavy architecture → optimized queries
- Caching opportunities for:
  - Places
  - City pages
  - Events calendar
- Modular backend → each module scales independently
- AI tasks processed asynchronously

---

## 10. Architecture Diagram (Text Version)

[ Next.js Frontend ]
|
v
[ Backend API (NestJS) ] --- [ AI Pipeline ]
|
v
[ PostgreSQL Database ]
|
v
[ Analytics + Admin Tools ]


---

## 11. Status

This document defines the technical foundation for Balkanijada.  
It will evolve as the project grows and new modules are added.

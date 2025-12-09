# 🇧🇦 Balkanijada

**Balkanijada** ist eine Plattform für die weltweite Balkan-Diaspora.  
Sie verbindet Orte, Events und Stories rund um Balkan-Kultur in einer modernen, mehrsprachigen Web-App.

Ziel:
- Die erste Anlaufstelle weltweit für Balkan-Restaurants, Clubs, Kulturorte, Events und Community-Stories zu werden.

---

## 1. Was ist Balkanijada?

Balkanijada ist:

- ein **Orte-Verzeichnis** für Balkan-Restaurants, Bars, Clubs, Kulturzentren, Shops
- ein **Event-Hub** für Konzerte, Partys, Festivals, Community-Events
- ein **Story-/Magazin-Bereich** für City-Guides, Diaspora-Geschichten und Interviews
- eine **Plattform für Organizer & Locations**, um ihre Zielgruppe direkt zu erreichen

Fokus: **Diaspora**, Mehrsprachigkeit und Balkan-Kultur – nicht generisches Nightlife.

---

## 2. Zielgruppen

- **Community / Nutzer**
  - Menschen mit Balkan-Wurzeln im Ausland
  - Freunde und Fans von Balkan-Kultur
  - Reisende, die „echten“ Balkan suchen

- **Locations / Orte**
  - Restaurants, Bars, Clubs, Bäckereien, Shops
  - Kulturzentren, Vereine, Kirchen, Moscheen
  - Dienstleister mit Fokus auf Balkan-Community

- **Organizer / Partner**
  - Eventveranstalter, Promoter, Agenturen
  - Festival-Organisatoren
  - Kulturinstitutionen

---

## 3. Kernfeatures (MVP)

### 3.1 Places (Orte)

- Orte mit Kategorie (Food, Nightlife, Culture, Services usw.)
- Stadt- und Länderfilter
- Kartenansicht (Maps)
- Detailseiten mit Bildern, Öffnungszeiten, Kontaktdaten
- User-Favoriten („Save Place“)
- Mehrsprachige Beschreibungen (DE / EN / HR / SR / BS)

### 3.2 Events

- Event-Listen + Kalenderansicht
- Filter (Stadt, Datum, Kategorie, Tags)
- Event-Detailseiten mit Ort, Map und Beschreibung
- Organizer können Events einreichen
- Moderationsfluss: draft → pending_review → published

### 3.3 Stories & Guides

- Magazin-/Blog-Bereich
- Kategorien:
  - City Guides
  - Diaspora Stories
  - Food & Culture
  - Interviews
- Verknüpfung mit Orten und Events
- Mehrsprachige Inhalte

### 3.4 User & Organizer

- User-Accounts mit Profil, Sprache, Stadt
- Favoriten: Orte & Events speichern
- Organizer-Profil für Veranstalter / Locations
- Claim-System für Orte (Eigentümer beansprucht Location)

---

## 4. Mehrsprachigkeit & AI (Roadmap)

- Sprachen:
  - Deutsch (DE)
  - Englisch (EN)
  - Kroatisch (HR)
  - Serbisch (SR)
  - Bosnisch (BS)

- Geplante AI-Funktionen:
  - Text-Polishing für Beschreibungen
  - automatische Übersetzungen
  - Auto-Tagging (Küche, Musik, Eventtyp)
  - Duplicate-Erkennung
  - Empfehlungen („Ähnliche Orte/Events“)
  - City-Summaries für Balkan-Hotspots

---

## 5. Repository-Struktur

```text
balkanijada/
│
├── backend/                # NestJS Backend API (Node, TS, Prisma, PostgreSQL)
│   ├── src/
│   ├── prisma/
│   └── README.md
│
├── docs/                   # Projekt-Dokumentation
│   ├── 01_VISION.md
│   ├── 02_FEATURES_OVERVIEW.md
│   ├── 03_SYSTEM_ARCHITECTURE.md
│   └── 04_DATA_MODEL_OVERVIEW.md
│
├── .env.example            # Beispiel-Env-Konfiguration (ohne Secrets)
├── LICENSE
└── README.md               # Diese Datei
````

Geplant (später):

* `frontend/` – Next.js 14 (App Router, TypeScript, Tailwind)
* `infra/` – Deployment, Docker, CI/CD-Konfigurationen

---

## 6. Tech-Stack (geplant)

* **Frontend:** Next.js, React, TypeScript, TailwindCSS, Map-Integration
* **Backend:** NestJS, TypeScript, Prisma
* **Datenbank:** PostgreSQL
* **Hosting:** tbd (z. B. Vercel + Railway/Fly.io/Render)
* **Auth:** JWT (mit Rollen: user, organizer, moderator, admin)
* **AI:** OpenAI-basierte Pipelines (Text, Translation, Tagging)

Details zur Architektur findest du in:

* `docs/03_SYSTEM_ARCHITECTURE.md`
* `backend/README.md`

---

## 7. Status

Aktueller Stand:

* Vision & Features dokumentiert (`/docs`)
* Datenmodell (Prisma-Schema) für:

  * Cities, Places, PlaceTranslations
  * Events, EventTranslations
  * Stories, StoryTranslations
  * User, Organizer, PlaceClaim
  * UserSavedPlace, UserSavedEvent
* Backend-Skeleton (NestJS) mit erstem Places-Modul
* Env-Struktur (`.env.example`)

Nächste Schritte (Roadmap):

* Frontend-Skeleton aufsetzen (Next.js)
* NestJS-Module für Events, Stories, Users, Organizers
* Prisma-Anbindung & erste echte API-Endpunkte
* Admin-/Moderations-Workflow
* AI-gestützte Funktionen (Text, Übersetzung, Tagging)

---

## 8. Projektziel

Balkanijada soll langfristig zur **führenden Plattform für Balkan-Diaspora-Kultur weltweit** werden –
für Essen, Musik, Events, Geschichten und Community.

Dieses Repository bildet die technische Grundlage dafür.

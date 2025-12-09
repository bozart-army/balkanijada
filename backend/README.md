# Balkanijada Backend (NestJS)

Dieses Verzeichnis enthält das Backend der Balkanijada-Plattform.
Es stellt REST-APIs bereit für:

* Places (Orte)
* Events
* Stories
* Users
* Organizers
* Später: i18n, AI-Workflows, Admin, Analytics

---

## 1. Tech Stack

* Node.js
* NestJS
* TypeScript
* Prisma ORM
* PostgreSQL
* JWT-Auth (geplant)

---

## 2. Projektstruktur (Backend)

```
backend/
│
├── src/
│   ├── main.ts                # NestJS Bootstrap
│   ├── app.module.ts          # Root Module – bindet alle Submodule ein
│   │
│   ├── modules/
│   │   ├── places/            # Places API (MVP)
│   │   │   ├── places.module.ts
│   │   │   ├── places.controller.ts
│   │   │   └── places.service.ts
│   │   │
│   │   ├── events/            # Events API (geplant)
│   │   ├── stories/           # Stories API (geplant)
│   │   ├── users/             # Auth & User Module (geplant)
│   │   └── organizers/        # Organizer/Business Accounts (geplant)
│   │
│   ├── common/                # Shared Logic (DTOs, Interceptors, Guards)
│   └── config/                # Env & App Config (später)
│
├── prisma/
│   ├── schema.prisma          # Datenmodell (Cities, Places, Events, Users…)
│   └── migrations/            # Prisma-Migrationen (auto-generiert)
│
├── package.json
├── tsconfig.json
└── README.md
```


---

## 3. Environment-Konfiguration

Alle Umgebungsvariablen werden über eine `.env` Datei gesetzt
(basierend auf `.env.example` im Projektroot).

Wichtige Variablen:

* DATABASE_URL — PostgreSQL-Connection-String
* BACKEND_PORT — Standard: 3000
* JWT_SECRET — Token-Signatur (später)
* CORS_ORIGIN — Erlaubte Frontend-Domain
* NODE_ENV — development / production

Wichtig:
`.env` wird niemals committet.
`.env.example` ist die öffentliche Vorlage.

---

## 4. Datenmodell

Das Datenmodell ist definiert in:

* prisma/schema.prisma
* sowie dokumentiert in `/docs/04_DATA_MODEL_OVERVIEW.md`

Kernelemente:

* City
* Place + PlaceTranslation
* Event + EventTranslation
* Story + StoryTranslation
* User
* Organizer
* PlaceClaim
* UserSavedPlace
* UserSavedEvent

Damit ist das gesamte MVP der Balkanijada-Struktur abgedeckt.

---

## 5. Module

Geplante NestJS-Module:

* PlacesModule
* EventsModule
* StoriesModule
* UsersModule
* OrganizersModule
* I18nModule
* AdminModule (später)
* AiModule (später)

Ein Modul besteht immer aus:

* Controller (Routen)
* Service (Logik)
* DTOs (Validierung)
* Prisma Repository (Datenbankzugriff)

---

## 6. Lokale Entwicklung (wird genutzt, sobald Umgebung bereitsteht)

1. `.env.example` → `.env` kopieren und Werte anpassen

2. Dependencies installieren:

cd backend
npm install

3. Prisma-Migrationen ausführen:

npx prisma migrate dev

4. Server starten:

npm run start:dev

Der Backend-Server läuft dann unter:
[http://localhost:3000](http://localhost:3000)

---

## 7. Status

* Backend Skeleton fertig
* Prisma-Schema für alle Kernentitäten integriert
* Env-Struktur definiert

Nächste Schritte:

* Prisma Service anbinden
* Places mit echten Daten
* Events/Stories/Users/Organizers Module erweitern
* Auth, i18n, Admin, AI

Dieses Dokument wird erweitert, sobald neue Funktionen hinzukommen.

---


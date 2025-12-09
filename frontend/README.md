# Balkanijada Frontend (geplant)

Dieses Verzeichnis enthält das Frontend der Balkanijada-Plattform.

Ziel: Eine moderne, schnelle Web-App für Orte, Events und Stories der Balkan-Diaspora.

---

## 1. Tech-Stack (geplant)

- Framework: Next.js (App Router)
- Sprache: TypeScript
- UI: React + TailwindCSS
- State: React Query / Server Components
- Styling: TailwindCSS + eigene Komponenten
- Icons: z. B. Lucide / Heroicons
- Maps: Einbindung eines Map-Dienstes (z. B. Leaflet oder Mapbox)
- API: Kommunikation mit dem NestJS-Backend

---

## 2. Geplante Verzeichnisstruktur

```text
frontend/
│
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Globales Layout (Header, Footer, Theme)
│   ├── page.tsx            # Landingpage
│   ├── places/             # Orte-Listing & Detailseiten
│   ├── events/             # Events-Listing & Detailseiten
│   ├── stories/            # Magazin/Blog
│   ├── account/            # User-Profil, Favoriten
│   └── admin/              # Admin/Moderation (später)
│
├── components/             # Wiederverwendbare UI-Komponenten
│   ├── layout/
│   ├── cards/
│   ├── forms/
│   └── navigation/
│
├── lib/                    # Helper (API-Client, Hooks, Utils)
├── public/                 # Statische Assets (Logos, Icons, Bilder)
├── styles/                 # Tailwind / globale Styles
├── package.json
├── tsconfig.json
└── README.md
````

Diese Struktur wird umgesetzt, sobald das echte Next.js-Projekt mit `create-next-app` erzeugt wird.

---

## 3. Seiten & Navigation (MVP)

### 3.1 Öffentliche Seiten

* Landingpage (`/`)

  * Erklärung, Suche nach Städten/Orten/Events
* Orte (`/places`)

  * Filter: Stadt, Kategorie, Tags
  * Kartenansicht + Liste
* Events (`/events`)

  * Filter: Datum, Stadt, Kategorie
* Stories (`/stories`)

  * Artikelübersicht + Detailseiten
* Städte-Hubs (`/city/[slug]`)

  * Übersichtsseiten pro Stadt (Top-Orte, Events, Stories)

### 3.2 Account-Bereich

* `/account/login` – Login
* `/account/register` – Registrierung
* `/account/favorites` – gespeicherte Orte & Events
* `/account/settings` – Sprache, Stadt, Profil

### 3.3 Organizer & Admin (später)

* `/organizer/dashboard`
* `/organizer/events/new`
* `/admin/moderation`
* `/admin/places/review`
* `/admin/events/review`

---

## 4. API-Integration

Das Frontend spricht mit dem Backend (NestJS):

* Basis-URL: wird über ENV konfiguriert, z. B. `NEXT_PUBLIC_API_URL`
* Endpunkte (Beispiele):

  * `GET /places`
  * `GET /events`
  * `GET /stories`
  * `GET /cities`
  * `POST /auth/login`
  * `POST /places` (Organizer)
  * `POST /events` (Organizer)

Für die Datenabfrage werden entweder:

* Next.js Server Components + `fetch`
* oder React Query (Client-seitig) verwendet.

Die genaue Implementierung folgt, wenn das Backend stabil steht.

---

## 5. Mehrsprachigkeit (i18n)

Geplante Umsetzung:

* Basis-Sprache: Deutsch oder Englisch
* Unterstützung für HR / SR / BS
* Verwendung von:

  * Next.js i18n-Routing oder
  * einem Library-Ansatz (z. B. next-intl)

Übersetzungen werden später über AI-Workflows aus dem Backend generiert
und als JSON/Namespace-Strukturen eingebunden.

---

## 6. Status

Aktueller Stand:

* Frontend ist als Struktur & Konzept definiert
* Ordner `frontend/` ist angelegt
* Technischer Stack ist festgelegt

Nächste Schritte:

* `create-next-app` lokal ausführen, um das echte Projekt zu erzeugen
* Basis-Layout, Navigation und Landingpage umsetzen
* Anbindung an die ersten Backend-Endpunkte (Places/Events)
* Styling & Design-System verfeinern

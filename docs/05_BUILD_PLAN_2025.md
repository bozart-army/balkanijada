# 05 – Build Plan 2025 (Tech Execution)

Dieses Dokument verbindet die bestehenden Spezifikationen

- `01 – Vision`
- `02 – Features Overview`
- `03 – System Architecture`
- `04 – Data Model Overview`

mit der konkreten technischen Umsetzung von Balkanijada.

Es beantwortet die Frage:  
**„Was bauen wir in welcher Reihenfolge – und auf Basis welchen Dokuments?“**

---

## 1. Rollen der bestehenden Dokumente

- **01 – Vision**  
  Definiert *Purpose, Zielgruppen, Prinzipien*.  
  → Ändert sich selten, dient als Orientierung für alle Entscheidungen.

- **02 – Features Overview**  
  Definiert *welche Module* es gibt und was im MVP vs. später kommt.  
  → Basis für Roadmap, Tickets, Checklisten.

- **03 – System Architecture**  
  Definiert *wie* das System technisch aufgebaut ist (Frontend, Backend, DB, AI, Infra).  
  → Basis für Projektstruktur, Module, Dev-Setup.

- **04 – Data Model Overview**  
  Definiert *welche Tabellen & Felder* existieren.  
  → Basis für `schema.prisma` / SQL, API-DTOs und Abfragen.

---

## 2. Umsetzungsphasen

Wir bauen Balkanijada **nicht als MVP-Light**, sondern als vollständiges System in Schichten:

1. **Phase 0 – Engine**  
   → Repo-Struktur, Datenbank, Backend/Frontend-Bootstrap

2. **Phase 1 – Core Plattform**  
   → Voll funktionsfähige Module: Places, Events, Stories, User, i18n

3. **Phase 2 – AI & Premium**  
   → AI-Pipelines (Polish, Translate, Tags, Duplicates), Premium-Monetarisierung

4. **Phase 3 – Ecosystem**  
   → Organizer Dashboard, Partner-API, Creator Network, BalkanBot Preview

---

## 3. Mapping: Dokumente → Code

### 3.1 `04 – Data Model Overview` → Datenbank & Prisma

**Ziel:**  
Das in `04` definierte Modell ist die einzige Quelle der Wahrheit für:

- `prisma/schema.prisma`
- Migrationen
- Relations in allen Services

**Konkrete Aufgaben:**

- [ ] Jedes in `04` beschriebene Entity existiert als Prisma-Modell  
- [ ] Enums (z. B. Kategorien, Status, Rollen) sind als `enum` im Schema umgesetzt  
- [ ] Indexing-Strategie (GIN für Tags, pg_trgm für Textsuche) ist vorbereitet  
- [ ] Multilingualität (Translations-Tabellen) ist 1:1 abgebildet  
- [ ] Zukunftstabellen (Premium, Analytics, Reviews) sind als Modelle angelegt, aber optional verwendbar

> **Wichtig:**  
> Änderungen am Datenmodell laufen **immer zuerst über `04 – Data Model Overview`**  
> und werden dann ins Prisma-Schema übernommen.

---

### 3.2 `03 – System Architecture` → Projektstruktur & Module

**Ziel:**  
Die in `03` definierten Module existieren als technische Module in `backend/` und Routen in `frontend/`.

**Backend Module (NestJS):**

- [ ] `PlacesModule`
- [ ] `EventsModule`
- [ ] `StoriesModule`
- [ ] `UsersModule`
- [ ] `OrganizerModule`
- [ ] `I18NModule`
- [ ] `AIModule`
- [ ] `AdminModule`

Jedes Modul hat:

- Controller (REST Endpoints)
- Service (Business Logik)
- Zugriff auf Prisma
- DTOs mit Validation

**Frontend Bereiche (Next.js):**

- [ ] `/[lang]/[city]/places` – Orte (Liste, Filter, Map)
- [ ] `/[lang]/[city]/events` – Events (Liste, Kalender)
- [ ] `/[lang]/stories` – Story-Grid
- [ ] `/[lang]/place/[slug]` – Place-Detail
- [ ] `/[lang]/event/[slug]` – Event-Detail
- [ ] `/[lang]/story/[slug]` – Story-Detail

---

### 3.3 `02 – Features Overview` → Feature-Checkliste

`02` beschreibt **Was** das Produkt können soll.  
Für die Umsetzung wird daraus eine **konkrete Checkliste**, z. B.:

#### MVP – Muss funktionieren

**Places**

- [ ] Kategorien, Tags, City-Pages
- [ ] Map-Ansicht
- [ ] Single-Place-Seiten
- [ ] User Submission
- [ ] Favoriten
- [ ] Mehrsprachigkeit (DE/EN/HR/SR/BS)

**Events**

- [ ] Event-Liste + Kalender
- [ ] Kategorien + Filter
- [ ] Single-Event-Seiten
- [ ] Event Submission
- [ ] Status-Flow: draft → pending_review → published → archived
- [ ] Featured Events (Struktur vorbereitet)

**Stories**

- [ ] Story-Listing
- [ ] Story-Detail
- [ ] Kategorien (City Guides, Diaspora Stories, …)
- [ ] Verlinkung zu Orten & Events

**User System**

- [ ] Registrierung / Login
- [ ] Profil (Stadt, Sprache)
- [ ] Favoriten (Orte & Events)

**i18n**

- [ ] Sprachrouting (`/[lang]/…`)
- [ ] Übersetzte Felder für Place/Event/Story
- [ ] Sprachabhängige Slugs

Diese Checkliste kann direkt in GitHub-Issues übersetzt werden.

---

### 3.4 `01 – Vision` → Produktentscheidungen

Bei jeder größeren Entscheidung (Feature-Streichung, Priorisierung, UX-Fragen) gilt:

- Passt es zu **Balkan first**?
- Ist es **Diaspora friendly** (Mehrsprachigkeit, Städtefokus)?
- Bleibt das Frontend **simpel**, auch wenn Organizer-Tools mächtig werden?
- Unterstützt es **Trust & Quality**?

`01 – Vision` ist das Dokument, das verhindert, dass Balkanijada zu einem generischen „Event-Portal“ wird.

---

## 4. Arbeitsmodus

1. **Konzept-Änderungen**  
   → Erst in `01–04` reflektieren, dann in Code.

2. **Neue Features**  
   → Erst in `02 – Features Overview` grob einordnen,  
   → dann in `05 – Build Plan` als Phase/Task.

3. **Datenmodell-Änderungen**  
   → Erst in `04 – Data Model Overview` anpassen,  
   → dann Prisma/Migration aktualisieren.

4. **AI-Workflow-Erweiterungen**  
   → In einem separaten `AI_PIPELINE.md` detaillieren  
   → und mit `AIModule` verknüpfen.

---

## 5. Nächste Schritte (konkret)

1. **Dieses Dokument speichern** als `docs/05_BUILD_PLAN_2025.md`
2. Sicherstellen, dass `01–04` im Repo aktuell sind
3. `04 – Data Model Overview` mit aktuellem `schema.prisma` abgleichen
4. Aus `02 – Features Overview` ein erstes GitHub-Issue-Board bauen:
   - Column „MVP Now“
   - Column „Phase 2“
   - Column „Phase 3“

Ab diesem Punkt dienen `01–05` als **vollständiger technischer und produktseitiger Rahmen** für die Umsetzung von Balkanijada.

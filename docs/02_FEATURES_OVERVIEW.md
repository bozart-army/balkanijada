# 02 – Features Overview

## 1. Core Modules

Diese Module bilden den Kern des Balkanijada-Systems.  
Sie werden im MVP vollständig implementiert.

---

### 1.1 Places (Orte)

- Balkan-Restaurants, Bars, Clubs, Kulturzentren, Shops
- Kategorien, Tags, City-Pages
- Map-Ansicht (Karten mit Filtern)
- Single-Place-Seiten mit Bildern, Öffnungszeiten, Beschreibung
- User Submission („Ort vorschlagen“)
- Favoriten / Wishlists
- Mehrsprachigkeit (DE / EN / HR / SR / BS)

---

### 1.2 Events

- Event-Listing + Event-Kalender (Month View)
- Event-Cards (aufklappbar)
- Kategorien + Filter (Stadt, Land, Datum, Tags)
- Single-Event-Seiten mit Map, Flyer, Beschreibung
- Event Submission (Organizer & User)
- Event Status Flow:
  - draft → pending_review → published → archived
- Featured Events (Premium-Slots)
- Recurring Events (später)

---

### 1.3 Stories & Guides

- Blog- / Magazin-System
- Kategorien:
  - City Guides
  - Diaspora Stories
  - Food & Culture
  - Interviews
- Verlinkung zu Orten & Events
- SEO-optimierte Story-Struktur
- Mehrsprachigkeit für Stories

---

### 1.4 User System

- Registrierung / Login
- Benutzerprofil (Bild, Stadt, Sprache)
- Favoriten: Orte & Events speichern
- Eigene Events verwalten
- Rollen:
  - user
  - organizer
  - moderator
  - admin

---

### 1.5 Internationalisierung (i18n)

- Sprachen: DE / EN / HR / SR / BS
- Übersetzte Felder pro Entity:
  - Place: Name, Beschreibung
  - Event: Titel, Beschreibung
  - Story: Titel, Text
- Eigener Slug für jede Sprache
- AI-Vorübersetzung + manuelles Fine-Tuning

---

## 2. Extended Modules (Phase 2)

Diese Features kommen, sobald MVP stabil läuft und Traffic vorhanden ist.

---

### 2.1 Organizer & Partner System

- Organizer-Profil
- Dashboard:
  - Meine Events
  - Statistiken (Views, Klicks)
- Ort-Claiming (Eigentümer übernehmen Ort)
- Teammitglieder verwalten
- API für Partner (Read)

---

### 2.2 Monetarisierung

- Featured Events (Premium)
- Premium Places (Top-Sichtbarkeit)
- Boost-Slots
- Organizer-Abos:
  - Basic, Pro, City Star
- Stripe/PayPal Integration

---

### 2.3 API & Integrationen

- Public API (Read):
  - /events
  - /places
  - /stories
- ICS Import & Export
- CSV Import für Events
- Developer Documentation

---

## 3. AI Features (Phase 2–3)

---

### 3.1 AI Automation (Core)

- AI Textpolish für Beschreibungen
- AI Translation zu DE/EN/HR/SR/BS
- AI Autotagging (Küche, Musik, Eventtyp)
- Duplicate-Erkennung (Ort/Event)

---

### 3.2 AI Discovery (Pro)

- Empfehlungen:
  - ähnliche Orte
  - ähnliche Events
- City-Summaries:
  - „Balkan in München – Übersicht“
- Story-Generator für City Guides

---

### 3.3 AI Advanced (Deluxe)

- AI Chat:
  - „Was geht heute in meiner Nähe?“
- AI Ranking Engine
- Fraud/Spam Detection

---

## 4. Admin & Moderation

---

### 4.1 Admin Panel

- Dashboard (Neue Einreichungen, Statistiken)
- Orte & Events moderieren
- Nutzer verwalten
- Premium Slots steuern

---

### 4.2 Analytics

- Views & Clickthroughs
- Heatmaps (Städteaktivität)
- Event-Performance
- Organizer-Reports
- Predictive Trends (AI)

---

## 5. MVP Definition

**Diese Module müssen für den Start funktionieren:**

- Places (komplett)
- Events (ohne Recurring)
- Stories (Basis)
- User Accounts (Basis)
- i18n (DE+EN+HR+SR+BS)
- Basic Admin Moderation

**Startphase Erfolgskriterien:**

- Mindestens 50 Orte gepflegt in DE/AT/CH
- Mindestens 10 aktive Events pro Monat
- Erste organische User-Registrierungen
- Erste Partner/Organizer onboarded

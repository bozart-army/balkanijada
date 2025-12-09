# 04 – Data Model Overview

## 1. Introduction

The Balkanijada data model is optimized for:

- multilingual content (DE/EN/HR/SR/BS)
- city-based filtering
- fast discovery for places and events
- clean separation between core entities and their translations
- AI-assisted workflows (text polishing, tagging, duplicates)
- extensibility for partners, analytics and monetisation

This document describes the **MVP data model** that will be expanded in later phases.

---

# 2. Core Entities (MVP)

Balkanijada consists of three main domain pillars:

1. **Places** (Orte)
2. **Events**
3. **Stories**

Each entity has:
- a main table (language-independent fields)
- a translations table (language-dependent fields)

---

## 2.1 Places

### **places**
| Field | Type | Notes |
|-------|------|-------|
| id | uuid | primary key |
| category | enum | food, nightlife, culture, services, sports, religion, community, other |
| address | string | full text |
| city_id | uuid | FK to cities |
| country_code | string (2) | ISO code |
| lat | float | |
| lon | float | |
| tags | string[] | auto + user tags |
| website | string? | |
| instagram | string? | |
| facebook | string? | |
| phone | string? | |
| images | string[] | URLs |
| status | enum | draft / pending_review / published / archived |
| owner_user_id | uuid? | optional (claimed place) |
| created_at | datetime | |
| updated_at | datetime | |

### **place_translations**
| Field | Type |
|-------|------|
| id | uuid |
| place_id | uuid (FK) |
| lang | enum |
| name | string |
| description | text |
| slug | string |

---

## 2.2 Events

### **events**
| Field | Type |
|-------|------|
| id | uuid |
| place_id | uuid (FK) |
| category | enum (concert, party, culture, community, food, other) |
| start_time | datetime |
| end_time | datetime? |
| city_id | uuid |
| country_code | string (2) |
| images | string[] |
| tags | string[] |
| status | enum (draft, pending_review, published, archived) |
| organizer_id | uuid? |
| created_at | datetime |
| updated_at | datetime |

### **event_translations**
| Field | Type |
|-------|------|
| id | uuid |
| event_id | uuid (FK) |
| lang | enum |
| title | string |
| description | text |
| slug | string |

---

## 2.3 Stories

### **stories**
| Field | Type |
|-------|------|
| id | uuid |
| category | enum |
| cover_image | string |
| author_id | uuid |
| created_at | datetime |
| updated_at | datetime |

### **story_translations**
| Field | Type |
|-------|------|
| id | uuid |
| story_id | uuid (FK) |
| lang | enum |
| title | string |
| content | text |
| slug | string |

---

# 3. Supporting Entities

## 3.1 Cities
Cities are central for discovery and filtering.

### **cities**
| Field | Type |
|-------|------|
| id | uuid |
| name | string |
| country_code | string (2) |
| lat | float |
| lon | float |
| created_at | datetime |

---

## 3.2 Users

### **users**
| Field | Type |
|-------|------|
| id | uuid |
| email | string | unique |
| password_hash | string |
| name | string |
| avatar_url | string? |
| language | string |
| city_id | uuid? |
| role | enum (user, organizer, moderator, admin) |
| created_at | datetime |
| updated_at | datetime |

---

## 3.3 User Saved Items

### **user_saved_places**
| Field | Type |
|-------|------|
| user_id | uuid |
| place_id | uuid |
| created_at | datetime |

### **user_saved_events**
| Field | Type |
|-------|------|
| user_id | uuid |
| event_id | uuid |
| created_at | datetime |

---

## 3.4 Organizers

### **organizers**
| Field | Type |
|-------|------|
| id | uuid |
| user_id | uuid | owner |
| name | string |
| website | string? |
| instagram | string? |
| facebook | string? |
| avatar | string? |
| created_at | datetime |

### **place_claims**
| Field | Type |
|-------|------|
| id | uuid |
| user_id | uuid |
| place_id | uuid |
| status | enum (pending, approved, rejected) |
| proof_url | string? |
| created_at | datetime |

---

# 4. Extended Entities (Phase 2+)

## 4.1 Premium & Monetisation

### **premium_slots**
| Field | Type |
|-------|------|
| id | uuid |
| type | enum (event_featured, place_featured) |
| entity_id | uuid |
| start_date | datetime |
| end_date | datetime |

### **subscriptions**
| Field | Type |
|-------|------|
| id | uuid |
| organizer_id | uuid |
| plan | enum |
| start_date | datetime |
| end_date | datetime |
| active | boolean |

---

## 4.2 Analytics

### **analytics_events**
| Field | Type |
|-------|------|
| id | uuid |
| entity_type | enum (place, event, story) |
| entity_id | uuid |
| event_type | enum (view, click, favourite) |
| user_id | uuid? |
| ip | string |
| timestamp | datetime |

---

## 4.3 Reviews (Optional)

### **reviews_places**
| Field | Type |
|-------|------|
| id | uuid |
| place_id | uuid |
| user_id | uuid |
| rating | integer (1–5) |
| comment | text |
| images | string[] |
| created_at | datetime |

### **reviews_events**
| Field | Type |
|-------|------|
| id | uuid |
| event_id | uuid |
| user_id | uuid |
| rating | integer |
| comment | text |
| created_at | datetime |

---

# 5. Relational Overview (Text Diagram)
Cities 1──∞ Places 1──∞ PlaceTranslations
│
└──∞ Events 1──∞ EventTranslations

Users 1──∞ UserSavedPlaces
1──∞ UserSavedEvents
1──1 Organizer ──∞ Events
└──∞ PlaceClaims

Stories 1──∞ StoryTranslations

---

# 6. Indexing Strategy (Important for scaling)

### Places
- city_id
- category
- tags (GIN index)
- status
- text-search (pg_trgm)

### Events
- city_id + start_time
- category
- status
- tags (GIN index)

### Stories
- category
- created_at
- slug

---

# 7. Multilingual Strategy

Each entity stores:
- raw original text
- cleaned AI text
- translated variants

Per-language slugs allow clean URLs like:

/de/orte/muenchen/balkan-grill
/en/places/munich/balkan-grill
/hr/mjesta/muenchen/balkan-grill


---

# 8. Status

This model defines the MVP scope and ensures future scalability for partner API, monetisation, analytics, and AI workflows.

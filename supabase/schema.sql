-- Balkanijada Database Schema
-- Führe dieses Skript in der Supabase SQL-Console aus

-- 1. Cities Tabelle (Städte)
CREATE TABLE cities (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country_code CHAR(2) NOT NULL,
    lat DECIMAL(10, 8),
    lon DECIMAL(11, 8),
    created_at TIMESTAMP DEFAULT NOW()
);

-- 2. Places Tabelle (Orte)
CREATE TABLE places (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    address TEXT,
    city_id UUID REFERENCES cities(id) ON DELETE CASCADE,
    country_code CHAR(2),
    lat DECIMAL(10, 8),
    lon DECIMAL(11, 8),
    tags TEXT[],
    website VARCHAR(255),
    instagram VARCHAR(255),
    facebook VARCHAR(255),
    phone VARCHAR(50),
    images TEXT[],
    status VARCHAR(20) DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 3. Place Translations (Übersetzungen)
CREATE TABLE place_translations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    place_id UUID REFERENCES places(id) ON DELETE CASCADE,
    lang CHAR(2) NOT NULL,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    slug VARCHAR(200) NOT NULL,
    UNIQUE(place_id, lang)
);

-- 4. Beispieldaten einfügen
INSERT INTO cities (id, name, country_code, lat, lon) VALUES
    ('a1b2c3d4-1234-5678-9101-abcdef123456', 'Wien', 'AT', 48.2082, 16.3738),
    ('b2c3d4e5-2345-6789-1011-bcdef1234567', 'Berlin', 'DE', 52.5200, 13.4050);

INSERT INTO places (id, category, address, city_id, tags, images, status) VALUES
    ('c3d4e5f6-3456-7890-1112-cdef12345678', 'restaurant', 'Balkanstraße 1, 1010 Wien', 'a1b2c3d4-1234-5678-9101-abcdef123456', '{"cevapi", "burek", "live-music"}', '{"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800"}', 'published'),
    ('d4e5f6a7-4567-8901-1123-def123456789', 'cafe', 'Diasporaplatz 15, 1040 Wien', 'a1b2c3d4-1234-5678-9101-abcdef123456', '{"kafa", "baklava", "dessert"}', '{"https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800"}', 'published');

INSERT INTO place_translations (place_id, lang, name, description, slug) VALUES
    ('c3d4e5f6-3456-7890-1112-cdef12345678', 'de', 'Balkan Grill Royal', 'Authentische cevapi und plejskavica in Wiener Altstadt. Live-Musik am Wochenende.', 'balkan-grill-royal-wien'),
    ('c3d4e5f6-3456-7890-1112-cdef12345678', 'en', 'Balkan Grill Royal', 'Authentic cevapi and plejskavica in Vienna old town. Live music on weekends.', 'balkan-grill-royal-vienna'),
    ('d4e5f6a7-4567-8901-1123-def123456789', 'de', 'Kafana Diaspora', 'Traditioneller Balkan-Kaffee und Süßspeisen in gemütlichem Ambiente.', 'kafana-diaspora-wien');

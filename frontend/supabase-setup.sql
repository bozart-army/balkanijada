-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Cities Table
CREATE TABLE cities (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country_code CHAR(2) NOT NULL,
    lat DECIMAL(10, 8),
    lon DECIMAL(11, 8),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Places Table
CREATE TABLE places (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
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
    owner_user_id UUID,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Place Translations Table
CREATE TABLE place_translations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    place_id UUID REFERENCES places(id) ON DELETE CASCADE,
    lang CHAR(2) NOT NULL,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    slug VARCHAR(200) NOT NULL,
    UNIQUE(place_id, lang)
);

-- Events Table
CREATE TABLE events (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    place_id UUID REFERENCES places(id) ON DELETE SET NULL,
    category VARCHAR(50),
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP,
    city_id UUID REFERENCES cities(id) ON DELETE CASCADE,
    country_code CHAR(2),
    images TEXT[],
    tags TEXT[],
    status VARCHAR(20) DEFAULT 'draft',
    organizer_id UUID,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Event Translations Table
CREATE TABLE event_translations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    event_id UUID REFERENCES events(id) ON DELETE CASCADE,
    lang CHAR(2) NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    slug VARCHAR(200) NOT NULL,
    UNIQUE(event_id, lang)
);

-- Stories Table
CREATE TABLE stories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    category VARCHAR(50),
    cover_image VARCHAR(255),
    author_id UUID,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Story Translations Table
CREATE TABLE story_translations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    story_id UUID REFERENCES stories(id) ON DELETE CASCADE,
    lang CHAR(2) NOT NULL,
    title VARCHAR(200) NOT NULL,
    content TEXT,
    slug VARCHAR(200) NOT NULL,
    UNIQUE(story_id, lang)
);

-- Users Table (vereinfacht, du kannst später Auth von Supabase nutzen)
CREATE TABLE users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    name VARCHAR(100),
    avatar_url VARCHAR(255),
    language CHAR(2) DEFAULT 'de',
    city_id UUID REFERENCES cities(id) ON DELETE SET NULL,
    role VARCHAR(20) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Organizers Table
CREATE TABLE organizers (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(200) NOT NULL,
    website VARCHAR(255),
    instagram VARCHAR(255),
    facebook VARCHAR(255),
    avatar VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Place Claims Table
CREATE TABLE place_claims (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    place_id UUID REFERENCES places(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'pending',
    proof_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

-- User Saved Places
CREATE TABLE user_saved_places (
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    place_id UUID REFERENCES places(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (user_id, place_id)
);

-- User Saved Events
CREATE TABLE user_saved_events (
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    event_id UUID REFERENCES events(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (user_id, event_id)
);

-- Insert some sample data
INSERT INTO cities (id, name, country_code, lat, lon) VALUES
    ('550e8400-e29b-41d4-a716-446655440000', 'Wien', 'AT', 48.2082, 16.3738),
    ('550e8400-e29b-41d4-a716-446655440001', 'Berlin', 'DE', 52.5200, 13.4050);

INSERT INTO places (id, category, address, city_id, tags, images, status) VALUES
    ('550e8400-e29b-41d4-a716-446655440002', 'restaurant', 'Balkanstraße 1, 1010 Wien', '550e8400-e29b-41d4-a716-446655440000', '{"cevapi", "burek", "live-music"}', '{"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800"}', 'published'),
    ('550e8400-e29b-41d4-a716-446655440003', 'cafe', 'Diasporaplatz 15, 1040 Wien', '550e8400-e29b-41d4-a716-446655440000', '{"kafa", "baklava", "dessert"}', '{"https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800"}', 'published');

INSERT INTO place_translations (place_id, lang, name, description, slug) VALUES
    ('550e8400-e29b-41d4-a716-446655440002', 'de', 'Balkan Grill Royal', 'Authentische cevapi und plejskavica in Wiener Altstadt. Live-Musik am Wochenende.', 'balkan-grill-royal-wien'),
    ('550e8400-e29b-41d4-a716-446655440002', 'en', 'Balkan Grill Royal', 'Authentic cevapi and plejskavica in Vienna old town. Live music on weekends.', 'balkan-grill-royal-vienna'),
    ('550e8400-e29b-41d4-a716-446655440003', 'de', 'Kafana Diaspora', 'Traditioneller Balkan-Kaffee und Süßspeisen in gemütlichem Ambiente.', 'kafana-diaspora-wien');

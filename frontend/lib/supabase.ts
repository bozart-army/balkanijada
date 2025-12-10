import { createClient } from '@supabase/supabase-js';

// Diese Werte werden später aus den Vercel-Umgebungsvariablen geladen
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://isbyykdsyorbdmkibjit.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzYnl5a2RzeW9yYmRta2liaml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzNjY0NjQsImV4cCI6MjA4MDk0MjQ2NH0.K784Qx_f-RHtt54e_jfwXS3phMzYfAHTvCUBSJn542k';

// Wichtige Sicherheitswarnung, falls die Keys in der Entwicklung fehlen
if (!supabaseUrl || !supabaseKey) {
  console.warn('⚠️ Supabase Umgebungsvariablen (NEXT_PUBLIC_SUPABASE_URL / _ANON_KEY) sind nicht gesetzt.');
  console.warn('   Die App wird lokal ohne Datenbankverbindung laufen.');
  console.warn('   Für die Live-Website: Bitte trage die Keys in den Vercel Project Settings ein.');
}

// Erstelle und exportiere den Supabase-Client
export const supabase = createClient(supabaseUrl, supabaseKey);

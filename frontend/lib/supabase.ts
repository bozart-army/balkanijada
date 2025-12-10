import { createClient } from '@supabase/supabase-js';

// Diese Werte holen wir gleich von Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Sicherheitscheck: Warnung, falls die Keys fehlen
if (!supabaseUrl || !supabaseKey) {
  console.warn('⚠️ Supabase Umgebungsvariablen sind nicht gesetzt!');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

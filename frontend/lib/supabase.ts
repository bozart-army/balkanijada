import { createClient } from '@supabase/supabase-js';

// Diese Werte werden später aus den Vercel-Umgebungsvariablen geladen
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Erstelle und exportiere den Supabase-Client
export const supabase = createClient(supabaseUrl, supabaseKey);

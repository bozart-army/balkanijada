import { supabase } from '@/lib/supabase';

// Diese Funktion holt die Orte aus der Datenbank
async function getPlaces() {
  try {
    const { data, error } = await supabase
      .from('places')
      .select(`
        *,
        city:cities(name),
        translations:place_translations(*)
      `)
      .eq('status', 'published')
      .limit(6);

    if (error) {
      console.error('Fehler beim Laden der Orte:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Verbindungsfehler:', error);
    return [];
  }
}

export default async function HomePage() {
  // Hier rufen wir die Daten ab
  const places = await getPlaces();

  return (
    <main style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      textAlign: 'center',
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #0C0C0C 0%, #1C3F95 100%)',
      color: 'white',
      minHeight: '100vh'
    }}>
      {/* Logo / Titel */}
      <div style={{ marginBottom: '60px' }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: '900',
          marginBottom: '10px',
          background: 'linear-gradient(90deg, #BA1B1D, #E0A325)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          BALKANIJADA
        </h1>
        <p style={{
          fontSize: '1.5rem',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {places.length > 0 
            ? `🎉 ${places.length} Balkan-Orte live aus der Datenbank!` 
            : 'Die Plattform für die weltweite Balkan-Diaspora.'
          }
        </p>
      </div>

      {/* LIVE-DATEN BEREICH */}
      <div style={{ marginTop: '40px', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#E0A325' }}>
          {places.length > 0 ? '🎯 Live aus unserer Datenbank:' : 'Datenbank wird vorbereitet...'}
        </h2>
        
        {places.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '30px'
          }}>
            {places.map((place) => {
              const germanTranslation = place.translations?.find((t: any) => t.lang === 'de');
              return (
                <div key={place.id} style={{
                  background: 'rgba(255, 255, 255, 0.07)',
                  borderRadius: '16px',
                  padding: '25px',
                  border: '2px solid rgba(224, 163, 37, 0.3)',
                  textAlign: 'left',
                  transition: 'transform 0.3s',
                  cursor: 'pointer'
                }}>
                  <div style={{
                    width: '100%',
                    height: '180px',
                    backgroundImage: `url(${place.images?.[0] || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '12px',
                    marginBottom: '15px'
                  }} />
                  <h3 style={{ 
                    color: '#E0A325', 
                    fontSize: '1.5rem', 
                    marginBottom: '10px',
                    fontWeight: 'bold'
                  }}>
                    {germanTranslation?.name || place.category}
                  </h3>
                  <p style={{ 
                    color: '#ccc', 
                    fontSize: '0.95rem',
                    lineHeight: '1.5',
                    marginBottom: '15px'
                  }}>
                    {germanTranslation?.description || 'Authentischer Balkan-Geschmack.'}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {place.tags?.slice(0, 3).map((tag: string, index: number) => (
                      <span key={index} style={{
                        background: 'rgba(186, 27, 29, 0.2)',
                        color: '#FF9999',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        border: '1px solid rgba(186, 27, 29, 0.5)'
                      }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ 
                    marginTop: '15px', 
                    paddingTop: '15px', 
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    color: '#AAA',
                    fontSize: '0.9rem'
                  }}>
                    📍 {place.address || 'Wien'} • 🏷️ {place.category}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            padding: '40px',
            margin: '30px auto',
            maxWidth: '600px'
          }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
              ⚙️ <strong>Nächster Schritt:</strong> Supabase-Datenbank einrichten
            </p>
            <ol style={{ textAlign: 'left', lineHeight: '1.8', paddingLeft: '20px' }}>
              <li>Erstelle ein kostenloses Projekt auf <a href="https://supabase.com" style={{ color: '#3ECF8E' }}>supabase.com</a></li>
              <li>Führe das <code>schema.sql</code> in der SQL-Console aus</li>
              <li>Trage die Keys in Vercel ein (Umgebungsvariablen)</li>
            </ol>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: '80px',
        paddingTop: '40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        fontSize: '0.9rem',
        opacity: 0.8
      }}>
        <p>
          <strong>🚀 Balkanijada Tech-Status:</strong> 
          {places.length > 0 ? ' ✅ Live-Daten' : ' ⏳ Datenbank vorbereiten'}
        </p>
        <p style={{ marginTop: '10px', fontSize: '0.85rem' }}>
          Next.js Frontend • Supabase Backend • Vercel Hosting
        </p>
      </footer>
    </main>
  );
}

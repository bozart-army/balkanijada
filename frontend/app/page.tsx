export default function HomePage() {
  return (
    <main style={{
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px 20px',
  textAlign: 'center',
  // ▲ DIESE 4 ZEILEN UNTEN EINFÜGEN ▼
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
              Die Plattform für die weltweite Balkan-Diaspora.
            </p>
          </div>

          {/* Hero Abschnitt */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            padding: '60px 40px',
            marginBottom: '60px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
              Kultur. Gemeinschaft. Heimatgefühl.
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '40px',
              maxWidth: '700px',
              margin: '0 auto 40px',
              lineHeight: 1.6
            }}>
              Finde <strong style={{ color: '#E0A325' }}>authentische Orte</strong>, entdecke <strong style={{ color: '#BA1B1D' }}>lebendige Events</strong> und teile <strong style={{ color: '#1C3F95' }}>unsere Geschichten</strong>. Verbunden in jeder Stadt.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button style={{
                background: '#BA1B1D',
                color: 'white',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                Orte entdecken
              </button>
              <button style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid #1C3F95',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                Für Organizer
              </button>
            </div>
          </div>

          {/* Feature-Vorschau */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '60px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '30px',
              borderRadius: '16px',
              border: '1px solid rgba(186, 27, 29, 0.3)'
            }}>
              <h3 style={{ color: '#BA1B1D', fontSize: '1.8rem' }}>Orte</h3>
              <p>Restaurants, Cafés, Clubs und Kulturzentren der Balkan-Diaspora weltweit.</p>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '30px',
              borderRadius: '16px',
              border: '1px solid rgba(224, 163, 37, 0.3)'
            }}>
              <h3 style={{ color: '#E0A325', fontSize: '1.8rem' }}>Events</h3>
              <p>Konzerte, Festivals und Partys mit Balkan-Flair in deiner Stadt.</p>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '30px',
              borderRadius: '16px',
              border: '1px solid rgba(28, 63, 149, 0.3)'
            }}>
              <h3 style={{ color: '#1C3F95', fontSize: '1.8rem' }}>Stories</h3>
              <p>Geschichten, Interviews und Guides aus der Diaspora-Community.</p>
            </div>
          </div>

          {/* Footer */}
          <footer style={{
            marginTop: '80px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '0.9rem',
            opacity: 0.7
          }}>
            <p>Balkanijada – Eine Heimat für die Diaspora. Built with Vision. 🇧🇦</p>
            <p style={{ marginTop: '10px' }}>Nächster Schritt: Datenbank-Anbindung & Live-Deployment!</p>
          </footer>
        </main>
  );
}

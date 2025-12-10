export const metadata = {
  title: 'Balkanijada - Die Plattform für die Balkan-Diaspora',
  description: 'Entdecke Balkan-Orte, Events und Stories weltweit.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "OCS Creative Panel",
  description: "İçerik Yönetim Paneli",
};

export default function StudioLayout({ children }) {
  return (
    <html lang="tr">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
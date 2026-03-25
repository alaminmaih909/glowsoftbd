
import "./globals.css";


export const metadata = {
  title: "Glowsoft BD - Coming Soon",
  description: "GlowSoftBD খুব শীঘ্রই আসছে নতুন স্কিন কেয়ার প্রোডাক্ট নিয়ে 💖",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
/* export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
 */
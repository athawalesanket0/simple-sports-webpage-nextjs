import './globals.css'

export const metadata = {
  title: 'Sports Webpage',
  description: 'A webpage showcasing sports teams and events',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
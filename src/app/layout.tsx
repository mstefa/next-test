export const metadata = {
  title: 'mstefa',
  description: 'Matias Stefanutti personal web site',
  icons: {
    icon: './favicon.ico',
  }
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

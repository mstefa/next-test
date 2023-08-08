export const metadata = {
  title: 'mstefa',
  description: 'Matias Stefanutti personal web site',
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

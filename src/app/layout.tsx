export const metadata = {
  title: 'mstefa',
  description: 'Matias Stefanutti personal web site',
  icons: {
    icon: './Icon2Small.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="../images/favicon.ico" />
      <body>{children}</body>
    </html>
  )
}

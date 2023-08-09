import '../globals.css'

export const metadata = {
  title: 'mstefa blog',
  description: 'Matias Stefanutti personal Blog',
}

export default function BlogLayout({
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

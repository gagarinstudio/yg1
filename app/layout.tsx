import './globals.css'

import{Montserrat} from "@next/font/google";

const montserrat = Montserrat({
    subsets: ['cyrillic','latin'],
    // default, can also use "swap" to ensure custom font always shows
    display: 'optional',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={montserrat.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="relative bg-gradient-to-b from-indigo-900 via-blue-900 to-indigo-800 min-h-screen">
      {children}
      </body>
    </html>
  )
}

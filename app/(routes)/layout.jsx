import 'app/global.css'
import { Roboto } from '@next/font/google'

import { Layer } from 'app/_components'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  preload: true,
  as: 'font',
})

export const metadata = {
  title: {
    default: 'Web Dev Hut',
  },
  description: '',
  icons: {
    icon: '/logo-1.svg',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={roboto.className}>
      <body>
        <Layer>{children}</Layer>
      </body>
    </html>
  )
}

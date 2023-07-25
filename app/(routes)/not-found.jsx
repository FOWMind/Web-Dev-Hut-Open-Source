import Link from 'next/link'
import Image from 'next/image'

import { Headline, Paragraph } from 'app/_components'

export default function Error404() {
  return (
    <div className="text-center">
      <Headline size="xl" className="mx-auto">
        Ups, no hay nada aquí
      </Headline>

      <Image
        src="/img/404.svg"
        alt="illustration"
        width="400"
        height="256"
        className="w-[300px] sm:w-[400px] h-auto max-h-64 object-contain block mx-auto mt-4 mb-6"
      />

      <Paragraph>
        ¿Quieres ir al{' '}
        <Link href="/" className="underline py-2 hover:no-underline">
          inicio
        </Link>
        ?
      </Paragraph>
    </div>
  )
}

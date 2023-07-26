import { MdBallot } from 'react-icons/md'

import typescriptIcon from 'src/_assets/icons/typescript.svg'
import angularIcon from 'src/_assets/icons/angular.svg'
import reactjsIcon from 'src/_assets/icons/reactjs.svg'
import nextjsIcon from 'src/_assets/icons/nextjs.svg'
import nodejsIcon from 'src/_assets/icons/nodejs.svg'
import sqlIcon from 'src/_assets/icons/sql.svg'
import dockerIcon from 'src/_assets/icons/docker.svg'

import typescriptImage from 'src/_assets/cards/typescript.png'
import angularImage from 'src/_assets/cards/angular.png'
import reactjsImage from 'src/_assets/cards/reactjs.png'
import nextjsImage from 'src/_assets/cards/nextjs.png'
import nodejsImage from 'src/_assets/cards/nodejs.png'
import sqlImage from 'src/_assets/cards/sql.png'
import dockerImage from 'src/_assets/cards/docker.png'

import {
  Button,
  Card,
  IntroductionText,
  LinkShallow,
  TechnologyAreaCard,
  TechnologyIcons,
} from 'src/_components'

export function FeaturedSection() {
  const technologies = {
    frontend: [
      {
        name: 'HTML',
        description:
          'Lenguaje de marcado - se utiliza para estructurar y dar formato',
        path: '/tecnologia/html',
      },
      {
        name: 'CSS',
        description:
          'Lenguaje de estilos - se utiliza para dar estilo y diseño',
        path: '/tecnologia/css',
      },
      {
        name: 'JavaScript',
        description:
          'Lenguaje de programación - se utiliza para añadir interactividad',
        path: '/tecnologia/javascript',
      },
    ],
    backend: [
      {
        name: 'PHP',
        description: 'Lenguaje de programación de código abierto especialmente',
        path: '/tecnologia/php',
      },
      {
        name: 'Python',
        description: 'Lenguaje de programación de alto nivel de código abierto',
        path: '/tecnologia/python',
      },
      {
        name: 'Java',
        description:
          'Lenguaje de programación de alto nivel orientado a objetos',
        path: '/tecnologia/java',
      },
    ],
  }

  return (
    <section className="text-[#f1f1f1] my-16">
      <IntroductionText />
      <TechnologyIcons />

      <div className="mt-10">
        <div className="lg:flex lg:justify-between lg:items-start lg:gap-8 direct-child:mb-8">
          <TechnologyAreaCard
            title={'Frontend'}
            technologies={technologies.frontend}
            cardOrder={1}
          >
            <Card
              mainImage={reactjsImage}
              iconImage={reactjsIcon}
              title={'React - Desarrollo web'}
              description={'Biblioteca de JavaScript para construir interfaces'}
              to="/tecnologia/react"
              className="from-[#FFDF6F] to-[#983232] mt-5 2lg:mt-0"
            />
          </TechnologyAreaCard>

          <TechnologyAreaCard
            title={'Backend'}
            technologies={technologies.backend}
            cardOrder={0}
          >
            <Card
              mainImage={nodejsImage}
              iconImage={nodejsIcon}
              title={'Node.js - Desarrollo web'}
              description={'Entorno de ejecución de JavaScript'}
              to="/tecnologia/nodejs"
              className="from-[#4BBDFA] to-[#276CDA] mb-5 2lg:mb-0"
            />
          </TechnologyAreaCard>
        </div>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 justify-center xl:justify-between sm:gap-8 gap-5 sm:direct-child:mb-8">
          <Card
            mainImage={typescriptImage}
            iconImage={typescriptIcon}
            title={'TypeScript'}
            description={
              'Lenguaje de programación de código abierto que es una extensión de JavaScript'
            }
            to="/tecnologia/typescript"
            className="from-[#9E80E2] to-[#4F98E5]"
          />

          <Card
            mainImage={sqlImage}
            iconImage={sqlIcon}
            title={'SQL'}
            description={
              'Lenguaje de programación utilizado para administrar y manipular bases de datos relacionales'
            }
            to="/tecnologia/sql"
            className="from-[#59BCF7] to-[#2171DA]"
          />

          <Card
            mainImage={nextjsImage}
            iconImage={nextjsIcon}
            title={'Next.js'}
            description={
              'Framework de React para construir aplicaciones web del lado del servidor (SSR, por sus siglas en inglés)'
            }
            to="/tecnologia/nextjs"
            className="from-[#34B3FA] to-[#4b7880]"
          />

          <Card
            mainImage={dockerImage}
            iconImage={dockerIcon}
            title={'Docker'}
            description={
              'Plataforma de software, se utiliza para crear, desplegar, ejecutar aplicaciones en contenedores'
            }
            to="/tecnologia/docker"
            className="from-[#A7773E] to-[#8E97A6]"
          />

          <Card
            mainImage={angularImage}
            iconImage={angularIcon}
            title={'Angular'}
            description={
              'Framework de desarrollo web que se utiliza para construir aplicaciones web y móviles'
            }
            to="/tecnologia/angular"
            className="from-[#644285] to-[#8078DF]"
          />
        </div>
      </div>

      <div className="text-center">
        <LinkShallow href="/tecnologias">
          <Button as="span" icon={MdBallot} className="mt-5">
            Ver todo
          </Button>
        </LinkShallow>
      </div>
    </section>
  )
}

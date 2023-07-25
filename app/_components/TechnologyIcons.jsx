import Image from 'next/image'

import html5Icon from 'app/_assets/icons/html5.svg'
import css3Icon from 'app/_assets/icons/css3.svg'
import javascriptIcon from 'app/_assets/icons/javascript.svg'
import reactjsIcon from 'app/_assets/icons/reactjs.svg'
import javaIcon from 'app/_assets/icons/java.svg'
import pythonIcon from 'app/_assets/icons/python.svg'
import rubyIcon from 'app/_assets/icons/ruby.svg'

export function TechnologyIcons({ className = '', ...props }) {
  return (
    <ul
      className={`my-10 direct-child:inline-block direct-child:bg-gradient-to-b direct-child:from-white direct-child:to-gray-500 direct-child:p-[0.4rem] direct-child:rounded-[50px] sm:direct-child:mr-6 direct-child:mr-3 [&_img]:w-6 [&_img]:h-6 [&_img]:object-contain [&_img]:select-none [&_img]:pointer-events-none ${className}`}
      {...props}
    >
      <li>
        <Image src={html5Icon} draggable="false" alt="HTML icon" />
      </li>
      <li>
        <Image src={css3Icon} draggable="false" alt="CSS icon" />
      </li>
      <li>
        <Image src={javascriptIcon} draggable="false" alt="JavaScript icon" />
      </li>
      <li>
        <Image src={reactjsIcon} draggable="false" alt="React icon" />
      </li>
      <li>
        <Image src={javaIcon} draggable="false" alt="Java icon" />
      </li>
      <li>
        <Image src={pythonIcon} draggable="false" alt="Python icon" />
      </li>
      <li>
        <Image src={rubyIcon} draggable="false" alt="Ruby language icon" />
      </li>
    </ul>
  )
}

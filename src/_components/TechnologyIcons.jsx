import html5Icon from 'src/_assets/icons/html5.svg'
import css3Icon from 'src/_assets/icons/css3.svg'
import javascriptIcon from 'src/_assets/icons/javascript.svg'
import reactjsIcon from 'src/_assets/icons/reactjs.svg'
import javaIcon from 'src/_assets/icons/java.svg'
import pythonIcon from 'src/_assets/icons/python.svg'
import rubyIcon from 'src/_assets/icons/ruby.svg'

export function TechnologyIcons({ className = '', ...props }) {
  return (
    <ul
      className={`my-10 direct-child:inline-block direct-child:bg-gradient-to-b direct-child:from-white direct-child:to-gray-500 direct-child:p-[0.4rem] direct-child:rounded-[50px] sm:direct-child:mr-6 direct-child:mr-3 [&_img]:w-6 [&_img]:h-6 [&_img]:object-contain [&_img]:select-none [&_img]:pointer-events-none ${className}`}
      {...props}
    >
      <li>
        <img
          src={html5Icon?.src || html5Icon}
          draggable="false"
          alt="HTML icon"
        />
      </li>
      <li>
        <img src={css3Icon?.src || css3Icon} draggable="false" alt="CSS icon" />
      </li>
      <li>
        <img
          src={javascriptIcon?.src || javascriptIcon}
          draggable="false"
          alt="JavaScript icon"
        />
      </li>
      <li>
        <img
          src={reactjsIcon?.src || reactjsIcon}
          draggable="false"
          alt="React icon"
        />
      </li>
      <li>
        <img
          src={javaIcon?.src || javaIcon}
          draggable="false"
          alt="Java icon"
        />
      </li>
      <li>
        <img
          src={pythonIcon?.src || pythonIcon}
          draggable="false"
          alt="Python icon"
        />
      </li>
      <li>
        <img
          src={rubyIcon?.src || rubyIcon}
          draggable="false"
          alt="Ruby language icon"
        />
      </li>
    </ul>
  )
}

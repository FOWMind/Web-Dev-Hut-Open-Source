import logo from 'src/_assets/logo.png'

export function Logo() {
  return (
    <div>
      <img
        src={logo.src}
        alt="Logotipo de Web Dev"
        width="81"
        height="59"
        className="w-[80px] h-auto"
      />
    </div>
  )
}

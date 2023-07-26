import { useAlert } from 'src/_hooks'
import { Navbar, Footer, ScrollButton } from 'src/_components'

export function Layer({ children }) {
  const { AlertContainer } = useAlert()

  return (
    <div className="bg-[#201F47] relative overflow-x-hidden min-h-screen flex flex-col">
      <AlertContainer />
      <ScrollButton />
      <Navbar />
      <div className="grow">{children}</div>
      <Footer className="justify-self-end" />
    </div>
  )
}

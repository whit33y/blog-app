import { Header } from './Header'
import { Footer } from './Footer'

type BoilerplateType = {
  name: string | undefined
  children: React.ReactNode
}

function Boilerplate(props: BoilerplateType) {
  return (
    <div className='flex flex-col bg-gray-100 w-screen h-screen'>
      <Header />
      <h1 className='text-3xl text-center mb-4 text-sky-900'>{props.name}</h1>
      {props.children}
      <Footer />
    </div>
  )
}

export { Boilerplate }

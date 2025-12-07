// MENU NAV
import LogoNav from './components/menuNav/logoNav'
import LinksNav from './components/menuNav/linksNav'
// BODY TEMPLATE
import TitleBody from './components/bodyTemplate/TitleBody'
import ParagBody from './components/bodyTemplate/ParagBody' 
import ButtonBody from './components/bodyTemplate/ButtonBody'
// CARD CONTAINER
import TitleCard from './components/bodyTemplate/card/TitleCard' 
import NumberCard from './components/bodyTemplate/card/NumberCard' 
import DescricaoCard from './components/bodyTemplate/card/DescricaoCard'  


function App() {
  return (
    <>
      <nav className='flex justify-between px-20 py-5 bg-zinc-950 border-b-gray-500 border-1 '>
        <LogoNav />
        <LinksNav />
      </nav>
      <section className='bg-zinc-950 flex items-center flex-col justify-center max-w-7xl m-auto'>
        <TitleBody />
        <ParagBody /> 
        <ButtonBody />  
      </section>
      <section className="bg-zinc-950 p-15 max-w-7xl m-auto" >

        <hr className="border-1 border-gray-500 w-full mb-4 max-w-7xl m-auto" />
        <hr className="border-1 border-gray-500 w-full mb-20 max-w-7xl m-auto" />

        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <div className="bg-zinc-900 p-3 col-span-2 rounded-md grid gap-2">   
            <NumberCard>01</NumberCard>
            <TitleCard>BRAND INDENTTY DESIGN</TitleCard>
            <DescricaoCard>Through research, design, and testing, developers transform ideas into functional solutions, driving innovation and enhancing everyday life. Effective development requires collaboration, creativity, and a deep understanding of technology.</DescricaoCard>
          </div>

          <div className="bg-zinc-900 p-3 rounded-md grid gap-2">   
            <NumberCard>02</NumberCard>
            <TitleCard>VISUAL DESIGN</TitleCard>
            <DescricaoCard>We help ambitious businesses like yours generate more profits by building awareness.</DescricaoCard>
          </div>

          <div className="bg-zinc-900 p-3 rounded-md grid ">   
            <NumberCard>03</NumberCard>
            <TitleCard>Digital Innovator</TitleCard>
            <DescricaoCard>We help our clients to create a new brand identity design .</DescricaoCard>
          </div>

          <div className="bg-zinc-900 p-3 col-span-2 rounded-md grid ">   
            <NumberCard>04</NumberCard>
            <TitleCard>BFuture Builder</TitleCard>
            <DescricaoCard>Development is the process of creating and improving products, services, or systems to meet user needs. It encompasses various fields, including software, web, and game development. </DescricaoCard>
          </div>
        </div>
      </section>
      <footer className='border-t-gray-500 border-1 p-4 mt-10'>
        <h2 className='text-white text-center'>Site criado por: &copy; <a href="https://www.instagram.com/k4ua_dev?igsh=MTJ3MXhkaGgxc3ViaA==">K4ua_Dev</a></h2>
      </footer>
    </>
  )
}

export default App;
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Journal from './components/Journal'
import AudioPlayer from './components/AudioPlayer'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor' // 

function App() {
  return (
    /* Added 'cursor-none' to hide the system cursor on desktop */
    <div className="min-h-screen selection:bg-sage selection:text-forest relative md:cursor-none">
      <CustomCursor /> 
      
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-24">
        <Hero />
        <Gallery />
        <Journal />
        <Contact />
      </main>
      
      <Navbar />
      <AudioPlayer />
    </div>
  )
}

export default App
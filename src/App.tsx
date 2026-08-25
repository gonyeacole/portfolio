import { useState } from 'react'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'

export type View = 'home' | 'about' | 'contact'

function App() {
  const [view, setView] = useState<View>('home')

  if (view === 'home') {
    return <HomePage onNavigate={setView} />
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
      {view === 'about' && <AboutPage onNavigate={setView} />}
      {view === 'contact' && <ContactPage onNavigate={setView} />}
    </div>
  )
}

export default App

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Intro from "./Intro"
import Bar from "./Bar"
import Features from './Features'
import Findout from "./Findout"
import Footer from "./Footer"
import Timeline from './timeline';
import Card from './card';
import Community from './community';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <header>
              <Bar />
              <Intro />
            </header>
            <main>
              <Features />
              <Findout />
            </main>
            <Footer />
          </>
        } />
        <Route path="/activities" element={
          <>
            <header>
              <Bar />
            </header>
            <main>
              <Timeline />
            </main>
            <Footer />
          </>
        } />
        <Route path="/past-events" element={
          <>
            <header>
              <Bar />
            </header>
            <main>
              <Card />
            </main>
            <Footer />
          </>
        } />
        <Route path="/community-profile" element={
          <>
            <header>
              <Bar />
            </header>
            <main>
              <Community />
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App



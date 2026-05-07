import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stacks from './components/Stacks';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className='min-h-screen bg-surface'>
            <Navbar />
            <main>
                <Hero />
                <Stacks />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

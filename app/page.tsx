import './globals.css'
import About from '@/src/components/about/About'
import Presentation from '../src/components/presentation/Presentation'
import NavBar from '@/src/components/navBar/NavBar';
import SocialMedia from '@/src/components/socialmedia/SocialMedia';
import Jobs from '@/src/components/jobs/Jobs';
import Projects from '@/src/components/projects/Projects';
import Contact from '@/src/components/contact/Contact';

export default function Home() {
  return (
    <div className="App">
      <NavBar/>
      <Presentation/>
      <About></About>
      <Jobs></Jobs>
      <Projects></Projects>
      <Contact></Contact>
      <SocialMedia></SocialMedia>
      <footer>
        Designed & Built by Matías Stefanutti
      </footer>
    </div>
  );
}

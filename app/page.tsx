import './globals.css'
import About from '@/src/components/about/About'
import Presentation from '../src/components/presentation/Presentation'
import NavBar from '@/src/components/navBar/NavBar';
import SocialMedia from '@/src/components/socialmedia/SocialMedia';
import { Icon } from '@/src/components/icon/Icon';
import Jobs from '@/src/components/jobs/Jobs';
import Projects from '@/src/components/projects/Projects';

export default function Home() {
  return (
    <div className="App">
      <NavBar/>
      <Presentation/>
      <About></About>
      <Jobs></Jobs>
      <Projects></Projects>
      <About></About>
      <SocialMedia></SocialMedia>
      <footer>
        Designed & Built by Matías Stefanutti
      </footer>
    </div>
  );
}

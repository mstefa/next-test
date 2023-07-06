import './globals.css'
import About from '@/src/components/about/About'
import Presentation from '../src/components/presentation/Presentation'
import NavBar from '@/src/components/navBar/NavBar';
import SocialMedia from '@/src/components/socialmedia/SocialMedia';
import { Icon } from '@/src/components/icon/Icon';

export default function Home() {
  return (
    <div className="App">
      <NavBar/>
      <Presentation/>
      <About></About>
      <section>
        <Icon size="small" icon="linkedin"></Icon>
        hola
      </section>
      <About></About>
      <SocialMedia></SocialMedia>
      <footer>
        Designed & Built by Matías Stefanutti
      </footer>
    </div>
  );
}

import About from '@/src/components/About/About'
import Presentation from '../src/components/presentation/Presentation'

export default function Home() {
  return (
    <div className="App">
      <Presentation/>
      <About></About>
      <footer>
        Designed & Built by Matías Stefanutti
      </footer>
    </div>
  );
}

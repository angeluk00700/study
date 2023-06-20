import logo from './logo.svg';
import './App.css';

function Header() {
  return <header>
    <h1><a href="/">WEB</a></h1>
  </header>
}

function Nav() {
  return <nav>
    <ol>
      <li><a href="/read1">html</a></li>
      <li><a href="/read2">js</a></li>
      <li><a href="/read3">css</a></li>
    </ol>
  </nav>
}
function App() {
  return (
    <div>
      <Header></Header>
      <Header></Header>
      <Header></Header>

      <Nav></Nav>
    </div>
  );
}

export default App;

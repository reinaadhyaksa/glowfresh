import './style.css';
import { Navbar } from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import { HandleFunction } from './components/ui';

document.querySelector('#app').innerHTML = Navbar() + Content() + Footer();

HandleFunction();
import { React,  Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavbarComponents } from './components/Index';
import Home from './pages/Home';
import Success from './pages/Success';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponents/>
          <main>
            <Routes>
              <Route path="/" element={<Home/>} exact/>
              <Route path="/success" element={<Success/>} />
            </Routes>
          </main>
      </BrowserRouter>
    )
  }
}

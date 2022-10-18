
import { useState, useEffect, useRef } from "react";
import DropdownList from "./DropdownList";
import "./css/header.scss";
// import dropdown from './images/dropdown.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  let muneRef = useRef()
  useEffect(()=>{
    let handler = (event)=>{
      if(!muneRef.current.contains(event.target)){
        setOpen(false);
        //console.log(muneRef.current)
      }
    };
    document.addEventListener('mousedown', handler);
    return()=>{
      document.removeEventListener('mousedown', handler);
    }
  });
  useRef(()=>{

  })
  return (
    <div className="header" ref={muneRef}>
      <div className="brand" >
        <a href="/the-siren" className="brand-logo">
          <span className="the">The</span>
          <span className="siren">Siren</span>
        </a>
        <div className="dropdown" >
          <button className="dropdown-btn" onClick={()=>setOpen(!open)}>
            <img src='./images/dropdown.png' alt="error" />
          </button>
        </div>

      </div>
      <nav className={`nav-bar ${ open ? 'active' : 'inactive'}`} >
        <DropdownList text='Home' path='/the-siren' />
        <DropdownList text='Bollywood' path='/bollywood' />
        <DropdownList text='Technology' path='/technology' />
        <DropdownList text='Hollywood' path='/hollywood' />
        <DropdownList text='Fitness' path='/fitness' />
        <DropdownList text='Food' path='/food' />
        <DropdownList text='Login' path='/login' />
        <DropdownList text='SignUp' path='/signup' />

      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";


function Footer() {
  return (
    <footer className='footer'>
      <ul className='social_list'>
        <li>
        <a className="i-footer" href="https://www.facebook.com/greicysantanaf/?locale=pt_BR"><FaFacebook/></a>
        </li>
        <li>
        <a href="https://www.instagram.com/greicyellem/"><FaInstagram/></a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/greicyellem/"><FaLinkedin /></a>
        </li>
        <li>
        <a href="https://github.com/Greicyellem"><AiFillGithub /></a>
        </li>
      </ul>
      <p className='copy_right'>
        <span>Siga nossas redes </span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;

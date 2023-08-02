import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Sizhe Yan</h2>
        <h2>严斯哲</h2>
        <p><a href="mailto:yansizhe2019@163.com">yansizhe2019@163.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m 斯哲(Sizhe). I am a <a href="https://ubc.ca/">UBC ECE</a> graduate, Currenly looking for posistions in FPGA, Firmware or hardware engineer.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Sizhe Yan <Link to="/">sizheyan.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;

import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Intern/Cell';
import data from '../data/Intern';

const Projects = () => (
  <Main
    title="Intern"
    description="Learn about Sizhe Yan's Intern."
  >
    <article className="post" id="Interns">
      <header>
        <div className="title">
          <h2><Link to="/Intern">Intern</Link></h2>
          <p>The internship experience that I have</p>
        </div>
      </header>
      {data.map((Intern) => (
        <Cell
          data={Intern}
          key={Intern.title}
        />
      ))}
    </article>
  </Main>
);

export default Intern;

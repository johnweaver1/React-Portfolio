import React from "react";
import "../styles/project.css";
import gitfund from "../images/gitfund-removebg-preview.png";
import munchr from "../images/munchr-png.png";

export default function Projects() {
  return (

    <section id="projectContainer">
      <div className="container">
        <h2 id="codingProjects">Coding Projects</h2>

        <div id="projectCards">
          <a
            className="anchor"
            href="https://git-fund.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article className="card myProjects m-2" id="project1">


              <div className="card-body  ">
                <img src={gitfund} className="projectThumb"></img>

                <p className="projectDescription">
                  GitFund is a crowdfunding website where developers can support
                  developers.
                  <br></br>
                  <br></br>
                  This project uses React in the front end with a Node.js and
                  Express.js Server using Graphql.
                </p>
              </div>
            </article>
          </a>

          <a
            className="anchor"
            href="https://rystreet.github.io/Munchr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article className="card myProjects m-2" id="project1">

              <div className="card-body">
                <img src={munchr} className="projectThumb"></img>

                <p className="projectDescription">
                  A Food and Cocktail pairing app that finds recipes using meal
                  names. Users can input an ingredient in either the food or
                  drink search bar.
                  <br></br>
                  <br></br>
                  MERN stack RESTful app utilizing MySQL for database and
                  Tailwind for UI.
                </p>
              </div>
            </article>
          </a>
        </div>
      </div>
    </section>
  );
}

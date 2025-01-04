import React from "react";
import imagem from "../assets/background-header.jpeg";
import profile from "../assets/profile.jpg";
import SkillsSection from "./SkillsSection";

export default function FirstSection() {


    return (
        <section className="sectio">
            <div className="backgrond">
                <img className="img" src={imagem} alt="background" />
            </div>
            
            <div className="title-contet">
                <div className="text">
                    <div className="ani"></div>
                    <img className="proile" src={profile} alt="profile"/>
                    <div className="contet">
                        <h2>Oi, sou o Lucas Eduardo. Prazer em te conhecer!</h2>
                        <p>Desde que comecei minha jornada como entusiasta de programação há 4 anos, venho aprimorando minhas habilidades e explorando novas tecnologias. Tenho experiência em Web Design, trabalhando com HTML, CSS, JavaScript e ReactJS, além de React Native para desenvolvimento mobile. Sou apaixonado por Python e banco de dados, com um foco especial no Firebase, onde venho desenvolvendo integrações sólidas e eficientes para diversas aplicações. Sou naturalmente curioso, confiante no que faço e estou sempre buscando formas de me aprimorar e criar soluções práticas e inovadoras</p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
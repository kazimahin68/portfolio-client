import RotatingText from 'react-rotating-text';
import img from '../../src/assets/about-img.jpg'
import Marquee from 'react-fast-marquee';
import mongodb from '../../src/assets/mongodb.svg'
import html from '../../src/assets/html.png'
import css from '../../src/assets/css.png'
import express from '../../src/assets/express.png'
import figma from '../../src/assets/figma.png'
import firebase from '../../src/assets/firebase.png'
import github from '../../src/assets/github.png'
import js from '../../src/assets/js.png'
import netlify from '../../src/assets/netlify.png'
import node from '../../src/assets/node.png'
import npm from '../../src/assets/npm.png'
import react from '../../src/assets/react.png'
import tailwind from '../../src/assets/tailwind css.png'
import vscode from '../../src/assets/vs-code.png'
import bootstrap from '../../src/assets/bootstrap.png'
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
    const titles = ["MERN stack Developer", "JavaScript Developer", "React Developer"];

    const handleDownload = () => {
        const url = '/Resume_of_Kazi_Modasser_Hossain.pdf';
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = "Resume_of_Kazi_Modasser_Hossain.pdf";
        anchor.click();
    }
    return (
        <div id='home' className='flex flex-col lg:flex-row items-center gap-20 w-4/5 mx-auto mt-32'>
            <div className='w-full lg:w-1/2'>
                <h3 className='text-[#3498db] font-extrabold text-4xl mb-2'>Hi, I am Kazi Modasser Hossain</h3>
                <h2 className="text-[#3498db] font-bold text-3xl"><RotatingText items={titles}></RotatingText>
                </h2>
                <p className='mt-5'>I am a passionate junior web developer with a strong proficiency in the MERN stack. I am a hardworking and dedicated individual, committed to delivering high-quality results. With a strong sense of integrity, I approach my work with honesty and transparency. As a self-motivated problem solver, I am constantly seeking opportunities to learn and grow in this ever-evolving field.</p>

                <div className='flex items-center mt-5'>
                    <h2 className='font-bold'>Find Me: </h2>
                    <a href="https://www.linkedin.com/in/kazi-modasser/" className='mr-2 ml-2'><FaLinkedin className='text-[#0a66c2] bg-white rounded-sm h-5 w-5' ></FaLinkedin></a>
                    <a href="https://github.com/kazimahin68" className='mr-2'><FaGithub className='text-black h-5 w-5'></FaGithub></a>
                    <a href="https://www.facebook.com/kazi.mahin3"><FaFacebook className='text-[#1094f4] bg-white border-0 rounded-full h-5 w-5'></FaFacebook></a>
                </div>

                <div className='flex gap-5 mt-5'>
                    <button className='btn btn-sm bg-[#3498db] font-bold border-0 hover:bg-[#2980b9]' onClick={handleDownload}>Resume <FaDownload></FaDownload></button>
                    <button className='btn btn-sm bg-[#3498db] font-bold border-0 hover:bg-[#2980b9]'><a href="#contact">Hire Me</a></button>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex flex-col justify-center items-center'>
                <img className='rounded-full w-96 h-96' src={img} alt="" />
                <div className='mt-10 w-11/12'>
                    <Marquee>
                        <img src={mongodb} className='w-10 h-10 mx-2' alt="" />
                        <img src={html} className='w-10 h-10 mx-2' alt="" />
                        <img src={css} className='w-10 h-10 mx-2' alt="" />
                        <img src={react} className='w-10 h-10 mx-2' alt="" />
                        <img src={express} className='w-10 h-10 mx-2' alt="" />
                        <img src={tailwind} className='w-10 h-10 mx-2' alt="" />
                        <img src={bootstrap} className='w-10 h-10 mx-2' alt="" />
                        <img src={vscode} className='w-10 h-10 mx-2' alt="" />
                        <img src={figma} className='w-10 h-10 mx-2' alt="" />
                        <img src={netlify} className='w-10 h-10 mx-2' alt="" />
                        <img src={firebase} className='w-10 h-10 mx-2' alt="" />
                        <img src={github} className='w-10 h-10 mx-2' alt="" />
                        <img src={js} className='w-10 h-10 mx-2' alt="" />
                        <img src={node} className='w-10 h-10 mx-2' alt="" />
                        <img src={npm} className='w-10 h-10 mx-2' alt="" />
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default About;
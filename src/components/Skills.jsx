import { Line } from 'rc-progress';
import mongodb from '../../src/assets/mongodb.svg'
import html from '../../src/assets/html.png'
import css from '../../src/assets/css.png'
import express from '../../src/assets/express.png'
import figma from '../../src/assets/figma.png'
import firebase from '../../src/assets/firebase.png'
import github from '../../src/assets/github.png'
import js from '../../src/assets/js.png'
import node from '../../src/assets/node.png'
import react from '../../src/assets/react.png'
import tailwind from '../../src/assets/tailwind css.png'
import bootstrap from '../../src/assets/bootstrap.png'

const Skills = () => {
    return (
        <div className='w-11/12 lg:w-4/5 mx-auto mt-12'>
            <h2 className='font-extrabold text-3xl mb-10 text-center'>Skills</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='flex gap-5 items-center'>
                    <img src={html} className='w-10 h-10' alt="" />
                    <div className='flex flex-col w-full'>
                        <div className='flex gap-5'>
                            <h2 className='font-bold text-xl mb-1'>HTML</h2>
                            <p className='font-bold text-xl'>85%</p>
                        </div>
                        <Line percent={85} strokeWidth={1} trailWidth={1} strokeColor="red" className='mb-1' />
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={css} className='w-10 h-10' alt="" />
                    <div className='flex flex-col w-full'>
                        <div className='flex gap-5'>
                            <h2 className='font-bold text-xl mb-1'>CSS</h2>
                            <p className='font-bold text-xl'>80%</p>
                        </div>
                        <Line percent={80} strokeWidth={1} trailWidth={1} strokeColor="red" className='mb-1' />
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={js} className='w-10 h-10' alt="" />
                    <div className='flex flex-col w-full'>
                        <div className='flex gap-5'>
                            <h2 className='font-bold text-xl mb-1'>JavaScript</h2>
                            <p className='font-bold text-xl'>75%</p>
                        </div>
                        <Line percent={75} strokeWidth={1} trailWidth={1} strokeColor="red" className='mb-1' />
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={tailwind} className='w-10 h-10' alt="" />
                    <div className='flex flex-col w-full'>
                        <div className='flex gap-5'>
                            <h2 className='font-bold text-xl mb-1'>Tailwind</h2>
                            <p className='font-bold text-xl'>85%</p>
                        </div>
                        <Line percent={85} strokeWidth={1} trailWidth={1} strokeColor="red" className='mb-1' />
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={bootstrap} className='w-10 h-10' alt="" />
                    <div className='flex flex-col w-full'>
                        <div className='flex gap-5'>
                            <h2 className='font-bold text-xl mb-1'>Bootstrap</h2>
                            <p className='font-bold text-xl'>80%</p>
                        </div>
                        <Line percent={80} strokeWidth={1} trailWidth={1} strokeColor="red" className='mb-1' />
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={react} className='w-10 h-10' alt="" />
                    <div className='flex flex-col w-full'>
                        <div className='flex gap-5'>
                            <h2 className='font-bold text-xl mb-1'>React</h2>
                            <p className='font-bold text-xl'>70%</p>
                        </div>
                        <Line percent={70} strokeWidth={1} trailWidth={1} strokeColor="red" className='mb-1' />
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={express} className='w-10 h-10' alt="" />
                    <div className='flex flex-col w-full'>
                        <div className='flex gap-5'>
                            <h2 className='font-bold text-xl mb-1'>Express</h2>
                            <p className='font-bold text-xl'>65%</p>
                        </div>
                        <Line percent={65} strokeWidth={1} trailWidth={1} strokeColor="red" className='mb-1' />
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={mongodb} className='w-10 h-10' alt="" />
                    <div className='flex flex-col w-full'>
                        <div className='flex gap-5'>
                            <h2 className='font-bold text-xl mb-1'>MongoDB</h2>
                            <p className='font-bold text-xl'>60%</p>
                        </div>
                        <Line percent={60} strokeWidth={1} trailWidth={1} strokeColor="red" className='mb-1' />
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={node} className='w-10 h-10' alt="" />
                    <div className='flex flex-col w-full'>
                        <div className='flex gap-5'>
                            <h2 className='font-bold text-xl mb-1'>Node.js</h2>
                            <p className='font-bold text-xl'>40%</p>
                        </div>
                        <Line percent={40} strokeWidth={1} trailWidth={1} strokeColor="red" className='mb-1' />
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={figma} className='w-10 h-10' alt="" />
                    <div className='flex flex-col w-full'>
                        <div className='flex gap-5'>
                            <h2 className='font-bold text-xl mb-1'>Figma</h2>
                            <p className='font-bold text-xl'>30%</p>
                        </div>
                        <Line percent={30} strokeWidth={1} trailWidth={1} strokeColor="red" className='mb-1' />
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={firebase} className='w-10 h-10' alt="" />
                    <div className='flex flex-col w-full'>
                        <div className='flex gap-5'>
                            <h2 className='font-bold text-xl mb-1'>Firebase</h2>
                            <p className='font-bold text-xl'>60%</p>
                        </div>
                        <Line percent={60} strokeWidth={1} trailWidth={1} strokeColor="red" className='mb-1' />
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={github} className='w-10 h-10' alt="" />
                    <div className='flex flex-col w-full'>
                        <div className='flex gap-5'>
                            <h2 className='font-bold text-xl mb-1'>GitHub</h2>
                            <p className='font-bold text-xl'>70%</p>
                        </div>
                        <Line percent={70} strokeWidth={1} trailWidth={1} strokeColor="red" className='mb-1' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
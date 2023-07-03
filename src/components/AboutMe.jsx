import img from '../assets/about-img.jpg'

const AboutMe = () => {
    return (
        <div id='about'>
            <div className='flex flex-col lg:flex-row items-center gap-20 w-4/5 mx-auto mt-32'>
                <div className='w-full lg:w-1/2 flex flex-col justify-center items-center'>
                    <img className='rounded-full w-96 h-96' src={img} alt="" />
                </div>
                <div className='w-full lg:w-1/2'>
                    <h3>Hi, I am Kazi Modasser Hossain</h3>
                    <p className='mt-5'>I am a passionate junior web developer with a strong proficiency in the MERN stack. I am a hardworking and dedicated individual, committed to delivering high-quality results. With a strong sense of integrity, I approach my work with honesty and transparency. As a self-motivated problem solver, I am constantly seeking opportunities to learn and grow in this ever-evolving field.</p>
                    <p></p>
                    <div className='flex gap-5 mt-5'>
                        <button className='btn'><a href="#contact">Hire Me</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
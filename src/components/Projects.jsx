import react from '../assets/react.png'
import mongodb from '../assets/mongodb.svg'
import express from '../assets/express.png'
import tailwind from '../assets/tailwind css.png'
import bootstrap from '../assets/bootstrap.png'
import node from '../assets/node.png'

import './projects.css'
const Projects = () => {
    return (
        <div id='projects' className='w-11/12 md:w-4/5 mx-auto mt-16'>
            <h2 className="font-extrabold text-center text-3xl">My Recent Projects</h2>
            <hr className='my-5 opacity-30 border-2' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card w-96 shadow-white shadow-inner z-0 mt-10 bg-[#34495e]">
                    <div className='card-img h-80 overflow-hidden top-0 cursor-pointer'>
                        <img src="https://i.ibb.co/JFdF3JB/sportify1.png" className='p-2 rounded-xl object-cover w-full' alt="" loading='lazy' />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title mb-4">
                            <span className='font-bold'>Site Name:</span> Sportify Camp
                        </h2>
                        <p className='flex items-center gap-2'><span className='font-bold'>Technologies:</span>
                            <img src={react} className='w-7 h-7' alt="" />
                            <img src={express} className='w-5 h-5' alt="" />
                            <img src={node} className='w-5 h-5' alt="" />
                            <img src={mongodb} className='w-5 h-5' alt="" />
                            <img src={tailwind} className='w-5 h-5' alt="" />
                        </p>
                        <div className='mb-4'>
                            <h2 className='font-bold'>Sources: </h2>
                            <a href="https://github.com/kazimahin68/sportify-client" className='mr-2 text-blue-400'>Client Site Code <span className='text-white'>||</span></a>
                            <a href="https://github.com/kazimahin68/sportify-server" className='mr-2 text-blue-400'>Server Site Code <span className='text-white'>||</span></a>
                            <a href="https://sportify-camp-b0d3a.firebaseapp.com/" className=' text-blue-400'>Live Link</a>
                        </div>
                        <div className="card-actions justify-center">
                            <button className='btn btn-sm bg-[#3498db] font-bold border-0 hover:bg-[#2980b9]' onClick={() => window.sportify.showModal()}>Show Details</button>
                        </div>
                    </div>
                    <dialog id="sportify" className="modal p-5">
                        <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-blue-900 bg-opacity-90 text-white">
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2'>
                                <a href="https://i.ibb.co/JFdF3JB/sportify1.png"><img src="https://i.ibb.co/JFdF3JB/sportify1.png" alt="" /></a>
                                <a href="https://i.ibb.co/CBqpkmj/sportify2.png"><img src="https://i.ibb.co/CBqpkmj/sportify2.png" alt="" /></a>
                                <a href="https://i.ibb.co/kqHyD8g/sportify3.png"><img src="https://i.ibb.co/kqHyD8g/sportify3.png" alt="" /></a>
                                <a href="https://i.ibb.co/CWTJ3RB/sportify4.png"><img src="https://i.ibb.co/CWTJ3RB/sportify4.png" alt="" /></a>
                                <a href="https://i.ibb.co/jzsW5Cr/sportify5.png"><img src="https://i.ibb.co/jzsW5Cr/sportify5.png" alt="" /></a>
                                <a href="https://i.ibb.co/H4yPmVQ/sportify6.png"><img src="https://i.ibb.co/H4yPmVQ/sportify6.png" alt="" /></a>
                            </div>
                            <div>
                                <h2 className='text-2xl mt-5 mb-4'><span className='font-bold'>Name:</span> Sportify Camp</h2>
                                <p className='mb-4'><span className='font-bold'>Technologies Used:</span> React.js | Node.js | MongoDB | Express.js | Firebase | Stripe</p>

                                <h3 className='mb-4 font-bold'>Features: </h3>
                                <p className='mb-2'>
                                    <span className='font-bold'>1. Role-based Access Control and Secure Data Handling:</span> Your website incorporates role-based access control, allowing different users (admin, instructor, and normal user) to access specific routes and perform designated actions. The implementation of JWT and secure data handling with Axios ensures that sensitive information is transmitted and stored securely, enhancing the overall security and privacy of the website.
                                </p>
                                <p className='mb-4'>
                                    <span className='font-bold'>2. Stripe Payment Integration for Enrollment Confirmation:</span> The integration of Stripe payment methods enables a seamless enrollment process for users. They can select a class and confirm their enrollment by making a payment. This feature simplifies the payment process, providing a convenient and secure way for users to secure their spot in the desired classes.
                                </p>
                                <p className='mb-4'>
                                    <span className='font-bold'>3. Comprehensive Admin Panel for User and Class Management:</span> The admin panel of your website offers extensive functionality for managing users and classes. The admin can oversee and manage all users and classes, including the ability to make users admin or instructors. They have the authority to approve or deny classes added by instructors and provide valuable feedback on denied classes. This robust admin panel empowers efficient management and supervision of the entire platform.
                                </p>
                            </div>
                            <div className='mb-4'>
                                <h2 className='font-bold'>Sources: </h2>
                                <a href="https://github.com/kazimahin68/sportify-client" className='mr-2 text-blue-400'>Client Site Code <span className='text-white'>||</span></a>
                                <a href="https://github.com/kazimahin68/sportify-server" className='mr-2 text-blue-400'>Server Site Code <span className='text-white'>||</span></a>
                                <a href="https://sportify-camp-b0d3a.firebaseapp.com/" className=' text-blue-400'>Live Link</a>
                            </div>
                            <div className="modal-action justify-center mt-10">
                                <button className="btn bg-[#3498db] hover:bg-[#2980b9] border-0">Close</button>
                            </div>
                        </form>
                    </dialog>
                </div>
                <div className="card w-96 bg-[#34495e] shadow-white shadow-inner z-0 mt-10">
                    <div className='card-img h-80 overflow-hidden top-0 cursor-pointer'>
                        <img src="https://i.ibb.co/L6vYxWG/edu-1.png" className='p-2 rounded-xl object-cover w-full' alt="" loading='lazy' />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title mb-4">
                            <span className='font-bold'>Site Name:</span> EduPlay Emporium
                        </h2>
                        <p className='flex items-center gap-2'><span className='font-bold'>Technologies:</span>
                            <img src={react} className='w-7 h-7' alt="" />
                            <img src={express} className='w-5 h-5' alt="" />
                            <img src={node} className='w-5 h-5' alt="" />
                            <img src={mongodb} className='w-5 h-5' alt="" />
                            <img src={tailwind} className='w-5 h-5' alt="" />
                        </p>
                        <div className='mb-4'>
                            <h2 className='font-bold'>Sources: </h2>
                            <a href="https://github.com/kazimahin68/edi-play-emporium-client" className='mr-2 text-blue-400'>Client Site Code <span className='text-white'>||</span></a>
                            <a href="https://github.com/kazimahin68/edu-play-emporium-server" className='mr-2 text-blue-400'>Server Site Code <span className='text-white'>||</span></a>
                            <a href="https://edu-play-emporium.firebaseapp.com/" className=' text-blue-400'>Live Link</a>
                        </div>
                        <div className="card-actions justify-center">
                            <button className='btn btn-sm bg-[#3498db] font-bold border-0 hover:bg-[#2980b9]' onClick={() => window.eduPlay.showModal()}>Show Details</button>
                        </div>
                    </div>
                    <dialog id="eduPlay" className="modal p-5">
                        <form method="dialog" className="modal-box w-11/12 max-w-5xl  bg-blue-900 bg-opacity-90 text-white">
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2'>
                                <a href="https://i.ibb.co/L6vYxWG/edu-1.png"><img src="https://i.ibb.co/L6vYxWG/edu-1.png" alt="" /></a>
                                <a href="https://i.ibb.co/JtHGd49/edu-2.png"><img src="https://i.ibb.co/JtHGd49/edu-2.png" alt="" /></a>
                                <a href="https://i.ibb.co/Q9J15HL/edu-3.png"><img src="https://i.ibb.co/Q9J15HL/edu-3.png" alt="" /></a>
                                <a href="https://i.ibb.co/rf20Lz1/edu-4.png"><img src="https://i.ibb.co/rf20Lz1/edu-4.png" alt="" /></a>
                                <a href="https://i.ibb.co/rHDhpG6/edu-5.png"><img src="https://i.ibb.co/rHDhpG6/edu-5.png" alt="" /></a>
                            </div>
                            <div>
                                <h2 className='text-2xl mt-5 mb-4'><span className='font-bold'>Name:</span>EduPlay Emporium</h2>
                                <p className='mb-4'><span className='font-bold'>Technologies Used:</span> React.js | Node.js | MongoDB | Express.js | Firebase</p>

                                <h3 className='mb-4 font-bold'>Key Features: </h3>
                                <p className='mb-2'>
                                    <span className='font-bold'>1. User-Friendly Authentication and Personalized Experience:</span>With the use of Firebase for authentication, your website allows users to create accounts and login. After login, users gain access to additional pages like the Add Toy, Blog, and My Toy pages, providing a personalized experience tailored to each users preferences.
                                </p>
                                <p className='mb-4'>
                                    <span className='font-bold'>2. Toy Management and Tracking:</span>The Add Toy page enables users to add toys to their collection after logging in. The My Toy page displays all the toys that a specific user has added, allowing them to easily manage and track their toy inventory. This feature enhances user engagement and provides a convenient way to organize their toy selections.
                                </p>
                                <p className='mb-4'>
                                    <span className='font-bold'>3. Informative Blog Section: </span>The Blog page showcases a collection of informative blogs related to toys and the toy industry. This feature offers valuable content for users, providing insights, tips, and updates about the latest trends, toy recommendations, or any other relevant information. It enhances the overall user experience and encourages users to explore your website beyond the shopping aspect.
                                </p>
                            </div>
                            <div className='mb-4'>
                                <h2 className='font-bold'>Sources: </h2>
                                <a href="https://github.com/kazimahin68/sportify-client" className='mr-2 text-blue-400'>Client Site Code <span className='text-white'>||</span></a>
                                <a href="https://github.com/kazimahin68/sportify-server" className='mr-2 text-blue-400'>Server Site Code <span className='text-white'>||</span></a>
                                <a href="https://sportify-camp-b0d3a.firebaseapp.com/" className=' text-blue-400'>Live Link</a>
                            </div>
                            <div className="modal-action justify-center mt-10">
                                <button className="btn bg-[#3498db] hover:bg-[#2980b9] border-0">Close</button>
                            </div>
                        </form>
                    </dialog>
                </div>
                <div className="card w-96 bg-[#34495e] shadow-white shadow-inner z-0 mt-10">
                    <div className='card-img h-80 overflow-hidden top-0 cursor-pointer'>
                        <img src="https://i.ibb.co/dgRRsFB/kitchen-home.png" className='p-2 rounded-xl object-cover w-full' alt="" loading='lazy' />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title mb-4 text-lg">
                            <span className='font-bold text-xl'>Site Name:</span> Mexico In My Kitchen
                        </h2>
                        <p className='flex items-center gap-2'><span className='font-bold text-xl'>Technologies:</span>
                            <img src={react} className='w-7 h-7' alt="" />
                            <img src={express} className='w-5 h-5' alt="" />
                            <img src={node} className='w-5 h-5' alt="" />
                            <img src={bootstrap} className='w-5 h-5' alt="" />
                        </p>
                        <div className='mb-4 font-bold'>
                            <h2 className='font-bold text-xl'>Sources: </h2>
                            <a href="https://github.com/kazimahin68/mexico-in-my-kitchen-client" className='mr-2 text-blue-400'>Client Site Code <span className='text-white'>||</span></a>
                            <a href="https://github.com/kazimahin68/mexico-in-my-kitchen-server" className='mr-2 text-blue-400'>Server Site Code <span className='text-white'>||</span></a>
                            <a href="https://mexico-in-my-kitchen.firebaseapp.com/" className=' text-blue-400'>Live Link</a>
                        </div>
                        <div className="card-actions justify-center">
                            <button className='btn btn-sm bg-[#3498db] font-bold border-0 hover:bg-[#2980b9]' onClick={() => window.kitchen.showModal()}>Show Details</button>
                        </div>
                    </div>
                    <dialog id="kitchen" className="modal p-5">
                        <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-blue-900 bg-opacity-90 text-white">
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2'>
                                <a href="https://i.ibb.co/YbRV2n7/kitchen-0.png"><img src="https://i.ibb.co/YbRV2n7/kitchen-0.png" alt="" /></a>
                                <a href="https://i.ibb.co/jLDFhWp/kitchen-1.png"><img src="https://i.ibb.co/jLDFhWp/kitchen-1.png" alt="" /></a>
                                <a href="https://i.ibb.co/tMb7YQr/kitchen-2.png"><img src="https://i.ibb.co/tMb7YQr/kitchen-2.png" alt="" /></a>
                                <a href="https://i.ibb.co/vkkbhfq/kitchen-3.png"><img src="https://i.ibb.co/vkkbhfq/kitchen-3.png" alt="" /></a>
                                <a href="https://i.ibb.co/4FGf5mt/kitchen-4.png"><img src="https://i.ibb.co/4FGf5mt/kitchen-4.png" alt="" /></a>
                            </div>
                            <div>
                                <h2 className='text-xl mt-5 mb-4'><span className='font-bold text-2xl'>Name: </span>Mexico In My Kitchen</h2>
                                <p className='mb-4 text-xl'><span className='font-bold text-2xl'>Technologies Used:</span> React.js | Node.js | Express.js | Firebase | Bootstrap</p>

                                <h3 className='mb-4 font-bold text-2xl'>Key Features: </h3>
                                <p className='mb-2'>
                                    <span className='font-bold text-xl'>1. Exclusive Access to Top Chef Recipes:</span> Mexico in My Kitchen provides users with a unique opportunity to access the recipes of top chefs. By logging in, users gain exclusive access to a collection of top recipes, allowing them to explore and recreate authentic Mexican dishes prepared by renowned chefs.
                                </p>
                                <p className='mb-4'>
                                    <span className='font-bold text-xl'>2. Seamless User Experience: </span>The website offers a seamless user experience with a slider on the homepage, showcasing enticing visuals that captivate visitors. The intuitive navigation and easy-to-use interface ensure that users can effortlessly browse through the recipes and cooking methods, enhancing their overall experience on the platform.
                                </p>
                                <p className='mb-4'>
                                    <span className='font-bold text-xl'>3. Convenient Login Options: </span>Mexico in My Kitchen offers a convenient login feature, allowing users to log in using their Google accounts. This feature streamlines the authentication process, enabling users to quickly access the view recipes page without the need for creating separate credentials. It enhances user convenience and encourages engagement on the platform.
                                </p>
                            </div>
                            <div className='mb-4 font-bold'>
                                <h2 className='font-bold text-2xl'>Sources: </h2>
                                <a href="https://github.com/kazimahin68/sportify-client" className='mr-2 text-blue-400'>Client Site Code <span className='text-white'>||</span></a>
                                <a href="https://github.com/kazimahin68/sportify-server" className='mr-2 text-blue-400'>Server Site Code <span className='text-white'>||</span></a>
                                <a href="https://sportify-camp-b0d3a.firebaseapp.com/" className=' text-blue-400'>Live Link</a>
                            </div>
                            <div className="modal-action justify-center mt-10">
                                <button className="btn bg-[#3498db] hover:bg-[#2980b9] border-0">Close</button>
                            </div>
                        </form>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Projects;
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";
import { BsSendFill } from "react-icons/bs";

const Contact = () => {
    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm();

    const formRef = useRef(null);
    // console.log(formRef.current)

    const onSubmit = (data) => {
        console.log(data)
        emailjs.sendForm('portfolio_70w9ttt', 'template_ytkhjyn', formRef.current, 'drbxvQoH2pBD-u6AK')
            .then((result) => {
                if (result.text === "OK") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Your message is successfully send',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }, (error) => {
                console.log(error.text);
            });
        reset();
    }



    return (
        <div className="mt-16 w-11/12 lg:w-4/5 mx-auto">
            <h2 className='font-extrabold text-3xl text-center'>Contact Me</h2>
            <hr className='mt-5 mb-10 opacity-30 border-2' />
            <div id="contact" className="flex justify-center">
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="p-12 rounded-xl w-11/12 lg:w-4/5 shadow-white shadow-inner z-0 mt-10 bg-[#34495e]">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold text-white">Your Name</span>
                        </label>
                        <input {...register("name", { required: "Please type your name here" })} type="text" placeholder="Your Name" className="input input-bordered text-black w-full" />
                        {errors.name && <p role="alert" className="text-red-500 text-left">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold text-white">Your Email</span>
                        </label>
                        <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="Your Email Address" className="input input-bordered text-black w-full" />
                        {errors.email && <p role="alert" className="text-red-500 text-left">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold text-white">What is your name?</span>
                        </label>
                        <textarea {...register("message", { required: "Type Your Message Here" })} className="textarea textarea-bordered h-24 text-black" placeholder="Type Your Message"></textarea>
                        {errors.message && <p role="alert" className="text-red-500 text-left">{errors.message?.message}</p>}
                    </div>
                    <div className="form-control w-1/2 md:w-1/4 lg:w-1/6 mx-auto mt-10">
                        <button className="btn btn-sm bg-[#3498db] font-bold border-0 hover:bg-[#2980b9]"><input type="submit" value="Send"/><BsSendFill></BsSendFill></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
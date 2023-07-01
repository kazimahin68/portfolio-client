import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm();

    const formRef = useRef(null);
    console.log(formRef.current)

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
        <div id="contact" className="flex justify-center p-12 bg-slate-200 mt-12">
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="p-12 bg-base-300 lg:w-1/2 w-11/12">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">Your Name</span>
                    </label>
                    <input {...register("name", { required: "Please type your name here" })} type="text" placeholder="Your Name" className="input input-bordered w-full" />
                    {errors.name && <p role="alert" className="text-red-500 text-left">{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">Your Email</span>
                    </label>
                    <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="Your Email Address" className="input input-bordered w-full" />
                    {errors.email && <p role="alert" className="text-red-500 text-left">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">What is your name?</span>
                    </label>
                    <textarea {...register("message", { required: "Type Your Message Here" })} className="textarea textarea-bordered h-24" placeholder="Your Message"></textarea>
                    {errors.message && <p role="alert" className="text-red-500 text-left">{errors.message?.message}</p>}
                </div>
                <input type="submit" value="Send" className="btn mt-5 text-center" />
            </form>
        </div>
    );
};

export default Contact;
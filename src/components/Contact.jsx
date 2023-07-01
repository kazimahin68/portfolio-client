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
                if(result.text === "OK"){
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
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Your Name</span>
                </label>
                <input {...register("name", { required: "Please type your name here" })} type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                {errors.name && <p role="alert">{errors.name?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="Your Email Address" className="input input-bordered w-full max-w-xs" />
                {errors.email && <p role="alert">{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">What is your name?</span>
                </label>
                <textarea {...register("message", { required: "Type Your Message Here" })} className="textarea textarea-bordered h-24" placeholder="Your Message"></textarea>
                {errors.message && <p role="alert">{errors.message?.message}</p>}
            </div>
            <input type="submit" value="Send" className="btn" />
        </form>
    );
};

export default Contact;
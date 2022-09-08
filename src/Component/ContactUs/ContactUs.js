import React from 'react';
import './ContactUs.css'
import { useForm, ValidationError } from '@formspree/react';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const [state, handleSubmit] = useForm("mvolpkpz");
    if (state.succeeded) {
        toast(`Thank you. For your message.`)
        for(const form of document.getElementsByTagName('form')) {
            form.reset();
          }
      }
    return (
        <div className='bg-black'>
            <div className='contact-main'>
                <h1 className='contact-title'>Contact us</h1>
                <div>
                    <div class="card-body contact-form">
                        <form onSubmit={handleSubmit}>
                            <input placeholder="Your Name" name='name' class="input input-bordered input-warning w-full" />
                            <input type="email" placeholder="Your Email" name='email' class="input input-bordered input-warning w-full" />
                            <input type="text" placeholder="Your Subject" name='subject' class="input input-bordered input-warning w-full" />
                            <textarea rows="10" name='message' placeholder='Your Message'></textarea>
                            <br />
                            <input type="submit" value='SEND' className='btn btn-outline btn-secondary submit w-full' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
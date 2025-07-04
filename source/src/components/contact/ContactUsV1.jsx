import ContactForm from '../form/ContactForm';
import illustration14 from "/assets/img/illustration/14.png"
import Animation from '../animation/Animation';

const ContactUsV1 = () => {
    return (
        <>
            <div className="contact-style-one-area overflow-hidden default-padding">
                <div className="contact-shape">
                    <img src={illustration14} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="contact-stye-one col-lg-5 mb-md-50 mb-xs-40">
                            <div className="contact-style-one-info">
                                <h4 className="sub-title">Have Questions?</h4>
                                <h2>Contact Information</h2>
                                <p>
                                We are here to help! If you need assistance or more information, feel free to get in touch using the contact details below.
                                </p>
                                <ul>
                                    <Animation className='animate__animated animate__fadeInUp' delay='100ms'>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone-alt" />
                                            </div>
                                            <div className="content">
                                                <h5 className="title">Call Us Now</h5>
                                                <h4><a href="(+91) 888 400 5400">(+91)888 400 5400</a></h4>
                                                <h4><a href="(+91) 855 300 9696">(+91)855 300 9696</a></h4>

                                            </div>
                                        </li>
                                    </Animation>

                                    <Animation className='animate__animated animate__fadeInUp' delay='300ms'>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt" />
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Our Location</h5>
                                                <p>
                                                #76 / 6, Chada Arcade, Sanjay Nagar Main Rd, Above Union Bank, Bengaluru, Karnataka 560094
                                                </p>
                                            </div>
                                        </li>
                                    </Animation>

                                    <Animation className='animate__animated animate__fadeInUp' delay='500ms'>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope-open-text" />
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Official Email</h5>
                                                <h4><a href="support@brightads.in">support@brightads.in
                                         </a></h4>
                                         <h4><a href=" careers@brightads.in"> careers@brightads.in
                                         </a></h4>
                                            </div>
                                        </li>
                                    </Animation>
                                </ul>
                            </div>
                        </div>
                        <div className="contact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15">
                            <div className="contact-form-style-one">
                                <h2 className="heading">Send us a Message</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUsV1;
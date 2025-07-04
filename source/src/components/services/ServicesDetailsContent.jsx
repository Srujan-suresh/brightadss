import { useState } from 'react';
import banner21 from "/assets/img/banner/21.jpg";
import about1 from "/assets/img/about/1.jpg";
// import icon4 from "/assets/img/icon/4.png";
import ModalVideo from 'react-modal-video';
// import { Link } from 'react-router-dom';

const ServicesDetailsContent = ({ serviceInfo }) => {
    const { title } = serviceInfo;
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            {/* Header Section */}
            <div className="services-details-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Service Details</h4>
                                <h2 className="title">{title}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Banner */}
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-12 services-single-content">
                                {/* <div className="thumb mb-50">
                                    <img src={banner21} alt="Banner" />
                                </div> */}
                              <p>
    <strong style={{ fontSize: "1.5rem", display: "block", marginBottom: "1rem" }}>
        Do not expect to see a change if you do not make one.
    </strong>
   We are an eCommerce, we trend topsite Development Company. BrightAds agency provides custom style and development solutions. Our experience in e-commerce web site style services will offer your online store with a knowledgeable look, which will facilitate a business house in achieving additional sales and revenues for his or her business. we are going to produce web site appearance excellent all told the devices. we are going to optimize web site helps you in program ranking and increase product sales. From handcart suggestions to numerous third-party integrations, we tend to perceive your business necessities and have solutions for each of them. Our e-commerce solutions incorporate creating an excellent web site with options like handcart, payment entree, etc.
</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* E-Commerce Development Steps */}
            <div className="services-content default-padding">
                <div className="container">
                    {/* Step 1 */}
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6">
                            <img src={about1} alt="Exploration Phase" className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <h3>1. Exploration & Knowledge Gathering</h3>
                            <p>
                                Every web design & development project begins with knowledge gathering. This includes scoping the project, setting goals, and exploring design direction. We conduct strategy meetings and produce detailed proposals tailored to your vision.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="row align-items-center mb-5 flex-row-reverse">
                        <div className="col-lg-6">
                            <img src={banner21} alt="Kickoff Meeting" className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <h3>2. Kickoff Meeting</h3>
                            <p>
                                After exploration, we move to planning. We outline milestones, assign roles, and share our full process. The kickoff meeting ensures both sides are aligned on timelines and expectations.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6">
                            <img src={about1} alt="Content Organization" className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <h3>3. Content Creation and Organization</h3>
                            <p>
                                Great design is nothing without strong content. We help you organize assets like text, images, testimonials, and videos to ensure your message is clear and engaging. Content strategy and copywriting support are included.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="row align-items-center mb-5 flex-row-reverse">
                        <div className="col-lg-6">
                            <img src={banner21} alt="Design Phase" className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <h3>4. E-Commerce Web App Design</h3>
                            <p>
                                Using data, wireframes, and brand input, we craft high-quality visual designs for your eCommerce site. You will receive design drafts and revisions until the perfect layout is achieved.
                            </p>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6">
                            <img src={about1} alt="Development Phase" className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <h3>5. E-Commerce Web App Development</h3>
                            <p>
                                We develop the site based on approved designs, implementing features like carts, payment gateways, and product listings. You will get a private demo link to view progress and provide feedback throughout development.
                            </p>
                        </div>
                    </div>

                    {/* Step 6 */}
                    <div className="row align-items-center mb-5 flex-row-reverse">
                        <div className="col-lg-6">
                            <img src={banner21} alt="Launch Phase" className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <h3>6. E-Commerce Web App Launch</h3>
                            <p>
                                Before launch, we run quality assurance tests. Once approved, your eCommerce site goes live. We provide full handoff, support, and encourage clients to participate in final testing for optimal user experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Section (unchanged) */}
            {/* <div className="services-content bg-gray default-padding">
                <div className="container">
                    <div className="about-style-one-items">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6">
                                <div className="thumb-style-one">
                                    <img src={about1} alt="Video" />
                                    <Link onClick={() => setOpen(true)} to="#" className="popup-youtube video-play-button">
                                        <i className="fas fa-play" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                                <div className="about-style-one-info">
                                    <div className="content">
                                        <h2 className="title">Meet the executives driving our success.</h2>
                                        <p>
                                            Our team blends creativity, technology, and marketing strategy to help eCommerce businesses grow. From concept to launch, we’re here to support every phase of your digital journey.
                                        </p>
                                    </div>
                                    <ul className="card-list">
                                        <li>
                                            <img src={icon4} alt="Award" />
                                            <h5>Award Winning Company</h5>
                                        </li>
                                        <li>
                                            <h2>3.8 X</h2>
                                            <h5>Economical Growth</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <ModalVideo
                channel='youtube'
                autoplay
                isOpen={isOpen}
                videoId="aTC_RNYtEb0"
                onClose={() => setOpen(false)}
            />
        </>
    );
};

export default ServicesDetailsContent;

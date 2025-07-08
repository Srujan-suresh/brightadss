/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
const about77 = "/newimages/7.png"; // adjusted to public folder path

import CircleType from 'circletype';
import { Link } from 'react-router-dom';

const WhyChooseV2 = () => {

    const circleTypeElm = useRef(null);

    useEffect(() => {
        if (circleTypeElm.current) {
            const circleTypeInstance = new CircleType(circleTypeElm.current);
        }
    }, []);

    return (
        <>
            <div className="choose-us-style-two-area relative bg-dark text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 order-xl-last pl-80 pl-md-15 pl-xs-15 choose-us-style-two-content">
                            <div className="info-style-one">
                                <h4 className="sub-title">Why Choose Us</h4>
                                <h2 className="title">Empowering success in IT Services since 2013 </h2>
                                <p>
                                    We are the best digital marketing agency in Bangalore, India, with the aspiration to create value for your business. Our web design and development with digital marketing services will transform your marketing approach.
                                </p>
                                <ul className="list-sytle-four mt-30" style={{ display: 'block' }}>
                                    <li style={{ display: 'block', width: '100%' }}>
                                        <h4>Best Digital Marketing Company</h4>
                                        <p>
                                            We have a 100% retention rate. Customer loyalty is priceless. We are earning our customers loyalty day by day.
                                        </p>
                                    </li>
                                    <li style={{ display: 'block', width: '100%', left: '-30px' }}>
                                        <h4>Dedicated Customer Support</h4>
                                        <p>
                                            We are 100% clear on when work needs to be completed. Those deadlines help us to collaborate toward achieving a shared goal.
                                        </p>
                                    </li>
                                    <li style={{ display: 'block', width: '100%', left: '-30px' }}>
                                        <h4>Professional Team Member</h4>
                                        <p>
                                            We have well-focused and creative team members. They are passionate about growing professionally for your business.
                                        </p>
                                    </li>
                                </ul>

                                <Link className="btn btn-md circle btn-gradient animation mt-20" to="/about-us-2">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="thumb-style-three">
                                <img src={about77} alt="Image Not Found" />
                                <div className="circle-text" style={{ backgroundImage: 'url(/assets/img/shape/26.png)' }}>
                                    {/* curved-circle start*/}
                                    <div
                                        ref={circleTypeElm}
                                        className="circle-text-item"
                                        data-circle-text-options='{"radius": 81, "forceWidth": true, "forceHeight": true }'
                                    >
                                        .  Certified Company   .  IT Consulting Solution
                                    </div>
                                    <Link to="#"><i className="fas fa-long-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV2;

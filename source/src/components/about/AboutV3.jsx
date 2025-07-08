// import about4 from '/assets/img/about/4.jpg'
import about44 from '/Users/DELL/GIxus v1.1/source/public/newimages/5.jpg'
import CountUp from 'react-countup';

const AboutV3 = () => {
    return (
        <>
            <div className="about-style-three-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="about-style-three-info">
                                <h4 className="sub-title">About Us</h4>
                                <h2 className="title">Best Digital Marketing and Web Design Company in Bangalore</h2>
                                <p>
                                Bright Ads is a One Stop Solution for Web development and Digital Marketing. We serve our services worldwide.
                                </p>
                                <div className="info-grid mt-50">
                                    <div className="left-info">
                                        <div className="fun-fact-card-two">
                                            <h4 className="sub-title">Our Expertise</h4>
                                            <div className="counter-title">
                                                <div className="counter">
                                                    <div className="timer"><CountUp end={12} enableScrollSpy={true} /></div>
                                                    <div className="operator">+</div>
                                                </div>
                                            </div>
                                            <span className="medium">Years of experience</span>
                                        </div>
                                    </div>
                                    <div className="right-info bg-gradient text-light">
                                        <ul className="list-style-three">
                                            <li>Website Design & Development</li>
                                            <li>Web App Development</li>
                                            <li>Mobile App Development</li>
                                            <li>Graphic Design</li>
                                            <li>SEO</li>
                                            <li>Content Marketing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="thumb-style-two">
                                <img src={about44} alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV3;
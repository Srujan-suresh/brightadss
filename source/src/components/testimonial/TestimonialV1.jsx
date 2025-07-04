import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import illustration55 from "/Users/DELL/GIxus v1.1/source/public/newimages/5.png"
import shape16 from "/assets/img/shape/16.png"
import shape17 from "/assets/img/shape/17.png"

const TestimonialV1 = ({ sectionClass }) => {

    const sliderSettings = {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }

    return (
        <>
            <div className={`testimonial-style-one-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="testimonial-style-one-items bg-gray-secondary">
                        <div className="row align-center">
                            <div className="col-xl-5 pr-80 pr-md-15 pr-xs-15">
                                <div className="testimonial-style-one-thumb">
                                    <img src={illustration55} alt="Image Not Found" />
                                    <div className="shape">
                                        <img src={shape16} alt="Image Not Found" />
                                        <img src={shape17} alt="Image Not Found" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <Swiper
                                    {...sliderSettings}
                                    className="testimonial-style-one-carousel"
                                    modules={[Keyboard, Autoplay, Pagination, Navigation]}
                                >
                                    <div className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <div className="testimonial-style-one">
                                                <div className="item">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h2>The best service ever</h2>
                                                        </div>
                                                        <p>
                                                           Bright Ads is the perfect blend of creativity and strategy in digital marketing. Their commitment to delivering top-quality SEO and web design services sets them apart from the rest
                                                        </p>
                                                    </div>
                                                    <div className="provider">
                                                        <div className="info">
                                                            <h4>Sri Charan
                                                            </h4>
                                                            <span>Client</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="swiper-slide">
                                            <div className="testimonial-style-one">
                                                <div className="item">
                                                    <div className="content">
                                                        <div className="top">
                                                            <h2>Awesome opportunities</h2>
                                                        </div>
                                                        <p>
                                                        Bright Ads gave me the opportunity to explore my skills as a video editor. The team’s support and creativity are unmatched, proving they’re the best digital marketing agency in Bangalore.

                                                        </p>
                                                    </div>
                                                    <div className="provider">
                                                        <div className="info">
                                                            <h4>                                                        Vrinda Parthan
                                                            </h4>
                                                            <span>Video Editor</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>

                                    <div className="swiper-nav-left">
                                        <div className="swiper-button-prev" />
                                        <div className="swiper-button-next" />
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV1;
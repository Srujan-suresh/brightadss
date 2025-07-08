import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
// Change imports to relative paths for public folder assets:
const team1 = "/img/team/v1.jpg";
const team2 = "/img/team/v2.jpg";
const quote = "/img/quote.png";

const TestimonialV2 = ({ sectionClass }) => {
  const sliderSettings = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  };

  return (
    <>
      <div className={`testimonial-style-two-area default-padding bg-cover ${sectionClass ? sectionClass : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="testimonial-two-info">
                <div className="icon">
                  <img src={quote} alt="Image Not Found" />
                </div>
                <h2>Over 50K clients and 5,000 projects across the globe.</h2>
                <div className="review-card">
                  <h6>Excellent 1850+ Reviews</h6>
                  <div className="d-flex">
                    <div className="icon">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span>4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 pl-60 pl-md-15 pl-xs-15">
              <Swiper
                {...sliderSettings}
                className="testimonial-style-two-carousel swiper"
                modules={[Keyboard, Autoplay, Pagination, Navigation]}
              >
                {/* SwiperSlide components */}
                <SwiperSlide>
                  <div className="testimonial-style-two">
                    <div className="item">
                      <div className="text-info">
                        <p>
                          I had a great experience with Bright Ads Digital Marketing Agency in Bangalore.Their team is professional  and truly committed to delivering results. They helped us with SEO and website development, and I saw a significant improvement in our website traffic .
                        </p>
                      </div>
                      <div className="content">
                        <div className="thumb">
                          <img src={team1} alt="Image Not Found" />
                        </div>
                        <div className="info">
                          <h4>Lokesh Naik</h4>
                          <span>Senior Consultant</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-style-two">
                    <div className="item">
                      <div className="text-info">
                        <p>
                          Great experience working with Bright Ads Digital Marketing Agency Bangalore! The team is professional, responsive, and really knows what they’re doing. They helped improve our online presence and we’ve seen great results. Highly recommend their digital marketing services!
                        </p>
                      </div>
                      <div className="content">
                        <div className="thumb">
                          <img src={team2} alt="Image Not Found" />
                        </div>
                        <div className="info">
                          <h4>Abdul Musaveer</h4>
                          <span>Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-style-two">
                    <div className="item">
                      <div className="text-info">
                        <p>
                          Bright Ads Digital India Pvt Ltd: Another digital marketing agency in Bengaluru, India. They offer a range of services, including web development, SEO, social media marketing, lead generation, and more. They also assist with advertising on various digital platforms.
                        </p>
                      </div>
                      <div className="content">
                        <div className="thumb">
                          <img src={team1} alt="Image Not Found" />
                        </div>
                        <div className="info">
                          <h4>Nallaseelam Veera</h4>
                          <span>Senior Consultant</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-style-two">
                    <div className="item">
                      <div className="text-info">
                        <p>
                          Bright Ads did an exceptional job on my website and digital marketing. Their team was professional and delivered a stunning website that perfectly represents my brand. Their digital marketing strategies boosted my online presence and engagement. 
                        </p>
                      </div>
                      <div className="content">
                        <div className="thumb">
                          <img src={team2} alt="Image Not Found" />
                        </div>
                        <div className="info">
                          <h4>Rakesh S</h4>
                          <span>Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialV2;

import "../styles/testimonials.css";
import { DataTestimonial } from "./DataTestimonial";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Testimonials = ({ theme }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id={theme}>
      <section
        className="testimonial container section"
        id="testimonials"
        data-aos="fade-up"
      >
        <h2 className="section__title">My clients & instructors say</h2>
        <span className="section__subtitle">Testimonial</span>

        <Swiper
          className="testimonial__container"
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {DataTestimonial.map((el, i) => {
            return (
              <SwiperSlide className="testimonial__card" key={i}>
                <img
                  src={el.image}
                  alt="testimonial_img"
                  className="testimonial_img"
                />
                <h3 className="testimonial__name">{el.title}</h3>
                <p className="testimonial__description">{el.description}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;

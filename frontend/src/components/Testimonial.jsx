"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image01 from  "../images/testimonial/team-4.jpg"
import Image02 from  "../images/testimonial/team-5.jpg"
import Image03 from  "../images/testimonial/team-6.jpg"
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Emily R.",
    role: "Patient",
    feedback:
      "The doctors here genuinely care. I felt safe, heard, and treated like family throughout my treatment journey.",
    image: `${Image01}`,
  },
  {
    name: "Michael T.",
    role: "Recovered from Surgery",
    feedback:
      "The post-operative care was exceptional. The staff ensured I had all the support I needed to recover smoothly.",
    image: `${Image02}`,
  },
  {
    name: "Priya S.",
    role: "Mother of a patient",
    feedback:
      "My daughter received outstanding care. From consultation to recovery, every step was handled with compassion.",
    image: `${Image03}`,
  },

  {
    name: "Emily R.",
    role: "Patient",
    feedback:
      "The doctors here genuinely care. I felt safe, heard, and treated like family throughout my treatment journey.",
    image: `${Image01}`,
  },

  {
    name: "Emily R.",
    role: "Patient",
    feedback:
      "The doctors here genuinely care. I felt safe, heard, and treated like family throughout my treatment journey.",
    image: `${Image03}`,
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="w-full bg-gray-50 py-12 px-4 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
        >
          What Our Patients Say
        </motion.h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-full shadow-md p-6 m-4 flex flex-col items-center text-center h-full"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <p className="text-gray-700 italic mb-4">"{testimonial.feedback}"</p>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <span className="text-sm text-gray-500">{testimonial.role}</span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

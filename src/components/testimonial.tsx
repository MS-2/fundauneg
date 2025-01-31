import React from "react";

function Testimonial() {
  return (
    <section
      id="testimonials_section"
      className="text-gray-400 bg-gray-900 body-font"
    >
      <div className="container px-5 py-16 mx-auto">
        <div className="flex justify-center">
          <h2 className="sm:w-2/5 mb-12 text-3xl text-center text-white font-medium title-font">
            Opiniones
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                src="https://dummyimage.com/302x302"
              />
              <p className="leading-relaxed sm:text-justify text-center">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                src="https://dummyimage.com/300x300"
              />
              <p className="leading-relaxed sm:text-justify text-center">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">
                ALPER KAMU
              </h2>
              <p className="text-gray-500">UI Develeoper</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                src="https://dummyimage.com/305x305"
              />
              <p className="leading-relaxed sm:text-justify text-center">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">
                HENRY LETHAM
              </h2>
              <p className="text-gray-500">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

import React from 'react';

// Array of student testimonials
const studentTestimonials = [
  {
    name: 'John Doe',
    position: 'Computer Science Student',
    quote: 'Studying abroad was a life-changing experience. The support and guidance provided by the education program were exceptional.',
    imageSrc: 'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' 
  },
  {
    name: 'Jane Smith',
    position: 'Engineering Student',
    quote: 'I learned so much from the diverse culture and academic exposure during my education abroad. It broadened my perspective immensely.',
    imageSrc: 'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' 
  },
  {
    name: 'Alex Johnson',
    position: 'Business Administration Student',
    quote: 'The education program provided opportunities that not only enhanced my academics but also helped me grow personally. It was invaluable.',
    imageSrc: 'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' 
  },
  {
    name: 'Emily Davis',
    position: 'Art History Student',
    quote: 'Studying abroad exposed me to art and history in ways I never imagined. It was an enriching and fulfilling educational journey.',
    imageSrc: 'https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' 
  }
];

const Testimonials = () => {
  return (
    <>
    <div className="p-12">
    <h1 className='text-4xl sm:text-4xl lg:text-5xl  text-[#FB2465] font-bold text-start wow fadeInUp pt-4'>Testimonial</h1>
          <hr
            style={{
              backgroundColor: "#FB2465",
              width: "110px",
              height: "2px",
              border: "none",
              marginTop: "0px",
              marginLeft: "0px",
              marginBottom: "20px",
            }}
          />
   
      <div className="grid mb-8 drop-shadow-xl shadow-xl  md:mb-12 md:grid-cols-2 bg-white " style={{borderRadius:"30px"}}>
      {studentTestimonials.map((testimonial, index) => (
        <figure key={index} className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-lg  md:border-edark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
            <h3 className="text-lg font-semibold text-gray-900 ">{testimonial.quote}</h3>
            <p className="my-4">{testimonial.quote}</p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <img className="rounded-full w-9 h-9" src={testimonial.imageSrc} alt={`${testimonial.name}'s profile picture`} />
            <div className="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
              <div className='text-[#FB2465]'>{testimonial.name}</div>
              <div className="text-sm text-gray-500 ">{testimonial.position}</div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
    </div>
    </>
  
  );
};

export default Testimonials;

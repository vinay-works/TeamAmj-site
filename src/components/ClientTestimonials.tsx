import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  review: string;
}

const TestimonialCard: React.FC<Testimonial> = ({ name, role, company, image, review }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg mx-auto mb-8">
      <div className="px-6 py-4">
        <div className="flex items-center justify-center">
          <img className="w-20 h-20 rounded-full mx-auto" src={image} alt={name} />
        </div>
        <div className="text-center mt-4">
          <div className="font-bold text-xl">{name}</div>
          <div className="text-sm text-gray-600">{role}</div>
          <div className="text-sm text-gray-600">{company}</div>
        </div>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{review}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'John Doe',
      role: 'CEO',
      company: 'ABC Inc.',
      image: 'client1.jpg', // Replace with actual image URL
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      company: 'XYZ Corp.',
      image: 'client2.jpg', // Replace with actual image URL
      review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        name: 'Jane Smith',
        role: 'CTO',
        company: 'XYZ Corp.',
        image: 'client2.jpg', // Replace with actual image URL
        review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        name: 'Jane Smith',
        role: 'CTO',
        company: 'XYZ Corp.',
        image: 'client2.jpg', // Replace with actual image URL
        review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    // Add more testimonials as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

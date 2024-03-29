import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="bg-gray-700 rounded-t-xl w-auto py-12 sm:py-24 px-6 sm:px-12 md:px-24 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-8 sm:text-4xl sm:mb-12">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-200 mb-4">
              Get in touch with us and clarify any doubts you have. Happy to
              help!
            </p>
            <div className="flex items-center text-gray-200 mb-6">
              <svg className="h-6 w-6 fill-current mr-3" viewBox="0 0 24 24">
                <path d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zM12 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                <path d="M12 16c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zM12 12c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                <circle cx="12" cy="12" r="1" />
              </svg>
              <span>+91 134567890</span>
            </div>
            <div className="flex items-center text-gray-200 mb-6">
              <svg className="h-6 w-6 fill-current mr-3" viewBox="0 0 24 24">
                <path d="M21 3H3c-1.7 0-3 1.3-3 3v12c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zM19.6 8L12 13L4.4 8H19.6zM3.8 16L12 11L20.2 16H3.8z" />
              </svg>
              <span>example@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-200 mb-6">
              <svg className="h-6 w-6 fill-current mr-3" viewBox="0 0 24 24">
                <path d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zM12 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                <path d="M12 16c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                <circle cx="12" cy="12" r="1" />
              </svg>
              <span>BTM 2nd stage</span>
            </div>
          </div>
          <div>
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full py-2 px-4 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded focus:outline-none focus:border-blue-500 transition duration-150"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full py-2 px-4 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded focus:outline-none focus:border-blue-500 transition duration-150"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full py-2 px-4 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded focus:outline-none focus:border-blue-500 transition duration-150"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Say Something"
                  rows={4}
                  className="w-full py-2 px-4 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded focus:outline-none focus:border-blue-500 transition duration-150"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-orange-600 text-white rounded hover:bg-orange-500 transition duration-150"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

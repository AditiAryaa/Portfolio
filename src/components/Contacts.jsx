const Contacts = () => {
  return (
    <div
      name="contacts"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen text-white p-4 "
    >
      <div className=" max-w-screen-lg  mx-auto px-4 flex  flex-col justify-center h-full">
        <div className="py-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-3">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/0874f8d0-3b47-41bb-8746-e8ec2c89d6b7"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-3 mx-auto my-8 flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

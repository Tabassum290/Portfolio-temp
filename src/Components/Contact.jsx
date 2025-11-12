const Contact = () => {
  return (
    <div id="contact" className="w-full mt-20 mb-20 px-4 lg:px-0 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
        Contact Me
      </h2>

      <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-12">
        <form className="flex flex-col gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
<button
  type="button" // page reload na korte
  className="btn bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
  onClick={() => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    window.location.href = `mailto:keyatabassum2@gmail.com?subject=Message from ${name}&body=${message} (From: ${email})`;
  }}
>
  Send Message
</button>

        </form>
      </div>
    </div>
  );
};

export default Contact;

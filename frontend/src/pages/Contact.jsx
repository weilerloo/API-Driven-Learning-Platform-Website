export default function Contact() {
  return (
    <section className="flex flex-col bg-gray-100 dark:bg-gray-900 py-16 w-full">
      <div className="text-center mb-12 mt-20">
        <h1 className="text-4xl font-bold">We'd like to hear from you.</h1>
        <p className="text-2xl mb-8">Leave your contact, we will approach to you with your enquiries.</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 lg:px-8 my-20">
        <div className="overflow-hidden rounded-[16px] mb-20">
          <div>
            <iframe width="100%" height="440" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=newyork+(My%20Businnewyoess%20Name)&amp;t=p&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We’d love to hear from you! Reach out with any questions or feedback.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-200">Address</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  123 Business Rd, City, Country
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-200">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-200">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">support@example.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

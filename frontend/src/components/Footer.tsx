import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white py-4">
            <div className="container mx-auto grid grid-1s-1 
            md:grid-cols-4 gap-20 w-11/12 my-10">

                <div className="flex items-center">
                    <h1 className="text-2xl font-bold">Elice Learning Platform</h1>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4">Contacts</h3>
                    <p>Phone: +65 8509 5495</p>
                    <p>Email: looweiler20010916@gmail.com</p>
                    <p>Address: Singapore</p>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4">Social Media</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/" target="_blank"
                            rel="noopener noreferrer">
                            <FaFacebook className="text-white text-2xl 
                            hover:text-gray-300" />
                        </a>
                        <a href="https://twitter.com/" target="_blank"
                            rel="noopener noreferrer">
                            <FaTwitter className="text-white text-2xl
                            hover:text-gray-300" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank"
                            rel="noopener noreferrer">
                            <FaInstagram className="text-white text-2xl
                            hover:text-gray-300" />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank"
                            rel="noopener noreferrer">
                            <FaLinkedin className="text-white text-2xl
                            hover:text-gray-300" />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4">Services</h3>
                    <ul>
                        <li><a href="#" className="hover:underline">
                            Web Development</a></li>
                        <li><a href="#" className="hover:underline">
                            App Development</a></li>
                        <li><a href="#" className="hover:underline">
                            SEO Optimization</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}
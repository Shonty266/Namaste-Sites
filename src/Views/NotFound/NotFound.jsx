import React from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] text-gray-100 px-6">
    
    <div className="text-8xl font-['ClashDisplay-Bold'] bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-4">
      404
    </div>
    <h1 className="text-3xl font-['ClashDisplay-SemiBold'] mb-2">Page Not Found</h1>
    <p className="font-['ClashDisplay-Regular'] text-gray-400 mb-8 text-center max-w-md">
      Sorry, the page you are looking for does not exist or has been moved.
    </p>
    <Link
      to="/"
      className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-teal-500 text-white font-['ClashDisplay-Medium'] shadow-lg hover:scale-105 transition-transform"
    >
      Go Home
    </Link>
  </div>
);

export default NotFound;
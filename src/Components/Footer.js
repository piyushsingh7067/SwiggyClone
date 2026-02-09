import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 mt-4 p-6">
      <hr className="w-full border-t-2 border-gray-300 rounded-lg mb-8" />

      <div className="text-center font-bold text-lg mb-4">
        For better experience,{" "}
        <span className="font-bold">download the Swiggy app now</span>
      </div>

      {/* App buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://play.google.com/store/apps/details?id=in.swiggy.android"
        >
          <button className="bg-black text-white flex items-center px-4 py-2 rounded-md">
            <svg
              viewBox="0 0 512 512"
              className="mr-2"
              height="1em"
              width="1em"
              fill="currentColor"
            >
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
            </svg>
            Get it on Google Play
          </button>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920"
        >
          <button className="bg-black text-white flex items-center px-4 py-2 rounded-md">
            <svg
              viewBox="0 0 384 512"
              className="mr-2"
              height="1em"
              width="1em"
              fill="currentColor"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8..." />
            </svg>
            Download on the App Store
          </button>
        </a>
      </div>

      {/* Footer links */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        <div>
          <span className="text-orange-600 font-bold text-xl">Swiggy</span>
          <p className="text-sm font-bold mt-2">© 2025 Swiggy Limited</p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <ul className="space-y-2 font-semibold">
            <li>About Us</li>
            <li>Careers</li>
            <li>Swiggy One</li>
            <li>Instamart</li>
            <li>Dineout</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <ul className="space-y-2 font-semibold">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Available in</h4>
          <ul className="space-y-2 font-semibold">
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Bangalore</li>
            <li>Pune</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Life at Swiggy</h4>
          <ul className="space-y-2 font-semibold">
            <li>Explore</li>
            <li>News</li>
            <li>Snackables</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

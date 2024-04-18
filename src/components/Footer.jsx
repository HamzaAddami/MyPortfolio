const Footer = () => {
  return (
    <div className="relative bg-nav">
    <svg
      className="absolute w-full h-6 -mt-5 sm:-mt-12 sm:h-8 text-nav"
      preserveAspectRatio="none"
      viewBox="0 0 1440 54"
    >
      <path
        fill="currentColor"
        d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
      />
    </svg>
    <div className="absolute inset-x-0 bottom-0  text-center bg-nav">
      <p className="text-sm text-bg1">
        © Copyright 2024 <span className="text-hover">Hamza Addami</span> . All rights reserved.
      </p>
    </div>
  </div>
  
  );
};

export default Footer;

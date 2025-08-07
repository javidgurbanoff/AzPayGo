import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-center items-center py-4 px-4 gap-4 ">
        <img
          className="w-80 h-auto"
          src="https://i.pinimg.com/736x/89/e0/a4/89e0a4c0fce683f5cf4c339006ba4db5.jpg"
          alt="Logo"
        />
        <div className="max-w-xl">
          <h2 className="text-2xl text-[#0B1F3A] whitespace-normal break-words">
            İndi pul köçürmələri, ödəniş qəbulu və çıxarış daha sürətli, ucuz və
            əlçatan oldu.
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center py-4 px-4 gap-4 ">
        <div className="max-w-xl">
          <h2 className="text-2xl text-[#0B1F3A] whitespace-normal break-words">
            İndi pul köçürmələri, ödəniş qəbulu və çıxarış daha sürətli, ucuz və
            əlçatan oldu.
          </h2>
        </div>
        <img
          className="w-80 h-auto"
          src="https://i.pinimg.com/736x/33/eb/b3/33ebb309990f70eb41100b57e92a86ed.jpg"
          alt="Logo"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center py-4 px-4 gap-4 ">
        <img
          className="w-80 h-auto"
          src="https://i.pinimg.com/736x/c9/64/0e/c9640e3e2d4a3f54c71ea6115b45bf06.jpg"
          alt="Logo"
        />
        <div className="max-w-xl">
          <h2 className="text-2xl text-[#0B1F3A] whitespace-normal break-words">
            İndi pul köçürmələri, ödəniş qəbulu və çıxarış daha sürətli, ucuz və
            əlçatan oldu.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;

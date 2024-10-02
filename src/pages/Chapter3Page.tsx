import React from "react";
import { useNavigate } from "react-router-dom";

declare global {
  interface Window {
    FB: any;
  }
}
const Chapter3Page: React.FC = () => {
  const navigate = useNavigate();
  const handleTestButtonClick = () => {
    console.log("Navigating to the test...");
    navigate('/Quiz/chuong3')
  };

  return (
    <div className="w-full h-full bg-gradient-to-b from-yellow-50 to-gray-100 p-6">
      <div className="flex flex-col justify-center items-center w-full mt-5 text-4xl md:text-5xl lg:text-6xl text-[#8B4513]">
        Chương 3
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-2 text-4xl md:text-5xl lg:text-6xl text-[#8B4513] px-5 md:px-10 lg:px-20">
        Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="bg-yellow-200 text-yellow-900 p-4 rounded-lg shadow-lg text-center">
          🌟{" "}
          <strong>Theo dõi fanpage để cập nhật thông tin sớm nhất nhé!</strong>{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61566550163263"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 ml-2"
          >
            Nhấn vào đây để theo dõi ngay!
          </a>{" "}
          🌟
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-10">
        <iframe
          className="flex flex-col justify-center items-center text-center border-red-500 rounded-lg shadow-lg"
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61566550163263%2Fvideos%2F440058908540797%2F&show_text=false&width=560&t=0"
          width="1120"
          height="628"
        ></iframe>
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={handleTestButtonClick}
          className="px-8 py-3 bg-[#8B4513] text-white text-xl rounded-lg shadow-lg hover:bg-[#7a3e12] transition-all duration-300"
        >
          Làm bài quiz
        </button>
      </div>
    </div>
  );
};

export default Chapter3Page;

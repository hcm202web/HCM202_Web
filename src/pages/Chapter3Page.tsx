import React, { useEffect, useState } from 'react';

declare global {
    interface Window {
      FB: any;
    }
  }
const Chapter3Page: React.FC = () => {
    const handleTestButtonClick = () => {
        console.log('Navigating to the test...');
    };
    useEffect(() => {
        // Kiểm tra nếu SDK của Facebook đã được tải
        if (window.FB) {
          window.FB.XFBML.parse();
          console.log(" run ===========================================");
        }
        setLinkFB("https://www.facebook.com/61566550163263/videos/440058908540797");
      }, [window.FB])
      const [linkFB, setLinkFB] = useState("https://www.facebook.com/61566550163263/videos/440058908540797");
    return (
        <div className="w-full h-full bg-gradient-to-b from-yellow-50 to-gray-100 p-6">
            <div className="flex flex-col justify-center items-center w-full mt-5 text-4xl md:text-5xl lg:text-6xl text-[#8B4513]">
                Chương 3
            </div>
            <div className="flex flex-col justify-center items-center text-center mt-2 text-4xl md:text-5xl lg:text-6xl text-[#8B4513] px-5 md:px-10 lg:px-20">
                Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội
            </div>
            <iframe className="flex justify-center mt-8" 
                data-href={linkFB} 
                data-width="500" 
                data-show-text="false">
            </iframe>
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

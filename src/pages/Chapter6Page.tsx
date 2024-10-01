import React, { useState, useRef } from 'react';
import hochiminhImage from '../assets/chuong6/test.jpg'; 
import vanhoa1 from '../assets/chuong6/Văn Hóa (1).png';
import vanhoa2 from '../assets/chuong6/Văn Hóa (2).png';
import vanhoa3 from '../assets/chuong6/Văn Hóa (3).png';
import vanhoa4 from '../assets/chuong6/Văn Hóa (4).png';
import vanhoa5 from '../assets/chuong6/Văn Hóa (5).png';
import daoduc1 from '../assets/chuong6/Đạo Đức (1).png';
import daoduc2 from '../assets/chuong6/Đạo Đức (2).png';
import daoduc3 from '../assets/chuong6/Đạo Đức (3).png';
import connguoi1 from '../assets/chuong6/Con Người (1).png';
import connguoi2 from '../assets/chuong6/Con Người (2).png';
import connguoi3 from '../assets/chuong6/Con Người (3).png';
import xaydung from '../assets/chuong6/Xây Dựng.png';
import { useNavigate } from 'react-router-dom';

const Chapter6Page: React.FC = () => {
    const [openSection, setOpenSection] = useState<number | null>(null);

    // Tạo ref cho hình ảnh đầu tiên trong từng section
    const firstImageRefs = {
        1: useRef<HTMLImageElement>(null),
        2: useRef<HTMLImageElement>(null),
        3: useRef<HTMLImageElement>(null),
        4: useRef<HTMLImageElement>(null),
    };

    // Hàm để cuộn đến hình ảnh đầu tiên trong section
    const scrollToFirstImage = (sectionIndex: number) => {
        const ref = firstImageRefs[sectionIndex];
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const toggleSection = (sectionIndex: number) => {
        if (openSection === sectionIndex) {
            setOpenSection(null); // Đóng section nếu đã mở
        } else {
            setOpenSection(sectionIndex);
            // Cuộn đến hình ảnh đầu tiên khi section được mở
            setTimeout(() => scrollToFirstImage(sectionIndex), 100); // Sử dụng timeout nhỏ để đảm bảo hình ảnh đã render
        }
    };

    const navigate = useNavigate();

    const handleTestButtonClick = () => {
        console.log("Navigating to the test...");
        navigate('/Quiz/chuong6.1.1');  // Điều hướng tới trang quiz
    };

    return (
        <div className="w-full h-full bg-gradient-to-b from-yellow-50 to-gray-100 p-6">
            <div className='flex flex-col justify-center items-center w-full mt-5 text-4xl md:text-5xl lg:text-6xl text-[#8B4513]'>
                Chương 6
            </div>
            <div className='flex flex-col justify-center items-center text-center mt-2 text-4xl md:text-5xl lg:text-6xl text-[#8B4513] px-5 md:px-10 lg:px-20'>
                Tư tưởng Hồ Chí Minh về văn hóa, đạo đức, con người
            </div>

            <div className="flex justify-center mt-8">
                <img src={hochiminhImage} alt="Hồ Chí Minh" className="w-full max-w-5xl h-auto rounded-lg shadow-lg" />
            </div>
            <div className="mt-10 w-full max-w-7xl mx-auto space-y-4">
                <div 
                    onClick={() => toggleSection(1)} 
                    className="cursor-pointer bg-blue-100 hover:bg-blue-200 transition-all duration-300 shadow-lg p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-800 text-center">Tư tưởng Hồ Chí Minh về văn hóa</h3>
                    {openSection === 1 && (
                        <div className="mt-4 border-t-2 border-blue-200 pt-4">                      
                            <img 
                                ref={firstImageRefs[1]}  // Gắn ref cho hình ảnh đầu tiên
                                src={vanhoa1} 
                                alt="Khai niem" 
                                className="w-3/4 max-w-4xl h-auto mx-auto rounded-lg shadow-lg" 
                            />
                            <img src={vanhoa2} alt="Khai niem" className="w-3/4 max-w-4xl h-auto mx-auto rounded-lg shadow-lg" />
                            <img src={vanhoa3} alt="Khai niem" className="w-3/4 max-w-4xl h-auto mx-auto rounded-lg shadow-lg" />
                            <img src={vanhoa4} alt="Khai niem" className="w-3/4 max-w-4xl h-auto mx-auto rounded-lg shadow-lg" />
                            <img src={vanhoa5} alt="Khai niem" className="w-3/4 max-w-4xl h-auto mx-auto rounded-lg shadow-lg" />
                        </div>
                    )}
                </div>
                <div 
                    onClick={() => toggleSection(2)} 
                    className="cursor-pointer bg-pink-100 hover:bg-pink-200 transition-all duration-300 shadow-lg p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-pink-800 text-center">Tư tưởng Hồ Chí Minh về đạo đức</h3>
                    {openSection === 2 && (
                        <div className="mt-4 border-t-2 border-pink-200 pt-4">                                                       
                            <img 
                                ref={firstImageRefs[2]}  // Gắn ref cho hình ảnh đầu tiên
                                src={daoduc1} 
                                alt="Khai niem" 
                                className="w-3/4 max-w-4xl h-auto mx-auto rounded-lg shadow-lg" 
                            />
                            <img src={daoduc2} alt="Khai niem" className="w-3/4 max-w-4xl h-auto mx-auto rounded-lg shadow-lg" />
                            <img src={daoduc3} alt="Khai niem" className="w-3/4 max-w-4xl h-auto mx-auto rounded-lg shadow-lg" />
                        </div>
                    )}
                </div>
                <div 
                    onClick={() => toggleSection(3)} 
                    className="cursor-pointer bg-red-100 hover:bg-red-200 transition-all duration-300 shadow-lg p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-800 text-center">Tư tưởng Hồ Chí Minh về con người</h3>
                    {openSection === 3 && (
                        <div className="mt-4 border-t-2 border-red-200 pt-4">                                                  
                            <img 
                                ref={firstImageRefs[3]}  // Gắn ref cho hình ảnh đầu tiên
                                src={connguoi1} 
                                alt="Khai niem" 
                                className="w-3/4 max-w-4xl h-auto mx-auto rounded-lg shadow-lg" 
                            />
                            <img src={connguoi2} alt="Khai niem" className="w-3/4 max-w-4xl h-auto mx-auto rounded-lg shadow-lg" />
                            <img src={connguoi3} alt="Khai niem" className="w-3/4 max-w-4xl h-auto mx-auto rounded-lg shadow-lg" />
                        </div>
                    )}
                </div>
                <div 
                    onClick={() => toggleSection(4)} 
                    className="cursor-pointer bg-green-100 hover:bg-green-200 transition-all duration-300 shadow-lg p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-800 text-center">Xây Dựng Văn Hóa, Đạo Đức, Con Người Việt Nam Hiện Nay Theo Tư Tưởng Hồ Chí Minh</h3>
                    {openSection === 4 && (
                        <div className="mt-4 border-t-2 border-green-200 pt-4">                   
                            <img 
                                ref={firstImageRefs[4]}  // Gắn ref cho hình ảnh đầu tiên
                                src={xaydung} 
                                alt="Khai niem" 
                                className="w-3/4 max-w-4xl h-auto mx-auto rounded-lg shadow-lg" 
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <button 
                    onClick={handleTestButtonClick}
                    className="px-8 py-3 bg-[#8B4513] text-white text-xl rounded-lg shadow-lg hover:bg-[#7a3e12] transition-all duration-300">
                    Làm bài quiz
                </button>
            </div>
        </div>
    );
};

export default Chapter6Page;

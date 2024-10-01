import React, { useState } from 'react';
import hochiminhImage from '../assets/chuong1/hochiminh.png'; 
import khainiemImage from '../assets/chuong1/khainiemchuong1.png';
import ynghiaImage from '../assets/chuong1/ynghiahoctapchuong1.png'; 
import doituongImage from '../assets/chuong1/doituongchuong1.png';
import phuongphapImage from '../assets/chuong1/phuongphapchuong1.png'; const Chapter1Page: React.FC = () => {
    const [openSection, setOpenSection] = useState<number | null>(null);

    const toggleSection = (sectionIndex: number) => {
        setOpenSection(openSection === sectionIndex ? null : sectionIndex); 
    };

    const handleTestButtonClick = () => {
        console.log("Navigating to the test..");
    };

    return (
        <div className="w-full h-full bg-gradient-to-b from-yellow-50 to-gray-100 p-6">
            <div className='flex flex-col justify-center items-center w-full mt-5 text-4xl md:text-5xl lg:text-6xl text-[#8B4513]'>
                Chương 1
            </div>
            <div className='flex flex-col justify-center items-center text-center mt-2 text-4xl md:text-5xl lg:text-6xl text-[#8B4513] px-5 md:px-10 lg:px-20'>
                Khái niệm, đối tượng, phương pháp nghiên cứu và ý nghĩa học tập môn Tư Tưởng Hồ Chí Minh
            </div>
            {/* Mindmap Link Section */}
            <div className="flex justify-center items-center mt-5">
                <div className="bg-yellow-200 text-yellow-900 p-4 rounded-lg shadow-lg text-center">
                    🌟 <strong>Cùng khám phá mindmap trực quan và dễ hiểu về Chương 1:</strong> Khái niệm, đối tượng, phương pháp nghiên cứu và ý nghĩa học tập môn Tư tưởng Hồ Chí Minh – 
                        <a 
                        href="https://www.figma.com/proto/tLQuX5ZklLcmQOdTi3W0cL/HCM?node-id=5-17&node-type=frame&t=H07Y8sII2pzSyhqm-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A17" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800 ml-2"
                        >
                            Nhấn vào đây để trải nghiệm ngay!
                        </a> 🌟
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <img src={hochiminhImage} alt="Hồ Chí Minh" className="w-full max-w-5xl h-auto rounded-lg shadow-lg"/>
            </div>
            <div className="mt-10 w-full max-w-7xl mx-auto space-y-4">
                <div 
                    onClick={() => toggleSection(1)} 
                    className="cursor-pointer bg-blue-100 hover:bg-blue-200 transition-all duration-300 shadow-lg p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-800">Khái niệm</h3>
                    {openSection === 1 && (
                        <div className="mt-4 border-t-2 border-blue-200 pt-4">
                            
                            <p className="mb-4 mt-4"><strong>Định nghĩa:</strong></p>
                            <p className="mb-4">
                                “Tư tưởng Hồ Chí Minh là một hệ thống quan điểm, toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam, 
                                kết quả của sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta, kế thừa và phát triển 
                                các giá trị truyền thống tốt đẹp của dân tộc, tiếp thu tinh hoa văn hoá nhân loại; là tài sản tinh thần vô cùng to lớn và quý giá của 
                                Đảng và dân tộc ta mãi mãi soi đường cho sự nghiệp cách mạng của nhân dân ta giành thắng lợi”  
                                <br /><br />
                                (Đảng Cộng sản Việt Nam: Văn kiện Đại hội đại biểu toàn quốc lần thứ XI, Nxb. Chính trị quốc gia, Hà Nội, 2011, tr.88)
                            </p>

                            <p className="mb-4">
                                Khái niệm trên đây đã chỉ rõ nội hàm cơ bản của tư tưởng Hồ Chí Minh, cơ sở hình thành cũng như ý nghĩa của tư tưởng đó. Cụ thể là:
                            </p>

                            <ul className="list-disc ml-6 mb-4">
                                <li><strong>Bản chất cách mạng, khoa học cũng như nội dung cơ bản:</strong></li>
                                <p className="mb-4">
                                    Đó là hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam, 
                                    từ đó phản ánh những vấn đề có tính quy luật của cách mạng Việt Nam.
                                </p>

                                <li><strong>Cơ sở hình thành:</strong></li>
                                <p className="mb-4">
                                    Chủ nghĩa Mác-Lênin - giá trị cơ bản nhất trong quá trình hình thành và phát triển của tư tưởng đó; 
                                    các giá trị truyền thống tốt đẹp của dân tộc, tinh hoa và văn hóa của nhân loại.
                                </p>

                                <li><strong>Ý nghĩa:</strong></li>
                                <p className="mb-4">
                                    Tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc ta, mãi soi đường cho sự nghiệp cách mạng của nhân dân ta. 
                                    Cùng với chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh là một bộ phận cấu thành làm nền tảng tư tưởng và kim chỉ nam 
                                    cho hành động của Đảng và cách mạng Việt Nam.
                                </p>
                            </ul>
                            <img src={khainiemImage} alt="Khai niem" className="w-full max-w-7xl h-auto rounded-lg shadow-lg"/>
                        </div>
                    )}
                </div>
                <div 
                    onClick={() => toggleSection(2)} 
                    className="cursor-pointer bg-pink-100 hover:bg-pink-200 transition-all duration-300 shadow-lg p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-pink-800">Đối tượng</h3>
                    {openSection === 2 && (
                        <div className="mt-4 border-t-2 border-pink-200 pt-4">
                            
                            <p className="mb-4 mt-4">
                                Toàn bộ những quan điểm của Hồ Chí Minh thể hiện trong di sản của Người, 
                                những vấn đề lý luận và thực tiễn được rút ra từ cuộc đời hoạt động rất phong phú ở cả trong nước và trên thế giới của Hồ Chí Minh.
                            </p>
                            <p className="mb-4">
                                Quá trình hệ thống quan điểm của Hồ Chí Minh vận động trong thực tiễn.
                            </p>
                            <img src={doituongImage} alt="Khai niem" className="w-full max-w-7xl h-auto rounded-lg shadow-lg"/>
                        </div>
                    )}
                </div>
                <div 
                    onClick={() => toggleSection(3)} 
                    className="cursor-pointer bg-red-100 hover:bg-red-200 transition-all duration-300 shadow-lg p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-800">Ý nghĩa học tập</h3>
                    {openSection === 3 && (
                        <div className="mt-4 border-t-2 border-red-200 pt-4">
                            
                            <p className="mt-2"><strong>Giáo dục và thực hành đạo đức cách mạng:</strong> Củng cố niềm tin khoa học gắn liền với trau dồi tình cảm cách mạng, bồi dưỡng lòng yêu nước. Có điều kiện tốt để thực hành đạo đức cách mạng, chống chủ nghĩa cá nhân, chống “giặc nội xâm” để lập thân, lập nghiệp, sống có ích cho xã hội, yêu và làm những điều thiện, ghét và tránh cái xấu, cái ác; nâng cao lòng tự hào về đất nước Việt Nam, về chế độ chính trị xã hội chủ nghĩa, về Hồ Chí Minh, về Đảng Cộng sản Việt Nam.</p>
        
                            <p className="mt-4"><strong>Xây dựng, rèn luyện phương pháp và phong cách công tác:</strong> Người học có thể vận dụng xây dựng phong cách tư duy, phong cách diễn đạt, phong cách làm việc, phong cách ứng xử, phong cách sinh hoạt, v.v.</p>
        
                            <p className="mt-4 mb-4"><strong>Góp phần nâng cao năng lực tư duy lý luận:</strong> Với ý nghĩa cùng với chủ nghĩa Mác-Lênin làm thành nền tảng tư tưởng và kim chỉ nam cho hành động của Đảng và cách mạng Việt Nam, tư tưởng Hồ Chí Minh là những phương hướng về lý luận và thực tiễn hành động cho những người Việt Nam yêu nước.</p>
                            <img src={ynghiaImage} alt="Khai niem" className="w-full max-w-7xl h-auto rounded-lg shadow-lg"/>
                        </div>
                    )}
                </div>
                <div 
                    onClick={() => toggleSection(4)} 
                    className="cursor-pointer bg-green-100 hover:bg-green-200 transition-all duration-300 shadow-lg p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-800">Phương pháp</h3>
                    {openSection === 4 && (
                        <div className="mt-4 border-t-2 border-green-200 pt-4">
                            
                            <p className="mt-2"><strong>Thống nhất tính đảng và tính khoa học:</strong> Phải đứng trên quan điểm của chủ nghĩa Mác-Lênin, quán triệt cương lĩnh, đường lối, quan điểm của Đảng Cộng sản Việt Nam. Đồng thời, phải bảo đảm tính khách quan, khoa học của các luận để nêu ra.</p>
        
                            <p className="mt-4"><strong>Thống nhất lý luận và thực tiễn:</strong> Đảm bảo sự thống nhất biện chứng giữa lý luận và thực tiễn.</p>
        
                            <p className="mt-4"><strong>Quan điểm lịch sử - cụ thể:</strong> Xem xét sự vật và hiện tượng đó đã xuất hiện trong lịch sử như thế nào, trải qua những giai đoạn phát triển chủ yếu nào. Trên quan điểm của sự phát triển đó để xem xét hiện nay nó đã trở thành như thế nào.</p>
        
                            <p className="mt-4"><strong>Quan điểm toàn diện và hệ thống:</strong> Trên bình diện tổng thể hay bộ phận phải luôn luôn quán triệt mối liên hệ qua lại của các yếu tố, các bộ phận trong sự gắn kết tất yếu của hệ thống - hạt nhân cốt lõi là tư tưởng độc lập tự do, dân chủ và chủ nghĩa xã hội.</p>

                            <p className="mt-4"><strong>Quan điểm kế thừa và phát triển:</strong> Đòi hỏi không chỉ biết kế thừa, vận dụng mà còn phải biết phát triển sáng tạo tư tưởng của Người trong điều kiện lịch sử mới, trong bối cảnh cụ thể của đất nước và quốc tế.</p>

                            <p className="mt-4 mb-4"><strong>Phương pháp cụ thể:</strong> Phương pháp lôgic, phương pháp lịch sử và sự kết hợp hai phương pháp này. Phương pháp phân tích văn bản kết hợp với nghiên cứu hoạt động thực tiễn của Hồ Chí Minh. Phương pháp chuyên ngành, liên ngành.</p>
                            <img src={phuongphapImage} alt="Khai niem" className="w-full max-w-7xl h-auto rounded-lg shadow-lg"/>
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

export default Chapter1Page;

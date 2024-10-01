import React, { useState } from "react";
import tutuong from "../assets/chuong4/tutuong.jpg";
import anh2 from "../assets/chuong4/2.png"
import anh3 from "../assets/chuong4/3.png"
import anh4 from "../assets/chuong4/4.png"
import { useNavigate } from "react-router-dom";
const Chapter4Page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const handleTestButtonClick = () => {
    console.log("Navigating to the test...");
    navigate('/Quiz/chuong4')
  };

  const [modalContent, setModalContent] = useState({
    title: "",
    image: [
      'anh2',
      'image2.jpg',
      'image3.jpg',
    ],
    description: "",
  });

  const handleClick = (box: string) => {
    // Cập nhật nội dung modal dựa trên box được nhấn
    switch (box) {
      case "Box 1":
        setModalContent({
          title: "Tư tưởng Hồ Chí Minh về Đảng Cộng Sản Việt Nam",
          description: `
            <h3 style="font-size: 24px; font-weight: bold;">Tính tất yếu và vai trò lãnh đạo của Đảng Cộng sản Việt Nam</h3>
            <ul style="list-style-type: disc; padding-left: 20px;">
            <li style="margin-bottom: 8px;"><strong>Tính tất yếu của sự ra đời Đảng Cộng sản:</strong> Hồ Chí Minh khẳng định Đảng Cộng sản ra đời là một yêu cầu tất yếu trong quá trình phát triển lịch sử của dân tộc và giai cấp công nhân. Đảng Cộng sản Việt Nam là lực lượng tiên phong của giai cấp công nhân, đại diện cho lợi ích của cả giai cấp công nhân và toàn thể nhân dân lao động.</li>
            <li style="margin-bottom: 8px;"><strong>Sự ra đời của Đảng bao gồm các yếu tố:</strong> Phong trào yêu nước, Phong trào công nhân, và Chủ nghĩa Marx-Lenin. Sự kết hợp giữa chủ nghĩa Marx-Lenin với phong trào yêu nước và phong trào công nhân giúp Đảng Cộng sản Việt Nam trở thành một lực lượng cách mạng không chỉ giải phóng giai cấp mà còn giải phóng dân tộc, tạo nên sự độc đáo và khác biệt so với lý thuyết của chủ nghĩa Marx.</li>
            <li style="margin-bottom: 8px;"><strong>Vai trò lãnh đạo của Đảng:</strong> Đảng là lực lượng lãnh đạo duy nhất của cách mạng Việt Nam, định hướng cho toàn bộ sự phát triển của đất nước trên con đường xã hội chủ nghĩa. Đảng không chỉ dẫn dắt phong trào cách mạng, mà còn định hướng về chính trị, tư tưởng và tổ chức. Đảng là người cầm lái, quyết định mọi thắng lợi của cách mạng. Sự lãnh đạo của Đảng mang tính chất tất yếu để đưa đất nước đi lên.</li>
            </ul>
            <br/>
            <h3 style="font-size: 24px; font-weight: bold;">Đảng phải trong sạch, vững mạnh</h3>
            <h4 style="font-size: 20px; font-weight: bold;">Đảng là đạo đức, là văn minh</h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
            <li style="margin-bottom: 8px;">Hồ Chí Minh coi đạo đức cách mạng là gốc, là nền tảng của người cách mạng.</li>
            <li style="margin-bottom: 8px;">Mục đích hoạt động của Đảng là lãnh đạo đấu tranh giải phóng dân tộc, giải phóng xã hội, giải phóng giai cấp, giải phóng con người.</li>
            <li style="margin-bottom: 8px;">Cương lĩnh, đường lối, chủ trương và mọi hoạt động thực tiễn của Đảng đều phải nhằm mục đích đó.</li>
            <li style="margin-bottom: 8px;">Đội ngũ đảng viên phải luôn luôn thấm nhuần đạo đức cách mạng, ra sức tu dưỡng, rèn luyện, suốt đời phấn đấu cho lợi ích của dân, của nước. Các phẩm chất của Đảng viên đó là: Cần, kiệm, liêm, chính. chí công vô tư, tự phê bình và phê bình, và gần gũi nhân dân.</li>
            </ul>
            <br/>
            <h4 style="font-size: 20px; font-weight: bold;">Những vấn đề nguyên tắc trong hoạt động của Đảng</h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
            <li style="margin-bottom: 8px;"><strong>Tập trung dân chủ:</strong> Tập trung trên nền tảng dân chủ, dân chủ phải đi đến tập trung. Phải làm cho tất cả mọi đảng viên bày tỏ hết ý kiến của mình ở trong Đảng, tức là khơi dậy tinh thần trách nhiệm và tính tích cực chủ động của tất cả đảng viên.</li>
            <li style="margin-bottom: 8px;"><strong>Tự phê bình và phê bình:</strong> Tự phê bình và phê bình phải trung thực, kiên quyết, đúng người, đúng việc, phải có văn hóa.</li>
            <li style="margin-bottom: 8px;"><strong>Kỷ luật nghiêm minh, tự giác:</strong> Sức mạnh của một đảng cộng sản bắt nguồn từ kỷ luật, muôn người như một, cùng một ý chí và hành động.</li>
            <li style="margin-bottom: 8px;"><strong>Đảng phải thường xuyên tự chỉnh đốn:</strong> Quyền lực của Đảng là do giai cấp công nhân, nhân dân lao động và toàn dân tộc giao phó. Đảng phải luôn chỉnh đốn để duy trì sự trong sạch.</li>
            <li style="margin-bottom: 8px;"><strong>Đoàn kết, thống nhất trong Đảng:</strong> Đoàn kết, thống nhất trong Đảng trước hết là trong cấp uỷ, trong những cán bộ lãnh đạo chủ chốt.</li>
            <li style="margin-bottom: 8px;"><strong>Đảng phải liên hệ mật thiết với nhân dân:</strong> Đảng Cộng sản Việt Nam là một bộ phận của toàn thể dân tộc Việt Nam.</li>
            <li style="margin-bottom: 8px;"><strong>Đoàn kết quốc tế:</strong> Đảng phải chú trọng giữ vững và tăng cường mối quan hệ quốc tế trong sáng, bảo vệ lợi ích quốc gia.</li>
            </ul>
            <br/>
            <h4 style="font-size: 20px; font-weight: bold;">Xây dựng đội ngũ cán bộ, đảng viên</h4>
            <ul style="list-style-type: disc; padding-left: 20px;">
            <li style="margin-bottom: 8px;">Phải tuyệt đối trung thành với Đảng.</li>
            <li style="margin-bottom: 8px;">Phải là những người nghiêm chính thực hiện cương lĩnh, đường lối, quan điểm, chủ trương, nghị quyết của Đảng và các nguyên tắc xây dựng Đảng.</li>
            <li style="margin-bottom: 8px;">Phải luôn tu dưỡng, rèn luyện, trau dồi đạo đức cách mạng.</li>
            <li style="margin-bottom: 8px;">Phải luôn luôn học tập nâng cao trình độ về mọi mặt.</li>
            <li style="margin-bottom: 8px;">Phải có mối liên hệ mật thiết với nhân dân.</li>
            <li style="margin-bottom: 8px;">Phải luôn luôn chịu trách nhiệm, năng động, sáng tạo.</li>
            <li style="margin-bottom: 8px;">Phải là những người luôn phòng và chống các tiêu cực.</li>
            </ul>
        `,
          image: [anh2],
        });
        break;
      case "Box 2":
        setModalContent({
          title: "Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân",
          description: `
            <b style="font-size: 20px;">Nhà nước dân chủ</b>
            <ul style="list-style-type: disc; padding-left: 20px; margin-top: 10px;">
            <li style="margin-bottom: 10px;"><b>Bản chất giai cấp của nhà nước:</b> 
                Hồ Chí Minh xác định rằng nhà nước mang bản chất giai cấp công nhân, được Đảng Cộng sản lãnh đạo. Nhà nước này hoạt động theo nguyên tắc tập trung dân chủ, tức là mọi cơ quan lãnh đạo từ cấp dưới đến cấp trên đều được bầu chọn và giám sát bởi các đại biểu nhân dân. Bản chất của nhà nước này thể hiện ở việc luôn định hướng xã hội chủ nghĩa, không chỉ trên phương diện kinh tế mà còn trên các khía cạnh chính trị, văn hóa và xã hội.
            </li>
            <li style="margin-bottom: 10px;"><b>Nhà nước của nhân dân:</b> 
                Theo Hồ Chí Minh, nhà nước của nhân dân nghĩa là quyền lực nhà nước xuất phát từ nhân dân. Nhân dân có quyền lựa chọn, bãi miễn và kiểm soát các đại biểu mà họ bầu ra. Đây là sự thể hiện quyền làm chủ của nhân dân, mọi quyết định của nhà nước đều phản ánh ý chí và nguyện vọng của nhân dân.
            </li>
            <li style="margin-bottom: 10px;"><b>Nhà nước do nhân dân:</b> 
                Nhà nước do nhân dân lập nên, nhân dân vừa là chủ, vừa là người thực hiện quyền làm chủ. Hồ Chí Minh nhấn mạnh rằng đây không chỉ là một khẩu hiệu, mà nhân dân thực sự làm chủ và điều hành đất nước. Dân chủ ở đây không chỉ thể hiện trong quyền lợi, mà còn cả trong trách nhiệm và nghĩa vụ của mỗi người dân đối với đất nước.
            </li>
            <li style="margin-bottom: 10px;"><b>Nhà nước vì nhân dân:</b> 
                Mọi chính sách và đường lối của nhà nước đều phải hướng tới lợi ích chính đáng của nhân dân. Một nhà nước vì dân phải làm sao cho "dân có ăn, dân có mặc, dân có chỗ ở và dân được học hành". Điều này nhấn mạnh trách nhiệm của nhà nước trong việc phục vụ nhân dân một cách trung thành, không đặc quyền, đặc lợi, tạo điều kiện tốt nhất cho sự phát triển của người dân.
            </li>
            </ul>
            <br/>
            <b style="font-size: 20px;">Nhà nước pháp quyền</b>
            <ul style="list-style-type: disc; padding-left: 20px; margin-top: 10px;">
            <li style="margin-bottom: 10px;"><b>Nhà nước phải được tổ chức và hoạt động dựa trên pháp luật:</b> 
                Hồ Chí Minh nhấn mạnh rằng nhà nước phải hoạt động dựa trên nguyên tắc pháp quyền, mọi công dân và cơ quan nhà nước đều phải tuân thủ pháp luật.
            </li>
            <li style="margin-bottom: 10px;"><b>Chế độ pháp quyền và tôn trọng luật pháp:</b> 
                Nhà nước phải ban hành các chính sách và pháp luật công bằng, minh bạch, bảo vệ quyền và lợi ích của mọi công dân. Việc tuân thủ pháp luật phải được thực hiện một cách nghiêm minh, không ai được phép đứng trên pháp luật.
            </li>
            </ul>
            <br/>
            <b style="font-size: 20px;">Nhà nước trong sạch, vững mạnh</b>
            <ul style="list-style-type: disc; padding-left: 20px; margin-top: 10px;">
            <li style="margin-bottom: 10px;"><b>Nhà nước phải trong sạch:</b> 
                Hồ Chí Minh chỉ ra rằng chủ nghĩa cá nhân là căn bệnh “mẹ” của nhiều căn bệnh khác như tham nhũng, quan liêu, lãng phí. Khi cán bộ, công chức đặt lợi ích cá nhân lên trên lợi ích của tập thể sẽ làm suy yếu bộ máy lãnh đạo và mất lòng tin của nhân dân.
            </li>
            <li style="margin-bottom: 10px;"><b>Cải cách hành chính và nâng cao hiệu quả quản lý nhà nước:</b> 
                Nhà nước phải cải cách hành chính để giảm bớt quan liêu, tăng cường minh bạch và nâng cao hiệu quả quản lý.
            </li>
            <li style="margin-bottom: 10px;"><b>Nhân dân là chủ thể kiểm soát quyền lực nhà nước:</b> 
                Nhà nước của dân, do dân, vì dân phải chịu sự kiểm soát của nhân dân, và nhân dân có quyền giám sát và bãi miễn những đại biểu không xứng đáng.
            </li>
            </ul>
            `,
          image: [anh3],
        });
        break;
      case "Box 3":
        setModalContent({
          title:
            "Vận dụng tư tưởng Hồ Chí Minh vào công tác xây dựng Đảng và Nhà nước",
          description: `
                <b style="font-size: 20px;">Xây dựng Đảng thật sự trong sạch, vững mạnh</b>
                <ul style="list-style-type: disc; padding-left: 20px; margin-top: 10px;">
                <li style="margin-bottom: 10px;"><b>Đổi mới và nâng cao chất lượng của Đảng:</b> 
                    Trong quá trình xây dựng Đảng, việc tự đổi mới và nâng cao chất lượng lãnh đạo là nhiệm vụ sống còn. Đảng cần giữ vững tính tiên phong và làm gương trong xã hội, không để xảy ra các biểu hiện tiêu cực như tham nhũng, quan liêu.
                </li>
                <li style="margin-bottom: 10px;"><b>Đội ngũ cán bộ trong sạch và có trách nhiệm:</b> 
                    Xây dựng đội ngũ cán bộ, đảng viên có năng lực và phẩm chất đạo đức là trọng tâm của việc xây dựng Đảng. Đảng cần thường xuyên kiểm tra, giám sát và xử lý những cán bộ, đảng viên có dấu hiệu suy thoái, để củng cố niềm tin của nhân dân vào Đảng.
                </li>
                </ul>
                <br/>
                <b style="font-size: 20px;">Xây dựng nhà nước</b>
                <ul style="list-style-type: disc; padding-left: 20px; margin-top: 10px;">
                <li style="margin-bottom: 10px;"><b>Phải xây dựng nhà nước trong sạch vững mạnh:</b> 
                    Việc xây dựng Nhà nước phải tập trung vào việc làm cho nhà nước hoạt động hiệu quả, dân chủ và minh bạch. Nhà nước phải hoạt động theo nguyên tắc pháp quyền, đảm bảo các quyền và lợi ích hợp pháp của nhân dân.
                </li>
                <li style="margin-bottom: 10px;"><b>Cải thiện bộ máy hành chính:</b> 
                    Nhà nước cần không ngừng cải cách và đổi mới hệ thống hành chính để tăng cường hiệu quả, giảm thiểu các thủ tục rườm rà, quan liêu. Bộ máy nhà nước cần phải nhanh nhạy, phục vụ nhân dân với tinh thần trách nhiệm cao nhất.
                </li>
                </ul>
                <br/>
                <b style="font-size: 20px;">Phòng, chống tham nhũng góp phần củng cố niềm tin của nhân dân vào chế độ và pháp luật</b>
                <ul style="list-style-type: disc; padding-left: 20px; margin-top: 10px;">
                <li style="margin-bottom: 10px;"><b>Chống tham nhũng, quan liêu:</b> 
                    Hồ Chí Minh coi tham nhũng, quan liêu là những nguy cơ đe dọa trực tiếp đến sự trong sạch của Đảng và Nhà nước. Công tác phòng, chống tham nhũng phải được thực hiện quyết liệt và thường xuyên để bảo vệ sự trong sạch của bộ máy lãnh đạo, từ đó củng cố niềm tin của nhân dân vào Đảng và chế độ.
                </li>
                <li style="margin-bottom: 10px;"><b>Niềm tin của nhân dân:</b> 
                    Việc phòng, chống tham nhũng thành công sẽ góp phần giữ vững lòng tin của nhân dân đối với nhà nước và pháp luật. Nhân dân sẽ đồng hành cùng Nhà nước trong mọi nhiệm vụ xây dựng đất nước nếu họ tin tưởng vào sự lãnh đạo đúng đắn của Đảng và tính liêm chính của bộ máy nhà nước.
                </li>
                </ul>
          `,
          image: [anh4],
        });
        break;
      default:
        break;
    }
    setIsModalOpen(true); // Mở modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Đóng modal
  };

  return (
    <div className="w-full h-full bg-gradient-to-b from-yellow-50 to-gray-100 p-6">
      {/* Chapter Title and Subtitle */}
      <div className="flex flex-col justify-center items-center w-full mt-5 text-3xl md:text-5xl lg:text-6xl text-[#8B4513]">
        Chương 4
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-2 text-xl md:text-4xl lg:text-6xl text-[#8B4513] px-5 md:px-10 lg:px-20">
        Tư tưởng Hồ Chí Minh về đảng Cộng Sản Việt Nam và Nhà nước của dân, do
        nhân dân, vì nhân dân
      </div>
      {/* Mindmap Link Section */}
      <div className="flex justify-center items-center mt-5">
        <div className="bg-yellow-200 text-yellow-900 p-4 rounded-lg shadow-lg text-center">
          🌟{" "}
          <strong>
            Theo dõi fanpage để cập nhật thông tin sớm nhất nhé!
          </strong>{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61566550163263"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 ml-2"
          >
            Nhấn vào đây để theo doi ngay!
          </a>{" "}
          🌟
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <img
          src={tutuong}
          alt="Hồ Chí Minh"
          className="w-full max-w-5xl h-auto rounded-lg shadow-lg mb-32"
        />
      </div>
      {/* Boxes */}
      <div className="flex justify-center items-center flex-col mt-10 space-y-12 mb-32">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0">
          <div className="flex flex-col space-y-12 md:space-y-24 items-end mr-24">
            {/* First Box */}
            <div
              className="cursor-pointer"
              onClick={() => handleClick("Box 1")}
            >
              <div className="bg-purple-500 text-white p-6 w-72 md:w-80 h-64 md:h-72 rounded-lg shadow-lg flex justify-center items-center text-center transition transform hover:scale-105 hover:bg-purple-700 active:scale-95">
                <p className="font-bold text-xl">
                  Tư tưởng Hồ Chí Minh <br /> về Đảng Cộng Sản Việt Nam
                </p>
              </div>
            </div>
            {/* Second Box */}
            <div
              className="cursor-pointer"
              onClick={() => handleClick("Box 2")}
            >
              <div className="bg-red-500 text-white p-6 w-72 md:w-80 h-64 md:h-72 rounded-lg shadow-lg flex justify-center items-center text-center transition transform hover:scale-105 hover:bg-red-600 active:scale-95">
                <p className="font-bold text-xl">
                  Tư tưởng Hồ Chí Minh về Nhà nước
                  <br /> của dân, do dân, vì dân
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-full w-44 h-44 md:w-48 md:h-48 flex justify-center items-center text-center shadow-lg z-10 overflow-hidden p-4">
            <h2 className="text-lg md:text-xl font-bold leading-tight md:leading-normal text-center">
              Tư tưởng <br /> Hồ Chí Minh về Đảng và Nhà nước
            </h2>
          </div>
          <div className="flex flex-col justify-center items-start ml-24">
            {/* Third Box */}
            <div
              className="cursor-pointer"
              onClick={() => handleClick("Box 3")}
            >
              <div className="bg-yellow-500 text-white p-6 w-72 md:w-80 h-64 md:h-72 rounded-lg shadow-lg flex justify-center items-center text-center transition transform hover:scale-105 hover:bg-yellow-600 active:scale-95">
                <p className="font-bold text-xl">
                  Vận dụng tư tưởng Hồ Chí Minh
                  <br />
                  vào công tác xây dựng Đảng và Nhà nước
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseModal} // Bắt sự kiện click ra ngoài modal
        >
          <div
            className="bg-gradient-to-r from-beige-100 via-pink-100 to-white p-6 rounded-lg shadow-lg max-w-3xl w-full max-w-[60%] relative overflow-y-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện click khi nhấn vào bên trong modal
          >
            <button
              className="absolute top-2 right-2 text-gray-800 hover:text-gray-900"
              onClick={handleCloseModal}
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
              {modalContent.title}
            </h2>
            <div
              className="text-justify text-gray-800"
              dangerouslySetInnerHTML={{ __html: modalContent.description }}
            />
            <img
              src={modalContent.image[0]}
              alt={modalContent.title}
              className="mb-4 w-full h-auto rounded-lg mx-auto"
            />
          </div>
        </div>
      )}
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

export default Chapter4Page;
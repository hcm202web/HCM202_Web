import React, { useState } from "react";
import chuong2_1 from "../assets/chuong2/chuong2-1.png";

const Chapter2Page: React.FC = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (sectionIndex: number) => {
    setOpenSection(openSection === sectionIndex ? null : sectionIndex);
  };
  const handleTestButtonClick = () => {
    console.log("Navigating to the test...");
  };
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center items-center w-full mt-5 text-4xl md:text-5xl lg:text-6xl text-[#8B4513]">
        Chương 2
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-2 text-4xl md:text-5xl lg:text-6xl text-[#8B4513] px-5 md:px-10 lg:px-20">
        Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh
      </div>
      <div className="flex justify-center mt-8">
        <img
          src={chuong2_1}
          className="w-full max-w-5xl h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="mt-10 w-full max-w-7xl mx-auto space-y-4">
        <div
          onClick={() => toggleSection(1)}
          className="cursor-pointer bg-blue-100 hover:bg-blue-200 transition-all duration-300 shadow-lg p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-blue-800">
            I. Cơ sở hình thành
          </h3>
          {openSection === 1 && (
            <div className="mt-4 border-t-2 border-blue-200 pt-4">
              <strong>
                1. <u>Cơ sở thực tiễn:</u>
              </strong>{" "}
              <br />
              <div className="ml-5">
                <li>
                  {" "}
                  Chủ nghĩa tư bản phát triển từ giai đoạn tự do cạnh tranh sang
                  giai đoạn đế quốc chủ nghĩa -&gt; tạo mâu thuẫn thuộc địa – đế
                  quốc.{" "}
                </li>
                <li>
                  <strong>Năm 1917,</strong> Cách mạng Tháng Mười Nga thành công
                  mở ra con đường giải phóng cho các dân tộc bị áp bức trên thế
                  giới.
                </li>
                <li>
                  <strong>Năm 1919,</strong> Quốc tế Cộng sản được thành lập
                </li>
              </div>
              <br />
              <strong>
                2. <u>Cơ sở lý luận:</u>
              </strong>
              <div className="ml-5">
                <strong> a. Giá trị truyền thống của dân tộc Việt Nam:</strong>
                <div className="ml-5">
                  <li>Chủ nghĩa yêu nước là giá trị cốt lõi xuyên suốt.</li>
                  <li>
                    Hồ Chí Minh kế thừa tinh thần đấu tranh anh dũng vì độc lập,
                    tự do, bảo vệ chủ quyền quốc gia.
                  </li>
                  <li>
                    Yêu nước gắn với tinh thần đoàn kết, nhân ái, dân chủ và
                    khoan dung.
                  </li>
                </div>
                <strong> b. Tinh hoa văn hóa nhân loại:</strong>
                <div className="ml-5">
                  <li>
                    <strong>Phương Đông:</strong>
                    <div className="ml-5">
                      <li>Nho giáo nhấn mạnh nhân trị, đức trị</li>
                      <li>Phật giáo đề cao từ bi, yêu thương</li>
                      <li>Lão giáo chú trọng sống hài hòa với thiên nhiên.</li>
                    </div>
                  </li>
                  <li>
                    <strong>Phương Tây: </strong> Tự do, Bình đẳng, Bác ái; tư
                    tưởng dân chủ và nhà nước pháp quyền.
                  </li>
                </div>
                <strong> c. Chủ nghĩa Mác-Lênin:</strong>
                <div className="ml-5">
                  <li>Cơ sở lý luận quan trọng cho tư tưởng Hồ Chí Minh.</li>
                  <li>
                    Phương pháp luận cách mạng, bổ sung và phát triển trong thời
                    đại mới.
                  </li>
                </div>
              </div>
              <br />
              <strong>
                3. <u>Nhân tố chủ quan Hồ Chí Minh:</u>
              </strong>
              <br />
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
              <table className="w-full text-sm text-left rtl:text-right border-x border-y border-neutral-950 rounded">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Phẩm chất
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Tài năng
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-900">
                      <td className="px-6 py-4">
                        Tư duy độc lập, tự chủ, sáng tạo
                      </td>
                      <td className="px-6 py-4">
                        Tiếp thu tư tưởng và văn hóa từ hơn 30 quốc gia
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-900">
                      <td className="px-6 py-4">
                        Tinh thần phê phán, đổi mới và cách mạng
                      </td>
                      <td className="px-6 py-4">
                        Hiểu biết sâu sắc về các hệ tư tưởng như chủ nghĩa đế
                        quốc, cộng sản, dân tộc
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-900">
                      <td className="px-6 py-4">
                        Kiên định với lý tưởng cách mạng
                      </td>
                      <td className="px-6 py-4">
                        Phát triển lý luận phù hợp với tình hình Việt Nam
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-900">
                      <td className="px-6 py-4">
                        Tầm nhìn chiến lược, bao quát thời đại
                      </td>
                      <td className="px-6 py-4">
                        Vận dụng thành công các quy luật quốc tế vào cách mạng
                        Việt Nam
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-900">
                      <td className="px-6 py-4">
                        Linh hoạt trong việc kết hợp giữa lý luận và thực tiễn
                      </td>
                      <td className="px-6 py-4">
                        Thành thạo nhiều ngoại ngữ, hiểu rõ văn hóa các nước
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-900">
                      <td className="px-6 py-4">
                        Chọn lọc, kế thừa và phát triển các giá trị quốc tế một
                        cách sáng tạo
                      </td>
                      <td className="px-6 py-4">
                        Phát triển lý luận cách mạng trên nền tảng Mác-Lênin,
                        nhưng sáng tạo theo hướng riêng cho Việt Nam
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <div
          onClick={() => toggleSection(2)}
          className="cursor-pointer bg-pink-100 hover:bg-pink-200 transition-all duration-300 shadow-lg p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-pink-800">
            II. Quá trình hình thành và phát triển tư tưởng Hồ Chí Minh
          </h3>
          {openSection === 2 && (
            <div className="mt-4 border-t-2 border-pink-200 pt-4">
              <strong>
                1.{" "}
                <u>
                  Trước năm 1911: Hình thành tư tưởng yêu nước và chí hướng tìm
                  đường cứu nước{" "}
                </u>
              </strong>
              <div className="ml-5">
                <li>
                  Hồ Chí Minh lớn lên trong một gia đình có truyền thống yêu
                  nước ở Nghệ An.
                </li>
                <li>
                  Ông sớm nhận thức được sự áp bức của thực dân Pháp và quyết
                  tâm tìm con đường cứu nước khác biệt với các phong trào thất
                  bại trước đó.
                </li>
                <li>
                  <strong>Ngày 5/6/1911:</strong> Ra đi tìm đường cứu nước, bắt
                  đầu hành trình từ Bến Nhà Rồng, Sài Gòn.
                </li>
              </div>
              <br />
              <strong>
                2.{" "}
                <u>
                  Giai đoạn 1911–1920: Hình thành tư tưởng cách mạng giải phóng
                  dân tộc
                </u>
              </strong>
              <div className="ml-5">
                <li>
                  Trong thời gian sống và làm việc ở nhiều nước (Pháp, Anh, Mỹ),
                  Hồ Chí Minh không ngừng học hỏi các mô hình chính trị, kinh tế
                  xã hội để tìm đường cứu nước.
                </li>
                <li>
                  <strong>Năm 1919:</strong> Gửi “Yêu sách của nhân dân An Nam”
                  đến Hội nghị Versailles,
                </li>
                <li>
                  <strong>Năm 1920:</strong> Đọc “Sơ thảo Lần I Luận cương về
                  vấn đề dân tộc và thuộc địa” của Lênin. Từ đó, Hồ Chí Minh tin
                  tưởng rằng cách mạng giải phóng dân tộc phải gắn liền với cách
                  mạng vô sản, đây là bước ngoặt quan trọng trong tư tưởng của
                  <strong>Người</strong>.
                </li>
              </div>
              <br />
              <strong>
                3.{" "}
                <u>
                  Giai đoạn 1920–1930: Hình thành tư tưởng về con đường cách
                  mạng Việt Nam
                </u>
              </strong>
              <div className="ml-5">
                <li>
                  <strong>Năm 1920:</strong> Trở thành một trong những người
                  sáng lập Đảng Cộng sản Pháp tại Đại hội Tours.
                </li>
                <li>
                  <strong>1921–1923:</strong> Hồ Chí Minh sáng lập Hội Liên hiệp
                  thuộc địa ở Paris, viết nhiều bài báo tố cáo chủ nghĩa thực
                  dân Pháp trên tờ "Le Paria".
                </li>
                <li>
                  <strong>Năm 1923:</strong> Đi Nga và tham gia Quốc tế Cộng
                  sản, trực tiếp học tập và làm việc với phong trào cách mạng
                  quốc tế.
                </li>
                <li>
                  <strong>Năm 1925:</strong> Xuất bản cuốn “Bản án chế độ thực
                  dân Pháp,” lên án tội ác của chủ nghĩa thực dân.
                </li>
                <li>
                  <strong>Năm 1930:</strong> Thành lập Đảng Cộng sản Việt Nam
                  tại Cửu Long, Hồng Kông. Cương lĩnh chính trị đầu tiên khẳng
                  định con đường cách mạng Việt Nam là cách mạng vô sản.
                </li>
              </div>
              <br />
              <strong>
                4.{" "}
                <u>
                  Giai đoạn 1930–1941: Vượt qua thử thách, giữ vững đường lối
                  cách mạng
                </u>
              </strong>
              <div className="ml-5">
                <li>
                  Trong giai đoạn này, phong trào cách mạng gặp nhiều khó khăn,
                  Hồ Chí Minh tiếp tục kiên định với con đường cách mạng vô sản.
                </li>
                <li>
                  <strong>Năm 1941:</strong> Trở về Việt Nam, triệu tập Hội nghị
                  Trung ương Đảng lần thứ 8 tại Pác Bó, Cao Bằng, khẳng định
                  đường lối cách mạng giải phóng dân tộc và thành lập Mặt trận
                  Việt Minh.
                </li>
              </div>
              <br />
              <strong>
                5. <u>Giai đoạn 1941–1945: Lãnh đạo Cách mạng Tháng Tám</u>
              </strong>
              <div className="ml-5">
                <li>
                  <strong>Ngày 2/9/1945:</strong> Tuyên ngôn độc lập tại Quảng
                  trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa, mở
                  ra kỷ nguyên độc lập dân tộc gắn liền với chủ nghĩa xã hội.
                </li>
              </div>
              <br />
              <strong>
                6.{" "}
                <u>
                  Giai đoạn 1945 1969: Tiếp tục phát triển tư tưởng Hồ Chí Minh
                </u>
              </strong>
              <div className="ml-5">
                <li>
                  Trong những năm lãnh đạo cuộc kháng chiến chống Pháp và Mỹ, tư
                  tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội tiếp
                  tục được phát triển và hoàn thiện.
                </li>
                <li>
                  <strong>Năm 1954:</strong> Chiến thắng Điện Biên Phủ, chấm dứt
                  ách thống trị của thực dân Pháp.
                </li>
                <li>
                  <strong>Năm 1969:</strong> Hồ Chí Minh qua đời, để lại di sản
                  tư tưởng to lớn cho dân tộc và cách mạng Việt Nam.
                </li>
              </div>
            </div>
          )}
        </div>
        <div
          onClick={() => toggleSection(3)}
          className="cursor-pointer bg-red-100 hover:bg-red-200 transition-all duration-300 shadow-lg p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-red-800">
            III. Giá trị tư tưởng Hồ Chí Minh
          </h3>
          {openSection === 3 && (
            <div className="mt-4 border-t-2 border-red-200 pt-4">
              <strong>1. Đối với cách mạng Việt Nam</strong>
              <div className="ml-5">
                <strong>
                  a. Tư tưởng Hồ Chí Minh đưa cách mạng giải phóng dân tộc Việt
                  Nam đến thắng lợi và bắt đầu xây dựng một xã hội mới trên đất
                  nước ta
                </strong>
                <div className="ml-5">
                  <li>
                    Tư tưởng Hồ Chí Minh là ngọn đuốc soi đường, dẫn dắt cách
                    mạng Việt Nam vượt qua khó khăn, giành độc lập dân tộc vào
                    năm 1945.
                  </li>
                  <li>
                    <>
                      Tư tưởng Hồ Chí Minh là nền tảng để xây dựng một xã hội
                      mới, công bằng, dân chủ và văn minh trên đất nước Việt Nam
                      từ năm 1945 đến nay.
                    </>
                  </li>
                </div>
                <strong>
                  b. Tư tưởng Hồ Chí Minh là nền tảng tư tưởng và kim chỉ nam
                  cho cách mạng Việt Nam
                </strong>
                <div className="ml-5">
                  <li>
                    <>
                      Tư tưởng Hồ Chí Minh là hệ thống lý luận toàn diện, sâu
                      sắc về cách mạng Việt Nam, là kim chỉ nam cho mọi hành
                      động của Đảng và nhân dân ta.
                    </>
                  </li>
                  <li>
                    <>
                      Tư tưởng Hồ Chí Minh là di sản tinh thần vô giá, là tài
                      sản chung của toàn Đảng, toàn dân và toàn quân ta, mãi mãi
                      soi đường cho sự nghiệp xây dựng và bảo vệ Tổ quốc Việt
                      Nam xã hội chủ nghĩa.
                    </>
                  </li>
                </div>
              </div>
              <br />
              <strong>2. Đối với sự phát triển tiến bộ của nhân loại</strong>

              <div className="ml-5">
                <strong>
                  a. Tư tưởng Hồ Chí Minh góp phần mở ra cho các dân tộc thuộc
                  địa con đường giải phóng dân tộc gắn với sự tiến bộ xã hội
                </strong>
                <div className="ml-5">
                  <li>
                    <>
                      Tư tưởng Hồ Chí Minh về giải phóng dân tộc là nguồn cảm
                      hứng lớn lao cho các dân tộc bị áp bức trên thế giới.
                    </>
                  </li>
                  <li>
                    <>
                      Tư tưởng Hồ Chí Minh chứng minh rằng các dân tộc thuộc địa
                      có thể tự giải phóng mình và xây dựng một xã hội mới tiến
                      bộ.
                    </>
                  </li>
                </div>
                <strong>
                  b. Tư tưởng Hồ Chí Minh góp phần tích cực vào cuộc đấu tranh
                  vì độc lập dân tộc, dân chủ, hòa bình, hợp tác và phát triển
                  trên thế giới{" "}
                </strong>
                <div className="ml-5">
                  <li>
                    <>
                      Hồ Chí Minh là người tiên phong trong việc thúc đẩy hợp
                      tác quốc tế. Bác nhận ra tầm quan trọng của việc đoàn kết
                      giữa các dân tộc để chống lại áp bức và giành độc lập.
                    </>
                  </li>
                  <li>
                    <>
                      Tư tưởng Hồ Chí Minh kết nối cách mạng Việt Nam với phong
                      trào quốc tế. Bác lồng ghép cuộc đấu tranh giải phóng dân
                      tộc Việt Nam vào các phong trào lớn hơn như phong trào
                      cộng sản và công nhân quốc tế, cũng như phong trào vì hòa
                      bình và hợp tác.
                    </>
                  </li>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleTestButtonClick}
          className="px-8 py-3 bg-[#8B4513] text-white text-xl rounded-lg shadow-lg hover:bg-[#7a3e12] transition-all duration-300"
        >
          Làm bài quiz
        </button>
      </div>
      <div className="flex flex-col justify-center items-center h-full w-full mt-5 mb-5"></div>
    </div>
  );
};

export default Chapter2Page;

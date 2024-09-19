import React from 'react';
import { useNavigate } from 'react-router-dom';
import handWaveLottieFile from '../assets/lottiefiles/handwaves.json';
import welcomeLottieFile from '../assets/lottiefiles/welcome.json';
import goodbye from '../assets/lottiefiles/goodbye.json';
import LottiePlayer from '../components/LottiePlayer';
function Welcome() {
    return (
        <div className='flex flex-col overflow-hidden overflow-x-hidden overflow-y-hidden'>
            <LottiePlayer animationData={welcomeLottieFile} />
            <div className='flex flex-row'>
                <div className='ml-'>
                    <LottiePlayer animationData={handWaveLottieFile} />
                </div>
                <div className="flex flex-col w-1/2 mx-auto border-4 border-[#D2600F] rounded-2xl outline-offset-[8px] drop-shadow-md mt-6">
                    <div className="flex justify-center items-center p-12 bg-neutral-100 rounded-t-2xl">
                        <div className="w-full text-center max-w-[800px]">
                            <h1 className="mb-5 text-4xl text-zinc-800">Tư tưởng hồ chí minh</h1>
                            <p className="mb-5 text-lg text-stone-500">
                                Dự án web về môn học "Tư tưởng Hồ Chí Minh" nhằm mục đích xây dựng một nền tảng trực tuyến giúp sinh viên
                                nắm vững kiến thức về tư tưởng của Chủ tịch Hồ Chí Minh,
                                một phần quan trọng trong nền tảng tư tưởng và đường lối phát triển của Việt Nam.
                                Trang web sẽ cung cấp các bài giảng, tài liệu học tập, câu hỏi thảo luận,
                                và các bài kiểm tra giúp người học tiếp cận, ôn tập và củng cố kiến thức một cách dễ dàng và hiệu quả.
                                Bên cạnh đó, tính năng tương tác và chia sẻ kinh nghiệm học tập giữa sinh viên sẽ được tích hợp
                                nhằm tạo ra môi trường học tập tích cực và gắn kết. Dự án không chỉ là công cụ hỗ trợ học tập mà
                                còn giúp lan tỏa những giá trị tư tưởng và đạo đức của Bác Hồ đến thế hệ trẻ.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-2.5 gap-2.5 gap-x-2.5 gap-x-2.5 gap-y-2.5 gap-y-2.5 px-2.5 py-12 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                        <img
                            loading="lazy"
                            alt=""
                            srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDuU_LK7nbocj7gr_Hov07L6RVk4CFkww3qg&s"
                            className="object-cover w-full h-64 bg-stone-300"
                        />
                        <img
                            loading="lazy"
                            alt=""
                            srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ho_Chi_Minh_1946.jpg/220px-Ho_Chi_Minh_1946.jpg"
                            className="object-cover mt-2.5 w-full h-64 bg-stone-300"
                        />
                        <img
                            loading="lazy"
                            alt=""
                            srcSet="https://file.thanhuyhanoi.vn/thanhuy/public/Uploads/TinTuc/2022/4/6/10017624/2efd1c56-cf6f-4b3e-923e-643d7db1456f.jpeg"
                            className="object-cover mt-2.5 w-full h-64 bg-stone-300"
                        />
                    </div>
                </div>
                <div className=''>
                    <LottiePlayer animationData={handWaveLottieFile} />
                </div>
            </div>
        </div>
    );
}

function Ending() {
    return (
        <div className='flex flex-col overflow-hidden overflow-x-hidden overflow-y-hidden'>
            <LottiePlayer animationData={goodbye} />
        </div>
    );
}
interface CardProps {
    image: string;
    title: string;
    content: string;
    onClick: () => void;
}

const CardLeft: React.FC<CardProps> = ({ image, title, content, onClick }) => {
    return (
        <div className="min-h-[40rem] flex flex-row mx-auto mb-12 bg-white w-full shadow-[0px_4px_16px_rgba(0,0,0,0.1)]">
            <img src={image} loading="lazy" className="object-cover w-2/5 h-auto rounded-r-xl" />
            <div className="flex flex-col justify-center p-5 pl-10 w-3/5">
                <h3 className="mb-4 text-2xl text-zinc-800">{title}</h3>
                <p className="mb-5 text-base text-stone-500">{content}</p>
                <button
                    className="self-start mt-2 px-5 bg-[#D2600F] rounded-2xl py-2.5 text-white font-bold uppercase cursor-pointer"
                    onClick={onClick}
                >
                    Xem thêm
                </button>
            </div>
        </div>
    );
}


const CardRight: React.FC<CardProps> = ({ image, title, content, onClick }) => {
    return (
        <div className="min-h-[40rem] flex flex-row  mx-auto mb-12 bg-white w-full shadow-[0px_4px_16px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col text-right justify-center p-5 pr-10 w-3/5">
                <h3 className="mb-4 text-2xl text-zinc-800">{title}</h3>
                <p className="mb-5 text-base text-stone-500">{content}</p>
                <button
                    className="self-end mt-2 px-5 bg-[#D2600F] rounded-2xl py-2.5 text-white font-bold uppercase cursor-pointer"
                    onClick={onClick}
                >
                    Xem thêm
                </button>
            </div>
            <img src={image} loading="lazy" className="object-cover w-2/5 h-auto rounded-l-xl" />
        </div>
    );
}
function ListChapter() {
    const navigate = useNavigate();

    const viewSeemore = (type: string) => {
        navigate({
            pathname: `/${type}`,
        });
    };
    return (
        <div className="w-full h-auto bg-[#FBE2D1] mt-6 mb-12 grid grid-cols-3 place-items-center p-4">
            <div className="box-border flex flex-col items-center mb-5 max-md:grow max-md:basis-full">
                <img
                    loading="lazy"
                    alt=""
                    srcSet="https://dhannd.edu.vn/image/cache/catalog/00_hinh_anh/k_8/201226_115-1587188970130402471342-900x600.jpg"
                    className="object-cover w-1/2 h-1/2 aspect-video rounded-xl"
                />
                <div className="mt-5 text-center">
                    <h2 className="mb-2.5 text-2xl font-semibold">CHƯƠNG 1</h2>
                    <p className="text-neutral-600 line-clamp-2 px-4">
                        Delve into the historical context and... of Ho Chi Minh's
                        leadership. Delve into the historical context and... of Ho Chi Minh's
                        leadership. Delve into the historical context and... of Ho Chi Minh's
                        leadership.
                    </p>
                </div>
                <button
                    className="mt-4 px-5 rounded-2xl bg-[#D2600F] py-2.5 text-white font-bold uppercase cursor-pointer"
                    onClick={() => viewSeemore("Chapter-1")}
                >
                    Xem thêm
                </button>
            </div>
            <div className="box-border flex flex-col items-center mb-5 max-md:grow max-md:basis-full">
                <img
                    loading="lazy"
                    alt=""
                    srcSet="https://daihocnguyentrai.edu.vn/wp-content/uploads/2024/03/z5285482483732_cdeb0fe866d35f5ddcb63ede4e72c5da.jpg"
                    className="object-cover w-1/2 h-1/2 aspect-video rounded-xl"
                />
                <div className="mt-5 text-center">
                    <h2 className="mb-2.5 text-2xl font-semibold">
                        CHƯƠNG 2
                    </h2>
                    <p className="text-neutral-600 line-clamp-2 px-4">
                        Understand the core philosophical impact of Ho Chi Minh on modern
                        society.
                    </p>
                </div>
                <button
                    className="mt-4 px-5 bg-[#D2600F] rounded-2xl py-2.5 text-white font-bold uppercase cursor-pointer border-[none]"
                    onClick={() => viewSeemore("Chapter-2")}
                >
                    Xem thêm
                </button>
            </div>
            <div className="box-border flex flex-col items-center mb-5 max-md:grow max-md:basis-full">
                <img
                    loading="lazy"
                    alt=""
                    srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2I1bvc1Z7ZqsTbvJrUVkke8Ylmbzptniqg&s"
                    className="object-cover w-1/2 h-1/2 aspect-video rounded-xl"
                />
                <div className="mt-5 text-center">
                    <h2 className="mb-2.5 text-2xl font-semibold">
                        CHƯƠNG 3
                    </h2>
                    <p className="text-neutral-600 line-clamp-2 px-4">
                        Understand the core philosophical impact of Ho Chi Minh on modern
                        society.
                    </p>
                </div>
                <button
                    className="mt-4 px-5 bg-[#D2600F] rounded-2xl py-2.5 text-white font-bold uppercase cursor-pointer border-[none]"
                    onClick={() => viewSeemore("Chapter-3")}
                >
                    Xem thêm
                </button>
            </div>
            <div className="box-border flex flex-col items-center max-md:grow max-md:basis-full">
                <img
                    loading="lazy"
                    alt=""
                    srcSet="https://phuong3.tayninh.gov.vn/uploads/news/2023_05/mln.jpg"
                    className="object-cover w-1/2 h-1/2 rounded-xl"
                />
                <div className="mt-5 text-center line-clamp-2 px-4">
                    <h2 className="mb-2.5 text-2xl font-semibold">CHƯƠNG 4</h2>
                    <p className="text-neutral-600">
                        Delve into the historical context and... of Ho Chi Minh's
                        leadership.
                    </p>
                </div>
                <button
                    className="mt-4 px-5 bg-[#D2600F] rounded-2xl py-2.5 text-white font-bold uppercase cursor-pointer border-[none]"
                    onClick={() => viewSeemore("Chapter-4")}
                >
                    Xem thêm
                </button>
            </div>
            <div className="box-border flex flex-col items-center max-md:grow max-md:basis-full">
                <img
                    loading="lazy"
                    alt=""
                    srcSet="https://dbndnghean.vn/dbndna-media/21/12/6/hoc_tap_lam_theo_tu_tuong_dao_duc_phong_cach_ho_chi_minh7827203_5122021--n2.jpg"
                    className="object-cover w-1/2 h-1/2 rounded-xl"
                />
                <div className="mt-5 text-center">
                    <h2 className="mb-2.5 text-2xl font-semibold">CHƯƠNG 5</h2>
                    <p className="text-neutral-600 line-clamp-2 px-4">
                        Delve into the historical context and... of Ho Chi Minh's
                        leadership.
                    </p>
                </div>
                <button
                    className="mt-4 px-5 bg-[#D2600F] rounded-2xl py-2.5 text-white font-bold uppercase cursor-pointer"
                    onClick={() => viewSeemore("Chapter-5")}
                >
                    Xem thêm
                </button>
            </div>
            <div className="box-border flex flex-col items-center max-md:grow max-md:basis-full">
                <img
                    loading="lazy"
                    alt=""
                    srcSet="https://snv.bacgiang.gov.vn/documents/21451/20277958/1710985718916_Ktcnn%281%29.jpg/d138911f-5390-4a2b-b716-ba2d057e037c?t=1710985718917"
                    className="object-cover w-1/2 h-1/2 rounded-xl"
                />
                <div className="mt-5 text-center">
                    <h2 className="mb-2.5 text-2xl font-semibold">CHƯƠNG 6</h2>
                    <p className="text-neutral-600 line-clamp-2 px-4">
                        Delve into the historical context and... of Ho Chi Minh's
                        leadership.
                    </p>
                </div>
                <button
                    className="mt-4 px-5 bg-[#D2600F] rounded-2xl py-2.5 text-white font-bold uppercase cursor-pointer"
                    onClick={() => viewSeemore("Chapter-6")}
                >
                    Xem thêm
                </button>
            </div>
        </div>
    );
}
const MainMenuPage: React.FC = () => {
    const navigate = useNavigate();

    const viewSeemore = (type: string) => {
        navigate({
            pathname: `/${type}`,
        });
    };

    return (
        <div className="w-full h-full bg-[#FFF8F0]">
            <div className='flex flex-col justify-center items-center mb-5'>
                <Welcome />
                <ListChapter />
                <CardLeft
                    content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
                    title='Chương 1'
                    image='https://lh5.googleusercontent.com/YJAhwhJ2YEtNgsQUGCOeenQ3W149Pxzqm7QD4KI4ueBQsH3mrG_WiJUHK0JliwKgMKHmEkv8UCKMabc2AWoXhvlky2GihfVJsPUxydYNoJl_qNp35hJ7hNU_OxxT7Ds13KZIRjIo'
                    onClick={() => viewSeemore("Chapter-1")} />
                <CardRight
                    content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
                    title='Chương 2'
                    image='https://images.hcmcpv.org.vn/res/news/2024/01/21-01-2024-nhan-thuc-sau-sac-tu-tuong-ho-chi-minh-cung-la-mot-cach-phong-ngua-su-suy-thoai--1CCFB382.jpg'
                    onClick={() => viewSeemore("Chapter-2")} />
                <CardLeft
                    content='aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
                    title='Chương 3'
                    image='https://bvhttdl.mediacdn.vn/documents/491975/1024281/chu+tich+ho+chi+minh.jpg'
                    onClick={() => viewSeemore("Chapter-3")} />
                <CardRight
                    content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
                    title='Chương 4'
                    image='https://special.nhandan.vn/tu-tuong-HCM-ve-XD-Dang/assets/QLZCnwHdCp/hcm-1916x1080.jpeg'
                    onClick={() => viewSeemore("Chapter-4")} />
                <CardLeft
                    content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
                    title='Chương 5'
                    image='https://bvhttdl.mediacdn.vn/291773308735864832/2023/5/16/tu-tuong-ho-chi-minh-la-ngon-duoc-soi-duong-cho-cach-mang-viet-nam-1684208736560-1684208737321285575517.jpg'
                    onClick={() => viewSeemore("Chapter-5")} />
                <CardRight
                    content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
                    title='Chương 6'
                    image='https://image.infographics.vn/media//1200/2024/5/17/171200x1328_2024-5-13-vn-ren-luyen-dao-duc-cach-mang-theo-tu-tuong-hcm-ngoc.jpg'
                    onClick={() => viewSeemore("Chapter-6")} />
                <Ending />
            </div>
        </div>
    );
};

export default MainMenuPage;

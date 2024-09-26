import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import handWaveLottieFile from '../assets/lottiefiles/handwaves.json';
import welcomeLottieFile from '../assets/lottiefiles/welcome.json';
import goodbye from '../assets/lottiefiles/goodbye.json';
import LottiePlayer from '../components/LottiePlayer';
import LoadingSpinner from '../components/LoadingSpinner';

type WelcomeProps = {
    title: string;
    content: string;
    url: string[];
};

function Welcome({ title, content, url }: WelcomeProps) {
    return (
        <div className='flex flex-col overflow-hidden overflow-x-hidden overflow-y-hidden'>
            <LottiePlayer animationData={welcomeLottieFile} />
            <div className='flex flex-row'>
                <div className=''>
                    <LottiePlayer animationData={handWaveLottieFile} />
                </div>
                <div className="flex flex-col w-2/3 mx-auto border-4 border-[#D2600F] rounded-2xl outline-offset-[8px] drop-shadow-md mt-6">
                    <div className="flex justify-center items-center p-12 bg-neutral-100 rounded-t-2xl">
                        <div className="w-full text-center max-w-[800px]">
                            <h1 className="mb-5 text-5xl text-zinc-800">{title}</h1>
                            <p className="mb-5 text-xl text-stone-500">
                                {content}
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-2.5 px-2.5 py-12 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] rounded-2xl">
                        {url.map((imageUrl, index) => (
                            <img
                                key={index}
                                loading="lazy"
                                alt=""
                                srcSet={imageUrl}
                                className="object-cover w-full h-[30rem] bg-stone-300 rounded-xl"
                            />
                        ))}
                    </div>
                </div>
                <div>
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
            <div className="flex flex-col justify-center p-5 px-10 w-3/5">
                <h3 className="mb-4 text-4xl text-zinc-800 font-bold text-balance">{title}</h3>
                <p className="mb-5 text-2xl text-stone-500 text-pretty">
                    {content &&
                        content.split("\n").map((line, index) => (
                            <span key={index}>
                                {line}
                                {index < content.split("\n").length - 1 && <br />}
                            </span>
                        ))}</p>
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
            <div className="flex flex-col text-right justify-center p-5 px-10 w-3/5">
                <h3 className="mb-4 text-4xl text-zinc-800 font-bold text-balance">{title}</h3>
                <p className="mb-5 text-2xl text-stone-500 text-pretty">
                    {content &&
                        content.split("\n").map((line, index) => (
                            <span key={index}>
                                {line}
                                {index < content.split("\n").length - 1 && <br />}
                            </span>
                        ))}
                </p>
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
type Chapter = {
    title: string;
    content: string;
    urlImage: string;
    urlRoute: string;
};

type ListChapterProps = {
    chapters: Chapter[];
};

function ListChapter({ chapters }: ListChapterProps) {
    const navigate = useNavigate();

    const viewSeemore = (chapter: string) => {
        navigate(`/${chapter}`);
    };

    return (
        <div className="w-full h-auto bg-[#FBE2D1] mt-6 mb-12 grid grid-cols-3 place-items-center p-4">
            {chapters.map((chapter, index) => (
                <div key={index} className="box-border flex flex-col items-center mb-5 max-md:grow max-md:basis-full">
                    <div className='max-w-60 aspect-video'>
                        <img
                            loading="lazy"
                            alt=""
                            srcSet={chapter.urlImage}
                            className="object-cover w-full h-full aspect-video rounded-xl"
                        />
                    </div>
                    <div className="mt-5 text-center">
                        <h2 className="mb-2.5 text-2xl font-semibold">{chapter.title}</h2>
                        <p className="text-neutral-600 line-clamp-2 px-4">
                            {chapter.content &&
                                chapter.content.split("\n").map((line, index) => (
                                    <span key={index}>
                                        {line}
                                        {index < chapter.content.split("\n").length - 1 && <br />}
                                    </span>
                                ))}
                        </p>
                    </div>
                    <button
                        className="mt-4 px-5 bg-[#D2600F] rounded-2xl py-2.5 text-white font-bold uppercase cursor-pointer"
                        onClick={() => viewSeemore(chapter.urlRoute)}
                    >
                        Xem thêm
                    </button>
                </div>
            ))}
        </div>
    );
}

const MainMenuPage: React.FC = () => {
    const navigate = useNavigate();
    const [localData, setLocalData] = useState<any>(null);
    const viewSeemore = (type: string) => {
        navigate({
            pathname: `/${type}`,
        });
    };
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const OnGetMainMenuData = async () => {
            try {
                const rs = await fetch(
                    "https://res.cloudinary.com/doatgdqwk/raw/upload/v1727256576/HCM/MainMenuData_hf58pm.json"
                );
                const jsonData = await rs.json();
                if (jsonData) {
                    setLocalData(jsonData);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching main menu data: ", error);
                setLoading(false);  // Ensure loading stops on error
            }
        };

        OnGetMainMenuData();
    }, []);

    return (
        <div className="w-full h-full bg-[#FFF8F0]">
            {loading && (<LoadingSpinner />)}
            <div className='flex flex-col justify-center items-center mb-5'>
                <Welcome
                    title={localData?.Welcome?.Title
                        || "Tư tưởng hồ chí minh"}
                    content={localData?.Welcome?.Content
                        || "Dự án web về môn học \"Tư tưởng Hồ Chí Minh\" nhằm mục đích xây dựng một nền tảng trực tuyến giúp sinh viên nắm vững kiến thức về tư tưởng của Chủ tịch Hồ Chí Minh, một phần quan trọng trong nền tảng tư tưởng và đường lối phát triển của Việt Nam. Trang web sẽ cung cấp các bài giảng, tài liệu học tập, câu hỏi thảo luận, và các bài kiểm tra giúp người học tiếp cận, ôn tập và củng cố kiến thức một cách dễ dàng và hiệu quả. Bên cạnh đó, tính năng tương tác và chia sẻ kinh nghiệm học tập giữa sinh viên sẽ được tích hợp nhằm tạo ra môi trường học tập tích cực và gắn kết. Dự án không chỉ là công cụ hỗ trợ học tập mà còn giúp lan tỏa những giá trị tư tưởng và đạo đức của Bác Hồ đến thế hệ trẻ."}
                    url={[
                        localData?.Welcome?.url?.Anh_1 || "",
                        localData?.Welcome?.url?.Anh_2 || "",
                        localData?.Welcome?.url?.Anh_3 || ""
                    ]}
                />

                <ListChapter
                    chapters={[
                        {
                            title: localData?.ListChapter?.Chapter1?.title || "Chương 1",
                            content: localData?.ListChapter?.Chapter1?.content || "",
                            urlImage: localData?.ListChapter?.Chapter1?.urlImage || "",
                            urlRoute: "chapter-1"
                        },
                        {
                            title: localData?.ListChapter?.Chapter2?.title || "Chương 2",
                            content: localData?.ListChapter?.Chapter2?.content || "",
                            urlImage: localData?.ListChapter?.Chapter2?.urlImage || "",
                            urlRoute: "chapter-2"
                        },
                        {
                            title: localData?.ListChapter?.Chapter3?.title || "Chương 3",
                            content: localData?.ListChapter?.Chapter3?.content || "",
                            urlImage: localData?.ListChapter?.Chapter3?.urlImage || "",
                            urlRoute: "chapter-3"
                        }
                        ,
                        {
                            title: localData?.ListChapter?.Chapter4?.title || "Chương 4",
                            content: localData?.ListChapter?.Chapter4?.content || "",
                            urlImage: localData?.ListChapter?.Chapter4?.urlImage || "",
                            urlRoute: "chapter-4"
                        }
                        ,
                        {
                            title: localData?.ListChapter?.Chapter5?.title || "Chương 5",
                            content: localData?.ListChapter?.Chapter5?.content || "",
                            urlImage: localData?.ListChapter?.Chapter5?.urlImage || "",
                            urlRoute: "chapter-5"
                        }
                        ,
                        {
                            title: localData?.ListChapter?.Chapter6?.title || "Chương 6",
                            content: localData?.ListChapter?.Chapter6?.content || "",
                            urlImage: localData?.ListChapter?.Chapter6?.urlImage || "",
                            urlRoute: "chapter-6"
                        }
                    ]}
                />
                <CardLeft
                    title={localData?.ListDetail?.Chapter1?.title || "Chương 1"}
                    content={localData?.ListDetail?.Chapter1?.content || ""}
                    image={localData?.ListDetail?.Chapter1?.urlImage || ""}
                    onClick={() => viewSeemore("Chapter-1")}
                />
                <CardRight
                    title={localData?.ListDetail?.Chapter2?.title || "Chương 2"}
                    content={localData?.ListDetail?.Chapter2?.content || ""}
                    image={localData?.ListDetail?.Chapter2?.urlImage || ""}
                    onClick={() => viewSeemore("Chapter-2")}
                />
                <CardLeft
                    title={localData?.ListDetail?.Chapter3?.title || "Chương 3"}
                    content={localData?.ListDetail?.Chapter3?.content || ""}
                    image={localData?.ListDetail?.Chapter3?.urlImage || ""}
                    onClick={() => viewSeemore("Chapter-3")} />
                <CardRight
                    title={localData?.ListDetail?.Chapter4?.title || "Chương 4"}
                    content={localData?.ListDetail?.Chapter4?.content || ""}
                    image={localData?.ListDetail?.Chapter4?.urlImage || ""}
                    onClick={() => viewSeemore("Chapter-4")} />
                <CardLeft
                    title={localData?.ListDetail?.Chapter5?.title || "Chương 5"}
                    content={localData?.ListDetail?.Chapter5?.content || ""}
                    image={localData?.ListDetail?.Chapter5?.urlImage || ""}
                    onClick={() => viewSeemore("Chapter-5")} />
                <CardRight
                    title={localData?.ListDetail?.Chapter6?.title || "Chương 6"}
                    content={localData?.ListDetail?.Chapter6?.content || ""}
                    image={localData?.ListDetail?.Chapter6?.urlImage || ""}
                    onClick={() => viewSeemore("Chapter-6")} />
                <Ending />
            </div>
        </div>
    );
};

export default MainMenuPage;

import React, { useEffect, useState } from 'react';
import quizdata from '../assets/quizdata.json';
import { QuizData } from '../types/QuizData';
import { useParams } from 'react-router-dom';

const QuizPage: React.FC = () => {
  const {chapter: initChap} = useParams<{chapter : string}>();
  const [chapter, setChapter] = useState<string>(initChap || 'chuong4');
  let [index, setIndex] = useState(0);
  const data = quizdata.chapters as QuizData['chapters'];
  const questions = data[chapter];
  const question = questions[index];
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  useEffect(()=>{
    setIndex(0);
    setSelectedAnswerIndex(null);
    setScore(0);
    setResult(false);
  },[chapter])
  const selectChapter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedChapter = event.target.value;
    setChapter(selectedChapter);
  };
  const checkAns = (ans: number) => {
    if (selectedAnswerIndex === null) {
      setSelectedAnswerIndex(ans);
      if (ans == question.ans)
        setScore(prev=>prev+1);
    }
  };
  const next = () => {
    if (selectedAnswerIndex === null) return;
    if (index == questions.length-1){
      setResult(true);
      return;
    }
    setIndex(++index);
    setSelectedAnswerIndex(null);
  }
  const reset = () => {
    setIndex(0);
    setSelectedAnswerIndex(null);
    setScore(0);
    setResult(false);
  }
  return (
    <div className='w-[640px] mx-auto mt-[0px] bg-white text-[#262626] flex flex-col gap-[5px] rounded-[10px] p-[20px_30px]'>
      {/* Chapter Selection Dropdown */}
      <div className='mb-[20px]'>
        <select id='chapter-select' onChange={selectChapter} value={chapter} className='p-[5px] max-w-[580px]'>
          <option value="chuong4">Chương 4: Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của dân, do dân và vì dân</option>
          <option value="chuong6" disabled>Chương 6: Tư tưởng Hồ Chí Minh về văn hóa, đạo đức, con người</option>
          <option value="chuong6.1.1">Chương 6.1.1 Một số nhận thức chung về văn hóa và quan hệ giữa văn hóa với các lĩnh vực khác</option>
          <option value="chuong6.1.2">Chương 6.1.2 Quan điểm của Hồ Chí Minh về vai trò của văn hóa</option>
          <option value="chuong6.1.3">Chương 6.1.3 Quan điểm Hồ Chí Minh về xây dựng nền văn hóa mới</option>
        </select>
      </div>
      {result?<>
        <h2 className='text-[24px] font-medium'>You score {score} out of {questions.length}</h2>
        <button 
          onClick={reset}
          className='mx-auto w-[200px] h-[50px] bg-[#553f9a] text-white text-[20px] font-medium rounded-[8px] cursor-pointer'>
          Reset
        </button>
      </>:<>
        <h2 className='text-[27px] font-medium'>{index + 1}. {question.question}</h2>
        <ul>
          <li
            onClick={() => { checkAns(1); }}
            className={`flex items-center h-[60px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] text-[18px] cursor-pointer
              ${question.ans === 1 && selectedAnswerIndex !== null ? 'bg-[#dffff2] border-[#00d397]' : (selectedAnswerIndex === 1 ? 'bg-[#FFEBEB] border-[#FF4A4A]' : '')}`}
          >
            {question.option1}
          </li>
          <li
            onClick={() => { checkAns(2); }}
            className={`flex items-center h-[60px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] text-[18px] cursor-pointer 
              ${question.ans === 2 && selectedAnswerIndex !== null ? 'bg-[#dffff2] border-[#00d397]' : (selectedAnswerIndex === 2 ? 'bg-[#FFEBEB] border-[#FF4A4A]' : '')}`}
          >
            {question.option2}
          </li>
          <li
            onClick={() => { checkAns(3); }}
            className={`flex items-center h-[60px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] text-[18px] cursor-pointer 
              ${question.ans === 3 && selectedAnswerIndex !== null ? 'bg-[#dffff2] border-[#00d397]' : (selectedAnswerIndex === 3 ? 'bg-[#FFEBEB] border-[#FF4A4A]' : '')}`}
          >
            {question.option3}
          </li>
          <li
            onClick={() => { checkAns(4); }}
            className={`flex items-center h-[60px] pl-[15px] border border-[#686868] rounded-[8px] mb-[20px] text-[18px] cursor-pointer 
              ${question.ans === 4 && selectedAnswerIndex !== null ? 'bg-[#dffff2] border-[#00d397]' : (selectedAnswerIndex === 4 ? 'bg-[#FFEBEB] border-[#FF4A4A]' : '')}`}
          >
            {question.option4}
          </li>
        </ul>
        <button 
          onClick={next}
          className='mx-auto w-[200px] h-[50px] bg-[#553f9a] text-white text-[20px] font-medium rounded-[8px] cursor-pointer'>Next</button>
        <div className='mx-auto text-[16px]'>{index + 1} of {questions.length} questions</div>
      </>}
    </div>
  );
};

export default QuizPage;

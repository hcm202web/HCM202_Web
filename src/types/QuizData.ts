// src/types/QuizData.ts
export interface Question {
    question: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    ans: number;
}

export interface QuizData {
    chapters:{
        [key: string]:{
            question: string;
            option1: string;
            option2: string;
            option3: string;
            option4: string;
            ans: number;
        }[];
    };
}
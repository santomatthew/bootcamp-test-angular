import { QuestionOptionGetResDto } from "../questionoption/question-option-get.res.dto"

export interface QuestionGetResDto {
    questionId: number
    question: string
    candidateAssignId: number
    questionOptions?: QuestionOptionGetResDto[]
}
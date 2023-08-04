import { QuestionOptionInsertReqDto } from "../questionoption/question-option-insert.req.dto"

export interface QuestionInsertReqDto {
    questionTypeId: number
    question: string
    questionOptions: QuestionOptionInsertReqDto[]
    questionTopicId: number
    questionPackageId: number
}   
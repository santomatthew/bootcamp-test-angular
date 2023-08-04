import { CandidateToQuestionInsertReqDto } from "./candidate-to-question-insert.req.dto"

export interface CandidateToQuestionsInsertReqDto {
    candidateToQuestions: CandidateToQuestionInsertReqDto[]
    candidateId: number
}
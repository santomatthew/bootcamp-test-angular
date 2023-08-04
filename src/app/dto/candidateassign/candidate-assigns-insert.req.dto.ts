import { CandidateAssignInsertReqDto } from "./candidate-assign-insert.req.dto"

export interface CandidateAssignsInsertReqDto {

    candidateAssigns: CandidateAssignInsertReqDto[]
    candidateId: number
    reviewerId: number
    questionId: number[]
}
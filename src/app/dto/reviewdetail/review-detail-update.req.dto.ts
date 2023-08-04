export interface ReviewDetailUpdateReqDto {
    candidateId: number
    grade?: number
    notes?: string
    reviewStatusId: number
}
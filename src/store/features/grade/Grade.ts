export interface Grade {
    id: number,
    name: string,
    createdAt: Date,
    updatedAt: Date
    TermId: number
}

export interface GradeResponse {
    message: Grade[]
}
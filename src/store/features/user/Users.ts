export interface User {
    id: number,
    firstname:string,
    lastname: string
    email: string,
    dob: Date,
    createdAt: Date,
    updatedAt: Date
}

export interface LoginResponse {
    message: User,
    token:string
}
export interface UserDto {
    name?: string
    uf?: string
    city?: string
    document?: string
    document_type?: string
}


export class UserErrosDto {
    name?: { message: string }
    uf?: { message: string }
    city?: { message: string }
    document?: { message: string }
    document_type?: { message: string }
}


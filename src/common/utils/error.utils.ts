export class NotfoundException extends Error {
    constructor(message: string) {
        super(message, { cause: 404 });

    }
}


export class UnauthorizedException extends Error {
    constructor(message: string) {
        super(message, { cause: 401 });

    }
}

export class ConflictException extends Error {
    constructor(message: string) {
        super(message, { cause: 409 });

    }
}





export class BadRequestException extends Error {
    constructor(
           message: string,
    public details: Record<string, string>[]){
        super(message, { cause: 400 });

    }
}
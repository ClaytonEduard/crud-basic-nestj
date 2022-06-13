import { isEmail } from "class-validator";

export class CreateUserDto {
    @isEmail
    email: string;

    name: string;

    password: string;

}

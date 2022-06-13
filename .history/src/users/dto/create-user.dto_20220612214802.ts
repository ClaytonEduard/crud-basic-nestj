import {email } from "class-validator";

export class CreateUserDto {
    @email()
    email: string;

    name: string;

    password: string;

}

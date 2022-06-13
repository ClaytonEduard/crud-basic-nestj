import {Email } from "class-validator";

export class CreateUserDto {
    @Email()
    email: string;

    name: string;

    password: string;

}

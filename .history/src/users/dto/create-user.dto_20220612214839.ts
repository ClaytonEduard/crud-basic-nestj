import { } from "class-validator";

export class CreateUserDto {
    @Is
    email: string;

    name: string;

    password: string;

}

import { } from "class-validator";

export class CreateUserDto {
    @this.emaill()
    email: string;

    name: string;

    password: string;

}

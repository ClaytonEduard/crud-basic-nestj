import { } from "class-validator";

export class CreateUserDto {
    @this.email()
    email: string;

    name: string;

    password: string;

}

import { isEmail } from "class-validator";

export class CreateUserDto {
    @isEmail()
    email: string;
    @is
    name: string;

    password: string;

}

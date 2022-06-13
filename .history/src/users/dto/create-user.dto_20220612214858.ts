import { isEmail } from "class-validator";

export class CreateUserDto {
    @isEmail()
    email: string;
    @Ist
    name: string;

    password: string;

}

import { isEmail } from "class-validator";

export class CreateUserDto {
    @isEmail()
    email: string;
    @IsStri
    name: string;

    password: string;

}

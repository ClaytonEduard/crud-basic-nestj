import { isEmail } from "class-validator";

export class CreateUserDto {
    @IsEmail()isEmail
    email: string;
    @IsString()
    name: string;

    password: string;

}

import { isEmail } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;
    @IsString()
    name: string;
    @IsString()
    password: string;

}

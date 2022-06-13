import { IsEmail, IsString } from "class-validator";


export class CreateUserDto {
    @IsEmail()
    email: string;
    @IsString()
    name: string;
    @IsString()
    @MinLength(6)
    password: string;

}

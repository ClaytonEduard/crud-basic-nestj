import { IsEmail, IsString, MinLength } from "class-validator";


export class CreateUserDto {
    @IsEmail()
    email: string;
    @IsString()
    name: string;
    @IsString()
    @MinLengthth(6)
    password: string;

}

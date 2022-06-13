import { isEmail } from "class-validator";

export class CreateUserDto {
    @isEmail()
    email: string;
    @IsString()
    name: string;

    password: string;

}

import { isEmail } from "class-validator";

export class CreateUserDto {
    @isEmail()
    email: string;
    @IsString(2)
    name: string;

    password: string;

}

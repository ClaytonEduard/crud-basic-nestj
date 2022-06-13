import { } from "class-validator";

export class CreateUserDto {
    @IsEma
    email: string;

    name: string;

    password: string;

}

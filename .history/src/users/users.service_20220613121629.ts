import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(createUserDto: CreateUserDto) {
    // se o user nao tiver id cria um
    const currentMaxId = this.users[this.users.length - 1]?.id || 0;

    // populando o id
    const id = currentMaxId + 1;
    // cria o usuario passando o id e populando o restande pelo spreed
    const user = {
      id,
      ...createUserDto,
    };
    this.users.push(user);

    return user;
  }
  // listar todo os usuarios
  findAll() {
    return this.users;
  }


  // bucar usuario pelo id
  findOne(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    return this.users[index];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    // pegar o usuario
    const user = this.findOne(id);
    const newUser = {
      ...user,
      ...updateUserDto,
    }
    const index = this.users.findIndex(user => user.id === id);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
    
    constructor(private readonly userService: UserService){}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Get()
    async getAllUser(): Promise<User[]> {
        return this.userService.getAllUser();
    }
}

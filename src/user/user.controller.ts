import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';

@Controller('user')
export class UserController {
    
    constructor(private readonly userService: UserService){}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.userService.createUser(createUserDto);
    }

    @Get()
    async getAllUser(): Promise<UserEntity[]> {
        return this.userService.getAllUser();
    }
}

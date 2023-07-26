import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';

@Controller('user')
export class UserController {
    @Post()
    async getAllUser(@Body() createUserDto: CreateUserDto) {
        return {
            ...createUserDto, password: undefined,
        }
    }
}

import { Controller, Post , Body} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (private readonly userservic : UserService){}


    @Post("create")
    create(@Body() body) {
        return this.userservic.create(body)
    }
}

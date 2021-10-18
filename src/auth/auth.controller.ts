import { Controller  , Body , Post} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authserves : AuthService){}

    @Post("signIn")
    signIn(@Body() body) {
        return this.authserves.signIn(body)
    }

    
    @Post("signUp")
    signUp(@Body() body) {
        return this.authserves.signUp(body)
    }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { user } from 'src/models/user.model';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(user) private User : typeof user,
            private jwtService: JwtService
        ){}

    async signIn(body) {
        var userLogin = await this.User.findOne({where:{email : body.email}});
        if(!userLogin) throw new HttpException("هذا الايميل غير موجود "  , HttpStatus.NOT_FOUND)

        if(body.password !== userLogin.password) throw new HttpException("هذا الرقم السري غير موجود " , HttpStatus.NOT_FOUND)

        this.jwtService.sign({
            email : userLogin.email,
            id : userLogin.id
        })

    }

    async signUp(body) {
        
    }
}

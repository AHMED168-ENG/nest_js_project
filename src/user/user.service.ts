import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { user } from 'src/models/user.model';

@Injectable()
export class UserService {
    constructor (@InjectModel(user) private User : typeof user ){}

    create(body) {
        return this.User.create(body)
    }
}

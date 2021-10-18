import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { async } from 'node_modules/rxjs/dist/types';
import { user } from 'src/models/user.model';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports : [
        JwtModule.register({
            secret : "secretKey",
          }),
        SequelizeModule.forFeature([
            user
        ]),
    ],
    controllers : [
        AuthController
    ],
    providers : [
        AuthService
    ],
    exports : [AuthService]
})
export class AuthModule {}
/*{
            imports : [ConfigModule],
            inject : [ConfigService],
            useFactory : async(ConfigService : ConfigService) => {[
                secret : ConfigService.get()
            ]}
          } */
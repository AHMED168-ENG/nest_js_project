import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
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
        JwtService
    ],
    controllers : [
        AuthController
    ],
    providers : [
        AuthService,
    ],
})
export class AuthModule {}
/*{
            imports : [ConfigModule],
            inject : [ConfigService],
            useFactory : async(ConfigService : ConfigService) => {[
                secret : ConfigService.get()
            ]}
          } */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { user } from './models/user.model';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
      SequelizeModule.forRoot({
      dialect: "postgres",
      host: "127.0.0.1",
      port: 5432,
      database: "full_stack_nest",
      username: "postgres",
      password: "root",
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([
      user
    ]),
    UserModule,
    AuthModule,
    JwtModule
  ],
  controllers: [AppController, UserController, AuthController],
  providers: [AppService , UserService, AuthService , JwtService],
})
export class AppModule {}

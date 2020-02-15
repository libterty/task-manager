import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCreditDto } from './dto/auth-credit.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) authCreditDto: AuthCreditDto) {
    return this.authService.signUp(authCreditDto);
  }
}

import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCreditDto } from './dto/auth-credit.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) authCreditDto: AuthCreditDto): Promise<object> {
    return this.authService.signUp(authCreditDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) authCreditDto: AuthCreditDto): Promise<object> {
    return this.authService.signIn(authCreditDto);
  }
}

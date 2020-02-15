import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Get,
  UseGuards,
} from '@nestjs/common';
import { AuthCreditDto } from './dto/auth-credit.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/test')
  @UseGuards(AuthGuard())
  test(): object {
    return { statusCode: 'success', message: 'auth test' };
  }

  @Post('/signup')
  signUp(@Body(ValidationPipe) authCreditDto: AuthCreditDto): Promise<object> {
    return this.authService.signUp(authCreditDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) authCreditDto: AuthCreditDto): Promise<object> {
    return this.authService.signIn(authCreditDto);
  }
}

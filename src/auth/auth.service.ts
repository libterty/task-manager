import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCreditDto } from './dto/auth-credit.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}

  async signUp(authCreditDto: AuthCreditDto): Promise<void> {
    return this.userRepository.signUp(authCreditDto);
  }
}

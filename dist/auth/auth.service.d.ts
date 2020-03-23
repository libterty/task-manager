import { UserRepository } from './user.repository';
import { AuthCreditDto } from './dto/auth-credit.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp(authCreditDto: AuthCreditDto): Promise<object>;
    signIn(authCreditDto: AuthCreditDto): Promise<object>;
}

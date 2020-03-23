import { AuthCreditDto } from './dto/auth-credit.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    test(user: User): {
        statusCode: string;
        message: string;
        user: object;
    };
    signUp(authCreditDto: AuthCreditDto): Promise<object>;
    signIn(authCreditDto: AuthCreditDto): Promise<object>;
}

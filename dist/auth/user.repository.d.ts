import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCreditDto } from './dto/auth-credit.dto';
export declare class UserRepository extends Repository<User> {
    signUp(authCreditDto: AuthCreditDto): Promise<object>;
    validateUserPassword(authCreditDto: AuthCreditDto): Promise<string>;
    private hashPassword;
}

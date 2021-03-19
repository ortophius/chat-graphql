import { DataSource } from "apollo-datasource";
import md5 from 'md5';

const Messages: Message[] = [];
const Users: Record<User['login'], User> = {};
const Auth: AuthStorage = {};

type UserContext = User;

export class AuthSource extends DataSource<UserContext> {

  protected data = Auth;
  protected users = Users;
  private salt = 'SOME_SALT';

  register({ login, displayName, password }: User): Token | RequestError {
    if (this.users[login]) return { message: 'This nickname is already in use' };

    this.users[login] = {
      login,
      displayName,
      password
    };

    return this.login({ login, password });
  }

  login({ login, password }: Pick<User, 'login' | 'password'>): Token | RequestError {
    const user: User | undefined = this.users[login];
    if (!user || user.password !== password) return { message: 'Login or password is incorrect' };
    
    const hash = md5(`${Date.now()}${user.login}${this.salt}`);

    if (!this.data[hash]) this.data[hash] = user;
    return { secret: hash };
  }

  logout(secret: string): string {
    if (this.data[secret]) delete this.data[secret];
    return 'ok';
  }

  getSession(secret: string): User | null {
    const User = this.data[secret];
    return (User) ? User : null;
  }
}
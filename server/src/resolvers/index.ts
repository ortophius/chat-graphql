import { AuthSource } from "../dataSources"

const RegisterResult = {
  __resolveType: (obj: any) => {
    if (obj.message) return 'Error';
    return 'Token';
  }
}

const register = (_: any, { login, displayName, password }: User ) => {
  return new AuthSource().register({ login, displayName, password });
}

const login = (_: any, { login, password }: Pick<User, 'login' | 'password'>) => {
  const res = new AuthSource().login({login, password});
  return res;
}

export default {
  RegisterResult,
  Mutation: {
    register,
    login
  }
}
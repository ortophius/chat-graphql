interface ApolloContext {
  user: User | null;
}

interface User {
  displayName: string;
  login: string;
  password: string;
}

type Token = {
  secret: string;
};

type AuthStorage = Record<AuthSecret, User>;

interface Message {
  author: User;
  text: string;
}

interface RequestError {
  message: string;
}
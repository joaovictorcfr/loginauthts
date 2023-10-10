export interface Iuser {
  email?: string;
  token?: string;
}

// A interdace Icontext vai herdar o Iuser
export interface Icontext extends Iuser {
 authenticate : (email: string, password: string) => Promise<void>;
 logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
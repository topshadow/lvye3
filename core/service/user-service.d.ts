export declare class UserService {
    private firebase;
    constructor();
    user: User;
    getUserByUsername(username: string, successMethod: (rtn) => void): void;
    addUser(user: User): void;
    saveUser(user: User): void;
}

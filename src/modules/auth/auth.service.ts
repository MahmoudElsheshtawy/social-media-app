

//dependency injection design pattern
//singleton design pattern



class AuthService {
    constructor() { }
    async login(username: string, password: string): Promise<string> {
        // In a real application, you would verify the username and password against a database
        if (username === 'admin' && password === 'password') {
            // Return a mock JWT token      
            return 'mock-jwt-token';
        } else {            
            throw new Error('Invalid username or password');
        }

        }


}
export default new AuthService() //singleton design pattern one instance of this class will be created and shared across the application
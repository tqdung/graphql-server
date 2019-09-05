import AuthController from '../../controllers/auth_controller';
export default {
    Mutation: {
        createAuth: (email, username, password) => AuthController.createAuth(email, username, password)
    }
}
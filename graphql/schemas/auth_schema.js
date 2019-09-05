export default `
    type AUTH {
        email: String
        username: String
        password: String
    }
    type Mutation {
        createAuth(email: String, username: String, password: String): AUTH
    }
` 
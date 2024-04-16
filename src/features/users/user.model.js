

export default class UserModel {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password
    }

    static addUser(data) {
        const {name, email, password} = data
        const newUser = new UserModel(
            users.length + 1,
            name,
            email,
            password
        )

        users.push(newUser)
        return newUser
    }

    static confirmUser(data) {
        const { email, password } = data
        const validUser = users.find(u => u.email == email && u.password == password)
        return validUser
    }
}

let users = [
    {
        "id": "1",
        "name": "Tanmay",
        "email": "tanmay@email.com",
        "password": "1234"
    }
]
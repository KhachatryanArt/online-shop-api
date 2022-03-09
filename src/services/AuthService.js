const User = require("../db/models/user");
const Role = require("../db/models/role")
const bcrypt = require("bcrypt");
const createJwtToken = require("./createJwtToken")

class AuthService {

    static async register(firstName, lastName, email, password) {

        if (password.length >= 8) {
            const hash = bcrypt.hashSync(password, 8);
            const user = await User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hash
            });
            await user.save();
            const id = await user.id
            const role = await Role.create({
                user_Id: id,
                name: "user"
            })
            return ('User successfully registered!')
        } else {
            return ("Password is short")
        }
    }

    static async adminRegister(firstName, lastName, email, password) {
        if (password.length >= 8) {
            const hash = bcrypt.hashSync(password, 8);
            const user = await User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hash
            });
            await user.save();
            const id = await user.id
            const role = await Role.create({
                user_Id: id,
                name: "admin"
            })
            return ('User successfully registered!')
        } else {
            return ("Password is short")
        }
    }

    static async login(email, password) {
        let token = 0;
        const user = await User.findOne({where: {email: email}})
        if (user) {
            const match = await bcrypt.compare(password, user.password)
            if (match) {
                token = await createJwtToken.generateJwt(user)
                return token
            }
        } else {
            return token = false
        }

    }
}

module.exports = AuthService;
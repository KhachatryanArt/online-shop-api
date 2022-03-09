
const Role = require("../db/models/role")
const jwt = require("jsonwebtoken");

module.exports = async (ctx, next) => {
    try {

        const token = ctx.request.header.authorization;
        ctx.state.user = jwt.verify(token, 'shhhhhhhh', function (err, decoded) {
            return decoded
        });
        const {id} = ctx.state.user;
        const user = await Role.findOne({
            where: {
                user_Id: id
            },
        })
        console.log(id)
        ctx.state.user.role = user.name

        await next();
    } catch (error) {
        console.error(error)
    }
};
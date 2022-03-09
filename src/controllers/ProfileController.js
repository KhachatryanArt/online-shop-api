const ProfileService = require("../services/ProfileService");

class ProfileController {
    static async getProfile(ctx){
        console.log(7777)
        const {id} = ctx.state.user;
        ctx.body = await ProfileService.getProfile(id);
    }

    static async topUpAccount (ctx){
        const {id} = ctx.state.user;
        const balance = ctx.request.body.balance;
        ctx.body = await ProfileService.topUpAccount(balance,id)
    }
}

module.exports = ProfileController;
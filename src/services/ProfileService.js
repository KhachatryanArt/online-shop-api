const User = require("../db/models/user");
const Wallet = require("../db/models/wallet");
const History = require("../db/models/history")

class ProfileService {
    static async getProfile(id) {
        return await User.findOne({
            where: {
                id: id
            },
            include: [{
                model: Wallet,
                attributes: ["actual_balance"]
            }, {
                model: History,
            }]
        });
    };

    static async topUpAccount(balance, id) {
        const wallet = await Wallet.findOne({where: {user_Id: id}});
        console.log(balance)
        if (wallet) {
        const actual_balance = wallet.actual_balance + balance;
        const plus_balance = wallet.plus_balance + balance;
            await Wallet.update({
                // minus_balance: wallet.minus_balance,
                plus_balance: plus_balance,
                actual_balance: actual_balance
            }, {where: {user_Id: id}})
        } else {
            await Wallet.create({
                user_Id:id,
                minus_balance:0,
                plus_balance:balance,
                actual_balance:balance
            })
        }
            return await this.getProfile(id)
    }
}

module.exports = ProfileService
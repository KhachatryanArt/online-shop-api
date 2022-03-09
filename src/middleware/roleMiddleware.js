module.exports = (ctx, next) => {
    const role = ctx.state.user.role

    if (role === "admin") {
        next()
    } else {
        ctx.body = ("Permission denied")
    }
}


const login = async(req, res) => {
    res.send('Fake login/Register/SignUp Route')
}

const dashboard = async (req,res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({Msg:`Hello, testing.. `, secret : `Here is your authorised data, your lucky number is: ${luckyNumber}`})
}

module.exports = {
    login, dashboard;
}
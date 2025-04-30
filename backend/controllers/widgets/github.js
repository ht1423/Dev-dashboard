import axios from 'axios'

const CLIENT_ID = process.env.GITHUB_CLIENT_ID
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET
const REDIRECT_URI = process.env.GITHUB_REDIRECT_URI

export const githubLogin = (req, res) => {
    const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=read:user repo`
    res.redirect(url)
}

export const githubCallback = async (req, res) => {
    const code = req.query.code
    const tokenRes = await axios.post(`https://github.com/login/oauth/access_token`, {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
    },{
        headers: {
            Accept: 'application/json'
        }
    })

    const accessToken = tokenRes.data.access_token
    req.session.githubToken = accessToken

    res.redirect(`${process.env.CLIENT_URL}`)
}
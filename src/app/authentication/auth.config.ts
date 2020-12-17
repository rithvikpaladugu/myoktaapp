

export default {
    oidc: {
        clientId: '0oa2ksbjyT5y7R0Wa5d6',
        issuer: 'https://infogravity-usrp.okta.com/oauth2/default',
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email'],
        pkce: true,
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
exports.router = (0, express_1.Router)();
exports.router.get('/login', (req, res) => {
    res.send(`
        <form method=POST>
            <div>
                <label>Email</label>
                <input name="email" />
            </div>
            <div>
                <lable>Password</label>
                <input name="password" type="password" />
            </div>
            <button>Submit</button>
        </form>
    `);
});
exports.router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
        // res.send('Invalid email or password');
    }
    else {
        res.send('Invalid email or password');
    }
});
exports.router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <div>You are logged in</div>
                <a href="/logout">Logout</a>
            <div>
        `);
    }
    else {
        res.send(`
        <div>
            <div>You are not logged in</div>
            <a href="/login">Login</a>
        <div>
        `);
    }
});
exports.router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/login');
});
exports.router.get('/protected', requireAuth, (req, res) => {
    res.send('Welcome to the secret stuff');
});

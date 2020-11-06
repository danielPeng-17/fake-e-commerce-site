import express from 'express';
import { getToken } from '../util';
import { users } from '../users';

const router = express.Router();

router.post("/signin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email + ' ' + password)
    console.log(users);
    const user = users.find(user => user.email == email && user.password == password);
    console.log(user);

    if (user) {
        console.log('found user');
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: getToken(user)
        });
    }else {
        console.log('error thrown');
        res.status(401).send({ error: "Email or password not valid." });
    }
});



export default router;
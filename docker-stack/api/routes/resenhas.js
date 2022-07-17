import express from 'express';
import db from '../db.js';

router.post('/register_resenhas', async (req, res) => {
    const { game_name, reg_user_email, img_resenha, texto_resenha } = req.body;

    try {
        const [findOne] = await db.execute(`SELECT * FROM resenhas WHERE game_name=? AND reg_user_email=?`, [game_name, reg_user_email]);

        if (findOne.length > 0) {
            await db.execute(`DELETE * FROM resenhas WHERE game_name=? AND reg_user_email=?`, [game_name, reg_user_email]);
        }
        const [insertResenhas] = await db.execute(`INSERT INTO resenhas VALUES (0,"${game_name}","${reg_user_email}","${img_resenha}", "${texto_resenha}")`);
        if (!insertResenhas || insertResenhas.affectedRows < 1) {
            throw new error("Erro na inserção");
        }

        res.redirect('/references/resenhas')
    } catch (error) {
        console.log(error.message)
        res.send({ error: error.message })
        res.redirect('/references/resenhas')

    }
});

router.get('/get_resenha', async (req, res) => {
    const {game_name, reg_user_email} = req.body;

    try {
        return await db.execute(`SELECT img_resenha, texto_resenha FROM resenhas WHERE game_name=? AND reg_user_email=?`, [game_name, reg_user_email]);
    } catch (error) {
        console.log(error.message)
        res.send({ error: error.message })
        res.redirect('/references/resenhas')

    }
});

router.get('/get_resenhas', async (req, res) => {
    const {game_name} = req.body;

    try {
        return await db.execute(`SELECT reg_user_email, img_resenha, texto_resenha FROM resenhas WHERE game_name=?`, [game_name]);
    } catch (error) {
        console.log(error.message)
        res.send({ error: error.message })
        res.redirect('/references/resenhas')

    }
});
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existesOrError, notExistsOrError, equalsOrError } = app.api.validation


    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }
        if (req.params.id) user.id = req.params.id


        if (!req.originalUrl.startsWith('/users')) user.admin = false
        if (!req.user || !req.user.admin) user.admin = false


        try {
            existesOrError(user.name, 'nome nao informado')
            existesOrError(user.email, 'email nao informado')
            existesOrError(user.password, 'senha nao informada')
            existesOrError(user.confirmPassword, 'confirmacao invalida')
            equalsOrError(user.password, user.confirmPassword, 'senhas nao conferem')

            const userFromDB = await app.db('users')
                .where({ email: user.email }).first()

            if (!user.id) {
                notExistsOrError(userFromDB, 'usuario ja cadastrado')
            }
        } catch (msg) {
            console.log(msg)
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if (user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .whereNull('deletedAt')
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))

        } else {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .whereNull('deletedAt')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .whereNull('deletedAt')
            .where({ id: req.params.id }).first()
            .then(users => res.json(users))
    }

    const remove = async (req, res) => {
        try {
            const articles = await app.db('articles')
                .where({ userId: req.params.id })
            notExistsOrError(articles, 'usuario possui artigos')

            const rowsUpdated = await app.db('users')
                .update({ deletedAt: new Date() })
                .where({ id: req.params.id })

            existesOrError(rowsUpdated, 'usuario nao encontrado')

            res.status(204).send()
        } catch (e) {
            res.status(400).send(e)
        }
    }

    return { save, get, getById, remove }
}
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './style.css'
import heroesImg from '../../assets/heroes.png'
import LogoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Logon() {

    const [id, setId] = useState('')

    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()

        try {
            const response = await api.post('/session', { id })
            localStorage.setItem('ong_id', id)
            localStorage.setItem('ong_name', response.data.name)
            history.push('/profile')

        } catch (err) {
            alert('Falha no Login, tente novamente')

        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input value={id} onChange={(e) => setId(e.target.value)}
                        placeholder="Sua ID" type="text" />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        Não tenho cadastro
                    </Link>
                </form>

            </section>
            <img src={heroesImg} alt="img principal" />
        </div>
    );
}

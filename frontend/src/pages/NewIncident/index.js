import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import LogoImg from '../../assets/logo.svg'
import api from '../../services/api' 

import './style.css'

export default function NewIncident() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ong_id = localStorage.getItem('ong_id')
    const history = useHistory()

    async function handleNewIncident(e){
        e.preventDefault()

        const data = { title, description, value }
        await api.post('/incidents', data, {
            headers: {
                authorization: ong_id
            }
        })
        history.push('/profile')

    }


    return (
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="" />
                    <h1>Cadastro no caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>
                    <Link to="/profile" className="back-link">
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident} action="">
                    <input
                        onChange={ (e) => setTitle(e.target.value) } value={title}
                    placeholder="Titulo do caso" type="text" />
                   <textarea onChange={ (e) => setDescription(e.target.value) } 
                   value={description} placeholder="Descrição"></textarea>
                    <input onChange={ (e) => setValue(e.target.value) } value={value}
                    placeholder="Valor em reais" type="text" />
        
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
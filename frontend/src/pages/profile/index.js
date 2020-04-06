import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import LogoImg from '../../assets/logo.svg'
import api from '../../services/api'
import './style.css'


export default function Profile() {

    const [incidents, setIncidents] = useState([])

    const ong_Name = localStorage.getItem('ong_name')
    const ong_id = localStorage.getItem('ong_id')
    const history = useHistory()

    useEffect(() => {
        api.get('/profile', {
            headers: {
                authorization: ong_id
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ong_id]);

    async function handleDelete(id){
        await api.delete(`/incidents/${id}`, {
            headers: {
                authorization: ong_id
            }
        })
        setIncidents(incidents.filter(incident => incident.id !== id))
    }

    function handleLogout(){
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header >
                <img src={LogoImg} alt="" />
                <span>Bem vinda, {ong_Name}</span>

                <Link to="/incidents/new" className="button">
                    Cadastrar novo caso
                </Link>
                <div onClick={handleLogout} style={{ width: 60, marginTop: 0, marginLeft: 5, cursor: 'pointer'}} className="button">
                    Sair
                </div>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>{incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>
                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
                        <button onClick={e => handleDelete(incident.id)} type="button">
                            Deletar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
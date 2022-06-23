import { useContext } from 'react';
import { userContext } from '../../context/contextPkm';
import avatar from '../../assets/avatar.svg';
import { useNavigate } from 'react-router-dom';
import '../User/Use.css'

export function User() {
    const navigate = useNavigate();

    function navToPokedex() {
        navigate('/Pokemon');
    }

    const { userValue, setUserValue } = useContext(userContext);

    return (
        <div className='borda'>
            <h2>Você chegou a uma Pokeparada</h2>
            <div className="home">
                <div className='containerUser'>
                    <p>Olá, {userValue?.name || 'Bem-vindo à área de pokemons'}</p>
                    <img src="https://www.shareicon.net/data/128x128/2016/08/05/807242_gaming_512x512.png" />
                </div>
                <button className="btnPokestop" onClick={navToPokedex}>Consultar Pokedex</button>
            </div>
        </div>
    );
}
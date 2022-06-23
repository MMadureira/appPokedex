import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/Api";
import './Pokemon.css';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { userContext } from "../../context/contextPkm";
import ShowModalPkm from '../../components/modal/showModalPkm';

type pokemonType = {
    id: number;
    name: string;
    sprites: ({
        front_default: string
    });
    type: string;
    url: string;
    types: ([]);
    weight: string;
}

var i: number;

export default function ShowPokemon() {
    const [data, setData] = useState<any>([]);
    const [namePkm, setNamePkm] = useState<any>("")

    const { userValue, setUserValue } = useContext(userContext);
    const { openModalPkm, setOpenModalPkm,
        idPkm, setIdPkm } = useContext(userContext);

    async function getPokemonList() {
        let pokemonArray = [];
        for (let i = 1; i <= 151; i++) {
            pokemonArray.push(await getPokemonData(i))
        }
        // console.log(pokemonArray);
        setData(pokemonArray)
    }

    async function getPokemonData(id: number) {
        const res = await api.get(`pokemon/${id}`);
        return res.data;
    }

    function Mostrar() {
        setOpenModalPkm(true);
    }

    // async function searchPkmName(){
    //     const res = await api.get(`pokemon/${name}`);
    //     setNamePkm(res.data);
    // }

    // useEffect(() => {
    //     searchPkmName();
    // }, [namePkm])

    useEffect(() => {
        getPokemonList();
    }, [openModalPkm]);

    return (
        <>
            <div className="container">
                <h1>Pokedex - Kanto</h1>
                <div className="searchPkm">
                    <span className="iconSearch"><SearchIcon fontSize="large" /></span>
                    <span><TextField
                        id="Pokemon"
                        label="Pokemon"
                        size="small"
                        onChange={e => setNamePkm(e.target.value)}
                    // onChange={value => setNamePkm(value.target.value)}
                    />
                    </span>
                </div>
                <div className='Pokedex'>
                    <div className='PokedexTable'>
                        {data.filter((row: pokemonType) => {
                            if (namePkm === "") {
                                return row
                            } else if (row.name.includes(namePkm)) {
                                return row
                            }
                        }).map((row: pokemonType) => {
                            const { name, id, sprites } = row;
                            const { front_default } = sprites

                            return (
                                <div className="cardPkm">
                                    <div className="pokeCard" key={id}>
                                        <div className="imgName">
                                            {/* <span className="numPokedex">#{id}</span> */}
                                            <span>
                                                <img src={front_default}></img>
                                            </span>
                                            <span>{name}</span>
                                            {/* <span className="PkmTypes">{types.map((item: any) => {
                                            const { type } = item
                                            return (
                                                <span>{type.name} </span>
                                            )
                                        })}
                                        </span> */}
                                            {/* <button onClick={() => {
                                            openModalPkm
                                        }}>More Info</button> */}
                                            <ShowModalPkm data={row} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <span>Pokedex created By:</span>
                        <span>Gustavo Coelho, Matheus Madureira, Matheus Sampaio</span>
                    </div>
                </footer>
            </div >
        </>
    )
}



// export default function showPokemon() {
//     const [data, setData] = useState([]);
//     // const name = ({ bulbasaur, ivysaur })

//     async function searchDataPkm() {
//         for (i = 1; i <= 151; i++) {
//             const resp = await api.get(`pokemon/${i}`)
//             console.log(resp.data)
//         }
//     }

//     async function getPokemonData(){
//         const res = await api.get(`pokemon/${id}`)
//         return res;
//     }

//     useEffect(() => {
//         searchDataPkm();
//     }, []);

//     return (
//         <div className='pokedex'>
//             <div className='pokedexInfo'>
//                 <span>Numero na Pokedex</span>
//                 <span>Nome</span>
//                 <span>Tipo</span>
//                 <span>Altura</span>
//             </div>

//             <div className='infoPkm'>
//                 {data.map((row: pokemonType) => {

//                     const { name, weight, id } = row

//                     return (
//                         <div className="mostrarPkm" key={id}>
//                             <span>{name}</span>
//                             <span>{weight}</span>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

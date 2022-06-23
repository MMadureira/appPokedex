import { useContext, useState, useEffect } from "react";
import './Modal.css'
import { AiOutlineCloseCircle } from 'react-icons/all'
// import { api } from "../../services/Api";
// import { userContext } from '../../context/contextPkm';
// import CloseIcon from '@mui/icons-material/Close';
// import { TextField } from '@mui/material';

// type pokemonType = {
//     id: number;
//     name: string;
//     sprites: ({
//         front_default: string
//     });
//     type: string;
//     url: string;
//     types: ([]);
//     weight: string;
// }

export default function ShowModalPkm(props: any) {
    const [showModal, setShowModal] = useState<boolean>(false)

    function close() {
        setShowModal(false)
    }

    const { id, name, weight, height, types, sprites } = props.data
    const { front_default } = sprites

    return (
        <>
            <button className="btnShowModal" onClick={() => setShowModal(true)}>
                Ver Mais
            </button>

            {showModal ? (
                <div className="modalBackground">
                    <div className="modalContainer">
                        <div className="closeBtn">
                            <button
                                onClick={close}
                            ><AiOutlineCloseCircle /></button>
                        </div>
                        <div className="body">
                            <div className="title">
                                <h1>#{id}</h1>
                            </div>
                            <div className="spritePkm">
                                <img src={front_default}></img>
                            </div>
                            <span>Name: {name}</span>
                            <span>Weight: {weight}Kg</span>
                            <span>Height: {height}</span>
                            <div className="pkmTypes">
                                <p>Types: </p>
                                <span>{types.map((item: any) => {
                                    const { type } = item
                                    return (
                                        <span> {type.name}</span>
                                    )
                                })}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>

    )
}

// export default function ShowModalPkm(props: any) {
//     const { openModalPkm, setOpenModalPkm, idPkm } = useContext(userContext);

//     // const [name, setName] = useState('');
//     // const [height, setHeight] = useState('');
//     // const [weight, setWeight] = useState('');
//     // const [types, setTypes] = useState('');

//     function close() {
//          (false);
//     }

//     // async function searchPkm(id: number) {
//     //     const res = await api.get(`pokemon/${id}` + idPkm);

//     //     setName(res.data[0].name);
//     //     setHeight(res.data[0].height);
//     //     setWeight(res.data[0].weight);
//     //     setTypes(res.data[0].types);
//     // }

//     // async function mostrar() {
//     //     const data = {
//     //         name: name,
//     //         height: height,
//     //         weight: weight,
//     //         types: types,
//     //     }
//     //     // const res = await api.get(`pokemon/${id}`);
//     //     // setOpenModalPkm(false)
//     // }

//     // useEffect(() => {
//     //      searchPkm();
//     // }, [])

//     return (
//         <div className="modalBackground">
//             <div className="modalContainer">
//                 <div className="titleCloseBtn">
//                     <button
//                         onClick={close}
//                     ><CloseIcon /></button>
//                 </div>
//                 <div className="body">
//                     <TextField
//                         id="standard-basic"
//                         label="Nome"
//                         variant="standard"
//                         value={props.name}
//                     />
//                     <TextField
//                         id="standard-basic"
//                         label="Height"
//                         variant="standard"
//                         value={props.height}
//                     />
//                     <TextField
//                         id="standard-basic"
//                         label="weight"
//                         variant="standard"
//                         value={props.weight}
//                     />
//                     <TextField
//                         id="standard-basic"
//                         label="Types"
//                         variant="standard"
//                         value={props.types}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// };

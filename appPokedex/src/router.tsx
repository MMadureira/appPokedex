import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowPokemon from "./pages/Pokemon/Pokemon";
import { userContext } from "./context/contextPkm";
import { User } from "./pages/User/Use";
import Home from "./Home";

type UserType = {
    name:string;
    avatar:string;
}

export function RouterApp() {
    const [userValue, setUserValue ] = useState<UserType>()
    const [openModalPkm, setOpenModalPkm] = useState<boolean>(false)
    const [idPkm, setIdPkm] = useState<number>(0);


    return (
        <BrowserRouter>
            <userContext.Provider value={{
                userValue, setUserValue,
                openModalPkm, setOpenModalPkm,
                idPkm, setIdPkm
            }}>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/user' element={<User />} />
                    <Route path='/Pokemon' element={<ShowPokemon />} />
                </Routes>
            </userContext.Provider>
        </BrowserRouter>
    );
}
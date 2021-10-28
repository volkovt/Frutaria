import React from "react"
import { useSelector } from "react-redux"
import AdicionaFruta from "./AdicionaFruta"
import Fruta from "./Fruta"

const ListaFrutas = () => {
    const frutas = useSelector(state => state.frutaReducers.frutas);
    return (
        <>
            <h1>Lista de frutas</h1>
            <AdicionaFruta />
            {frutas.map(fruta => (
                <Fruta key={fruta.id} fruta={fruta}></Fruta>
            ))}
        </>
    )
}

export default ListaFrutas
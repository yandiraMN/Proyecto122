import { useNavigate } from "react-router-dom";

    const Portada = ()=> {
        const navegacion=useNavigate();
        return(
            <>
            <h1>PROYECTO DE 122
                BIENVENIDO/A </h1>
            <button className="boton" onClick={()=>navegacion("/juego")}>Jugar</button>
            </>
        )
    }
    export default Portada;
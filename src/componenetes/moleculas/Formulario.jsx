import Boton from "../atomos/Boton"
import Imput from "../atomos/Imput";
function Formulario({clase,tipo,claseInput}){
    return(
        <form className="formulario">
            <Imput tipito={tipo} clase={claseInput}/>
            <Boton clasista={clase}>
                add
            </Boton>
        </form>
    )
}
export default Formulario;
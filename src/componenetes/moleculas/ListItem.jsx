import Imput from "../atomos/Imput"
import Boton from "../atomos/Boton"
import Imagen from "../atomos/Imagen"
import Etiqueta from "../atomos/Etiqueta"
function ListItem({estado,clasista=""}){
    return(

    <li>
        <Imput tipito="checkbox" clase="checkboton"/>
        <Etiqueta contenido={estado} clase={clasista}/>
        <Boton clasista="boton-basura">
            <Imagen/>
        </Boton>
    </li>

    )
}
export default ListItem;
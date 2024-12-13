import Titulo from"../atomos/Titulo";
import Formulario from "../moleculas/Formulario";

function UserForm(){
    return(
        <div>
            <Titulo/>
            <Formulario clase="boton" tipo="text" claseInput="entrada"/>
        </div>
    )
}
export default UserForm;
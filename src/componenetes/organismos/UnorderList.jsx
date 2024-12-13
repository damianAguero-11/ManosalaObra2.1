import ListItem from "../moleculas/ListItem";
function UnorrderList(){
    return(
        <ul>
             <ListItem estado="tarea n°6"/>
        <ListItem estado="tarea n°5"/>
        <ListItem estado="tarea n°4 completada" clasista='compleat'/>
        <ListItem estado="tarea n°3"/>
        <ListItem estado="tarea n°2"/>
        <ListItem estado="tarea n°1 completada" clasista='compleat'/>
        </ul>
    )
}
export default UnorrderList;
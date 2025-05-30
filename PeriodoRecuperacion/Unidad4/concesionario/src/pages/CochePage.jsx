import { useState } from "react";
import { useParams } from "react-router-dom";

function CochePage() {
   const {id}=useParams();
   const {coche,setCoche}=useState(null);

   

    return (<>
        <div>Pagina Coche</div>
    </>);
}

export default CochePage;

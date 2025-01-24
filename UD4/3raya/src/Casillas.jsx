function Casillas({ posicion, valor, llorarPapa }) {

    function handlerClicker() {
        llorarPapa(posicion);
    }

    return (
        <div className="casilla" onClick={handlerClicker}>
            {valor}
        </div>
    );
}

export default Casillas;
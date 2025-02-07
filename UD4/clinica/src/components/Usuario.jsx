function Usuario({ usuario, tipo, password }) {
    return (
        <>
            <div className='row align-items-center py-2 px-3 border-bottom'>
                <div className="col">{usuario}</div>
                <div className="col">{tipo}</div>
                <div className="col">{password}</div>
            </div>
        </>
    );
}
export default Usuario;
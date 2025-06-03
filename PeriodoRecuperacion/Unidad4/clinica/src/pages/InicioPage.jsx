function InicioPage() {
    return (
        <>
            <div className="p-8 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-blue-800 mb-4">Bienvenido a Clínica SaludVital</h1>
                <p className="text-lg text-gray-700 mb-6">
                    En <strong>SaludVital</strong> nos dedicamos a cuidar de ti y de los tuyos con atención médica de calidad, profesionalismo y calidez humana.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
                    <div className="bg-white shadow-lg p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">Medicina General</h2>
                        <p className="text-gray-600">Consultas médicas con enfoque integral para prevenir, diagnosticar y tratar enfermedades comunes.</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">Pediatría</h2>
                        <p className="text-gray-600">Atención especializada para el bienestar y desarrollo saludable de tus hijos.</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">Fisioterapia</h2>
                        <p className="text-gray-600">Tratamientos personalizados para la recuperación física y mejora de la movilidad.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InicioPage;

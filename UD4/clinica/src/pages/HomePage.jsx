function HomePage() {
  // cuarta pagina a documentar 5:24 AM se va a levantar mi madre y me va a pegar creo yo
  // he obvtado por ir a por el verde, me acorde de la pagina de victor y adrian, la de adrian es azul y la de victor morada no?
  // pues yo la hago verde, me acorde del simbolo de la medicina y de eso a la serpiente de gambito ( que utiliza un verde que me gusta) asi que lo he tenido encuenta para la pagina
  // lo de piton no es por pyton, que quede claro.
  return (
    <div className="container custom-bg-color text-light">
      <h1 className="text-center mb-4">
        ¡Bienvenidos a la Clínica Piton, la Clínica de los Guardianes!
      </h1>

      <div className="d-flex justify-content-around align-items-start mb-3">
        {/* Texto estrecho */}
        <p className="flex-grow-1" style={{ maxWidth: "600px" }}>
          ¿Estás buscando una clínica que cuide de ti tras una batalla épica?
          ¡La Clínica Piton es el lugar ideal para los valientes que luchan en
          la Última Ciudad! Aquí no solo tratamos tus heridas, sino que te
          preparamos para la próxima aventura. ¡Nos encargamos de tus fracturas,
          quemaduras solares y mucho más! 💥
        </p>
        {/* Imagen alineada a la derecha y movida a la izquierda */}
        <img
          src="src/assets/imagen1.jpg"
          alt="Clínica Piton"
          className="img-fluid rounded shadow-lg"
          style={{ marginLeft: "30px" }} // Ajustar el margen para moverla a la izquierda
        />
      </div>

      <div className="mt-4">
        <h2>Servicios Destacados</h2>
        <ul>
          <li>
            <strong>Reparación de Armas Exóticas:</strong> Devuelve a tu arma
            exótica a su gloria con nuestro servicio de mantenimiento
            especializado.
          </li>
          <li>
            <strong>Recuperación de Guardianes:</strong> Tratamos todo tipo de
            heridas, desde quemaduras solares hasta impactos de caídas de
            Titanes.
          </li>
          <li>
            <strong>Suplementos de Energía para Guardianes:</strong> ¿Te sientes
            agotado después de un asalto? Ven por un buen refuerzo de energía
            para seguir luchando.
          </li>
          <li>
            <strong>Medicina de Guerra:</strong> Lo mejor en medicina para sanar
            tus heridas después de enfrentarte a los Caídos, los Cabal o los
            Vex.
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h2>Lo que Nunca te Dirán los Guardianes... Pero Nosotros Sí:</h2>
        <p>
          Sabemos que ser un Guardián no es tarea fácil. Entre la luz y la
          oscuridad, las heridas pueden aparecer cuando menos lo esperas. Aquí,
          nuestro objetivo es asegurarnos de que cada Guardián se recupere para
          seguir luchando por la Última Ciudad. ¡No importa si eres un Titán,
          Cazador o Hechicero, nosotros tenemos lo que necesitas!
        </p>
      </div>

      {/* Imagen 2 intercalada en el flujo */}
      <div className="text-center mb-4">
        <img
          src="src/assets/imagen2.jpg"
          alt="Guardianes en Recuperación"
          className="img-fluid rounded shadow-lg mb-3"
        />
      </div>

      <div className="mt-4">
        <h2>Testimonios de Clientes Recuperados</h2>
        <ul>
          <li>
            <em>
              “Pensaba que mi rodilla nunca se recuperaría después de una caída
              de 50 metros, pero la Clínica Piton me arregló en un abrir y
              cerrar de ojos. ¡Listo para otro asalto!” – Ikora Rey, Hechicera
              legendaria.
            </em>
          </li>
          <li>
            <em>
              “Después de enfrentarme a los Cabal, mi brazo izquierdo estaba
              completamente roto. Gracias a la clínica, ahora soy más fuerte que
              nunca.” – Zavala, Titán de la Última Ciudad.
            </em>
          </li>
          <li>
            <em>
              “Vine con una fractura de cadera después de un encuentro con un
              Caído gigante. Ahora puedo correr más rápido que antes. ¡Gracias,
              Piton!” – Cayde-6, Cazador (siempre optimista).
            </em>
          </li>
          <li>
            <em>
              “Pensé que nunca podría luchar de nuevo tras la batalla con Akka.
              Pero la Clínica Piton me curó, y ahora estoy listo para enfrentar
              cualquier desafío.” – Oryx, Rey de los Poseídos.
            </em>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h2>Conoce a Nuestro Equipo de Sanadores</h2>
        <p>
          En la Clínica Piton, no solo somos médicos, somos Guerreros de la Luz.
          Nuestro equipo está compuesto por expertos en medicina de combate y
          sanadores experimentados. Cada uno de nosotros tiene la misión de
          hacerte sentir mejor para que puedas regresar al campo de batalla con
          toda tu fuerza.
        </p>
      </div>

      <div className="d-flex justify-content-between align-items-start mb-3">
        {/* Imagen alineada a la izquierda */}
        <img
          src="src/assets/imagen3.jpg"
          alt="Equipo de Sanadores"
          className="img-fluid rounded shadow-lg"
        />
        <p className="flex-grow-1">
          Sabemos que cada Guardián tiene sus propias necesidades, por eso
          personalizamos cada consulta. Desde el cuidado de tu salud hasta la
          optimización de tus habilidades para el próximo asalto, te preparamos
          para lo que sea que venga. Ven a vernos y asegúrate de que estás listo
          para luchar por la Última Ciudad.
        </p>
      </div>
    </div>
  );
}

export default HomePage;

function NoPage() {
  // quinta hoja, espectacularm, nada que decir
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <div
        className="position-relative"
        style={{ width: "80%", maxWidth: "800px", height: "80%" }}
      >
        <img
          src="/src/assets/no.jpg"
          alt="Página No Encontrada"
          className="img-fluid"
        />
        <div
          className="position-absolute top-0 start-50 translate-middle-x text-center text-success fs-1"
          style={{ paddingTop: "20px" }}
        >
          Página no encontrada
        </div>
      </div>
    </div>
  );
}

export default NoPage;

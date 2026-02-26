import style from "./CreatePj.module.css";

function CreatePj() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Nombre del personaje</h2>

      <input
        className={style.input}
        type="text"
        placeholder="Escribe tu nombre..."
        required
      />

      <div className={style.selectsWrapper}>
        <div className={style.selectGroup}>
          <span className={style.selectLabel}>Elegir Raza</span>
          <select className={style.select}>
            <option value="">-- Selecciona --</option>
            <option value="humano">Humano</option>
            <option value="orco">Orco</option>
            <option value="elfo">Elfo</option>
            <option value="troll">Troll</option>
          </select>
        </div>

        <div className={style.selectGroup}>
          <span className={style.selectLabel}>Elegir Clase</span>
          <select className={style.select}>
            <option value="">-- Selecciona --</option>
            <option value="guerrero">Guerrero</option>
            <option value="brujo">Brujo</option>
            <option value="mago">Mago</option>
            <option value="paladin">Paladín</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default CreatePj;
import "./BotonVinietaDerechaP.css";

export function BotonVinietaDerechaP({ texto1, texto2 }) {
  return (
    <h2 className="boton-vinieta-programas">
      <span className="boton-vinieta-programas-regular">{texto1}</span> 
      <span className="boton-vinieta-programas-vinieta">{texto2}</span>
    </h2>
  );
}

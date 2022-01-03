
const d = document;

export default function maquinaEscribir(texto){
    const maquina = d.querySelector("div a");
    maquina.textContent = "I";
    let cont = 0;
    setInterval(() => {
        maquina.textContent += texto[cont];
        cont++;
        if(cont === texto.length +1){
            cont = 0;
            maquina.textContent = "I";
        }
    }, 400);
    
    }
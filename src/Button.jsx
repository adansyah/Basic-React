import { useState } from "react";
function Button(){
        const [pesan, setPesan] = useState("Saya di klick 0 kali");
        const [counter, setCounter] = useState(0);
    function ClickHandler(nama){    
        let newCounter = counter;

        if(nama == "tambah"){
            newCounter = counter + 1;
        } else if (nama == "kurangi"){
            if( counter > 0){
            newCounter = counter - 1;
            }
        }
        setCounter(newCounter);
        setPesan(`saya diklik ${nama} ${newCounter} kali`);
    }
    
   
    return(
        <>
        <h5>ini event klick dan usestate</h5>
        <p>{pesan}</p>
        <button onClick={() => ClickHandler("tambah")} style={{marginRight:"10px"}}>Tambah Saya</button>
        <button onClick={() => ClickHandler("kurangi")}>Kurangi Saya</button>
        </>
    );
}

export default Button;
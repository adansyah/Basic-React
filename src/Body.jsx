import './Body.css'

function Body(){
    const styleMenuItem = {
        background: '#333', 
        padding: '10px', 
        color: '#fff', 
        borderRadius: '10px'
    }

    const nim = true;
    return (
        <div style={styleMenuItem}>
            <p><b>Nama : </b><em>Syahdan Mutahariq</em></p>
            {(nim == true) && (<p><b>NIM : </b><em>23110065</em></p>) }
            <p><b>Kelas : </b><em>J 2023</em></p>
        </div>
    )
}

export default Body
import React from 'react';
import './Body.css';
import { motion } from 'framer-motion';

function Body() {
    const box = {
        background: '#333',
        width: '90%',
        padding: '10px',
        color: '#fff',
        borderRadius: '10px',
        marginBottom: '10px',
        cursor: 'pointer',
        marginLeft: '50px',
    };

    const kelas = [
        { nama: 'Syahdan Mutahariq', kelas: 'J 2023' },
        { nama: 'Ilham Mansuri', kelas: 'K 2023' },
        { nama: 'Carlos', kelas: 'L 2023' },
    ];

    const nim = true;

    return (
        <>
            {kelas.map((item, index) => (
                <motion.div
                    key={index}
                    style={box}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <p><b>Nama : </b><em>{item.nama}</em></p>
                    {nim && <p><b>NIM : </b><em>23110065</em></p>}
                    <p><b>Kelas : </b><em>{item.kelas}</em></p>
                </motion.div>
            ))}

            <motion.div
                style={box}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <p><b>Nama : </b><em>Syahdan Mutahariq</em></p>
                <p><b>NIM : </b><em>-----</em></p>
                <p><b>Kelas : </b><em>----</em></p>
            </motion.div>
        </>
    );
}

export default Body;

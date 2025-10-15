import { useState } from 'react';
import styled from 'styled-components';
import api from "../../services/api";


function Produtos() {

    return (
        <>
        <div>
            <header>
                <h1>Eletronicos</h1>
                <nav>
                    <input type="text" placeholder='pesquise um produto...' />
                </nav>
            </header>
            <div>

            </div>
            <footer>

            </footer>
        </div>
        </>
    )

}

export default Produtos;
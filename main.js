import {  buscarPrecos } from './api.js'
import { formatarPreco } from './calculos.js'

let moedas = []
let listaMoedas = document.getElementById('listaMoedas')

function renderizar(dados){

    listaMoedas.innerHTML = dados.map(({nome,preco}) => `
        <div class="moeda">
            <h3>${nome}</h3>
            <p class="preco">${formatarPreco(preco)}</p>
        </div>
    
    
    
    `).join('')
}



async function atualizar(){
    try {
        const dados = await buscarPrecos()

        moedas = [
            { nome: 'bitcoin', preco: dados.bitcoin.brl },
            { nome: 'ethereum', preco: dados.ethereum.brl },
            { nome: 'cardano', preco: dados.cardano.brl },
            { nome: 'dogecoin', preco: dados.dogecoin.brl },
            { nome: 'litecoin', preco: dados.litecoin.brl}
        ]

        renderizar(moedas)

    } catch(err){
        console.log("deu ruim na atualizaão")
    }
}

atualizar()


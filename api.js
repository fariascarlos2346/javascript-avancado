const MOEDAS = ['bitcoin', 'ethereum', 'cardano', 'dogecoin', 'litecoin']

const API_URL = 'https://api.coingecko.com/api/v3/simple/price'

async function buscarPrecos() {

    const ids = MOEDAS.join(',')
    const url = `${API_URL}?ids=${ids}&vs_currencies=brl`

    const response = await fetch(url)
    const dados = await response.json()

    console.log(dados)
}

buscarPrecos()
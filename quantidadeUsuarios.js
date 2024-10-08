async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero_usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
      
      console.log(dados)
  }
  quantidadeUsuarios({"Facebook": 3049, "Youtube": 2491, "WhatsApp": 2000, "Instagram": 2000, "TikTok": 1562})
  const nomeDasRedes = Object.keys(dados)
const quantidadeUsuarios = Object.values(dados)

  const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico, data)
const data = [
    {
      x: 'nomeDasRedes',
      y: quantidadeDeUsuarios,
      type: 'bar',
      marker: {
        color: getComputedStyle(document.body).getPropertyValue('--primary-color')
      }
    }
  ]
  // código omitido

// código omitido

const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
      text: 'Redes sociais com mais usuários no mundo',
       x: 0,
       font: {
           color: getCSS('--primary-color'),
           family: getCSS('--font'),
           size: 30
       }
    },
      xaxis: {// código omitido

      },
        xaxis: {
            tickfont{ 
                color: getCSS('-primary-color'),
                size: 16,
                family: getCSS('--font')
            },
            title: {
                text: 'nome das redes sociais',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
                text: 'bilhões de usuários ativos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }
    
    // código omitido
      
    


var jogadores=[];
var sorteados=[];
function gerarNumeros(numero, inicio, fim) {
    var coluna = [];
    while (coluna.length < numero) {
        var aleatorio = Math.floor(Math.random() * (fim - inicio) + inicio);
        if (!coluna.includes(aleatorio)) {
            coluna.push(aleatorio);
        }
    }
    return coluna;
}

function criartabela(nome) {
    // criar elementos principais
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // criando thead
    const th_nome = document.createElement("th");
    th_nome.innerHTML = nome;
    th_nome.colSpan = 5; // Use 'colSpan' em vez de 'colspan'
    thead.appendChild(th_nome);
     jogadores.push(nome);
     console.log(jogadores);
    // criando tbody
    const th_b = document.createElement("th");
    th_b.innerHTML = "B"; // Corrigido para 'th_b.innerHTML'
    const th_i = document.createElement("th");
    th_i.innerHTML = "I"; // Corrigido para 'th_i.innerHTML'
    const th_n = document.createElement("th");
    th_n.innerHTML = "N"; // Corrigido para 'th_n.innerHTML'
    const th_g = document.createElement("th");
    th_g.innerHTML = "G"; // Corrigido para 'th_g.innerHTML'
    const th_o = document.createElement("th");
    th_o.innerHTML = "O"; // Corrigido para 'th_o.innerHTML'

    // Adicionando cabeçalho ao tbody
    tbody.appendChild(th_b);
    tbody.appendChild(th_i);
    tbody.appendChild(th_n);
    tbody.appendChild(th_g);
    tbody.appendChild(th_o);

    // Adicionando células à tabela
    cartela = [gerarNumeros(5, 1, 15), gerarNumeros(5, 16, 30), gerarNumeros(5, 31, 45), gerarNumeros(5, 46, 60), gerarNumeros(5, 61, 75)];
    for (let i = 0; i < 5; i++) {
        const tr = document.createElement("tr");
        for (let u = 0; u < 5; u++) {
            const td = document.createElement("td");

            if (i == 2 & u == 2) {
                td.innerHTML = "X";
            }

            else { td.innerHTML = cartela[u][i]; }
            tr.appendChild(td);


        }

        tbody.appendChild(tr);
    }
    console.log(cartela);
    // agregando elementos
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    // selecionando o body e inserindo tabela
    const tab = document.querySelector("#tab");
    tab.appendChild(tabela);
    
}


function pedirnome() {
    let nome = prompt("Digite seu nome");
    // Verificar se o nome não é vazio ou nulo
    if (nome) {
        criartabela(nome);
      
    } else {
        alert("Por favor, forneça um nome válido.");
    }
}
// Chamada da função pedirnome()

function jogar(){
    if(jogadores.length < 2)
        {
            alert("São necessários, no mínimo, dois jogadores.");
            return;
        }
        else{
             const intervalo=setInterval(function(){
                
                while(sorteados.length<=75)
                    {
                        var ale=Math.floor(Math.random()*75+1);
                        if(!sorteados.includes(ale))
                            {
                                sorteados.push(ale);
                                break;
                                
                            }
                    }
                    const span=document.getElementById('span');
                    const spanNumero=document.createElement('span');
                    spanNumero.innerHTML=ale;
                    span.appendChild(spanNumero);
                  conferir(ale); 
                  
            
             },1000)
        }
}

function conferir(sort){
    var num_cart=document.getElementsByTagName('td');

    for(var i=0;i<num_cart.length;i++)
        {
            if(num_cart[i].innerText==sort)
                {
                    num_cart[i].style.backgroundColor='rgb(54, 100, 54';
                }
        }
        checar();

      
}

function checar(){
    var num=document.getElementsByTagName('td');
    for(var i=0;i<num.length;i++)
        {
            if(!num[i].style.backgroundColor == 'rgb(54, 100, 54')
                {
                    return false;
                }
                
        }
        return true;
}

function fim(nome){
    const vencedor=nome;
    if(checar()==true)
        {
         alert(Vencedor+" venceu!");
        }

}
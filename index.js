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
    for (let i = 0; i < 5; i++) {
        const tr = document.createElement("tr");
        for (let u = 0; u < 5; u++) {
            const td = document.createElement("td");
            const aleatorio=Math.floor(Math.random() * (75-1+1)) + 1;
            td.innerHTML = aleatorio;
            
            tr.appendChild(td);
            if(i==2 & u==2)
            {
              td.innerHTML= "LIVRE";
            }
            
        }
        tbody.appendChild(tr);
    }

    // agregando elementos
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    // selecionando o body e inserindo tabela
    const body = document.querySelector("body");
    body.appendChild(tabela);
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


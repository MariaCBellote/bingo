function criartabela(nome)
{
    // criar elementos principais
    const tabela= document.createElement("table");
    const thead= document.createElement("thead");
    const tbody= document.createElement("tbody");

    // criando thead
    const th_nome=document.createElement("th");
    th_nome.innerhtml= nome;
    th_nome.colspan=5;
    thead.appendChild(th_nome);

    //craindo tbody
    const th_b =document.createElement("th");
    td_b.innerhtml ="B"
    const th_i =document.createElement("th");
    td_b.innerhtml ="I"
    const th_n =document.createElement("th");
    td_b.innerhtml ="N"
    const th_g =document.createElement("th");
    td_b.innerhtml ="G"
    const th_o =document.createElement("th");
    td_b.innerhtml ="O"

    tbody.appendChild(th_b);
    tbody.appendChild(th_i);
    tbody.appendChild(th_n);
    tbody.appendChild(th_g);
    tbody.appendChild(th_o);

    for(let i=0; i<5;i++)
    {
        const tr =document.createElement("tr");
        for(let u=0;u<5;u++)
    {
        const td =document.createElement("td");
        td.innerhtml="xx";
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    }

    //agregando elementos
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    //selecionar o body e inserindo tabela
    const body= document.querySelector("body");
    body.appendChild(tabela);
}

function pedirnome()
{
    const nome=prompt("Digite seu nome");
    criartabela(nome);
}
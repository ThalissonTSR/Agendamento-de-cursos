
// puxar os dados das datas

info1=localStorage.getItem("item1")
info2=localStorage.getItem("item2")
info3=localStorage.getItem("item3")
info4=localStorage.getItem("item4")
info5=localStorage.getItem("item5")


data1 =  localStorage.getItem("data1")
data2 =  localStorage.getItem("data2")
data3 =  localStorage.getItem("data3")
data4 =  localStorage.getItem("data4")
data5 =  localStorage.getItem("data5")

     // Dados dos eventos
     const events = [        
        { aluno: info1,  cor: "cor1" , data: data1 },
        { aluno: info2,  cor: "cor2" , data: data2},
        { aluno: info3,  cor: "cor3" , data: data3},
        { aluno: info4,  cor: "cor4" , data: data4},     
        { aluno: info5,  cor: "cor5" , data: data5},     

    ];

    // Gerar calendário
        const generateCalendar = () => {
        const calendar = document.getElementById("calendar");
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        // Número de dias no mês
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Criar os dias no calendário
        for (let day = 1; day <= daysInMonth; day++) {
            const date = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

            // Criar o elemento do dia
            const dayElement = document.createElement("div");
            dayElement.className = "day";

            // Adicionar a data no topo
            const dayTitle = document.createElement("strong");
            dayTitle.innerText = `${day}/${currentMonth + 1}/${currentYear}`;
            dayElement.appendChild(dayTitle);

            // Filtrar eventos para o dia atual
            const dayEvents = events.filter(event => event.data === date);

            // Adicionar os eventos ao dia
            dayEvents.forEach(event => {
                const eventElement = document.createElement("div");
                eventElement.className = `event ${event.cor}`;
                eventElement.innerHTML = `
                   ${event.aluno}   <br>
                   
                  
                `;
                dayElement.appendChild(eventElement);
            });

            // Adicionar o dia ao calendário
            calendar.appendChild(dayElement);
        }
    };

    generateCalendar();

// funcao para aparecer as datas marcadas
function VerDatas(){

// muda o local storage para nao aparecer null caso ainda estiver sem marcacao
    if(info1==null){
        info1 = "Sem Data"
    }
    if(info2==null){
        info2 = "Sem Data"
    }
    if(info3==null){
        info3 = "Sem Data"
    }
    if(info4==null){
        info4 = "Sem Data"
    }
    if(info5==null){
        info5 = "Sem Data"
    }
  
// aparecer a lista de datas
    document.getElementById("ExcluirData").style.visibility= "visible"
    document.getElementById("ExcluirData").style.margin= "0 45% 10px"


//cada "x.add" cria mais uma linha na lista de datas

    var x = document.getElementById("DataSelect");
    var option = document.createElement("option");
    option.text = "DATA 1: " + info1;                   // cria a linha a partir das informacoes de data
    x.add(option);
    
    var x = document.getElementById("DataSelect");
    var option = document.createElement("option");
    option.text ="DATA 2: " + info2;
    x.add(option);

    var x = document.getElementById("DataSelect");
    var option = document.createElement("option");
    option.text = "DATA 3: " + info3;
    x.add(option);

    var x = document.getElementById("DataSelect");
    var option = document.createElement("option");
    option.text = "DATA 4: " + info4;
    x.add(option);

    var x = document.getElementById("DataSelect");
    var option = document.createElement("option");
    option.text = "DATA 5: " + info5;
    x.add(option);

 //esconder botao de ver datas
    document.getElementById("sumirBtn").style.visibility= "hidden"
     document.getElementById("sumirBtn").style.margin= "0 45% 10px"
  

    document.getElementById("numero").style.visibility= "visible"

    
}

function ExcluirData(){

// se valor preechicho for... apague valor

valor = document.getElementById("numero").value         // puxar o valor digitado

if(valor == 1){
    localStorage.removeItem("data1")
    localStorage.removeItem("item1")
   
   
}
if(valor == 2){
    localStorage.removeItem("data2")
    localStorage.removeItem("item2")
    

}
if(valor == 3){
    localStorage.removeItem("data3")
    localStorage.removeItem("item3")
  
}
if(valor == 4){
    localStorage.removeItem("data4")
    localStorage.removeItem("item4")
    
}
if(valor == 5){
    localStorage.removeItem("data5")
    localStorage.removeItem("item5")

}

// atualizar pagina (tira bug visual)
window.location.reload();
}

// anotacao precisa fica mudando o nome do mes manualmente
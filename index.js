const perguntas = [
    {
      pergunta: "Qual o nosso curso?",
      respostas: [
        "Gestão de T.I",
        "ADM",
        "ADS",
      ],
      correta: 2
    },
    {
      pergunta: "Qual nome da nossa Faculdade?",
      respostas: [
        "Unicid",
        "Unip",
        "Unicsul",
      ],
      correta: 0
    },
    {
      pergunta: "O que o Kaua é?",
      respostas: [
        "Legal",
        "Gay",
        "Corno",
      ],
      correta: 2
    },
    {
      pergunta: "O que o moises tem?",
      respostas: [
        "Dinheiro",
        "Problema",
        "Inteligencia",
      ],
      correta: 1
    },
    {
      pergunta: "Quem o Gabriel namora?",
      respostas: [
        "Kaua",
        "Namorada dele",
        "A mina de sexta",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o mais preto?",
      respostas: [
        "kaua",
        "Victor",
        "Kaique",
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o mais branco?",
      respostas: [
        "Gabriel",
        "Victor",
        "Elielton",
      ],
      correta: 1
    },
    {
      pergunta: "Qual melhor é Pc?",
      respostas: [
        "Bomba do pc do moises",
        "Dell",
        "Pc da facul",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o mais forte?",
      respostas: [
        "Kaique",
        "Elielton",
        "kaua",
      ],
      correta: 2
    },
    {
      pergunta: "Aonde o Gabriel foi corno?",
      respostas: [
        "Na casa dele",
        "Na festa da Usp",
        "Ele nao foi",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }       
      
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
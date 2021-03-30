const news = [
  {
    id:1,
    title: "Governo assina MP para melhorar ambiente de negócios no Brasil",
    subtitle: "O documento assinado nesta segunda-feira (29) pelo presidente Jair Bolsonaro visa melhorar a posição do país no ranking do Banco Mundial.",
    body_text: "Uma medida provisória (MP) foi assinada nesta segunda-feira (29) pelo presidente Jair Bolsonaro, com o objetivo de modernizar e desburocratizar o ambiente de negócios do Brasil. A ideia é melhorar a posição do país no ranking Doing Business, do Banco Mundial.",
    category: "Fiscal"

  },
  {
    id:2,
    title: "Como a imprensa estrangeira noticiou as trocas no governo Bolsonaro",
    subtitle: "O jornal argentino Clarín escreveu que o presidente Jair Bolsonaro está 'encurralado pelo descontrole do coronavírus'",
    body_text: "Veículos de imprensa internacionais deram destaque às mudanças em cargos-chave do governo de Jair Bolsonaro, que aconteceram na tarde de hoje. Fora do Brasil, as trocas nos ministérios das Relações Internacionais, da Defesa, da Casa Civil, da Secretaria de Governo, da Justiça e na Advocacia-Geral da União foram associadas à crise da pandemia de covid-19.",
    category: "Contabil"

  },
  {
    id:3,
    title: "Quem é Flávia Arruda, a nova ministra da Secretaria de Governo?",
    subtitle: "Flávia Arruda PL-DF deputada federal",
    body_text: "O presidente Jair Bolsonaro fez hoje a primeira reforma ministerial de seu governo. Entre as mudanças, foi anunciado o nome da deputada Flávia Arruda (PL-DF) como nova articuladora do governo em mais uma vitória para o centrão.",
    category: "Rural"

  },
  {
    id:4,
    title: "Gilberto pede desculpas a Juliette: 'Eu estava no auge da minha raiva'",
    subtitle: "Gilberto pede desculpas a Juliette: 'Eu estava no auge da minha raiva'",
    body_text: "Após o Jogo da Discórdia que rolou nesta segunda no BBB21, Gilberto conversa com Juliette sobre a placa que ele lhe deu, e a sister afirma não ter gostado. 'Essa justificativa aí, eu magoei. Vou mentir?', desabafa, explicando que, em sua profissão, dá orientações sobre como reagir para não manchar a maquiagem. 'E tu diz no ao vivo que eu não limpo minha lágrima', segue.",
    category: "Dep. Pessoal"

  }
];
  
  function getNews() {
    return news;
  }
  
  function insertNews(noticia) {
    news.push(noticia);
  }
  
  module.exports = {
    getNews: getNews,
    insertNews: insertNews,
  };
  
  
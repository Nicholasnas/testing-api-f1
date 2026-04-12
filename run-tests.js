const fs = require('fs');
const newman = require('newman');

const arquivos = [
    './collections/f1api.postman_collection_Douglas.json',
    './collections/f1api.postman_collection_Henrique.json',
    './collections/f1api.postman_collection_Otavio_Jimenez.json',
    './collections/f1api.postman_collection_Otavio_Augusto.json',
    './collections/f1.api.postman_collection_Nicholas.json'
];

let todosOsTestes = [];
let collectionBase = null;

arquivos.forEach(arquivo => {
    if (fs.existsSync(arquivo)) {
        const data = JSON.parse(fs.readFileSync(arquivo, 'utf8'));
        if (!collectionBase) collectionBase = data;
        todosOsTestes = todosOsTestes.concat(data.item);
    }
});

todosOsTestes.sort((a, b) => {
    // Procura o padrão "TC-" seguido de números e extrai só os números
    const matchA = a.name.match(/TC-(\d+)/);
    const matchB = b.name.match(/TC-(\d+)/);

    if (matchA && matchB) {
        const numA = parseInt(matchA[1], 10);
        const numB = parseInt(matchB[1], 10);
        return numA - numB;
    }

    return a.name.localeCompare(b.name);
});

console.log('\n📋 Ordem dos testes antes da execução:');
todosOsTestes.forEach((teste, index) => {
    console.log(`   ${index + 1}. ${teste.name}`);
});
console.log('--------------------------------------------------\n');

//Cria uma Collection "Master" temporária
collectionBase.item = todosOsTestes;
const masterPath = './collections/temp-master-collection.json';
fs.writeFileSync(masterPath, JSON.stringify(collectionBase, null, 2));

console.log('🚀 Iniciando bateria de testes unificada...');

newman.run({
    collection: require(masterPath),
    environment: require('./environments/f1api.environment.json'),
    reporters: ['cli', 'htmlextra'],
    reporter: {
        htmlextra: {
            export: './relatorio.html',
            browserTitle: "Relatório Unificado F1 API",
            title: "Resultados da Suíte de Testes"
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('✅ Todos os testes rodaram na ordem correta!');
    fs.unlinkSync(masterPath);
});
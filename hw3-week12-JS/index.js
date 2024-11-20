let Euro = 0;

while (true) {
    let aqsha = prompt("Ақша сомасын енгізіңіз (немесе 'stop' деп жазып, тоқтату үшін):");
    
    if (aqsha.toLowerCase() === 'stop') {
        break;
    }
    let valut = prompt("Валютаны енгізіңіз (USD, KZT, EUR):");


    switch (valut.toUpperCase()) {
        case 'USD':
            Euro += parseFloat(aqsha) * 0.85; 
            break;
        case 'KZT':
            Euro += parseFloat(aqsha) * 0.002; 
            break;
        case 'EUR':
            Euro += parseFloat(aqsha); 
            break;
        default:
            alert("Қате валютаны енгіздіңіз. Қайталап көріңіз.");
            continue;
    }
}

alert("Барлық соманың евродағы қосындысы: " + Euro + " EUR");

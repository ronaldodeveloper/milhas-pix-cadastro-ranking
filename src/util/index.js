 
// formata data
const formatDateBR = (dateString) => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });

    const parts = formatter.formatToParts(date);
    const day = parts.find(p => p.type === 'day').value;
    const month = parts.find(p => p.type === 'month').value
        .replace('.', '')
        .replace(/^\w/, c => c.toUpperCase());
    const year = parts.find(p => p.type === 'year').value;

    return `${day} ${month} ${year}`;
}

const formatMilhas = (number) => {
    const cleanNumber = String(number).replace(/\D/g, '');
    return cleanNumber.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

const StateProgram = (status) => {
    switch (status) {
        case "Ativa":
            return "verde"
        case "Inativo":
            return "vermelho"
        case "Em Utilizacao":
            return "azul"
        default:
            break;
    }
}

const FormatStringLogo = (str) => {
    return str.replace(" ", "-").toLowerCase();
} 

const FormatMoney = (num) => {
  if (isNaN(num)) throw new Error('Formato de número inválido');
  return Number(num).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const FormatMoneyCurrentInput = (element) => {
    // let numericValue = element.replace(/\D/g, "");

    // let number = numericValue ? parseInt(numericValue, 10) / 100 : 0;

    // let formatted = new Intl.NumberFormat("pt-BR", {
    //   minimumFractionDigits: 2,
    //   maximumFractionDigits: 2
    // }).format(number);

    // return formatted; 
}



export { formatDateBR, formatMilhas, StateProgram, FormatStringLogo, FormatMoney, FormatMoneyCurrentInput };
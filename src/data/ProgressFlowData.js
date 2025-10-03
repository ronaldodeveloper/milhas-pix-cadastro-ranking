

export const ProgressFlowData = [
  {
    id: 1,
    title: "Passo 1",
    subtitle: "Escolha o programa",
    button : [
      {
        label: "Prosseguir",
        type: "button",
      },
    ],
    step_content:{
      title: "Escolha o programa de fidelidade",
      description: "",
      checked_title: "",
      checked_items: [
        {
          value: "tudo-azul",
          imageUrl: "/image/logo-tudoazul.svg",
          checked: true
        },
        {
          value: "smiles",
          imageUrl: "/image/logo-smiles.svg",
          checked: false
        },
        {
          value: "latam-pass",
          imageUrl: "/image/logo-latam-pass.svg",
          checked: false
        },
        {
          value: "air-portugal",
          imageUrl: "/image/logo-air-portugal.svg",
          checked: false
        },
      ],
      fields: [
        {
          label: "Produto",
          iconName: "",
          type: "select",
          options: ["liminar"],
        },
        {
          label: "CPF's Disponíveis", 
          iconName: "icone-lock",
          type: "readonly",
          disabled: true,
          readonly: false,
          required: false,
          placeholder: "Ilimitado",
        },
      ],
      info:{
        title: "Selecione o programa",
        description: "Escolha de qual programa de fidelidade você quer vender suas milhas. Use apenas contas em seu nome.",
      }
    },
  },
  {
    id: 2,
    title: "Passo 2",
    subtitle: "Oferte suas milhas",
    button : [
      {
        label: "Prosseguir",
        type: "button",
      },
    ],
    step_content:{
      title: "Oferte suas milhas",
      description: "Escolha entre R$ 14,00 e R$ 16,56",
      checked_title: "Quero receber",
      checked_items: [
        {
          value: "Imediato",
          checked: true
        },
        {
          value: "em 2 dias",
          checked: false
        },
        {
          value: "em 7 dias",
          checked: false
        },
        {
          value: "Depois do voo",
          checked: false
        },
      ],
      fields: [
        {
          label: "Milhas ofertadas", 
          iconName: "icone-airplane-in-flight",
          type: "number",
          disabled: false,
          readonly: false,
        },
         {
          label: "Valor a cada 1.000 milhas", 
          iconName: "icone-chevron-dual",
          iconMoney: true,
          type: "number",
          disabled: false,
          readonly: true,
          variante: "red",
        },
      ],
      info:{
        title: "Média de milhas",
        description: "Ao vender mais de 20.000 milhas, ative as Opções Avançadas para definir a média de milhas por emissão.",
      }
    },
  },
  {
    id: 3,
    title: "Passo 3",
    subtitle: "Insira os dados do programa",
    button : [
      {
        label: "Concluir",
        type: "button",
      },
    ],
    step_content:{
      title: "Insira os dados do programa de fidelidade",
      description: "Escolha entre R$ 14,00 e R$ 16,56",
      fields: [
        {
          label: "CPF do Titular", 
          iconName: "icone-user-circle",
          type: "text",
          disabled: false,
        },
         {
          label: "Login de acesso", 
          iconName: "",
          type: "text",
          disabled: false,
        },
         {
          label: "Senha de acesso", 
          iconName: "icone-lock",
          type: "text",
          disabled: false,
        },
        {
          label: "Telefone para autenticação", 
          iconName: "",
          iconCode: true,
          iconImage: "/image/whatsapp.svg",
          type: "text",
          disabled: false,
        },
      ],
      info:{
        title: "Dados da Conta",
        description: "Por favor, insira os dados da conta que deseja cadastrar e verifique se estão corretos.",
      }
    },
  },
  {
    id: 4,
    title: "Passo 4",
    subtitle: "Pedido finalizado",
    button : [
      {
        label: "Ver minhas ofertas",
      },
    ],
    step_content:{
      title: "Ordem de venda criada com sucesso!",
      description: "Agora é só aguardar — assim que suas milhas forem vendidas, o valor será transferido direto para sua conta via Pix.",
      image_sucesso: "/image/message-sucesso.svg",
    }
  },
]
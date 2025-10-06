


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
          imageUrl: "/image/img-logo-tudo-azul.png",
          name: "programa_fidelidade"
        },
        {
          value: "smiles",
          imageUrl: "/image/img-logo-smiles.png",
          name: "programa_fidelidade"
        },
        {
          value: "latam-pass",
          imageUrl: "/image/img-logo-latam-pass.png",
          name: "programa_fidelidade"
        },
        {
          value: "air-portugal",
          imageUrl: "/image/img-logo-air-portugal.png",
          name: "programa_fidelidade"
        },
      ],
      fields: [
        {
          label: "Produto",
          iconName: "",
          type: "select",
          options: ["liminar", "Resgatar passagem"],
          name: "produto_selecionado",
        },
        {
          label: "CPF's Disponíveis", 
          iconName: "icone-lock",
          type: "text",
          disabled: true,
          readonly: false,
          required: true,
          placeholder: "Ilimitado",
          name: "cpfs_disponiveis",
          mask: "000.000.000-00",
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
          name: "quero_receber"
        },
        {
          value: "em 2 dias",
          name: "quero_receber"
        },
        {
          value: "em 7 dias",
          name: "quero_receber"
        },
        {
          value: "Depois do voo",
          name: "quero_receber"
        },
      ],
      fields: [
        {
          label: "Milhas ofertadas", 
          iconName: "icone-airplane-in-flight",
          type: "text",
          disabled: false,
          readonly: false,
          required: true,
          name: "milhas_ofertadas",
          mask: "#.##0",
          message: "Insira um valor válido de milhas"
        },
         {
          label: "Valor a cada 1.000 milhas", 
          iconName: "icone-chevron-dual",
          iconMoney: true,
          type: "text",
          disabled: false,
          readonly: false,
          required: true,
          name: "valor_a_cada_1000_milhas",
          // mask: "00,00",
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
          name: "cpf_titular",
          required: true,
          mask: "000.000.000-00",
        },
         {
          label: "Login de acesso", 
          iconName: "",
          type: "text",
          disabled: false,
          name: "login_de_acesso",
          required: true
        },
         {
          label: "Senha de acesso", 
          iconName: "icone-lock",
          type: "password",
          disabled: false,
          name: "senha_de_acesso",
          required: true
        },
        {
          label: "Telefone para autenticação", 
          iconName: "",
          iconCode: true,
          iconImage: "/image/whatsapp.svg",
          type: "text",
          disabled: false,
          name: "telefone_para_autenticacao",
          required: true,
          mask: "(00) 00000-0000",
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
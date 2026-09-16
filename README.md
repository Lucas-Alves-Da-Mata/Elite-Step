# 👟 ELITE STEP

Loja virtual de tênis esportivos de alta performance. Projeto front-end com HTML, CSS e JavaScript puro (sem frameworks).

## 🚀 Funcionalidades

- **Catálogo de produtos** com 32 tênis (Nike, Jordan, Adidas, Puma, Vans, Converse, etc.)
- **Busca** por nome ou marca em tempo real
- **Ordenação** por menor preço, maior preço ou melhor avaliação
- **Filtros** por categoria, marca e faixa de preço
- **Carrinho de compras** com sidebar, persistência via `localStorage` e página dedicada
- **Checkout em 3 etapas** (endereço → pagamento → confirmação) com validação de CPF e CEP
- **Cupom de desconto** `ELITE10` (10% OFF)
- **Desconto de 5%** no pagamento via Pix
- **Confirmação de pedido** compartilhável via WhatsApp
- **Favoritos** persistidos no navegador
- **Página de detalhes** com seleção de tamanho/cor, produtos relacionados e botão de compartilhar
- **Página de FAQ** e **rastreamento de pedidos**
- Preloader, animações e partículas em canvas

## 📁 Estrutura

```
Elite-Step/
├── index.html       → Home (catálogo, busca, filtros, banner)
├── detalhes.html    → Página de detalhes do produto
├── carrinho.html    → Carrinho e checkout
├── favoritos.html   → Lista de favoritos
├── faq.html         → Perguntas frequentes
├── rastreio.html    → Rastreamento de pedido
├── script.js        → Lógica, dados dos produtos e interações
├── style.css        → Estilos
└── README.md
```

## 💻 Como rodar

Não há dependências nem build — basta abrir o `index.html` no navegador, ou servir a pasta com qualquer servidor estático:

```bash
# exemplo com Python
python -m http.server 8000
# depois acesse http://localhost:8000
```

## 🛒 Cupom

Use o cupom `ELITE10` no carrinho para obter 10% de desconto.

## 📄 Licença

MIT
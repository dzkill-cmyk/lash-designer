# Mirelly Lash Design — Site completo (front-end + back-end)

## O que tem aqui
- `public/index.html` → o site (front-end): página única, responsiva, com seções de
  sobre, serviços, galeria, diferenciais, depoimentos e contato.
- `server.js` → o back-end: um servidor Node.js/Express que recebe as mensagens do
  formulário de contato e as salva em `data/mensagens.json`.
- `data/mensagens.json` → onde as mensagens ficam guardadas (um "banco de dados"
  simples em arquivo).

## Como rodar na sua máquina
1. Instale o [Node.js](https://nodejs.org) (versão 18 ou superior).
2. Na pasta do projeto, rode:
   ```
   npm install
   npm start
   ```
3. Abra `http://localhost:3000` no navegador — o site completo (com back-end
   funcionando) estará no ar.

## Como ver as mensagens recebidas
Acesse no navegador:
```
http://localhost:3000/api/mensagens?chave=mirelly123
```
> Troque `mirelly123` pela sua própria chave, editando `ADMIN_KEY` no arquivo
> `server.js` (ou definindo a variável de ambiente `ADMIN_KEY` no seu servidor).

## Antes de publicar o site de verdade
- [ ] Troque o número de WhatsApp `5511999999999` (aparece em 3 lugares no
      `index.html`) pelo número real da Mirelly, no formato `55DDDNÚMERO`.
- [ ] Troque `@mirelly.lashdesign` pelo Instagram real.
- [ ] Substitua os quadros coloridos da seção "Galeria" pelas fotos reais dos
      trabalhos — basta trocar o `background:` de cada `.photo-1/2/3/4` no CSS
      por `background-image:url('sua-foto.jpg'); background-size:cover;`.
- [ ] Troque os depoimentos de exemplo pelos comentários reais das clientes.
- [ ] Troque `mirelly123` por uma chave de administrador só sua.

## Como colocar no ar (hospedar de verdade)
Qualquer serviço que rode Node.js funciona, por exemplo:
- **Render.com** ou **Railway.app** (gratuitos para começar): conecte o
  repositório e defina o comando de start como `npm start`.
- Depois, aponte um domínio (ex: `mirellylash.com.br`) para o serviço escolhido.

Sem publicar o back-end em algum desses serviços, o formulário do site ainda
funciona: ele abre o WhatsApp automaticamente com a mensagem da cliente pronta
para enviar.

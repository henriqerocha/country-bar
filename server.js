const express = require("express");
const sgMail = require("@sendgrid/mail");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

sgMail.setApiKey("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"); // Substitua pela sua chave de API

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint para lidar com o envio de e-mails
app.post("/send-email", (req, res) => {
  const { nome, telefone, duvida } = req.body;


  // Configuração do e-mail a ser enviado
  const msg = {
    to: "phrcolab@gmail.com", // Endereço de e-mail para onde será enviado
    from: `${nome} <${telefone}>`,
    subject: `Mensagem de ${nome} <${telefone}>`,
    text: `Nome: ${nome}\nTelefone: ${telefone}\nMensagem: ${duvida}`
  };

  // Envio do e-mail
  sgMail
    .send(msg)
    .then(() => {
      console.log("E-mail enviado com sucesso!");
      res.send("Sua mensagem foi enviada com sucesso, iremos entrar em contato o mais rápido possível!");
    })
    .catch((error) => {
      console.error("Erro ao enviar mensagem:", error);
      res.status(500).send("Erro ao enviar mensagem.");
    });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
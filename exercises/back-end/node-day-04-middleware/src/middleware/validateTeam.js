//confere se todas as propriedades esperadas estão presentes no req.body


const validateTeam = (req, res, next) => {
    const { nome, sigla } = req.body; // desestruturei nome e sigla de req.body
    if (!name)return res.status(400).json({ message: "O campo 'nome' é obrigatório" });
   if (!sigla) return res.status(400).json({ message: "O campo 'sigla' é obrigatório" }); // Já responde avisando que deu errado
   next(); // se ambos os campos tiverem preenchidos, chama o next
};

// usar nessa ordem(fazendo a negação primeiro e chamando next por ultimo), permite analisar todos os cenários possíveis de preenchimento errado)

  module.exports = validateTeam;

  
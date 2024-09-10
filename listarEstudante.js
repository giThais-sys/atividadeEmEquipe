let {estudantes}= require ('./index')

const listarEstudante=(req, res) =>{
  res.status(200).estudantes.send (estudantes)
}
module.exports= listarEstudante
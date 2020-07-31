const {Router} = require('express');
const router = Router();

let orcamentos = [


    ];
let cabecalho = [


    ];

router.get('/',   async(req, res) => {

    res.render('index', {orcamento: orcamentos, cabecalho: cabecalho} )

});
position = 0;

router.post('/novo-orcamento', function (req, res) {

    novoOrcamento = {
       pecas: req.body.pecas,
        medidas: req.body.medidas,
        material: req.body.material,
        referencia: req.body.referencia,
    }
    novoCabeçalho = {
        cliente: req.body.cliente,
        data: req.body.data,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
    }
    console.log(novoCabeçalho)
    orcamentos.push(novoOrcamento)
    cabecalho = []
    cabecalho.push(novoCabeçalho)
    res.redirect('/')


});

router.get('/delete-orcamento/:id', async (req, res) =>{


    orcamentos.splice(req.params.id, 1);
    res.redirect('/')

})

router.get('/limpar',   (req, res) => {
    orcamentos = []
    cabecalho = []
    res.redirect('/')
});



module.exports = router;

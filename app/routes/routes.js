module.exports = function(application){

    application.get('/', function(req,res){
        res.render('home');
    });

    application.post('/iniciar', function(req,res){    	
    	console.log('routes: /iniciar');
    	console.log(req.body);
        application.app.controllers.jogo.iniciar(application,req,res);
        //res.send('Esta funcionalidade não foi implementada ainda.');
    });

    application.get('/lancarDados', function(req,res){
    	console.log('routes: /lancarDados');
        application.app.controllers.jogo.novoLancamento(application, req, res);
    });

    application.get('/reiniciar', function(req,res){
    	console.log('routes: /reiniciar');
        application.app.controllers.jogo.reiniciar(application, req, res);
    });
    
    application.get('/encerrar', function(req,res){
    	console.log('routes: /encerrar');        
        application.app.controllers.jogo.encerrar(application, req, res);
    });
     application.get('/nome', function(req,res){
    	console.log('routes: /nome');        
        application.app.controllers.jogo.nome(application, req, res);
    });
     application.get('/sobrenome', function(req,res){
    	console.log('routes: /sobrenome');        
        application.app.controllers.jogo.sobrenome(application, req, res);
    });}
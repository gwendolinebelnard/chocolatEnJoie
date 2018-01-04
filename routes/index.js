var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'chocoenjoie'
});

connection.connect();


// permet le fonctionnement de l'envoi de mails
const nodemailer = require("nodemailer");
var path = require('path');


/* GET index*/

// router.get('/', function(req, res, next) {


//   res.render('index');
// });

// section suggestions home-page
router.get('/', function (req, res) {
	connection.query('SELECT * FROM workshops LIMIT 1;', function (error, results, fields) {
		if (error) throw error;
		connection.query('SELECT * FROM products;', function (error, results2, fields) {
			if (error) throw error;
			res.render('index', {
				products: results2,
				event: results[0],
				index: true
			});
		});


	});

});




/* GET juridique*/

router.get('/juridique', function (req, res) {
	res.render('juridique.pug');
})

/* GET contact*/
router.get('/contact', function (req, res) {
	res.render('contact.pug');
})


// GET page produits
router.get('/produits', function (req, res, next) {
	res.render('produit.pug');
});


router.get('/login', function (req, res) {
	// page de login (formulaire)
	res.render('login');
});
// POST /admin (page d'affichage une fois le login et password validés)
router.post('/login', function (req, res) {
	// page de login 
	// puis
	// redirection vers /admin/logged (page d'accueil de l'espace admin)
	let login = req.body.login;
	let password = req.body.password;
	connection.query('SELECT * FROM admin  WHERE login = "' + login + '" AND password = "' + password + '";', function (error, results, fields) {
		if (error) throw error;

		if (results.length === 0) {
			res.send("Cet utilisateur n'existe pas");
		} else {
			req.session.connected = true;
			res.redirect('/logged');
		}
	});
});

// GET admin/logged
router.get('/logged', function (req, res) {
	if (req.session.connected) {
		res.redirect('/admin');
	} else {
		res.redirect('/');
	}
});

// LOGOUT
router.get('/logout', function (req, res) {
	req.session.destroy(function () {
		res.redirect('/');
	});
});

// Configuration de l'envoi de mail 
router.get('/contact', function (req, res, next) {
	res.sendFile(path.join(__dirname, '../views/', 'contact.pug'));

});

router.post('/contact', function (req, res, next) {

	// Configuration du SMTP avec Mailtrap   
	var transport = nodemailer.createTransport({
		host: "smtp.mailtrap.io",
		port: 2525,
		auth: {
			user: "69f91feb50f9b3",
			pass: "166ba62f4fd166"
		}
	});

	// Caracteristiques du message à envoyer 
	console.log(req.body);
	transport.sendMail({
		from: "f4456f26df-5118cc@inbox.mailtrap.io", // Expediteur --> ici adresse fournit par mailtrap 
		to: "f4456f26df-5118cc@inbox.mailtrap.io", // Destinataires
		subject: req.body.subject, // Objet du mail 
		text: 'Bonjour Mr Ducerf ' + req.body.name + ' ' + req.body.surname + ' visiteur de chocolat en joie.com viens de vous envoyer un nouveau formulaire de contact: ' + '\n' + '\n'
			+ ' prenom: ' + req.body.name + ' ' + '\n'
			+ ' nom: ' + req.body.surname + ' ' + '\n'
			+ ' email: ' + req.body.email + ' ' + '\n'
			+ ' phone: ' + req.body.phone + ' ' + '\n'
			+ ' adress: ' + req.body.adress + ' ' + '\n'
			+ ' zip: ' + req.body.zip + ' ' + '\n'
			+ ' city: ' + req.body.city + ' ' + '\n'
			+ ' subject: ' + req.body.subject + ' ' + '\n'
			+ ' message: ' + req.body.message + ' '

	},

		(error, response) => {
			if (error) {
				console.log(error);
			} else {
				console.log("Message sent");
				res.redirect('/contact');
			}
		});
});

//
router.get('/produits', function (req, res, next) {
	connection.query('SELECT * FROM products', function (error, results, fields) {
		if (error) throw error;
		// connected!
		console.log(results);
		res.render('produit', {
			informations: results
		});
	});
});

// page liste des produit chocolat noir
router.get('/produits/chocolat-noir', function (req, res) {
	// liste des produits choco noir 
	connection.query('SELECT * FROM products where category="chocolat noir"', function (error, results, fields) {
		if (error) throw error;
		// connected!
		res.render('chocolat-noir', {
			informations: results
		});
	});
});

// page liste des produit chocolat blanc
router.get('/produits/chocolat-blanc', function (req, res) {
	// liste des produits choco noir 
	connection.query('SELECT * FROM products where category="chocolat blanc"', function (error, results, fields) {
		if (error) throw error;
		// connected!
		res.render('chocolat-blanc', {
			informations: results
		});
	});
});

// page liste des produit chocolat lait
router.get('/produits/chocolat-lait', function (req, res) {
	// liste des produits choco noir 
	connection.query('SELECT * FROM products where category="chocolat lait"', function (error, results, fields) {
		if (error) throw error;
		// connected!
		res.render('chocolat-lait', {
			informations: results
		});
	});
});

// page liste des produit chocolat mix
router.get('/produits/chocolat-mix', function (req, res) {
	// liste des produits choco noir 
	connection.query('SELECT * FROM products WHERE category="chocolat mix"', function (error, results, fields) {
		if (error) throw error;
		// connected!
		res.render('chocolat-mix', {
			informations: results
		});
	});
});






module.exports = router;

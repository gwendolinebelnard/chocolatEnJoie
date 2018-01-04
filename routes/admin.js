var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const multer = require('multer');
const fs = require('fs');
const fscopyfile = require('fs-copy-file');
//console.log(fscopyfile);
//console.log(fs);
//console.log(fscopyfile.Function);
const { COPYFILE_EXCL } = fs.constants;
const upload = multer({ dest: 'tmp/' });
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'chocoenjoie'
});

connection.connect();

// GET /admin
router.get('/', function (req, res) {
    // page de login (formulaire)
    res.render('admin');
});



// GET /admin/produits
router.get('/produits', function (req, res, next) {
    connection.query('SELECT * FROM products', function (error, results) {  // pour se relier à la table mysql
        if (error) {
            console.log(error);
        }
        res.render('admin-produit', {  // affiche la page admin-produit.pug
            products: results  // renvoie les résultats de la BDD sur la page. "product" est la variable utilisée ds le fichier admin-produit.pug
        });
    });
});

// GET /admin/produits/modifier
router.get('/produits/modifier/:id(\\d+)', function (req, res, next) {
    // Afichage de l'article à modifier
    connection.query('SELECT * FROM products WHERE id = ?', [req.params.id], function (error, results) {
        res.render('admin-produit-modifier', {   // on appelle la page admin-produit-modifier.pug
            product: results[0]  // affiche la page admin-produit-modifier.pug
        });
    });
});
// POST /admin/produits/modifier
router.post('/produits/modifier/:id(\\d+)', upload.single('image'), function (req, res, next) {
    console.log(req.body);

    if (req.file) {
        if (req.file.size < (3 * 1024 * 1024) && (req.file.mimetype == 'image/png' || req.file.mimetype == 'image/jpeg')) {
            fs.rename(req.file.path, 'public/images/' + req.file.originalname);
        } else {
            res.send('Vous avez fait une erreur dans le téléchargement')
        }
        connection.query('UPDATE products SET category=?,name=?,description=?,composition=?,quantity=?,weight=?, image=? WHERE id = ?',
            [req.body.category, req.body.name, req.body.description, req.body.composition, req.body.quantity, req.body.weight, req.file.originalname, req.params.id],
            function (error, results, fields) {
                if (error) {
                    console.log(error);
                } else {
                    // Redirection vers /admin/produits
                    res.redirect('/admin/produits');
                }
            });



    } else {
        // Modification de l'article
        connection.query('UPDATE products SET category=?,name=?,description=?,composition=?,quantity=?,weight=? WHERE id = ?',
            [req.body.category, req.body.name, req.body.description, req.body.composition, req.body.quantity, req.body.weight, req.params.id],
            function (error, results, fields) {
                if (error) {
                    console.log(error);
                } else {
                    // Redirection vers /admin/produits
                    res.redirect('/admin/produits');
                }
            });
    }
});

// GET /admin/produits/ajouter
router.get('/produits/ajouter', function (req, res) {
    // ajouter des produits (formulaire)
    res.render('admin-produit-ajouter');
});
// POST /admin/produits/ajouter
router.post('/produits/ajouter', upload.single('image'), function (req, res, next) {
    console.log(req.body);
    if (req.file.size < (3 * 1024 * 1024) && (req.file.mimetype == 'image/png' || req.file.mimetype == 'image/jpeg')) {
        fs.rename(req.file.path, 'public/images/' + req.file.originalname);
    } else {
        res.send('Vous avez fait une erreur dans le téléchargement')
    }
    connection.query('INSERT INTO products VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?)',
        [req.body.category, req.body.name, req.body.description, req.body.composition, req.body.quantity, req.body.weight, req.file.originalname, req.body.position],
        function (error, results, fields) {
            if (error) throw error;
            // connected!
            //res.render('admin-index', results);
            console.log(results);
            res.redirect('/admin/produits');
        });
});

// GET /admin//produits/supprimer
router.get('/produits/supprimer/:id(\\d+)', function (req, res, next) {
    connection.query('DELETE FROM products WHERE id = ?', [req.params.id], function (error) {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/admin/produits');
        }
    });
});


// GET /admin/ateliers   // OK !!!!! Manque l'affichage de l'image dans la base ///
router.get('/ateliers', function (req, res) {
    connection.query('SELECT * FROM workshops', function (error, results, fields) {
        console.log(results);
        if (error) throw error;
        // connected!
        //res.render('admin-ateliers', results);

        res.render('admin-ateliers.pug', {
            products: results
        });

        // liste des ateliers
    });
});

// GET /admin/ateliers/modifier // OK //
router.get('/ateliers/modifier', function (req, res) {
    res.render('admin-ateliers-modifier.pug', {});
    //ajouter des ateliers (formulaire)
});


// POST /admin/ateliers/modifier

// modifier l'atelier en cours (formulaire) ps: on ne peut que modifier puisqu'il n'y en a qu'un à la fois
router.post('/ateliers/modifier', function (req, res) {

    //if(req.file){} // si req.file existe
    //if (req.file.size < (3*1024*1024) && (req.file.mimetype == 'image/png' || req.file.mimetype == 'image/jpg') ) {
    //fs.rename(req.file.path,'public/images/'+req.body.product_namereq.file.originalname);
    //} else {
    //res.send('Vous avez fait une erreur dans le téléchargement') }
    console.log(req.body);
    const dateArray = req.body.date.split('/');
    connection.query('UPDATE workshops SET name = ?, date = ? WHERE id=1', [req.body.name, `${dateArray[2]}-${dateArray[0]}-${dateArray[1]}`], function (error, results, fields) {
        if (error) console.log(error);
        console.log(results);
        // connected!
        res.redirect('/admin/ateliers');
    });

});


// POST /admin/new-background
router.post('/new-background', upload.single('new-background'), function (req, res) {
    console.log(req.file);
    fs.rename(req.file.path, 'public/images/background3.png');
    res.redirect('/admin/ateliers');
});


// GET /admin/default-background
router.get('/default-background3', function (req, res) {

    fs.rename('public/images/default-background/background3.png', 'public/images/background3.png');
    //, COPYFILE_EXCL, (err) => {if (err) console.log(err);}
    res.redirect('/admin/ateliers');
});










// GET /admin/ateliers/modifier
router.get('/ateliers/modifier/:id(\\d+)', function (req, res) {
    // modifier des ateliers (formulaire)
});

// POST /admin/ateliers/modifier
router.post('/ateliers/modifier/:id(\\d+)', function (req, res) {
    // modifier des ateliers
    // puis
    // redirection vers /ateliers
});

// GET /admin/ateliers/supprimer
router.get('/ateliers/supprimer/:id(\\d+)', function (req, res) {
    // supprimer des ateliers
    // puis
    // redirection vers /ateliers
});

module.exports = router;
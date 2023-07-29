const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");

});

app.post("/", (req, res) => {

    function inverseur(chaine){

 	   let inverse = chaine.split("").reverse().join("");
 	   return inverse;
    }

	const sentence = req.body.str;

	res.send(`<body style=" background-color : black; color: white; ">
 
         <h1> Inverseur des phrases </h1>
         <p> L'ancien phrase : ${sentence}
         <br>       
		<p>Voici la nouvelle phrase : ${inverseur(sentence)}</p> 

		</body>`)

})





app.listen(port, () => {
	console.log(`Le serveur tourne sur le port ${port}...`)
})
const express = require("express");
const path = require("path");

const app = express();
const port = 8085; // default port to listen

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.render( "index" );
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
	console.log ( `server started at http://localhost: ${ port } ` );
} );

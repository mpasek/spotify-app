/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var authRouter = express.Router();

var client_id = '6197353cc3ae4b80b14c41cbd3ae7713'; // App client id
var client_secret = 'fbe0f6e03e7640f3b8a0b9ae6566224b'; // App secret
var redirect_uri = 'http://localhost:3000/callback'; // Your redirect uri
var frontend_uri = 'http://localhost:4200';
// When deployed to AWS S3
//var redirect_uri = 'http://18.221.243.210:3000/callback';
//var frontend_uri = 'http://www.aggregatr.co';


authRouter.get('/login', function(req, res) {

    // your application requests authorization
    var scope = 'user-read-private user-top-read user-library-read playlist-modify-public playlist-modify-private';
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri
        }));
});

authRouter.get('/callback', function(req, res) {

    // your application requests access tokens
    // after checking the state parameter

    var code = req.query.code || null;

    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token;

        /*let key = 'access_token',
            value = access_token;

        window.localStorage.setItem(key , value);*/

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect(frontend_uri + '/info/?' +
          querystring.stringify({
            access_token: access_token
          }))
      } else {
        res.redirect(frontend_uri + '/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
});


module.exports = authRouter;

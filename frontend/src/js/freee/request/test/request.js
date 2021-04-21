var request = require("request");

//変数を書き換えて利用します。
var token_url = "https://accounts.secure.freee.co.jp/public_api/token";
var redirect_uri = "あなたのencoedコールバックURL";
var client_id = "あなたのClient ID";
var client_secret = "あなたのClient Secret";
var code = "取得した認可コード";
var access_token = null;
var refresh_token = null;

//アクセストークンを取得する。
var options = {
  method: 'POST',
  url: token_url,
  headers: {
    'cache-control': 'no-cache',
    'Content-Type': 'application/json'
  },
  form: {
    grant_type: "authorization_code",
    redirect_uri: redirect_uri,
    client_id: client_id,
    client_secret: client_secret,
    code: code
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
  //リクエストレスポンスからアクセストークンを取得する。
  var response = body;
  access_token = response.access_token;
  refresh_token = response.refresh_token;
});

//リフレッシュトークンを用いてアクセストークンを取得する。
var options = {
  method: 'POST',
  url: token_url,
  headers: {
    'cache-control': 'no-cache',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  form: {
    grant_type: "refresh_token",
    redirect_uri: redirect_uri,
    client_id: client_id,
    client_secret: client_secret,
    refresh_token: refresh_token
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  //リクエストレスポンスからアクセストークンを取得する。
  var response = body;
  access_token = response.access_token;
  refresh_token = response.refresh_token;
});
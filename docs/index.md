# nethvoice-wizard-ui

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `yarn install && bower install` for dependecies.

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Testing using REST on a remote server

`npm install && bower install`

copy index.php from nethvoice-wizard-restapi in nethvoice-wizard-ui repo root

Add CORS in index.php, before `$app->run();`

```

$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization, User, Secretkey')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});

```

create app/scripts/custom.js with following content, customizing URL of REST server and secretKey (Needs to be the same of /var/www/html/freepbx/rest/config.inc.php)

var customConfig = {
  BRAND_NAME: 'NethVoice',
  BRAND_SITE: 'http://www.nethvoice.it',
  BRAND_DOCS: 'http://nethvoice.docs.nethesis.it/it/v14/wizard.html',
  BASE_API_URL: '/freepbx/rest',
  BASE_API_URL_CTI: '/webrest',
  VPLAN_URL: '/freepbx/visualplan',
  OUTBOUNDS_URL: '/freepbx/admin/config.php?display=routing&view=form&id=',
  SECRET_KEY: '1234',
};

Accept certificate server if necessary

`grunt serve`

# nethvoice-wizard-ui

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `npm install && bower install` for dependecies.

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

Modify app/scripts/custom.js with URL of REST server and server secretKey (from /var/www/html/freepbx/rest/config.inc.php)
  BASE_API_URL: 'https://192.168.122.73/freepbx/rest',
  BASE_API_URL_CTI: 'https://192.168.122.73/webrest',
  VPLAN_URL: 'https://192.168.122.73/freepbx/visualplan',
  OUTBOUNDS_URL: 'https://192.168.122.73/freepbx/admin/config.php?display=routing&view=form&id=',
  SECRET_KEY: 'rhwBBTV03La_axcu'

Accept certificate server if necessary

`grunt serve`


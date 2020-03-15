Package.describe({
  git: 'git://github.com/mouse0270/bootstrap-notify.git',
  name: 'mouse0270:bootstrap-notify',
  summary: 'Turns standard Bootstrap alerts into "Growl-like" notifications',
  version: '3.1.8',
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use('jquery', 'client');
  api.addFiles('bootstrap-notify.js', 'client');
});

var macVendors = ((function () {
  var req = new XMLHttpRequest();
  req.open("GET", "/tancredi/api/v1/macvendors", false);
  req.send();
  return req.status == 200 && req.responseType == "json" ? req.response : {};
})());

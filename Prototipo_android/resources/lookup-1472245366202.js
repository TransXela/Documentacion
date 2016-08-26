(function(window, undefined) {
  var dictionary = {
    "db4e77d3-a340-4907-ab2f-885b19ef5cf3": "LEy",
    "8a4897e9-b064-4cfa-b08e-6f61f2d8ba02": "Splash screen",
    "569ef8e1-62d7-4652-8e1d-4f332b8604a0": "Eventos",
    "f486f0c9-ccce-4c51-90d8-3aca668b4842": "Consejos",
    "af6afbfe-f864-4bb8-bf0c-4b2b2d98762d": "Denuncias",
    "d64d7cb3-1438-4946-8e4f-62edba819c91": "Cultura",
    "c4357b82-dc20-434f-9ca7-5f27761609cc": "FAQ",
    "bb3ed12b-78d1-4eed-90f2-14f6ef673f48": "Denuncia_enviada",
    "cfefc5b8-d2a3-495d-b061-5b16ae9f3bfb": "Salir",
    "1432c19d-c891-4d09-9d9e-a0e9b91f9494": "login screen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
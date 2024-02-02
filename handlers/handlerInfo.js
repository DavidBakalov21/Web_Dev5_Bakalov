function handlerJSON(req, res) {
    const jsonData = {
      "endpoints": [
       
        {
          "path": "/GET",
          "method": "GET",
          "description": "displays list of all messages(text) in database",
        },
        {
          "path": "/new",
          "method": "GET",
          "description": "displays form to create new message",
        },
        {
            "path": "/GET/:id",
            "method": "GET",
            "description": "displays the name of requested id message (example: /GET/qa12)",
          },
          {
            "path": "/create",
            "method": "POST",
            "description": "adds new message with data entered in /new form, please DO NOT try to access this enpoint manually, it will be accesed when you submit /new form ",
          },
          {
            "path": "/info",
            "method": "GET",
            "description": "displays info about endpoints",
          },
        
      ]
    };
    res.json(jsonData);
  }
  module.exports = handlerJSON;
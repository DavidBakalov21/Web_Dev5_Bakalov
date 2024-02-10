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
          //hw7
          {
            "Path": "/set_cookie/:title/:value",
            "method": "GET",
            "description": "sets cookie example (http://localhost:1000/set_cookie/cookie/value)",
          },
          {
            "Path": "/get_cookie/:title/",
            "method": "GET",
            "description": "gets cookie example (http://localhost:1000/get_cookie/cookie/)",
          },
          {
            "Path": "/set_header/:header_name/:header_value",
            "method": "GET",
            "description": "sets header example (http://localhost:1000/set_header/header/val)",
           },
          {
            "Path": "/get_header/:header_name/",
            "method": "GET",
            "description": "gets header example (http://localhost:1000/get_header/header/) !!! header must be set in Postman headers like header - val !!!",
          },
        
      ]
    };
    res.json(jsonData);
  }
  module.exports = handlerJSON;
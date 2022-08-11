URL: /city/
HTTP Verb: GET
Action: index
Notes: INDEX when a user types localhost:3000/cityin browser this route shows a listor indexof all major cities in USA

URL: /city/stylist
HTTP Verb: GET
Action: index
Notes: INDEX when a user types localhost:3000/city/stylist in browser this route shows a list indexof stylist of the major cities in USA

URL: /city/stylist/new
HTTP Verb: GET
Action : new
Notes: NEW when a user types localhost:3000/city/stylist/new in browser this route shows the user a form to create a NEWstylist

URL: /stylist/:id
HTTP Verb: DELETE
Action: destroy
Notes: DELETE initiates a delete request through a form submission with action = http://localhost:3000/stylist/:idOfProduct and allows the application the ability to deletea stylist

URL: /stylst/:id
HTTP Verb: PUT
Action: update
Notes: UPDATE initiates a put request through a form submission with action = http://localhost:3000/stylist/:idOfProduct and allows the application the ability to Updatedata about a stylst

(add button to show page)
URL: /stylist
HTTP Verb: POST
Action: create
Notes: CREATE initiates a post request through a form submission with action = http://localhost:3000/stylist/and allows the application the ability to Createa product

URL: /stylist/:id/edit
HTTP Verb: GET
Action: edit
Notes: EDIT when a user types localhost:3000/stylist/:idOfStylist/editin browser shows the user a form to edita stylist

URL: /styist/:id
HTTP Verb: GET
Action: show
Notes: SHOW when a user types localhost:3000/stylist/:idOfProductshows the user an Individualstylist in the browser
const React = require('react')
    class Show extends React.Component {
        render() {
            const {stylist} = this.props
                    console.log(stylist)
             return(
                         <html>
                         <head>
                             <title></title>
                             <link rel="stylesheet" href="/css/show.css"></link>
                         </head>
                         <body>
                             <h1>Stylist</h1>
                             <h1>{stylist.name}</h1><br/>
                           <img src={stylist.img}></img><br/>
                           <h3>{stylist.city}</h3>
                           <h3>{stylist.address}</h3>
                           <h3>{stylist.averagePrice}</h3>
                           <form action={`/stylist/${stylist.id}?_method=DELETE`} method='POST'><button type = "submit">Delete</button></form>

                 <a href="/stylist">Back to the Index Page</a><br />
                 <a href="/stylist/new">Create a New Stylist</a>
                         </body>
                         </html>
                       )             
                       
                    }
            }
     module.exports  = Show;
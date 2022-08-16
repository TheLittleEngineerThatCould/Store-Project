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
                             <h2>{stylist.name}</h2><br/>
                           <img src={stylist.img}></img><br/>
                           <h2>{stylist.city}</h2>
                           <h2>{stylist.address}</h2>
                           <h2>{stylist.averagePrice}</h2>
                           <form action={`/stylist/${stylist.id}?_method=DELETE`} method='POST'><button type = "submit">Delete</button></form>

                 <a href="/stylist">Back to the Index Page</a><br />
                 <a href="/stylist/new">Create a New Stylist</a>
                         </body>
                         </html>
                       )             
                       
                    }
            }
     module.exports  = Show;
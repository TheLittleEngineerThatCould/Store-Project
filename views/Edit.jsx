const React = require('react')

class Edit extends React.Component{
    render() {
       const {stylist} = this.props
       return(
               <html lang="en">
        <head>
                        <title>Document</title>
                        <link rel="stylesheet" href="/css/new.css"></link>
        </head>
        <body>
          <div>
            <h1> Edit Stylist</h1>
            <form action={`/stylist/${stylist.id}?_method=PUT`} method="POST">
                Stylist Name: <input type="text" name="name" value={stylist.name} /><br/>
                City: <input type="text" name="city" value={stylist.city} /><br/>
                Address: <input type="text" name="address" value={stylist.address} /><br/>
                Average Price: <input type="number" min={0} name="averagePrice" value={stylist.averagePrice}/><br/>
                Image: <input type="text" name="img" value={stylist.img} /><br/>
                <input type="submit" name="" value="Edit Stylist"/>
            </form>

            <a href="/stylist">Back to Index Page</a><br/>
            <a href="/stylist/new">Create a New Stylist</a>
            
            
            
            </div>  
        </body>
        </html>
       )
    }
}

module.exports = Edit;
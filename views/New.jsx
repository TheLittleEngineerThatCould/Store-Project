const React = require('react')

class New extends React.Component{
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
            <h1> Form</h1>
            <form action="/stylist" method="POST">
                Stylist Name: <input type="text" name="name" /><br/>
                City: <input type="text" name="city" /><br/>
                Address: <input type="text" name="address" /><br/>
                Average Price: <input type="number" min={0} name="averagePrice"/><br/>
                Image: <input type="text" name="img" /><br/>
                <input type="submit" name="" value="New Stylist"/>
            </form>

            <a href="/stylist">Back to Index Page</a><br/>
            <a href="/stylist/new">Create a New Stylist</a>
            
            
            
            </div>  
        </body>
        </html>
       )
    }
}

module.exports = New;
const React = require('react')

class New extends React.Component{
    render() {
       const {stylist} = this.props
       return(
               <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
          <div>
            <h1> Form</h1>
            <form action="stylist" method="POST">
                Stylist Name: <input type="text" name="name" /><br/>
                City: <input type="text" name="city" /><br/>
                Address: <input type="text" name="address" /><br/>
                Average Price: <input type="number" name="average price" /><br/>
                Image: <input type="text" name="img" /><br/>
                <input type="submit" name="" value="New Stylist"/>
            </form>

            <a href="/stylist">Back to Index Page</a>
            <a href="/stylist/new">Create a New Stylist</a>
            
            
            
            </div>  
        </body>
        </html>
       )
    }
}

module.exports = New;
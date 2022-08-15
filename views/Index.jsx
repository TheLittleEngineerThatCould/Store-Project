const React = require('react');



class Index extends React.Component{
    render() {
        const {stylist} = this.props
        return(
            <html lang="en">
            <head>
                
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <link rel="stylesheet" href="/css/index.css"></link>

            </head>
            <body>
                <h1>Hairdo Directory</h1>
                <ul>
                    {stylist.map((stylist) => {
                            return(

                                <li>
                                    <a href={`/stylist/${stylist.id}`}>
                                    <h3>{stylist.name}</h3>
                                    </a> <form action={`/stylist/${stylist.id}?_method=DELETE`} method='POST'><button type = "submit">Delete</button></form>
                                    <a href={`/stylist/${stylist.id}/edit`}>Edit Stylist</a>
                                </li>
                            )
                    })}
                </ul>

                <a href="/stylist/new">Create a New Stylist</a>
            </body>
            </html>
        )
    }
}


module.exports = Index;
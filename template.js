export default ({markup, css}) => {
    return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>2018 FIFA WORLD CUP™ SOCIAL</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
          <style>
              a{
                text-decoration: none
              }
              body {
                background-image: url("https://www.bettingtop10.com/gb/wp-content/uploads/sites/6/2017/05/blue-wc-2018-background.jpg");
                background-color: #cccccc;
             }
              
          </style>
        </head>
        <body style="margin:0; background-color:#e2e0e0;">
          <div id="root">${markup}</div>
          <style id="jss-server-side">${css}</style>
          <script type="text/javascript" src="/dist/bundle.js"></script>
        </body>
      </html>`
}

let url = 'https://barcodeapi.org/api/qr/86999727207?'
fetch(url, { cache: "no-store" })
  .then(response => {

    let tokens = response.headers.get('X-RateLimit-Tokens');
    console.log("Tokens remaining: " + tokens);

    response.blob().then(blob => {
      let img = document.createElement("img");
      img.src = URL.createObjectURL(blob);
      document.body.appendChild(img);
    });
});

let url2 = 'https://barcodeapi.org/api/qr/ruaniago25@gmail.com'
fetch(url2, { cache: "no-store" })
  .then(response => {

    let tokens = response.headers.get('X-RateLimit-Tokens');
    console.log("Tokens remaining: " + tokens);

    response.blob().then(blob => {
      let img = document.createElement("img");
      img.src = URL.createObjectURL(blob);
      document.body.appendChild(img);
    });
});
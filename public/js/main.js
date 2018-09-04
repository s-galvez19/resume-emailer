const btn = document.getElementById('btn');

btn.onclick = function (e) {
  e.preventDefault();
  
  fetch('/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: "include",
    body: JSON.stringify({
      from: document.getElementById('from'),
      destination: document.getElementById('dest_email'),
      subject: document.getElementById('subject')
    })
  })
  .then(result => result.json())
  .then(result => {
    document.getElementById('message').innerHTML = result.message;
  
    document.getElementById("form").reset();
  })
  .catch(err => {
    document.getElementById('message').innerHTML = err.message;
 
  });
}


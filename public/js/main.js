const button = document.getElementById('send');

button.onclick = function (e) {
  e.preventDefault();
  
  fetch('http://sgalvez.techlaunch.io:6516', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: "include",
    body: JSON.stringify({
      from: document.getElementById('from').value,
      destination: document.getElementById('email').value,
      subject: document.getElementById('subject').value
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


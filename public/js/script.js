socket = io();

socket.on("Update", (n_users) => {
  document.getElementById("n-users").innerHTML = n_users;
});
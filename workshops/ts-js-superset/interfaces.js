function printUser(user) {
    console.log(user.id + ": " + user.username);
}
printUser({ id: 1, username: "maxat" });
printUser({ id: 1, username: 23 });

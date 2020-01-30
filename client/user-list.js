const loadUsers = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:5000/user", false);
    xhttp.send();

    const users = JSON.parse(xhttp.responseText);

    for (let user of users) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${user.first_name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${user.id}</h6>
                        <div>Last Name: ${user.last_name}</div>
                        <div>Email: ${user.email}</div>
                        <div>Industry: ${user.industry}</div>
                        <hr>
                    </div>
                </div>
            </div>
        `

        document.getElementById('users').innerHTML = document.getElementById('users').innerHTML + x;
    }
}

loadUsers();

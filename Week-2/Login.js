const = login() => {
    const emailElement = document.getElementById('email')
    const passwordElement = document.getElementById('password')

    // console.log('Email Element', emailElement)
    // console.log ('Password Element', passwordElement)

    const email = (emailElement)
    const password = (passwordElement)
    // inserting logical conditions
if (emailElement == ' ') {
    alert ('Provide a valid email')
} 
if (passwordElement == ' ') {
    alert ('Please provide a password')
} else {
    //compare email with what we have in the DB
    const db = {'email': 'email@gmail.com', 'password': 'password'};
    if (email != db.email){
        alert('Provide a valid email')

    } else if(password != db.password){
        alert('Password incorrect')
    }
    else {'Successfully logged in'}
}
}

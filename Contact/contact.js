const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
const bodyMessage = `Full Name: ${fullName.value}<br> Email:
${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;


Email.send({
Host : "smtp.elasticemail.com",
Username : "gulamsadekdipu542000@gmail.com",
Password : "31B056AB38AAB5E57C117C046241B32C2395",
To : 'gulamsadekdipu542000@gmail.com',
From : "gulamsadekdipu542000@gmail.com",
Subject : subject.value,
Body : bodyMessage
}).then(
message => alert(message)
);
}

form.addEventListener("submit", (e) =>{
e.preventDefault();

sendEmail();

});

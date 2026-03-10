importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCGdYfElAdqFh35vZIS-yjqXC2dLFuR7y0",
  projectId: "test-d4582",
  messagingSenderId: "866691320402",
  appId: "1:866691320402:web:a4ccee9ed561a36bb3ed8b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload){

self.registration.showNotification(payload.notification.title,{
body:payload.notification.body
});

});
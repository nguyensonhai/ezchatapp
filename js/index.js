window.onload = () => {
    // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB7BhbgjHfmBMsv0aVkKIT_dVRmC00SKzY",
    authDomain: "chat-app-100995.firebaseapp.com",
    databaseURL: "https://chat-app-100995.firebaseio.com",
    projectId: "chat-app-100995",
    storageBucket: "",
    messagingSenderId: "888159450617",
    appId: "1:888159450617:web:af4dce5ebd3211b2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log(firebase);

  document.getElementById("animationload").hidden = true;
    // show loginPage
    view.setActiveScreen("loginPage");
};
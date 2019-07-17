const config={
    apiKey: "AIzaSyAK-Yx35id8igBFKqcPBkze06TkfZ5q89E",
    authDomain: "lifi-iitk.firebaseapp.com",
    databaseURL: "https://lifi-iitk.firebaseio.com",
    projectId: "lifi-iitk",
    appId: "1:516845378822:web:ea60b80adc89b12e"
}
firebase.initializeApp(config);
var db = firebase.firestore();
var hu = new Vue({
el: '#portfolio',
data () {
    return {
    images: []
    }
},
mounted () {
    // .orderBy("timeStamp", "desc")
    db.collection("gallery").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        this.images.push(doc.data());
    });
    });
}
});
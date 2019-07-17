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
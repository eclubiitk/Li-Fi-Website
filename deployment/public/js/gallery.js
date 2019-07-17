var db = firebase.firestore();
var hu = new Vue({
el: '#gallery-vue',
data () {
    return {
    images: []
    }
},
mounted () {
db.collection("gallery").orderBy("timeStamp", "desc").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
            this.images.push(doc.data());
    });
    });
}
});

let readList = () => {
    var ref = firebase.database().ref("MyList");
    document.getElementById("main-content").innerHTML = ""

    ref.once("value").then((snapshot) => {
        snapshot.forEach((data) => {
            var id = data.key;

            ref.once("value").then((snapshot) => {
                let title = snapshot.child(id).child("title").val();
                let img1 = snapshot.child(id).child("img1").val();


                var div = document.createElement("DIV");
                var label = document.createElement("LABEL");
                label.innerHTML = title + img1;
                div.classList.add("form-check");
                label.classList.add("form-check-label");
                div.appendChild(label);
                document.getElementById("main-content").appendChild(div);
            });
        });
    });
};
window.onload = readList;
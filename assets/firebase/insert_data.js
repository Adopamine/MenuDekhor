let addList = () =>{
    var title = document.getElementById("NameMenu").value;
    var img1 = document.getElementById("img-1").value;
    var img2 = document.getElementById("img-2").value;

    const firebaseRef = firebase.database().ref("MyList");
    firebaseRef.push({
        title: title,
        img1: img1,
        img2: img2,
    });

    alert("Add list");
    document.getElementById("NameMenu").value = "";
};
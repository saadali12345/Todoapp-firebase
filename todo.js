import { collection, getDocs, addDoc, where, orderBy, query, Timestamp, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { db, auth } from "./config.js"
const task = document.querySelector('#task')
const logout = document.querySelector('#logout')
const form = document.querySelector('form')
const div = document.querySelector('.todo')
let arr = [];

logout.addEventListener("click", () => {

    signOut(auth)

    console.log("signed out");

})


onAuthStateChanged(auth, (user) => {
    if (user) {
        
        const uid = user.uid;
        form.addEventListener('submit', async (e) => {
            if (task.value=="") {
                alert("enter task")
                return
            }
            render(uid)
            e.preventDefault()
            try {
                const docRef = await addDoc(collection(db, "users"), {
                    task: task.value,
                    uid: uid,
                    postDate: Timestamp.fromDate(new Date()),

                })
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
                console.log(e);
            }

        })
        render(uid)

    } else {
        window.location = "./index.html"
    }

});

async function render(uid) {
    arr = []
    div.innerHTML = ""
    const querySnapshot = await getDocs(query(collection(db, "users"), where("uid", "==", uid), orderBy("postDate", "desc")));
    querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data(), docId: doc.id })
    });
    arr.forEach((item, index) => {
        div.innerHTML += `<div>${item.task}</div><button id="remove">Delte</button><button id="edit">Edit</button>`
    })
    const remove = document.querySelectorAll("#remove")
    const edit = document.querySelectorAll("#edit")

    remove.forEach((remove, index) => {
        remove.addEventListener("click", async () => {
            await deleteDoc(doc(db, "users", arr[index].docId));
            console.log("deleteted at" + index);
            render(uid);
        })
    })
    edit.forEach((edit, index) => {

        edit.addEventListener("click", async () => {
            const newVal =prompt("Enter Updated task")
            if (newVal =="") {

                alert("Enter A Task")
                return
            }
            await updateDoc(doc(db,"users",arr[index].docId), {
                task:newVal 
            });
            render(uid)
        })
    })

}







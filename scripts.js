



function DalyDate() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = today.getDate();
    document.getElementById("Hours").innerHTML = time;
    document.getElementById("day").innerHTML = weekday[today.getDate()] + " , " + months[today.getMonth()] + " " + day;

}

DalyDate();


//list



const List = {

    addItem() {
        let item = document.getElementById("new-task");
        let x = item.value;

        if (x!= "") {
            let ul = document.getElementById("list");
            let li = document.createElement('li');
            li.setAttribute('id', x);
            li.setAttribute('onclick','List.removeItem(this.id)')
            li.appendChild(document.createTextNode(x));
            ul.appendChild(li); 

            document.getElementById("new-task").focus();
        }
        else
        {
            alert("Write before adding");
        }               

    },

    removeItem(clicked_id){
        
        let x = document.getElementById(clicked_id);
        x.remove();
    },
    
}




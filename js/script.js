document.body.style.textAlign = 'center';

for (let i = 1; i < 6; i++) {

    //Create and place headers on body
    let header = document.createElement('h3');
    document.body.appendChild(header);
    header.innerText = 'Rad ' + i;

    let size = i * 0.5;
    header.style.fontSize = size + 'rem';
    header.style.color = 'hsl(240,89%,70%)';

    //Calculate the hue for each header
    let temp = i * 20;
    let hue = 104 + temp;
    header.style.backgroundColor = 'hsl(' + hue + ', 89%, 84%)';
}

//A div-container for all the lists
let container = document.createElement('div');
document.body.appendChild(container);

container.style.display = 'flex';
container.style.justifyContent = 'space-evenly';
container.style.border = '2px solid black'


//List number 1
let list = document.createElement('ul');
container.appendChild(list);
list.style.backgroundColor = 'hsl(240,70%,80%)';
list.style.listStyle = 'none';
list.style.display = 'flex';
list.style.flexDirection = 'column';
list.style.alignItems = 'center';
list.style.padding = '0.5rem';
list.style.width = '3rem';

for (j = 0; j < 10; j++) {
    let listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.innerText = j;
    listItem.style.width = '2rem';
    listItem.style.textAlign = 'left';

    let isWhite = j % 2 == 0;
    if (j == 4) {
        listItem.style.color = 'white';
    }

    else if (isWhite) {
        listItem.style.backgroundColor = 'black'
        listItem.style.color = 'white';
    }

    else {
        listItem.style.backgroundColor = 'white'
    }
}


//List number 2
let list2 = document.createElement('ul');
container.appendChild(list2);
list2.style.backgroundColor = 'hsl(240,70%,80%)';
list2.style.listStyle = 'none';
list2.style.display = 'flex';
list2.style.flexDirection = 'column';
list2.style.alignItems = 'center';
list2.style.padding = '0.5rem';
list2.style.width = '3rem';

for (j = 9; j > -1; j--) {
    let listItem2 = document.createElement('li');
    list2.appendChild(listItem2);
    listItem2.innerText = j;
    listItem2.style.width = '2rem';
    listItem2.style.textAlign = 'center';

    let isWhite = j % 2 == 0;
    if (j == 8) {
        listItem2.style.color = 'white';
    }

    else if (isWhite) {
        listItem2.style.backgroundColor = 'black'
        listItem2.style.color = 'white';
    }

    else {
        listItem2.style.backgroundColor = 'white'
    }
}


//List number 3
let list3 = document.createElement('ul');
container.appendChild(list3);

list3.style.backgroundColor = 'hsl(240,70%,80%)';
list3.style.listStyle = 'none';
list3.style.display = 'flex';
list3.style.flexDirection = 'column';
list3.style.alignItems = 'center';
list3.style.padding = '0.5rem';
list3.style.width = '3rem';

const numberArray = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
for (j = 0; j < numberArray.length; j++) {
    let listItem3 = document.createElement('li');
    list3.appendChild(listItem3);
    listItem3.innerText = numberArray[j];
    
    listItem3.style.width = '2rem';
    listItem3.style.textAlign = 'right';

    let isBlack = j % 2 == 0;
    if (isBlack) {
        listItem3.style.backgroundColor = 'black'
        listItem3.style.color = 'white';
    }
    else if (numberArray[j] == 'sex') {
        //Do nothing
    }

    else {
        listItem3.style.backgroundColor = 'white'
    }
}
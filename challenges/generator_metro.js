function* metroStation(){
    yield "MacKenzy";
    yield "Richmondhill";
    yield "Etobicoke";
    yield "Queens Park";
    yield "High park";
}

const getStop = metroStation();
const nextButton = document.querySelector("#next_button");
nextButton.addEventListener('click', () => {
    let currStop = getStop.next();
    
    if (currStop.done){
        console.log("We made it!");
        return
    }
    console.log(currStop.value);
})

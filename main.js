const NextButton = document.getElementById("next");
const BackButton = document.getElementById("back");
const TagIdTemplate = "carousel-img-";
const MAX_ITEMS = 15;

let Current_Item = 1;

function handleSwitch(nextOrBack) {
    console.log("Hello world!")
    let CurrentItem = document.getElementById(TagIdTemplate.concat((Current_Item + nextOrBack).toString()));
    let NextImage = document.getElementById(TagIdTemplate.concat(Current_Item.toString()));
    if (CurrentItem && NextImage) {
        console.log("Hello world! 2")
        CurrentItem.hidden = true;
        NextImage.hidden = false;
    }
}

NextButton.addEventListener("onclick", () => {
    console.log("Hello 3")
    if (Current_Item + 1 > MAX_ITEMS) { return; }
    Current_Item += 1;
    handleSwitch(1);
});

BackButton.addEventListener("onclick", () => {
    if (Current_Item - 1 <= 0) { return; }
    Current_Item -= 1;
    handleSwitch(-1);
});
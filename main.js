const NextButton = document.getElementById("next");
const BackButton = document.getElementById("back");
const TagIdTemplate = "carousel-img-";
const MAX_ITEMS = 15;

let Current_Item = 1;

function handleSwitch(nextOrBack) {
    let CurrentItem = document.getElementById(TagIdTemplate.concat(Current_Item.toString()));
    let NextItem = document.getElementById(TagIdTemplate.concat((Current_Item + nextOrBack).toString()));
    if (CurrentItem && NextItem) {
        Current_Item += nextOrBack;
        CurrentItem.parentElement.hidden = true;
        NextItem.parentElement.hidden = false;
    }
}

NextButton.addEventListener("click", () => {
    if (Current_Item + 1 > MAX_ITEMS) { return; }
    handleSwitch(1);
});

BackButton.addEventListener("click", () => {
    if (Current_Item - 1 <= 0) { return; }
    handleSwitch(-1);
});
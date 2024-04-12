var popoverTriggerList = [].slice.call(document.querySelectorAll(`[data-bs-toggle="popover"]`));
var popoverList = popoverTriggerList.map(function (popoverTriggerE1){
    return new bootstrap.Popover(popoverTriggerE1);
});
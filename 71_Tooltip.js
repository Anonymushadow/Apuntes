var tooltipTriggerList = [].slice.call(document.querySelectorAll(`[data-bs-toggle="mensaje"]`));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerE1){
    return new bootstrap.Tooltip(tooltipTriggerE1);
});
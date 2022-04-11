const fadeForeground = document.querySelector('.page-info-modal');
const infoButton = document.querySelector('.info-button');
const infoModalExitButton = document.querySelector('.page-info-modal p button');

function toggleFade(onOff){
    if(onOff == 'on'){
        if(!$(fadeForeground).hasClass('active')){
            $(fadeForeground).addClass('active');
        } else{
            return;
        }
    }
    if(onOff == 'off'){
        if($(fadeForeground).hasClass('active')){
            $(fadeForeground).removeClass('active');
        } else{
            return;
        }
    }
}

$(document).keydown(()=>{
    return toggleFade('off');
});

$(infoModalExitButton).mouseup(()=>{
    return toggleFade('off');
});

console.log(infoButton);

$(fadeForeground).click((e)=>{
    if(e.target == fadeForeground){
        return toggleFade('off');
    } else{
        return;
    }
});

$(infoButton).mouseup(()=>{
    return toggleFade('on');
});
// Implemente a função catAndMouse que verifica qual gato está mais perto do rato

function catAndMouse (mouse, cat1, cat2) {
    if (cat1 - mouse > cat2 - mouse) {
        return 'cat1';
    } else if(cat2 - mouse > cat1- mouse){
        return 'cat2';
    } else {
        return 'os gatos trombam e o rato foge';
    }
}
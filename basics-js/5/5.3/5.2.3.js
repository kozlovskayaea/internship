let str,
    maxlength;

function truncate(str, maxlength) {

    if (str.length > maxlength) {
        
        let newStr = str.slice(0, maxlength - 1) + '…';
        return newStr;
    }

    return str;
}

// Нужно было обрезать до 'maxlength - 1'.
// В качестве многоточия использовать не три отдельных точки, а специальный символ юникода.
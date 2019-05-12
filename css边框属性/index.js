var img = document.getElementById('img');
    function setBorder_Outline(btnId, id, styleName){
        var button = document.getElementById(btnId);
        var elem = document.getElementById(id);
        for(let i = 0; i < elem.children.length; i++){
            elem.children[i].onclick = function(){
                button.innerText = elem.children[i].innerText;
                img.style[styleName] = elem.children[i].innerText;
                span = document.createElement('span');
                span.className = 'caret';
                button.append(span);  
            }
        }
    }
setBorder_Outline('dropdownMenu1', 'dropdown-menu1', 'borderColor');
setBorder_Outline('dropdownMenu2', 'dropdown-menu2', 'borderStyle');
setBorder_Outline('dropdownMenu3', 'dropdown-menu3', 'borderWidth');
setBorder_Outline('dropdownMenu4', 'dropdown-menu4', 'outlineColor');
setBorder_Outline('dropdownMenu5', 'dropdown-menu5', 'outlineWidth');
setBorder_Outline('dropdownMenu6', 'dropdown-menu6', 'borderRadius');
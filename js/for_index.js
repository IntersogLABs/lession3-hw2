
/*function logFolder(object, level){
 if(level == undefined) level="";
 if (object.name){
 console.log(level+object.name)
 }
 if (object.files) {
 logFolder(object.files,level+"\t")} else
 if ( Array.isArray(object) ) {
 for (var i = 0; i < object.length; i++)
 logFolder(object[i], level)
 }

 }*/


function logFolder(folder, parent){

    if (folder.name) {
        //console.log(level+object.name)
        var LI = document.createElement("li");
        LI.innerHTML = folder.name;

        if(parent == undefined) {
            var UL = document.createElement("ul");
            parent = UL
        }

    }


    if (folder.files) {
        parent.appendChild(LI)
        logFolder(folder.files, parent)}

    else if ( Array.isArray(folder) ) {
        var UL = document.createElement("ul");
        parent.appendChild(UL)
        var next = UL

        for (var i = 0; i < folder.length; i++) {
            logFolder(folder[i], next)
        }
    }  else {
        parent.appendChild(LI) }

    return parent;
}


window.onload = function() {
    var folder = {
        name: 'папка 1',
        files: [
            {name: 'file1'},
            {name: 'file2'},
            {
                name: 'папка 2', files: [
                {
                    name: 'папка 3', files: [
                    {name: 'file3'},
                    {name: 'file4'}
                ]
                },
                {
                    name: 'папка 44', files: [
                    {
                        name: 'папка 5', files: [
                        {name: 'file6'},
                        {name: 'file7'},
                        {name: 'папка 6', files: []},
                    ]
                    },
                ]
                }
            ]
            },
            {name: 'File8'},
            {
                name: 'FOlderxxxX', files: [
                {name: 'File9'},
                {name: 'фывфы 10'}
            ]
            }
        ]
    };


    document.getElementById('show_task').appendChild(logFolder(folder));




}


/*---------------------------------------------------------------------------------------------------------*/


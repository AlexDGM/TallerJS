document.addEventListener("DOMContentLoaded", function () {
    function createProjectTable() {
        var table = document.createElement("table");
        var table = document.createElement("table");

        
        var Fila = document.createElement("tr");
        var Colum = document.createElement("td");
        Colum.colSpan = 3;
        Colum.innerHTML = "<strong>15 + Web Design Projects with Source Code..!</strong>";
        var hr = document.createElement("hr");
        
        Fila.appendChild(Colum);
        table.appendChild(Fila);
        table.appendChild(hr);
            
        
        var projects = [
            { name: "Cecar", image: "Imagenes/cecar.png" },
            { name: "Facebook", image: "Imagenes/Facebook.png" },
            { name: "Instagram", image: "Imagenes/Instagram.png" },
            { name: "Microsoft", image: "Imagenes/Microsoft.png" },
            { name: "Twich", image: "Imagenes/twich.png" },
            { name: "Youtube Ecommerce", image: "Imagenes/Youtube.png" }
        ];
        
        for (var i = 0; i < projects.length; i += 3) {
            var row = document.createElement("tr");
            for (var j = i; j < i + 3 && j < projects.length; j++) {
                var cell = document.createElement("td");
                
                var img = document.createElement("img");
                img.src = projects[j].image;
                img.alt = projects[j].name;
        
                var sourceCodeButton = document.createElement("input");
                sourceCodeButton.type = "button";
                sourceCodeButton.value = "Source Code";
        
                var previewDemoButton = document.createElement("input");
                previewDemoButton.type = "button";
                previewDemoButton.value = "Preview Demo";
        
                cell.appendChild(img);
                cell.appendChild(document.createElement("br"));
                cell.appendChild(document.createTextNode(projects[j].name));
                cell.appendChild(sourceCodeButton);
                cell.appendChild(previewDemoButton);
        
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        
        
        table.style.borderCollapse = "separate";
        table.style.borderSpacing = "10px";
        
     
        document.body.appendChild(table);
        
        document.body.appendChild(table);
    }

    createProjectTable();
});

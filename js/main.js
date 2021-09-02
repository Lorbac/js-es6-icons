const icons = [
    {
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    },
    {
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    },
    {
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    },
    {
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    },
    {
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    },
    {
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    },
    {
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    },
    {
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
    },
    {
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    },
    {
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    },
    {
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    },
    {
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
    },
    {
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    },
    {
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    },
    {
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    },
    {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
    },
];

const colors = [
    "blue",
    "orange",
    "purple"
]



// SCRITTO CON L'ARROW FUNCTION

// icons.forEach((element) => {
//     iconsContainer.innerHTML += `
//     <div>
//         <i class="fas fa-${element.name}" style="color:  ;"></i>
//         <div class="title">${element.name.toUpperCase()}</div>
//     </div>
//     `;
// });


const iconsContainer = document.getElementById("icons");

const coloredArray = colorIcons(icons, colors);
print(coloredArray, iconsContainer);

const types = getTypes(coloredArray);
const select = document.getElementById("type");

printOptions(types, select);

// AL CHANGE MOSTRARE SOLO LE ICONE FILTRATE

select.onchange = function(element) {
    // console.log(element.type.value);
    const filtered = filterValues(icons, element.target.value);
    console.log(filtered);


    print(filtered, iconsContainer);
};



// FUNZIONI ----------------------------------------------------------


// FUNZIONE PER STAMPARE A VIDEO

function print(array, container) {
    container.innerHTML = "";
    
    array.forEach((element) => {
        const { name, family, prefix, color } = element;
        container.innerHTML += `
        <div>
        <i class="${family} ${prefix + name}" style="color:${color} ;"></i>
        <div class="title">${name.toUpperCase()}</div>
        </div>
        `;
    });
}

// FUNZIONE PER PRENDERE CREARE UN ARRAY CON SOLO I "TYPES" UNIVOCAMENTE

function getTypes(array) {
    const types = [];

    array.forEach((element) => {
        if (types.includes(element.type) == false) {
            types.push(element.type)
        }
    });

    return types;
}

// FUNZIONE PER ASSEGNARE UN COLORE IN BASE AL "TYPE"

function colorIcons(array, colors) {
    const types = getTypes(array);
    
    const coloredArray = array.map((element) => {
        const indexTypes = types.indexOf(element.type)

        element.color = colors[indexTypes];
        return element;
    });

    return coloredArray;
}

// FUNZIONE PER STAMPARE A VIDEO LE OPZIONI

function printOptions(array, select) {
    array.forEach((element) => {
        select.innerHTML += `<option value="${element}">${element}</option>`
    });
}

// FUNZIONE PER FILTRARE LE ICONE

function filterValues(array, type) {
    const filteredIcons = array.filter((element) => {
        if (element.type === type) {
            return true
        }

        return false;
    });
    
    if (type === "") {
        return array;
    }

    return filteredIcons;
}
import {useState} from 'react';

export function useModifications(defaultModifications){
    const [modifications, setModifications] = useState(defaultModifications || getDefaultModifications())

    function checkModification(index){
        const newModifications = [...modifications];
        newModifications[index].checked = !newModifications[index].checked;
        setModifications(newModifications)
    }

    return {
        checkModification,
        modifications
    }
}

const modificationsList = [
    "Add Shrimp",
    "Add Chicken",
    "Extra Meat",
    "Extra Sauce",
    "No Sauce",
    "Sauce On Side",
    "Gluten-Free",
    "Dairy Allergy",
    "No Meat",
];

function getDefaultModifications () {
    return modificationsList.map(modification => ({
        name: modification,
        checked: false    
    }));
}
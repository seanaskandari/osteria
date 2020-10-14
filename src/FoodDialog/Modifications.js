import styled from 'styled-components';
import React from 'react';

const ModificationGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
`
const ModificationCheckbox = styled.input`
margin-right: 10px;
cursor: pointer;
`

const CheckboxLabel = styled.label`
cursor: pointer;
`

export function Modifications({modifications, checkModifications }) {
    return (
    <ModificationGrid>
        {modifications.map((modifications, i) => (
        <CheckboxLabel>
            <ModificationCheckbox 
            type="checkbox"
            checked={modifications.checked}
            onClick={() => {
                checkModifications(i);
            }}
            />
            {modifications.name}
        </CheckboxLabel>))}
    </ModificationGrid>);
}
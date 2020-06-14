import React from 'react';
import {create} from 'react-test-renderer';
import Paginator from './Paginator';

describe("Paginator components test", () => {
    test("pages count is 11 while has to be only 10", () =>{
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}/>);
        const root = component.root;
        let spans = root.findAllByType('span');
        expect (spans.length).toBe(10);
    });
    test("buttons NEXT and LAST shoud be present if pages count more then 10", () =>{
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}/>);
        const root = component.root;
        let buttons = root.findAllByType('button');
        expect (buttons.length).toBe(2);
    });
});
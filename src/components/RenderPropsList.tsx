import React from "react";

type Props<Item> = {
    items: Item[];
    renderItem: (item: Item) => React.ReactNode;
}

export function List<Item>({items, renderItem}: Props<Item>){
    return <ul>{items.map(renderItem)}</ul>
}

const CustomList = ({items, renderItem}:Props<any>) => {
    return <ul>{items.map(renderItem)}</ul>
}

const people = [{name:"Mark", age:12},{name:"Lois",age:15}];

const PeopleList = () => {
    return <CustomList items={people}
                 renderItem={(p)=>(
                     <li key={p.name}>
                         <span>{p.name} {p.age}</span>
                     </li>
                 )} />
};

export default PeopleList;
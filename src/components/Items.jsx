import React from "react";
import Item from "./Item";

export default function Items(props){
    return(
        <main>
            
            {props.allItems.map(el=>(
                <Item key={el.id} item2={el} onAdd={props.onAdd}
                // <<<!!!>>>!!!>>> ссылка из App.js из return(Items...)
                onShowItem={props.onShowItem}   />

                // ###!!!###!!! - далее переходим просто в Итем джиисикс 






                // <h1>{el.title}</h1> - это было активно ранее
                // el как в цикле for элемент i - зацикливает вывод map - что бы у нас рпошелся по массиву
                // {props.allItems} - данные из App.js 
            ))}
            
        </main>
    );
}
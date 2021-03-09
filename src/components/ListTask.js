import React from 'react';
import '../css/ListTask.css';

const ListTask = (props) => {
    const items=props.items;
    const listItems = items.map(items => 
        {
            return <div className="list" key={items.key}>
                <p>
                    

                    <input type="text" id={items.key}  value={items.text} onChange={(e)=>{
                        props.setUpdate(e.target.value,items.key) 
                    }} />
                    
                    
                    <span>
                        <i className="fa fa-trash delete-icon" onClick={() => {
                            props.deleteItem(items.key)
                        }} ></i>
                    </span>

                    <i className="check-icon">
                        <input type="checkbox" />
                    </i>
                </p>
            </div>
        })

        return <div>
            <i duration={300} easing="ease-in-out">
                {listItems}
            </i>
        </div>;
}

export default ListTask;

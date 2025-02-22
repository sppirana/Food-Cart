import React from 'react'
import { ParentComponent } from './ParentComponent';
export const GrandparentComponent=()=>{
    const data="Hellow from Grandparent"
    return <div classname="box"><ParentComponent/>
            </div>
    
};
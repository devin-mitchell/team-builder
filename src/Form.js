import React, { useState } from 'react'


export default function Form({players, values, update, submit}) {

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value);

    }


    return(
        <form>
            <h2>Add new player</h2>
            <label>Name
                <input 
                    type="text" 
                    onChange={onChange}
                    value={values.name}
                    name="name"
                    placeholder="name"
                    maxLength="25"
                />
           </label>
           <label>Height
                <input 
                    type="number" 
                    onChange={onChange}
                    value={values.height}
                    name="height"
                    placeholder="height(in)"
                    maxLength="3"
                />
           </label>
           <label>Age
                <input 
                    type="number" 
                    onChange={onChange}
                    value={values.age}
                    name="age"
                    placeholder="age"
                    maxLength="3"
                />
            </label>
            <label>Position
                <select 
                 onChange={onChange}
                 value={values.position}
                 name="position">
                     <option value='' disabled>--position</option>
                     <option value = 'Point Guard'>Point Guard</option>
                     <option value = 'Shooting Guard'>Shooting Guard</option>
                     <option value = 'Small Forward'>Small Forward</option>
                     <option value = 'Power Forward'>Power Forward</option>
                     <option value = 'Center'>Center</option>
                </select>
            </label>
            <div>
                <button onClick={submit}>SUBMIT</button>
            </div>
        </form>
    )
}

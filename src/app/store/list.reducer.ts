import { createReducer, on } from "@ngrx/store";
import { entryAdder, entryCompleteToggle } from "./list.action";

export const EntriesReducer = createReducer(
    [],
    on(entryAdder, (state, action) => {
        return [...state, { desc: action.desc, completed: false }];
    }),
    on(entryCompleteToggle, (state: { desc: string, completed: boolean }[], action) => {
        console.log("here")
        // const nArr = [...state];
        // nArr[action.index].completed = !nArr[action.index].completed;
        // return nArr;

        const nArr = state.map((entry, index) => {
            if(index === action.index){
                return { ...entry, completed: !entry.completed };
            }
            return entry;
        })
        return nArr;
    })
)





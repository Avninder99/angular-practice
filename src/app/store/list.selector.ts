export const EntriesSelector = (state : { Entries: { desc: string, completed: boolean }[] }) => {
    return state.Entries;
};
// Type of Action
export const EDIT_USER = "EDIT_USER"

// Action
export const editUser = (monster) => (
    {
        type: EDIT_USER, // Mandatory
        payload: monster // Optional
    }
);


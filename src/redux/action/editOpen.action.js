// Type of Action
export const EDIT_OPEN_USER = "EDIT_OPEN_USER"

// Action
export const editOpenUser = (open) => (
    {
        type: EDIT_OPEN_USER, // Mandatory
        payload: open // Optional
    }
);


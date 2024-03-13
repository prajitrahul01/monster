// Type of Action
export const SEARCH_USER = "SEARCH_USER"

// Action
export const searchUser = (searchData) => (
    {
        type: SEARCH_USER, // Mandatory
        payload: searchData // Optional
    }
);


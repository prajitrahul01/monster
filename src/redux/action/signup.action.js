// Type of Action
export const SIGNUP_USER = "SIGNUP_USER"

// Action
export const signupUser = (signupData) => (
    {
        type: SIGNUP_USER, // Mandatory
        payload: signupData // Optional
    }
);


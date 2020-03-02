export default (state, action) => {
    switch (action.type) {
        // transactions
        case 'GET_TRANSACTIOS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }

        // login
        case 'LOGIN':
            return {
                ...state,
                data: [...state.data, action.payload],
                success: true,
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                login: {
                    success: false,
                    error: action.payload,
                    status: action.status,
                }
            }
        case 'LOGOUT':
            return {
                ...state,
                success: false,
            }

        default:
            return state
    }
}
// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type : 'SET_TEXT_FILTER',
    text
});

// SORT_BY_AMOUNT
export const sortByAmount = (sortBy = 'amount') => ({
    type : 'SORT_BY_AMOUNT',
    sortBy
});

// SORT_BY_DATE
export const sortByDate = (sortBy = 'date') => ({
    type : 'SORT_BY_DATE',
    sortBy
});

// SET START DATE
export const setStartDate = (startDate = undefined) => ({
    type : 'SET_START_DATE',
    startDate,
});

// SET END DATE
export const setEndDate = (endDate = undefined) => ({
    type : 'SET_END_DATE',
    endDate,
});
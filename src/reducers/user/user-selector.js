import {createSelector} from 'reselect'

export const selectUser = state =>state.user 

export const selectUserDetails = createSelector(
    [selectUser],
    user=> user.user
)
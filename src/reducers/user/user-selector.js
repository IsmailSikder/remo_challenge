import { createSelector} from "reselect"
const user = state=>state.user

export const selectUserDetails = createSelector(
    [user],
    user=> user.user
)
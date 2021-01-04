import { createSelector} from "reselect"

const tablesConfig = state => state.tables

export const selectTables = createSelector(
    [tablesConfig],
    tables=>tables.theaterTables
)
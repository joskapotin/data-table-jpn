import table from "../mock/table"
import { stall } from "../utilities/helpers"

/**
 * It get datatable param from a fake api
 */
export async function getEmployees() {
  await stall(1500)
  return table()
}

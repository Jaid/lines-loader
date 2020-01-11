import a from "./a.lines"
import bUnsorted from "./b.lines"
import bSorted from "./b.lines?sort"
import pick from "./r.lines?randomPick"

export default {
  a,
  bUnsorted,
  bSorted,
  pick: pick(),
}
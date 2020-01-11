import a from "./a.lines"
import bUnsorted from "./b.lines"
import bSorted from "./b.lines?sort"
import pick from "./r.lines?randomPick"
import unique from "./u.lines?unique"

export default {
  a,
  bUnsorted,
  bSorted,
  unique,
  pick: pick(),
}
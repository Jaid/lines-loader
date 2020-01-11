Option|Default|Description
---|---|---
nonEmpty|`true`|If `true`, empty lines will be skipped. If option `trim` is `true`, any lines that only contain whitespace will be also skipped.
randomPick|`false`|If `true`, the exported value will be a function instead of a `string[]`. That function does not take any arguments an returns a random pick from the extracted lines.
sort|`false`|If `true`, extracted lines will be sorted alphabetically.
trim|`true`|If `true`, extracted lines' left and right whitespace will be trimmed.
unique|`false`|If `true`, there will not be any duplicates in extracted lines.

All options can be overwritten in any asset import by appending a query string.
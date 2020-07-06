---
id: picker-item
title: Picker.Item
---

Individual selectable item in a [Picker](docs/picker.md).

### Props

- [`label`](docs/picker-item.md#label)
- [`color`](docs/picker-item.md#color)
- [`testID`](docs/picker-item.md#testid)
- [`value`](docs/picker-item.md#value)

---

# Reference

## Props

### `label`

Text to display for this item.

| Type   | Required |
| ------ | -------- |
| string | Yes      |

### `color`

Color of this item's text.

| Type               | Required |
| ------------------ | -------- |
| [color](docs/colors.md) | No       |

### `testID`

Used to locate the item in end-to-end tests.

| Type   | Required |
| ------ | -------- |
| string | No       |

### `value`

The value to be passed to picker's `onValueChange` callback when this item is selected. Can be a string or an integer.

| Type | Required | Platform |
| ---- | -------- | -------- |
| any  | No       | Android  |

---
page: true
---

# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shikiji](https://github.com/antfu/shikiji), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::Note
This is an info box.
::

::Tip
This is a tip.
::

::Warning
This is a warning.
::

::Caution
This is a dangerous warning.
::

::Important
This is a details block.
::
```

**Output**

::Note
This is an info box.
::

::Tip
This is a tip.
::

::Warning
This is a warning.
::

::Caution
This is a dangerous warning.
::

::Important
This is a details block.
::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

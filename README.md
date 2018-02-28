# Indent 2-to-4
Converts indentation from tab or 2 spaces into 4 spaces.

![Demostration of using this extension](https://raw.githubusercontent.com/compulim/vscode-indent-4to2/master/demo.gif)

## Usage
You can use both command palette or keyboard shortcuts to converts indentation. We recommend bind to keyboard shortcuts if you need to convert indentation frequently.

### Run with Command Palette

* Press `F1` or `Ctrl+Shift+P` for Command Palette
* Type or find "Convert indentation from tab or 2 spaces into 4 spaces"

### Binding to keyboard shortcuts

* File > Preferences > Keyboard Shortcuts
* Append the following into `keybindings.json`

```js
{
    "key": "ctrl+shift+2",
    "command": "2to4.convert2to4",
    "when": "editorFocus"
}
```

## Contributions
Love this extension? [Star](https://github.com/compulim/vscode-4to2/stargazers) us!

Want to make this extension even more awesome? [Send us your wish](https://github.com/compulim/vscode-4to2/issues/new/).

Hate how it is working? [File an issue](https://github.com/compulim/vscode-4to2/issues/new/) to us.

'use strict';

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // console.log('Congratulations, your extension "4to2" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    context.subscriptions.push(vscode.commands.registerTextEditorCommand('2to4.convert2to4', function (textEditor, edit) {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        // vscode.window.showInformationMessage('Hello World!');
        const document = textEditor.document;

        for (let lineNumber = 0, lineCount = document.lineCount; lineNumber < lineCount; lineNumber++) {
            const
                line = document.lineAt(lineNumber).text;

            edit.replace(
                new vscode.Range(lineNumber, 0, lineNumber, line.length),
                convertIndent2to4(line)
            );
        }
    }));
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}

exports.deactivate = deactivate;

function convertIndent2to4(line) {
    const
        // only get lines starting with a space
        leadingSpaces = /^\s*/.exec(line)[0],
        // replace with 4 spaces
        newLeadingSpaces = leadingSpaces.replace(/[ ]{2}|\t/g, '    ');

    return newLeadingSpaces + line.replace(/^\s+/, '');
}

exports.convertIndent2to4 = convertIndent2to4;
/*
 * @Autor: junhui li
 * @Date: 2020-12-16 10:01:35
 * @LastEditors: junhui li
 * @LastEditTime: 2020-12-17 16:57:50
 * @Description: 
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import main from './main';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "tomato-time" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('tomato-time.tomatoTime', () => {
		// The code you place here will be executed every time your command is executed
		vscode.window.showInformationMessage("开始专注",'20分钟','25分钟','30分钟', '取消')
        .then((data:string | undefined) => {
					if (data === '取消'){
						vscode.window.setStatusBarMessage('欢迎下次使用');
					}else{
            main(data);
					}
				});
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from tomato-time!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

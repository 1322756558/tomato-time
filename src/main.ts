/*
 * @Autor: junhui li
 * @Date: 2020-12-16 10:15:17
 * @LastEditors: junhui li
 * @LastEditTime: 2020-12-17 17:56:51
 * @Description: 主文件
 */
import * as vscode from 'vscode';

export default function main(selectTime: string | undefined){
  vscode.window.setStatusBarMessage('开始计时');
  switch(selectTime){
    case '20分钟':
      timing(20, 1);
      break;
    case '25分钟':
      timing(25, 1);
      break;
    case '30分钟':
      timing(30, 1);
      break;
    case '5分钟':
      timing(5, 1, false);
      break;
    case '10分钟':
      timing(10, 1, false);
      break;
  }
}

function timing(time: number, num: number, work:boolean=true){
  let remainingTime = time - num;
  vscode.window.setStatusBarMessage('番茄时钟：剩余'+(remainingTime+1)+'分钟');
  setTimeout(()=>{
    if(remainingTime !== 0){
      timing(time, num+1);
    }else{
      if(work){
        vscode.window.showInformationMessage('专注结束，休息一下吧');
        vscode.window.showInformationMessage("休息一下？",'5分钟','10分钟', '取消')
          .then((selectTime)=>{
            main(selectTime);
          });
      }else{
        vscode.window.showInformationMessage('休息结束');
        vscode.window.showInformationMessage('是否继续开始专注？','20分钟','25分钟','30分钟', '取消')
          .then((selectTime)=>{
            main(selectTime);
          });
      }
    }
  }, 60*1000);
}
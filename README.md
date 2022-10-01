2022/08/21 ~ 25
1. 分解靜態組件
2. 建立 動態展示 =>  a. 生成動態 List
                    b. 將輸入框的資料傳遞List
3. 設定item的hover and 顯示刪除按鈕
4. 設定item的check與App State連動
5. 設定Header   => a. 新增刪除功能與 App連動
                   b. 最後清空輸入框
6. 設定Footer   => a. 動態調整已完成個數與總數
                   b. 將全選框框連動
                   c. 清除已完成的List

App 存取一堆要做的事，傳遞給List
App 又傳遞一個函式給Header，Header在按下回車時將listObj利用函式傳遞回去
App 收到Header的傳遞導致App狀態更新
App 狀態一更改就重新調用App內的render
由於List 是App的子組件，進而引發List重新渲染
輸入資料就顯示到畫面上

Q：check and defaultChecked 差異

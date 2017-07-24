# Git 使用

## 創建git 用戶名 及 mail

```
git config --global user.name "My Name"
git config --global user.email myEamil
```
## 創建一個新倉庫 git init
```
git init
```
## 檢查狀態 git status
```
git status
```
## 暫存 git add
```
git add hello.text
```
> 如要提交目錄下的所有內容
```
git add -A
```
> 可再次使用git status 查看
```
$ git status
On branch master
Initial commit
Changes to be committed:
  (use "git rm --cached ..." to unstage)
  new file:   hello.txt
```
## 提交 git commit
```
git commit -m "訊息內容"
```
## 連接遠端倉庫 - git remote add
```
git remote add origin https://psycho909/handlerbars-demo.git
```
## 上傳到服務器 - git push
> git push命令會有兩個參數，遠端倉庫的名字，以及分支的名字：
```
git push origin master
```
## Clone 倉庫 - git clone
```
git clone https://psycho909/handlerbars-demo.git
```
## 從服務器上拉取代碼 - git pull
```
git pull origin master
```
# 分支
## 創建分支
```
git branch amazing_new_feature
```
## 切換分支 - git checkout
> 單獨使用 git branch 可查看目前所有分支狀態:
```
git checkout amazing_new_feature
```
## merge分支 - git merge
> 在 amazing_new_feature 分支中增加一個footer.htaml
```
git add footer.html
git commit -m "add footer.html"
```
> 此時回到 master 分支
```
git checkout master
```
> 會發現 新創建的 footer.html 不見了，因為master分支上沒有footer.html
> 把 master & amazing_new_feature 合併後 master 就有footer.html
```
git merge amazing_new_feature
```
## 刪除分支
```
git branch -d amazing_new_feature
```
## 文件更動
> 刪除文件實需要使用git rm 檔名 來通知倉庫刪除文件
```
git rm 檔名
git commit -m "XXXX"
git push origin master
```
> 當多個文件刪除時，並且確定刪除可以使用 git add -u
```
git add -u
git commit -m "XXX"
git push origin master
```
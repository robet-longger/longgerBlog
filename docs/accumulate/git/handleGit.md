# git 步骤
## 一.Git密钥配置
### Github 安装


[下载 git Windows 版](https://git-scm.com/download/win)
* 创建SSH Key：创建ssh key时会提示自定名称和push时的密码（不是git登录密码），一般推荐略过，直接三个回车，如果创建成功会出来一个有图案的小框框。
```
$ ssh-keygen -t rsa -C "your_email@example.com" // 此处email可任意，不一定要gitLab登录邮箱
```

* 3.）查看SSH Keycopy公钥内容到gitLab里，添加进去。

```
$ cat ~/.ssh/id_rsa.pub
```
* 4.）测试SSH Key

```
$ ssh -T "git@xxx.xxx.com"
```

## 二.全局配置
```
$ git config --global '你的用户名'
$ git config --global '你的邮箱'
```
## 三、仓库管理
### 1.初始化
* 初始化后，目录下会生成.git隐藏文件夹，图标显示git可控，.git目录下有一个hooks，里面可以对预提交信息做一些规范和限制
```
git init
git add .
git commit -m '提交描述'
git remote add origin '你的远程仓库地址'
git push -u origin master
```
### 2.不是初始化

```
git status
git add .
git commit -m '提交描述'
git push
```


[参考GIT省事小窍门](https://segmentfault.com/a/1190000018662392)







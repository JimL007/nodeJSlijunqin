

//ECMAJS-5 的 普通函数定义写法:
var f = function (a,b) {
    return a + b;
}

//ECMAJS-6 的 普通函数定义写法:
var k = (a,b)=>{
    return a + b; //函数体
}

//函数体内的this的指向?????


//关于linux的一些常用命令
// cd命令
// cd /root/Docements # 切换到目录/root/Docements
// cd ./path          # 切换到当前目录下的path目录中，“.”表示当前目录
// cd ../path         # 切换到上层目录中的path目录中，“..”表示上一层目录
//
//
// ls命令
// ls -l ：列出长数据串，包含文件的属性与权限数据等
// ls -a ：列出全部的文件，连同隐藏文件（开头为.的文件）一起列出来（常用）
// ls -d ：仅列出目录本身，而不是列出目录的文件数据
// ls -h ：将文件容量以较易读的方式（GB，kB等）列出来
// ls -R ：连同子目录的内容一起列出（递归列出），等于该目录下的所有文件都会显示出来
//
//
// cp命令
// cp -a ：将文件的特性一起复制
// cp -p ：连同文件的属性一起复制，而非使用默认方式，与-a相似，常用于备份
// cp -i ：若目标文件已经存在时，在覆盖时会先询问操作的进行
// cp -r ：递归持续复制，用于目录的复制行为
// cp -u ：目标文件与源文件有差异时才会复制
//
//
// mv命令
// mv -f ：force强制的意思，如果目标文件已经存在，不会询问而直接覆盖
// mv -i ：若目标文件已经存在，就会询问是否覆盖
// mv -u ：若目标文件已经存在，且比目标文件新，才会更新
//
// rm命令
// rm -f ：就是force的意思，忽略不存在的文件，不会出现警告消息
// rm -i ：互动模式，在删除前会询问用户是否操作
// rm -r ：递归删除，最常用于目录删除，它是一个非常危险的参数




//关于git的一些常用命令
//
// 1.3.1 用户信息
// 通过如下命令来配置用户名和Email
// git config --global user.name "Example Surname"
//
// git config --global user.email "your.email@gmail.com"
// # Set default so that all changes are always pushed to the repository
// git config --global push.default "matching"
//
//
// 获取Git配置信息，执行以下命令：
// git config --list
//
//
// 1.3.2 高亮显示
// 以下命令会为终端配置高亮
// git config --global color.status auto
// git config --global color.branch auto

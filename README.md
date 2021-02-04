# cli-tiny-img
## 背景
##### 做活动页面时经常遇到压缩图片需求，一般使用tinypng.com手动上传待压缩图片，然后删除（重命名）本地图片，然后下载压缩后图片，如首次压缩不满足大小需要，还要重复上述三步；如图片太多，还需分批压缩（tinypng.com压缩数量限制）。

## 目标
##### 上传、删除（重命名）、下载到本地，cli指令化调用，支持设置压缩次数，无需重复手动，技术hack方式跳过数量限制

## 技术方案
- 上传、下载调用tinypng接口
- fs 覆盖写入图片文件更新
- 支持配置压缩次数
- 随机xff头跳过数量限制

## 使用说明
```javascript { .theme-peacock }
// 下载rmb指令工具
npm i tinypng-com-cli -g
```
### 压缩单张图片
```javascript { .theme-peacock }
// imgPath为图片文件地址
tinyimg ${imgPath}
```

### 压缩整个图片目录
```javascript { .theme-peacock }
// imgDirPath为图片目录地址
tinyimg ${imgDirPath}
```

### 设置压缩次数
```javascript { .theme-peacock }
// -c 后跟具体次数
tinyimg ${imgDirPath} -c 3 //压缩3遍
```

### 递归处理图片目录中目录
```javascript { .theme-peacock }
// -d 需要递归处理
tinyimg ${imgDirPath} -d
```

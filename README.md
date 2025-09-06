# react 实战项目

## 创建项目

- nodejs
- npm, mirror, https://registry.npmmirror.com
- vscode, webstorm
- vite 创建 react 项目, https://cn.vite.dev/
- typescript

### vite 创建项目

```shell
npm create vite@latest .
```

### eslint

vite 自动集成了 eslint

### prettier

https://prettier.io/

**安装 prettier**

```shell
npm i prettier -D
```

**检查并修改代码**

```shell
npx prettier . --write
```

**只检查**

```shell
npx prettier . --check
```

### husky

https://typicode.github.io/husky/

- git hook 工具
- 在 git commit 之前执行自定义的命令
- 可检查代码风格

**安装**

```shell
npm install --save-dev husky
```

**初始化**

```shell
npx husky init
```

执行 `init` 命令后，会创建一个 `.husky` 文件夹。

### commitlint

https://commitlint.js.org/

**安装**

```shell
npm install -D @commitlint/cli @commitlint/config-conventional
```

**配置**

```.husky/commit-msg
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
```

## React 基本知识

- 组件
- hooks
    - useState
    - useEffect
    - useRef
    - useMemo
    - useCallback
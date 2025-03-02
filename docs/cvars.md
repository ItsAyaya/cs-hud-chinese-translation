# 一些有用的CS控制台指令
注：在游戏中按~键打开控制台（可能需要在游戏中打开相应选项）
在某些情况下，这些用于《反恐精英》游戏控制台的命令可能会有所帮助。

## cl_draw_only_deathnotices
这条指令能够隐藏游戏内原生HUD，除了击杀信息以外的信息都会被隐藏
本HUD并不会包含击杀信息（因为击杀信息并没有在游戏状态集成中提供），因此你需要使用游戏内HUD的击杀信息

例如（在控制台输入）:
```
cl_draw_only_deathnotices true
```

## safezonex, safezoney
这些指令将会移动游戏内HUD向“内部”一点
safezonex 将使 击杀信息 与 
`玩家存活`元素和右侧边栏垂直排列。
safezoney 将使 击杀信息 与 
`玩家存活`元素水平对齐。
例如 (对于16:9比例):
```
safezonex 0.988
safezoney 0.98
```

## cl_spec_show_bindings
该命令将隐藏屏幕底部的小文字，这些文字会告诉你按哪个按钮可以切换 X 光等等。

例如:
```
cl_spec_show_bindings false
```

## fps_max
如果出现性能问题，例如 HUD 中的动画不流畅。
限制游戏的 FPS 可以为 HUD 释放一些 GPU 资源。

例如:
```
fps_max 144
```

# cs-hud
用于《反恐精英 2》（和 CS:GO）比赛直播的免费、可定制的观众 HUD。  
ItsAyaya翻译，基于最新版（1.6.1）翻译  
![](assets/cs2-hud-screenshot-1080.png)
若有问题请在此仓库提出issue！感谢！  
请在使用这个项目的时候，在明显的位置展示出原作者的[Github项目链接](https://github.com/drweissbrot/cs-hud)  
本人不才，我只会翻译其中的文本，若遇到了技术性问题，还请多多指教，我会尽最大努力学习并修改！
## 开始使用
最简单的方法是使用预打包的二进制文件，但将来还会有其他选择。
<!-- TODO write, then link to more in-depth guides for running via yarn, docker -->

1. 如果你使用Windows，下载 [`cs-hud-server-win.exe`](https://github.com/ItsAyaya/cs-hud-chinese-translation/releases/download/1.0.0/cs-hud-server-win.exe) 或者Linux版本[`cs-hud-server-linux`](https://github.com/ItsAyaya/cs-hud-chinese-translation/releases/download/1.0.0/cs-hud-server-linux) ，你可以在原作者的[Releases tab](https://github.com/drweissbrot/cs-hud/releases/latest)中查看更新日志。
2. 并且下载 [`gamestate_integration_drweissbrot_hud.cfg`](https://github.com/ItsAyaya/cs-hud-chinese-translation/releases/download/Latest/gamestate_integration_drweissbrot_hud.cfg)。
3. 打开你的CS2游戏所在文件夹并打开 `game/csgo/cfg` 子文件夹, 游戏在Windows系统中的默认的存放位置为 `C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo\cfg`. 你也可以在Steam中右击CS2, 选择`属性...`, `已安装文件`, `浏览...`, 然后直接打开 `game` 文件夹, 接着进入  `csgo`, 最后打开 `cfg`。
4. 将 `gamestate_integration_drweissbrot_hud.cfg` 保存在这里。
5. 开启 CS2 (如果你已经开启了游戏，请重启), 找一局游戏来观察. 你可以打开一段demo, 或者通过 CSTV观看正在比赛的好友。
6. 启动 `cs-hud-server-win.exe` 或者 `cs-hud-server-linux`。
7. 在你喜欢的浏览器中打开 http://localhost:31982/hud，你就能看到HUD了.

软件也提供了配置页面 http://localhost:31982/config, 和一个可供观察的大雷达页面 http://localhost:31982/radar。  
有些指令你可能会需要 [some console commands you may want to use](docs/cvars.md)。  
根据你实际使用 HUD 的方式，你现在有两种选择：

### OBS浏览器源
如果你不介意看不到游戏顶部的 HUD，或者你不能或不想在全屏窗口模式下运行游戏，这将是一个不错的选择。  
在 OBS 的替代方案中，它也能发挥类似的作用。  

1. 确保已按照上述说明进行操作。您应该会看到一个控制台窗口，显示 `CS HUD 已激活`.
2. 在 OBS 中，添加游戏捕捉或窗口捕捉，然后选择Counter-strike。（`译者注：你可能需要在cs2里添加-allow_third_party_software启动项来让OBS捕获CS画面`）
3. 添加一个浏览器源. 将 `URL` 设置为 `http://localhost:31982/hud?transparent`, 选择你想要的 `宽度`, `高度`, 与 `帧数` , 但要确保 `自定义 CSS` 是空的.
1. 在 CS 中选择要观看的比赛，浏览器源就会显示 HUD。(当您不观看比赛时，浏览器源不会显示任何内容)。

### 全屏窗口（目前有问题，请等待release更新）
另外，您也可以使用单独的可执行文件在 CS 上覆盖 HUD。  

1. M确保已按照上述说明进行操作。您应该会看到一个控制台窗口，显示 `CS HUD 已激活`.
2. 在windows上下载 [`cs-hud-overlay-win32-x64.zip`](https://github.com/drweissbrot/cs-hud/releases/latest/download/cs-hud-overlay-win32-x64.zip) , 或在linux上下载 [`cs-hud-overlay-linux-x64.tar.gz`](https://github.com/drweissbrot/cs-hud/releases/latest/download/cs-hud-overlay-linux-x64.tar.gz) . 解压所有文件
3. 启动 `cs-hud-overlay.exe` 或者 `cs-hud-overlay` 
4. 启动CS, 打开设置, `视频`, 然后将 `显示模式` 改为 `窗口化全屏`.
5. 在CS中找一场比赛观察. HUD应该叠加在你的游戏画面上.
6. 如果HUD在错误的显示器上, 在任务栏中选择它, 然后按下 `Win`+`Shift`+方向键 将它移动到正确的显示器上.


## FAQ 问答

### CS2能运行正常吗？
彳亍！  
所有内容理应可以在 CS:GO 和 CS2运行. 如果你遇到什么问题, [请在原作者那边提出issue（如果是汉化问题请在我的项目中提出issue)。](https://github.com/drweissbrot/cs-hud/issues)  

### 我可以用于我的活动吗?
可！ 
不需要署名， 但如果可以的话, 请在某处标注一下原作者的[Github链接](https://github.com/drweissbrot/cs-hud).  

### 我为什么要用这个?
反恐精英游戏内的观察者HUD不适合视频观看。  
在直播里，举个例子，你不能按下TAB看某人有多少击杀。  
在早期的CS2中，连名字也无法出现！  
自定义HUD（例如这个）是为了视频服务的，它们向你展示一切，而且在大屏幕上更可读，并且比游戏内部好看点（起码）。  
为什么你会，就，用到这个HUD呢？它使用方便，方便扩展与自定义你的需求，而且免费。  
（请注意，这个项目只是个用爱发电的项目，如果你是个需要支持SLA的大型TO,你可能需要去别处转转:D）(译者注：我也不知道这是啥，可能如果你是个大型赛事举办者，需要更广泛的支持，你需要去找那些更专业的HUD项目)  

### 如何更改颜色/字体/X？
要进行颜色和字体等简单的视觉更改，请打开 http://localhost:31982/config 上的 HUD 配置页面并向下滚动到  `Style Overrides`:  

若改变颜色，请选择你需要的颜色，并点击`保存` and `强制HUD刷新`。  
大多数界面使用 `css.terrorists-fill-rgb` 颜色 (及其CT方对应的颜色), 大多数文字使用 `css.terrorists-text-rgb`, 等等。  
请注意，颜色改变需要刷新HUD后才能应用。  

若更改字体，输入你想要的字体在 `css.primary-font-family` 文本框中, 然后点击 `保存` 和 `强制HUD刷新`。  
字体需要安装在你的电脑上。  
请注意，字体改变需要刷新HUD后才能应用。  

如果你希望一切都放大或缩小一些，请在 `css.base-scale-factor` 文本框中输入大小, 然后单击 `保存` and `强制HUD刷新`。  
默认情况下，大致相当于在`10px`, 如果你想要让他变两倍大, 输入 `20px`。  
如果设置的过大或者过小，都可能会出现问题。  
请注意，界面缩放改变需要刷新HUD后才能应用。  

如果你想改点别的，看看这个 [have a look at the docs](docs/theming.md).  

### 我需要帮助!
请首先参阅 [have a look at the docs folder](https://github.com/drweissbrot/cs-hud/tree/master/docs).  
如果帮不了你, [请在原作者那边提出issue（如果是汉化问题请在我的项目中提出issue)](https://github.com/drweissbrot/cs-hud/issues)  
不要向作者发送邮件求助 (因为别的事发邮件可以).  


## 致谢
十分感谢 [readtldr.gg](https://readtldr.gg) 提供 [Simple Radar](https://readtldr.gg/simpleradar),此项目使用的清晰又可读性好的小地图。
([你也可以在游戏内使用它!他们都非常棒！](https://readtldr.gg/simpleradar))  

![](assets/simpleradar.webp)

超级感谢 [u/Bkid](https://www.reddit.com/user/bkid) 做出的[记录游戏状态集成的大部分内容](https://www.reddit.com/r/GlobalOffensive/comments/cjhcpy/game_state_integration_a_very_large_and_indepth).
这个项目没有它是无法完成的！

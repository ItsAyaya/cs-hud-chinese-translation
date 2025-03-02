# 当游玩的版本是CS:GO的时候（全球攻势）

本HUD一开始是为CS:GO制作的, 在现在，对于CS:GO可能仍兼容
所有功能在CS2中也都应该可用

## 配置过程
首先，请确保你已选择Steam上CS2中的`csgo_demo_viewer`测试分支，并至少启动一次CS:GO

对于游戏内状态集成的配置过程与CS2一致，但cfg文件应放在`csgo/cfg` 而不是`game/csgo/cfg`
具体来说，你需要前往CS2游戏文件夹中的`csgo/cfg`子文件夹
默认情况下，Windows下的目录为`C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\csgo\cfg`.
你也可以打开Steam库，右击单击CS2、 `属性...`, `已安装文件`, `浏览...`,然后进入 `csgo` 文件夹, 再进入 `cfg`文件夹.
将 [`gamestate_integration_drweissbrot_hud.cfg`](https://github.com/drweissbrot/cs-hud/releases/latest/download/gamestate_integration_drweissbrot_hud.cfg) 文件保存在该文件，然后重启CS:GO
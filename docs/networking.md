# 网络

你可以覆盖默认host（主机绑定ip地址） (`127.0.0.1`) 与默认端口 (`31982`).

如果你更改了其中任何一项，你都需要在`gamestate_integration_drweissbrot_hud.cfg` 中修改`uri` 以匹配
如果更改了host binding HUD将接受来自网络上任何设备的连接
这不太安全，尤其是你的网络中有你不信任的人（干扰或破坏）

要绑定到所有主机，请将host改为 `0.0.0.0`.


## 环境变量
你可以设置环境变量 `HOST` and `PORT`, 例如:
```sh
HOST=0.0.0.0 PORT=3000 ./cs-hud-linux
```


## theme.json
你可以在`theme.json`中修改`host`与`port`值 , 可以在`userspace` 目录下, 也可以在主题（theme）目录下.
例如:
```json
{
	"parent": "fennec",
	"host": "0.0.0.0",
	"port": 3000
}
```

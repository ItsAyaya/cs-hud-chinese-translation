# 隐藏玩家

你可以HUD中隐藏那些你不想要显示的玩家
这对于那些被误认为死亡玩家的教练来说可能会有用
请注意，如果你隐藏了一位真实的玩家，你可能会遇到问题

要隐藏玩家，请在HUD（http://127.0.0.1:31982/config）中使用 `teams.hiddenPlayers` 选项 
输入玩家的SteamID64代码或玩家名称
每行输入一位玩家

如果你输入的是玩家名称，则需要与游戏中HUD显示的名称完全一致
如果你使用 [玩家名称覆盖](https://github.com/drweissbrot/cs-hud/blob/master/docs/player-name-overrides.md), 更改了玩家名称，请使用覆盖时使用的名称

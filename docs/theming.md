# 主题设计
## 样式覆写
如果您使用的是默认主题 "fennec"，最常见的样式更改（CT 和 T 的颜色、字体）可以使用 "样式覆写"来实现。
打开 http://localhost:31982/config 的 HUD 配置页面，向下滚动到 `样式覆写`:

### CT/T 颜色
选择要使用的颜色，然后按 `保存`和 `强制 HUD 刷新`。
大多数界面使用 `css.terrorists-fill-rgb`颜色（及其 CT 对应颜色），大多数文本使用 `css.terrorists-text-rgb`，等等。
请注意，只有在刷新 HUD 后才会应用颜色更改。

### 主要字体家族（Primary Font Family）
要更改字体，请在 `css.primary-font-family`文本框中键入要使用的字体名称，然后按 `保存`和 `强制 HUD 刷新`。
字体需要安装在电脑上。
请注意，只有在刷新 HUD 后才会应用字体更改。

### 基本比例因子
如果你希望一切都放大或缩小一些，在`css.base-scale-factor`文本框中输入一些内容，然后按`保存`和`强制 HUD 刷新`。
默认情况下，这大致相当于 `10px`，所以如果你希望东西大一倍，就输入 `20px`。
如果设置过小或过大，都可能会出现问题。
请注意，只有在刷新 HUD 后才会应用对缩放因子的更改。


## 创建主题
任何无法通过 "样式覆写 "实现的功能，都可以通过主题来实现。
主题可以附加和覆盖父主题中的任何文件，还可以添加其他文件。

请查看 `src/themes/fennec` 目录；您可以追加和覆盖其中的每个文件。

要创建主题，请找到主题目录：
如果您使用预打包的可执行文件(exe)来运行 HUD，则该目录将与 `cs-hud-win.exe`/`cs-hud-linux` 文件夹中的 `cs-hud` 目录相同。
<!-- 其他运行方式 -->

在主题目录下新建一个文件夹；该目录的名称就是你的主题名称。 
在新建文件夹中，创建一个名为 `theme.json` 的文件，内容如下：
```json
{
	"parent": "fennec"
}
```
这将告诉 HUD，您的主题扩展了基础主题 `fennec`。

打开 http://localhost:31982/config 上的 HUD 配置页面，切换到您的主题，在顶部附近的 `主题`文本框中输入您的主题名称，然后按 `保存`。

### 应用更改
您可以在自己喜欢的浏览器中打开 http://localhost:31982/hud，对 HUD 进行修改。

请注意，当 HUD 处于活动状态时，它不会自动应用样式更改；您需要每次刷新它。
在浏览器中，只需按`Ctrl`+`R`/`F5`/刷新按钮即可；如果您是在 OBS 中使用 HUD，或无法直接与之交互，请单击 http://localhost:31982/config 配置页面上的 `强制刷新 HUD`按钮。

### 从零(大概)开始创建主题
如果你希望你的 HUD 在视觉上与默认主题截然不同，你可以使用 `raw` 作为父主题。
这样做工作量很大，通常**不推荐**。
请考虑使用 `fennec` 作为父主题。

`raw` 提供了与服务器端的通信、几个辅助函数以及自己主题的入口。
要将 `raw` 用作父节点，请将 `theme.json` 中的 `parent` 值设置为 `raw`。

覆盖由 `raw` 定义的 `shell` Vue 组件即可开始：
创建一个 `shell/shell.html`；它将作为你的主 Vue 组件的标记。
创建一个`shell/shell.css`；它可以是空的，但会移除`raw`添加的大部分样式。
创建一个 `shell/shell.js`；它可能主要用作组件注册。
例如：

```js
// shell/shell.js
import FocusedPlayer from '/hud/focused-player/focused-player.vue'

export default {
	components: {
		FocusedPlayer,
	},
}
```

该`shell/shell.js`与`focused-player`目录中的 VUe 组件相结合，可让您在`shell/shell.html`中使用`<FocusedPlayer />`。

### 没有父主题的主题
你并不一定要使用父主题，但基本上东西都要自己做。
你甚至需要自己写服务器端交互。
这工作量太大，不推荐使用。
请考虑使用 `raw` 作为父主题。

如果不想使用父主题，请省略 `theme.json` 中的 `parent`。
你需要创建一个 `index.html`，作为你的主题的入口。
请参阅 [src/themes/raw/index.html](src/themes/raw/index.html)，以获取灵感。


## 追加文件
你可以在文件扩展名前的文件名中添加 `.append`，对父主题的文件进行追加。
例如，要覆盖 `src/themes/fennec/players-alive/players-alive.css`，可创建 `my-theme/players-alive/players-alive.append.css`。
请注意，这只是将两个文件连接起来，不需要任何合并逻辑。
这对 CSS 很有用，你可以通过创建一个新的选择器来覆盖某些内容。
例如，如果你的父主题为 `Players Alive`组件（用于显示每支队伍中还活着的队员人数）定义了 CSS，那么您就可以在 `Players Alive.append.css` 文件中添加以下内容
```css
/* src/themes/fennec/players-alive/players-alive.css */
.team.--ct {
	background: lightblue;
	color: black;
}

.team.--t {
	background: orange;
	color: white;
}
```

您可以在自己的主题中创建这个文件，将其附加到主题中：
```css
/* my-theme/players-alive/players-alive.append.css */
.team.--ct {
	background: darkblue;
	color: white;
}
```

这将导致 HUD 前端加载 CSS：
```css
.team.--ct {
	background: lightblue;
	color: black;
}

.team.--t {
	background: orange;
	color: white;
}

.team.--ct {
	background: darkblue;
	color: white;
}
```
由于CSS的工作方式，浏览器基本上会"丢弃" 父主题指定的`background`（背景）和`color` （颜色），转而使用你设定的值

您还可以用它来移除或重置样式。
例如，可以将 `.team.--ct`的文本颜色值重置为浏览器的默认值：
```css
.team.--ct {
	color: unset;
}
```

### 覆写 CSS 变量
默认主题 `fennec` 使用 CSS 变量来定义大多数颜色和许多其他值。
这些变量定义在 `src/themes/fennec/css/vars` 中，你可以通过添加到这些文件来覆写它们。

例如，侧边栏中钱的颜色由 CSS 变量 `-sidebar-player-money-text`定义，该变量位于 `src/themes/fennec/css/vars/colors.css`。
要覆写该变量，请创建内容如下的`my-theme/css/vars/colors.append.css`：
```css
/* my-theme/css/vars/colors.append.css */
:root {
	--sidebar-player-money-text: #d400cb;
}
```

根据你的偏好，你也可以只创建一个 `my-theme/css/vars/vars.append.css `，然后创建一个 `:root { /* ... */ }` 块，并在其中包含所有变量覆写。

刷新 HUD 以应用覆写。
如果看不到 HUD，可以在自己喜欢的浏览器中打开 http://localhost:31982/hud。
如果是在 OBS 中使用，或者无法直接与 HUD 页面交互，可以点击配置页面上的 "强制刷新 HUD"。


## 覆写文件
您也可以通过在主题中创建一个同名文件来完全替换一个文件。
例如，要覆盖 `src/themes/fennec/players-alive/players-alive.html`，请创建 `my-theme/players-alive/players-alive.html`。
如果要更改 HTML 或 JS 文件，则需要这样做。

例如，要将侧边栏中杀戮计数前的字母 "K "替换为图标，请创建 `my-theme/sidebars/sidebar/player/kills/kills.html` 并复制原始 [src/themes/fennec/sidebars/sidebar/player/kills/kills.html](src/themes/fennec/sidebars/sidebar/player/kills/kills.html) 的内容。

用以下内容替换`<div :class="['label', colorClass]">K</div>`行：
```xml
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 32" height="12"><path fill="#fff" fill-rule="evenodd" d="M24.44 16.72c.02-1.73-.59-1.77-.63-2.83-.02-.53.05-2.03 0-3.46a17.5 17.5 0 0 0-.31-3.15c-.24-.67-.5-1.78-2.52-3.47-2.2-1.85-6.46-3.43-8.82-3.46C9.8.3 7.04 1.49 4.9 2.87 2.8 4.24 2.27 4.83 1.45 6 .62 7.2.3 8.02.5 10.11c.2 2.09.25 1.54.32 3.46.06 1.6-.67 2.1-.63 3.16.05 1.58.65 1.91.63 2.52-.02.4-.71.89-.63 2.2.08 1.34.35 1.7 2.83 3.15 1.61.95 3.5 1.3 3.47 1.89-.06.87-.28 2.28-.32 3.15-.04.87.36.95 1.26 1.26.91.32 3.04.98 5.36.95 2.32-.05 3.3-.52 4.4-.95 1.11-.43 1.27-.83 1.27-1.57 0-.75-.63-2.29-.63-2.84 0-.55 1.89-1.14 4.1-2.2 2.2-1.07 2.17-2.13 2.2-2.84.05-1.34-.63-1.65-.63-2.2 0-1.08.93-1.27.94-2.53ZM5.86 19.87c-1.1.04-3.47.04-3.47-3.15 0-4.41 2.36-4.92 4.1-5.04 1.73-.11 1.97-.31 2.83.32 1.56 1.13 1.46 3.14.95 4.72a3.78 3.78 0 0 1-1.58 2.2 4.8 4.8 0 0 1-2.83.95Zm7.24 5.04-.43-1.6H12l-.47 1.6c-1.81-.49-2.54-1.21-2.52-2.2.02-.98.57-2 1.57-2.84 1-.82 1.17-.95 1.9-.94.68.01.74.14 1.25.63 1.1 1.05 1.81 1.75 1.9 3.15.08 1.38-1.52 2.14-2.53 2.2Zm5.67-5.04a4.9 4.9 0 0 1-2.83-.94 3.53 3.53 0 0 1-1.58-2.2c-.4-1.49-.6-3.6.95-4.73.87-.63 1.1-.43 2.83-.32 1.73.12 4.1.63 4.1 5.04 0 3.2-2.36 3.2-3.47 3.15Z" clip-rule="evenodd"/></svg>
```

刷新 HUD，就会出现一个骷髅头图标，而不是 `K`。


## 添加文件
当然，你也可以添加其他文件。
例如，如果您已按照上文[覆写文件](#覆写文件)中的说明创建了 `my-theme/img/icons/kills.svg`，并粘贴了上文的 SVG 代码。
现在将添加到 `my-theme/sidebars/sidebar/player/kills/kills.html` 中的 SVG 代码替换为 `<img src="/hud/img/icons/kills.svg">` 。
刷新后，HUD 仍会显示骷髅头，但现在骷髅头将从图像文件中加载而不是从html中。


## 从父主题导入文件（JavaScript）
通过从父主题中导入原始文件并重新导出导入的对象，可以覆盖 JS 文件的部分内容。
要从父主题（或任何其他可用主题）导入文件，请在其地址后添加 `?theme=PARENT_THEME_NAME_HERE`

例如，如果您希望每个人的杀敌数都是 100，请创建包含以下内容的 `my-theme/focused-player/name-and-stats/data-row/stats/stat/stat.js` 文件：
```js
// 这一行将从 fennec 导入 `stat.js`，并在此 JS 模块中将其作为 `Stat` 使用
import Stat from '/hud/focused-player/name-and-stats/data-row/stats/stat/stat.js?theme=fennec'

// 我们需要导出一个 Vue 组件，就像父主题所做的那样
export default {
	...Stat, // 由于使用了传播运算符（三个点），这将包括原始 `Stat` 中的所有内容 -- 我们将首先放入这个内容，之后的内容将覆盖基础 `Stat` 中的内容

	// 击杀数值在`计算`对象中
	computed: {
		...Stat.computed, // 再次从原始 `Stat` 中的 `computed` 对象导入所有内容

		// `value` 是 `Stat` 获取击杀数的来源
		value() {
			// 我们拥有原始 `Stat` 中的所有内容，因此我们可以检查当前获取的值是否为击杀数（该组件还用于助攻、死亡和 ADR）
			if (this.type === 'kills') {
				return 100 // ......如果是击杀数(killS)，只需返回 100
			}

			// 如果不是击杀数，我们可以返回调用原始方法并获取真实值
			return Stat.computed.value.call(this)
		},
	},
}
```

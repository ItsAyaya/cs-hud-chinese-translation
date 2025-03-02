# release检查清单
注：因习惯故不将Github术语翻译
**注意！** 这只与本项目的维护者有关。
你基本可以忽略它

本文档概述了如何发布 HUD 的新版本。 
将 `0.0.0` 替换为版本号，将 `1970-01-01` 替换为发布的UTC日期。

1. commit/merge 所有应成为release一部分的更改到 "master "分支。
2. 在 `master` 上创建一个新commit，信息为 `release 0.0.0`。作为此commit的一部分：
	1. 将 `src/version.txt` 更新为新版本号.
	2. 在 `changelog.md` 中，将 `## [Unreleased]` 标题下的条目移至新标题 `## [0.0.0] - 1970-01-01`。保留 `## [Unreleased]` 标题，其下不包含任何条目，并遵守行间距（三级标题之间空一行，二级标题之间空两行）。
3. 提交上述commit后，运行 `build/build.sh`。避免与 `build/tmp` 中的文件交互。
4. 将这些commit推送（push）到 GitHub。
5. [创建新release](https://github.com/drweissbrot/cs-hud/releases/new).
	1. 选择 `v0.0.0` 作为标签（选择 `Create new tag: v0.0.0 on publish`）。
	2. 将其命名为`v0.0.0`.
	3. 将release的条目从 `changelog.md` 复制到release说明中。
	4. 单击 `Generate release notes`.
	5. 如果适用, 选择 `Set as the latest release` 或者 `Set as a pre-release`.
	6. 上传`build/tmp/bin`的所有文件, 包括`gamestate_integration_drweissbrot_hud.cfg`.
6. 发布release.


## 版本号
本项目并不遵循语义版本法（因为 "覆盖事物 "的主题化方法使得几乎每一次更改都有可能是破坏性更改），但仍大致遵循了这一理念。

版本号的格式为 "MAJOR.MINOR.PATCH"。（主要.次要.补丁）

如果一个版本只包含错误修复，则将 `PATCH` 递增 1。 
如果版本包含新功能、行为或默认值的更改，则将 `MINOR` 递增 1，并将 `PATCH` 重置为 `0`。 
如果某个版本极大地改变了软件的运行方式，则将 `MAJOR`递增 1，并将 `MINOR` 和 `PATCH` 重置为 `0`。

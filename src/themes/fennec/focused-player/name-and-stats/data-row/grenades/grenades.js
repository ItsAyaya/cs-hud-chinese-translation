export default {
	computed: {
		player() {
			return this.$players.focused
		},

		grenades() {
			let foundPerType = {}

			return this.player.grenades.map((grenade) => {
				foundPerType[grenade.name] = (foundPerType[grenade.name] || 0) + 1

				return {
					iconUrl: `/hud/img/weapons/${grenade.name.substring(7)}.svg`,
					isActive: grenade.isActive,
					key: `${grenade.name}${foundPerType[grenade.name]}`,
				}
			})
		},
	},
}

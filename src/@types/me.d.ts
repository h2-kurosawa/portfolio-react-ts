declare namespace MyData {
	/**Json Data */
	namespace Items {
		interface info {
			name: string
			titles: string[]
			social: {
				name: string
				url: string
				class: string
			}[]
		}
		interface about {
			section: string
			hello: string
			description_en: string
			description_ja: string
			experience: {
				company: string
				years: string
				technologies: string[]
			}[]
		}
		interface skills {
			section: string
			skill: {
				name: string
				level: string
				icon: StringDecoder
			}[]
			description: string[]
		}
		interface works {
			section: string
			app: {
				name: string
				description: string
				icon: string
				source: string
				technologies: string[]
			}[]
		}
		interface footer {
			section: string
			copy: string
		}
	}
}

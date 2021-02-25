declare namespace MyData {
	/**App State */
	interface State extends Response {
		isLoading?: boolean
	}
	/**
	 * オプショナルで型定義する
	 * →子での受け取りもオプショナル
	 * →子で参照できない
	 * */
	interface Response {
		info?: {
			name: string
			titles: string
			social: {
				name: string
				url: string
				class: string
			}[]
			image: string
			description: string
			experience: {
				company: string
				years: string
				technologies: string[]
			}[]
			section_name: {
				[key: string]: string
			}
		}
	}
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
			description: string
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
	}
}

declare module '*/my_data.json' {
	/**JsonFile 型定義 */
	interface JsonMyData {
		info: MyData.Items.info
		about: MyData.Items.about
		skills: MyData.Items.skills
		works: MyData.Items.works
	}

	const value: JsonMyData
	export = value
}

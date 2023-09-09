let input = {
	"first_name": "John",
	"middle_name": null,
	"last_name": "doe",
	"description": "Below, you will find a proposal, etc. etc.",
	"products": [
		{
			"name": "test product",
			"quantity": 5,
			"price": 10,
			"total": 50
		},
		{
			"name": "Creative Name",
			"quantity": 10,
			"price": 20,
			"total": 200
		}
	]
}

const flatten = (entries, parentKey) => {
	let result = {}

	for (let entry of Object.entries(entries)) {
		const [key, value] = entry

		const _key = parentKey ? `${parentKey}.${key}` : key

		if (typeof value !== 'object' || value === null) {
			result[_key] = value
			continue
		}

		result = {...result, ...flatten(value, _key)}
	};

	return result
}

let output = flatten(input)

console.log(output);
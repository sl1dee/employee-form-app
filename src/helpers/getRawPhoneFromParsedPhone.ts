type GetRawPhoneFromParsedPhone = (
	parsedPhone: string,
	prevParsedPhone: string
) => string

const getRawPhoneFromParsedPhone: GetRawPhoneFromParsedPhone = (
	parsedPhone,
	prevParsedPhone
) => {
	if (
		prevParsedPhone.includes(')') &&
		!parsedPhone.includes(')') &&
		parsedPhone.includes('(')
	) {
		parsedPhone = parsedPhone.slice(0, -1)
	}

	const pureValue = parsedPhone
		.split('')
		.filter((char) => /[0-9]/.test(char))
		.join('')

	const phoneExitCode = pureValue.slice(0, 1) ? '8' : ''
	const phoneServiceCode = pureValue.slice(1, 1 + 3)
	const phoneOperatorCode = pureValue.slice(4, 4 + 3)
	const phoneFirstBodyPart = pureValue.slice(7, 7 + 2)
	const phoneSecondBodyPart = pureValue.slice(9, 9 + 2)

	return `${phoneExitCode}${phoneServiceCode}${phoneOperatorCode}${phoneFirstBodyPart}${phoneSecondBodyPart}`
}

export default getRawPhoneFromParsedPhone

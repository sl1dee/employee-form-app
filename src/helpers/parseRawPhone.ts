type ParseRawPhone = (rawPhone: string) => string

const parseRawPhone: ParseRawPhone = (rawPhone) => {
	const phoneExitCode = rawPhone.slice(0, 1) ? '+7' : ''

	let phoneServiceCode = rawPhone.slice(1, 1 + 3)
	if (phoneServiceCode.length) {
		phoneServiceCode = ` (${phoneServiceCode}`
		phoneServiceCode += phoneServiceCode.length === 5 ? ')' : ''
	}

	let phoneOperatorCode = rawPhone.slice(4, 4 + 3)
	if (phoneOperatorCode.length) {
		phoneOperatorCode = ` ${phoneOperatorCode}`
	}

	let phoneFirstBodyPart = rawPhone.slice(7, 7 + 2)
	if (phoneFirstBodyPart.length) {
		phoneFirstBodyPart = `-${phoneFirstBodyPart}`
	}

	let phoneSecondBodyPart = rawPhone.slice(9, 9 + 2)
	if (phoneSecondBodyPart.length) {
		phoneSecondBodyPart = `-${phoneSecondBodyPart}`
	}

	return `${phoneExitCode}${phoneServiceCode}${phoneOperatorCode}${phoneFirstBodyPart}${phoneSecondBodyPart}`
}

export default parseRawPhone

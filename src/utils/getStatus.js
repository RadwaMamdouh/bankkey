export const getStatus = (txt) => {
	let statusTxt = txt.replace(/ +/g, "").toLowerCase();

	return statusTxt;
};

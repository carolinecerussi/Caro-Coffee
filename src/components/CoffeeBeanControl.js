handleCoffeeWeightLeft = () => {
	setWeight({
		...weight,
		pounds: weight.pounds -1,
	});
};

setWeight({
	...weight,
	pounds: weight.pounds + parseInt(130)
})
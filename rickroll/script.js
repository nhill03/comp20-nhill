delay(ms) { 
	var start_time = Date.now(); 
	while (Date.now() - start_time < ms) {
		// delay 
	}
}
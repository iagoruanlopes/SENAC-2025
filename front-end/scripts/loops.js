function loops() {
    var n = parseInt(prompt())
    // O for é um laço (loop) de repetição que é usado 
    // Quando se sabe a quantidade de interaçãos  a serem executados

    for (let i = 0; i < n; i++) {
        alert("for " + i)
    }

    var flag = true
    while (flag) { // com flag
        alert("1° while " + n)
        n--
        if (n === 0) {
            flag = false
        }
    }

    while (n !== 0) { //sem flag.
        alert("2° while " + n)
        n--
    }
}

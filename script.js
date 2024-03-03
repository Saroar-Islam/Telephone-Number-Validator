function telephoneCheck(str) {
    let input = document.getElementById("user-input").value;
    let results = document.getElementById("results-div");

    if (input === "") {
        alert("Please provide a phone number");
    } else {
        str = input;
    }

    function isValid2(x) {
        const stack = [];
        const pairs = {
            "(": ")",
            "{": "}",
            "[": "]",
        };

        for (const key of str) {
            if (pairs[key]) {
                stack.push(key);
                // console.log(stack);
            } else if (key === ")" || key === "}" || key === "]") {
                if (pairs[stack.pop()] !== key) {
                    // console.log(stack);
                    return false;
                }
            }
        }

        return stack.length === 0;
    }

    let newstr;

    if (isValid2(str) === true) {
        newstr = str;
    }

    const reg = /^(\+?1[ -]?)?\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{4}$)/gm;

    if (reg.test(newstr)) {
        results.innerHTML = "Valid US number: <br>" + newstr;
        results.style.color = "greenyellow";
    } else {
        results.innerHTML = "Invalid US number: <br>" + str;
        results.style.color = "red";
    }
}

function clearResult() {
    let clearResult = document.getElementById("results-div");
    clearResult.innerHTML = "";
}

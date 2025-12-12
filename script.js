function sortStudents() {
    let raw = document.getElementById("inputData").value.trim().split("\n");
    let students = [];

    raw.forEach(line => {
        let parts = line.split(" ");
        let name = parts[0];
        let marks = parseInt(parts[1]);
        students.push([name, marks]);
    });

    let order = document.getElementById("order").value;

    // Bubble Sort
    for (let i = 0; i < students.length; i++) {
        let swapped = false;

        for (let j = 0; j < students.length - i - 1; j++) {
            if ((order === "asc" && students[j][1] > students[j+1][1]) ||
                (order === "desc" && students[j][1] < students[j+1][1])) {

                let temp = students[j];
                students[j] = students[j+1];
                students[j+1] = temp;
                swapped = true;
            }
        }

        if (!swapped) break;
    }

    let output = "";
    students.forEach(s => {
        output += `${s[0]} - ${s[1]} marks\n`;
    });

    document.getElementById("output").innerText = output;
}

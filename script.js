document.getElementById("checklistForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let totalScore = 0;
    let unanswered = 0;

    // Count questions by looking for radio groups named q1, q2, ...
    const totalQuestions = 36; // Adjust this to match how many you’ve implemented

    for (let i = 1; i <= totalQuestions; i++) {
        const radios = document.getElementsByName("q" + i);
        let answered = false;

        for (let radio of radios) {
            if (radio.checked) {
                totalScore += parseInt(radio.value);
                answered = true;
                break;
            }
        }

        if (!answered) unanswered++;
    }

    const result = document.getElementById("result");
    const scoreDisplay = document.getElementById("scoreDisplay");

    if (unanswered > 0) {
        scoreDisplay.innerText = `请完成所有问题（还剩 ${unanswered} 个未答）。`;
    } else {
        scoreDisplay.innerText = `您的总分是 ${totalScore} 分。`;
    }

    result.style.display = "block";
});

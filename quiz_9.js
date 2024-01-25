const questionsAndAnswers = [
    {
        question: "How can dapps be described in terms of governance?",
        answerText: "They are usually governed by consensus among network participants"
    },
    {
        question: "Which of the following is a use case of decentralized application (Dapp)?",
        answerText: "Automated Market Maker (AMM)"
    },
    {
        question: "Which of the following does not operate as a decentralized application (dapp)?",
        answerText: "iPhone App Store"
    },
    {
        question: "Which of the following platforms does NOT function both as a Layer 1 (L1) blockchain and as a smart contract platform enabling decentralized solutions and applications for end users?",
        answerText: "Bitcoin"
    },
    {
        question: "Which component in a dapp ensures that it can operate without a central authority?",
        answerText: "Smart Contracts"
    },
    {
        question: "Which term refers to a collection of smart contracts that act as a back-end with a front-end user interface?",
        answerText: "Decentralized Application (Dapp)"
    },
    {
        question: "On which of the following factors does a dapp's performance primarily depend?",
        answerText: "Performance of the underlying (L1) blockchain"
    },
    {
        question: "Which layer on a L1 blockchain does smart contracts and dapps typically reside?",
        answerText: "Smart Contracts and dapps reside in the same application layer since smart contracts are simply the backend logic for dapps"
    },
    {
        question: "In a dapp, what is the role of a 'token'?",
        answerText: "All of the above"
    },
    {
        question: "What is the main distinction between smart contracts and dapps (Decentralized Applications)?",
        answerText: "Smart Contracts facilitate, verify, or enforce the negotiation or performance of a contract, while dapps are the front-end interface of smart contracts"
    }
];
var currentQuestionIndex = 0; // 在全局作用域中定义

function isVisible(element) {
    return element.style.display !== "none";
}

function checkAndClickAnswer() {
    // 等待页面加载新的问题和答案
    setTimeout(() => {
        const questionElements = document.querySelectorAll(".ays_quiz_question");

        // 使用 currentQuestionIndex 确定当前活跃的问题
        const currentQuestionElement = questionElements[currentQuestionIndex];

        if (!currentQuestionElement || !isVisible(currentQuestionElement)) {
            console.log("Current question element not found or not visible");
            return;
        }

        const questionText = currentQuestionElement.textContent.trim();
        console.log("Processed question text:", questionText);

        // 使用当前问题的文本内容来匹配问题和答案
        const matchingQA = questionsAndAnswers.find(qa => questionText.includes(qa.question));

        if (!matchingQA) {
            console.log("Matching question not found");
            return;
        }

        const answerElements = document.querySelectorAll(".ays_position_initial");

        let answerClicked = false;
        answerElements.forEach(element => {
            if (isVisible(element) && element.textContent.trim().includes(matchingQA.answerText)) {
                element.click();
                console.log("Answer clicked:", matchingQA.answerText);
                matchingQA.answered = true; // 标记问题已回答
                answerClicked = true;
            }
        });

        if (!answerClicked) {
            console.log("Answer element not found or click not registered");
        }

        // 更新索引以获取下一个问题
        currentQuestionIndex++;

        // 如果所有问题都已回答，停止执行
        if (currentQuestionIndex >= questionsAndAnswers.length) {
            console.log("All questions answered");
            return;
        }

        // 再次调用自身，以处理下一个问题
        checkAndClickAnswer();
    }, 2000); // 在2秒后重新检查问题和答案
}

checkAndClickAnswer();

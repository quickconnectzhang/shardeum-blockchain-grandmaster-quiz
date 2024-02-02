const questionsAndAnswers = [
    {
        question: "Which of the following is the MOST accurate definition of gas estimate and gas limit?",
        answerText: "Gas estimate is the estimated amount of gas that a transaction will require, while gas limit is the maximum amount of gas that a user is willing to spend on a transaction"
    },
    {
        question: "What is the term used to refer to the fee paid by end users to execute a function in a smart contract such as transferring tokens, voting in a DAO or minting an NFT?",
        answerText: "Gas Fee"
    },
    {
        question: "How are smart contract vulnerabilities typically exploited?",
        answerText: "By taking advantage of poorly written contract code"
    },
    {
        question: "How exactly did Ethereum elevate the potential of blockchain technology pioneered by Bitcoin? Choose the correct answer.",
        answerText: "Ethereum revolutionized the way real-world applications function by introducing smart contracts and decentralized applications, eliminating the need for intermediaries"
    },
    {
        question: "What are the benefits of using smart contracts to manage supply chains?",
        answerText: "All of the above"
    },
    {
        question: "Which of the following best describes a complex smart contract?",
        answerText: "A contract that autonomously performs a series of actions based on external data inputs and has multiple conditional outcomes."
    },
    {
        question: "Which of these is NOT a use case for smart contracts?",
        answerText: "Real-time weather updates"
    },
    {
        question: "Which of the following options represent the primary challenge for smart contracts and the larger blockchain industry as a whole?",
        answerText: "Smart contracts are vulnerable to bug and other flaws in the code resulting in security breaches and loss of funds"
    },
    {
        question: "In the context of Ethereum dapp development, how is the Solidity programming language best characterized?",
        answerText: "Smart contract programming language"
    },
    {
        question: "What is the significant advantage of using oracles in smart contracts?",
        answerText: "Allow contracts to retrieve external world data"
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

const questionsAndAnswers = [
    {
        question: "Which of the following is NOT a consensus mechanism used in typical blockchain networks?",
        answerText: "Directed Acyclic Graph (DAG)"
    },
    {
        question: "What is the purpose of a merkle tree in a blockchain?",
        answerText: "All of the above"
    },
    {
        question: "Which of the following is a layer 1 blockchain platform/network?",
        answerText: "Ethereum"
    },
    {
        question: "What is the unique identifier for a block in a blockchain called?",
        answerText: "Block Hash"
    },
    {
        question: "Which of the following represent the bedrock principles of a public blockchain?",
        answerText: "Decentralization, Security, Immutability & Transparency"
    },
    {
        question: "Nonces in ____ network are used to create unique identifiers for transactions to prevent double-spending/replay attacks but are NOT used to determine the selection of validators.",
        answerText: "All of the above"
    },
    {
        question: "Which of the following best describes a 'block' in a blockchain?",
        answerText: "A group of transactions ordered, validated, confirmed and added to a blockchain"
    },
    {
        question: "Which of the following is not a decentralized/public blockchain network?",
        answerText: "Hyperledger Fabric"
    },
    {
        question: "What type of digital ledger and database is blockchain technology?",
        answerText: "Permissionless/Decentralized & DLT"
    },
    {
        question: "What is the core problem that blockchain solves?",
        answerText: "Secure data validation and storage without a 3rd party"
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

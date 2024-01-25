const questionsAndAnswers = [
    {
        question: "What are nodes in a blockchain network?",
        answerText: "Participants or computers that order, validate, relay, and store transactions and blocks in the network"
    },
    {
        question: "In Filecoin, a decentralized storage platform, which type of nodes offer storage capacity, furnish cryptographic evidence of their reliable data storage, and swiftly deliver stored data to users when requested?",
        answerText: "Storage & Retrieval nodes"
    },
    {
        question: "In a blockchain network, which type of nodes provides interfaces for querying and interacting with the blockchain without the need to store the full transaction history?",
        answerText: "RPC Nodes"
    },
    {
        question: "Which of the following best describes the role of blockchain client software for nodes?",
        answerText: "Allows nodes to operate, validate transactions, and maintain consensus on the blockchain network"
    },
    {
        question: "Which nodes are primarily responsible for actively participating in the process of ordering and validating transactions, forming consensus, proposing a block, and securing the network in PoS networks?",
        answerText: "Validator nodes"
    },
    {
        question: "What is the most accurate statement with respect to consensus mechanisms in sharded blockchain networks?",
        answerText: "Each shard reaches consensus on its own transactions"
    },
    {
        question: "Which nodes are known to facilitate data transmission and propagation across PoS networks including sharded and cross-chain networks?",
        answerText: "Relay nodes"
    },
    {
        question: "What type of nodes typically store the complete blockchain transaction history while maintaining the current state of the ledger?",
        answerText: "Full nodes"
    },
    {
        question: "What type of nodes provide an interface between traditional web browsers and IPFS (InterPlanetary File System), a decentralized storage network?",
        answerText: "Gateway nodes"
    },
    {
        question: "What type of nodes typically store the complete blockchain transaction history while maintaining the blockchain’s historical data as well?",
        answerText: "Archive nodes"
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

const questionsAndAnswers = [
    {
        question: "Which of the following popular software clients are used for interacting with the Bitcoin and Ethereum blockchains respectively?",
        answerText: "Bitcoin - Bitcoin Core, Ethereum - Geth"
    },
    {
        question: "Which of the following is not considered a layer 2 solution in blockchain?",
        answerText: "Sharding"
    },
    {
        question: "How does a “wallet” primarily interface with the blockchain network",
        answerText: "By allowing users to create and broadcast transactions using cryptographic keys"
    },
    {
        question: "In the evolving landscape of blockchain infrastructure, how do decentralized storage networks differentiate themselves from traditional data storage mechanisms?",
        answerText: "By fragmenting data into chunks and distributing them across nodes, ensuring redundancy and resistance to censorship without centralized control"
    },
    {
        question: "Why are development tools/frameworks like Truffle, Hardhat and Anchor essential for blockchain development",
        answerText: "They are back-end tools for developers to test/deploy smart contracts and dapps seamlessly to deliver decentralized products and services for end users"
    },
    {
        question: "Which of the following are considered to be part of blockchain infrastructure?",
        answerText: "All of the above"
    },
    {
        question: "What is the primary role of a wallet in blockchain?",
        answerText: "Acting as a bridge between users and the blockchain network"
    },
    {
        question: "In the context of blockchain technology, what primary role do websockets play?",
        answerText: "Real-time event listening and data updates"
    },
    {
        question: "What necessitated layer 2 blockchains and solutions on top of layer 1 blockchains?",
        answerText: "All of the above"
    },
    {
        question: "Which of the following best describes the difference between on-chain and off-chain solutions in the context of blockchain technologies?",
        answerText: "On-chain solutions pertain to data and transactions stored directly on the main blockchain, while off-chain solutions involve data and transactions processed outside of the blockchain"
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

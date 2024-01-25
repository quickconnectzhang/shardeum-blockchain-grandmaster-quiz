const questionsAndAnswers = [
    {
        question: "In the Ethereum blockchain, if someone were describing the overall structure and various levels of data organization, which of the following statements is accurate?",
        answerText: "The 'Global State' represents the entire state of the blockchain at a given moment, the 'Current State' emphasizes its latest status, the 'Account State' pertains to individual balances, nonces, and related data for Ethereum addresses, and the 'Contract State' refers to the specific code and storage for smart contracts"
    },
    {
        question: "Which statement accurately describes the relationship between ERC standards (Ethereum request for Comments) and EIPs in the Ethereum ecosystem?",
        answerText: "ERC standards, like ERC-20 and ERC-721, are types of EIPs that specifically define token standards on Ethereum"
    },
    {
        question: "What type of blockchain network or platform allows anyone to participate in running nodes, anyone can read from or write to and is permissionless?",
        answerText: "Public blockchain"
    },
    {
        question: "What is the role of Virtual Machines like Ethereum Virtual Machine (EVM) in blockchain architecture?",
        answerText: "All of the above"
    },
    {
        question: "What is the primary purpose of a smart contract in a blockchain network?",
        answerText: "Automatically executing predefined instructions when specific conditions are met"
    },
    {
        question: "In which layer of blockchain architecture do smart contracts and dapps primarily operate while the end users directly interact with?",
        answerText: "Application Layer"
    },
    {
        question: "What is the primary purpose of improvement proposals or blockchain standards like EIP or BIP (Ethereum/Bitcoin Improvement Protocols) in the Ethereum/Bitcoin ecosystem?",
        answerText: "B & C"
    },
    {
        question: "Choose the correct answer. Which consensus algorithms are used by L1 blockchains, Bitcoin and Ethereum respectively?",
        answerText: "Bitcoin - Proof of Work (PoW), Ethereum - Proof of Stake (PoS)"
    },
    {
        question: "Which key property in blockchain helps it to achieve both these desired outcomes - high fairness and prevent double-spending?",
        answerText: "Timestamp"
    },
    {
        question: "Which of the following reasons explains why specialized sandbox environments called testnets or test networks are crucial for blockchain platforms?",
        answerText: "They provide environments to simulate the blockchain network for testing purposes before deploying on the mainnet, which involves real world value"
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

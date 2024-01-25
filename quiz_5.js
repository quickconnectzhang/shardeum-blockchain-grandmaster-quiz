const questionsAndAnswers = [
    {
        question: "Which of the following best describes the average transactions per second (TPS) comparison between a centralized network like Visa and typical public blockchain networks?",
        answerText: "Visa processes significantly more transactions per second than public blockchain networks"
    },
    {
        question: "\"Blockchain trilemma\" or \"Scalability trilemma,\" is a longstanding issue that hinders the mass adoption of blockchain networks. Which three features are encompassed by this trilemma in public blockchains?",
        answerText: "Security, decentralization and scalability"
    },
    {
        question: "In public blockchains, what permanent consequence occurs when validators fail to achieve consensus on the upcoming blocks or transactions to be appended?",
        answerText: "The blockchain splits into two separate chains (hard fork)"
    },
    {
        question: "Which feature in blockchain ensures that once a transaction is confirmed, it cannot be reversed?",
        answerText: "Finality"
    },
    {
        question: "Which feature addresses the potential of a public blockchain to handle increased transaction loads?",
        answerText: "Scalability"
    },
    {
        question: "Which feature ensures that transactions on the blockchain are processed quickly?",
        answerText: "Throughput"
    },
    {
        question: "Which of the below is an ideal and a highly decentralized solution for scalability issues in public blockchains?",
        answerText: "Adding more low end machines/nodes"
    },
    {
        question: "What is a primary consequence of a blockchain network relying on high staking requirements and increased processing power (vertical scalability) while having limited throughput and scalability?",
        answerText: "Network congestion leading to high and unpredictable fees for end users"
    },
    {
        question: "Which feature of blockchain and smart contract platform represents this statement “A decentralized exchange (DEX) can be combined with a decentralized lending protocol to create a new application that allows users to borrow and lend assets while also trading them.”",
        answerText: "Atomic Composability"
    },
    {
        question: "Why is high fairness important in a blockchain network?",
        answerText: "It prevents certain participants from gaining undue advantage by manipulating transaction order"
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

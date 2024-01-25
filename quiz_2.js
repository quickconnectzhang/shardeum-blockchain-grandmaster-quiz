const questionsAndAnswers = [
    {
        question: "Which of the following does NOT represent decentralization in the Decentralized Finance or DeFi industry?",
        answerText: "Stability and security enabled by banks"
    },
    {
        question: "Which of the following is the primary benefit of decentralization in the context of censorship resistance?",
        answerText: "Reduced reliance on intermediaries"
    },
    {
        question: "Which of the following is what makes it possible for a group of strangers to work together to build and maintain a shared database like blockchain, without needing to trust each other?",
        answerText: "Consensus mechanism"
    },
    {
        question: "Which decentralized technology allows users to access web content and services without relying on traditional domain names and centralized DNS?",
        answerText: "IPFS (InterPlanetary File System)"
    },
    {
        question: "Which blockchain consensus mechanism promotes decentralization by allowing any participant to contribute to the network's security and governance, albeit, by using expensive and powerful hardware?",
        answerText: "Proof of Work (PoW)"
    },
    {
        question: "Which of the following best describes how decentralization operates in blockchain networks?",
        answerText: "By distributing control and resources among many unrelated nodes across the world"
    },
    {
        question: "What is the benefit of decentralization in blockchain networks?",
        answerText: "All of the above"
    },
    {
        question: "Which of the following best describes a blockchain 'client'?",
        answerText: "Software that enables interaction with a blockchain while upholding the network's operational protocols"
    },
    {
        question: "Which is the most significant indicator of a highly decentralized blockchain/Web3 network?",
        answerText: "Network with several independent nodes spread across the world"
    },
    {
        question: "What are three primary types of blockchain clients?",
        answerText: "Lightweight or SPV clients, Full clients, and Archive clients"
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


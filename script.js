const questions = [
    // ==========================
    // Aptitude Questions (1–30)
    // ==========================
    {
        question: "A pipe can fill a tank in 6 hours. Due to a leak, it takes 7 hours to fill. If the tank is full, how long will the leak take to empty the tank?",
        options: ["A) 36 hrs", "B) 42 hrs", "C) 48 hrs", "D) 52 hrs"],
        correct: 1,
        section: "aptitude"
    },
    {
        question: "A train running at 90 km/hr crosses a platform in 36 seconds. If the length of the train is 540 m, find the length of the platform.",
        options: ["A) 540 m", "B) 720 m", "C) 800 m", "D) 900 m"],
        correct: 0,
        section: "aptitude"
    },
    {
        question: "Two numbers are in the ratio 3:4. If 5 is added to both, the ratio becomes 4:5. Find the numbers.",
        options: ["A) 15, 20", "B) 30, 40", "C) 25, 35", "D) 35, 45"],
        correct: 1,
        section: "aptitude"
    },
    {
        question: "A sum of Rs. 10,000 amounts to Rs. 12,100 in 2 years at compound interest. Find the rate of interest.",
        options: ["A) 5%", "B) 8%", "C) 10%", "D) 12%"],
        correct: 2,
        section: "aptitude"
    },
    {
        question: "The average marks of 50 students is 72. If the average of the first 25 students is 70 and that of the next 24 students is 74, find the marks of the last student.",
        options: ["A) 48", "B) 72", "C) 96", "D) 120"],
        correct: 2,
        section: "aptitude"
    },
    {
        question: "A can complete a work in 10 days, B in 15 days, and C in 20 days. Working together, they start the work but C leaves after 2 days. In how many days will the work be completed?",
        options: ["A) 4", "B) 5", "C) 6", "D) 7"],
        correct: 1,
        section: "aptitude"
    },
    {
        question: "The population of a town increases by 10% in the first year and 20% in the second year. If the population is 66,000 after 2 years, find the population at the start.",
        options: ["A) 50,000", "B) 52,000", "C) 55,000", "D) 60,000"],
        correct: 0,
        section: "aptitude"
    },
    {
        question: "Two pipes can fill a tank in 12 hours and 16 hours respectively. A third pipe can empty it in 24 hours. If all the three are opened together, in how many hours will the tank be filled?",
        options: ["A) 8", "B) 9", "C) 10", "D) 12"],
        correct: 1,
        section: "aptitude"
    },
    {
        question: "A shopkeeper marks up the cost of an article by 25% and allows a discount of 10%. If the cost price is Rs. 160, what is his profit?",
        options: ["A) Rs. 25", "B) Rs. 30", "C) Rs. 32", "D) Rs. 36"],
        correct: 2,
        section: "aptitude"
    },
    {
        question: "If 4 men or 7 women can do a piece of work in 29 days, then how long will 12 men and 14 women take to complete the same work?",
        options: ["A) 6 days", "B) 7 days", "C) 8 days", "D) 9 days"],
        correct: 0,
        section: "aptitude"
    },
    {
        question: "A sum of money doubles itself in 10 years at simple interest. In how many years will it become five times?",
        options: ["A) 25", "B) 30", "C) 35", "D) 40"],
        correct: 1,
        section: "aptitude"
    },
    {
        question: "A mixture of 60 liters contains milk and water in the ratio 2:1. How much water must be added to make the ratio 1:2?",
        options: ["A) 60 L", "B) 70 L", "C) 80 L", "D) 90 L"],
        correct: 2,
        section: "aptitude"
    },
    {
        question: "The difference between the compound interest and simple interest on Rs. 10,000 at 10% per annum for 2 years is:",
        options: ["A) Rs. 50", "B) Rs. 100", "C) Rs. 150", "D) Rs. 200"],
        correct: 0,
        section: "aptitude"
    },
    {
        question: "A bag contains 6 white and 4 black balls. Two balls are drawn at random. Find the probability that both are white.",
        options: ["A) 1/3", "B) 1/2", "C) 2/5", "D) 5/9"],
        correct: 0,
        section: "aptitude"
    },
    {
        question: "The average age of a family of 5 members is 21 years. If the age of the youngest member is 5 years, find the average age of the family just before the birth of the youngest.",
        options: ["A) 20", "B) 22", "C) 24", "D) 25"],
        correct: 3,
        section: "aptitude"
    },
    {
        question: "The difference between 20% of a number and 1/5 of the same number is 12. Find the number.",
        options: ["A) 120", "B) 150", "C) 180", "D) 200"],
        correct: 3,
        section: "aptitude"
    },
    {
        question: "A can do a piece of work in 15 days, B in 20 days. They start together but after 4 days A leaves. In how many more days will B finish the work?",
        options: ["A) 10", "B) 11", "C) 12", "D) 13"],
        correct: 2,
        section: "aptitude"
    },
    {
        question: "A man spends 35% of his salary on food, 25% on rent, and 15% on other expenses. If he saves Rs. 10,500, find his salary.",
        options: ["A) Rs. 30,000", "B) Rs. 35,000", "C) Rs. 40,000", "D) Rs. 45,000"],
        correct: 2,
        section: "aptitude"
    },
    {
        question: "A sum becomes Rs. 17,280 in 2 years at compound interest. If the rate of interest is 20%, find the sum.",
        options: ["A) Rs. 10,000", "B) Rs. 12,000", "C) Rs. 14,400", "D) Rs. 16,000"],
        correct: 2,
        section: "aptitude"
    },
    {
        question: "A person covers 600 km at a certain speed. If he had gone 10 km/hr faster, he would have saved 2 hours. Find the original speed.",
        options: ["A) 40 km/hr", "B) 50 km/hr", "C) 60 km/hr", "D) 75 km/hr"],
        correct: 1,
        section: "aptitude"
    },
    {
        question: "Three numbers are in the ratio 2:3:4 and their sum is 81. Find the numbers.",
        options: ["A) 18, 27, 36", "B) 20, 30, 40", "C) 15, 24, 42", "D) 16, 24, 41"],
        correct: 0,
        section: "aptitude"
    },
    {
        question: "A tank has three pipes A, B, and C. A and B can fill the tank in 12 and 15 hours respectively, while C can empty it in 6 hours. If all are opened together, in how many hours will the tank be emptied?",
        options: ["A) 3", "B) 4", "C) 5", "D) 6"],
        correct: 1,
        section: "aptitude"
    },
    {
        question: "The difference between the square of a number and the number itself is 132. Find the number.",
        options: ["A) 11", "B) 12", "C) 13", "D) 14"],
        correct: 2,
        section: "aptitude"
    },
    {
        question: "A dealer sells two watches at Rs. 1080 each. On one he gains 20%, and on the other, he loses 20%. Find his overall loss percentage.",
        options: ["A) 4%", "B) 6%", "C) 8%", "D) 10%"],
        correct: 0,
        section: "aptitude"
    },
    {
        question: "If log10(2) = 0.3010 and log10(3) = 0.4771, then log10(81) is:",
        options: ["A) 1.9542", "B) 1.9654", "C) 1.9823", "D) 1.9900"],
        correct: 0,
        section: "aptitude"
    },
    {
        question: "The difference between the compound interest on Rs. 5000 for 1 year at 4% compounded yearly and half-yearly is:",
        options: ["A) Rs. 1", "B) Rs. 2", "C) Rs. 3", "D) Rs. 4"],
        correct: 2,
        section: "aptitude"
    },
    {
        question: "The perimeter of a rectangle is 82 m and its area is 400 sq.m. Find the length of the rectangle.",
        options: ["A) 20 m", "B) 21 m", "C) 22 m", "D) 23 m"],
        correct: 2,
        section: "aptitude"
    },
    {
        question: "A sum invested at compound interest doubles in 3 years. In how many years will it become 8 times?",
        options: ["A) 6", "B) 8", "C) 9", "D) 12"],
        correct: 2,
        section: "aptitude"
    },
    {
        question: "The ratio of two numbers is 4:5. If each is increased by 15, the ratio becomes 5:6. Find the numbers.",
        options: ["A) 60, 75", "B) 45, 60", "C) 40, 50", "D) 35, 45"],
        correct: 1,
        section: "aptitude"
    },

    // ==========================
    // Electronics Questions (31–60)
    // ==========================
    {
        question: "In a half-wave rectifier, if the input frequency is 50 Hz, the output frequency is:",
        options: ["A) 25 Hz", "B) 50 Hz", "C) 75 Hz", "D) 100 Hz"],
        correct: 1,
        section: "electronics"
    },
    {
        question: "The ripple factor of a full-wave rectifier is:",
        options: ["A) 0.482", "B) 0.812", "C) 1.21", "D) 1.11"],
        correct: 0,
        section: "electronics"
    },
    {
        question: "The bandwidth of an ideal operational amplifier is:",
        options: ["A) Zero", "B) Infinite", "C) Depends on gain", "D) Limited"],
        correct: 1,
        section: "electronics"
    },
    {
        question: "The cutoff frequency of an RC low pass filter with R = 1 kΩ and C = 0.1 μF is:",
        options: ["A) 159 Hz", "B) 1.59 kHz", "C) 15.9 kHz", "D) 159 kHz"],
        correct: 1,
        section: "electronics"
    },
    {
        question: "In a BJT, which region is most suitable for amplification?",
        options: ["A) Cutoff", "B) Saturation", "C) Active", "D) Breakdown"],
        correct: 2,
        section: "electronics"
    },
    {
        question: "The efficiency of a class B amplifier is:",
        options: ["A) 25%", "B) 50%", "C) 75%", "D) 78.5%"],
        correct: 3,
        section: "electronics"
    },
    {
        question: "A zener diode is primarily used for:",
        options: ["A) Rectification", "B) Voltage regulation", "C) Amplification", "D) Oscillation"],
        correct: 1,
        section: "electronics"
    },
    {
        question: "Which logic family has the lowest power consumption?",
        options: ["A) TTL", "B) CMOS", "C) ECL", "D) RTL"],
        correct: 1,
        section: "electronics"
    },
    {
        question: "Which of the following has negative temperature coefficient?",
        options: ["A) Copper", "B) Aluminum", "C) Carbon", "D) Iron"],
        correct: 2,
        section: "electronics"
    },
    {
        question: "In digital electronics, the number of possible states in a 6-bit counter is:",
        options: ["A) 32", "B) 64", "C) 128", "D) 256"],
        correct: 1,
        section: "electronics"
    },
    {
        question: "The threshold voltage of a MOSFET is primarily dependent on:",
        options: ["A) Channel length", "B) Gate oxide thickness", "C) Temperature", "D) All of the above"],
        correct: 3,
        section: "electronics"
    },
    {
        question: "A Schmitt trigger is used to:",
        options: ["A) Reduce noise", "B) Provide hysteresis", "C) Convert sinusoidal to square wave", "D) All of the above"],
        correct: 3,
        section: "electronics"
    },
    {
        question: "The gain bandwidth product of an op-amp is:",
        options: ["A) Variable", "B) Constant", "C) Infinity", "D) Zero"],
        correct: 1,
        section: "electronics"
    },
    {
        question: "The drift velocity of electrons in a conductor is proportional to:",
        options: ["A) Current density", "B) Electric field", "C) Mobility", "D) All of the above"],
        correct: 3,
        section: "electronics"
    },
    {
        question: "Which oscillator uses a crystal for frequency stability?",
        options: ["A) Hartley", "B) Colpitts", "C) Wien bridge", "D) Crystal oscillator"],
        correct: 3,
        section: "electronics"
    },
    {
        question: "In a JFET, the region between pinch-off voltage and breakdown voltage is called:",
        options: ["A) Ohmic region", "B) Saturation region", "C) Cutoff region", "D) Breakdown region"],
        correct: 1,
        section: "electronics"
    },
    {
        question: "The primary advantage of negative feedback in an amplifier is:",
        options: ["A) Increased gain", "B) Reduced distortion", "C) Reduced bandwidth", "D) Increased noise"],
        correct: 1,
        section: "electronics"
    },
    {
        question: "The depletion region width in a PN junction diode increases with:",
        options: ["A) Forward bias", "B) Reverse bias", "C) Both", "D) None"],
        correct: 1,
        section: "electronics"
    },
    {
        question: "The characteristic impedance of a transmission line is:",
        options: ["A) Resistance", "B) Capacitance", "C) Ratio of voltage to current", "D) Inductance"],
        correct: 2,
        section: "electronics"
    },
    {
        question: "The maximum power transfer theorem states that maximum power is transferred when:",
        options: ["A) Load resistance is very high", "B) Load resistance is very low", "C) Load resistance equals source resistance", "D) Load resistance equals double the source resistance"],
        correct: 2,
        section: "electronics"
    },
    {
        question: "Which of the following filters is best for eliminating 100 Hz ripple from a DC supply?",
        options: ["A) Low pass filter", "B) High pass filter", "C) Band pass filter", "D) Band stop filter"],
        correct: 0,
        section: "electronics"
    },
    {
        question: "In digital systems, metastability occurs due to:",
        options: ["A) Setup and hold time violations", "B) Clock skew", "C) Low Vcc", "D) High temperature"],
        correct: 0,
        section: "electronics"
    },
    {
        question: "The advantage of a CMOS inverter compared to a TTL inverter is:",
        options: ["A) Faster switching", "B) Lower power consumption", "C) Higher noise margin", "D) All of the above"],
        correct: 3,
        section: "electronics"
    },
    {
        question: "In frequency modulation (FM), the modulation index is proportional to:",
        options: ["A) Amplitude of modulating signal", "B) Frequency of carrier", "C) Frequency deviation", "D) Phase deviation"],
        correct: 2,
        section: "electronics"
    },
    {
        question: "The 8085 microprocessor has how many address lines?",
        options: ["A) 16", "B) 18", "C) 20", "D) 22"],
        correct: 0,
        section: "electronics"
    },
    {
        question: "Which flip-flop is used to eliminate race around condition?",
        options: ["A) SR", "B) JK with master-slave", "C) D", "D) T"],
        correct: 1,
        section: "electronics"
    },
    {
        question: "The quality factor (Q) of a series resonant circuit is given by:",
        options: ["A) XL/R", "B) R/XL", "C) 1/R", "D) XC/XL"],
        correct: 0,
        section: "electronics"
    },
    {
        question: "In communication, Shannon’s theorem relates channel capacity to:",
        options: ["A) Bandwidth and noise", "B) Power and resistance", "C) Inductance and capacitance", "D) None"],
        correct: 0,
        section: "electronics"
    },
    {
        question: "Which ADC is fastest?",
        options: ["A) Flash ADC", "B) Dual slope ADC", "C) Successive approximation ADC", "D) Counter type ADC"],
        correct: 0,
        section: "electronics"
    },

    // ==========================
    // C Programming Questions (61–90)
    // ==========================
    {
        question: "What will be the output of the following code?\n#include <stdio.h>\nint main() {\n    int x = 10;\n    if(x++ > 10 && ++x < 13)\n        printf(\"%d\", x);\n    else\n        printf(\"%d\", x);\n    return 0;\n}",
        options: ["A) 11", "B) 12", "C) 13", "D) 14"],
        correct: 0,
        hasCode: true,
        section: "c"
    },
    {
        question: "Which of the following is not a valid storage class in C?",
        options: ["A) auto", "B) register", "C) static", "D) dynamic"],
        correct: 3,
        section: "c"
    },
    {
        question: "What will be the output?\n#include <stdio.h>\nint main() {\n    int i = 0;\n    for(; i<5; i++) {\n        if(i == 3) continue;\n        printf(\"%d\", i);\n    }\n    return 0;\n}",
        options: ["A) 01234", "B) 012", "C) 0124", "D) 1234"],
        correct: 2,
        hasCode: true,
        section: "c"
    },
    {
        question: "Which operator cannot be overloaded in C?",
        options: ["A) +", "B) =", "C) sizeof", "D) []"],
        correct: 2,
        section: "c"
    },
    {
        question: "Predict output:\n#include <stdio.h>\nint main() {\n    char *p = \"Hello\";\n    *p = 'M';\n    printf(\"%s\", p);\n    return 0;\n}",
        options: ["A) Mello", "B) Hello", "C) Compilation error", "D) Runtime error"],
        correct: 2,
        hasCode: true,
        section: "c"
    },
    {
        question: "What is the size of an empty structure in C?",
        options: ["A) 0", "B) 1", "C) Compiler dependent", "D) Error"],
        correct: 1,
        section: "c"
    },
    {
        question: "What is the output?\n#include <stdio.h>\nint main() {\n    int a = 5;\n    printf(\"%d %d %d\", a, a<<2, a>>1);\n    return 0;\n}",
        options: ["A) 5 20 2", "B) 5 10 2", "C) 5 20 1", "D) 5 10 1"],
        correct: 0,
        hasCode: true,
        section: "c"
    },
    {
        question: "Which of the following about union in C is false?",
        options: ["A) Uses shared memory", "B) Size is equal to largest member", "C) Members can be accessed simultaneously", "D) Overwrites previous member value"],
        correct: 2,
        section: "c"
    },
    {
        question: "What is the output?\n#include <stdio.h>\nint main() {\n    int x = 5, y = 0;\n    if(x && y++)\n        printf(\"%d\", y);\n    else\n        printf(\"%d\", y);\n    return 0;\n}",
        options: ["A) 0", "B) 1", "C) 2", "D) Undefined"],
        correct: 0,
        hasCode: true,
        section: "c"
    },
    {
        question: "What is the return type of malloc() in C?",
        options: ["A) void", "B) void*", "C) int*", "D) None"],
        correct: 1,
        section: "c"
    },
    {
        question: "Predict output:\n#include <stdio.h>\nint main() {\n    int a = 10;\n    printf(\"%d\", a+++a);\n    return 0;\n}",
        options: ["A) 20", "B) 21", "C) Compilation error", "D) Undefined"],
        correct: 1,
        hasCode: true,
        section: "c"
    },
    {
        question: "What is the maximum number of dimensions allowed in C arrays?",
        options: ["A) 2", "B) 3", "C) 32", "D) Compiler dependent"],
        correct: 2,
        section: "c"
    },
    {
        question: "Which of the following is true about const keyword in C?",
        options: ["A) Value cannot be changed", "B) Must be initialized", "C) Can be modified with pointers", "D) All of the above"],
        correct: 3,
        section: "c"
    },
    {
        question: "What will the following code output?\n#include <stdio.h>\nint main() {\n    int i = 0;\n    printf(\"%d %d %d\", i, i++, ++i);\n    return 0;\n}",
        options: ["A) 0 0 1", "B) Undefined", "C) 0 1 2", "D) 0 0 2"],
        correct: 1,
        hasCode: true,
        section: "c"
    },
    {
        question: "Which is not a storage class in C?",
        options: ["A) auto", "B) static", "C) private", "D) register"],
        correct: 2,
        section: "c"
    },
    {
        question: "What is output?\n#include <stdio.h>\nint main() {\n    int x = 5;\n    printf(\"%d\", sizeof(x++));\n    printf(\"%d\", x);\n    return 0;\n}",
        options: ["A) 4 6", "B) 4 5", "C) Compiler dependent", "D) Error"],
        correct: 1,
        hasCode: true,
        section: "c"
    },
    {
        question: "What is the output?\n#include <stdio.h>\nvoid fun(int a) {\n    if(a>0) {\n        fun(--a);\n        printf(\"%d\", a);\n    }\n}\nint main() {\n    fun(3);\n    return 0;\n}",
        options: ["A) 210", "B) 012", "C) 001", "D) 0123"],
        correct: 0,
        hasCode: true,
        section: "c"
    },
    {
        question: "Which of the following is not a valid preprocessor directive in C?",
        options: ["A) #define", "B) #undef", "C) #include", "D) #package"],
        correct: 3,
        section: "c"
    },
    {
        question: "Predict output:\n#include <stdio.h>\nint main() {\n    int a = 5;\n    printf(\"%d\", a+++ ++a);\n    return 0;\n}",
        options: ["A) 11", "B) 12", "C) Undefined", "D) Error"],
        correct: 2,
        hasCode: true,
        section: "c"
    },
    {
        question: "Which keyword is used to prevent multiple inclusion of header files?",
        options: ["A) #pragma once", "B) #include", "C) #ifndef", "D) Both A and C"],
        correct: 3,
        section: "c"
    },
    {
        question: "What is the output?\n#include <stdio.h>\nint main() {\n    char str[] = \"ABCDE\";\n    printf(\"%c\", *(&str[2]));\n    return 0;\n}",
        options: ["A) A", "B) B", "C) C", "D) D"],
        correct: 2,
        hasCode: true,
        section: "c"
    },
    {
        question: "Which of the following is not a valid pointer declaration?",
        options: ["A) int *p;", "B) int *p[10];", "C) int (*p)[10];", "D) int p*;"],
        correct: 3,
        section: "c"
    },
    {
        question: "What will be output?\n#include <stdio.h>\nint main() {\n    static int x = 5;\n    if(--x) {\n        main();\n        printf(\"%d\", x);\n    }\n    return 0;\n}",
        options: ["A) Infinite recursion", "B) 0 0 0 0", "C) 0 1 2 3", "D) 0 0 1 2"],
        correct: 2,
        hasCode: true,
        section: "c"
    },
    {
        question: "Which of the following statements is false in C?",
        options: ["A) sizeof is operator", "B) typedef creates alias", "C) void main() is standard", "D) main() returns int"],
        correct: 2,
        section: "c"
    },
    {
        question: "What is output?\n#include <stdio.h>\n#define square(x) x*x\nint main() {\n    int a = 5;\n    printf(\"%d\", square(a+1));\n    return 0;\n}",
        options: ["A) 36", "B) 25", "C) 11", "D) 30"],
        correct: 2,
        hasCode: true,
        section: "c"
    },
    {
        question: "Which is not true about enums in C?",
        options: ["A) Enumerator names are constants", "B) Default values start from 0", "C) Can be assigned float values", "D) Can be assigned explicit integers"],
        correct: 2,
        section: "c"
    },
    {
        question: "What is output?\n#include <stdio.h>\nint main() {\n    printf(\"%d\", printf(\"Hello\"));\n    return 0;\n}",
        options: ["A) Hello5", "B) Hello6", "C) HelloHello", "D) Error"],
        correct: 0,
        hasCode: true,
        section: "c"
    },
    {
        question: "Which of the following is not part of C standard library?",
        options: ["A) stdio.h", "B) stdlib.h", "C) string.h", "D) iostream.h"],
        correct: 3,
        section: "c"
    },
    {
        question: "What is the output?\n#include <stdio.h>\nint main() {\n    int a = 2, b = 3;\n    switch(a+b) {\n        case 5: printf(\"Five\");\n        case 6: printf(\"Six\");\n        default: printf(\"Default\");\n    }\n    return 0;\n}",
        options: ["A) FiveSixDefault", "B) Five", "C) SixDefault", "D) Default"],
        correct: 0,
        hasCode: true,
        section: "c"
    },
    {
        question: "Which of the following is not allowed in C?",
        options: ["A) Nested functions", "B) Pointer to function", "C) Returning pointer from function", "D) Passing array to function"],
        correct: 0,
        section: "c"
    },
    {
        question: "What will be the output?\n#include <stdio.h>\nint main() {\n    char *p = \"12345\";\n    printf(\"%c\", *(&p[2] - 1));\n    return 0;\n}",
        options: ["A) 1", "B) 2", "C) 3", "D) Undefined"],
        correct: 1,
        hasCode: true,
        section: "c"
    },
    {
        question: "Which of the following is true for dynamic memory in C?",
        options: ["A) malloc() initializes memory with zero", "B) calloc() allocates and initializes to zero", "C) free() sets pointer to NULL", "D) realloc() cannot reduce memory size"],
        correct: 1,
        section: "c"
    }
];

const validCredentials = {
    "4BD22EC004": "48391", // Akash Sangamesh Hadapad
    "4BD22EC102": "92754", // Sudeepgoud Chandragoud Patil
    "4BD22EC014": "51682", // Ashwath Bheemappa Sankannavar
    "4BD22EC120": "69325", // YOGESH C K
    "4BD22EC096": "72814", // Somashekhar Javooru
    "4BD22EC023": "84752", // Chinmayi H K
    "4BD22EC028": "90546", // Darshan Shrikanth Koppad
    "4bd22ec084": "38102", // Shahid S Khan
    "4BD22EC019": "67490", // Chandan H N
    "4BD22EC059": "43921", // Mohammed Afshan Sondhekhazi
    "4BD22EC021": "85263", // Chetan K S
    "4BD22EC007": "19047", // Amith A V
    "4BD23EC408": "50631", // Varun Kumar S
    "4BD23EC410": "76458", // B Vinoda
    "Anusha": "03092004"   // Extra placeholder student
};


// Track which users are currently taking the test
const activeTestTakers = new Set();

// Test state variables
let currentQuestion = 0;
let userAnswers = [];
let mediaStream = null;
let isFullScreen = false;
let testTimer = null;
let timeLeft = 5400; // 90 minutes in seconds
let isTestTerminated = false;
let redirectCountdown = 5;
let closeCountdown = 5;
let currentUsername = "";

// DOM Elements
const fullscreenOverlay = document.getElementById('fullscreenOverlay');
const mainContainer = document.getElementById('mainContainer');
const loginScreen = document.getElementById('loginScreen');
const instructionsScreen = document.getElementById('instructionsScreen');
const testScreen = document.getElementById('testScreen');
const completionScreen = document.getElementById('completionScreen');
const resultsScreen = document.getElementById('resultsScreen');
const webcamFeed = document.getElementById('webcamFeed');
const webcamVideo = document.getElementById('webcamVideo');
const warningModal = document.getElementById('warningModal');
const warningMessage = document.getElementById('warningMessage');
const terminationModal = document.getElementById('terminationModal');
const terminationMessage = document.getElementById('terminationMessage');
const tabswitchModal = document.getElementById('tabswitchModal');
const confirmationModal = document.getElementById('confirmationModal');
const timerElement = document.getElementById('timer');
const permissionStatus = document.getElementById('permissionStatus');
const redirectCountdownElement = document.getElementById('redirectCountdown');
const sectionIndicator = document.getElementById('sectionIndicator');
const agreeCheckbox = document.getElementById('agreeCheckbox');
const startTestBtn = document.getElementById('startTestBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const submitTestBtn = document.getElementById('submitTestBtn');
const timeRemainingElement = document.getElementById('timeRemaining');
const timeExpiredModal = document.getElementById('timeExpiredModal');
const timeExpiredCountdown = document.getElementById('timeExpiredCountdown');
const userLimitModal = document.getElementById('userLimitModal');

// Request fullscreen mode and permissions in one click
async function requestFullScreenAndPermissions() {
    // Check user limit first (max 15 users)
    if (activeTestTakers.size >= 15) {
        userLimitModal.style.display = 'flex';
        return;
    }
    
    const elem = document.documentElement;
    
    if (elem.requestFullscreen) {
        try {
            await elem.requestFullscreen();
            isFullScreen = true;
            fullscreenOverlay.style.display = 'none';
            mainContainer.style.display = 'block';
            
            // Now request permissions
            try {
                mediaStream = await navigator.mediaDevices.getUserMedia({ 
                    video: true, 
                    audio: true 
                });
                
                // Show webcam feed
                webcamVideo.srcObject = mediaStream;
                webcamFeed.style.display = 'block';
                
                permissionStatus.textContent = "Permissions granted successfully!";
            } catch (error) {
                console.error("Error accessing media devices:", error);
                permissionStatus.textContent = "Could not access microphone and webcam.";
                permissionStatus.style.color = "#dc3545";
            }
        } catch (err) {
            alert('Error attempting to enable fullscreen mode: ' + err.message);
        }
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
    
    // Listen for fullscreen change events
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    document.addEventListener('MSFullscreenChange', handleFullScreenChange);
}

// Handle fullscreen change events
function handleFullScreenChange() {
    isFullScreen = !!(document.fullscreenElement || document.webkitFullscreenElement || 
                     document.mozFullScreenElement || document.msFullscreenElement);
    
    if (!isFullScreen) {
        // If user exits fullscreen, show the overlay again
        fullscreenOverlay.style.display = 'flex';
        mainContainer.style.display = 'none';
        
        // Also stop the test if it was in progress
        if (testScreen.classList.contains('active')) {
            warningMessage.textContent = "Fullscreen mode is required to continue the test.";
            showWarning();
        }
    }
}

// Validate form and proceed to instructions
function validateForm() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (!username) {
        alert("Please enter your username");
        return;
    }
    
    if (!password) {
        alert("Please enter your password");
        return;
    }
    
    // Check if username and password are valid
    if (!authenticateUser(username, password)) {
        alert("Invalid username or password");
        return;
    }
    
    // Check if user is already taking the test
    if (activeTestTakers.has(username)) {
        alert("This user is already taking the test. Only one session per user is allowed.");
        return;
    }
    
    // Check if permissions are granted
    if (!mediaStream) {
        alert("Please grant microphone and webcam permissions to continue with the test");
        return;
    }
    
    // Store current username
    currentUsername = username;
    
    // Add user to active test takers
    activeTestTakers.add(username);
    
    // Show instructions screen
    showScreen(instructionsScreen);
}

// Authenticate user
function authenticateUser(username, password) {
    return validCredentials[username] === password;
}

// Enable start test button when checkbox is checked
agreeCheckbox.addEventListener('change', function() {
    startTestBtn.disabled = !this.checked;
});

// Start the test
function startTest() {
    showScreen(testScreen);
    startTimer();
    displayQuestion();
    
    // Start monitoring for visibility changes (tab switching)
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Start monitoring for window blur (switching apps)
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);
}

// Handle visibility change (tab switching)
function handleVisibilityChange() {
    if (document.hidden && testScreen.classList.contains('active')) {
        // Tab switch detected - terminate the test immediately
        terminateTestDueToTabSwitch();
    }
}

// Handle window focus
function handleWindowFocus() {
    // Check if user has switched tabs during the test
    if (testScreen.classList.contains('active') && !document.hidden) {
        // User returned to the test tab - we can add additional checks if needed
    }
}

// Handle window blur (switching applications)
function handleWindowBlur() {
    if (testScreen.classList.contains('active')) {
        // Window blur detected - terminate the test immediately
        terminateTestDueToTabSwitch();
    }
}

// Terminate test due to tab switching
function terminateTestDueToTabSwitch() {
    isTestTerminated = true;
    
    // Stop monitoring for visibility changes
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('blur', handleWindowBlur);
    window.removeEventListener('focus', handleWindowFocus);
    
    // Stop webcam feed
    if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
        webcamFeed.style.display = 'none';
    }
    
    // Stop timer
    if (testTimer) {
        clearInterval(testTimer);
    }
    
    // Remove user from active test takers
    activeTestTakers.delete(currentUsername);
    
    // Show tab switch termination message
    tabswitchModal.style.display = 'flex';
    
    // Start countdown to redirect to IFB website
    const countdownInterval = setInterval(() => {
        redirectCountdown--;
        redirectCountdownElement.textContent = redirectCountdown;
        
        if (redirectCountdown <= 0) {
            clearInterval(countdownInterval);
            // Redirect to IFB website
            window.location.href = "https://www.ifbappliances.com/";
        }
    }, 1000);
}

// Start the 90-minute timer
function startTimer() {
    updateTimerDisplay();
    
    testTimer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(testTimer);
            timeExpired();
        }
    }, 1000);
}

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    timerElement.textContent = timeString;
    timeRemainingElement.textContent = timeString;
    
    // Change color when time is running out
    if (timeLeft <= 300) { // 5 minutes left
        timerElement.style.color = '#dc3545';
        timerElement.style.animation = 'pulse 1s infinite';
        timeRemainingElement.style.color = '#dc3545';
    }
}

// Function to handle time expiration
function timeExpired() {
    // Show time expired modal
    timeExpiredModal.style.display = 'flex';
    
    // Countdown for redirect
    let countdown = 5;
    timeExpiredCountdown.textContent = countdown;
    
    const countdownInterval = setInterval(function() {
        countdown--;
        timeExpiredCountdown.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            // Submit the test automatically
            submitTest();
        }
    }, 1000);
}

// Terminate the test
function terminateTest(message) {
    isTestTerminated = true;
    
    // Stop monitoring for visibility changes
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('blur', handleWindowBlur);
    window.removeEventListener('focus', handleWindowFocus);
    
    // Stop webcam feed
    if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
        webcamFeed.style.display = 'none';
    }
    
    // Stop timer
    if (testTimer) {
        clearInterval(testTimer);
    }
    
    // Remove user from active test takers
    activeTestTakers.delete(currentUsername);
    
    // Show termination message
    terminationMessage.textContent = message;
    terminationModal.style.display = 'flex';
}

// Close termination modal
function closeTermination() {
    terminationModal.style.display = 'none';
    // In a real scenario, this would close the window
    // window.close();
}

// Show warning modal
function showWarning() {
    warningModal.style.display = 'flex';
}

// Close warning modal
function closeWarning() {
    warningModal.style.display = 'none';
}

// Show confirmation modal
function showConfirmation() {
    confirmationModal.style.display = 'flex';
}

// Close confirmation modal
function closeConfirmation() {
    confirmationModal.style.display = 'none';
}

// Confirm test submission
function confirmSubmission() {
    closeConfirmation();
    submitTest();
}

// Display current question
function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById('questionCounter').textContent = `${currentQuestion + 1} / ${questions.length}`;
    
    // Update section indicator
    sectionIndicator.textContent = `Section: ${question.section.charAt(0).toUpperCase() + question.section.slice(1)}`;
    
    let questionHTML = question.question;
    if (question.hasCode) {
        const parts = question.question.split('\n');
        if (parts.length > 1) {
            questionHTML = parts[0] + '<div class="code-block">' + parts.slice(1).join('\n') + '</div>';
        }
    }
    document.getElementById('questionText').innerHTML = questionHTML;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <input type="radio" name="answer" value="${index}" id="option${index}">
            <label for="option${index}">${option}</label>
        `;
        optionDiv.addEventListener('click', () => {
            document.getElementById(`option${index}`).checked = true;
        });
        optionsContainer.appendChild(optionDiv);
    });

    if (userAnswers[currentQuestion] !== undefined) {
        document.getElementById(`option${userAnswers[currentQuestion]}`).checked = true;
    }

    prevBtn.disabled = currentQuestion === 0;
    
    // Show submit button on last question
    if (currentQuestion === questions.length - 1) {
        nextBtn.style.display = 'none';
        submitTestBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitTestBtn.style.display = 'none';
    }
    
    updateProgress();
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

// Navigate to next question
function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        userAnswers[currentQuestion] = parseInt(selectedAnswer.value);
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    }
}

// Navigate to previous question
function previousQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        userAnswers[currentQuestion] = parseInt(selectedAnswer.value);
    }

    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

// Submit the test
// Submit the test
function submitTest() {
    // Stop monitoring for visibility changes
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('blur', handleWindowBlur);
    window.removeEventListener('focus', handleWindowFocus);
    
    // Stop webcam feed
    if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
        webcamFeed.style.display = 'none';
    }
    
    // Stop timer
    if (testTimer) {
        clearInterval(testTimer);
    }
    
    // Remove user from active test takers
    activeTestTakers.delete(currentUsername);
    
    // Show completion loading screen
    showScreen(completionScreen);
    
    // Process results after a short delay, then redirect to IFB
    setTimeout(() => {
        // Instead of showing results, redirect directly to IFB
        window.location.href = "https://www.ifbappliances.com/";
    }, 2000);
}

// Alternatively, if you want to keep the results screen, fix the showResults function:
function showResults() {
    const username = document.getElementById('username').value.trim();
    document.getElementById('resultUsername').textContent = username;
    
    showScreen(resultsScreen);
    
    // Start countdown to redirect to IFB website
    const countdownInterval = setInterval(() => {
        closeCountdown--;
        document.getElementById('countdown').textContent = closeCountdown;
        
        if (closeCountdown <= 0) {
            clearInterval(countdownInterval);
            // Redirect to IFB website - FIXED: Use window.location.href instead of window.location
            window.location.href = "https://www.ifbappliances.com/";
        }
    }, 1000);
}

// Helper function to show a specific screen
function showScreen(screen) {
    // Hide all screens
    loginScreen.classList.remove('active');
    instructionsScreen.classList.remove('active');
    testScreen.classList.remove('active');
    completionScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    
    // Show the requested screen
    screen.classList.add('active');
}

// Initialize the application
window.onload = function() {
    // Show fullscreen overlay first
    fullscreenOverlay.style.display = 'flex';
    mainContainer.style.display = 'none';
    
    // Initialize user answers array
    userAnswers = new Array(questions.length);
    
    // Add CSS animation for timer pulse
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
};

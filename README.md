# INFO-3105 System Z COBOL Programming Practice Quiz

A comprehensive web-based practice quiz for System Z COBOL programming concepts designed specifically for INFO-3105 students. This interactive quiz helps students test their knowledge of System Z COBOL fundamentals covered in the course.

## Features

- **242 Questions** (128 Multiple Choice + 42 Coding + 72 True/False) covering essential COBOL and mainframe concepts
- **Interactive Interface** with smooth navigation between questions
- **Progress Tracking** with visual progress bar
- **Detailed Explanations** for each question
- **Score Calculation** with percentage and letter grade
- **Question Review** to see correct answers and explanations
- **Study Mode** with category filtering (MCQ, True/False, Coding)
- **Immediate Feedback** showing correct answers when wrong
- **Responsive Design** that works on desktop and mobile devices

## Topics Covered

The quiz includes questions on:

1. **COBOL Program Structure**
   - Division order (IDENTIFICATION, ENVIRONMENT, DATA, PROCEDURE)
   - Purpose of each division

2. **VSAM Concepts**
   - Control Intervals (CI) and Control Areas (CA)
   - KSDS (Key Sequenced Data Set) requirements
   - VSAM file operations and error handling

3. **DFSort and JCL**
   - SORTFIELDS parameters and syntax
   - DD statements (SORTIN, SORTOUT, SYSIN)
   - Field types (CH, ZD, PD)

4. **DB2 COBOL Integration**
   - SQLCODE meanings (0, 100, -805, etc.)
   - Cursor operations (DECLARE, OPEN, FETCH, CLOSE)
   - Precompile, compile, link, bind process
   - DBRM (Database Request Module)

5. **COBOL Advanced Features**
   - Parameter passing (BY REFERENCE default)
   - EVALUATE with THRU ranges
   - Subprograms and LINKAGE SECTION
   - File access modes vs organizations

6. **Mainframe Tools**
   - AMS (IDCAMS) commands (LISTCAT, DELETE)
   - Control break logic (multi-level)
   - S0C7 abend causes and fixes

7. **Data Types and Declarations**
   - Numeric fields (PIC 9)
   - Alphanumeric fields (PIC X)
   - Signed numeric fields (PIC S9)
   - COMP-3 usage

8. **Practical Programming Scenarios**
   - File processing with control break logic
   - KSDS file operations (sequential, random, update, delete)
   - Subprogram development and parameter passing
   - Mathematical calculations (future value, temperature conversion, loan payments)
   - String manipulation and multi-parameter processing

## How to Use

1. **Open the Quiz**: Open `index.html` in any modern web browser
2. **Choose Mode**: 
   - Click "Start Quiz" to take the interactive quiz
   - Click "Study Mode" to review all questions with answers
3. **Study Mode Features**:
   - Use category filters (All Questions, Multiple Choice, True/False, Coding) to focus on specific topics
   - Review questions with correct answers and detailed explanations
   - Switch between categories to study different question types
4. **Quiz Mode**:
   - Answer Questions: Click on your chosen answer for each question
   - Navigate: Use "Previous" and "Next" buttons to move between questions
   - Submit: Click "Submit Quiz" when you've answered all questions
   - Review Results: See your score, grade, and detailed explanations
   - Retake: Use "Take Quiz Again" to restart with fresh questions

## File Structure

```
Quiz/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Technical Details

- **Pure HTML/CSS/JavaScript** - No external dependencies
- **Responsive Design** - Works on all screen sizes
- **Modern UI** - Clean, professional interface
- **Accessibility** - Keyboard navigation and screen reader friendly

## Quiz Questions

The quiz includes 242 carefully crafted questions (128 multiple choice + 42 coding + 72 true/false) that test:

- **Basic Knowledge**: Fundamental COBOL concepts and syntax
- **VSAM Understanding**: Control intervals, KSDS requirements, VSAM operations
- **DFSort Proficiency**: Sort parameters, field types, JCL integration
- **DB2 Integration**: SQLCODE meanings, cursor operations, compilation process
- **Mainframe Tools**: AMS commands, control breaks, abend handling
- **Practical Application**: Real-world usage scenarios
- **Conceptual Understanding**: Why certain features exist and how they work
- **Best Practices**: Proper COBOL and mainframe programming techniques
- **Practical Programming**: Real-world coding scenarios including file processing and subprogram development

## Scoring System

- **A (90-100%)**: Excellent understanding of COBOL concepts
- **B (80-89%)**: Good understanding with minor gaps
- **C (70-79%)**: Satisfactory understanding with some areas for improvement
- **D (60-69%)**: Basic understanding, needs more study
- **F (0-59%)**: Requires significant review of COBOL fundamentals

## Customization

To add or modify questions, edit the `quizQuestions` array in `script.js`. Each question object should have:

```javascript
{
    question: "Your question text here?",
    options: [
        "Option A",
        "Option B", 
        "Option C",
        "Option D"
    ],
    correct: 0, // Index of correct answer (0-3)
    explanation: "Detailed explanation of the correct answer."
}
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Internet Explorer 11+

## Getting Started

1. Download or clone this repository
2. Open `index.html` in your web browser
3. Start practicing your COBOL knowledge!

## Contributing

Feel free to:
- Add more questions to the quiz
- Improve the UI/UX design
- Add new features like timed quizzes
- Fix any bugs or issues

## License

This project is open source and available under the MIT License. 
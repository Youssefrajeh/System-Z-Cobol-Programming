// COBOL Quiz Questions
const quizQuestions = [
    {
        question: "What is the purpose of the SORTFIELDS statement in a DFSort JCL stream?",
        options: [
            "To specify the input and output files",
            "To define the start, length, and type of the fields used for sorting",
            "To indicate the number of records to be sorted",
            "To specify the sort order (ascending or descending)"
        ],
        correct: 1,
        explanation: "SORTFIELDS is the core of DFSort, specifying exactly which fields the sort utility should use to order the records."
    },
    {
        question: "In Access Method Services (AMS), what is the smallest physical construct in a VSAM file?",
        options: [
            "Control Area (CA)",
            "Control Interval (CI)",
            "Cluster",
            "Data Component"
        ],
        correct: 1,
        explanation: "The Control Interval is the smallest unit of transfer between disk and main memory."
    },
    {
        question: "To perform a binary search on a COBOL table, the table must be:",
        options: [
            "Sorted in ascending order",
            "Sorted in the same order as the KEY clause in the SEARCH ALL statement",
            "Unsorted",
            "Defined with INDEXED BY"
        ],
        correct: 1,
        explanation: "A binary search requires a sorted table. The order must match the KEY IS clause in the SEARCH ALL statement."
    },
    {
        question: "Which of the following SQLCODE values indicates that a FETCH statement has reached the end of the data?",
        options: [
            "0",
            "100",
            "-ve",
            "-100"
        ],
        correct: 1,
        explanation: "SQLCODE 100 specifically means 'not found' or 'no more data' for a FETCH or a single-row SELECT."
    },
    {
        question: "When a COBOL program calls a subprogram, the LINKAGE SECTION is used to:",
        options: [
            "Define the subprogram's internal working storage",
            "Pass parameters between the calling and called programs",
            "Declare the subprogram's file definitions",
            "Define the subprogram's procedure division"
        ],
        correct: 1,
        explanation: "The LINKAGE SECTION defines the data items that are received from the calling program."
    },
    {
        question: "In COBOL, what is the default method for passing data to a subprogram using the CALL statement?",
        options: [
            "By content",
            "By value",
            "By reference",
            "By address"
        ],
        correct: 2,
        explanation: "By default, COBOL passes the memory address of the data item, allowing the subprogram to modify the original value."
    },
    {
        question: "A S0C7 abend is most likely caused by:",
        options: [
            "An invalid file definition",
            "A program loop",
            "A data exception (e.g., trying to use non-numeric data in a numeric field)",
            "An infinite recursive call"
        ],
        correct: 2,
        explanation: "A S0C7 abend is a data exception. It occurs when a numeric field contains non-numeric data during a calculation or a move to a numeric edited field."
    },
    {
        question: "Which ACCESS MODE clause is used with KSDS files to process records based on their primary key, one at a time?",
        options: [
            "ACCESS IS SEQUENTIAL",
            "ACCESS IS RANDOM",
            "ACCESS IS DYNAMIC",
            "ACCESS IS EXCLUSIVE"
        ],
        correct: 1,
        explanation: "Random access allows you to read specific records by providing their key."
    },
    {
        question: "The EVALUATE statement is most useful for implementing what kind of programming structure?",
        options: [
            "An IF-THEN-ELSE loop",
            "A PERFORM UNTIL loop",
            "A case structure",
            "A GO TO statement"
        ],
        correct: 2,
        explanation: "The EVALUATE statement is the most efficient and readable way to implement a case structure, where you have multiple discrete conditions to check."
    },
    {
        question: "What is the purpose of the BIND step in the DB2 compilation process?",
        options: [
            "To pre-compile the COBOL code",
            "To create an executable load module",
            "To link the DBRM with the plan, defining the data access path",
            "To compile the COBOL code"
        ],
        correct: 2,
        explanation: "The BIND command takes the DBRM (Database Request Module) created during pre-compilation and creates a plan, which is the executable form of the SQL statements."
    },
    {
        question: "To read records from a KSDS file starting at a specific key value, you would use the following statement:",
        options: [
            "READ",
            "START",
            "OPEN",
            "FETCH"
        ],
        correct: 1,
        explanation: "The START statement is specifically designed to set the record pointer to a specific key position in an indexed file before beginning sequential processing."
    },
    {
        question: "The CR symbol in a COBOL PICTURE clause is used for:",
        options: [
            "Formatting a currency symbol",
            "Indicating a negative value with 'CR' (credit)",
            "Displaying a positive value",
            "Suppressing leading zeros"
        ],
        correct: 1,
        explanation: "The CR symbol is a common numeric editing character used to show a credit balance on a report."
    },
    {
        question: "In the link-edit step, what is the purpose of the SYSLIB DD statement in a COBOL JCL stream for a program that uses subprograms?",
        options: [
            "To define the input and output files",
            "To point to the library containing the copy members",
            "To define the library where the subprogram source code is located",
            "To define the library where the subprogram load module is located"
        ],
        correct: 3,
        explanation: "SYSLIB in the link-edit step points to the library containing the compiled subprograms (.OBJ or .LOAD files) so the linker can find and include them."
    },
    {
        question: "DCLGEN is a tool used in DB2 development to:",
        options: [
            "Compile the COBOL program",
            "Generate a Data Definition Language (DDL) script",
            "Generate a COBOL copybook for a DB2 table",
            "Execute SQL statements interactively"
        ],
        correct: 2,
        explanation: "DCLGEN (Declarations Generator) reads a DB2 table definition and creates a COBOL COPY member containing the host variable definitions."
    },
    {
        question: "What does a multi-level control break report typically do?",
        options: [
            "Summarize data based on multiple fields",
            "Process records in an unsorted file",
            "Read and write records one by one without summarization",
            "Update records in a master file"
        ],
        correct: 0,
        explanation: "A multi-level control break report groups and totals data at different levels, such as by region, then by department within the region."
    },
    {
        question: "Which COBOL statement is used to update an existing record in a KSDS file?",
        options: [
            "WRITE",
            "REWRITE",
            "DELETE",
            "START"
        ],
        correct: 1,
        explanation: "The REWRITE statement is used to update an existing record that was just read from the file."
    },
    {
        question: "In the context of DB2, a cursor is used to:",
        options: [
            "Define the physical location of the database",
            "Perform multiple updates with a single statement",
            "Process a set of rows from a SELECT statement one at a time",
            "Handle errors during database operations"
        ],
        correct: 2,
        explanation: "A cursor is a pointer used to iterate through the results of a SELECT statement in a COBOL program."
    },
    {
        question: "What is the role of SQLCA in a COBOL-DB2 program?",
        options: [
            "It's a structure that holds information about the EXEC SQL statement, including the SQLCODE",
            "It defines the host variables used in the program",
            "It's a tool for interactive SQL execution",
            "It specifies the cursor for a SELECT statement"
        ],
        correct: 0,
        explanation: "The SQL Communications Area (SQLCA) is a standard COBOL structure that returns status information after a database operation."
    },
    {
        question: "When defining a KSDS file, the RECORD KEY must be:",
        options: [
            "A variable in the FILE SECTION",
            "A variable in the WORKING-STORAGE SECTION",
            "An integral part of the record layout",
            "A constant value"
        ],
        correct: 2,
        explanation: "The RECORD KEY must be a field within the record definition itself, as it's the primary way to identify each record in the file."
    },
    {
        question: "A PERFORM ... VARYING loop can be used to iterate through the elements of a two-dimensional table by:",
        options: [
            "Varying only one subscript",
            "Varying multiple subscripts simultaneously",
            "Using the EVALUATE statement",
            "Using the GO TO statement"
        ],
        correct: 1,
        explanation: "The PERFORM VARYING ... AFTER syntax is specifically designed to handle multi-dimensional tables."
    },
    {
        question: "The DECLARATIVES section of a COBOL program is used for:",
        options: [
            "Defining all the variables in the program",
            "Specifying the FILE SECTION and WORKING-STORAGE SECTION",
            "Defining special procedures for handling I/O errors",
            "Listing all the subprograms that will be called"
        ],
        correct: 2,
        explanation: "The DECLARATIVES section, which is an optional part of the PROCEDURE DIVISION, contains sections that are executed automatically for specific error conditions."
    },
    {
        question: "The USING clause in a CALL statement lists the data items that are:",
        options: [
            "Defined in the LINKAGE SECTION of the called program",
            "Defined in the WORKING-STORAGE SECTION of the calling program",
            "Passed as parameters to the subprogram",
            "All of the above"
        ],
        correct: 2,
        explanation: "The USING clause explicitly lists the data items that are sent from the calling program to the called subprogram."
    },
    {
        question: "When a CALL statement is executed, the USING clause in the calling program must match which clause in the called program?",
        options: [
            "LINKAGE SECTION",
            "PROCEDURE DIVISION USING",
            "DATA DIVISION",
            "FILE SECTION"
        ],
        correct: 1,
        explanation: "The USING clause in the CALL statement must match the order and number of items in the PROCEDURE DIVISION USING clause of the called subprogram."
    },
    {
        question: "A COBOL program that performs a CALL and USING a data item by reference:",
        options: [
            "Passes a copy of the data item to the subprogram",
            "Passes the memory address of the data item",
            "Passes the value of the data item as a literal",
            "Passes the data item by value"
        ],
        correct: 1,
        explanation: "This is the definition of passing by reference."
    },
    {
        question: "The OPEN I-O statement is used when:",
        options: [
            "Creating a new file",
            "Reading from a file",
            "Reading and writing to a file (update)",
            "Appending records to a file"
        ],
        correct: 2,
        explanation: "OPEN I-O (Input-Output) is the mode used for updating existing records in an indexed or relative file."
    },
    {
        question: "What is the purpose of the EVALUATE statement in COBOL?",
        options: [
            "To implement a case structure, offering an alternative to nested IF statements",
            "To perform arithmetic calculations",
            "To handle file operations",
            "To define data structures"
        ],
        correct: 0,
        explanation: "EVALUATE provides a clean way to implement case structures, making code more readable than nested IF statements."
    },
    {
        question: "In the link-edit step, which JCL DD statement is used to point to the library containing compiled subprogram load modules?",
        options: [
            "SYSLIB",
            "SYSIN",
            "SYSOUT",
            "SYSUT1"
        ],
        correct: 0,
        explanation: "SYSLIB points to the library containing compiled subprogram load modules for linking."
    },
    {
        question: "What is the purpose of the RECORD KEY clause in a SELECT statement for a KSDS file?",
        options: [
            "To specify the primary key of the file",
            "To define the file organization",
            "To specify the access mode",
            "To define the record format"
        ],
        correct: 0,
        explanation: "RECORD KEY specifies the primary key field that uniquely identifies each record in the KSDS file."
    },
    {
        question: "What is the key characteristic of a multi-level control break report?",
        options: [
            "It summarizes data based on changes in one or more sorted control fields",
            "It processes records in random order",
            "It only handles single-level summaries",
            "It requires unsorted input data"
        ],
        correct: 0,
        explanation: "Multi-level control break reports group and summarize data at multiple levels based on sorted control fields."
    },
    {
        question: "In the DB2 compilation process, what is the role of DCLGEN?",
        options: [
            "To generate a COBOL copybook for a DB2 table definition",
            "To compile the COBOL program",
            "To create the executable load module",
            "To bind the program to the database"
        ],
        correct: 0,
        explanation: "DCLGEN (Declarations Generator) creates COBOL copybooks from DB2 table definitions for use in programs."
    },
    {
        question: "What is a cursor used for in a COBOL-DB2 program?",
        options: [
            "To process a set of rows returned by a SELECT statement one at a time",
            "To define the database schema",
            "To handle compilation errors",
            "To specify file organizations"
        ],
        correct: 0,
        explanation: "A cursor allows processing of multiple rows from a SELECT statement one record at a time."
    },
    {
        question: "What is the main purpose of the BIND step in the DB2 compilation process?",
        options: [
            "To create a plan that links the program's SQL requests to the database",
            "To compile the COBOL source code",
            "To generate the DBRM",
            "To create the load module"
        ],
        correct: 0,
        explanation: "BIND creates an executable plan that links the program's SQL statements to the database access paths."
    },
    {
        question: "Which statement is used to begin sequential processing of a KSDS file at a specific key?",
        options: [
            "READ",
            "START",
            "OPEN",
            "FETCH"
        ],
        correct: 1,
        explanation: "START positions the record pointer at a specific key value before beginning sequential processing."
    },
    {
        question: "To access a KSDS file randomly, the FILE-CONTROL entry must include which clause?",
        options: [
            "ACCESS IS SEQUENTIAL",
            "ACCESS IS RANDOM",
            "ACCESS IS DYNAMIC",
            "ACCESS IS EXCLUSIVE"
        ],
        correct: 1,
        explanation: "ACCESS IS RANDOM allows direct access to records by key value."
    },
    {
        question: "What does a negative SQLCODE value generally indicate in a COBOL-DB2 program?",
        options: [
            "A severe database error",
            "Successful execution",
            "No data found",
            "End of cursor"
        ],
        correct: 0,
        explanation: "Negative SQLCODE values indicate database errors that need to be handled by the program."
    },
    {
        question: "When using the CALL ... BY CONTENT statement, what is passed to the subprogram?",
        options: [
            "A copy of the data item's value",
            "The memory address of the data item",
            "A reference to the original data item",
            "A pointer to the data item"
        ],
        correct: 0,
        explanation: "BY CONTENT passes a copy of the data value, protecting the original from modification."
    },
    {
        question: "A two-dimensional table in COBOL is typically defined using which COBOL feature?",
        options: [
            "OCCURS clauses with multiple levels",
            "REDEFINES clause",
            "COMP-3 usage",
            "PIC clauses"
        ],
        correct: 0,
        explanation: "Two-dimensional tables use nested OCCURS clauses to define rows and columns."
    },
    {
        question: "What is the name of the standard COBOL structure that holds a database operation's status, including the SQLCODE?",
        options: [
            "SQLCA",
            "DBRM",
            "SQLDA",
            "SQLCODE"
        ],
        correct: 0,
        explanation: "SQLCA (SQL Communications Area) is the standard structure containing SQL operation status information."
    },
    {
        question: "The PERFORM VARYING ... AFTER syntax is primarily used for what?",
        options: [
            "Iterating through a two-dimensional table",
            "Handling file operations",
            "Performing arithmetic calculations",
            "Defining data structures"
        ],
        correct: 0,
        explanation: "PERFORM VARYING ... AFTER is specifically designed for processing two-dimensional tables."
    },
    {
        question: "What is the fundamental requirement for a binary search (SEARCH ALL) on a COBOL table?",
        options: [
            "The table must be sorted on the key field",
            "The table must be unsorted",
            "The table must be indexed",
            "The table must be in working storage"
        ],
        correct: 0,
        explanation: "SEARCH ALL requires the table to be sorted on the search key for the binary search algorithm to work correctly."
    },
    {
        question: "To delete a record from an indexed file, you must first do what?",
        options: [
            "Place the key of the record to be deleted into the RECORD KEY data item",
            "Open the file for input only",
            "Read the record first",
            "Use the REWRITE statement"
        ],
        correct: 0,
        explanation: "The key of the record to be deleted must be placed in the RECORD KEY field before executing DELETE."
    },
         {
         question: "When passing parameters to a subprogram, the USING clause in the calling program must match the USING clause in which part of the subprogram?",
         options: [
             "LINKAGE SECTION",
             "PROCEDURE DIVISION header",
             "WORKING-STORAGE SECTION",
             "FILE SECTION"
         ],
         correct: 1,
         explanation: "The USING clause in the calling program must match the PROCEDURE DIVISION USING clause in the subprogram."
     },
         {
        question: "Which ACCESS MODE is required to use the START statement on a KSDS file?",
        options: [
            "ACCESS IS RANDOM",
            "ACCESS IS DYNAMIC or ACCESS IS SEQUENTIAL",
            "ACCESS IS EXCLUSIVE",
            "ACCESS IS SHARED"
        ],
        correct: 1,
        explanation: "START requires sequential or dynamic access because it positions the file pointer for subsequent sequential reads. RANDOM access is not compatible with START."
    },
         {
        question: "In the compile step, what is the primary purpose of the SYSLIB DD statement in a JCL stream that compiles a program calling a subprogram?",
        options: [
            "To specify the input file for the program",
            "To specify the library where copybooks are located",
            "To define the output file for the program",
            "To specify the library where the subprogram's compiled object or load module resides"
        ],
        correct: 1,
        explanation: "SYSLIB in the compile step specifies the library where copybooks are located for the compiler to include."
    },
     {
         question: "In a multi-level control break program, what is the most critical prerequisite for the input file?",
         options: [
             "The file must be unsorted",
             "The file must be sorted by the control break fields, from major to minor",
             "The file must be indexed",
             "The file must be in sequential format"
         ],
         correct: 1,
         explanation: "The file must be sorted by the control break fields, from major to minor for multi-level control break logic to work correctly."
     },
     {
         question: "Which COBOL statement is specifically designed to handle a variety of conditions in a structured, case-like manner?",
         options: [
             "IF-THEN-ELSE",
             "EVALUATE",
             "PERFORM",
             "GO TO"
         ],
         correct: 1,
         explanation: "EVALUATE is specifically designed to handle a variety of conditions in a structured, case-like manner."
     },
     {
         question: "A S0C7 program abend indicates what type of error?",
         options: [
             "A compilation error",
             "A data exception, typically from invalid data in a numeric field during an arithmetic operation",
             "A file access error",
             "A memory allocation error"
         ],
         correct: 1,
         explanation: "A S0C7 abend indicates a data exception, typically from invalid data in a numeric field during an arithmetic operation."
     },
     {
         question: "What is the function of the DCLGEN utility in a DB2 environment?",
         options: [
             "To compile COBOL programs",
             "To generate COBOL copybook declarations for a DB2 table's columns",
             "To create database tables",
             "To execute SQL statements"
         ],
         correct: 1,
         explanation: "DCLGEN generates COBOL copybook declarations for a DB2 table's columns."
     },
     {
         question: "Which SQLCODE value indicates a successful EXEC SQL statement execution?",
         options: [
             "100",
             "0",
             "-805",
             "1"
         ],
         correct: 1,
         explanation: "SQLCODE 0 indicates a successful EXEC SQL statement execution."
     },
     {
         question: "In a COBOL-DB2 program, what must you do to process a SELECT statement that returns multiple rows?",
         options: [
             "Use a single-row SELECT",
             "Declare and use a cursor",
             "Use a host variable",
             "Use the SQLCA"
         ],
         correct: 1,
         explanation: "You must declare and use a cursor to process a SELECT statement that returns multiple rows."
     },
     {
         question: "What is the role of the BIND step in the DB2 program preparation process?",
         options: [
             "To compile the COBOL program",
             "To create an access plan for the SQL statements contained within the DBRM",
             "To link the program",
             "To precompile the program"
         ],
         correct: 1,
         explanation: "The BIND step creates an access plan for the SQL statements contained within the DBRM."
     },
     {
         question: "When calling a subprogram, what is the default parameter passing mechanism in COBOL?",
         options: [
             "Pass by value",
             "Pass by reference",
             "Pass by content",
             "Pass by copy"
         ],
         correct: 1,
         explanation: "The default parameter passing mechanism in COBOL is pass by reference."
     },
     {
         question: "Which section in a subprogram is used to define the data items being received from a calling program?",
         options: [
             "WORKING-STORAGE SECTION",
             "LINKAGE SECTION",
             "FILE SECTION",
             "PROCEDURE DIVISION"
         ],
         correct: 1,
         explanation: "The LINKAGE SECTION is used to define the data items being received from a calling program."
     },
     {
         question: "To update a record in a KSDS file, which I/O statement should be used?",
         options: [
             "WRITE",
             "REWRITE",
             "DELETE",
             "START"
         ],
         correct: 1,
         explanation: "REWRITE is used to update a record in a KSDS file."
     },
     {
         question: "What is the smallest addressable unit of data transferred between virtual storage and the disk in a VSAM dataset?",
         options: [
             "Control Area (CA)",
             "Control Interval (CI)",
             "Record",
             "Block"
         ],
         correct: 1,
         explanation: "Control Interval (CI) is the smallest addressable unit of data transferred between virtual storage and the disk in a VSAM dataset."
     },
     {
         question: "In a SORTFIELDS statement for DFSort, what does the 'CH' type signify?",
         options: [
             "Character data",
             "Numeric data",
             "Date data",
             "Time data"
         ],
         correct: 0,
         explanation: "CH type signifies character data in a SORTFIELDS statement."
     },
     {
         question: "What is the purpose of the INVALID KEY clause?",
         options: [
             "To handle successful I/O operations",
             "To handle errors during I/O operations on indexed or relative files, such as a record not being found",
             "To validate input data",
             "To check file status"
         ],
         correct: 1,
         explanation: "The INVALID KEY clause handles errors during I/O operations on indexed or relative files, such as a record not being found."
     },
     {
         question: "What is the primary function of SPUFI?",
         options: [
             "To compile COBOL programs",
             "To execute SQL statements interactively from a TSO session",
             "To create database tables",
             "To generate reports"
         ],
         correct: 1,
         explanation: "SPUFI is used to execute SQL statements interactively from a TSO session."
     },
     {
         question: "In a COBOL-DB2 program, variables defined in WORKING-STORAGE and used within EXEC SQL statements are known as what?",
         options: [
             "SQL variables",
             "Host variables",
             "DB2 variables",
             "Program variables"
         ],
         correct: 1,
         explanation: "Variables defined in WORKING-STORAGE and used within EXEC SQL statements are known as host variables."
     },
     {
         question: "Which statement is used to position the file pointer to a specific record in a KSDS file for subsequent sequential reading?",
         options: [
             "READ",
             "START",
             "OPEN",
             "CLOSE"
         ],
         correct: 1,
         explanation: "START is used to position the file pointer to a specific record in a KSDS file for subsequent sequential reading."
     },
     {
         question: "A DBRM (Database Request Module) is the output of which step in the DB2 program preparation process?",
         options: [
             "The Compile step",
             "The Precompile step",
             "The Link step",
             "The Bind step"
         ],
         correct: 1,
         explanation: "A DBRM is the output of the Precompile step in the DB2 program preparation process."
     },
     {
         question: "What is the purpose of the CR editing symbol in a PICTURE clause?",
         options: [
             "To display positive values",
             "To display 'CR' next to a field when its value is negative",
             "To format currency",
             "To suppress leading zeros"
         ],
         correct: 1,
         explanation: "The CR editing symbol displays 'CR' next to a field when its value is negative."
     },
     {
         question: "The USING clause in a subprogram's PROCEDURE DIVISION header must correspond with which clause in the main program?",
         options: [
             "The WORKING-STORAGE SECTION",
             "The USING clause of the CALL statement",
             "The LINKAGE SECTION",
             "The FILE SECTION"
         ],
         correct: 1,
         explanation: "The USING clause in a subprogram's PROCEDURE DIVISION header must correspond with the USING clause of the CALL statement."
     },
     {
         question: "A collection of Control Intervals in a VSAM KSDS file is known as a what?",
         options: [
             "Control Area (CA)",
             "Control Interval (CI)",
             "Data Component",
             "Index Component"
         ],
         correct: 0,
         explanation: "A collection of Control Intervals in a VSAM KSDS file is known as a Control Area (CA)."
     },
     {
         question: "To add a brand new record to a KSDS file, which I/O statement is used?",
         options: [
             "REWRITE",
             "WRITE",
             "DELETE",
             "START"
         ],
         correct: 1,
         explanation: "WRITE is used to add a brand new record to a KSDS file."
     },
     {
         question: "In a two-dimensional table, how are individual elements typically accessed?",
         options: [
             "By using one subscript",
             "By using two subscripts",
             "By using an index",
             "By using a pointer"
         ],
         correct: 1,
         explanation: "In a two-dimensional table, individual elements are typically accessed by using two subscripts."
     },
     {
         question: "The SQLCA (SQL Communication Area) is primarily used for what purpose?",
         options: [
             "To store data",
             "To check the status of the most recently executed EXEC SQL statement",
             "To define host variables",
             "To create cursors"
         ],
         correct: 1,
         explanation: "The SQLCA is primarily used to check the status of the most recently executed EXEC SQL statement."
     }
];

// Coding Questions Section
const codingQuestions = [
     {
         question: "File Processing (KSDS): Write a COBOL program that reads a KSDS file sequentially, displays Branch-Number and Net-Sales for each record, groups records by Branch-Number and calculates total net sales per branch, displays branch totals when branch changes, and displays grand total at the end. Which ACCESS MODE should be used?",
         options: [
             "ACCESS IS RANDOM",
             "ACCESS IS SEQUENTIAL",
             "ACCESS IS DYNAMIC",
             "ACCESS IS EXCLUSIVE"
         ],
         correct: 1,
         explanation: "ACCESS IS SEQUENTIAL is required for reading the file sequentially and implementing control break logic. The file is already sorted by branch number."
     },
     {
         question: "File Processing (KSDS): In the control break logic for the sales report, what statement should be used to detect when the branch number changes?",
         options: [
             "IF CURRENT-BRANCH NOT EQUAL TO PREVIOUS-BRANCH",
             "EVALUATE CURRENT-BRANCH",
             "PERFORM UNTIL END-OF-FILE",
             "READ sales-file AT END"
         ],
         correct: 0,
         explanation: "IF CURRENT-BRANCH NOT EQUAL TO PREVIOUS-BRANCH is the standard control break logic to detect when the branch number changes and trigger the printing of branch totals."
     },
     {
         question: "File Processing (KSDS): What should be done before processing the first record in a control break program?",
         options: [
             "Initialize all totals to zero",
             "Read the first record and save its control field values",
             "Both A and B",
             "Open the file for input"
         ],
         correct: 2,
         explanation: "Both initializing totals to zero and reading the first record to save control field values are essential steps before processing begins in a control break program."
     },
     {
         question: "Subprogram (Future Value): When calling a subprogram to calculate future value, what parameter passing method should be used?",
         options: [
             "BY VALUE",
             "BY REFERENCE",
             "BY CONTENT",
             "BY COPY"
         ],
         correct: 1,
         explanation: "BY REFERENCE is the default and most appropriate method for passing parameters to a subprogram, allowing the subprogram to return calculated values."
     },
     {
         question: "Subprogram (Future Value): In the subprogram's LINKAGE SECTION, how should the future value parameter be defined?",
         options: [
             "As a working storage variable",
             "As a parameter that can receive the calculated result",
             "As a file definition",
             "As a constant value"
         ],
         correct: 1,
         explanation: "The future value parameter in the LINKAGE SECTION should be defined to receive the calculated result from the subprogram back to the calling program."
     },
     {
         question: "Subprogram (Future Value): What statement should the subprogram use to return control to the calling program?",
         options: [
             "STOP RUN",
             "GOBACK",
             "EXIT PROGRAM",
             "RETURN"
         ],
         correct: 1,
         explanation: "GOBACK is the correct statement for a subprogram to return control to the calling program. STOP RUN would terminate the entire program."
     },
     {
         question: "File Processing (KSDS): What statement should be used to read records from the KSDS file in the control break program?",
         options: [
             "READ sales-file",
             "READ sales-file AT END",
             "READ sales-file AT END MOVE 'YES' TO ws-eof-flag",
             "READ sales-file WITH NO LOCK"
         ],
         correct: 2,
         explanation: "READ sales-file AT END MOVE 'YES' TO ws-eof-flag is the correct pattern for reading records and handling end-of-file condition in a control break program."
     },
     {
         question: "Subprogram (Future Value): What is the correct formula for calculating future value in the subprogram?",
         options: [
             "FV = Principal × (1 + Rate)^Years",
             "FV = Principal + (Rate × Years)",
             "FV = Principal × Rate × Years",
             "FV = Principal / (1 + Rate)^Years"
         ],
         correct: 0,
         explanation: "FV = Principal × (1 + Rate)^Years is the correct compound interest formula for calculating future value."
     },
     {
         question: "File Processing (KSDS): When should the grand total be displayed in the control break program?",
         options: [
             "After processing each record",
             "After displaying each branch total",
             "After the main processing loop ends",
             "At the beginning of the program"
         ],
         correct: 2,
         explanation: "The grand total should be displayed after the main processing loop ends, typically after the final branch total has been printed."
     },
     {
         question: "Subprogram (Future Value): How should the main program call the subprogram for future value calculation?",
         options: [
             "CALL 'FVPROG' USING ws-principal, ws-rate, ws-years, ws-future-value",
             "CALL FVPROG USING ws-principal ws-rate ws-years ws-future-value",
             "CALL 'FVPROG' USING ws-principal ws-rate ws-years ws-future-value",
             "PERFORM FVPROG USING ws-principal ws-rate ws-years ws-future-value"
         ],
         correct: 2,
         explanation: "CALL 'FVPROG' USING ws-principal ws-rate ws-years ws-future-value is the correct syntax for calling a subprogram with multiple parameters."
     },
     {
         question: "File Processing (Random KSDS): When accessing a KSDS file randomly to find a customer record, what ACCESS MODE should be used?",
         options: [
             "ACCESS IS SEQUENTIAL",
             "ACCESS IS RANDOM",
             "ACCESS IS DYNAMIC",
             "ACCESS IS EXCLUSIVE"
         ],
         correct: 1,
         explanation: "ACCESS IS RANDOM is required for direct access to records by key value, allowing you to read specific customer records without processing the entire file."
     },
     {
         question: "File Processing (Random KSDS): What statement should be used to read a specific record when using random access?",
         options: [
             "READ cust-file NEXT RECORD",
             "READ cust-file",
             "READ cust-file AT END",
             "READ cust-file WITH NO LOCK"
         ],
         correct: 1,
         explanation: "READ cust-file is the correct statement for random access. The key value must be placed in the RECORD KEY field before executing the READ."
     },
     {
         question: "File Processing (KSDS Update): When updating a record in a KSDS file, what OPEN mode should be used?",
         options: [
             "OPEN INPUT",
             "OPEN OUTPUT",
             "OPEN I-O",
             "OPEN EXTEND"
         ],
         correct: 2,
         explanation: "OPEN I-O (Input-Output) is required for updating existing records in a KSDS file, allowing both read and write operations."
     },
     {
         question: "File Processing (KSDS Update): What statement should be used to update an existing record in a KSDS file?",
         options: [
             "WRITE prod-rec",
             "REWRITE prod-rec",
             "DELETE prod-file",
             "START prod-file"
         ],
         correct: 1,
         explanation: "REWRITE prod-rec is used to update an existing record that was just read from the file. The record must be read first before it can be rewritten."
     },
     {
         question: "File Processing (KSDS Delete): When deleting a record from a KSDS file, what statement should be used?",
         options: [
             "DELETE prod-rec",
             "DELETE prod-file RECORD",
             "DELETE prod-file",
             "REMOVE prod-rec"
         ],
         correct: 1,
         explanation: "DELETE prod-file RECORD is the correct syntax for deleting a record from a KSDS file. The key of the record to be deleted must be in the RECORD KEY field."
     },
     {
         question: "Subprogram (Payroll): In a payroll calculation subprogram, what should be the first statement in the PROCEDURE DIVISION?",
         options: [
             "PROCEDURE DIVISION.",
             "PROCEDURE DIVISION USING p-hours p-rate p-gross p-net.",
             "PROCEDURE DIVISION USING p-hours, p-rate, p-gross, p-net.",
             "PROCEDURE DIVISION USING p-hours p-rate p-gross p-net"
         ],
         correct: 1,
         explanation: "PROCEDURE DIVISION USING p-hours p-rate p-gross p-net. is the correct syntax for defining parameters in a subprogram's procedure division."
     },
     {
         question: "Subprogram (Temperature): What is the correct formula for converting Celsius to Fahrenheit in a subprogram?",
         options: [
             "F = (C × 9/5) + 32",
             "F = C × 9/5 + 32",
             "F = (C + 32) × 9/5",
             "F = C + 32"
         ],
         correct: 0,
         explanation: "F = (C × 9/5) + 32 is the correct formula for converting Celsius to Fahrenheit. The parentheses ensure proper order of operations."
     },
     {
         question: "Subprogram (Loan Payment): What is the correct formula for calculating monthly loan payments?",
         options: [
             "Payment = (Principal × Rate) / (1 - (1 + Rate)^(-Periods))",
             "Payment = Principal × Rate × Periods",
             "Payment = Principal / Periods",
             "Payment = Principal × (1 + Rate)^Periods"
         ],
         correct: 0,
         explanation: "Payment = (Principal × Rate) / (1 - (1 + Rate)^(-Periods)) is the correct formula for calculating monthly loan payments using compound interest."
     },
     {
         question: "Subprogram (String Reverse): When reversing a string in a subprogram, what PERFORM statement should be used?",
         options: [
             "PERFORM VARYING idx FROM 1 BY 1 UNTIL idx > LENGTH OF p-str",
             "PERFORM VARYING idx FROM LENGTH OF p-str BY -1 UNTIL idx = 0",
             "PERFORM UNTIL idx = 0",
             "PERFORM WITH TEST AFTER"
         ],
         correct: 1,
         explanation: "PERFORM VARYING idx FROM LENGTH OF p-str BY -1 UNTIL idx = 0 is the correct pattern for processing a string from end to beginning to reverse it."
     },
     {
         question: "Subprogram (Multi-Parameter): When finding the maximum of three values in a subprogram, what logic should be used?",
         options: [
             "IF p1 > p2 AND p1 > p3 MOVE p1 TO p-max",
             "IF p1 >= p2 AND p1 >= p3 MOVE p1 TO p-max ELSE IF p2 >= p1 AND p2 >= p3 MOVE p2 TO p-max ELSE MOVE p3 TO p-max",
             "EVALUATE p1 WHEN > p2 AND > p3 MOVE p1 TO p-max",
             "PERFORM VARYING idx FROM 1 TO 3"
         ],
         correct: 1,
         explanation: "IF p1 >= p2 AND p1 >= p3 MOVE p1 TO p-max ELSE IF p2 >= p1 AND p2 >= p3 MOVE p2 TO p-max ELSE MOVE p3 TO p-max is the correct logic for finding the maximum of three values."
     },
     {
         question: "Payroll Calculation: When calling a subprogram to calculate gross pay and net pay, what parameter passing method should be used?",
         options: [
             "BY VALUE",
             "BY REFERENCE",
             "BY CONTENT",
             "BY COPY"
         ],
         correct: 1,
         explanation: "BY REFERENCE is the default and most appropriate method for passing parameters to a subprogram, allowing the subprogram to return calculated values."
     },
     {
         question: "Payroll Calculation: In the subprogram's LINKAGE SECTION for payroll calculation, how should the net pay parameter be defined?",
         options: [
             "As a working storage variable",
             "As a parameter that can receive the calculated result",
             "As a file definition",
             "As a constant value"
         ],
         correct: 1,
         explanation: "The net pay parameter in the LINKAGE SECTION should be defined to receive the calculated result from the subprogram back to the calling program."
     },
     {
         question: "Temperature Conversion: What is the correct formula for converting Celsius to Fahrenheit in a subprogram?",
         options: [
             "F = C × 9/5 + 32",
             "F = C × 5/9 + 32",
             "F = C + 32",
             "F = C × 2 + 30"
         ],
         correct: 0,
         explanation: "F = C × 9/5 + 32 is the correct formula for converting Celsius to Fahrenheit."
     },
     {
         question: "Temperature Conversion: When calling a temperature conversion subprogram, what statement should the subprogram use to return control?",
         options: [
             "STOP RUN",
             "GOBACK",
             "EXIT PROGRAM",
             "RETURN"
         ],
         correct: 1,
         explanation: "GOBACK is the correct statement for a subprogram to return control to the calling program. STOP RUN would terminate the entire program."
     },
     {
         question: "Loan Payment Calculation: What is the correct formula for calculating monthly loan payments in a subprogram?",
         options: [
             "Payment = Principal × Rate × Number of Payments",
             "Payment = (Principal × Rate) / (1 - (1 + Rate)^(-Number of Payments))",
             "Payment = Principal / Number of Payments",
             "Payment = Principal × (1 + Rate)^Number of Payments"
         ],
         correct: 1,
         explanation: "Payment = (Principal × Rate) / (1 - (1 + Rate)^(-Number of Payments)) is the correct formula for calculating monthly loan payments."
     },
     {
         question: "String Reverse: When reversing a string in a subprogram, what pattern should be used to process the string from end to beginning?",
         options: [
             "PERFORM VARYING idx FROM 1 BY 1 UNTIL idx > LENGTH OF p-str",
             "PERFORM VARYING idx FROM LENGTH OF p-str BY -1 UNTIL idx = 0",
             "PERFORM UNTIL idx = 0",
             "PERFORM VARYING idx FROM 1 TO LENGTH OF p-str"
         ],
         correct: 1,
         explanation: "PERFORM VARYING idx FROM LENGTH OF p-str BY -1 UNTIL idx = 0 is the correct pattern for processing a string from end to beginning to reverse it."
     },
     {
         question: "Multi-Parameter Math: When calculating the average of three numbers in a subprogram, what formula should be used?",
         options: [
             "Average = (n1 + n2) / 2",
             "Average = (n1 + n2 + n3) / 3",
             "Average = n1 + n2 + n3",
             "Average = (n1 × n2 × n3) / 3"
         ],
         correct: 1,
         explanation: "Average = (n1 + n2 + n3) / 3 is the correct formula for calculating the average of three numbers."
     },
     {
         question: "Multi-Parameter Math: When finding the maximum of three values in a subprogram, what logic should be used?",
         options: [
             "IF p1 > p2 AND p1 > p3 MOVE p1 TO p-max",
             "IF p1 >= p2 AND p1 >= p3 MOVE p1 TO p-max ELSE IF p2 >= p1 AND p2 >= p3 MOVE p2 TO p-max ELSE MOVE p3 TO p-max",
             "EVALUATE p1 WHEN > p2 AND > p3 MOVE p1 TO p-max",
             "PERFORM VARYING idx FROM 1 TO 3"
         ],
         correct: 1,
         explanation: "IF p1 >= p2 AND p1 >= p3 MOVE p1 TO p-max ELSE IF p2 >= p1 AND p2 >= p3 MOVE p2 TO p-max ELSE MOVE p3 TO p-max is the correct logic for finding the maximum of three values."
     },
     {
         question: "Control Break Processing: In the BRANCH-SUMMARY program, what triggers the printing of branch totals?",
         options: [
             "When EOF is reached",
             "When BRANCH NOT = WS-CURRENT-BRANCH",
             "When SALE-AMT exceeds a threshold",
             "When WS-BRANCH-TOTAL reaches maximum"
         ],
         correct: 1,
         explanation: "Branch totals are printed when BRANCH NOT = WS-CURRENT-BRANCH, indicating a change in the control field (branch)."
     },
     {
         question: "Control Break Processing: What must be done when a control break occurs in the BRANCH-SUMMARY program?",
         options: [
             "Only print the current total",
             "Print branch total, update current branch, and reset branch total to 0",
             "Close and reopen the file",
             "Skip to the next record"
         ],
         correct: 1,
         explanation: "When a control break occurs, you must print the branch total, move the new branch to WS-CURRENT-BRANCH, and reset WS-BRANCH-TOTAL to 0."
     },
     {
         question: "Control Break Processing: Why is the first record handled specially in control break logic?",
         options: [
             "To validate the file format",
             "To establish the initial control field value (WS-CURRENT-BRANCH)",
             "To count total records",
             "To check for empty files"
         ],
         correct: 1,
         explanation: "The first record establishes the initial control field value (MOVE BRANCH TO WS-CURRENT-BRANCH) before processing begins."
     },
     {
         question: "Subprogram Design: In the FV-CALC subprogram, how is the interest rate converted from percentage to decimal?",
         options: [
             "COMPUTE WS-RATE-DEC = L-RATE * 100",
             "COMPUTE WS-RATE-DEC = L-RATE / 100",
             "MOVE L-RATE TO WS-RATE-DEC",
             "COMPUTE WS-RATE-DEC = L-RATE + 100"
         ],
         correct: 1,
         explanation: "The rate is converted from percentage to decimal using COMPUTE WS-RATE-DEC = L-RATE / 100 (e.g., 5.000% becomes 0.05000)."
     },
     {
         question: "Subprogram Design: What is the purpose of WS-ONE-PLUS in the FV-CALC subprogram?",
         options: [
             "To store the original principal amount",
             "To store (1 + interest rate) for the compound interest calculation",
             "To count the number of periods",
             "To store the final future value"
         ],
         correct: 1,
         explanation: "WS-ONE-PLUS stores (1 + interest rate) which is used repeatedly in the compound interest calculation (1+r)^n."
     },
     {
         question: "Subprogram Design: How is the power calculation (1+r)^n implemented in FV-CALC?",
         options: [
             "Using the COMPUTE statement with exponentiation",
             "Using a PERFORM VARYING loop to multiply WS-ONE-PLUS by itself N times",
             "Using built-in power functions",
             "Using logarithmic calculations"
         ],
         correct: 1,
         explanation: "The power is calculated using PERFORM VARYING to multiply WS-ONE-PLUS by itself N times: COMPUTE WS-POWER = WS-POWER * WS-ONE-PLUS."
     },
     {
         question: "File Processing: In the BRANCH-SUMMARY program, what data type is used for WS-BRANCH-TOTAL and why?",
         options: [
             "PIC 9(11)V99 for simple numeric storage",
             "PIC S9(11)V99 COMP-3 for signed packed decimal efficiency",
             "PIC X(11) for character processing",
             "PIC 9(11) for integer calculations only"
         ],
         correct: 1,
         explanation: "PIC S9(11)V99 COMP-3 is used for efficient packed decimal storage with sign, suitable for financial calculations and totals."
     },
     {
         question: "File Processing: What is the purpose of the EDIT-BRANCH-TOTAL field in BRANCH-SUMMARY?",
         options: [
             "To store the raw calculation results",
             "To provide formatted output with commas and decimal points (ZZ,ZZZ,ZZ9.99)",
             "To validate input data",
             "To count the number of records"
         ],
         correct: 1,
         explanation: "EDIT-BRANCH-TOTAL (PIC ZZ,ZZZ,ZZ9.99) provides formatted output with zero suppression, commas, and decimal points for reporting."
     },
     {
         question: "Subprogram Parameters: In the FV-CALC CALL statement, what parameter passing method is used?",
         options: [
             "BY CONTENT - passes copies of the values",
             "BY REFERENCE - passes addresses of the variables (default)",
             "BY VALUE - passes literal values only",
             "BY POINTER - passes memory addresses"
         ],
         correct: 1,
         explanation: "BY REFERENCE is the default parameter passing method, allowing the subprogram to modify the caller's variables (like WS-FV)."
     },
     {
         question: "Working-Storage Design: Why are 88-level condition names used in both programs (EOF-YES, EOF-NO)?",
         options: [
             "To save memory space",
             "To provide readable boolean logic and improve code maintainability",
             "To speed up processing",
             "To comply with COBOL standards"
         ],
         correct: 1,
         explanation: "88-level condition names (EOF-YES, EOF-NO) provide readable boolean logic, making the code more maintainable than comparing against literal values."
     },
     {
         question: "Error Handling: What happens in BRANCH-SUMMARY if the input file is empty?",
         options: [
             "The program abends with an error",
             "Processing continues with zero totals",
             "'*** NO DATA ***' is written to the report and processing stops",
             "The program waits for input"
         ],
         correct: 2,
         explanation: "If EOF-YES after the first read, the program writes '*** NO DATA ***' to the report and exits gracefully."
     },
     {
         question: "In DFSort, the SORTFIELDS statement specifies:",
         options: [
             "The type of VSAM file to process",
             "The start position, length, data type, and sequence for sorting",
             "Which JCL procedure to run",
             "The file access mode in COBOL"
         ],
         correct: 1,
         explanation: "SORTFIELDS tells DFSort where to start, how long the key is, what type it is, and the sort order."
     },
     {
         question: "The smallest unit of I/O in a VSAM dataset is:",
         options: [
             "Control Area (CA)",
             "Control Interval (CI)",
             "Block",
             "Track"
         ],
         correct: 1,
         explanation: "A CI is the smallest block of data VSAM reads/writes in a single operation."
     },
     {
         question: "Which AMS command displays catalog information for a dataset?",
         options: [
             "PRINT",
             "LISTCAT",
             "REPRO",
             "ALTER"
         ],
         correct: 1,
         explanation: "LISTCAT lists metadata and attributes from the catalog."
     },
     {
         question: "In KSDS random access, the ACCESS MODE must be:",
         options: [
             "SEQUENTIAL",
             "RANDOM",
             "DYNAMIC",
             "EXCLUSIVE"
         ],
         correct: 1,
         explanation: "RANDOM access allows direct retrieval by primary key."
     },
     {
         question: "The INVALID KEY clause is used in COBOL to:",
         options: [
             "Skip a record when sequentially reading",
             "Handle errors when a key is not found or duplicate key occurs",
             "Reorganize VSAM datasets",
             "Prevent file locks"
         ],
         correct: 1,
         explanation: "The INVALID KEY clause handles errors when a key is not found or duplicate key occurs."
     },
     {
         question: "Which clause allows multiple records to share the same alternate key?",
         options: [
             "WITH NONUNIQUE KEYS",
             "WITH DUPLICATES",
             "ALLOW DUPLICATES",
             "WITH NONUNIQUE INDEX"
         ],
         correct: 1,
         explanation: "WITH DUPLICATES allows multiple records to share the same alternate key."
     },
     {
         question: "The EVALUATE statement in COBOL is similar to:",
         options: [
             "FOR loop",
             "SWITCH or CASE statement in other languages",
             "IF without ELSE",
             "GOTO"
         ],
         correct: 1,
         explanation: "The EVALUATE statement is similar to SWITCH or CASE statements in other programming languages."
     },
     {
         question: "What must happen before you can REWRITE a KSDS record?",
         options: [
             "OPEN the file in INPUT mode",
             "Use the START statement",
             "READ the record first",
             "DELETE the record first"
         ],
         correct: 2,
         explanation: "You must READ the record first before you can REWRITE it."
     },
     {
         question: "Which numeric editing symbol displays a negative value with \"CR\"?",
         options: [
             "–",
             "DB",
             "CR",
             "NEG"
         ],
         correct: 2,
         explanation: "The CR editing symbol displays a negative value with \"CR\"."
     },
     {
         question: "In sequential KSDS processing, the START statement:",
         options: [
             "Reads the first record",
             "Positions the file pointer to a specified key value",
             "Closes the file",
             "Deletes a record"
         ],
         correct: 1,
         explanation: "The START statement positions the file pointer to a specified key value."
     },
     {
         question: "Default parameter passing in COBOL is:",
         options: [
             "BY VALUE",
             "BY REFERENCE",
             "BY CONTENT",
             "BY ADDRESS"
         ],
         correct: 1,
         explanation: "Default parameter passing in COBOL is BY REFERENCE."
     },
     {
         question: "In a COBOL subprogram, parameters are defined in:",
         options: [
             "WORKING-STORAGE SECTION",
             "LINKAGE SECTION",
             "ENVIRONMENT DIVISION",
             "PROCEDURE DIVISION"
         ],
         correct: 1,
         explanation: "In a COBOL subprogram, parameters are defined in the LINKAGE SECTION."
     },
     {
         question: "In DB2 programming, the SQLCODE value 100 means:",
         options: [
             "Successful execution",
             "No rows found",
             "Syntax error in SQL",
             "Duplicate row found"
         ],
         correct: 1,
         explanation: "SQLCODE value 100 means no rows found."
     },
     {
         question: "Which step is performed first when preparing a COBOL DB2 program?",
         options: [
             "Compile",
             "Precompile",
             "Link",
             "Bind"
         ],
         correct: 1,
         explanation: "Precompile is performed first when preparing a COBOL DB2 program."
     },
     {
         question: "The DBRM is created during which step?",
         options: [
             "Bind",
             "Compile",
             "Link",
             "Precompile"
         ],
         correct: 3,
         explanation: "The DBRM is created during the Precompile step."
     },
     {
         question: "Which AMS command is used to copy data between datasets?",
         options: [
             "PRINT",
             "REPRO",
             "ALTER",
             "EXPORT"
         ],
         correct: 1,
         explanation: "The REPRO command is used to copy data between datasets."
     },
     {
         question: "In multi-level control break logic, the highest-level break must be:",
         options: [
             "Checked last",
             "Checked first",
             "Ignored if there is an inner break",
             "Printed without totals"
         ],
         correct: 1,
         explanation: "In multi-level control break logic, the highest-level break must be checked first."
     },
     {
         question: "An S0C7 abend occurs when:",
         options: [
             "A dataset is not found",
             "Non-numeric data is used in a numeric calculation",
             "A duplicate record is inserted into KSDS",
             "DB2 connection is lost"
         ],
         correct: 1,
         explanation: "An S0C7 abend occurs when non-numeric data is used in a numeric calculation."
     },
     {
         question: "In DFSort, SORT FIELDS=COPY is used to:",
         options: [
             "Copy records without sorting",
             "Copy records and sort in ascending order",
             "Copy only duplicate records",
             "Copy only records matching criteria"
         ],
         correct: 0,
         explanation: "SORT FIELDS=COPY is used to copy records without sorting."
     },
     {
         question: "In DB2, a cursor must be:",
         options: [
             "Opened before declared",
             "Declared before opened",
             "Closed before fetching",
             "Fetched before declared"
         ],
         correct: 1,
         explanation: "In DB2, a cursor must be declared before opened."
     },
     {
         question: "Which AMS command deletes a dataset?",
         options: [
             "PURGE",
             "DELETE",
             "ERASE",
             "REMOVE"
         ],
         correct: 1,
         explanation: "The DELETE command deletes a dataset."
     },
     {
         question: "In KSDS, alternate key access requires:",
         options: [
             "CA sizing",
             "An AIX (Alternate Index)",
             "LISTCAT",
             "DBRM"
         ],
         correct: 1,
         explanation: "In KSDS, alternate key access requires an AIX (Alternate Index)."
     },
     {
         question: "COBOL PERFORM VARYING is used to:",
         options: [
             "Call a subprogram",
             "Loop with a changing counter",
             "Sort records",
             "Perform error handling"
         ],
         correct: 1,
         explanation: "COBOL PERFORM VARYING is used to loop with a changing counter."
     },
     {
         question: "SQLCA in COBOL is used to:",
         options: [
             "Control cursor position",
             "Store database status after each SQL",
             "Define host variables",
             "Bind SQL statements"
         ],
         correct: 1,
         explanation: "SQLCA in COBOL is used to store database status after each SQL."
     },
     {
         question: "The WITH DUPLICATES phrase in alternate keys:",
         options: [
             "Prevents duplicate alternate keys",
             "Allows duplicate alternate keys",
             "Deletes duplicate records",
             "Skips duplicate keys during read"
         ],
         correct: 1,
         explanation: "The WITH DUPLICATES phrase in alternate keys allows duplicate alternate keys."
     },
     {
         question: "In a DFSORT job, which DD statement specifies the input dataset to be sorted?",
         options: [
             "SORTOUT",
             "SORTIN",
             "SYSIN",
             "SYSOUT"
         ],
         correct: 1,
         explanation: "SORTIN specifies the input dataset to be sorted in a DFSORT job."
     },
     {
         question: "In DFSORT, which DD statement specifies the dataset that will receive the sorted output?",
         options: [
             "SORTIN",
             "SORTOUT",
             "SYSIN",
             "SYSOUT"
         ],
         correct: 1,
         explanation: "SORTOUT specifies the dataset that will receive the sorted output in DFSORT."
     },
     {
         question: "In the SORTFIELDS parameter, what does the \"CH\" type code indicate?",
         options: [
             "Packed decimal",
             "Character data",
             "Binary data",
             "Floating-point data"
         ],
         correct: 1,
         explanation: "The \"CH\" type code in SORTFIELDS indicates character data."
     },
     {
         question: "Which of the following correctly lists the four elements used in a SORTFIELDS sub-parameter?",
         options: [
             "Length, Sequence, Key position, Data type",
             "Start position, Length, Data type, Sequence (A/D)",
             "File name, Record count, Key field, Sequence",
             "Start position, End position, Format, Order"
         ],
         correct: 1,
         explanation: "The four elements in a SORTFIELDS sub-parameter are: Start position, Length, Data type, and Sequence (A/D)."
     },
     {
         question: "In VSAM terminology, the smallest unit of information that can be transferred between memory and disk is the:",
         options: [
             "Control Block",
             "Control Area (CA)",
             "Control Interval (CI)",
             "Data Block"
         ],
         correct: 2,
         explanation: "The Control Interval (CI) is the smallest unit of information that can be transferred between memory and disk in VSAM."
     },
     {
         question: "Which AMS command is used to create a new KSDS dataset?",
         options: [
             "DEFINE CLUSTER",
             "DEFINE ALTERNATEINDEX",
             "LISTCAT",
             "REPRO"
         ],
         correct: 0,
         explanation: "DEFINE CLUSTER is the AMS command used to create a new KSDS dataset."
     },
     {
         question: "When defining a KSDS with AMS, which parameter specifies where the key starts and its length?",
         options: [
             "VOLUMES",
             "RECORDSIZE",
             "KEYS",
             "INDEXED"
         ],
         correct: 2,
         explanation: "The KEYS parameter specifies where the key starts and its length when defining a KSDS with AMS."
     },
     {
         question: "Which AMS command is used to copy data from one dataset to another?",
         options: [
             "LISTCAT",
             "REPRO",
             "PRINT",
             "ALTER"
         ],
         correct: 1,
         explanation: "REPRO is the AMS command used to copy data from one dataset to another."
     },
     {
         question: "When allocating space for a KSDS in AMS, which parameter is used to reserve space for additional records?",
         options: [
             "RECORDSIZE",
             "FREESPACE",
             "VOLUMES",
             "INDEXED"
         ],
         correct: 1,
         explanation: "FREESPACE is the parameter used to reserve space for additional records when allocating space for a KSDS in AMS."
     },
     {
         question: "Which COBOL clause specifies the field to use when accessing a KSDS record directly?",
         options: [
             "ACCESS MODE",
             "KEY IS",
             "RECORD KEY IS",
             "ORGANIZATION"
         ],
         correct: 2,
         explanation: "RECORD KEY IS specifies the field to use when accessing a KSDS record directly."
     },
     {
         question: "Which phrase is used after a WRITE or REWRITE to handle duplicate or missing keys in a KSDS?",
         options: [
             "INVALID KEY",
             "FILE STATUS",
             "ON EXCEPTION",
             "KEY DUPLICATE"
         ],
         correct: 0,
         explanation: "INVALID KEY is used after a WRITE or REWRITE to handle duplicate or missing keys in a KSDS."
     },
     {
         question: "Which COBOL statement is best suited to replace nested IF statements for multiple condition testing?",
         options: [
             "SEARCH",
             "EVALUATE",
             "INSPECT",
             "PERFORM"
         ],
         correct: 1,
         explanation: "EVALUATE is best suited to replace nested IF statements for multiple condition testing."
     },
     {
         question: "If a DELETE statement is executed for a KSDS record that does not exist, COBOL will:",
         options: [
             "Ignore the request",
             "Return INVALID KEY",
             "End the program",
             "Overwrite with blanks"
         ],
         correct: 1,
         explanation: "If a DELETE statement is executed for a KSDS record that does not exist, COBOL will return INVALID KEY."
     },
     {
         question: "What is an alternate key in a KSDS?",
         options: [
             "A second dataset used for backups",
             "An additional index to access records by another field",
             "A duplicate of the primary key",
             "A field used to encrypt data"
         ],
         correct: 1,
         explanation: "An alternate key in a KSDS is an additional index to access records by another field."
     },
     {
         question: "In KSDS sequential access mode, which clause determines the order in which records are read?",
         options: [
             "RECORD KEY IS",
             "ACCESS MODE IS SEQUENTIAL",
             "ORGANIZATION IS INDEXED",
             "ALTERNATE RECORD KEY IS"
         ],
         correct: 0,
         explanation: "RECORD KEY IS determines the order in which records are read in KSDS sequential access mode."
     },
     {
         question: "When processing a KSDS sequentially using an alternate index, you must:",
         options: [
             "Use the base cluster's primary key",
             "Specify the alternate key in the START statement",
             "Use ACCESS MODE IS RANDOM",
             "Disable duplicate keys"
         ],
         correct: 1,
         explanation: "When processing a KSDS sequentially using an alternate index, you must specify the alternate key in the START statement."
     },
     {
         question: "In a multi-level control break, which field typically triggers the highest-level break?",
         options: [
             "The primary key field",
             "The lowest-level sort field",
             "The highest-level sort field",
             "Any numeric field"
         ],
         correct: 2,
         explanation: "In a multi-level control break, the highest-level sort field typically triggers the highest-level break."
     },
     {
         question: "Where are variables that a subprogram receives from a calling program defined?",
         options: [
             "WORKING-STORAGE SECTION",
             "LINKAGE SECTION",
             "LOCAL-STORAGE SECTION",
             "PROCEDURE DIVISION"
         ],
         correct: 1,
         explanation: "Variables that a subprogram receives from a calling program are defined in the LINKAGE SECTION."
     },
     {
         question: "Which of the following is a valid way to reference an element in a two-dimensional table in COBOL?",
         options: [
             "TableName(ROW, COL)",
             "TableName(ROW COL)",
             "TableName(ROW)(COL)",
             "TableName(ROW:COL)"
         ],
         correct: 2,
         explanation: "TableName(ROW)(COL) is the valid way to reference an element in a two-dimensional table in COBOL."
     },
     {
         question: "To fix a S0C7 abend, you should first:",
         options: [
             "Rerun the job",
             "Delete the file and reload it",
             "Use the dump to locate the invalid data and correct it",
             "Add more working storage"
         ],
         correct: 2,
         explanation: "To fix a S0C7 abend, you should first use the dump to locate the invalid data and correct it."
     },
     {
         question: "In DB2, which utility allows you to enter and run SQL statements interactively on the mainframe?",
         options: [
             "DCLGEN",
             "SPUFI",
             "DSNTEP2",
             "QMF"
         ],
         correct: 1,
         explanation: "SPUFI (SQL Processor Using File Input) allows you to enter and run SQL statements interactively on the mainframe."
     },
     {
         question: "In an embedded SQL program, which structure contains the most recent SQL return code?",
         options: [
             "SQLDA",
             "SQLCA",
             "DBRM",
             "SYSIBM"
         ],
         correct: 1,
         explanation: "SQLCA (SQL Communication Area) contains the most recent SQL return code in embedded SQL programs."
     },
     {
         question: "An SQLCODE of 100 indicates:",
         options: [
             "Duplicate key",
             "End of data / No rows found",
             "Invalid host variable",
             "SQL statement not executed"
         ],
         correct: 1,
         explanation: "An SQLCODE of 100 indicates end of data or no rows found."
     },
     {
         question: "In DB2 embedded SQL, what is the purpose of the DECLARE CURSOR statement?",
         options: [
             "Define the SQLCA",
             "Specify the SELECT statement for a result set",
             "Open the database connection",
             "Bind the program to the DB2 subsystem"
         ],
         correct: 1,
         explanation: "The DECLARE CURSOR statement specifies the SELECT statement for a result set in DB2 embedded SQL."
     },
     {
         question: "What must be done before a cursor can be reused for a different query?",
         options: [
             "CLOSE it and then OPEN it again",
             "RESET it",
             "REDECLARE it",
             "BIND it again"
         ],
         correct: 0,
         explanation: "Before a cursor can be reused for a different query, you must CLOSE it and then OPEN it again."
     },
     {
         question: "Which is the correct sequence for preparing and running a COBOL/DB2 program?",
         options: [
             "Compile → Precompile → Link → Bind",
             "Precompile → Compile → Link → Bind",
             "Precompile → Link → Compile → Bind",
             "Bind → Precompile → Compile → Link"
         ],
         correct: 1,
         explanation: "The correct sequence for preparing and running a COBOL/DB2 program is: Precompile → Compile → Link → Bind."
     },
     {
         question: "In DB2, what does the BIND process do?",
         options: [
             "Allocates space for a table",
             "Associates a DBRM with a database plan/package",
             "Generates SQL statements",
             "Creates a cursor"
         ],
         correct: 1,
         explanation: "The BIND process associates a DBRM (Database Request Module) with a database plan/package."
     }
];

// True/False Questions Section
const trueFalseQuestions = [
     {
         question: "A S0C7 abend is a compile-time error.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - A S0C7 abend is a run-time error, not a compile-time error."
     },
     {
         question: "The SORTOUT DD statement in a DFSort job specifies the input file.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - SORTOUT is for the output file."
     },
     {
         question: "The EVALUATE statement can only check for a single condition.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - It can check multiple WHEN conditions."
     },
     {
         question: "The LINKAGE SECTION is defined in the calling program.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - It is defined in the called program/subprogram."
     },
     {
         question: "The CR editing symbol will appear even if the field's value is positive.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - It only appears for negative values."
     },
     {
         question: "In COBOL-DB2 programs, EXEC SQL statements are ignored by the DB2 pre-compiler.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - They are specifically processed by the pre-compiler."
     },
     {
         question: "A cursor is required to process a SELECT ... INTO statement that is guaranteed to return only one row.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False."
     },
     {
         question: "The REWRITE statement can be used to add a new record to a KSDS file.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - WRITE adds new records."
     },
     {
         question: "A CALL statement permanently transfers control to a subprogram without returning.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - Control returns to the statement after the CALL when the subprogram finishes."
     },
         {
        question: "You must OPEN a file in I-O mode to perform a DELETE operation.",
        options: [
            "True",
            "False"
        ],
        correct: 0,
        explanation: "True - For indexed or relative files, you must OPEN the file in I-O mode to perform DELETE operations."
    },
         {
        question: "The SQLCA copybook is optional in a COBOL-DB2 program.",
        options: [
            "True",
            "False"
        ],
        correct: 1,
        explanation: "False - It is required if you want to check SQLCODE or SQLSTATE for database operation status."
    },
     {
         question: "A multi-level control break program will function correctly even if the input file is not sorted.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False."
     },
     {
         question: "SPUFI is a tool used for compiling COBOL programs.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - It's for executing SQL interactively."
     },
     {
         question: "Passing a parameter BY REFERENCE sends a copy of the data item to the subprogram.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - It sends the memory address of the data item."
     },
     {
         question: "The DELETE statement can be used on standard sequential files.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - It is for indexed or relative files."
     },
     {
         question: "The SQLCODE is a field located within the SQLCA copybook.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True."
     },
     {
         question: "A DBRM is created during the LINK step of the program preparation process.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - It's created during the PRECOMPILE step."
     },
     {
         question: "The LINKAGE SECTION can only contain level 01 data items.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - It can contain any valid COBOL data item definition."
     },
     {
         question: "The START statement can be used with a sequential file.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - It is for indexed or relative files."
     },
     {
         question: "A GOBACK statement in a subprogram returns control to the operating system.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - It returns control to the calling program."
     },
     {
         question: "The START statement reads a record from a file.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - It only positions the file pointer; a READ statement is needed to retrieve the record."
     },
     {
         question: "A two-dimensional table can be defined using a single OCCURS clause.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - It requires nested OCCURS clauses."
     },
     {
         question: "A Control Area (CA) contains multiple Control Intervals (CIs).",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - A Control Area (CA) contains multiple Control Intervals (CIs)."
     },
     {
         question: "KSDS files can only be accessed sequentially.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - KSDS files can be accessed sequentially, randomly, or dynamically."
     },
     {
         question: "The INVALID KEY clause can be used with WRITE, REWRITE, and DELETE statements.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - The INVALID KEY clause can be used with WRITE, REWRITE, and DELETE statements."
     },
     {
         question: "Alternate keys in KSDS must always be unique.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - Alternate keys in KSDS can allow duplicates with the WITH DUPLICATES clause."
     },
     {
         question: "EVALUATE in COBOL can test ranges using THRU.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - EVALUATE in COBOL can test ranges using THRU."
     },
     {
         question: "Before using REWRITE, you must READ the record.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - Before using REWRITE, you must READ the record."
     },
     {
         question: "The CR editing symbol is used for negative amounts.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - The CR editing symbol is used for negative amounts."
     },
     {
         question: "In KSDS sequential access, START can be used with an alternate key.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - In KSDS sequential access, START can be used with an alternate key."
     },
     {
         question: "In COBOL, parameters in subprograms are always passed BY VALUE unless specified otherwise.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - In COBOL, parameters in subprograms are passed BY REFERENCE by default."
     },
     {
         question: "The LINKAGE SECTION in a subprogram defines parameters received from the caller.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - The LINKAGE SECTION in a subprogram defines parameters received from the caller."
     },
     {
         question: "SQLCODE 0 means successful execution of SQL.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - SQLCODE 0 means successful execution of SQL."
     },
     {
         question: "The DBRM is created during the compile step.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - The DBRM is created during the precompile step."
     },
     {
         question: "REPRO can be used to copy VSAM data to a sequential file.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - REPRO can be used to copy VSAM data to a sequential file."
     },
     {
         question: "In multi-level control breaks, the inner break is processed before the outer break.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - In multi-level control breaks, the outer break is processed before the inner break."
     },
     {
         question: "An S0C7 error can be caused by uninitialized numeric fields.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - An S0C7 error can be caused by uninitialized numeric fields."
     },
     {
         question: "SORT FIELDS=COPY in DFSort changes the order of records.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - SORT FIELDS=COPY in DFSort copies records without changing their order."
     },
     {
         question: "A cursor can be FETCHed after it is CLOSED.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - A cursor cannot be FETCHed after it is CLOSED."
     },
     {
         question: "DCLGEN helps ensure COBOL data definitions match DB2 table definitions.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - DCLGEN helps ensure COBOL data definitions match DB2 table definitions."
     },
     {
         question: "In AMS, LISTCAT can display dataset attributes.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - In AMS, LISTCAT can display dataset attributes."
     },
     {
         question: "The WITH DUPLICATES clause is used in alternate key definitions.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - The WITH DUPLICATES clause is used in alternate key definitions."
     },
     {
         question: "In DB2, a SQLCODE of 100 is an error.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - In DB2, a SQLCODE of 100 is not an error; it means 'no rows found'."
     },
     {
         question: "START can only be used in RANDOM mode.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - START can be used in SEQUENTIAL or DYNAMIC mode, not RANDOM mode."
     },
     {
         question: "BY VALUE passes a copy of the data item to a subprogram.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - BY VALUE passes a copy of the data item to a subprogram."
     },
     {
         question: "KSDS DELETE requires opening the file in I-O mode.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - KSDS DELETE requires opening the file in I-O mode."
     },
     {
         question: "The REWRITE statement can change a KSDS record's key field.",
         options: [
             "True",
             "False"
         ],
         correct: 1,
         explanation: "False - The REWRITE statement cannot change a KSDS record's key field."
     },
     {
         question: "In DFSORT, secondary sort fields can be specified to break ties after sorting on the primary field.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - In DFSORT, secondary sort fields can be specified to break ties after sorting on the primary field."
     },
     {
         question: "A Control Area (CA) is made up of multiple Control Intervals (CIs).",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - A Control Area (CA) is made up of multiple Control Intervals (CIs)."
     },
     {
         question: "The LISTCAT command in AMS can display catalog information for a VSAM dataset.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - The LISTCAT command in AMS can display catalog information for a VSAM dataset."
     },
     {
         question: "In AMS, the DEFINE PATH command is used to create an association between an alternate index and its base cluster.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - In AMS, the DEFINE PATH command is used to create an association between an alternate index and its base cluster."
     },
     {
         question: "Defining a KSDS interactively in ISPF requires specifying the key length, key position, record size, and space allocation.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - Defining a KSDS interactively in ISPF requires specifying the key length, key position, record size, and space allocation."
     },
     {
         question: "In COBOL, when using READ ... WITH KEY IS ..., the key field must match the RECORD KEY defined in the FD.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - When using READ ... WITH KEY IS ..., the key field must match the RECORD KEY defined in the FD."
     },
     {
         question: "The REWRITE statement updates an existing record in a KSDS without changing its primary key.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - The REWRITE statement updates an existing record in a KSDS without changing its primary key."
     },
     {
         question: "The EVALUATE statement in COBOL is similar to a CASE structure in other languages.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - The EVALUATE statement in COBOL is similar to a CASE structure in other languages."
     },
     {
         question: "In KSDS random access mode, you must OPEN I-O or OPEN OUTPUT before performing a WRITE.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - In KSDS random access mode, you must OPEN I-O or OPEN OUTPUT before performing a WRITE."
     },
     {
         question: "A KSDS alternate key can be defined to allow duplicate values.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - A KSDS alternate key can be defined to allow duplicate values using the WITH DUPLICATES clause."
     },
     {
         question: "The START statement positions the file pointer at the first record that meets the specified key condition.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - The START statement positions the file pointer at the first record that meets the specified key condition."
     },
     {
         question: "Multi-level control break logic allows grouping and totaling data at more than one hierarchical level.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - Multi-level control break logic allows grouping and totaling data at more than one hierarchical level."
     },
     {
         question: "In COBOL, CALL BY CONTENT passes a copy of the data, and changes made in the subprogram do not affect the caller's variables.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - CALL BY CONTENT passes a copy of the data, and changes made in the subprogram do not affect the caller's variables."
     },
     {
         question: "The USING phrase in a CALL statement must list parameters in the same order as in the subprogram's PROCEDURE DIVISION header.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - The USING phrase in a CALL statement must list parameters in the same order as in the subprogram's PROCEDURE DIVISION header."
     },
     {
         question: "A S0C7 abend is most often caused by non-numeric data in a field defined with a numeric PIC clause.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - A S0C7 abend is most often caused by non-numeric data in a field defined with a numeric PIC clause."
     },
     {
         question: "DCLGEN is used to generate COBOL copybooks from DB2 table definitions.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - DCLGEN (Declarations Generator) is used to generate COBOL copybooks from DB2 table definitions."
     },
     {
         question: "An SQLCODE of 0 means the SQL statement completed successfully.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - An SQLCODE of 0 means the SQL statement completed successfully."
     },
     {
         question: "A negative SQLCODE indicates some type of error.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - A negative SQLCODE indicates some type of error."
     },
     {
         question: "After declaring a cursor, you must OPEN it before using FETCH.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - After declaring a cursor, you must OPEN it before using FETCH."
     },
     {
         question: "Host variables in embedded SQL must be defined in the WORKING-STORAGE SECTION and preceded by a colon when used in SQL statements.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - Host variables in embedded SQL must be defined in the WORKING-STORAGE SECTION and preceded by a colon when used in SQL statements."
     },
     {
         question: "The DBRM (Database Request Module) is created during precompilation and used in the bind process.",
         options: [
             "True",
             "False"
         ],
         correct: 0,
         explanation: "True - The DBRM (Database Request Module) is created during precompilation and used in the bind process."
     }
 ];

// Quiz state
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let skippedQuestions = [];
let quizCompleted = false;

// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const studyScreen = document.getElementById('study-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const studyBtn = document.getElementById('study-btn');
const exitBtn = document.getElementById('exit-btn');
const prevBtn = document.getElementById('prev-btn');
const skipBtn = document.getElementById('skip-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionCounter = document.getElementById('question-counter');
const progressFill = document.getElementById('progress-fill');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const finalScoreElement = document.getElementById('final-score');
const percentageElement = document.getElementById('percentage');
const gradeElement = document.getElementById('grade');
const questionBreakdownElement = document.getElementById('question-breakdown');
const studyQuestionsElement = document.getElementById('study-questions');
const reviewBtn = document.getElementById('review-btn');
const restartBtn = document.getElementById('restart-btn');
const backToMainBtn = document.getElementById('back-to-main');

// Initialize quiz
function initQuiz() {
    const totalQuestions = quizQuestions.length + codingQuestions.length + trueFalseQuestions.length;
    totalQuestionsElement.textContent = totalQuestions;
    userAnswers = new Array(totalQuestions).fill(null);
    skippedQuestions = new Array(totalQuestions).fill(false);
    updateProgress();
}

// Show screen
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
}

// Update progress bar and counter
function updateProgress() {
    const totalQuestions = quizQuestions.length + codingQuestions.length + trueFalseQuestions.length;
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;
    questionCounter.textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;
}

// Display current question
function displayQuestion() {
    let question;
    if (currentQuestion < quizQuestions.length) {
        question = quizQuestions[currentQuestion];
    } else if (currentQuestion < quizQuestions.length + codingQuestions.length) {
        question = codingQuestions[currentQuestion - quizQuestions.length];
    } else {
        question = trueFalseQuestions[currentQuestion - quizQuestions.length - codingQuestions.length];
    }
    
    questionText.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        
        if (userAnswers[currentQuestion] === index) {
            optionElement.classList.add('selected');
        }
        
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Show existing feedback if answer was already selected
    if (userAnswers[currentQuestion] !== null) {
        showImmediateFeedback(userAnswers[currentQuestion]);
    }
    
    // Show skip notification if question was previously skipped
    if (skippedQuestions[currentQuestion]) {
        showSkipNotification();
    }
    
    updateProgress();
    updateNavigationButtons();
}

// Select an option
function selectOption(optionIndex) {
    userAnswers[currentQuestion] = optionIndex;
    skippedQuestions[currentQuestion] = false; // Clear skip status if user answers
    
    // Update visual selection
    optionsContainer.querySelectorAll('.option').forEach((option, index) => {
        option.classList.toggle('selected', index === optionIndex);
    });
    
    // Show immediate feedback
    showImmediateFeedback(optionIndex);
    
    updateNavigationButtons();
}

// Skip current question
function skipCurrentQuestion() {
    skippedQuestions[currentQuestion] = true;
    userAnswers[currentQuestion] = null; // Clear any previous answer
    
    // Remove any existing feedback
    const existingFeedback = optionsContainer.querySelector('.feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    // Clear option selections
    optionsContainer.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Show skip notification
    showSkipNotification();
    
    updateNavigationButtons();
    
    // Auto-advance to next question after a short delay
    setTimeout(() => {
        const totalQuestions = quizQuestions.length + codingQuestions.length + trueFalseQuestions.length;
        if (currentQuestion < totalQuestions - 1) {
            currentQuestion++;
            displayQuestion();
        }
    }, 1000);
}

// Show skip notification
function showSkipNotification() {
    // Remove any existing skip notification
    const existingNotification = optionsContainer.querySelector('.question-skipped');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create skip notification
    const skipNotification = document.createElement('div');
    skipNotification.className = 'question-skipped';
    skipNotification.textContent = '⏭️ Question skipped. You can come back to this later.';
    
    // Insert notification after options
    optionsContainer.appendChild(skipNotification);
}

// Show immediate feedback for answers
function showImmediateFeedback(selectedIndex) {
    let question;
    if (currentQuestion < quizQuestions.length) {
        question = quizQuestions[currentQuestion];
    } else if (currentQuestion < quizQuestions.length + codingQuestions.length) {
        question = codingQuestions[currentQuestion - quizQuestions.length];
    } else {
        question = trueFalseQuestions[currentQuestion - quizQuestions.length - codingQuestions.length];
    }
    
    const isCorrect = selectedIndex === question.correct;
    
    // Remove any existing feedback
    const existingFeedback = optionsContainer.querySelector('.feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    // Create feedback element
    const feedbackElement = document.createElement('div');
    feedbackElement.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    
    if (isCorrect) {
        feedbackElement.textContent = '✓ Correct!';
    } else {
        feedbackElement.textContent = `✗ Incorrect. The correct answer is: ${question.options[question.correct]}`;
    }
    
    // Insert feedback after options
    optionsContainer.appendChild(feedbackElement);
}

// Update navigation buttons
function updateNavigationButtons() {
    const totalQuestions = quizQuestions.length + codingQuestions.length + trueFalseQuestions.length;
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = currentQuestion === totalQuestions - 1;
    
    if (currentQuestion === totalQuestions - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

// Calculate score
function calculateScore() {
    score = 0;
    const totalQuestions = quizQuestions.length + codingQuestions.length + trueFalseQuestions.length;
    
    for (let i = 0; i < totalQuestions; i++) {
        let question;
        if (i < quizQuestions.length) {
            question = quizQuestions[i];
        } else if (i < quizQuestions.length + codingQuestions.length) {
            question = codingQuestions[i - quizQuestions.length];
        } else {
            question = trueFalseQuestions[i - quizQuestions.length - codingQuestions.length];
        }
        
        if (userAnswers[i] === question.correct) {
            score++;
        }
    }
    return score;
}

// Calculate grade
function calculateGrade(percentage) {
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B';
    if (percentage >= 70) return 'C';
    if (percentage >= 60) return 'D';
    return 'F';
}

function showStudyMode() {
    // Set up category filter event listeners
    setupCategoryFilters();
    
    // Show all questions by default
    displayStudyQuestions('all');
    
    showScreen(studyScreen);
}

// Function to set up category filter event listeners
function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Display questions for selected category
            const category = button.getAttribute('data-category');
            displayStudyQuestions(category);
        });
    });
}

// Function to display study questions based on category
function displayStudyQuestions(category) {
    studyQuestionsElement.innerHTML = '';
    let questionNumber = 1;
    
    if (category === 'all' || category === 'mcq') {
        // Add Multiple Choice Questions
        quizQuestions.forEach((question, index) => {
            const studyQuestionElement = document.createElement('div');
            studyQuestionElement.className = 'study-question';
            studyQuestionElement.innerHTML = `
                <h4>Question ${questionNumber} (Multiple Choice)</h4>
                <div class="question-text">${question.question}</div>
                <div class="correct-answer">
                    <strong>Correct Answer:</strong> ${question.options[question.correct]}
                </div>
                <div class="explanation">
                    <strong>Explanation:</strong> ${question.explanation}
                </div>
            `;
            studyQuestionsElement.appendChild(studyQuestionElement);
            questionNumber++;
        });
    }
    
    if (category === 'all' || category === 'coding') {
        // Add Coding Questions
        codingQuestions.forEach((question, index) => {
            const studyQuestionElement = document.createElement('div');
            studyQuestionElement.className = 'study-question';
            studyQuestionElement.innerHTML = `
                <h4>Question ${questionNumber} (Coding)</h4>
                <div class="question-text">${question.question}</div>
                <div class="correct-answer">
                    <strong>Correct Answer:</strong> ${question.options[question.correct]}
                </div>
                <div class="explanation">
                    <strong>Explanation:</strong> ${question.explanation}
                </div>
            `;
            studyQuestionsElement.appendChild(studyQuestionElement);
            questionNumber++;
        });
    }
    
    if (category === 'all' || category === 'truefalse') {
        // Add True/False Questions
        trueFalseQuestions.forEach((question, index) => {
            const studyQuestionElement = document.createElement('div');
            studyQuestionElement.className = 'study-question';
            studyQuestionElement.innerHTML = `
                <h4>Question ${questionNumber} (True/False)</h4>
                <div class="question-text">${question.question}</div>
                <div class="correct-answer">
                    <strong>Correct Answer:</strong> ${question.options[question.correct]}
                </div>
                <div class="explanation">
                    <strong>Explanation:</strong> ${question.explanation}
                </div>
            `;
            studyQuestionsElement.appendChild(studyQuestionElement);
            questionNumber++;
        });
    }
}

// Show results
function showResults() {
    const totalScore = calculateScore();
    const totalQuestions = quizQuestions.length + codingQuestions.length + trueFalseQuestions.length;
    const percentage = Math.round((totalScore / totalQuestions) * 100);
    const grade = calculateGrade(percentage);
    
    finalScoreElement.textContent = `Score: ${totalScore}/${totalQuestions}`;
    percentageElement.textContent = `${percentage}%`;
    gradeElement.textContent = `Grade: ${grade}`;
    gradeElement.className = `grade ${grade}`;
    
    // Show question breakdown
    questionBreakdownElement.innerHTML = '';
    let questionNumber = 1;
    
    // Multiple Choice Questions
    quizQuestions.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.correct;
        const isSkipped = skippedQuestions[index];
        const userAnswer = userAnswers[index] !== null ? question.options[userAnswers[index]] : (isSkipped ? 'Skipped' : 'Not answered');
        const correctAnswer = question.options[question.correct];
        
        const resultElement = document.createElement('div');
        resultElement.className = `question-result ${isCorrect ? 'correct' : (isSkipped ? 'skipped' : 'incorrect')}`;
        resultElement.innerHTML = `
            <h5>Question ${questionNumber} (Multiple Choice) ${isSkipped ? '⏭️' : ''}</h5>
            <p><strong>Your answer:</strong> ${userAnswer}</p>
            <p><strong>Correct answer:</strong> ${correctAnswer}</p>
            <p><strong>Explanation:</strong> ${question.explanation}</p>
        `;
        questionBreakdownElement.appendChild(resultElement);
        questionNumber++;
    });
    
    // Coding Questions
    codingQuestions.forEach((question, index) => {
        const questionIndex = quizQuestions.length + index;
        const isCorrect = userAnswers[questionIndex] === question.correct;
        const isSkipped = skippedQuestions[questionIndex];
        const userAnswer = userAnswers[questionIndex] !== null ? question.options[userAnswers[questionIndex]] : (isSkipped ? 'Skipped' : 'Not answered');
        const correctAnswer = question.options[question.correct];
        
        const resultElement = document.createElement('div');
        resultElement.className = `question-result ${isCorrect ? 'correct' : (isSkipped ? 'skipped' : 'incorrect')}`;
        resultElement.innerHTML = `
            <h5>Question ${questionNumber} (Coding) ${isSkipped ? '⏭️' : ''}</h5>
            <p><strong>Your answer:</strong> ${userAnswer}</p>
            <p><strong>Correct answer:</strong> ${correctAnswer}</p>
            <p><strong>Explanation:</strong> ${question.explanation}</p>
        `;
        questionBreakdownElement.appendChild(resultElement);
        questionNumber++;
    });
    
    // True/False Questions
    trueFalseQuestions.forEach((question, index) => {
        const questionIndex = quizQuestions.length + codingQuestions.length + index;
        const isCorrect = userAnswers[questionIndex] === question.correct;
        const isSkipped = skippedQuestions[questionIndex];
        const userAnswer = userAnswers[questionIndex] !== null ? question.options[userAnswers[questionIndex]] : (isSkipped ? 'Skipped' : 'Not answered');
        const correctAnswer = question.options[question.correct];
        
        const resultElement = document.createElement('div');
        resultElement.className = `question-result ${isCorrect ? 'correct' : (isSkipped ? 'skipped' : 'incorrect')}`;
        resultElement.innerHTML = `
            <h5>Question ${questionNumber} (True/False) ${isSkipped ? '⏭️' : ''}</h5>
            <p><strong>Your answer:</strong> ${userAnswer}</p>
            <p><strong>Correct answer:</strong> ${correctAnswer}</p>
            <p><strong>Explanation:</strong> ${question.explanation}</p>
        `;
        questionBreakdownElement.appendChild(resultElement);
        questionNumber++;
    });
    
    showScreen(resultsScreen);
}

// Event listeners
startBtn.addEventListener('click', () => {
    showScreen(quizScreen);
    displayQuestion();
});

studyBtn.addEventListener('click', () => {
    showStudyMode();
});

exitBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to exit the quiz? Your progress will be lost.')) {
        currentQuestion = 0;
        score = 0;
        const totalQuestions = quizQuestions.length + codingQuestions.length + trueFalseQuestions.length;
        userAnswers = new Array(totalQuestions).fill(null);
        quizCompleted = false;
        showScreen(startScreen);
        initQuiz();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
});

skipBtn.addEventListener('click', () => {
    skipCurrentQuestion();
});

nextBtn.addEventListener('click', () => {
    const totalQuestions = quizQuestions.length + codingQuestions.length + trueFalseQuestions.length;
    if (currentQuestion < totalQuestions - 1) {
        currentQuestion++;
        displayQuestion();
    }
});

submitBtn.addEventListener('click', () => {
    quizCompleted = true;
    showResults();
});

reviewBtn.addEventListener('click', () => {
    currentQuestion = 0;
    showScreen(quizScreen);
    displayQuestion();
});

restartBtn.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    userAnswers = new Array(quizQuestions.length).fill(null);
    quizCompleted = false;
    showScreen(startScreen);
    initQuiz();
});

backToMainBtn.addEventListener('click', () => {
    showScreen(startScreen);
});

// Initialize the quiz
document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
}); 
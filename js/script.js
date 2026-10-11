/* Auto-generated: all weeks, programs, source code and real console output */
const WEEKS = [
 {
  "n": 1,
  "title": "Comparative Table",
  "blurb": "Java vs C vs C++ vs Python vs JavaScript",
  "kind": "table",
  "table": {
   "headers": [
    "Feature",
    "Java",
    "C",
    "C++",
    "Python",
    "JavaScript"
   ],
   "rows": [
    [
     "Developed by",
     "James Gosling (Sun Microsystems, now Oracle)",
     "Dennis Ritchie (Bell Labs)",
     "Bjarne Stroustrup (Bell Labs)",
     "Guido van Rossum",
     "Brendan Eich (Netscape)"
    ],
    [
     "Year introduced",
     "1995",
     "1972",
     "1985",
     "1991",
     "1995"
    ],
    [
     "Programming paradigm",
     "Object-oriented (class-based)",
     "Procedural",
     "Multi-paradigm (procedural + object-oriented + generic)",
     "Multi-paradigm (object-oriented, procedural, functional)",
     "Multi-paradigm (event-driven, functional, prototype-based OOP)"
    ],
    [
     "Typing",
     "Statically typed, strongly typed",
     "Statically typed, weakly typed",
     "Statically typed",
     "Dynamically typed, strongly typed",
     "Dynamically typed, weakly typed"
    ],
    [
     "Compilation / execution",
     "Compiled to bytecode, executed by the JVM (JIT)",
     "Compiled directly to machine code",
     "Compiled directly to machine code",
     "Interpreted (compiled to bytecode, run by the Python VM)",
     "Interpreted / JIT-compiled by the browser or Node.js engine"
    ],
    [
     "Platform independence",
     "Yes — \"Write Once, Run Anywhere\" through the JVM",
     "No — machine code is platform specific",
     "No — machine code is platform specific",
     "Yes — runs wherever an interpreter is available",
     "Yes — runs in any browser or in Node.js"
    ],
    [
     "Memory management",
     "Automatic (Garbage Collector)",
     "Manual (malloc / free)",
     "Manual (new / delete) with smart pointers",
     "Automatic (reference counting + garbage collector)",
     "Automatic (Garbage Collector)"
    ],
    [
     "Pointers",
     "Not supported (references only)",
     "Supported",
     "Supported",
     "Not supported",
     "Not supported"
    ],
    [
     "Object-oriented support",
     "Fully — everything except primitives is inside a class",
     "No",
     "Yes (classes, inheritance, polymorphism)",
     "Yes",
     "Yes (prototypes and ES6 classes)"
    ],
    [
     "Multiple inheritance",
     "Only through interfaces",
     "Not applicable",
     "Supported directly",
     "Supported directly",
     "Not supported (uses mixins / prototypes)"
    ],
    [
     "Multithreading",
     "Built-in language and library support",
     "Only through external libraries (pthreads)",
     "Supported since C++11",
     "Supported, limited by the GIL",
     "Single-threaded event loop (Web Workers for parallel work)"
    ],
    [
     "Execution speed",
     "Fast (JIT compilation)",
     "Very fast",
     "Very fast",
     "Slower",
     "Fast (modern JIT engines)"
    ],
    [
     "Syntax complexity",
     "Moderate — verbose but structured",
     "Moderate",
     "Complex",
     "Simple and readable",
     "Moderate, flexible"
    ],
    [
     "Entry point",
     "public static void main(String[] args)",
     "int main()",
     "int main()",
     "No fixed entry point (top-down script)",
     "No fixed entry point (script / event driven)"
    ],
    [
     "File extension",
     ".java (source), .class (bytecode)",
     ".c",
     ".cpp",
     ".py",
     ".js"
    ],
    [
     "Typical applications",
     "Enterprise software, Android apps, web back-ends, banking systems",
     "Operating systems, embedded systems, device drivers",
     "Game engines, system software, high-performance applications",
     "AI / ML, data science, automation, scripting",
     "Web front-end, web servers (Node.js), interactive websites"
    ]
   ],
   "notes": [
    "Java trades a little raw speed for portability, safety and automatic memory management, which is why it is used widely in large enterprise applications.",
    "C and C++ give direct hardware and memory access, which makes them ideal for system-level and performance-critical software.",
    "Python focuses on simplicity and rapid development, and is the most popular language for AI & ML.",
    "JavaScript is the language of the web browser and, through Node.js, of the server as well."
   ]
  },
  "programs": []
 },
 {
  "n": 2,
  "title": "JDK Installation",
  "blurb": "Installing Oracle JDK and OpenJDK on Windows",
  "kind": "programs",
  "programs": [
   {
    "no": 1,
    "title": "Oracle JDK Installation — Windows",
    "aim": "Install the Oracle JDK on a Windows system, configure the environment variables and verify the installation.",
    "steps": [
     {
      "title": "Download the installer",
      "text": "Open the official Oracle Java downloads page (oracle.com/java/technologies/downloads). Select the Windows tab and download the x64 Installer (.exe) of the required JDK version, for example jdk-21_windows-x64_bin.exe."
     },
     {
      "title": "Run the installer",
      "text": "Double-click the downloaded .exe file. Click Yes if Windows asks for permission, then click Next on the welcome screen of the Setup Wizard."
     },
     {
      "title": "Choose the destination folder",
      "text": "Keep the default installation folder C:\\Program Files\\Java\\jdk-21\\ (or browse to another folder) and click Next."
     },
     {
      "title": "Complete the installation",
      "text": "Wait until the progress bar finishes copying the files, then click Close when the \"Successfully Installed\" message appears."
     },
     {
      "title": "Set JAVA_HOME",
      "text": "Search for \"Edit the system environment variables\" → Environment Variables → under System variables click New. Variable name: JAVA_HOME and Variable value:",
      "cmd": "C:\\Program Files\\Java\\jdk-21"
     },
     {
      "title": "Add the JDK to Path",
      "text": "Select Path under System variables → Edit → New, then add the following entry and click OK on all windows:",
      "cmd": "%JAVA_HOME%\\bin"
     },
     {
      "title": "Verify the installation",
      "text": "Open a NEW Command Prompt window and run the commands below. If the version details are displayed, the JDK is installed correctly."
     }
    ],
    "terminal": [
     {
      "cmd": "java -version",
      "out": "java version \"21.0.5\" 2024-10-15 LTS\nJava(TM) SE Runtime Environment (build 21.0.5+9-LTS-239)\nJava HotSpot(TM) 64-Bit Server VM (build 21.0.5+9-LTS-239, mixed mode, sharing)"
     },
     {
      "cmd": "javac -version",
      "out": "javac 21.0.5"
     }
    ],
    "files": [],
    "notes": [
     "The version number in the output depends on the JDK version that was downloaded."
    ]
   },
   {
    "no": 2,
    "title": "OpenJDK Installation — Windows",
    "aim": "Install the OpenJDK on a Windows system by extracting the archive, configure the environment variables and verify the installation.",
    "steps": [
     {
      "title": "Download OpenJDK",
      "text": "Open jdk.java.net (or the Eclipse Temurin / Adoptium website) and download the Windows x64 ZIP archive of the required OpenJDK build, for example openjdk-21.0.2_windows-x64_bin.zip."
     },
     {
      "title": "Extract the archive",
      "text": "Right-click the ZIP file → Extract All and extract it to a permanent folder such as:",
      "cmd": "C:\\Program Files\\Java\\jdk-21.0.2"
     },
     {
      "title": "Set JAVA_HOME",
      "text": "Open Environment Variables → under System variables click New. Variable name: JAVA_HOME and Variable value (the folder that contains the bin directory):",
      "cmd": "C:\\Program Files\\Java\\jdk-21.0.2"
     },
     {
      "title": "Add OpenJDK to Path",
      "text": "Select Path → Edit → New, add the following entry and click OK on all windows:",
      "cmd": "%JAVA_HOME%\\bin"
     },
     {
      "title": "Verify the installation",
      "text": "Open a NEW Command Prompt window and run the commands below to confirm that OpenJDK is available."
     }
    ],
    "terminal": [
     {
      "cmd": "java -version",
      "out": "openjdk version \"21.0.2\" 2024-01-16\nOpenJDK Runtime Environment (build 21.0.2+13-58)\nOpenJDK 64-Bit Server VM (build 21.0.2+13-58, mixed mode, sharing)"
     },
     {
      "cmd": "javac -version",
      "out": "javac 21.0.2"
     }
    ],
    "files": [],
    "notes": [
     "Unlike the Oracle JDK there is no installer for the ZIP build, so the environment variables must be set manually."
    ]
   }
  ]
 },
 {
  "n": 3,
  "title": "Java Basics",
  "blurb": "Data types, operators, type conversion and loops",
  "kind": "programs",
  "programs": [
   {
    "no": 1,
    "title": "Hello, Java! — Basic Structure",
    "aim": "Display \"Hello, Java!\" and demonstrate the basic structure of a Java program.",
    "files": [
     {
      "name": "HelloJava.java",
      "code": "// Basic structure of a Java program\n// 1. Class declaration  2. main() method  3. Statements inside main()\n\npublic class HelloJava {                       // class name must match the file name\n\n    public static void main(String[] args) {   // entry point of every Java program\n        System.out.println(\"Hello, Java!\");    // prints text on the console\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac HelloJava.java",
      "out": ""
     },
     {
      "cmd": "java HelloJava",
      "out": "Hello, Java!"
     }
    ],
    "notes": []
   },
   {
    "no": 2,
    "title": "Primitive Data Types",
    "aim": "Declare variables of byte, short, int, long, float, double, char and boolean data types and display their values.",
    "files": [
     {
      "name": "DataTypesDemo.java",
      "code": "public class DataTypesDemo {\n    public static void main(String[] args) {\n        byte    b    = 100;\n        short   s    = 25000;\n        int     i    = 1000000;\n        long    l    = 9876543210L;\n        float   f    = 3.14f;\n        double  d    = 99.99;\n        char    c    = 'J';\n        boolean flag = true;\n\n        System.out.println(\"byte    : \" + b);\n        System.out.println(\"short   : \" + s);\n        System.out.println(\"int     : \" + i);\n        System.out.println(\"long    : \" + l);\n        System.out.println(\"float   : \" + f);\n        System.out.println(\"double  : \" + d);\n        System.out.println(\"char    : \" + c);\n        System.out.println(\"boolean : \" + flag);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac DataTypesDemo.java",
      "out": ""
     },
     {
      "cmd": "java DataTypesDemo",
      "out": "byte    : 100\nshort   : 25000\nint     : 1000000\nlong    : 9876543210\nfloat   : 3.14\ndouble  : 99.99\nchar    : J\nboolean : true"
     }
    ],
    "notes": []
   },
   {
    "no": 3,
    "title": "Arithmetic Operations on Integers",
    "aim": "Perform addition, subtraction, multiplication, division and modulus operations on two integer variables.",
    "files": [
     {
      "name": "IntegerArithmetic.java",
      "code": "public class IntegerArithmetic {\n    public static void main(String[] args) {\n        int a = 20, b = 6;\n\n        System.out.println(\"a = \" + a + \", b = \" + b);\n        System.out.println(\"Addition       (a + b) = \" + (a + b));\n        System.out.println(\"Subtraction    (a - b) = \" + (a - b));\n        System.out.println(\"Multiplication (a * b) = \" + (a * b));\n        System.out.println(\"Division       (a / b) = \" + (a / b));\n        System.out.println(\"Modulus        (a % b) = \" + (a % b));\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac IntegerArithmetic.java",
      "out": ""
     },
     {
      "cmd": "java IntegerArithmetic",
      "out": "a = 20, b = 6\nAddition       (a + b) = 26\nSubtraction    (a - b) = 14\nMultiplication (a * b) = 120\nDivision       (a / b) = 3\nModulus        (a % b) = 2"
     }
    ],
    "notes": []
   },
   {
    "no": 4,
    "title": "Arithmetic on Floating-Point Numbers",
    "aim": "Perform arithmetic operations on floating-point numbers and display the results.",
    "files": [
     {
      "name": "FloatArithmetic.java",
      "code": "public class FloatArithmetic {\n    public static void main(String[] args) {\n        double x = 15.5, y = 4.0;\n\n        System.out.println(\"x = \" + x + \", y = \" + y);\n        System.out.printf(\"Addition       : %.2f%n\", x + y);\n        System.out.printf(\"Subtraction    : %.2f%n\", x - y);\n        System.out.printf(\"Multiplication : %.2f%n\", x * y);\n        System.out.printf(\"Division       : %.2f%n\", x / y);\n        System.out.printf(\"Modulus        : %.2f%n\", x % y);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac FloatArithmetic.java",
      "out": ""
     },
     {
      "cmd": "java FloatArithmetic",
      "out": "x = 15.5, y = 4.0\nAddition       : 19.50\nSubtraction    : 11.50\nMultiplication : 62.00\nDivision       : 3.88\nModulus        : 3.50"
     }
    ],
    "notes": []
   },
   {
    "no": 5,
    "title": "Character Data Type",
    "aim": "Demonstrate the character data type by displaying a character and its corresponding ASCII/Unicode value.",
    "files": [
     {
      "name": "CharacterDemo.java",
      "code": "public class CharacterDemo {\n    public static void main(String[] args) {\n        char ch = 'A';\n        int code = ch;                 // implicit conversion char -> int\n\n        System.out.println(\"Character        : \" + ch);\n        System.out.println(\"ASCII/Unicode    : \" + code);\n\n        char unicodeChar = '\\u0041';   // Unicode escape for 'A'\n        System.out.println(\"Unicode \\\\u0041   : \" + unicodeChar);\n\n        char fromNumber = 97;          // int literal assigned to char\n        System.out.println(\"Character of 97  : \" + fromNumber);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac CharacterDemo.java",
      "out": ""
     },
     {
      "cmd": "java CharacterDemo",
      "out": "Character        : A\nASCII/Unicode    : 65\nUnicode \\u0041   : A\nCharacter of 97  : a"
     }
    ],
    "notes": []
   },
   {
    "no": 6,
    "title": "Boolean Variables and Relational Operators",
    "aim": "Demonstrate boolean variables and boolean expressions using relational operators.",
    "files": [
     {
      "name": "BooleanDemo.java",
      "code": "public class BooleanDemo {\n    public static void main(String[] args) {\n        int a = 10, b = 20;\n        boolean isJavaFun = true;\n\n        System.out.println(\"isJavaFun = \" + isJavaFun);\n        System.out.println(\"a = \" + a + \", b = \" + b);\n        System.out.println(\"a == b : \" + (a == b));\n        System.out.println(\"a != b : \" + (a != b));\n        System.out.println(\"a >  b : \" + (a > b));\n        System.out.println(\"a <  b : \" + (a < b));\n        System.out.println(\"a >= b : \" + (a >= b));\n        System.out.println(\"a <= b : \" + (a <= b));\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac BooleanDemo.java",
      "out": ""
     },
     {
      "cmd": "java BooleanDemo",
      "out": "isJavaFun = true\na = 10, b = 20\na == b : false\na != b : true\na >  b : false\na <  b : true\na >= b : false\na <= b : true"
     }
    ],
    "notes": []
   },
   {
    "no": 7,
    "title": "Declaring and Initializing Variables",
    "aim": "Declare and initialize different types of variables and display their values.",
    "files": [
     {
      "name": "VariablesDemo.java",
      "code": "public class VariablesDemo {\n    static String college = \"ABC Engineering College\";   // static variable\n    int rollNo = 101;                                    // instance variable\n\n    public static void main(String[] args) {\n        int age = 19;                                    // local variables\n        double cgpa = 8.75;\n        char grade = 'A';\n        String name = \"Rishitha\";\n        boolean passed = true;\n\n        VariablesDemo obj = new VariablesDemo();\n\n        System.out.println(\"Static variable   (college) : \" + college);\n        System.out.println(\"Instance variable (rollNo)  : \" + obj.rollNo);\n        System.out.println(\"Local variable    (name)    : \" + name);\n        System.out.println(\"Local variable    (age)     : \" + age);\n        System.out.println(\"Local variable    (cgpa)    : \" + cgpa);\n        System.out.println(\"Local variable    (grade)   : \" + grade);\n        System.out.println(\"Local variable    (passed)  : \" + passed);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac VariablesDemo.java",
      "out": ""
     },
     {
      "cmd": "java VariablesDemo",
      "out": "Static variable   (college) : ABC Engineering College\nInstance variable (rollNo)  : 101\nLocal variable    (name)    : Rishitha\nLocal variable    (age)     : 19\nLocal variable    (cgpa)    : 8.75\nLocal variable    (grade)   : A\nLocal variable    (passed)  : true"
     }
    ],
    "notes": []
   },
   {
    "no": 8,
    "title": "Swapping Two Variables",
    "aim": "Swap the values of two variables using a temporary variable.",
    "files": [
     {
      "name": "SwapDemo.java",
      "code": "public class SwapDemo {\n    public static void main(String[] args) {\n        int a = 25, b = 50, temp;\n\n        System.out.println(\"Before swapping : a = \" + a + \", b = \" + b);\n\n        temp = a;\n        a = b;\n        b = temp;\n\n        System.out.println(\"After swapping  : a = \" + a + \", b = \" + b);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac SwapDemo.java",
      "out": ""
     },
     {
      "cmd": "java SwapDemo",
      "out": "Before swapping : a = 25, b = 50\nAfter swapping  : a = 50, b = 25"
     }
    ],
    "notes": []
   },
   {
    "no": 9,
    "title": "Widening Type Conversion",
    "aim": "Demonstrate widening (implicit) type conversion.",
    "files": [
     {
      "name": "WideningDemo.java",
      "code": "public class WideningDemo {\n    public static void main(String[] args) {\n        byte  b = 42;\n        short s = b;          // byte   -> short\n        int   i = s;          // short  -> int\n        long  l = i;          // int    -> long\n        float f = l;          // long   -> float\n        double d = f;         // float  -> double\n\n        System.out.println(\"byte   value : \" + b);\n        System.out.println(\"short  value : \" + s);\n        System.out.println(\"int    value : \" + i);\n        System.out.println(\"long   value : \" + l);\n        System.out.println(\"float  value : \" + f);\n        System.out.println(\"double value : \" + d);\n\n        int num = 65;\n        double result = num;  // int -> double\n        System.out.println(\"int \" + num + \" widened to double : \" + result);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac WideningDemo.java",
      "out": ""
     },
     {
      "cmd": "java WideningDemo",
      "out": "byte   value : 42\nshort  value : 42\nint    value : 42\nlong   value : 42\nfloat  value : 42.0\ndouble value : 42.0\nint 65 widened to double : 65.0"
     }
    ],
    "notes": []
   },
   {
    "no": 10,
    "title": "Narrowing Type Casting",
    "aim": "Demonstrate narrowing (explicit) type casting.",
    "files": [
     {
      "name": "NarrowingDemo.java",
      "code": "public class NarrowingDemo {\n    public static void main(String[] args) {\n        double d = 9.99;\n        int i = (int) d;              // double -> int (fraction lost)\n        System.out.println(\"double \" + d + \" cast to int   : \" + i);\n\n        long l = 123456789L;\n        int j = (int) l;              // long -> int\n        System.out.println(\"long   \" + l + \" cast to int : \" + j);\n\n        int big = 300;\n        byte b = (byte) big;          // value overflows the byte range\n        System.out.println(\"int    \" + big + \" cast to byte  : \" + b);\n\n        float f = 45.78f;\n        short s = (short) f;\n        System.out.println(\"float  \" + f + \" cast to short : \" + s);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac NarrowingDemo.java",
      "out": ""
     },
     {
      "cmd": "java NarrowingDemo",
      "out": "double 9.99 cast to int   : 9\nlong   123456789 cast to int : 123456789\nint    300 cast to byte  : 44\nfloat  45.78 cast to short : 45"
     }
    ],
    "notes": []
   },
   {
    "no": 11,
    "title": "Character and ASCII Conversion",
    "aim": "Convert between characters and their ASCII values.",
    "files": [
     {
      "name": "CharAsciiConversion.java",
      "code": "public class CharAsciiConversion {\n    public static void main(String[] args) {\n        char ch = 'a';\n        int ascii = (int) ch;                       // char -> ASCII\n        System.out.println(\"ASCII value of '\" + ch + \"' = \" + ascii);\n\n        int code = 90;\n        char letter = (char) code;                  // ASCII -> char\n        System.out.println(\"Character of ASCII \" + code + \" = \" + letter);\n\n        char next = (char) (ch + 1);                // arithmetic on chars\n        System.out.println(\"Next character after '\" + ch + \"' = \" + next);\n\n        System.out.println(\"\\nCharacter  ASCII\");\n        for (char c = 'A'; c <= 'E'; c++) {\n            System.out.println(\"    \" + c + \"        \" + (int) c);\n        }\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac CharAsciiConversion.java",
      "out": ""
     },
     {
      "cmd": "java CharAsciiConversion",
      "out": "ASCII value of 'a' = 97\nCharacter of ASCII 90 = Z\nNext character after 'a' = b\n\nCharacter  ASCII\n    A        65\n    B        66\n    C        67\n    D        68\n    E        69"
     }
    ],
    "notes": []
   },
   {
    "no": 12,
    "title": "Even or Odd",
    "aim": "Check whether a number is even or odd.",
    "files": [
     {
      "name": "EvenOdd.java",
      "code": "public class EvenOdd {\n    static void check(int n) {\n        if (n % 2 == 0)\n            System.out.println(n + \" is an Even number\");\n        else\n            System.out.println(n + \" is an Odd number\");\n    }\n\n    public static void main(String[] args) {\n        check(14);\n        check(25);\n        check(0);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac EvenOdd.java",
      "out": ""
     },
     {
      "cmd": "java EvenOdd",
      "out": "14 is an Even number\n25 is an Odd number\n0 is an Even number"
     }
    ],
    "notes": []
   },
   {
    "no": 13,
    "title": "Largest of Two Numbers",
    "aim": "Find the largest of two numbers.",
    "files": [
     {
      "name": "LargestOfTwo.java",
      "code": "public class LargestOfTwo {\n    public static void main(String[] args) {\n        int a = 45, b = 78;\n\n        if (a > b)\n            System.out.println(a + \" is the largest number\");\n        else if (b > a)\n            System.out.println(b + \" is the largest number\");\n        else\n            System.out.println(\"Both numbers are equal\");\n\n        int max = (a > b) ? a : b;       // using the ternary operator\n        System.out.println(\"Largest using ternary operator : \" + max);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac LargestOfTwo.java",
      "out": ""
     },
     {
      "cmd": "java LargestOfTwo",
      "out": "78 is the largest number\nLargest using ternary operator : 78"
     }
    ],
    "notes": []
   },
   {
    "no": 14,
    "title": "Reserved Keywords",
    "aim": "Display the reserved keywords of the Java language.",
    "files": [
     {
      "name": "ReservedKeywords.java",
      "code": "public class ReservedKeywords {\n    public static void main(String[] args) {\n        String[] keywords = {\n            \"abstract\", \"assert\", \"boolean\", \"break\", \"byte\", \"case\", \"catch\",\n            \"char\", \"class\", \"const\", \"continue\", \"default\", \"do\", \"double\",\n            \"else\", \"enum\", \"extends\", \"final\", \"finally\", \"float\", \"for\",\n            \"goto\", \"if\", \"implements\", \"import\", \"instanceof\", \"int\",\n            \"interface\", \"long\", \"native\", \"new\", \"package\", \"private\",\n            \"protected\", \"public\", \"return\", \"short\", \"static\", \"strictfp\",\n            \"super\", \"switch\", \"synchronized\", \"this\", \"throw\", \"throws\",\n            \"transient\", \"try\", \"void\", \"volatile\", \"while\"\n        };\n\n        System.out.println(\"Reserved keywords in Java:\\n\");\n        for (int i = 0; i < keywords.length; i++) {\n            System.out.printf(\"%-14s\", keywords[i]);\n            if ((i + 1) % 5 == 0) System.out.println();\n        }\n\n        System.out.println(\"\\nTotal reserved keywords : \" + keywords.length);\n        System.out.println(\"Note: 'const' and 'goto' are reserved but not used.\");\n        System.out.println(\"Note: true, false and null are literals, not keywords.\");\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac ReservedKeywords.java",
      "out": ""
     },
     {
      "cmd": "java ReservedKeywords",
      "out": "Reserved keywords in Java:\n\nabstract      assert        boolean       break         byte          \ncase          catch         char          class         const         \ncontinue      default       do            double        else          \nenum          extends       final         finally       float         \nfor           goto          if            implements    import        \ninstanceof    int           interface     long          native        \nnew           package       private       protected     public        \nreturn        short         static        strictfp      super         \nswitch        synchronized  this          throw         throws        \ntransient     try           void          volatile      while         \n\nTotal reserved keywords : 50\nNote: 'const' and 'goto' are reserved but not used.\nNote: true, false and null are literals, not keywords."
     }
    ],
    "notes": []
   },
   {
    "no": 15,
    "title": "for Loop — Numbers 1 to 10",
    "aim": "Print the numbers 1 to 10 using a for loop.",
    "files": [
     {
      "name": "ForLoopDemo.java",
      "code": "public class ForLoopDemo {\n    public static void main(String[] args) {\n        System.out.println(\"Numbers from 1 to 10:\");\n        for (int i = 1; i <= 10; i++) {\n            System.out.print(i + \" \");\n        }\n        System.out.println();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac ForLoopDemo.java",
      "out": ""
     },
     {
      "cmd": "java ForLoopDemo",
      "out": "Numbers from 1 to 10:\n1 2 3 4 5 6 7 8 9 10 "
     }
    ],
    "notes": []
   }
  ]
 },
 {
  "n": 4,
  "title": "Week 4",
  "blurb": "No programming task was assigned this week",
  "kind": "none",
  "programs": []
 },
 {
  "n": 5,
  "title": "Week 5",
  "blurb": "No programming task was assigned this week",
  "kind": "none",
  "programs": []
 },
 {
  "n": 6,
  "title": "Classes & Objects",
  "blurb": "Classes, constructors, static, final and nested classes",
  "kind": "programs",
  "programs": [
   {
    "no": 1,
    "title": "Student Information System",
    "aim": "Create a Student Information System using classes, objects, instance variables and methods.",
    "files": [
     {
      "name": "StudentInformationSystem.java",
      "code": "class Student {\n    int id;                  // instance variables\n    String name;\n    String course;\n    double cgpa;\n\n    void setDetails(int i, String n, String c, double g) {   // instance method\n        id = i;\n        name = n;\n        course = c;\n        cgpa = g;\n    }\n\n    void display() {\n        System.out.println(\"ID     : \" + id);\n        System.out.println(\"Name   : \" + name);\n        System.out.println(\"Course : \" + course);\n        System.out.println(\"CGPA   : \" + cgpa);\n    }\n}\n\npublic class StudentInformationSystem {\n    public static void main(String[] args) {\n        Student s1 = new Student();            // creating objects\n        Student s2 = new Student();\n\n        s1.setDetails(101, \"Ananya\", \"B.Tech - AI&ML\", 8.9);\n        s2.setDetails(102, \"Karthik\", \"B.Tech - AI&ML\", 8.2);\n\n        System.out.println(\"===== Student Information System =====\");\n        System.out.println(\"--- Student 1 ---\");\n        s1.display();\n        System.out.println(\"--- Student 2 ---\");\n        s2.display();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac StudentInformationSystem.java",
      "out": ""
     },
     {
      "cmd": "java StudentInformationSystem",
      "out": "===== Student Information System =====\n--- Student 1 ---\nID     : 101\nName   : Ananya\nCourse : B.Tech - AI&ML\nCGPA   : 8.9\n--- Student 2 ---\nID     : 102\nName   : Karthik\nCourse : B.Tech - AI&ML\nCGPA   : 8.2"
     }
    ],
    "notes": []
   },
   {
    "no": 2,
    "title": "Employee Information System",
    "aim": "Create an Employee Information System using a class, object, variables and methods.",
    "files": [
     {
      "name": "EmployeeInformationSystem.java",
      "code": "class Employee {\n    int empId;\n    String name;\n    String department;\n    double salary;\n\n    void setDetails(int id, String n, String d, double s) {\n        empId = id;\n        name = n;\n        department = d;\n        salary = s;\n    }\n\n    double annualSalary() {\n        return salary * 12;\n    }\n\n    void display() {\n        System.out.println(\"Employee ID    : \" + empId);\n        System.out.println(\"Name           : \" + name);\n        System.out.println(\"Department    : \" + department);\n        System.out.println(\"Monthly Salary : \" + salary);\n        System.out.println(\"Annual Salary  : \" + annualSalary());\n    }\n}\n\npublic class EmployeeInformationSystem {\n    public static void main(String[] args) {\n        Employee e = new Employee();\n        e.setDetails(501, \"Suresh Kumar\", \"Development\", 45000.0);\n\n        System.out.println(\"===== Employee Information System =====\");\n        e.display();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac EmployeeInformationSystem.java",
      "out": ""
     },
     {
      "cmd": "java EmployeeInformationSystem",
      "out": "===== Employee Information System =====\nEmployee ID    : 501\nName           : Suresh Kumar\nDepartment    : Development\nMonthly Salary : 45000.0\nAnnual Salary  : 540000.0"
     }
    ],
    "notes": []
   },
   {
    "no": 3,
    "title": "Book Details — Multiple Objects",
    "aim": "Create three Book objects and display their book ID, title and author.",
    "files": [
     {
      "name": "BookDetails.java",
      "code": "class Book {\n    int bookId;\n    String title;\n    String author;\n\n    Book(int bookId, String title, String author) {\n        this.bookId = bookId;\n        this.title = title;\n        this.author = author;\n    }\n\n    void display() {\n        System.out.printf(\"%-5d %-28s %s%n\", bookId, title, author);\n    }\n}\n\npublic class BookDetails {\n    public static void main(String[] args) {\n        Book b1 = new Book(1, \"Java Complete Reference\", \"Herbert Schildt\");\n        Book b2 = new Book(2, \"Head First Java\", \"Kathy Sierra\");\n        Book b3 = new Book(3, \"Effective Java\", \"Joshua Bloch\");\n\n        System.out.printf(\"%-5s %-28s %s%n\", \"ID\", \"Title\", \"Author\");\n        System.out.println(\"-----------------------------------------------------\");\n        b1.display();\n        b2.display();\n        b3.display();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac BookDetails.java",
      "out": ""
     },
     {
      "cmd": "java BookDetails",
      "out": "ID    Title                        Author\n-----------------------------------------------------\n1     Java Complete Reference      Herbert Schildt\n2     Head First Java              Kathy Sierra\n3     Effective Java               Joshua Bloch"
     }
    ],
    "notes": []
   },
   {
    "no": 4,
    "title": "Array of Student Objects",
    "aim": "Create an array of five Student objects, accept their details and display them.",
    "files": [
     {
      "name": "StudentArray.java",
      "code": "import java.util.Scanner;\n\nclass Student {\n    int id;\n    String name;\n    int marks;\n\n    void display() {\n        System.out.printf(\"%-5d %-12s %d%n\", id, name, marks);\n    }\n}\n\npublic class StudentArray {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Student[] students = new Student[5];          // array of references\n\n        for (int i = 0; i < students.length; i++) {\n            students[i] = new Student();              // create each object\n            System.out.println(\"Enter details of student \" + (i + 1));\n            System.out.print(\"ID    : \");\n            students[i].id = sc.nextInt();\n            System.out.print(\"Name  : \");\n            students[i].name = sc.next();\n            System.out.print(\"Marks : \");\n            students[i].marks = sc.nextInt();\n        }\n\n        System.out.printf(\"%n%-5s %-12s %s%n\", \"ID\", \"Name\", \"Marks\");\n        System.out.println(\"-----------------------------\");\n        for (Student s : students) {\n            s.display();\n        }\n        sc.close();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac StudentArray.java",
      "out": ""
     },
     {
      "cmd": "java StudentArray",
      "out": "Enter details of student 1\nID    : 1\nName  : Anitha\nMarks : 88\nEnter details of student 2\nID    : 2\nName  : Bharath\nMarks : 76\nEnter details of student 3\nID    : 3\nName  : Charitha\nMarks : 91\nEnter details of student 4\nID    : 4\nName  : Deepak\nMarks : 69\nEnter details of student 5\nID    : 5\nName  : Esha\nMarks : 84\n\nID    Name         Marks\n-----------------------------\n1     Anitha       88\n2     Bharath      76\n3     Charitha     91\n4     Deepak       69\n5     Esha         84"
     }
    ],
    "notes": []
   },
   {
    "no": 5,
    "title": "Reference Assignment",
    "aim": "Demonstrate assigning one object reference variable to another.",
    "files": [
     {
      "name": "ReferenceAssignment.java",
      "code": "class Student {\n    int id;\n    String name;\n\n    Student(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n\n    void display() {\n        System.out.println(\"ID: \" + id + \", Name: \" + name);\n    }\n}\n\npublic class ReferenceAssignment {\n    public static void main(String[] args) {\n        Student s1 = new Student(1, \"Ravi\");\n        Student s2 = s1;          // s2 now refers to the SAME object as s1\n\n        System.out.println(\"Before change:\");\n        System.out.print(\"s1 -> \"); s1.display();\n        System.out.print(\"s2 -> \"); s2.display();\n\n        s2.name = \"Kiran\";        // change through s2\n\n        System.out.println(\"\\nAfter changing name using s2:\");\n        System.out.print(\"s1 -> \"); s1.display();\n        System.out.print(\"s2 -> \"); s2.display();\n        System.out.println(\"\\nBoth references point to one object, so both show the change.\");\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac ReferenceAssignment.java",
      "out": ""
     },
     {
      "cmd": "java ReferenceAssignment",
      "out": "Before change:\ns1 -> ID: 1, Name: Ravi\ns2 -> ID: 1, Name: Ravi\n\nAfter changing name using s2:\ns1 -> ID: 1, Name: Kiran\ns2 -> ID: 1, Name: Kiran\n\nBoth references point to one object, so both show the change."
     }
    ],
    "notes": []
   },
   {
    "no": 6,
    "title": "Comparing Object References",
    "aim": "Compare two object reference variables using the == operator.",
    "files": [
     {
      "name": "CompareReferences.java",
      "code": "class Student {\n    int id;\n    String name;\n\n    Student(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n}\n\npublic class CompareReferences {\n    public static void main(String[] args) {\n        Student s1 = new Student(1, \"Ravi\");\n        Student s2 = new Student(1, \"Ravi\");   // different object, same data\n        Student s3 = s1;                       // same object as s1\n\n        System.out.println(\"s1 == s2 : \" + (s1 == s2));\n        System.out.println(\"s1 == s3 : \" + (s1 == s3));\n        System.out.println(\"s2 == s3 : \" + (s2 == s3));\n        System.out.println(\"\\n== compares references (memory addresses), not the contents.\");\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac CompareReferences.java",
      "out": ""
     },
     {
      "cmd": "java CompareReferences",
      "out": "s1 == s2 : false\ns1 == s3 : true\ns2 == s3 : false\n\n== compares references (memory addresses), not the contents."
     }
    ],
    "notes": []
   },
   {
    "no": 7,
    "title": "Calculator Using Methods",
    "aim": "Create methods for addition, subtraction, multiplication and division.",
    "files": [
     {
      "name": "CalculatorDemo.java",
      "code": "class Calculator {\n    int add(int a, int b)       { return a + b; }\n    int subtract(int a, int b)  { return a - b; }\n    int multiply(int a, int b)  { return a * b; }\n\n    double divide(int a, int b) {\n        if (b == 0) {\n            System.out.println(\"Cannot divide by zero!\");\n            return 0;\n        }\n        return (double) a / b;\n    }\n}\n\npublic class CalculatorDemo {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        int x = 48, y = 6;\n\n        System.out.println(\"x = \" + x + \", y = \" + y);\n        System.out.println(\"Addition       : \" + calc.add(x, y));\n        System.out.println(\"Subtraction    : \" + calc.subtract(x, y));\n        System.out.println(\"Multiplication : \" + calc.multiply(x, y));\n        System.out.println(\"Division       : \" + calc.divide(x, y));\n        System.out.println(\"Division by 0  : \" + calc.divide(x, 0));\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac CalculatorDemo.java",
      "out": ""
     },
     {
      "cmd": "java CalculatorDemo",
      "out": "x = 48, y = 6\nAddition       : 54\nSubtraction    : 42\nMultiplication : 288\nDivision       : 8.0\nCannot divide by zero!\nDivision by 0  : 0.0"
     }
    ],
    "notes": []
   },
   {
    "no": 8,
    "title": "Rectangle Operations",
    "aim": "Calculate the area and perimeter of a rectangle using a constructor and methods.",
    "files": [
     {
      "name": "RectangleOperations.java",
      "code": "class Rectangle {\n    double length, width;\n\n    Rectangle(double length, double width) {     // constructor\n        this.length = length;\n        this.width = width;\n    }\n\n    double area() {\n        return length * width;\n    }\n\n    double perimeter() {\n        return 2 * (length + width);\n    }\n}\n\npublic class RectangleOperations {\n    public static void main(String[] args) {\n        Rectangle r = new Rectangle(12.5, 8.0);\n\n        System.out.println(\"Length    : \" + r.length);\n        System.out.println(\"Width     : \" + r.width);\n        System.out.println(\"Area      : \" + r.area());\n        System.out.println(\"Perimeter : \" + r.perimeter());\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac RectangleOperations.java",
      "out": ""
     },
     {
      "cmd": "java RectangleOperations",
      "out": "Length    : 12.5\nWidth     : 8.0\nArea      : 100.0\nPerimeter : 41.0"
     }
    ],
    "notes": []
   },
   {
    "no": 9,
    "title": "Student Constructors",
    "aim": "Demonstrate default and parameterized constructors using Student objects.",
    "files": [
     {
      "name": "StudentConstructors.java",
      "code": "class Student {\n    int id;\n    String name;\n\n    Student() {                                  // default constructor\n        id = 0;\n        name = \"Not Assigned\";\n        System.out.println(\"Default constructor called\");\n    }\n\n    Student(int id, String name) {               // parameterized constructor\n        this.id = id;\n        this.name = name;\n        System.out.println(\"Parameterized constructor called\");\n    }\n\n    void display() {\n        System.out.println(\"ID: \" + id + \", Name: \" + name);\n    }\n}\n\npublic class StudentConstructors {\n    public static void main(String[] args) {\n        Student s1 = new Student();\n        s1.display();\n\n        System.out.println();\n\n        Student s2 = new Student(102, \"Meghana\");\n        s2.display();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac StudentConstructors.java",
      "out": ""
     },
     {
      "cmd": "java StudentConstructors",
      "out": "Default constructor called\nID: 0, Name: Not Assigned\n\nParameterized constructor called\nID: 102, Name: Meghana"
     }
    ],
    "notes": []
   },
   {
    "no": 10,
    "title": "Constructor Overloading",
    "aim": "Demonstrate constructor overloading using constructors with different parameter lists.",
    "files": [
     {
      "name": "ConstructorOverloading.java",
      "code": "class Box {\n    double length, width, height;\n\n    Box() {                                        // no parameters\n        length = width = height = 1;\n    }\n\n    Box(double side) {                             // one parameter (cube)\n        length = width = height = side;\n    }\n\n    Box(double l, double w) {                      // two parameters\n        length = l;\n        width = w;\n        height = 1;\n    }\n\n    Box(double l, double w, double h) {            // three parameters\n        length = l;\n        width = w;\n        height = h;\n    }\n\n    double volume() {\n        return length * width * height;\n    }\n}\n\npublic class ConstructorOverloading {\n    public static void main(String[] args) {\n        Box b1 = new Box();\n        Box b2 = new Box(4);\n        Box b3 = new Box(4, 5);\n        Box b4 = new Box(4, 5, 6);\n\n        System.out.println(\"Volume of b1 (no args)      : \" + b1.volume());\n        System.out.println(\"Volume of b2 (1 argument)   : \" + b2.volume());\n        System.out.println(\"Volume of b3 (2 arguments)  : \" + b3.volume());\n        System.out.println(\"Volume of b4 (3 arguments)  : \" + b4.volume());\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac ConstructorOverloading.java",
      "out": ""
     },
     {
      "cmd": "java ConstructorOverloading",
      "out": "Volume of b1 (no args)      : 1.0\nVolume of b2 (1 argument)   : 64.0\nVolume of b3 (2 arguments)  : 20.0\nVolume of b4 (3 arguments)  : 120.0"
     }
    ],
    "notes": []
   },
   {
    "no": 11,
    "title": "Using the this Keyword",
    "aim": "Demonstrate the use of the this keyword for referring to the current object's variables.",
    "files": [
     {
      "name": "ThisKeywordDemo.java",
      "code": "class Student {\n    int id;\n    String name;\n\n    Student(int id, String name) {\n        this.id = id;          // this.id = instance variable, id = parameter\n        this.name = name;\n    }\n\n    void show() {\n        System.out.println(\"ID   : \" + this.id);\n        System.out.println(\"Name : \" + this.name);\n    }\n\n    void display() {\n        this.show();           // calling a method using this\n    }\n}\n\npublic class ThisKeywordDemo {\n    public static void main(String[] args) {\n        Student s = new Student(7, \"Harini\");\n        s.display();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac ThisKeywordDemo.java",
      "out": ""
     },
     {
      "cmd": "java ThisKeywordDemo",
      "out": "ID   : 7\nName : Harini"
     }
    ],
    "notes": []
   },
   {
    "no": 12,
    "title": "Constructor Chaining",
    "aim": "Demonstrate constructor chaining using this() between constructors.",
    "files": [
     {
      "name": "ConstructorChaining.java",
      "code": "class Employee {\n    String name;\n    int id;\n    double salary;\n\n    Employee() {\n        this(\"Unknown\");                       // calls Employee(String)\n        System.out.println(\"Employee() called\");\n    }\n\n    Employee(String name) {\n        this(name, 0);                         // calls Employee(String, int)\n        System.out.println(\"Employee(String) called\");\n    }\n\n    Employee(String name, int id) {\n        this(name, id, 20000.0);               // calls Employee(String, int, double)\n        System.out.println(\"Employee(String, int) called\");\n    }\n\n    Employee(String name, int id, double salary) {\n        this.name = name;\n        this.id = id;\n        this.salary = salary;\n        System.out.println(\"Employee(String, int, double) called\");\n    }\n\n    void display() {\n        System.out.println(\"Name: \" + name + \", ID: \" + id + \", Salary: \" + salary);\n    }\n}\n\npublic class ConstructorChaining {\n    public static void main(String[] args) {\n        Employee e = new Employee();\n        e.display();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac ConstructorChaining.java",
      "out": ""
     },
     {
      "cmd": "java ConstructorChaining",
      "out": "Employee(String, int, double) called\nEmployee(String, int) called\nEmployee(String) called\nEmployee() called\nName: Unknown, ID: 0, Salary: 20000.0"
     }
    ],
    "notes": []
   },
   {
    "no": 13,
    "title": "Demonstrating Garbage Collection",
    "aim": "Demonstrate objects becoming eligible for garbage collection and request garbage collection using System.gc().",
    "files": [
     {
      "name": "GarbageCollectionDemo.java",
      "code": "class Sample {\n    String name;\n\n    Sample(String name) {\n        this.name = name;\n        System.out.println(\"Object \" + name + \" created\");\n    }\n\n    @Override\n    @SuppressWarnings(\"removal\")\n    protected void finalize() {                // called by the GC before destroying the object\n        System.out.println(\"Object \" + name + \" is garbage collected\");\n    }\n}\n\npublic class GarbageCollectionDemo {\n    public static void main(String[] args) throws InterruptedException {\n        Sample s1 = new Sample(\"S1\");\n        Sample s2 = new Sample(\"S2\");\n\n        s1 = null;                             // S1 becomes eligible for GC\n        System.out.println(\"s1 set to null -> S1 is eligible for garbage collection\");\n\n        System.gc();                           // request the JVM to run the GC\n        System.out.println(\"System.gc() called\");\n        Thread.sleep(1000);                    // give the GC time to run\n\n        System.out.println(\"End of main. s2 is still in use: \" + s2.name);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac GarbageCollectionDemo.java",
      "out": ""
     },
     {
      "cmd": "java GarbageCollectionDemo",
      "out": "Object S1 created\nObject S2 created\ns1 set to null -> S1 is eligible for garbage collection\nObject S1 is garbage collected\nSystem.gc() called\nEnd of main. s2 is still in use: S2"
     }
    ],
    "notes": []
   },
   {
    "no": 14,
    "title": "Object Eligibility for Garbage Collection",
    "aim": "Demonstrate different situations in which objects become eligible for garbage collection.",
    "files": [
     {
      "name": "GCEligibility.java",
      "code": "class Item {\n    String name;\n    Item ref;                                  // used for the island of isolation\n\n    Item(String name) {\n        this.name = name;\n    }\n}\n\npublic class GCEligibility {\n\n    static void createLocalObject() {\n        Item local = new Item(\"Local\");        // exists only inside this method\n        System.out.println(\"4. Object 'Local' created inside a method\");\n    }                                          // eligible once the method returns\n\n    public static void main(String[] args) {\n        // 1. Nullifying the reference\n        Item a = new Item(\"A\");\n        a = null;\n        System.out.println(\"1. Reference set to null           -> object A is eligible\");\n\n        // 2. Re-assigning the reference\n        Item b = new Item(\"B1\");\n        b = new Item(\"B2\");\n        System.out.println(\"2. Reference re-assigned           -> object B1 is eligible\");\n\n        // 3. Anonymous object\n        new Item(\"Anonymous\");\n        System.out.println(\"3. Anonymous object (no reference) -> eligible immediately\");\n\n        // 4. Object created inside a method\n        createLocalObject();\n        System.out.println(\"   Method finished                 -> object Local is eligible\");\n\n        // 5. Island of isolation\n        Item x = new Item(\"X\");\n        Item y = new Item(\"Y\");\n        x.ref = y;\n        y.ref = x;                             // X and Y refer to each other\n        x = null;\n        y = null;\n        System.out.println(\"5. Island of isolation             -> objects X and Y are eligible\");\n\n        System.gc();\n        System.out.println(\"\\nSystem.gc() requested to clean up the eligible objects\");\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac GCEligibility.java",
      "out": ""
     },
     {
      "cmd": "java GCEligibility",
      "out": "1. Reference set to null           -> object A is eligible\n2. Reference re-assigned           -> object B1 is eligible\n3. Anonymous object (no reference) -> eligible immediately\n4. Object 'Local' created inside a method\n   Method finished                 -> object Local is eligible\n5. Island of isolation             -> objects X and Y are eligible\n\nSystem.gc() requested to clean up the eligible objects"
     }
    ],
    "notes": []
   },
   {
    "no": 15,
    "title": "Method Overloading",
    "aim": "Demonstrate method overloading using methods with different parameter lists.",
    "files": [
     {
      "name": "MethodOverloading.java",
      "code": "class MathOperations {\n    int add(int a, int b) {\n        return a + b;\n    }\n\n    int add(int a, int b, int c) {\n        return a + b + c;\n    }\n\n    double add(double a, double b) {\n        return a + b;\n    }\n\n    String add(String a, String b) {\n        return a + b;\n    }\n}\n\npublic class MethodOverloading {\n    public static void main(String[] args) {\n        MathOperations m = new MathOperations();\n\n        System.out.println(\"add(10, 20)          : \" + m.add(10, 20));\n        System.out.println(\"add(10, 20, 30)      : \" + m.add(10, 20, 30));\n        System.out.println(\"add(2.5, 3.5)        : \" + m.add(2.5, 3.5));\n        System.out.println(\"add(\\\"Java\\\", \\\"Lab\\\")   : \" + m.add(\"Java\", \"Lab\"));\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac MethodOverloading.java",
      "out": ""
     },
     {
      "cmd": "java MethodOverloading",
      "out": "add(10, 20)          : 30\nadd(10, 20, 30)      : 60\nadd(2.5, 3.5)        : 6.0\nadd(\"Java\", \"Lab\")   : JavaLab"
     }
    ],
    "notes": []
   },
   {
    "no": 16,
    "title": "Overloading Area Methods",
    "aim": "Calculate the area of a circle, rectangle and square using overloaded methods.",
    "files": [
     {
      "name": "AreaOverloading.java",
      "code": "class Shape {\n    double area(double radius) {                   // circle\n        return Math.PI * radius * radius;\n    }\n\n    double area(double length, double width) {     // rectangle\n        return length * width;\n    }\n\n    int area(int side) {                           // square\n        return side * side;\n    }\n}\n\npublic class AreaOverloading {\n    public static void main(String[] args) {\n        Shape s = new Shape();\n\n        System.out.printf(\"Area of circle (r = 7.0)          : %.2f%n\", s.area(7.0));\n        System.out.printf(\"Area of rectangle (12.0 x 5.0)    : %.2f%n\", s.area(12.0, 5.0));\n        System.out.println(\"Area of square (side = 9)         : \" + s.area(9));\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac AreaOverloading.java",
      "out": ""
     },
     {
      "cmd": "java AreaOverloading",
      "out": "Area of circle (r = 7.0)          : 153.94\nArea of rectangle (12.0 x 5.0)    : 60.00\nArea of square (side = 9)         : 81"
     }
    ],
    "notes": []
   },
   {
    "no": 17,
    "title": "Passing a Student Object",
    "aim": "Pass a Student object to a method and display its details.",
    "files": [
     {
      "name": "PassingStudentObject.java",
      "code": "class Student {\n    int id;\n    String name;\n    double marks;\n\n    Student(int id, String name, double marks) {\n        this.id = id;\n        this.name = name;\n        this.marks = marks;\n    }\n}\n\npublic class PassingStudentObject {\n\n    static void displayStudent(Student s) {        // object passed as argument\n        System.out.println(\"ID    : \" + s.id);\n        System.out.println(\"Name  : \" + s.name);\n        System.out.println(\"Marks : \" + s.marks);\n    }\n\n    public static void main(String[] args) {\n        Student st = new Student(201, \"Varshini\", 92.5);\n        System.out.println(\"Student details:\");\n        displayStudent(st);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac PassingStudentObject.java",
      "out": ""
     },
     {
      "cmd": "java PassingStudentObject",
      "out": "Student details:\nID    : 201\nName  : Varshini\nMarks : 92.5"
     }
    ],
    "notes": []
   },
   {
    "no": 18,
    "title": "Comparing Employee Salaries",
    "aim": "Compare the salaries of two Employee objects and display the employee with the higher salary.",
    "files": [
     {
      "name": "CompareSalaries.java",
      "code": "class Employee {\n    String name;\n    double salary;\n\n    Employee(String name, double salary) {\n        this.name = name;\n        this.salary = salary;\n    }\n}\n\npublic class CompareSalaries {\n\n    static void compare(Employee e1, Employee e2) {\n        if (e1.salary > e2.salary)\n            System.out.println(e1.name + \" has the higher salary : \" + e1.salary);\n        else if (e2.salary > e1.salary)\n            System.out.println(e2.name + \" has the higher salary : \" + e2.salary);\n        else\n            System.out.println(\"Both employees have the same salary : \" + e1.salary);\n    }\n\n    public static void main(String[] args) {\n        Employee e1 = new Employee(\"Ramesh\", 52000);\n        Employee e2 = new Employee(\"Sneha\", 58500);\n\n        System.out.println(e1.name + \" -> \" + e1.salary);\n        System.out.println(e2.name + \" -> \" + e2.salary);\n        System.out.println();\n        compare(e1, e2);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac CompareSalaries.java",
      "out": ""
     },
     {
      "cmd": "java CompareSalaries",
      "out": "Ramesh -> 52000.0\nSneha -> 58500.0\n\nSneha has the higher salary : 58500.0"
     }
    ],
    "notes": []
   },
   {
    "no": 19,
    "title": "Returning a Student Object",
    "aim": "Create a Student object inside a method and return the object to the caller.",
    "files": [
     {
      "name": "ReturningStudentObject.java",
      "code": "class Student {\n    int id;\n    String name;\n\n    Student(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n\n    void display() {\n        System.out.println(\"ID: \" + id + \", Name: \" + name);\n    }\n}\n\npublic class ReturningStudentObject {\n\n    static Student createStudent() {               // returns a Student object\n        Student s = new Student(301, \"Lakshmi\");\n        return s;\n    }\n\n    public static void main(String[] args) {\n        Student result = createStudent();\n        System.out.println(\"Object received from method:\");\n        result.display();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac ReturningStudentObject.java",
      "out": ""
     },
     {
      "cmd": "java ReturningStudentObject",
      "out": "Object received from method:\nID: 301, Name: Lakshmi"
     }
    ],
    "notes": []
   },
   {
    "no": 20,
    "title": "Returning a Bank Account Object",
    "aim": "Pass a Bank Account object to a method, update its balance and return the object.",
    "files": [
     {
      "name": "BankAccountReturn.java",
      "code": "class BankAccount {\n    int accNo;\n    String holder;\n    double balance;\n\n    BankAccount(int accNo, String holder, double balance) {\n        this.accNo = accNo;\n        this.holder = holder;\n        this.balance = balance;\n    }\n\n    void display() {\n        System.out.println(\"Account No : \" + accNo);\n        System.out.println(\"Holder     : \" + holder);\n        System.out.println(\"Balance    : \" + balance);\n    }\n}\n\npublic class BankAccountReturn {\n\n    static BankAccount deposit(BankAccount acc, double amount) {\n        acc.balance = acc.balance + amount;        // update the balance\n        return acc;                                // return the same object\n    }\n\n    public static void main(String[] args) {\n        BankAccount a1 = new BankAccount(1001, \"Divya\", 5000.0);\n        System.out.println(\"Before deposit:\");\n        a1.display();\n\n        BankAccount a2 = deposit(a1, 2500.0);\n\n        System.out.println(\"\\nAfter deposit of 2500.0:\");\n        a2.display();\n        System.out.println(\"\\nSame object returned? \" + (a1 == a2));\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac BankAccountReturn.java",
      "out": ""
     },
     {
      "cmd": "java BankAccountReturn",
      "out": "Before deposit:\nAccount No : 1001\nHolder     : Divya\nBalance    : 5000.0\n\nAfter deposit of 2500.0:\nAccount No : 1001\nHolder     : Divya\nBalance    : 7500.0\n\nSame object returned? true"
     }
    ],
    "notes": []
   },
   {
    "no": 21,
    "title": "Static Variable",
    "aim": "Demonstrate a static variable by counting the number of Student objects created.",
    "files": [
     {
      "name": "StaticVariableDemo.java",
      "code": "class Student {\n    int id;\n    String name;\n    static int count = 0;                  // shared by all objects\n\n    Student(int id, String name) {\n        this.id = id;\n        this.name = name;\n        count++;                           // incremented for every new object\n    }\n}\n\npublic class StaticVariableDemo {\n    public static void main(String[] args) {\n        System.out.println(\"Students created so far : \" + Student.count);\n\n        Student s1 = new Student(1, \"Asha\");\n        System.out.println(\"After creating s1       : \" + Student.count);\n\n        Student s2 = new Student(2, \"Bhanu\");\n        Student s3 = new Student(3, \"Chitra\");\n        System.out.println(\"After creating s2, s3   : \" + Student.count);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac StaticVariableDemo.java",
      "out": ""
     },
     {
      "cmd": "java StaticVariableDemo",
      "out": "Students created so far : 0\nAfter creating s1       : 1\nAfter creating s2, s3   : 3"
     }
    ],
    "notes": []
   },
   {
    "no": 22,
    "title": "Static Methods",
    "aim": "Demonstrate static methods by calculating square, cube and factorial.",
    "files": [
     {
      "name": "StaticMethodsDemo.java",
      "code": "class MathUtil {\n    static int square(int n) {\n        return n * n;\n    }\n\n    static int cube(int n) {\n        return n * n * n;\n    }\n\n    static long factorial(int n) {\n        long fact = 1;\n        for (int i = 2; i <= n; i++) {\n            fact *= i;\n        }\n        return fact;\n    }\n}\n\npublic class StaticMethodsDemo {\n    public static void main(String[] args) {\n        int n = 5;\n        // static methods are called using the class name - no object needed\n        System.out.println(\"Square of \" + n + \"    : \" + MathUtil.square(n));\n        System.out.println(\"Cube of \" + n + \"      : \" + MathUtil.cube(n));\n        System.out.println(\"Factorial of \" + n + \" : \" + MathUtil.factorial(n));\n        System.out.println(\"Factorial of 10 : \" + MathUtil.factorial(10));\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac StaticMethodsDemo.java",
      "out": ""
     },
     {
      "cmd": "java StaticMethodsDemo",
      "out": "Square of 5    : 25\nCube of 5      : 125\nFactorial of 5 : 120\nFactorial of 10 : 3628800"
     }
    ],
    "notes": []
   },
   {
    "no": 23,
    "title": "Final Keyword",
    "aim": "Demonstrate final variables, final methods and final classes.",
    "files": [
     {
      "name": "FinalKeywordDemo.java",
      "code": "final class Constants {                        // final class - cannot be extended\n    final double PI = 3.14159;                 // final variable - cannot be changed\n\n    void showPi() {\n        System.out.println(\"Value of PI = \" + PI);\n    }\n}\n\nclass Parent {\n    final void message() {                     // final method - cannot be overridden\n        System.out.println(\"This is a final method of the Parent class\");\n    }\n\n    void normalMethod() {\n        System.out.println(\"This is a normal method of the Parent class\");\n    }\n}\n\nclass Child extends Parent {\n    // void message() { }   // ERROR: cannot override final method\n    @Override\n    void normalMethod() {\n        System.out.println(\"Normal method overridden in the Child class\");\n    }\n}\n\n// class Sub extends Constants { }   // ERROR: cannot inherit from final class\n\npublic class FinalKeywordDemo {\n    public static void main(String[] args) {\n        Constants c = new Constants();\n        c.showPi();\n        // c.PI = 3.14;      // ERROR: cannot assign a value to final variable\n\n        Child ch = new Child();\n        ch.message();\n        ch.normalMethod();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac FinalKeywordDemo.java",
      "out": ""
     },
     {
      "cmd": "java FinalKeywordDemo",
      "out": "Value of PI = 3.14159\nThis is a final method of the Parent class\nNormal method overridden in the Child class"
     }
    ],
    "notes": []
   },
   {
    "no": 24,
    "title": "Blank Final Variable",
    "aim": "Demonstrate a blank final variable initialized through a constructor.",
    "files": [
     {
      "name": "BlankFinalDemo.java",
      "code": "class Student {\n    final int rollNo;                      // blank final variable (not initialized here)\n    String name;\n\n    Student(int rollNo, String name) {\n        this.rollNo = rollNo;              // initialized once inside the constructor\n        this.name = name;\n    }\n\n    void display() {\n        System.out.println(\"Roll No: \" + rollNo + \", Name: \" + name);\n    }\n}\n\npublic class BlankFinalDemo {\n    public static void main(String[] args) {\n        Student s1 = new Student(11, \"Pooja\");\n        Student s2 = new Student(12, \"Rohit\");\n\n        s1.display();\n        s2.display();\n        // s1.rollNo = 50;   // ERROR: cannot assign a value to final variable rollNo\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac BlankFinalDemo.java",
      "out": ""
     },
     {
      "cmd": "java BlankFinalDemo",
      "out": "Roll No: 11, Name: Pooja\nRoll No: 12, Name: Rohit"
     }
    ],
    "notes": []
   },
   {
    "no": 25,
    "title": "College and Department — Static Nested Class",
    "aim": "Demonstrate a static nested Department class inside a College class.",
    "files": [
     {
      "name": "CollegeDemo.java",
      "code": "class College {\n    static String collegeName = \"Sample Institute of Technology\";\n\n    static class Department {                          // static nested class\n        String deptName;\n        int students;\n\n        Department(String deptName, int students) {\n            this.deptName = deptName;\n            this.students = students;\n        }\n\n        void display() {\n            System.out.println(\"College    : \" + collegeName);\n            System.out.println(\"Department : \" + deptName);\n            System.out.println(\"Students   : \" + students);\n        }\n    }\n}\n\npublic class CollegeDemo {\n    public static void main(String[] args) {\n        // no College object is needed for a static nested class\n        College.Department d1 = new College.Department(\"AI & ML\", 180);\n        College.Department d2 = new College.Department(\"CSE\", 240);\n\n        d1.display();\n        System.out.println();\n        d2.display();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac CollegeDemo.java",
      "out": ""
     },
     {
      "cmd": "java CollegeDemo",
      "out": "College    : Sample Institute of Technology\nDepartment : AI & ML\nStudents   : 180\n\nCollege    : Sample Institute of Technology\nDepartment : CSE\nStudents   : 240"
     }
    ],
    "notes": []
   },
   {
    "no": 26,
    "title": "Employee Address — Static Nested Class",
    "aim": "Demonstrate a static nested Address class associated with an Employee.",
    "files": [
     {
      "name": "EmployeeAddressDemo.java",
      "code": "class Employee {\n    int id;\n    String name;\n    Address address;\n\n    Employee(int id, String name, Address address) {\n        this.id = id;\n        this.name = name;\n        this.address = address;\n    }\n\n    static class Address {                             // static nested class\n        String city, state;\n        int pincode;\n\n        Address(String city, String state, int pincode) {\n            this.city = city;\n            this.state = state;\n            this.pincode = pincode;\n        }\n    }\n\n    void display() {\n        System.out.println(\"Employee ID : \" + id);\n        System.out.println(\"Name        : \" + name);\n        System.out.println(\"City        : \" + address.city);\n        System.out.println(\"State       : \" + address.state);\n        System.out.println(\"Pincode     : \" + address.pincode);\n    }\n}\n\npublic class EmployeeAddressDemo {\n    public static void main(String[] args) {\n        Employee.Address addr = new Employee.Address(\"Hyderabad\", \"Telangana\", 500081);\n        Employee emp = new Employee(701, \"Naveen\", addr);\n        emp.display();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac EmployeeAddressDemo.java",
      "out": ""
     },
     {
      "cmd": "java EmployeeAddressDemo",
      "out": "Employee ID : 701\nName        : Naveen\nCity        : Hyderabad\nState       : Telangana\nPincode     : 500081"
     }
    ],
    "notes": []
   },
   {
    "no": 27,
    "title": "Student Address — Inner Class",
    "aim": "Demonstrate a non-static inner Address class inside StudentAddressInner.",
    "files": [
     {
      "name": "StudentAddressInner.java",
      "code": "public class StudentAddressInner {\n    int id;\n    String name;\n\n    StudentAddressInner(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n\n    class Address {                                    // non-static inner class\n        String city, state;\n\n        Address(String city, String state) {\n            this.city = city;\n            this.state = state;\n        }\n\n        void display() {\n            // an inner class can access members of the outer class directly\n            System.out.println(\"Student ID : \" + id);\n            System.out.println(\"Name       : \" + name);\n            System.out.println(\"City       : \" + city);\n            System.out.println(\"State      : \" + state);\n        }\n    }\n\n    public static void main(String[] args) {\n        StudentAddressInner student = new StudentAddressInner(41, \"Mounika\");\n\n        // an inner class object needs an outer class object\n        StudentAddressInner.Address addr = student.new Address(\"Chennai\", \"Tamil Nadu\");\n        addr.display();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac StudentAddressInner.java",
      "out": ""
     },
     {
      "cmd": "java StudentAddressInner",
      "out": "Student ID : 41\nName       : Mounika\nCity       : Chennai\nState      : Tamil Nadu"
     }
    ],
    "notes": []
   },
   {
    "no": 28,
    "title": "Library Management — Inner Class",
    "aim": "Demonstrate an inner Book class inside a LibraryBookManager class.",
    "files": [
     {
      "name": "LibraryBookManager.java",
      "code": "public class LibraryBookManager {\n    String libraryName;\n    int totalBooks = 0;\n\n    LibraryBookManager(String libraryName) {\n        this.libraryName = libraryName;\n    }\n\n    class Book {                                       // inner class\n        int bookId;\n        String title;\n\n        Book(int bookId, String title) {\n            this.bookId = bookId;\n            this.title = title;\n            totalBooks++;                              // accesses outer class variable\n        }\n\n        void display() {\n            System.out.println(\"[\" + libraryName + \"] Book \" + bookId + \" : \" + title);\n        }\n    }\n\n    public static void main(String[] args) {\n        LibraryBookManager lib = new LibraryBookManager(\"Central Library\");\n\n        LibraryBookManager.Book b1 = lib.new Book(1, \"Data Structures\");\n        LibraryBookManager.Book b2 = lib.new Book(2, \"Operating Systems\");\n        LibraryBookManager.Book b3 = lib.new Book(3, \"Machine Learning\");\n\n        b1.display();\n        b2.display();\n        b3.display();\n        System.out.println(\"Total books added : \" + lib.totalBooks);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac LibraryBookManager.java",
      "out": ""
     },
     {
      "cmd": "java LibraryBookManager",
      "out": "[Central Library] Book 1 : Data Structures\n[Central Library] Book 2 : Operating Systems\n[Central Library] Book 3 : Machine Learning\nTotal books added : 3"
     }
    ],
    "notes": []
   }
  ]
 },
 {
  "n": 7,
  "title": "Strings & Inheritance",
  "blurb": "String classes, StringTokenizer and inheritance basics",
  "kind": "programs",
  "programs": [
   {
    "no": 1,
    "title": "String Constructors",
    "aim": "Demonstrate different ways of creating and initializing String objects using String constructors, including literals, new String(), character arrays and byte arrays.",
    "files": [
     {
      "name": "StringConstructors.java",
      "code": "public class StringConstructors {\n    public static void main(String[] args) {\n        // 1. String literal (stored in the String pool)\n        String s1 = \"Hello Java\";\n\n        // 2. Empty string using the default constructor\n        String s2 = new String();\n\n        // 3. Copy of another String object\n        String s3 = new String(s1);\n\n        // 4. From a character array\n        char[] chars = {'J', 'a', 'v', 'a'};\n        String s4 = new String(chars);\n\n        // 5. From part of a character array (offset 1, count 3)\n        String s5 = new String(chars, 1, 3);\n\n        // 6. From a byte array (ASCII values)\n        byte[] bytes = {72, 101, 108, 108, 111};\n        String s6 = new String(bytes);\n\n        // 7. From a StringBuffer\n        String s7 = new String(new StringBuffer(\"From StringBuffer\"));\n\n        System.out.println(\"1. Literal              : \" + s1);\n        System.out.println(\"2. Empty string         : '\" + s2 + \"' (length \" + s2.length() + \")\");\n        System.out.println(\"3. Copy constructor     : \" + s3);\n        System.out.println(\"4. Character array      : \" + s4);\n        System.out.println(\"5. Char array (1, 3)    : \" + s5);\n        System.out.println(\"6. Byte array           : \" + s6);\n        System.out.println(\"7. StringBuffer         : \" + s7);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac StringConstructors.java",
      "out": ""
     },
     {
      "cmd": "java StringConstructors",
      "out": "1. Literal              : Hello Java\n2. Empty string         : '' (length 0)\n3. Copy constructor     : Hello Java\n4. Character array      : Java\n5. Char array (1, 3)    : ava\n6. Byte array           : Hello\n7. StringBuffer         : From StringBuffer"
     }
    ],
    "notes": []
   },
   {
    "no": 2,
    "title": "StringBuffer Class",
    "aim": "Demonstrate mutable string operations using StringBuffer including append, insert, replace, delete and reverse.",
    "files": [
     {
      "name": "StringBufferDemo.java",
      "code": "public class StringBufferDemo {\n    public static void main(String[] args) {\n        StringBuffer sb = new StringBuffer(\"Hello\");\n        System.out.println(\"Original         : \" + sb);\n        System.out.println(\"Length / Capacity: \" + sb.length() + \" / \" + sb.capacity());\n\n        sb.append(\" World\");                    // add at the end\n        System.out.println(\"After append     : \" + sb);\n\n        sb.insert(5, \",\");                      // insert at index 5\n        System.out.println(\"After insert     : \" + sb);\n\n        sb.replace(0, 5, \"HELLO\");              // replace characters 0 to 4\n        System.out.println(\"After replace    : \" + sb);\n\n        sb.delete(5, 6);                        // delete the character at index 5\n        System.out.println(\"After delete     : \" + sb);\n\n        sb.reverse();                           // reverse the content\n        System.out.println(\"After reverse    : \" + sb);\n\n        System.out.println(\"Final length     : \" + sb.length());\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac StringBufferDemo.java",
      "out": ""
     },
     {
      "cmd": "java StringBufferDemo",
      "out": "Original         : Hello\nLength / Capacity: 5 / 21\nAfter append     : Hello World\nAfter insert     : Hello, World\nAfter replace    : HELLO, World\nAfter delete     : HELLO World\nAfter reverse    : dlroW OLLEH\nFinal length     : 11"
     }
    ],
    "notes": []
   },
   {
    "no": 3,
    "title": "StringTokenizer Class",
    "aim": "Tokenize a sentence using StringTokenizer, display individual tokens, count the tokens and repeat the operation using a specified delimiter.",
    "files": [
     {
      "name": "StringTokenizerDemo.java",
      "code": "import java.util.StringTokenizer;\n\npublic class StringTokenizerDemo {\n    public static void main(String[] args) {\n        // Part 1: default delimiters (space, tab, newline)\n        String sentence = \"Java is a powerful programming language\";\n        StringTokenizer st1 = new StringTokenizer(sentence);\n\n        System.out.println(\"Sentence : \" + sentence);\n        System.out.println(\"Number of tokens : \" + st1.countTokens());\n        System.out.println(\"Tokens:\");\n        int i = 1;\n        while (st1.hasMoreTokens()) {\n            System.out.println(\"  \" + i++ + \". \" + st1.nextToken());\n        }\n\n        // Part 2: specified delimiter (comma)\n        String data = \"apple,banana,orange,grape\";\n        StringTokenizer st2 = new StringTokenizer(data, \",\");\n\n        System.out.println(\"\\nData : \" + data);\n        System.out.println(\"Number of tokens : \" + st2.countTokens());\n        System.out.println(\"Tokens:\");\n        i = 1;\n        while (st2.hasMoreTokens()) {\n            System.out.println(\"  \" + i++ + \". \" + st2.nextToken());\n        }\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac StringTokenizerDemo.java",
      "out": ""
     },
     {
      "cmd": "java StringTokenizerDemo",
      "out": "Sentence : Java is a powerful programming language\nNumber of tokens : 6\nTokens:\n  1. Java\n  2. is\n  3. a\n  4. powerful\n  5. programming\n  6. language\n\nData : apple,banana,orange,grape\nNumber of tokens : 4\nTokens:\n  1. apple\n  2. banana\n  3. orange\n  4. grape"
     }
    ],
    "notes": []
   },
   {
    "no": 4,
    "title": "Basic Inheritance",
    "aim": "Demonstrate basic inheritance by creating a child class that inherits methods from a parent class.",
    "files": [
     {
      "name": "BasicInheritance.java",
      "code": "class Vehicle {                                   // parent (super) class\n    void start() {\n        System.out.println(\"Vehicle is starting...\");\n    }\n\n    void stop() {\n        System.out.println(\"Vehicle has stopped.\");\n    }\n}\n\nclass Car extends Vehicle {                       // child (sub) class\n    void drive() {\n        System.out.println(\"Car is being driven.\");\n    }\n}\n\npublic class BasicInheritance {\n    public static void main(String[] args) {\n        Car c = new Car();\n\n        c.start();     // inherited from Vehicle\n        c.drive();     // defined in Car\n        c.stop();      // inherited from Vehicle\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac BasicInheritance.java",
      "out": ""
     },
     {
      "cmd": "java BasicInheritance",
      "out": "Vehicle is starting...\nCar is being driven.\nVehicle has stopped."
     }
    ],
    "notes": []
   },
   {
    "no": 5,
    "title": "Using the super Keyword",
    "aim": "Demonstrate the use of the super keyword to access parent class variables and methods.",
    "files": [
     {
      "name": "SuperKeywordBasic.java",
      "code": "class Parent {\n    String name = \"Parent Class Variable\";\n\n    Parent() {\n        System.out.println(\"Parent constructor called\");\n    }\n\n    void show() {\n        System.out.println(\"show() method of Parent\");\n    }\n}\n\nclass Child extends Parent {\n    String name = \"Child Class Variable\";\n\n    Child() {\n        super();                                  // calls the Parent constructor\n        System.out.println(\"Child constructor called\");\n    }\n\n    void display() {\n        System.out.println(\"this.name  : \" + this.name);\n        System.out.println(\"super.name : \" + super.name);   // parent variable\n        super.show();                                       // parent method\n    }\n}\n\npublic class SuperKeywordBasic {\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.display();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac SuperKeywordBasic.java",
      "out": ""
     },
     {
      "cmd": "java SuperKeywordBasic",
      "out": "Parent constructor called\nChild constructor called\nthis.name  : Child Class Variable\nsuper.name : Parent Class Variable\nshow() method of Parent"
     }
    ],
    "notes": []
   }
  ]
 },
 {
  "n": 8,
  "title": "Inheritance & Polymorphism",
  "blurb": "Overriding, dynamic method dispatch and constructors in inheritance",
  "kind": "programs",
  "programs": [
   {
    "no": 1,
    "title": "Single Inheritance",
    "aim": "Demonstrate single inheritance using a Person superclass and Student subclass.",
    "files": [
     {
      "name": "SingleInheritance.java",
      "code": "class Person {\n    String name;\n    int age;\n\n    void showPerson() {\n        System.out.println(\"Name : \" + name);\n        System.out.println(\"Age  : \" + age);\n    }\n}\n\nclass Student extends Person {\n    int rollNo;\n    String course;\n\n    void showStudent() {\n        showPerson();                            // inherited method\n        System.out.println(\"Roll No : \" + rollNo);\n        System.out.println(\"Course  : \" + course);\n    }\n}\n\npublic class SingleInheritance {\n    public static void main(String[] args) {\n        Student s = new Student();\n        s.name = \"Ishita\";                       // inherited variables\n        s.age = 19;\n        s.rollNo = 25;\n        s.course = \"AI & ML\";\n\n        s.showStudent();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac SingleInheritance.java",
      "out": ""
     },
     {
      "cmd": "java SingleInheritance",
      "out": "Name : Ishita\nAge  : 19\nRoll No : 25\nCourse  : AI & ML"
     }
    ],
    "notes": []
   },
   {
    "no": 2,
    "title": "Using the super Keyword",
    "aim": "Demonstrate super for accessing superclass variables and methods.",
    "files": [
     {
      "name": "SuperKeywordDemo.java",
      "code": "class Bike {\n    int speed = 60;\n\n    void display() {\n        System.out.println(\"Bike is running\");\n    }\n}\n\nclass SportsBike extends Bike {\n    int speed = 120;\n\n    void display() {\n        System.out.println(\"SportsBike is running fast\");\n    }\n\n    void showSpeeds() {\n        System.out.println(\"Speed of SportsBike (this.speed) : \" + speed);\n        System.out.println(\"Speed of Bike       (super.speed): \" + super.speed);\n        display();                               // subclass method\n        super.display();                         // superclass method\n    }\n}\n\npublic class SuperKeywordDemo {\n    public static void main(String[] args) {\n        SportsBike sb = new SportsBike();\n        sb.showSpeeds();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac SuperKeywordDemo.java",
      "out": ""
     },
     {
      "cmd": "java SuperKeywordDemo",
      "out": "Speed of SportsBike (this.speed) : 120\nSpeed of Bike       (super.speed): 60\nSportsBike is running fast\nBike is running"
     }
    ],
    "notes": []
   },
   {
    "no": 3,
    "title": "Multilevel Inheritance",
    "aim": "Demonstrate multilevel inheritance using Person, Employee and Manager classes.",
    "files": [
     {
      "name": "MultilevelInheritance.java",
      "code": "class Person {\n    String name;\n\n    void showName() {\n        System.out.println(\"Name        : \" + name);\n    }\n}\n\nclass Employee extends Person {\n    int empId;\n    double salary;\n\n    void showEmployee() {\n        System.out.println(\"Employee ID : \" + empId);\n        System.out.println(\"Salary      : \" + salary);\n    }\n}\n\nclass Manager extends Employee {\n    String department;\n\n    void showManager() {\n        showName();                              // from Person\n        showEmployee();                          // from Employee\n        System.out.println(\"Department  : \" + department);\n    }\n}\n\npublic class MultilevelInheritance {\n    public static void main(String[] args) {\n        Manager m = new Manager();\n        m.name = \"Prakash\";\n        m.empId = 9001;\n        m.salary = 85000;\n        m.department = \"Software Development\";\n\n        m.showManager();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac MultilevelInheritance.java",
      "out": ""
     },
     {
      "cmd": "java MultilevelInheritance",
      "out": "Name        : Prakash\nEmployee ID : 9001\nSalary      : 85000.0\nDepartment  : Software Development"
     }
    ],
    "notes": []
   },
   {
    "no": 4,
    "title": "Method Overriding",
    "aim": "Demonstrate method overriding using Animal, Dog and Cat classes.",
    "files": [
     {
      "name": "MethodOverriding.java",
      "code": "class Animal {\n    void sound() {\n        System.out.println(\"Animal makes a sound\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println(\"Dog barks: Woof Woof!\");\n    }\n}\n\nclass Cat extends Animal {\n    @Override\n    void sound() {\n        System.out.println(\"Cat meows: Meow Meow!\");\n    }\n}\n\npublic class MethodOverriding {\n    public static void main(String[] args) {\n        Animal a = new Animal();\n        Dog d = new Dog();\n        Cat c = new Cat();\n\n        a.sound();\n        d.sound();\n        c.sound();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac MethodOverriding.java",
      "out": ""
     },
     {
      "cmd": "java MethodOverriding",
      "out": "Animal makes a sound\nDog barks: Woof Woof!\nCat meows: Meow Meow!"
     }
    ],
    "notes": []
   },
   {
    "no": 5,
    "title": "Dynamic Method Dispatch",
    "aim": "Demonstrate dynamic method dispatch using Shape as the superclass and Circle, Rectangle and Triangle as subclasses.",
    "files": [
     {
      "name": "DynamicDispatchShapes.java",
      "code": "class Shape {\n    void draw() {\n        System.out.println(\"Drawing a shape\");\n    }\n\n    double area() {\n        return 0;\n    }\n}\n\nclass Circle extends Shape {\n    double r = 5;\n\n    void draw() { System.out.println(\"Drawing a Circle\"); }\n    double area() { return Math.PI * r * r; }\n}\n\nclass Rectangle extends Shape {\n    double l = 8, w = 4;\n\n    void draw() { System.out.println(\"Drawing a Rectangle\"); }\n    double area() { return l * w; }\n}\n\nclass Triangle extends Shape {\n    double b = 6, h = 7;\n\n    void draw() { System.out.println(\"Drawing a Triangle\"); }\n    double area() { return 0.5 * b * h; }\n}\n\npublic class DynamicDispatchShapes {\n    public static void main(String[] args) {\n        Shape ref;                               // superclass reference variable\n\n        ref = new Circle();\n        ref.draw();\n        System.out.printf(\"Area = %.2f%n%n\", ref.area());\n\n        ref = new Rectangle();\n        ref.draw();\n        System.out.printf(\"Area = %.2f%n%n\", ref.area());\n\n        ref = new Triangle();\n        ref.draw();\n        System.out.printf(\"Area = %.2f%n\", ref.area());\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac DynamicDispatchShapes.java",
      "out": ""
     },
     {
      "cmd": "java DynamicDispatchShapes",
      "out": "Drawing a Circle\nArea = 78.54\n\nDrawing a Rectangle\nArea = 32.00\n\nDrawing a Triangle\nArea = 21.00"
     }
    ],
    "notes": []
   },
   {
    "no": 6,
    "title": "super with Method Overriding",
    "aim": "Demonstrate super.display() to invoke the superclass implementation before displaying subclass details.",
    "files": [
     {
      "name": "SuperWithOverriding.java",
      "code": "class Person {\n    String name;\n    int age;\n\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    void display() {\n        System.out.println(\"Name : \" + name);\n        System.out.println(\"Age  : \" + age);\n    }\n}\n\nclass Student extends Person {\n    int rollNo;\n    String branch;\n\n    Student(String name, int age, int rollNo, String branch) {\n        super(name, age);\n        this.rollNo = rollNo;\n        this.branch = branch;\n    }\n\n    @Override\n    void display() {\n        super.display();                         // superclass details first\n        System.out.println(\"Roll No : \" + rollNo);\n        System.out.println(\"Branch  : \" + branch);\n    }\n}\n\npublic class SuperWithOverriding {\n    public static void main(String[] args) {\n        Student s = new Student(\"Tejaswi\", 19, 32, \"AI & ML\");\n        s.display();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac SuperWithOverriding.java",
      "out": ""
     },
     {
      "cmd": "java SuperWithOverriding",
      "out": "Name : Tejaswi\nAge  : 19\nRoll No : 32\nBranch  : AI & ML"
     }
    ],
    "notes": []
   },
   {
    "no": 7,
    "title": "Multilevel Inheritance for Salary Calculation",
    "aim": "Calculate total salary using Employee, Developer and SeniorDeveloper classes.",
    "files": [
     {
      "name": "SalaryCalculation.java",
      "code": "class Employee {\n    double basicSalary;\n\n    Employee(double basicSalary) {\n        this.basicSalary = basicSalary;\n    }\n\n    double calculateSalary() {\n        return basicSalary;\n    }\n}\n\nclass Developer extends Employee {\n    double projectAllowance;\n\n    Developer(double basicSalary, double projectAllowance) {\n        super(basicSalary);\n        this.projectAllowance = projectAllowance;\n    }\n\n    @Override\n    double calculateSalary() {\n        return super.calculateSalary() + projectAllowance;\n    }\n}\n\nclass SeniorDeveloper extends Developer {\n    double leadershipBonus;\n\n    SeniorDeveloper(double basicSalary, double projectAllowance, double leadershipBonus) {\n        super(basicSalary, projectAllowance);\n        this.leadershipBonus = leadershipBonus;\n    }\n\n    @Override\n    double calculateSalary() {\n        return super.calculateSalary() + leadershipBonus;\n    }\n}\n\npublic class SalaryCalculation {\n    public static void main(String[] args) {\n        Employee e = new Employee(30000);\n        Developer d = new Developer(40000, 8000);\n        SeniorDeveloper sd = new SeniorDeveloper(60000, 12000, 15000);\n\n        System.out.println(\"Employee salary         : \" + e.calculateSalary());\n        System.out.println(\"Developer salary        : \" + d.calculateSalary());\n        System.out.println(\"Senior Developer salary : \" + sd.calculateSalary());\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac SalaryCalculation.java",
      "out": ""
     },
     {
      "cmd": "java SalaryCalculation",
      "out": "Employee salary         : 30000.0\nDeveloper salary        : 48000.0\nSenior Developer salary : 87000.0"
     }
    ],
    "notes": []
   },
   {
    "no": 8,
    "title": "Dynamic Method Dispatch for Bank Accounts",
    "aim": "Demonstrate dynamic method dispatch using BankAccount, SavingsAccount and CurrentAccount.",
    "files": [
     {
      "name": "BankDispatch.java",
      "code": "class BankAccount {\n    double balance = 10000;\n\n    void showAccountType() {\n        System.out.println(\"General Bank Account\");\n    }\n\n    double calculateInterest() {\n        return 0;\n    }\n}\n\nclass SavingsAccount extends BankAccount {\n    @Override\n    void showAccountType() {\n        System.out.println(\"Savings Account\");\n    }\n\n    @Override\n    double calculateInterest() {\n        return balance * 4 / 100;                // 4% interest\n    }\n}\n\nclass CurrentAccount extends BankAccount {\n    @Override\n    void showAccountType() {\n        System.out.println(\"Current Account\");\n    }\n\n    @Override\n    double calculateInterest() {\n        return balance * 1 / 100;                // 1% interest\n    }\n}\n\npublic class BankDispatch {\n    public static void main(String[] args) {\n        BankAccount[] accounts = { new BankAccount(), new SavingsAccount(), new CurrentAccount() };\n\n        for (BankAccount acc : accounts) {       // method chosen at run time\n            acc.showAccountType();\n            System.out.println(\"Interest on 10000 = \" + acc.calculateInterest());\n            System.out.println(\"----------------------------\");\n        }\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac BankDispatch.java",
      "out": ""
     },
     {
      "cmd": "java BankDispatch",
      "out": "General Bank Account\nInterest on 10000 = 0.0\n----------------------------\nSavings Account\nInterest on 10000 = 400.0\n----------------------------\nCurrent Account\nInterest on 10000 = 100.0\n----------------------------"
     }
    ],
    "notes": []
   },
   {
    "no": 9,
    "title": "Constructor Execution in Multilevel Inheritance",
    "aim": "Demonstrate the order of constructor execution in multilevel inheritance.",
    "files": [
     {
      "name": "ConstructorOrder.java",
      "code": "class A {\n    A() {\n        System.out.println(\"Constructor of class A (grandparent)\");\n    }\n}\n\nclass B extends A {\n    B() {\n        System.out.println(\"Constructor of class B (parent)\");\n    }\n}\n\nclass C extends B {\n    C() {\n        System.out.println(\"Constructor of class C (child)\");\n    }\n}\n\npublic class ConstructorOrder {\n    public static void main(String[] args) {\n        System.out.println(\"Creating object of class C...\\n\");\n        C obj = new C();\n        System.out.println(\"\\nConstructors execute from the top of the hierarchy to the bottom.\");\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac ConstructorOrder.java",
      "out": ""
     },
     {
      "cmd": "java ConstructorOrder",
      "out": "Creating object of class C...\n\nConstructor of class A (grandparent)\nConstructor of class B (parent)\nConstructor of class C (child)\n\nConstructors execute from the top of the hierarchy to the bottom."
     }
    ],
    "notes": []
   },
   {
    "no": 10,
    "title": "Banking Application Using Inheritance",
    "aim": "Develop a simple banking application using inheritance.",
    "files": [
     {
      "name": "BankingApplication.java",
      "code": "class Account {\n    int accNo;\n    String holder;\n    double balance;\n\n    Account(int accNo, String holder, double balance) {\n        this.accNo = accNo;\n        this.holder = holder;\n        this.balance = balance;\n    }\n\n    void deposit(double amount) {\n        balance += amount;\n        System.out.println(\"Deposited \" + amount + \" | Balance: \" + balance);\n    }\n\n    void withdraw(double amount) {\n        if (amount <= balance) {\n            balance -= amount;\n            System.out.println(\"Withdrawn \" + amount + \" | Balance: \" + balance);\n        } else {\n            System.out.println(\"Insufficient balance! Available: \" + balance);\n        }\n    }\n\n    void display() {\n        System.out.println(\"Account No : \" + accNo);\n        System.out.println(\"Holder     : \" + holder);\n        System.out.println(\"Balance    : \" + balance);\n    }\n}\n\nclass SavingsAccount extends Account {\n    double interestRate;\n\n    SavingsAccount(int accNo, String holder, double balance, double interestRate) {\n        super(accNo, holder, balance);\n        this.interestRate = interestRate;\n    }\n\n    void addInterest() {\n        double interest = balance * interestRate / 100;\n        balance += interest;\n        System.out.println(\"Interest added: \" + interest + \" | Balance: \" + balance);\n    }\n}\n\nclass CurrentAccount extends Account {\n    double overdraftLimit;\n\n    CurrentAccount(int accNo, String holder, double balance, double overdraftLimit) {\n        super(accNo, holder, balance);\n        this.overdraftLimit = overdraftLimit;\n    }\n\n    @Override\n    void withdraw(double amount) {\n        if (amount <= balance + overdraftLimit) {\n            balance -= amount;\n            System.out.println(\"Withdrawn \" + amount + \" | Balance: \" + balance);\n        } else {\n            System.out.println(\"Overdraft limit exceeded!\");\n        }\n    }\n}\n\npublic class BankingApplication {\n    public static void main(String[] args) {\n        System.out.println(\"===== Savings Account =====\");\n        SavingsAccount sa = new SavingsAccount(1001, \"Meera\", 20000, 5);\n        sa.display();\n        sa.deposit(5000);\n        sa.withdraw(3000);\n        sa.addInterest();\n        sa.withdraw(50000);\n\n        System.out.println(\"\\n===== Current Account =====\");\n        CurrentAccount ca = new CurrentAccount(2001, \"Naresh\", 10000, 5000);\n        ca.display();\n        ca.withdraw(12000);              // uses overdraft\n        ca.withdraw(10000);              // exceeds overdraft\n        ca.deposit(8000);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac BankingApplication.java",
      "out": ""
     },
     {
      "cmd": "java BankingApplication",
      "out": "===== Savings Account =====\nAccount No : 1001\nHolder     : Meera\nBalance    : 20000.0\nDeposited 5000.0 | Balance: 25000.0\nWithdrawn 3000.0 | Balance: 22000.0\nInterest added: 1100.0 | Balance: 23100.0\nInsufficient balance! Available: 23100.0\n\n===== Current Account =====\nAccount No : 2001\nHolder     : Naresh\nBalance    : 10000.0\nWithdrawn 12000.0 | Balance: -2000.0\nOverdraft limit exceeded!\nDeposited 8000.0 | Balance: 6000.0"
     }
    ],
    "notes": []
   }
  ]
 },
 {
  "n": 9,
  "title": "Packages & Interfaces",
  "blurb": "User-defined packages, CLASSPATH and interfaces",
  "kind": "programs",
  "programs": [
   {
    "no": 1,
    "title": "Creating and Using a User-Defined Package",
    "aim": "Create a user-defined package named mypackage containing a Student class, and access it from another Java program outside the package.",
    "files": [
     {
      "name": "mypackage/Student.java",
      "code": "package mypackage;                     // must be the first statement\n\npublic class Student {\n    public int id;\n    public String name;\n\n    public Student(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n\n    public void display() {\n        System.out.println(\"Student ID   : \" + id);\n        System.out.println(\"Student Name : \" + name);\n    }\n}\n"
     },
     {
      "name": "TestStudent.java",
      "code": "import mypackage.Student;              // import the class from the package\n\npublic class TestStudent {\n    public static void main(String[] args) {\n        Student s = new Student(101, \"Anjali\");\n        s.display();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac -d . mypackage/Student.java",
      "out": ""
     },
     {
      "cmd": "javac TestStudent.java",
      "out": ""
     },
     {
      "cmd": "java TestStudent",
      "out": "Student ID   : 101\nStudent Name : Anjali"
     }
    ],
    "notes": [
     "The -d . option creates the folder mypackage and places Student.class inside it."
    ]
   },
   {
    "no": 2,
    "title": "Importing Packages",
    "aim": "Demonstrate different ways of importing and accessing classes (Student and Faculty) from a package named college, using both a specific import and a wildcard import.",
    "files": [
     {
      "name": "college/Student.java",
      "code": "package college;\n\npublic class Student {\n    public String name;\n    public int rollNo;\n\n    public Student(String name, int rollNo) {\n        this.name = name;\n        this.rollNo = rollNo;\n    }\n\n    public void show() {\n        System.out.println(\"Student -> \" + name + \" (Roll No: \" + rollNo + \")\");\n    }\n}\n"
     },
     {
      "name": "college/Faculty.java",
      "code": "package college;\n\npublic class Faculty {\n    public String name;\n    public String subject;\n\n    public Faculty(String name, String subject) {\n        this.name = name;\n        this.subject = subject;\n    }\n\n    public void show() {\n        System.out.println(\"Faculty -> \" + name + \" (Subject: \" + subject + \")\");\n    }\n}\n"
     },
     {
      "name": "SpecificImport.java",
      "code": "import college.Student;                // specific import - only Student\nimport college.Faculty;                // specific import - only Faculty\n\npublic class SpecificImport {\n    public static void main(String[] args) {\n        System.out.println(\"Using specific imports:\");\n        Student s = new Student(\"Divya\", 21);\n        Faculty f = new Faculty(\"Dr. Rao\", \"Java Programming\");\n        s.show();\n        f.show();\n    }\n}\n"
     },
     {
      "name": "WildcardImport.java",
      "code": "import college.*;                      // wildcard import - all classes of the package\n\npublic class WildcardImport {\n    public static void main(String[] args) {\n        System.out.println(\"Using wildcard import:\");\n        Student s = new Student(\"Kavya\", 22);\n        Faculty f = new Faculty(\"Prof. Sharma\", \"Data Structures\");\n        s.show();\n        f.show();\n\n        // Fully qualified name - no import needed\n        college.Student s2 = new college.Student(\"Latha\", 23);\n        s2.show();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac -d . college/Student.java college/Faculty.java",
      "out": ""
     },
     {
      "cmd": "javac SpecificImport.java WildcardImport.java",
      "out": ""
     },
     {
      "cmd": "java SpecificImport",
      "out": "Using specific imports:\nStudent -> Divya (Roll No: 21)\nFaculty -> Dr. Rao (Subject: Java Programming)"
     },
     {
      "cmd": "java WildcardImport",
      "out": "Using wildcard import:\nStudent -> Kavya (Roll No: 22)\nFaculty -> Prof. Sharma (Subject: Data Structures)\nStudent -> Latha (Roll No: 23)"
     }
    ],
    "notes": []
   },
   {
    "no": 3,
    "title": "Packages and Member Access",
    "aim": "Demonstrate the accessibility of public, private, protected and default members of a class from the same class, another class in the same package, and a class in a different package.",
    "files": [
     {
      "name": "pack1/AccessDemo.java",
      "code": "package pack1;\n\npublic class AccessDemo {\n    public    int pub = 1;\n    private   int pri = 2;\n    protected int pro = 3;\n              int def = 4;                 // default (package-private)\n\n    public void showAll() {                // same class: everything is accessible\n        System.out.println(\"Same class           -> public=\" + pub + \", private=\" + pri\n                           + \", protected=\" + pro + \", default=\" + def);\n    }\n}\n"
     },
     {
      "name": "pack1/SamePackage.java",
      "code": "package pack1;\n\npublic class SamePackage {\n    public void show() {\n        AccessDemo a = new AccessDemo();\n        // a.pri  -> ERROR: private is not accessible outside the class\n        System.out.println(\"Same package         -> public=\" + a.pub\n                           + \", protected=\" + a.pro + \", default=\" + a.def);\n    }\n}\n"
     },
     {
      "name": "pack2/OtherPackage.java",
      "code": "package pack2;\n\nimport pack1.AccessDemo;\n\npublic class OtherPackage {\n    public void show() {\n        AccessDemo a = new AccessDemo();\n        // a.pri -> ERROR (private)\n        // a.pro -> ERROR (protected: only for subclasses outside the package)\n        // a.def -> ERROR (default: only inside the same package)\n        System.out.println(\"Other pkg (no sub)   -> public=\" + a.pub);\n    }\n}\n"
     },
     {
      "name": "pack2/SubClassOtherPackage.java",
      "code": "package pack2;\n\nimport pack1.AccessDemo;\n\npublic class SubClassOtherPackage extends AccessDemo {\n    public void show() {\n        // pri and def are NOT accessible here\n        System.out.println(\"Other pkg (subclass) -> public=\" + pub + \", protected=\" + pro);\n    }\n}\n"
     },
     {
      "name": "MemberAccessTest.java",
      "code": "import pack1.*;\nimport pack2.*;\n\npublic class MemberAccessTest {\n    public static void main(String[] args) {\n        new AccessDemo().showAll();\n        new SamePackage().show();\n        new SubClassOtherPackage().show();\n        new OtherPackage().show();\n\n        System.out.println(\"\\nModifier    Class  Package  Subclass  World\");\n        System.out.println(\"public       Yes     Yes      Yes      Yes\");\n        System.out.println(\"protected    Yes     Yes      Yes      No\");\n        System.out.println(\"default      Yes     Yes      No       No\");\n        System.out.println(\"private      Yes     No       No       No\");\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac -d . pack1/AccessDemo.java pack1/SamePackage.java",
      "out": ""
     },
     {
      "cmd": "javac -d . pack2/OtherPackage.java pack2/SubClassOtherPackage.java",
      "out": ""
     },
     {
      "cmd": "javac MemberAccessTest.java",
      "out": ""
     },
     {
      "cmd": "java MemberAccessTest",
      "out": "Same class           -> public=1, private=2, protected=3, default=4\nSame package         -> public=1, protected=3, default=4\nOther pkg (subclass) -> public=1, protected=3\nOther pkg (no sub)   -> public=1\n\nModifier    Class  Package  Subclass  World\npublic       Yes     Yes      Yes      Yes\nprotected    Yes     Yes      Yes      No\ndefault      Yes     Yes      No       No\nprivate      Yes     No       No       No"
     }
    ],
    "notes": []
   },
   {
    "no": 4,
    "title": "Demonstrating CLASSPATH",
    "aim": "Demonstrate how Java uses the CLASSPATH to locate a user-defined package (utilities) containing a Calculator class, and access it from another program compiled and executed using the configured CLASSPATH.",
    "files": [
     {
      "name": "utilities/Calculator.java",
      "code": "package utilities;\n\npublic class Calculator {\n    public int add(int a, int b)      { return a + b; }\n    public int subtract(int a, int b) { return a - b; }\n    public int multiply(int a, int b) { return a * b; }\n    public double divide(int a, int b) { return (double) a / b; }\n}\n"
     },
     {
      "name": "ClasspathDemo.java",
      "code": "import utilities.Calculator;\n\npublic class ClasspathDemo {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        System.out.println(\"Package 'utilities' located through CLASSPATH\");\n        System.out.println(\"15 + 5 = \" + calc.add(15, 5));\n        System.out.println(\"15 - 5 = \" + calc.subtract(15, 5));\n        System.out.println(\"15 * 5 = \" + calc.multiply(15, 5));\n        System.out.println(\"15 / 5 = \" + calc.divide(15, 5));\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "mkdir libs",
      "out": ""
     },
     {
      "cmd": "javac -d libs utilities/Calculator.java",
      "out": ""
     },
     {
      "cmd": "set CLASSPATH=libs;.",
      "out": ""
     },
     {
      "cmd": "javac ClasspathDemo.java",
      "out": ""
     },
     {
      "cmd": "java ClasspathDemo",
      "out": "Package 'utilities' located through CLASSPATH\n15 + 5 = 20\n15 - 5 = 10\n15 * 5 = 75\n15 / 5 = 3.0"
     }
    ],
    "notes": [
     "CLASSPATH tells the compiler and the JVM where to search for packages. Here it points to the libs folder (where the utilities package was created) and to the current folder (.)."
    ]
   },
   {
    "no": 5,
    "title": "Package Containing Multiple Classes",
    "aim": "Create and use a package named bank containing three classes — Account, Customer and Transaction — accessed together from a main class outside the package.",
    "files": [
     {
      "name": "bank/Account.java",
      "code": "package bank;\n\npublic class Account {\n    private int accNo;\n    private double balance;\n\n    public Account(int accNo, double balance) {\n        this.accNo = accNo;\n        this.balance = balance;\n    }\n\n    public int getAccNo()      { return accNo; }\n    public double getBalance() { return balance; }\n\n    public void deposit(double amount)  { balance += amount; }\n\n    public boolean withdraw(double amount) {\n        if (amount > balance) return false;\n        balance -= amount;\n        return true;\n    }\n}\n"
     },
     {
      "name": "bank/Customer.java",
      "code": "package bank;\n\npublic class Customer {\n    private String name;\n    private String phone;\n    private Account account;\n\n    public Customer(String name, String phone, Account account) {\n        this.name = name;\n        this.phone = phone;\n        this.account = account;\n    }\n\n    public Account getAccount() { return account; }\n\n    public void display() {\n        System.out.println(\"Customer   : \" + name);\n        System.out.println(\"Phone      : \" + phone);\n        System.out.println(\"Account No : \" + account.getAccNo());\n        System.out.println(\"Balance    : \" + account.getBalance());\n    }\n}\n"
     },
     {
      "name": "bank/Transaction.java",
      "code": "package bank;\n\npublic class Transaction {\n    public static void deposit(Account acc, double amount) {\n        acc.deposit(amount);\n        System.out.println(\"[DEPOSIT]  \" + amount + \" -> new balance \" + acc.getBalance());\n    }\n\n    public static void withdraw(Account acc, double amount) {\n        if (acc.withdraw(amount))\n            System.out.println(\"[WITHDRAW] \" + amount + \" -> new balance \" + acc.getBalance());\n        else\n            System.out.println(\"[FAILED]   Insufficient balance for \" + amount);\n    }\n}\n"
     },
     {
      "name": "BankDemo.java",
      "code": "import bank.Account;\nimport bank.Customer;\nimport bank.Transaction;\n\npublic class BankDemo {\n    public static void main(String[] args) {\n        Account acc = new Account(50012345, 15000);\n        Customer cust = new Customer(\"Sowmya\", \"9876543210\", acc);\n\n        cust.display();\n        System.out.println();\n\n        Transaction.deposit(acc, 5000);\n        Transaction.withdraw(acc, 8000);\n        Transaction.withdraw(acc, 20000);\n\n        System.out.println();\n        cust.display();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac -d . bank/Account.java bank/Customer.java bank/Transaction.java",
      "out": ""
     },
     {
      "cmd": "javac BankDemo.java",
      "out": ""
     },
     {
      "cmd": "java BankDemo",
      "out": "Customer   : Sowmya\nPhone      : 9876543210\nAccount No : 50012345\nBalance    : 15000.0\n\n[DEPOSIT]  5000.0 -> new balance 20000.0\n[WITHDRAW] 8000.0 -> new balance 12000.0\n[FAILED]   Insufficient balance for 20000.0\n\nCustomer   : Sowmya\nPhone      : 9876543210\nAccount No : 50012345\nBalance    : 12000.0"
     }
    ],
    "notes": []
   },
   {
    "no": 6,
    "title": "Defining and Implementing an Interface",
    "aim": "Create an interface Shape containing a method area(), and implement it using Circle and Rectangle classes.",
    "files": [
     {
      "name": "InterfaceShape.java",
      "code": "interface Shape {\n    double area();                       // abstract method (public abstract by default)\n}\n\nclass Circle implements Shape {\n    double radius;\n\n    Circle(double radius) {\n        this.radius = radius;\n    }\n\n    public double area() {\n        return Math.PI * radius * radius;\n    }\n}\n\nclass Rectangle implements Shape {\n    double length, width;\n\n    Rectangle(double length, double width) {\n        this.length = length;\n        this.width = width;\n    }\n\n    public double area() {\n        return length * width;\n    }\n}\n\npublic class InterfaceShape {\n    public static void main(String[] args) {\n        Circle c = new Circle(7);\n        Rectangle r = new Rectangle(10, 6);\n\n        System.out.printf(\"Area of Circle (r = 7)         : %.2f%n\", c.area());\n        System.out.printf(\"Area of Rectangle (10 x 6)     : %.2f%n\", r.area());\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac InterfaceShape.java",
      "out": ""
     },
     {
      "cmd": "java InterfaceShape",
      "out": "Area of Circle (r = 7)         : 153.94\nArea of Rectangle (10 x 6)     : 60.00"
     }
    ],
    "notes": []
   },
   {
    "no": 7,
    "title": "Implementing Multiple Interfaces",
    "aim": "Demonstrate how a class can implement multiple interfaces, Printable and Showable, using a single Demo class.",
    "files": [
     {
      "name": "MultipleInterfaces.java",
      "code": "interface Printable {\n    void print();\n}\n\ninterface Showable {\n    void show();\n}\n\nclass Demo implements Printable, Showable {      // implements both interfaces\n    public void print() {\n        System.out.println(\"print() method of the Printable interface\");\n    }\n\n    public void show() {\n        System.out.println(\"show() method of the Showable interface\");\n    }\n}\n\npublic class MultipleInterfaces {\n    public static void main(String[] args) {\n        Demo d = new Demo();\n        d.print();\n        d.show();\n\n        Printable p = d;                         // one object, two interface types\n        Showable s = d;\n        p.print();\n        s.show();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac MultipleInterfaces.java",
      "out": ""
     },
     {
      "cmd": "java MultipleInterfaces",
      "out": "print() method of the Printable interface\nshow() method of the Showable interface\nprint() method of the Printable interface\nshow() method of the Showable interface"
     }
    ],
    "notes": []
   },
   {
    "no": 8,
    "title": "Interface-Based Polymorphism",
    "aim": "Demonstrate polymorphism using an interface reference Vehicle, assigning objects of Car and Bike to it.",
    "files": [
     {
      "name": "InterfacePolymorphism.java",
      "code": "interface Vehicle {\n    void start();\n    void stop();\n}\n\nclass Car implements Vehicle {\n    public void start() { System.out.println(\"Car started with a key\"); }\n    public void stop()  { System.out.println(\"Car stopped using brakes\"); }\n}\n\nclass Bike implements Vehicle {\n    public void start() { System.out.println(\"Bike started with a self-start button\"); }\n    public void stop()  { System.out.println(\"Bike stopped using disc brakes\"); }\n}\n\npublic class InterfacePolymorphism {\n    public static void main(String[] args) {\n        Vehicle v;                               // interface reference variable\n\n        v = new Car();\n        v.start();\n        v.stop();\n\n        System.out.println();\n\n        v = new Bike();\n        v.start();\n        v.stop();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac InterfacePolymorphism.java",
      "out": ""
     },
     {
      "cmd": "java InterfacePolymorphism",
      "out": "Car started with a key\nCar stopped using brakes\n\nBike started with a self-start button\nBike stopped using disc brakes"
     }
    ],
    "notes": []
   },
   {
    "no": 9,
    "title": "Variables in Interfaces",
    "aim": "Demonstrate variables declared inside an interface named Constants (MAX_MARKS and PI), accessed from a class that implements the interface and directly using the interface name.",
    "files": [
     {
      "name": "InterfaceVariables.java",
      "code": "interface Constants {\n    int MAX_MARKS = 100;                 // public static final by default\n    double PI = 3.14159;\n}\n\nclass Result implements Constants {\n    void show(int marks) {\n        double percentage = (marks * 100.0) / MAX_MARKS;   // accessed directly\n        System.out.println(\"Marks obtained : \" + marks + \" / \" + MAX_MARKS);\n        System.out.println(\"Percentage     : \" + percentage + \"%\");\n    }\n}\n\npublic class InterfaceVariables {\n    public static void main(String[] args) {\n        Result r = new Result();\n        r.show(87);\n\n        System.out.println(\"\\nAccessing through the interface name:\");\n        System.out.println(\"Constants.MAX_MARKS = \" + Constants.MAX_MARKS);\n        System.out.println(\"Constants.PI        = \" + Constants.PI);\n        // Constants.MAX_MARKS = 200;   // ERROR: interface variables are final\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac InterfaceVariables.java",
      "out": ""
     },
     {
      "cmd": "java InterfaceVariables",
      "out": "Marks obtained : 87 / 100\nPercentage     : 87.0%\n\nAccessing through the interface name:\nConstants.MAX_MARKS = 100\nConstants.PI        = 3.14159"
     }
    ],
    "notes": []
   },
   {
    "no": 10,
    "title": "Nested Interfaces",
    "aim": "Demonstrate the concept of a nested interface Department declared inside an outer class University, implemented and used in another class.",
    "files": [
     {
      "name": "NestedInterfaceDemo.java",
      "code": "class University {\n    interface Department {                       // nested interface\n        void showDepartment();\n        int totalStudents();\n    }\n}\n\nclass ComputerScience implements University.Department {\n    public void showDepartment() {\n        System.out.println(\"Department : Computer Science and Engineering\");\n    }\n\n    public int totalStudents() {\n        return 240;\n    }\n}\n\npublic class NestedInterfaceDemo {\n    public static void main(String[] args) {\n        University.Department dept = new ComputerScience();\n        dept.showDepartment();\n        System.out.println(\"Students   : \" + dept.totalStudents());\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac NestedInterfaceDemo.java",
      "out": ""
     },
     {
      "cmd": "java NestedInterfaceDemo",
      "out": "Department : Computer Science and Engineering\nStudents   : 240"
     }
    ],
    "notes": []
   },
   {
    "no": 11,
    "title": "Interface Inheritance",
    "aim": "Demonstrate inheritance between interfaces, where interface Dog extends interface Animal, and both methods are implemented in class Labrador.",
    "files": [
     {
      "name": "InterfaceInheritance.java",
      "code": "interface Animal {\n    void eat();\n}\n\ninterface Dog extends Animal {                   // interface extends interface\n    void bark();\n}\n\nclass Labrador implements Dog {\n    public void eat() {\n        System.out.println(\"Labrador is eating\");\n    }\n\n    public void bark() {\n        System.out.println(\"Labrador is barking\");\n    }\n}\n\npublic class InterfaceInheritance {\n    public static void main(String[] args) {\n        Labrador l = new Labrador();\n        l.eat();                                 // from Animal\n        l.bark();                                // from Dog\n\n        Animal a = l;                            // upcasting to the parent interface\n        a.eat();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac InterfaceInheritance.java",
      "out": ""
     },
     {
      "cmd": "java InterfaceInheritance",
      "out": "Labrador is eating\nLabrador is barking\nLabrador is eating"
     }
    ],
    "notes": []
   },
   {
    "no": 12,
    "title": "Real-World Application Using Interfaces",
    "aim": "Simulate an online shopping payment system in which different payment methods implement a common interface.",
    "files": [
     {
      "name": "OnlineShopping.java",
      "code": "interface PaymentMethod {\n    boolean pay(double amount);\n    String getName();\n}\n\ninterface Refundable {\n    void refund(double amount);\n}\n\nclass CreditCard implements PaymentMethod, Refundable {\n    private double limit = 50000;\n\n    public boolean pay(double amount) {\n        if (amount > limit) return false;\n        limit -= amount;\n        return true;\n    }\n\n    public void refund(double amount) {\n        limit += amount;\n        System.out.println(\"Refunded \" + amount + \" to the credit card\");\n    }\n\n    public String getName() { return \"Credit Card\"; }\n}\n\nclass UPI implements PaymentMethod {\n    private double balance = 3000;\n\n    public boolean pay(double amount) {\n        if (amount > balance) return false;\n        balance -= amount;\n        return true;\n    }\n\n    public String getName() { return \"UPI\"; }\n}\n\nclass NetBanking implements PaymentMethod, Refundable {\n    private double balance = 25000;\n\n    public boolean pay(double amount) {\n        if (amount > balance) return false;\n        balance -= amount;\n        return true;\n    }\n\n    public void refund(double amount) {\n        balance += amount;\n        System.out.println(\"Refunded \" + amount + \" to the bank account\");\n    }\n\n    public String getName() { return \"Net Banking\"; }\n}\n\npublic class OnlineShopping {\n    static void checkout(double total, PaymentMethod method) {\n        System.out.print(\"Paying \" + total + \" using \" + method.getName() + \" ... \");\n        System.out.println(method.pay(total) ? \"SUCCESS\" : \"FAILED (insufficient funds)\");\n    }\n\n    public static void main(String[] args) {\n        double cartTotal = 4599.50;\n        System.out.println(\"Cart total : \" + cartTotal + \"\\n\");\n\n        PaymentMethod[] methods = { new UPI(), new CreditCard(), new NetBanking() };\n        for (PaymentMethod m : methods) {\n            checkout(cartTotal, m);\n        }\n\n        System.out.println();\n        Refundable r = new CreditCard();\n        r.refund(1000);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac OnlineShopping.java",
      "out": ""
     },
     {
      "cmd": "java OnlineShopping",
      "out": "Cart total : 4599.5\n\nPaying 4599.5 using UPI ... FAILED (insufficient funds)\nPaying 4599.5 using Credit Card ... SUCCESS\nPaying 4599.5 using Net Banking ... SUCCESS\n\nRefunded 1000.0 to the credit card"
     }
    ],
    "notes": []
   }
  ]
 },
 {
  "n": 10,
  "title": "Exceptions & I/O Streams",
  "blurb": "Exception handling keywords, user-defined exceptions and file handling with byte streams",
  "kind": "programs",
  "programs": [
   {
    "no": 1,
    "title": "try-catch: Division by Zero",
    "aim": "Write a Java program that handles an ArithmeticException using a try-catch block and shows that the program continues after the exception.",
    "files": [
     {
      "name": "DivideDemo.java",
      "code": "public class DivideDemo {\n    public static void main(String[] args) {\n        int a = 20, b = 0;\n\n        try {\n            int result = a / b;                      // throws ArithmeticException\n            System.out.println(\"Result = \" + result);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Exception caught : \" + e);\n            System.out.println(\"Message          : \" + e.getMessage());\n        }\n\n        System.out.println(\"Program continues after the try-catch block.\");\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac DivideDemo.java",
      "out": ""
     },
     {
      "cmd": "java DivideDemo",
      "out": "Exception caught : java.lang.ArithmeticException: / by zero\nMessage          : / by zero\nProgram continues after the try-catch block."
     }
    ],
    "notes": [
     "When the exception occurs, the rest of the try block is skipped and control moves to the matching catch block."
    ]
   },
   {
    "no": 2,
    "title": "Common Runtime Exceptions",
    "aim": "Write a Java program that triggers and handles the common runtime exceptions: ArithmeticException, ArrayIndexOutOfBoundsException, NullPointerException and NumberFormatException.",
    "files": [
     {
      "name": "RuntimeDemo.java",
      "code": "public class RuntimeDemo {\n    public static void main(String[] args) {\n\n        try {\n            int a = 10, b = 0;\n            System.out.println(a / b);\n        } catch (ArithmeticException e) {\n            System.out.println(\"1. ArithmeticException            : \" + e.getMessage());\n        }\n\n        try {\n            int[] arr = {1, 2, 3};\n            System.out.println(arr[3]);\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"2. ArrayIndexOutOfBoundsException : \" + e.getMessage());\n        }\n\n        try {\n            String s = null;\n            System.out.println(s.length());\n        } catch (NullPointerException e) {\n            System.out.println(\"3. NullPointerException           : the reference is null\");\n        }\n\n        try {\n            int n = Integer.parseInt(\"12x\");\n            System.out.println(n);\n        } catch (NumberFormatException e) {\n            System.out.println(\"4. NumberFormatException          : \" + e.getMessage());\n        }\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac RuntimeDemo.java",
      "out": ""
     },
     {
      "cmd": "java RuntimeDemo",
      "out": "1. ArithmeticException            : / by zero\n2. ArrayIndexOutOfBoundsException : Index 3 out of bounds for length 3\n3. NullPointerException           : the reference is null\n4. NumberFormatException          : For input string: \"12x\""
     }
    ],
    "notes": [
     "These exceptions are unchecked: they extend RuntimeException, so the compiler does not force you to handle them."
    ]
   },
   {
    "no": 3,
    "title": "Uncaught Exception",
    "aim": "Write a Java program that does not handle an exception, to observe the default exception message and the stack trace printed by the JVM.",
    "files": [
     {
      "name": "UncaughtDemo.java",
      "code": "public class UncaughtDemo {\n\n    static void show() {\n        int[] a = new int[2];\n        a[2] = 10;                                   // index 2 is out of range\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"Before the exception\");\n        show();\n        System.out.println(\"After the exception (never printed)\");\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac UncaughtDemo.java",
      "out": ""
     },
     {
      "cmd": "java UncaughtDemo",
      "out": "Before the exception\nException in thread \"main\" java.lang.ArrayIndexOutOfBoundsException: Index 2 out of bounds for length 2\n\tat UncaughtDemo.show(UncaughtDemo.java:5)\n\tat UncaughtDemo.main(UncaughtDemo.java:10)"
     }
    ],
    "notes": [
     "The JVM prints the exception type, the message and the sequence of method calls (stack trace), and then terminates the program."
    ]
   },
   {
    "no": 4,
    "title": "Multiple Catch Clauses",
    "aim": "Write a Java program that uses multiple catch blocks to handle ArrayIndexOutOfBoundsException, NumberFormatException, NullPointerException and ArithmeticException.",
    "files": [
     {
      "name": "MultiCatch.java",
      "code": "public class MultiCatch {\n\n    static void test(int choice) {\n        try {\n            switch (choice) {\n                case 0: {\n                    int[] marks = new int[3];\n                    marks[5] = 90;                           // invalid index\n                    break;\n                }\n                case 1: {\n                    int n = Integer.parseInt(\"abc\");         // not a number\n                    break;\n                }\n                case 2: {\n                    String s = null;\n                    System.out.println(s.length());          // null reference\n                    break;\n                }\n                case 3: {\n                    int zero = 0;\n                    System.out.println(100 / zero);          // divide by zero\n                    break;\n                }\n                default:\n                    System.out.println(\"Case \" + choice + \" -> no exception\");\n            }\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"Case \" + choice + \" -> ArrayIndexOutOfBoundsException : \" + e.getMessage());\n        } catch (NumberFormatException e) {\n            System.out.println(\"Case \" + choice + \" -> NumberFormatException : \" + e.getMessage());\n        } catch (NullPointerException e) {\n            System.out.println(\"Case \" + choice + \" -> NullPointerException : null reference used\");\n        } catch (ArithmeticException e) {\n            System.out.println(\"Case \" + choice + \" -> ArithmeticException : \" + e.getMessage());\n        } catch (Exception e) {\n            System.out.println(\"Case \" + choice + \" -> Exception : \" + e);\n        }\n    }\n\n    public static void main(String[] args) {\n        for (int i = 0; i <= 4; i++) {\n            test(i);\n        }\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac MultiCatch.java",
      "out": ""
     },
     {
      "cmd": "java MultiCatch",
      "out": "Case 0 -> ArrayIndexOutOfBoundsException : Index 5 out of bounds for length 3\nCase 1 -> NumberFormatException : For input string: \"abc\"\nCase 2 -> NullPointerException : null reference used\nCase 3 -> ArithmeticException : / by zero\nCase 4 -> no exception"
     }
    ],
    "notes": [
     "Only the first catch block that matches the exception type is executed. A general catch (Exception e) must always come last."
    ]
   },
   {
    "no": 5,
    "title": "The throw Statement",
    "aim": "Write a Java program that explicitly throws an exception using the throw keyword when an age is below the voting age.",
    "files": [
     {
      "name": "ThrowDemo.java",
      "code": "public class ThrowDemo {\n\n    static void checkAge(int age) {\n        if (age < 18) {\n            throw new IllegalArgumentException(\"Age \" + age + \" is not eligible to vote\");\n        }\n        System.out.println(\"Age \" + age + \" is eligible to vote\");\n    }\n\n    public static void main(String[] args) {\n        try {\n            checkAge(25);\n            checkAge(15);                            // exception is thrown here\n            checkAge(30);                            // never executed\n        } catch (IllegalArgumentException e) {\n            System.out.println(\"Caught : \" + e.getMessage());\n        }\n        System.out.println(\"End of program\");\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac ThrowDemo.java",
      "out": ""
     },
     {
      "cmd": "java ThrowDemo",
      "out": "Age 25 is eligible to vote\nCaught : Age 15 is not eligible to vote\nEnd of program"
     }
    ],
    "notes": [
     "throw is used inside a method body to create and throw an exception object manually."
    ]
   },
   {
    "no": 6,
    "title": "throws and Propagation",
    "aim": "Write a Java program to show how a checked exception declared with throws propagates through method calls until it is handled.",
    "files": [
     {
      "name": "ThrowsDemo.java",
      "code": "import java.io.IOException;\n\npublic class ThrowsDemo {\n\n    static void level3() throws IOException {\n        System.out.println(\"level3 : throwing IOException\");\n        throw new IOException(\"Disk not ready\");\n    }\n\n    static void level2() throws IOException {\n        System.out.println(\"level2 : calling level3\");\n        level3();\n        System.out.println(\"level2 : back from level3\");     // skipped\n    }\n\n    static void level1() {\n        try {\n            System.out.println(\"level1 : calling level2\");\n            level2();\n        } catch (IOException e) {\n            System.out.println(\"level1 : handled -> \" + e.getMessage());\n        }\n    }\n\n    public static void main(String[] args) {\n        level1();\n        System.out.println(\"main   : program finished normally\");\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac ThrowsDemo.java",
      "out": ""
     },
     {
      "cmd": "java ThrowsDemo",
      "out": "level1 : calling level2\nlevel2 : calling level3\nlevel3 : throwing IOException\nlevel1 : handled -> Disk not ready\nmain   : program finished normally"
     }
    ],
    "notes": [
     "A method that does not handle a checked exception must declare it with throws, so the caller is forced to handle it."
    ]
   },
   {
    "no": 7,
    "title": "The finally Block",
    "aim": "Write a Java program to demonstrate the finally block, which always executes, and a nested try block whose exception is handled by the outer catch.",
    "files": [
     {
      "name": "FinallyDemo.java",
      "code": "public class FinallyDemo {\n\n    static int divide(int a, int b) {\n        try {\n            return a / b;\n        } catch (ArithmeticException e) {\n            System.out.println(\"Cannot divide by zero\");\n            return -1;\n        } finally {\n            System.out.println(\"finally block executed (a=\" + a + \", b=\" + b + \")\");\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"Result : \" + divide(10, 2));\n        System.out.println(\"Result : \" + divide(10, 0));\n\n        System.out.println();\n        try {\n            try {\n                String s = \"xyz\";\n                System.out.println(Integer.parseInt(s));     // NumberFormatException\n            } catch (ArithmeticException e) {\n                System.out.println(\"Inner catch (does not match)\");\n            } finally {\n                System.out.println(\"Inner finally\");\n            }\n        } catch (NumberFormatException e) {\n            System.out.println(\"Outer catch : \" + e.getMessage());\n        }\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac FinallyDemo.java",
      "out": ""
     },
     {
      "cmd": "java FinallyDemo",
      "out": "finally block executed (a=10, b=2)\nResult : 5\nCannot divide by zero\nfinally block executed (a=10, b=0)\nResult : -1\n\nInner finally\nOuter catch : For input string: \"xyz\""
     }
    ],
    "notes": [
     "The finally block runs whether or not an exception occurs, even when the try or catch block executes a return statement."
    ]
   },
   {
    "no": 8,
    "title": "User-Defined Exception",
    "aim": "Create a user-defined exception class InvalidAgeException and use it to reject ages outside the range 18 to 60.",
    "files": [
     {
      "name": "CustomException.java",
      "code": "class InvalidAgeException extends Exception {\n    public InvalidAgeException(String message) {\n        super(message);\n    }\n}\n\npublic class CustomException {\n\n    static void validate(int age) throws InvalidAgeException {\n        if (age < 18 || age > 60) {\n            throw new InvalidAgeException(\"Age \" + age + \" is outside the allowed range 18-60\");\n        }\n        System.out.println(\"Age \" + age + \" is valid\");\n    }\n\n    public static void main(String[] args) {\n        int[] ages = {25, 15, 61, 40};\n\n        for (int age : ages) {\n            try {\n                validate(age);\n            } catch (InvalidAgeException e) {\n                System.out.println(\"Invalid : \" + e.getMessage());\n            }\n        }\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac CustomException.java",
      "out": ""
     },
     {
      "cmd": "java CustomException",
      "out": "Age 25 is valid\nInvalid : Age 15 is outside the allowed range 18-60\nInvalid : Age 61 is outside the allowed range 18-60\nAge 40 is valid"
     }
    ],
    "notes": [
     "A user-defined checked exception extends Exception. The constructor passes the message to the superclass so that getMessage() returns it."
    ]
   },
   {
    "no": 9,
    "title": "Student Marks Validation",
    "aim": "Write a Java program that validates the marks of students in a loop and rejects marks outside the range 0 to 100 using a user-defined exception.",
    "files": [
     {
      "name": "MarksValidation.java",
      "code": "class InvalidMarksException extends Exception {\n    public InvalidMarksException(String message) {\n        super(message);\n    }\n}\n\npublic class MarksValidation {\n\n    static void check(int marks) throws InvalidMarksException {\n        if (marks < 0 || marks > 100) {\n            throw new InvalidMarksException(\"Invalid marks : \" + marks + \" (must be between 0 and 100)\");\n        }\n    }\n\n    public static void main(String[] args) {\n        int[] marks = {85, 105, 72, -4, 90};\n        int valid = 0, total = 0;\n\n        for (int m : marks) {\n            try {\n                check(m);\n                valid++;\n                total += m;\n                System.out.println(\"Marks \" + m + \" accepted\");\n            } catch (InvalidMarksException e) {\n                System.out.println(e.getMessage());\n            }\n        }\n\n        System.out.println();\n        System.out.println(\"Valid entries          : \" + valid);\n        System.out.println(\"Average of valid marks : \" + (double) total / valid);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac MarksValidation.java",
      "out": ""
     },
     {
      "cmd": "java MarksValidation",
      "out": "Marks 85 accepted\nInvalid marks : 105 (must be between 0 and 100)\nMarks 72 accepted\nInvalid marks : -4 (must be between 0 and 100)\nMarks 90 accepted\n\nValid entries          : 3\nAverage of valid marks : 82.33333333333333"
     }
    ],
    "notes": [
     "The loop continues after each exception, so one invalid entry does not stop the validation of the remaining marks."
    ]
   },
   {
    "no": 10,
    "title": "Combined Exception Application",
    "aim": "Write a Java bank withdrawal program that uses all five exception-handling keywords: try, catch, throw, throws and finally.",
    "files": [
     {
      "name": "BankApp.java",
      "code": "class InsufficientFundsException extends Exception {\n    private double shortfall;\n\n    public InsufficientFundsException(String message, double shortfall) {\n        super(message);\n        this.shortfall = shortfall;\n    }\n\n    public double getShortfall() {\n        return shortfall;\n    }\n}\n\nclass Account {\n    private double balance;\n\n    Account(double balance) {\n        this.balance = balance;\n    }\n\n    double getBalance() {\n        return balance;\n    }\n\n    void withdraw(double amount) throws InsufficientFundsException {      // throws\n        if (amount <= 0) {\n            throw new IllegalArgumentException(\"Amount must be positive\");   // throw\n        }\n        if (amount > balance) {\n            throw new InsufficientFundsException(\"Insufficient balance\", amount - balance);\n        }\n        balance -= amount;\n        System.out.println(\"Withdrawn \" + amount);\n    }\n}\n\npublic class BankApp {\n    public static void main(String[] args) {\n        Account account = new Account(5000);\n        double[] requests = {2000, -50, 4000, 500};\n\n        for (double amount : requests) {\n            try {                                                        // try\n                account.withdraw(amount);\n            } catch (InsufficientFundsException e) {                     // catch\n                System.out.println(\"Failed    : \" + e.getMessage() + \", short by \" + e.getShortfall());\n            } catch (IllegalArgumentException e) {\n                System.out.println(\"Failed    : \" + e.getMessage());\n            } finally {                                                  // finally\n                System.out.println(\"Balance   : \" + account.getBalance());\n                System.out.println(\"-----\");\n            }\n        }\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac BankApp.java",
      "out": ""
     },
     {
      "cmd": "java BankApp",
      "out": "Withdrawn 2000.0\nBalance   : 3000.0\n-----\nFailed    : Amount must be positive\nBalance   : 3000.0\n-----\nFailed    : Insufficient balance, short by 1000.0\nBalance   : 3000.0\n-----\nWithdrawn 500.0\nBalance   : 2500.0\n-----"
     }
    ],
    "notes": [
     "The finally block prints the balance after every request, whether the withdrawal succeeded or failed."
    ]
   },
   {
    "no": 11,
    "title": "InputStream and OutputStream",
    "aim": "Write a Java program that transfers bytes from an InputStream to an OutputStream without using any file.",
    "files": [
     {
      "name": "StreamBasics.java",
      "code": "import java.io.ByteArrayInputStream;\nimport java.io.ByteArrayOutputStream;\nimport java.io.IOException;\nimport java.io.InputStream;\nimport java.io.OutputStream;\n\npublic class StreamBasics {\n    public static void main(String[] args) throws IOException {\n        byte[] data = \"Java Streams\".getBytes();\n\n        InputStream in = new ByteArrayInputStream(data);\n        OutputStream out = new ByteArrayOutputStream();\n\n        int b;\n        int count = 0;\n        while ((b = in.read()) != -1) {              // read one byte at a time\n            out.write(b);                            // write it to the output stream\n            count++;\n        }\n        in.close();\n        out.close();\n\n        System.out.println(\"Bytes transferred : \" + count);\n        System.out.println(\"Copied text       : \" + out.toString());\n\n        System.out.print(\"Using System.out  : \");\n        System.out.write(data, 0, data.length);      // System.out is also an OutputStream\n        System.out.println();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac StreamBasics.java",
      "out": ""
     },
     {
      "cmd": "java StreamBasics",
      "out": "Bytes transferred : 12\nCopied text       : Java Streams\nUsing System.out  : Java Streams"
     }
    ],
    "notes": [
     "InputStream and OutputStream are abstract classes for reading and writing bytes. ByteArrayInputStream and ByteArrayOutputStream work on memory instead of files."
    ]
   },
   {
    "no": 12,
    "title": "Read a File with FileInputStream",
    "aim": "Write a Java program that reads the file data.txt byte by byte using FileInputStream and displays its contents.",
    "files": [
     {
      "name": "FileRead.java",
      "code": "import java.io.FileInputStream;\nimport java.io.FileNotFoundException;\nimport java.io.IOException;\n\npublic class FileRead {\n    public static void main(String[] args) {\n        try (FileInputStream fis = new FileInputStream(\"data.txt\")) {\n            int b;\n            int count = 0;\n\n            System.out.println(\"Contents of data.txt :\");\n            while ((b = fis.read()) != -1) {         // read() returns -1 at end of file\n                System.out.print((char) b);\n                count++;\n            }\n            System.out.println(\"Total bytes read : \" + count);\n        } catch (FileNotFoundException e) {\n            System.out.println(\"data.txt not found\");\n        } catch (IOException e) {\n            System.out.println(\"Error : \" + e.getMessage());\n        }\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "echo Java file handling with byte streams>data.txt",
      "out": ""
     },
     {
      "cmd": "javac FileRead.java",
      "out": ""
     },
     {
      "cmd": "java FileRead",
      "out": "Contents of data.txt :\nJava file handling with byte streams\nTotal bytes read : 37"
     }
    ],
    "notes": [
     "The echo command creates data.txt. read() returns -1 when the end of the file is reached."
    ]
   },
   {
    "no": 13,
    "title": "Write a File with FileOutputStream",
    "aim": "Write a Java program that writes bytes to a file using FileOutputStream and then reads the file back to verify the data.",
    "files": [
     {
      "name": "FileWrite.java",
      "code": "import java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\n\npublic class FileWrite {\n    public static void main(String[] args) {\n        String text = \"Java file handling\\nWriting bytes with FileOutputStream\\n\";\n\n        try (FileOutputStream fos = new FileOutputStream(\"data.txt\")) {\n            fos.write(text.getBytes());\n            System.out.println(\"Data written to data.txt (\" + text.length() + \" bytes)\");\n        } catch (IOException e) {\n            System.out.println(\"Write error : \" + e.getMessage());\n        }\n\n        try (FileInputStream fis = new FileInputStream(\"data.txt\")) {\n            byte[] buffer = new byte[fis.available()];\n            fis.read(buffer);\n            String readBack = new String(buffer);\n\n            System.out.println();\n            System.out.println(\"Read back from data.txt:\");\n            System.out.print(readBack);\n            System.out.println(\"Verification : \" + (readBack.equals(text) ? \"data matches\" : \"data differs\"));\n        } catch (IOException e) {\n            System.out.println(\"Read error : \" + e.getMessage());\n        }\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac FileWrite.java",
      "out": ""
     },
     {
      "cmd": "java FileWrite",
      "out": "Data written to data.txt (55 bytes)\n\nRead back from data.txt:\nJava file handling\nWriting bytes with FileOutputStream\nVerification : data matches"
     }
    ],
    "notes": [
     "If data.txt already exists, its old contents are replaced."
    ]
   },
   {
    "no": 14,
    "title": "Copy a File",
    "aim": "Write a Java program that copies one file to another using FileInputStream and FileOutputStream, and handles the case where the source file is missing.",
    "files": [
     {
      "name": "CopyFile.java",
      "code": "import java.io.FileInputStream;\nimport java.io.FileNotFoundException;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\n\npublic class CopyFile {\n\n    static void copy(String source, String target) throws IOException {\n        try (FileInputStream in = new FileInputStream(source);\n             FileOutputStream out = new FileOutputStream(target)) {\n            byte[] buffer = new byte[1024];\n            int length;\n            long total = 0;\n            while ((length = in.read(buffer)) > 0) {\n                out.write(buffer, 0, length);\n                total += length;\n            }\n            System.out.println(source + \" copied to \" + target + \" (\" + total + \" bytes)\");\n        }\n    }\n\n    public static void main(String[] args) {\n        try {\n            copy(\"data.txt\", \"copy.txt\");\n            copy(\"missing.txt\", \"copy2.txt\");        // source does not exist\n        } catch (FileNotFoundException e) {\n            System.out.println(\"Source file not found : missing.txt\");\n        } catch (IOException e) {\n            System.out.println(\"Error : \" + e.getMessage());\n        }\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac CopyFile.java",
      "out": ""
     },
     {
      "cmd": "java CopyFile",
      "out": "data.txt copied to copy.txt (55 bytes)\nSource file not found : missing.txt"
     }
    ],
    "notes": [
     "The program copies data.txt and counts the bytes. Reading into a byte array is faster than reading one byte at a time. FileNotFoundException is a subclass of IOException, so it is caught first."
    ]
   },
   {
    "no": 15,
    "title": "Copy an Image with Exception Handling",
    "aim": "Write a Java program that copies an image file using byte streams, handles a missing file and I/O errors, and closes the streams in a finally block.",
    "files": [
     {
      "name": "CopyImage.java",
      "code": "import java.awt.image.BufferedImage;\nimport java.io.File;\nimport java.io.FileInputStream;\nimport java.io.FileNotFoundException;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\nimport javax.imageio.ImageIO;\n\npublic class CopyImage {\n\n    // creates a small sample picture so that the program is self-contained\n    static void createSampleImage(String name) throws IOException {\n        BufferedImage img = new BufferedImage(200, 120, BufferedImage.TYPE_INT_RGB);\n        for (int y = 0; y < 120; y++) {\n            for (int x = 0; x < 200; x++) {\n                int red = x * 255 / 199;\n                int green = y * 255 / 119;\n                img.setRGB(x, y, (red << 16) | (green << 8) | 128);\n            }\n        }\n        ImageIO.write(img, \"png\", new File(name));\n    }\n\n    static void copyImage(String source, String target) {\n        FileInputStream in = null;\n        FileOutputStream out = null;\n        try {\n            in = new FileInputStream(source);\n            out = new FileOutputStream(target);\n\n            byte[] buffer = new byte[1024];\n            int length;\n            long total = 0;\n            while ((length = in.read(buffer)) != -1) {\n                out.write(buffer, 0, length);\n                total += length;\n            }\n            System.out.println(source + \" copied to \" + target + \" (\" + total + \" bytes)\");\n        } catch (FileNotFoundException e) {\n            System.out.println(\"Error : file not found -> \" + source);\n        } catch (IOException e) {\n            System.out.println(\"I/O error : \" + e.getMessage());\n        } finally {\n            try {\n                if (in != null) in.close();\n                if (out != null) out.close();\n                System.out.println(\"Streams closed\");\n            } catch (IOException e) {\n                System.out.println(\"Error while closing : \" + e.getMessage());\n            }\n        }\n    }\n\n    public static void main(String[] args) throws IOException {\n        createSampleImage(\"photo.png\");\n\n        copyImage(\"photo.png\", \"photo_copy.png\");\n        copyImage(\"nofile.png\", \"nofile_copy.png\");          // this file does not exist\n\n        long a = new File(\"photo.png\").length();\n        long b = new File(\"photo_copy.png\").length();\n        System.out.println(\"Sizes equal : \" + (a == b));\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac CopyImage.java",
      "out": ""
     },
     {
      "cmd": "java CopyImage",
      "out": "photo.png copied to photo_copy.png (50645 bytes)\nStreams closed\nError : file not found -> nofile.png\nStreams closed\nSizes equal : true"
     }
    ],
    "notes": [
     "The program creates photo.png itself. To copy your own picture, put its name in the first copyImage() call. The finally block runs even when the file is missing."
    ]
   }
  ]
 },
 {
  "n": 11,
  "title": "Character Streams & Multithreading",
  "blurb": "Reader and Writer classes, FileReader, FileWriter, and creating and controlling threads",
  "kind": "programs",
  "programs": [
   {
    "no": 1,
    "title": "Read from Keyboard with Reader, Display with Writer",
    "aim": "Write a Java program that reads characters typed at the keyboard using a Reader until the # character is entered, and displays them using a Writer.",
    "files": [
     {
      "name": "KeyboardIO.java",
      "code": "import java.io.IOException;\nimport java.io.InputStreamReader;\nimport java.io.OutputStreamWriter;\nimport java.io.Reader;\nimport java.io.Writer;\n\npublic class KeyboardIO {\n    public static void main(String[] args) throws IOException {\n        Reader reader = new InputStreamReader(System.in);\n        Writer writer = new OutputStreamWriter(System.out);\n\n        System.out.print(\"Type characters (end with #) : \");\n\n        writer.write(\"You typed : \");\n        int ch;\n        while ((ch = reader.read()) != '#' && ch != -1) {\n            writer.write(ch);                        // echo every character\n        }\n        writer.write(\"\\n\");\n        writer.flush();\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac KeyboardIO.java",
      "out": ""
     },
     {
      "cmd": "java KeyboardIO",
      "out": "Type characters (end with #) : Hello Java#\nYou typed : Hello Java"
     }
    ],
    "notes": [
     "InputStreamReader converts the bytes of System.in into characters, and OutputStreamWriter converts characters back into bytes for System.out. flush() forces the buffered text to be written."
    ]
   },
   {
    "no": 2,
    "title": "Read a File with FileReader",
    "aim": "Write a Java program that reads the contents of a text file using FileReader and displays them.",
    "files": [
     {
      "name": "ReadFile.java",
      "code": "import java.io.FileNotFoundException;\nimport java.io.FileReader;\nimport java.io.IOException;\n\npublic class ReadFile {\n    public static void main(String[] args) {\n        try (FileReader fr = new FileReader(\"notes.txt\")) {\n            int ch;\n            int count = 0;\n\n            System.out.println(\"Contents of notes.txt :\");\n            while ((ch = fr.read()) != -1) {\n                System.out.print((char) ch);\n                count++;\n            }\n            System.out.println(\"Characters read : \" + count);\n        } catch (FileNotFoundException e) {\n            System.out.println(\"notes.txt not found\");\n        } catch (IOException e) {\n            System.out.println(\"Error : \" + e.getMessage());\n        }\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "echo Welcome to Java character streams>notes.txt",
      "out": ""
     },
     {
      "cmd": "javac ReadFile.java",
      "out": ""
     },
     {
      "cmd": "java ReadFile",
      "out": "Contents of notes.txt :\nWelcome to Java character streams\nCharacters read : 34"
     }
    ],
    "notes": [
     "The echo command creates notes.txt. Unlike FileInputStream, FileReader returns characters, not bytes."
    ]
   },
   {
    "no": 3,
    "title": "Write Text into a File with FileWriter",
    "aim": "Write a Java program that reads a line of text from the keyboard and saves it into a file using FileWriter.",
    "files": [
     {
      "name": "WriteText.java",
      "code": "import java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.FileWriter;\nimport java.io.IOException;\nimport java.io.InputStreamReader;\n\npublic class WriteText {\n    public static void main(String[] args) throws IOException {\n        BufferedReader keyboard = new BufferedReader(new InputStreamReader(System.in));\n\n        System.out.print(\"Enter text to save : \");\n        String text = keyboard.readLine();\n\n        try (FileWriter fw = new FileWriter(\"saved.txt\")) {\n            fw.write(text);\n            fw.write(\"\\n\");\n        }\n        System.out.println(\"Text saved in saved.txt (\" + text.length() + \" characters)\");\n\n        try (BufferedReader br = new BufferedReader(new FileReader(\"saved.txt\"))) {\n            System.out.println(\"File now contains  : \" + br.readLine());\n        }\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac WriteText.java",
      "out": ""
     },
     {
      "cmd": "java WriteText",
      "out": "Enter text to save : Java makes file handling easy\nText saved in saved.txt (29 characters)\nFile now contains  : Java makes file handling easy"
     }
    ],
    "notes": [
     "FileWriter creates the file if it does not exist and overwrites it if it does. Closing the writer makes sure the data reaches the disk."
    ]
   },
   {
    "no": 4,
    "title": "Copy a Text File with FileReader and FileWriter",
    "aim": "Write a Java program that copies a text file to another file using FileReader and FileWriter.",
    "files": [
     {
      "name": "CopyText.java",
      "code": "import java.io.File;\nimport java.io.FileReader;\nimport java.io.FileWriter;\nimport java.io.IOException;\n\npublic class CopyText {\n    public static void main(String[] args) {\n        try (FileReader in = new FileReader(\"notes.txt\");\n             FileWriter out = new FileWriter(\"notes_copy.txt\")) {\n\n            int ch;\n            int count = 0;\n            while ((ch = in.read()) != -1) {\n                out.write(ch);\n                count++;\n            }\n            System.out.println(count + \" characters copied from notes.txt to notes_copy.txt\");\n        } catch (IOException e) {\n            System.out.println(\"Error : \" + e.getMessage());\n        }\n\n        System.out.println(\"Size of notes.txt      : \" + new File(\"notes.txt\").length() + \" bytes\");\n        System.out.println(\"Size of notes_copy.txt : \" + new File(\"notes_copy.txt\").length() + \" bytes\");\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac CopyText.java",
      "out": ""
     },
     {
      "cmd": "java CopyText",
      "out": "34 characters copied from notes.txt to notes_copy.txt\nSize of notes.txt      : 34 bytes\nSize of notes_copy.txt : 34 bytes"
     }
    ],
    "notes": [
     "Both streams are opened in the try-with-resources header, so they are closed automatically. Equal file sizes show that the copy is complete."
    ]
   },
   {
    "no": 5,
    "title": "Count Characters, Words and Lines in a File",
    "aim": "Write a Java program that creates a text file and counts the number of lines, words and characters in it.",
    "files": [
     {
      "name": "WordCount.java",
      "code": "import java.io.BufferedReader;\nimport java.io.BufferedWriter;\nimport java.io.FileReader;\nimport java.io.FileWriter;\nimport java.io.IOException;\n\npublic class WordCount {\n    public static void main(String[] args) {\n        try (BufferedWriter bw = new BufferedWriter(new FileWriter(\"sample.txt\"))) {\n            bw.write(\"Java is platform independent\");\n            bw.newLine();\n            bw.write(\"It is object oriented\");\n            bw.newLine();\n            bw.write(\"Java supports multithreading\");\n            bw.newLine();\n        } catch (IOException e) {\n            System.out.println(\"Write error : \" + e.getMessage());\n        }\n\n        int lines = 0, words = 0, chars = 0;\n\n        try (BufferedReader br = new BufferedReader(new FileReader(\"sample.txt\"))) {\n            String line;\n            while ((line = br.readLine()) != null) {\n                lines++;\n                chars += line.length();\n                if (!line.trim().isEmpty()) {\n                    words += line.trim().split(\"\\\\s+\").length;\n                }\n            }\n        } catch (IOException e) {\n            System.out.println(\"Read error : \" + e.getMessage());\n        }\n\n        System.out.println(\"Lines      : \" + lines);\n        System.out.println(\"Words      : \" + words);\n        System.out.println(\"Characters : \" + chars);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac WordCount.java",
      "out": ""
     },
     {
      "cmd": "java WordCount",
      "out": "Lines      : 3\nWords      : 11\nCharacters : 77"
     }
    ],
    "notes": [
     "Characters are counted without the line-break characters. Words are separated using the regular expression \\s+ (one or more spaces)."
    ]
   },
   {
    "no": 6,
    "title": "Main Thread: Name, Priority and State",
    "aim": "Write a Java program to display the name, priority and state of the main thread, and then change its name and priority.",
    "files": [
     {
      "name": "MainThreadInfo.java",
      "code": "public class MainThreadInfo {\n    public static void main(String[] args) {\n        Thread t = Thread.currentThread();\n\n        System.out.println(\"Name     : \" + t.getName());\n        System.out.println(\"Priority : \" + t.getPriority());\n        System.out.println(\"State    : \" + t.getState());\n        System.out.println(\"Group    : \" + t.getThreadGroup().getName());\n        System.out.println(\"Alive    : \" + t.isAlive());\n\n        t.setName(\"MyMainThread\");\n        t.setPriority(8);\n\n        System.out.println();\n        System.out.println(\"After changes\");\n        System.out.println(\"Name     : \" + t.getName());\n        System.out.println(\"Priority : \" + t.getPriority());\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac MainThreadInfo.java",
      "out": ""
     },
     {
      "cmd": "java MainThreadInfo",
      "out": "Name     : main\nPriority : 5\nState    : RUNNABLE\nGroup    : main\nAlive    : true\n\nAfter changes\nName     : MyMainThread\nPriority : 8"
     }
    ],
    "notes": [
     "Every Java program starts with the main thread, whose default priority is 5 (NORM_PRIORITY). The running thread is in the RUNNABLE state."
    ]
   },
   {
    "no": 7,
    "title": "Create a Thread by Extending Thread",
    "aim": "Write a Java program that creates threads by extending the Thread class and overriding the run() method.",
    "files": [
     {
      "name": "ThreadExtend.java",
      "code": "class MyThread extends Thread {\n    private String label;\n\n    MyThread(String label) {\n        this.label = label;\n    }\n\n    @Override\n    public void run() {\n        for (int i = 1; i <= 3; i++) {\n            System.out.println(label + \" : count \" + i);\n            try {\n                Thread.sleep(300);\n            } catch (InterruptedException e) {\n                System.out.println(label + \" interrupted\");\n            }\n        }\n    }\n}\n\npublic class ThreadExtend {\n    public static void main(String[] args) throws InterruptedException {\n        MyThread t1 = new MyThread(\"Thread-A\");\n        MyThread t2 = new MyThread(\"Thread-B\");\n\n        t1.start();\n        Thread.sleep(150);                           // start B half a step later\n        t2.start();\n\n        t1.join();\n        t2.join();\n        System.out.println(\"Both threads finished\");\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac ThreadExtend.java",
      "out": ""
     },
     {
      "cmd": "java ThreadExtend",
      "out": "Thread-A : count 1\nThread-B : count 1\nThread-A : count 2\nThread-B : count 2\nThread-A : count 3\nThread-B : count 3\nBoth threads finished"
     }
    ],
    "notes": [
     "start() creates a new thread that calls run(). Calling run() directly would execute it in the main thread."
    ]
   },
   {
    "no": 8,
    "title": "Create a Thread by Implementing Runnable",
    "aim": "Write a Java program that creates threads by implementing the Runnable interface and gives them names.",
    "files": [
     {
      "name": "RunnableDemo.java",
      "code": "class Printer implements Runnable {\n    private String message;\n\n    Printer(String message) {\n        this.message = message;\n    }\n\n    @Override\n    public void run() {\n        for (int i = 1; i <= 3; i++) {\n            System.out.println(Thread.currentThread().getName() + \" -> \" + message + \" \" + i);\n            try {\n                Thread.sleep(300);\n            } catch (InterruptedException e) {\n                System.out.println(\"Interrupted\");\n            }\n        }\n    }\n}\n\npublic class RunnableDemo {\n    public static void main(String[] args) throws InterruptedException {\n        Thread t1 = new Thread(new Printer(\"Hello\"), \"Printer-1\");\n        Thread t2 = new Thread(new Printer(\"Welcome\"), \"Printer-2\");\n\n        t1.start();\n        Thread.sleep(150);\n        t2.start();\n\n        t1.join();\n        t2.join();\n        System.out.println(\"Main thread finished\");\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac RunnableDemo.java",
      "out": ""
     },
     {
      "cmd": "java RunnableDemo",
      "out": "Printer-1 -> Hello 1\nPrinter-2 -> Welcome 1\nPrinter-1 -> Hello 2\nPrinter-2 -> Welcome 2\nPrinter-1 -> Hello 3\nPrinter-2 -> Welcome 3\nMain thread finished"
     }
    ],
    "notes": [
     "Implementing Runnable is preferred over extending Thread because the class stays free to extend another class."
    ]
   },
   {
    "no": 9,
    "title": "Multiple Threads Running Concurrently",
    "aim": "Write a Java program that runs three threads concurrently, each with a different delay between its steps.",
    "files": [
     {
      "name": "MultiThreads.java",
      "code": "class Task extends Thread {\n    private int delay;\n\n    Task(String name, int delay) {\n        super(name);\n        this.delay = delay;\n    }\n\n    @Override\n    public void run() {\n        for (int i = 1; i <= 2; i++) {\n            try {\n                Thread.sleep(delay);\n            } catch (InterruptedException e) {\n                System.out.println(getName() + \" interrupted\");\n            }\n            System.out.println(getName() + \" : step \" + i);\n        }\n    }\n}\n\npublic class MultiThreads {\n    public static void main(String[] args) throws InterruptedException {\n        Task t1 = new Task(\"Thread-1\", 200);\n        Task t2 = new Task(\"Thread-2\", 300);\n        Task t3 = new Task(\"Thread-3\", 500);\n\n        t1.start();\n        t2.start();\n        t3.start();\n        System.out.println(\"All three threads started\");\n\n        t1.join();\n        t2.join();\n        t3.join();\n        System.out.println(\"All threads completed\");\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac MultiThreads.java",
      "out": ""
     },
     {
      "cmd": "java MultiThreads",
      "out": "All three threads started\nThread-1 : step 1\nThread-2 : step 1\nThread-1 : step 2\nThread-3 : step 1\nThread-2 : step 2\nThread-3 : step 2\nAll threads completed"
     }
    ],
    "notes": [
     "The main thread continues immediately after starting the threads. The three threads run at the same time, so their output is interleaved according to their delays."
    ]
   },
   {
    "no": 10,
    "title": "isAlive() Method",
    "aim": "Write a Java program that uses isAlive() to check whether a thread is running before it starts, while it runs and after it finishes.",
    "files": [
     {
      "name": "IsAliveDemo.java",
      "code": "class Sleeper extends Thread {\n    @Override\n    public void run() {\n        try {\n            Thread.sleep(400);\n        } catch (InterruptedException e) {\n            System.out.println(\"Interrupted\");\n        }\n        System.out.println(\"Sleeper finished its work\");\n    }\n}\n\npublic class IsAliveDemo {\n    public static void main(String[] args) throws InterruptedException {\n        Sleeper s = new Sleeper();\n\n        System.out.println(\"Before start    : isAlive = \" + s.isAlive());\n        s.start();\n        System.out.println(\"After start     : isAlive = \" + s.isAlive());\n\n        Thread.sleep(100);\n        System.out.println(\"While sleeping  : isAlive = \" + s.isAlive());\n\n        s.join();\n        System.out.println(\"After it ends   : isAlive = \" + s.isAlive());\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac IsAliveDemo.java",
      "out": ""
     },
     {
      "cmd": "java IsAliveDemo",
      "out": "Before start    : isAlive = false\nAfter start     : isAlive = true\nWhile sleeping  : isAlive = true\nSleeper finished its work\nAfter it ends   : isAlive = false"
     }
    ],
    "notes": [
     "isAlive() returns true from the moment start() is called until run() completes."
    ]
   },
   {
    "no": 11,
    "title": "join() Method",
    "aim": "Write a Java program in which two threads calculate partial sums of 1 to 100 and the main thread waits for both using join() before adding the results.",
    "files": [
     {
      "name": "SumThreads.java",
      "code": "class SumTask implements Runnable {\n    private int from, to;\n    long sum = 0;\n\n    SumTask(int from, int to) {\n        this.from = from;\n        this.to = to;\n    }\n\n    @Override\n    public void run() {\n        for (int i = from; i <= to; i++) {\n            sum += i;\n        }\n    }\n}\n\npublic class SumThreads {\n    public static void main(String[] args) throws InterruptedException {\n        SumTask first = new SumTask(1, 50);\n        SumTask second = new SumTask(51, 100);\n\n        Thread t1 = new Thread(first);\n        Thread t2 = new Thread(second);\n        t1.start();\n        t2.start();\n\n        t1.join();                                   // wait for both threads\n        t2.join();\n\n        System.out.println(\"Sum of 1 to 50    = \" + first.sum);\n        System.out.println(\"Sum of 51 to 100  = \" + second.sum);\n        System.out.println(\"Total (1 to 100)  = \" + (first.sum + second.sum));\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac SumThreads.java",
      "out": ""
     },
     {
      "cmd": "java SumThreads",
      "out": "Sum of 1 to 50    = 1275\nSum of 51 to 100  = 3775\nTotal (1 to 100)  = 5050"
     }
    ],
    "notes": [
     "Without join(), the main thread could print the total before the worker threads finish their calculation."
    ]
   },
   {
    "no": 12,
    "title": "Multiple Threads with isAlive() and join()",
    "aim": "Write a Java program that starts three threads, checks which of them are still alive and uses join() to wait for them one by one.",
    "files": [
     {
      "name": "AliveJoinDemo.java",
      "code": "class Job extends Thread {\n    private int delay;\n\n    Job(String name, int delay) {\n        super(name);\n        this.delay = delay;\n    }\n\n    @Override\n    public void run() {\n        try {\n            Thread.sleep(delay);\n        } catch (InterruptedException e) {\n            System.out.println(getName() + \" interrupted\");\n        }\n        System.out.println(getName() + \" completed\");\n    }\n}\n\npublic class AliveJoinDemo {\n\n    static void status(String title, Job... jobs) {\n        System.out.println(title);\n        for (Job j : jobs) {\n            System.out.println(\"   \" + j.getName() + \" alive : \" + j.isAlive());\n        }\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        Job a = new Job(\"Job-A\", 600);\n        Job b = new Job(\"Job-B\", 200);\n        Job c = new Job(\"Job-C\", 400);\n\n        a.start();\n        b.start();\n        c.start();\n        status(\"Just after start:\", a, b, c);\n\n        b.join();                                    // wait for Job-B only\n        status(\"After joining Job-B:\", a, b, c);\n\n        c.join();                                    // then Job-C\n        status(\"After joining Job-C:\", a, b, c);\n\n        a.join();                                    // finally Job-A\n        status(\"After joining Job-A:\", a, b, c);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac AliveJoinDemo.java",
      "out": ""
     },
     {
      "cmd": "java AliveJoinDemo",
      "out": "Just after start:\n   Job-A alive : true\n   Job-B alive : true\n   Job-C alive : true\nJob-B completed\nAfter joining Job-B:\n   Job-A alive : true\n   Job-B alive : false\n   Job-C alive : true\nJob-C completed\nAfter joining Job-C:\n   Job-A alive : true\n   Job-B alive : false\n   Job-C alive : false\nJob-A completed\nAfter joining Job-A:\n   Job-A alive : false\n   Job-B alive : false\n   Job-C alive : false"
     }
    ],
    "notes": [
     "join() blocks the calling thread until the thread it is called on finishes, so the status lines show the jobs finishing one after another."
    ]
   }
  ]
 },
 {
  "n": 12,
  "title": "Multithreading & Lambda Expressions",
  "blurb": "Thread priorities, synchronization, functional interfaces and lambda expressions",
  "kind": "programs",
  "programs": [
   {
    "no": 1,
    "title": "Thread Priorities",
    "aim": "Write a Java program that sets and displays thread priorities using the constants MIN_PRIORITY, NORM_PRIORITY and MAX_PRIORITY.",
    "files": [
     {
      "name": "PriorityDemo.java",
      "code": "public class PriorityDemo {\n    public static void main(String[] args) {\n        System.out.println(\"MIN_PRIORITY  = \" + Thread.MIN_PRIORITY);\n        System.out.println(\"NORM_PRIORITY = \" + Thread.NORM_PRIORITY);\n        System.out.println(\"MAX_PRIORITY  = \" + Thread.MAX_PRIORITY);\n        System.out.println();\n\n        System.out.println(\"Main thread priority : \" + Thread.currentThread().getPriority());\n\n        Thread low = new Thread(\"Low\");\n        Thread normal = new Thread(\"Normal\");\n        Thread high = new Thread(\"High\");\n\n        low.setPriority(Thread.MIN_PRIORITY);\n        high.setPriority(Thread.MAX_PRIORITY);       // normal keeps the inherited priority\n\n        System.out.println(low.getName() + \"    : priority \" + low.getPriority());\n        System.out.println(normal.getName() + \" : priority \" + normal.getPriority() + \" (inherited from main)\");\n        System.out.println(high.getName() + \"   : priority \" + high.getPriority());\n\n        try {\n            low.setPriority(11);                     // outside the range 1 to 10\n        } catch (IllegalArgumentException e) {\n            System.out.println(\"setPriority(11) -> IllegalArgumentException (valid range is 1 to 10)\");\n        }\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac PriorityDemo.java",
      "out": ""
     },
     {
      "cmd": "java PriorityDemo",
      "out": "MIN_PRIORITY  = 1\nNORM_PRIORITY = 5\nMAX_PRIORITY  = 10\n\nMain thread priority : 5\nLow    : priority 1\nNormal : priority 5 (inherited from main)\nHigh   : priority 10\nsetPriority(11) -> IllegalArgumentException (valid range is 1 to 10)"
     }
    ],
    "notes": [
     "A new thread inherits the priority of the thread that created it. Priorities must be between 1 and 10."
    ]
   },
   {
    "no": 2,
    "title": "Three Threads with Different Priorities",
    "aim": "Write a Java program that starts three threads with different priorities, each doing the same calculation, and displays their results.",
    "files": [
     {
      "name": "ThreePriorities.java",
      "code": "class Worker extends Thread {\n    private long result;\n\n    Worker(String name, int priority) {\n        super(name);\n        setPriority(priority);\n    }\n\n    @Override\n    public void run() {\n        long sum = 0;\n        for (int i = 1; i <= 5000000; i++) {\n            sum += i;\n        }\n        result = sum;\n    }\n\n    long getResult() {\n        return result;\n    }\n}\n\npublic class ThreePriorities {\n    public static void main(String[] args) throws InterruptedException {\n        Worker low = new Worker(\"Low-Priority\", Thread.MIN_PRIORITY);\n        Worker normal = new Worker(\"Normal-Priority\", Thread.NORM_PRIORITY);\n        Worker high = new Worker(\"High-Priority\", Thread.MAX_PRIORITY);\n\n        low.start();\n        normal.start();\n        high.start();\n\n        low.join();\n        normal.join();\n        high.join();\n\n        Worker[] all = {low, normal, high};\n        for (Worker w : all) {\n            System.out.println(w.getName() + \" (priority \" + w.getPriority() + \") : sum = \" + w.getResult());\n        }\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac ThreePriorities.java",
      "out": ""
     },
     {
      "cmd": "java ThreePriorities",
      "out": "Low-Priority (priority 1) : sum = 12500002500000\nNormal-Priority (priority 5) : sum = 12500002500000\nHigh-Priority (priority 10) : sum = 12500002500000"
     }
    ],
    "notes": [
     "Priority is only a hint to the thread scheduler. The order in which the threads actually run depends on the operating system, so the results are printed after join() in a fixed order."
    ]
   },
   {
    "no": 3,
    "title": "Synchronized Method",
    "aim": "Write a Java program in which two threads increment a shared counter using a synchronized method, so that the final value is always correct.",
    "files": [
     {
      "name": "SyncDemo.java",
      "code": "class Counter {\n    private int count = 0;\n\n    synchronized void increment() {                  // only one thread at a time\n        count++;\n    }\n\n    int get() {\n        return count;\n    }\n}\n\nclass IncrementThread extends Thread {\n    private Counter counter;\n\n    IncrementThread(Counter counter) {\n        this.counter = counter;\n    }\n\n    @Override\n    public void run() {\n        for (int i = 0; i < 1000; i++) {\n            counter.increment();\n        }\n    }\n}\n\npublic class SyncDemo {\n    public static void main(String[] args) throws InterruptedException {\n        Counter counter = new Counter();\n        IncrementThread t1 = new IncrementThread(counter);\n        IncrementThread t2 = new IncrementThread(counter);\n\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n\n        System.out.println(\"Expected count : 2000\");\n        System.out.println(\"Final count    : \" + counter.get());\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac SyncDemo.java",
      "out": ""
     },
     {
      "cmd": "java SyncDemo",
      "out": "Expected count : 2000\nFinal count    : 2000"
     }
    ],
    "notes": [
     "Without the synchronized keyword, count++ is not atomic, so two threads can overwrite each other's updates and the result may be less than 2000."
    ]
   },
   {
    "no": 4,
    "title": "Synchronized Block",
    "aim": "Write a Java program in which two threads update a shared counter inside a synchronized block.",
    "files": [
     {
      "name": "SyncBlock.java",
      "code": "class BlockCounter {\n    private int count = 0;\n\n    void increment() {\n        synchronized (this) {                        // only this block is locked\n            count++;\n        }\n    }\n\n    int get() {\n        return count;\n    }\n}\n\nclass BlockThread extends Thread {\n    private BlockCounter counter;\n\n    BlockThread(BlockCounter counter) {\n        this.counter = counter;\n    }\n\n    @Override\n    public void run() {\n        for (int i = 0; i < 1000; i++) {\n            counter.increment();\n        }\n    }\n}\n\npublic class SyncBlock {\n    public static void main(String[] args) throws InterruptedException {\n        BlockCounter counter = new BlockCounter();\n        BlockThread t1 = new BlockThread(counter);\n        BlockThread t2 = new BlockThread(counter);\n\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n\n        System.out.println(\"Expected count : 2000\");\n        System.out.println(\"Final count    : \" + counter.get());\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac SyncBlock.java",
      "out": ""
     },
     {
      "cmd": "java SyncBlock",
      "out": "Expected count : 2000\nFinal count    : 2000"
     }
    ],
    "notes": [
     "A synchronized block locks only the lines inside it, which is more efficient than locking a whole method when only a few statements need protection."
    ]
   },
   {
    "no": 5,
    "title": "Race Condition and Synchronization",
    "aim": "Write a Java program that demonstrates a race condition on an unsynchronized counter and fixes it using synchronization.",
    "files": [
     {
      "name": "RaceCondition.java",
      "code": "class UnsafeCounter {\n    int count = 0;\n\n    void increment() {\n        count++;                                     // read, add, write: not atomic\n    }\n}\n\nclass SafeCounter {\n    int count = 0;\n\n    synchronized void increment() {\n        count++;\n    }\n}\n\nclass UnsafeThread extends Thread {\n    private UnsafeCounter counter;\n\n    UnsafeThread(UnsafeCounter counter) {\n        this.counter = counter;\n    }\n\n    @Override\n    public void run() {\n        for (int i = 0; i < 100000; i++) {\n            counter.increment();\n        }\n    }\n}\n\nclass SafeThread extends Thread {\n    private SafeCounter counter;\n\n    SafeThread(SafeCounter counter) {\n        this.counter = counter;\n    }\n\n    @Override\n    public void run() {\n        for (int i = 0; i < 100000; i++) {\n            counter.increment();\n        }\n    }\n}\n\npublic class RaceCondition {\n    public static void main(String[] args) throws InterruptedException {\n        UnsafeCounter unsafe = new UnsafeCounter();\n        UnsafeThread u1 = new UnsafeThread(unsafe);\n        UnsafeThread u2 = new UnsafeThread(unsafe);\n        u1.start(); u2.start();\n        u1.join();  u2.join();\n\n        SafeCounter safe = new SafeCounter();\n        SafeThread s1 = new SafeThread(safe);\n        SafeThread s2 = new SafeThread(safe);\n        s1.start(); s2.start();\n        s1.join();  s2.join();\n\n        System.out.println(\"Expected result         : 200000\");\n        System.out.println(\"Without synchronization : \" + unsafe.count);\n        System.out.println(\"With synchronization    : \" + safe.count);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac RaceCondition.java",
      "out": ""
     },
     {
      "cmd": "java RaceCondition",
      "out": "Expected result         : 200000\nWithout synchronization : 174151\nWith synchronization    : 200000"
     }
    ],
    "notes": [
     "The value shown for the unsynchronized counter is usually less than 200000 and changes every time the program is run, because the two threads overwrite each other's updates."
    ]
   },
   {
    "no": 6,
    "title": "Synchronized Ticket Booking",
    "aim": "Write a Java program in which several customer threads book tickets from a limited number of seats, using synchronization to prevent overbooking.",
    "files": [
     {
      "name": "TicketBooking.java",
      "code": "class TicketCounter {\n    private int seats;\n    private int booked = 0;\n    private int rejected = 0;\n\n    TicketCounter(int seats) {\n        this.seats = seats;\n    }\n\n    synchronized boolean book() {\n        if (seats > 0) {\n            seats--;\n            booked++;\n            return true;\n        }\n        rejected++;\n        return false;\n    }\n\n    synchronized int getBooked()   { return booked; }\n    synchronized int getRejected() { return rejected; }\n    synchronized int getSeats()    { return seats; }\n}\n\nclass Customer extends Thread {\n    private TicketCounter counter;\n    private int requests;\n\n    Customer(String name, TicketCounter counter, int requests) {\n        super(name);\n        this.counter = counter;\n        this.requests = requests;\n    }\n\n    @Override\n    public void run() {\n        for (int i = 0; i < requests; i++) {\n            counter.book();\n        }\n    }\n}\n\npublic class TicketBooking {\n    public static void main(String[] args) throws InterruptedException {\n        TicketCounter counter = new TicketCounter(10);\n\n        Customer c1 = new Customer(\"Customer-1\", counter, 5);\n        Customer c2 = new Customer(\"Customer-2\", counter, 5);\n        Customer c3 = new Customer(\"Customer-3\", counter, 5);\n\n        c1.start();\n        c2.start();\n        c3.start();\n        c1.join();\n        c2.join();\n        c3.join();\n\n        System.out.println(\"Seats available      : 10\");\n        System.out.println(\"Booking requests     : 15\");\n        System.out.println(\"Tickets booked       : \" + counter.getBooked());\n        System.out.println(\"Requests rejected    : \" + counter.getRejected());\n        System.out.println(\"Seats left           : \" + counter.getSeats());\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac TicketBooking.java",
      "out": ""
     },
     {
      "cmd": "java TicketBooking",
      "out": "Seats available      : 10\nBooking requests     : 15\nTickets booked       : 10\nRequests rejected    : 5\nSeats left           : 0"
     }
    ],
    "notes": [
     "Because book() is synchronized, the check seats > 0 and the update seats-- happen together, so two customers can never get the last seat. Which customer gets which seat can change from run to run, but the totals never change."
    ]
   },
   {
    "no": 7,
    "title": "Lambda Functional Interface for Arithmetic",
    "aim": "Write a Java program that implements the four arithmetic operations through a functional interface using lambda expressions.",
    "files": [
     {
      "name": "ArithmeticLambda.java",
      "code": "interface Calculator {\n    int operate(int a, int b);\n}\n\npublic class ArithmeticLambda {\n    public static void main(String[] args) {\n        Calculator add = (a, b) -> a + b;\n        Calculator subtract = (a, b) -> a - b;\n        Calculator multiply = (a, b) -> a * b;\n        Calculator divide = (a, b) -> a / b;\n\n        int x = 20, y = 5;\n        System.out.println(x + \" + \" + y + \" = \" + add.operate(x, y));\n        System.out.println(x + \" - \" + y + \" = \" + subtract.operate(x, y));\n        System.out.println(x + \" * \" + y + \" = \" + multiply.operate(x, y));\n        System.out.println(x + \" / \" + y + \" = \" + divide.operate(x, y));\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac ArithmeticLambda.java",
      "out": ""
     },
     {
      "cmd": "java ArithmeticLambda",
      "out": "20 + 5 = 25\n20 - 5 = 15\n20 * 5 = 100\n20 / 5 = 4"
     }
    ],
    "notes": [
     "A functional interface has exactly one abstract method. A lambda expression provides the implementation of that method without writing a separate class."
    ]
   },
   {
    "no": 8,
    "title": "Lambda with Single and Multiple Parameters",
    "aim": "Write a Java program that uses lambda expressions with one parameter and with two parameters.",
    "files": [
     {
      "name": "ParamLambda.java",
      "code": "interface Square {\n    int apply(int n);\n}\n\ninterface Greeting {\n    String greet(String name);\n}\n\ninterface Adder {\n    int add(int a, int b);\n}\n\ninterface Joiner {\n    String join(String first, String last);\n}\n\npublic class ParamLambda {\n    public static void main(String[] args) {\n        // one parameter: parentheses are optional\n        Square square = n -> n * n;\n        Greeting hello = name -> \"Hello, \" + name + \"!\";\n\n        // two parameters: parentheses are required\n        Adder adder = (a, b) -> a + b;\n        Joiner fullName = (first, last) -> first + \" \" + last;\n\n        System.out.println(\"Square of 9      : \" + square.apply(9));\n        System.out.println(\"Greeting         : \" + hello.greet(\"Rishitha\"));\n        System.out.println(\"Sum of 15 and 27 : \" + adder.add(15, 27));\n        System.out.println(\"Full name        : \" + fullName.join(\"Bheema\", \"Rishitha\"));\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac ParamLambda.java",
      "out": ""
     },
     {
      "cmd": "java ParamLambda",
      "out": "Square of 9      : 81\nGreeting         : Hello, Rishitha!\nSum of 15 and 27 : 42\nFull name        : Bheema Rishitha"
     }
    ],
    "notes": [
     "With one parameter the brackets can be left out, as in n -> n * n. With two or more parameters they are required, as in (a, b) -> a + b."
    ]
   },
   {
    "no": 9,
    "title": "Block Lambda Expression",
    "aim": "Write a Java program that uses a block lambda expression with several statements to calculate a factorial.",
    "files": [
     {
      "name": "BlockLambda.java",
      "code": "interface Factorial {\n    long compute(int n);\n}\n\npublic class BlockLambda {\n    public static void main(String[] args) {\n        Factorial fact = (n) -> {\n            long result = 1;\n            for (int i = 2; i <= n; i++) {\n                result *= i;\n            }\n            return result;                           // a block lambda must return explicitly\n        };\n\n        System.out.println(\"5!  = \" + fact.compute(5));\n        System.out.println(\"10! = \" + fact.compute(10));\n        System.out.println(\"15! = \" + fact.compute(15));\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac BlockLambda.java",
      "out": ""
     },
     {
      "cmd": "java BlockLambda",
      "out": "5!  = 120\n10! = 3628800\n15! = 1307674368000"
     }
    ],
    "notes": [
     "A lambda whose body is enclosed in braces is called a block lambda. It can contain many statements and must use return to give back a value."
    ]
   },
   {
    "no": 10,
    "title": "Largest of Two Numbers using Block Lambda",
    "aim": "Write a Java program that uses a block lambda expression to find and return the larger of two numbers.",
    "files": [
     {
      "name": "LargestLambda.java",
      "code": "interface Largest {\n    int find(int a, int b);\n}\n\npublic class LargestLambda {\n    public static void main(String[] args) {\n        Largest largest = (a, b) -> {\n            if (a > b) {\n                return a;\n            } else {\n                return b;\n            }\n        };\n\n        System.out.println(\"Largest of 45 and 78  : \" + largest.find(45, 78));\n        System.out.println(\"Largest of -5 and -9  : \" + largest.find(-5, -9));\n        System.out.println(\"Largest of 12 and 12  : \" + largest.find(12, 12));\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac LargestLambda.java",
      "out": ""
     },
     {
      "cmd": "java LargestLambda",
      "out": "Largest of 45 and 78  : 78\nLargest of -5 and -9  : -5\nLargest of 12 and 12  : 12"
     }
    ],
    "notes": [
     "Every path of a block lambda must return a value of the type declared in the interface."
    ]
   },
   {
    "no": 11,
    "title": "Generic Functional Interface with Lambda",
    "aim": "Write a Java program that uses one generic functional interface with lambda expressions for different data types.",
    "files": [
     {
      "name": "GenericLambda.java",
      "code": "interface Operation<T> {\n    T apply(T value);\n}\n\npublic class GenericLambda {\n    public static void main(String[] args) {\n        Operation<Integer> twice = n -> n * 2;\n        Operation<Double> half = d -> d / 2;\n        Operation<String> shout = s -> s.toUpperCase() + \"!\";\n\n        System.out.println(\"Twice of 21      : \" + twice.apply(21));\n        System.out.println(\"Half of 9.0      : \" + half.apply(9.0));\n        System.out.println(\"Shout 'welcome'  : \" + shout.apply(\"welcome\"));\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac GenericLambda.java",
      "out": ""
     },
     {
      "cmd": "java GenericLambda",
      "out": "Twice of 21      : 42\nHalf of 9.0      : 4.5\nShout 'welcome'  : WELCOME!"
     }
    ],
    "notes": [
     "The type parameter T is replaced by Integer, Double or String, so the same interface works with lambdas for every data type."
    ]
   },
   {
    "no": 12,
    "title": "Generic Functional Interface with Two Values",
    "aim": "Write a Java program that uses a generic functional interface with two input values for addition, string joining and multiplication.",
    "files": [
     {
      "name": "GenericTwoLambda.java",
      "code": "interface Combiner<T> {\n    T combine(T first, T second);\n}\n\npublic class GenericTwoLambda {\n    public static void main(String[] args) {\n        Combiner<Integer> sum = (a, b) -> a + b;\n        Combiner<String> join = (a, b) -> a + \" \" + b;\n        Combiner<Double> product = (a, b) -> a * b;\n\n        System.out.println(\"Sum of 25 and 75      : \" + sum.combine(25, 75));\n        System.out.println(\"Joined strings        : \" + join.combine(\"Java\", \"Lambda\"));\n        System.out.println(\"Product of 2.5 and 4  : \" + product.combine(2.5, 4.0));\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac GenericTwoLambda.java",
      "out": ""
     },
     {
      "cmd": "java GenericTwoLambda",
      "out": "Sum of 25 and 75      : 100\nJoined strings        : Java Lambda\nProduct of 2.5 and 4  : 10.0"
     }
    ],
    "notes": [
     "The same generic interface adds integers, joins strings and multiplies decimal numbers, depending on the lambda that is supplied."
    ]
   },
   {
    "no": 13,
    "title": "Display and Filter ArrayList using Lambda",
    "aim": "Write a Java program that displays the elements of an ArrayList and filters them using lambda expressions.",
    "files": [
     {
      "name": "ArrayListLambda.java",
      "code": "import java.util.ArrayList;\n\npublic class ArrayListLambda {\n    public static void main(String[] args) {\n        ArrayList<String> names = new ArrayList<>();\n        names.add(\"Anjali\");\n        names.add(\"Ravi\");\n        names.add(\"Arun\");\n        names.add(\"Meena\");\n        names.add(\"Asha\");\n        names.add(\"Kiran\");\n\n        System.out.println(\"All names:\");\n        names.forEach(n -> System.out.println(\"   \" + n));\n\n        System.out.println(\"Names starting with A:\");\n        names.stream()\n             .filter(n -> n.startsWith(\"A\"))\n             .forEach(n -> System.out.println(\"   \" + n));\n\n        ArrayList<Integer> marks = new ArrayList<>();\n        marks.add(45);\n        marks.add(82);\n        marks.add(67);\n        marks.add(91);\n        marks.add(38);\n        marks.add(74);\n\n        marks.removeIf(m -> m < 50);                 // remove the failing marks\n        System.out.println(\"Marks of 50 and above : \" + marks);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac ArrayListLambda.java",
      "out": ""
     },
     {
      "cmd": "java ArrayListLambda",
      "out": "All names:\n   Anjali\n   Ravi\n   Arun\n   Meena\n   Asha\n   Kiran\nNames starting with A:\n   Anjali\n   Arun\n   Asha\nMarks of 50 and above : [82, 67, 91, 74]"
     }
    ],
    "notes": [
     "forEach() and removeIf() take lambda expressions. filter() belongs to the Stream API and keeps only the elements for which the lambda returns true."
    ]
   },
   {
    "no": 14,
    "title": "Sort Integers and Strings using Lambda",
    "aim": "Write a Java program that sorts a list of integers and a list of strings using lambda expressions as comparators.",
    "files": [
     {
      "name": "SortLambda.java",
      "code": "import java.util.ArrayList;\n\npublic class SortLambda {\n    public static void main(String[] args) {\n        ArrayList<Integer> numbers = new ArrayList<>();\n        numbers.add(42);\n        numbers.add(7);\n        numbers.add(19);\n        numbers.add(88);\n        numbers.add(3);\n\n        numbers.sort((a, b) -> a - b);\n        System.out.println(\"Ascending order  : \" + numbers);\n\n        numbers.sort((a, b) -> b - a);\n        System.out.println(\"Descending order : \" + numbers);\n\n        ArrayList<String> fruits = new ArrayList<>();\n        fruits.add(\"Mango\");\n        fruits.add(\"Apple\");\n        fruits.add(\"Banana\");\n        fruits.add(\"Kiwi\");\n        fruits.add(\"Cherry\");\n\n        fruits.sort((a, b) -> a.compareTo(b));\n        System.out.println(\"Alphabetical     : \" + fruits);\n\n        fruits.sort((a, b) -> a.length() != b.length()\n                ? a.length() - b.length()\n                : a.compareTo(b));\n        System.out.println(\"By length        : \" + fruits);\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac SortLambda.java",
      "out": ""
     },
     {
      "cmd": "java SortLambda",
      "out": "Ascending order  : [3, 7, 19, 42, 88]\nDescending order : [88, 42, 19, 7, 3]\nAlphabetical     : [Apple, Banana, Cherry, Kiwi, Mango]\nBy length        : [Kiwi, Apple, Mango, Banana, Cherry]"
     }
    ],
    "notes": [
     "The lambda is the Comparator: a negative result puts the first value before the second, a positive result puts it after."
    ]
   },
   {
    "no": 15,
    "title": "Thread using Lambda Expression",
    "aim": "Write a Java program that creates and starts threads using lambda expressions instead of separate Runnable classes.",
    "files": [
     {
      "name": "LambdaThread.java",
      "code": "public class LambdaThread {\n    public static void main(String[] args) throws InterruptedException {\n        Runnable task = () -> System.out.println(\"Hello from a lambda thread\");\n        Thread t1 = new Thread(task);\n        t1.start();\n        t1.join();\n\n        Thread t2 = new Thread(() -> {\n            for (int i = 1; i <= 3; i++) {\n                System.out.println(\"Lambda loop \" + i);\n            }\n        });\n        t2.start();\n        t2.join();\n\n        System.out.println(\"Main thread finished\");\n    }\n}\n"
     }
    ],
    "terminal": [
     {
      "cmd": "javac LambdaThread.java",
      "out": ""
     },
     {
      "cmd": "java LambdaThread",
      "out": "Hello from a lambda thread\nLambda loop 1\nLambda loop 2\nLambda loop 3\nMain thread finished"
     }
    ],
    "notes": [
     "Runnable has a single abstract method, so it is a functional interface and can be written as a lambda: () -> { ... }."
    ]
   }
  ]
 }
];

/* ==========================================================
   Java Record — application logic (plain JavaScript, no libraries)
   Hash routing:  #/  #/profile  #/weeks  #/week/6  #/week/6/12
   ========================================================== */

/* ---- 1. EDIT ONLY THIS BLOCK TO CHANGE THE OWNER'S DETAILS ---- */
const PROFILE = {
  name: 'B. Rishitha',
  roll: '25EU02070',
  year: 'II Year',
  branch: 'AI & ML',
  section: 'B',
  subject: 'Java Programming',
  photo: 'assets/profile.png'
};
/* ------------------------------------------------------------- */

const app = document.getElementById('app');
const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const totalPrograms = WEEKS.reduce((n, w) => n + w.programs.length, 0);

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const initials = name => name.replace(/[^A-Za-z ]/g, ' ').split(/\s+/).filter(Boolean).map(w => w[0]).join('').slice(0, 2).toUpperCase();
const getWeek = n => WEEKS.find(w => w.n === Number(n));

function avatar() {
  return `<div class="avatar"><img src="${esc(PROFILE.photo)}" alt="${esc(PROFILE.name)}"
    onerror="this.outerHTML='<div class=&quot;avatar-fallback&quot;>${esc(initials(PROFILE.name))}</div>'"></div>`;
}

function chipFor(w) {
  if (w.kind === 'none') return '<span class="chip muted">No task assigned</span>';
  if (w.kind === 'table') return '<span class="chip">Comparative table</span>';
  return `<span class="chip">${w.programs.length} program${w.programs.length > 1 ? 's' : ''}</span>`;
}

function weekCards() {
  return WEEKS.map(w => `
    <a class="week-card ${w.kind === 'none' ? 'empty' : ''}" href="#/week/${w.n}">
      <span class="lbl">Week</span>
      <span class="num">${String(w.n).padStart(2, '0')}</span>
      <h3>${esc(w.title)}</h3>
      <p>${esc(w.blurb)}</p>
      ${chipFor(w)}
      <svg class="arrow" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </a>`).join('');
}

/* ---------- Java syntax highlighter ---------- */
const JAVA_KW = new Set(('abstract assert boolean break byte case catch char class const continue default do double else enum extends final finally float for goto if implements import instanceof int interface long native new package private protected public return short static strictfp super switch synchronized this throw throws transient try void volatile while true false null var').split(' '));

function highlight(code) {
  const re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])+')|(@[A-Za-z]+)|\b(\d+(?:\.\d+)?[fFlLdD]?)\b|\b([A-Za-z_]\w*)\b/g;
  let out = '', last = 0, m;
  while ((m = re.exec(code)) !== null) {
    out += esc(code.slice(last, m.index));
    const t = m[0];
    if (m[1]) out += `<span class="tk-com">${esc(t)}</span>`;
    else if (m[2]) out += `<span class="tk-str">${esc(t)}</span>`;
    else if (m[3]) out += `<span class="tk-ann">${esc(t)}</span>`;
    else if (m[4]) out += `<span class="tk-num">${esc(t)}</span>`;
    else if (JAVA_KW.has(t)) out += `<span class="tk-kw">${esc(t)}</span>`;
    else if (code[re.lastIndex] === '(') out += `<span class="tk-fn">${esc(t)}</span>`;
    else if (/^[A-Z]/.test(t)) out += `<span class="tk-type">${esc(t)}</span>`;
    else out += esc(t);
    last = re.lastIndex;
  }
  return out + esc(code.slice(last));
}

/* ---------- views ---------- */
function viewHome() {
  return `
  <section class="hero">
    <div class="wrap">
      <div class="hero-grid fade">
        <div>
          <span class="eyebrow"><span class="dot"></span> ${esc(PROFILE.subject)} · Lab Record</span>
          <h1>Hello, <span class="grad">Java!</span><br>Step into my lab record.</h1>
          <p class="lead">Every experiment from Week 1 to Week 12 — with clean source code and the real console output — organised week by week in one place.</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="#/weeks">Explore the weeks →</a>
            <a class="btn btn-ghost" href="#/profile">View profile</a>
          </div>
        </div>
        <aside class="hero-card">
          ${avatar()}
          <h3>${esc(PROFILE.name)}</h3>
          <p class="roll">Roll No. ${esc(PROFILE.roll)}</p>
          <div class="tag-row">
            <span class="tag">${esc(PROFILE.year)}</span>
            <span class="tag">${esc(PROFILE.branch)}</span>
            <span class="tag">Section ${esc(PROFILE.section)}</span>
          </div>
        </aside>
      </div>
      <div class="stats fade">
        <div class="stat"><b>${WEEKS.length}</b><span>Weeks covered</span></div>
        <div class="stat"><b>${totalPrograms}</b><span>Programs &amp; tasks</span></div>
        <div class="stat"><b>${esc(PROFILE.subject.split(' ')[0])}</b><span>${esc(PROFILE.subject)}</span></div>
      </div>
    </div>
  </section>
  <section class="section" style="padding-top:20px">
    <div class="wrap">
      <div class="section-head">
        <div><div class="kicker">Contents</div><h2>Pick a week</h2></div>
        <p>Open any week to see its programs, then open a program to view the code and its output.</p>
      </div>
      <div class="week-grid">${weekCards()}</div>
    </div>
  </section>`;
}

function viewWeeks() {
  return `
  <div class="wrap fade">
    <div class="page-head">
      <div class="crumbs"><a href="#/">Home</a><span class="sep">/</span><span>Weeks</span></div>
      <div class="kicker">Contents</div>
      <h1>All weeks</h1>
      <p>${WEEKS.length} weeks · ${totalPrograms} programs and tasks. Choose a week to continue.</p>
    </div>
    <div class="week-grid" style="padding-bottom:70px">${weekCards()}</div>
  </div>`;
}

function viewProfile() {
  const rows = [
    ['Name', PROFILE.name], ['Roll Number', PROFILE.roll], ['Year', PROFILE.year],
    ['Branch', PROFILE.branch], ['Section', PROFILE.section]
  ];
  return `
  <div class="wrap fade">
    <div class="page-head">
      <div class="crumbs"><a href="#/">Home</a><span class="sep">/</span><span>Profile</span></div>
      <div class="kicker">About</div>
      <h1>My profile</h1>
    </div>
    <div class="profile-card">
      <div class="profile-side">
        ${avatar()}
        <h2>${esc(PROFILE.name)}</h2>
        <p>${esc(PROFILE.roll)}</p>
      </div>
      <div class="profile-main">
        <h3>Student details</h3>
        <div class="info-grid">
          ${rows.map(r => `<div class="info"><small>${r[0]}</small><b>${esc(r[1])}</b></div>`).join('')}
          <div class="info wide"><small>Subject</small><b>${esc(PROFILE.subject)}</b></div>
        </div>
      </div>
    </div>
  </div>`;
}

function viewWeek(w) {
  const head = `
    <div class="page-head">
      <div class="crumbs"><a href="#/">Home</a><span class="sep">/</span><a href="#/weeks">Weeks</a><span class="sep">/</span><span>Week ${w.n}</span></div>
      <div class="kicker">Week ${String(w.n).padStart(2, '0')}</div>
      <h1>${esc(w.title)}</h1>
      <p>${esc(w.blurb)}</p>
    </div>`;
  let body = '';

  if (w.kind === 'table') {
    const t = w.table;
    body = `
    <div class="table-card"><div class="table-scroll">
      <table class="compare">
        <thead><tr>${t.headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
        <tbody>${t.rows.map(r => `<tr><th scope="row">${esc(r[0])}</th>${r.slice(1).map((c, i) => `<td class="${i === 0 ? 'java-col' : ''}">${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div></div>
    <div class="notes-list" style="padding-bottom:70px">${t.notes.map(n => `<div>${esc(n)}</div>`).join('')}</div>`;
  } else if (w.kind === 'none') {
    body = `
    <div class="empty-state">
      <div class="big">☕</div>
      <h3>No programming task this week</h3>
      <p>No programming task was assigned for Week ${w.n}.</p>
      <p style="margin-top:18px"><a class="btn btn-ghost" href="#/weeks">← Back to all weeks</a></p>
    </div>`;
  } else {
    body = `<div class="prog-grid">${w.programs.map(p => `
      <a class="prog-card" href="#/week/${w.n}/${p.no}">
        <div class="prog-no">${p.no}</div>
        <div><h3>${esc(p.title)}</h3><p>${esc(p.aim)}</p></div>
      </a>`).join('')}</div>`;
  }
  return `<div class="wrap fade">${head}${body}</div>`;
}

function terminalHTML(lines, title) {
  const body = lines.map(l => `
    <div class="term-line"><span class="term-prompt">C:\\JavaLab&gt;</span> <span class="term-cmd">${esc(l.cmd)}</span></div>${l.out ? `<div class="term-out">${esc(l.out)}</div>` : ''}`).join('');
  return `
  <div class="terminal">
    <div class="window-bar"><div class="dots"><i></i><i></i><i></i></div><span class="win-title">${esc(title)}</span></div>
    <div class="term-body">${body}<div class="term-line"><span class="term-prompt">C:\\JavaLab&gt;</span> <span class="term-cursor"></span></div></div>
  </div>`;
}

function viewProgram(w, p) {
  const idx = w.programs.indexOf(p);
  const prev = w.programs[idx - 1], next = w.programs[idx + 1];

  const side = `
    <nav class="prog-nav" aria-label="Programs in week ${w.n}">
      <h4>Week ${w.n} programs</h4>
      ${w.programs.map(q => `<a href="#/week/${w.n}/${q.no}" class="${q === p ? 'active' : ''}" title="${esc(q.title)}"><b>${q.no}</b><span>${esc(q.title)}</span></a>`).join('')}
    </nav>`;

  let main = `
    <div class="aim"><div><h4>Aim</h4><p>${esc(p.aim)}</p></div></div>`;

  if (p.steps) {
    main += `<h2 class="block-title">Procedure</h2>
      <ol class="steps">${p.steps.map(s => `<li><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>${s.cmd ? `<code>${esc(s.cmd)}</code>` : ''}</li>`).join('')}</ol>`;
  } else {
    main += `<h2 class="block-title">Program</h2>
      <div class="window" id="codeWin">
        <div class="window-bar">
          <div class="dots"><i></i><i></i><i></i></div>
          <div class="tabs" id="tabs">${p.files.map((f, i) => `<button class="tab ${i === 0 ? 'active' : ''}" data-i="${i}">${esc(f.name)}</button>`).join('')}</div>
          <button class="copy-btn" id="copyBtn">Copy</button>
        </div>
        <div class="code-body" id="codeBody"></div>
      </div>`;
  }

  main += `<h2 class="block-title">Output</h2>${terminalHTML(p.terminal, 'Command Prompt')}`;
  (p.notes || []).forEach(n => { main += `<div class="note">${esc(n)}</div>`; });

  main += `
    <div class="pager">
      ${prev ? `<a class="prev" href="#/week/${w.n}/${prev.no}"><small>← Previous</small><strong>${esc(prev.title)}</strong></a>` : `<a class="prev" href="#/week/${w.n}"><small>← Back</small><strong>All Week ${w.n} programs</strong></a>`}
      ${next ? `<a class="next" href="#/week/${w.n}/${next.no}"><small>Next →</small><strong>${esc(next.title)}</strong></a>` : `<a class="next" href="#/week/${w.n}"><small>Finished →</small><strong>Back to Week ${w.n}</strong></a>`}
    </div>`;

  return `
  <div class="wrap fade">
    <div class="page-head">
      <div class="crumbs"><a href="#/">Home</a><span class="sep">/</span><a href="#/weeks">Weeks</a><span class="sep">/</span><a href="#/week/${w.n}">Week ${w.n}</a><span class="sep">/</span><span>Program ${p.no}</span></div>
      <div class="kicker">Week ${w.n} · Program ${p.no}</div>
      <h1>${esc(p.title)}</h1>
    </div>
    <div class="prog-layout"><aside>${side}</aside><div>${main}</div></div>
  </div>`;
}

/* ---------- code viewer behaviour ---------- */
function mountCodeViewer(p) {
  const body = document.getElementById('codeBody');
  if (!body) return;
  const tabs = document.getElementById('tabs');
  const copyBtn = document.getElementById('copyBtn');
  let current = 0;

  function show(i) {
    current = i;
    const code = p.files[i].code.replace(/\n$/, '');
    const lines = code.split('\n').length;
    body.innerHTML = `<div class="gutter">${Array.from({ length: lines }, (_, k) => k + 1).join('\n')}</div><pre class="code"><code>${highlight(code)}</code></pre>`;
    tabs.querySelectorAll('.tab').forEach((t, k) => t.classList.toggle('active', k === i));
  }
  tabs.addEventListener('click', e => {
    const b = e.target.closest('.tab');
    if (b) show(Number(b.dataset.i));
  });
  copyBtn.addEventListener('click', async () => {
    const text = p.files[current].code;
    try { await navigator.clipboard.writeText(text); }
    catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch (_) {}
      ta.remove();
    }
    copyBtn.textContent = 'Copied ✓'; copyBtn.classList.add('done');
    setTimeout(() => { copyBtn.textContent = 'Copy'; copyBtn.classList.remove('done'); }, 1600);
  });
  show(0);
}

/* ---------- router ---------- */
function render() {
  const parts = (location.hash.replace(/^#\/?/, '') || '').split('/').filter(Boolean);
  let html = '', route = 'home', program = null, title = 'Java Record | ' + PROFILE.name;

  if (parts[0] === 'profile') { html = viewProfile(); route = 'profile'; title = 'Profile | ' + PROFILE.name; }
  else if (parts[0] === 'weeks') { html = viewWeeks(); route = 'weeks'; title = 'Weeks | Java Record'; }
  else if (parts[0] === 'week' && getWeek(parts[1])) {
    const w = getWeek(parts[1]); route = 'weeks';
    if (parts[2]) {
      program = w.programs.find(p => p.no === Number(parts[2]));
      if (program) { html = viewProgram(w, program); title = `Week ${w.n} · Program ${program.no} | Java Record`; }
    }
    if (!html) { html = viewWeek(w); title = `Week ${w.n} | Java Record`; }
  } else { html = viewHome(); }

  app.innerHTML = html;
  document.title = title;
  nav.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.dataset.route === route));
  nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false');
  if (program) mountCodeViewer(program);
  window.scrollTo(0, 0);
}

/* ---------- theme + menu ---------- */
document.getElementById('themeBtn').addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('jr-theme', next); } catch (e) {}
});
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
document.getElementById('toTop').addEventListener('click', e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
document.getElementById('footerText').textContent = `© ${new Date().getFullYear()} ${PROFILE.name} · ${PROFILE.subject} Record`;

window.addEventListener('hashchange', render);
render();

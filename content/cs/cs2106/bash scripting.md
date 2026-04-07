---
tags:
  - cs2106/chapter4
  - cs/low_level
  - lang/bash
complete: false
---
### Summary
Shebang
```bash
#!/bin/sh
#!/bin/bash
```
> use `chmod a+x <file>` to make a shell script executable to all users

Primitives
 ```bash
 #!/usr/bin/env bash
# ==========================================
# BASIC FEATURES IN BASH SCRIPTING
# ==========================================

# ---------------------------
# 1. Comments
# ---------------------------
# Single-line comment

: <<'MULTILINE'
This is a
multi-line comment
MULTILINE

# ---------------------------
# 2. Variables
# ---------------------------
name="John"
readonly PI=3.14
echo "Hello, $name"
echo "Length of name: ${#name}"

# Command substitution
current_date=$(date)
echo "Today is $current_date"

# ---------------------------
# 3. User Input
# ---------------------------
read -p "Enter your age: " age
echo "You are $age years old."

# ---------------------------
# 4. Positional Parameters
# ---------------------------
echo "Script name: $0"
echo "First argument: $1"
echo "All arguments: $@"
echo "Number of arguments: $#"

# ---------------------------
# 5. Conditionals
# ---------------------------
if [ "$age" -ge 18 ]; then
    echo "Adult"
elif [ "$age" -ge 13 ]; then
    echo "Teen"
else
    echo "Child"
fi

# Test conditions
# -eq -ne -gt -lt -ge -le
# = != < > (string)
# -z (empty), -n (not empty)
# -f (file), -d (directory), -e (exists)

# ---------------------------
# 6. Case Statement
# ---------------------------
case $age in
    [0-9])
        echo "Single digit age"
        ;;
    *)
        echo "Multiple digits or non-number"
        ;;
esac

# ---------------------------
# 7. Loops
# ---------------------------

# For loop
for i in 1 2 3; do
    echo "Number: $i"
done

# C-style for loop
for ((i=0; i<5; i++)); do
    echo "i = $i"
done

# While loop
count=0
while [ $count -lt 3 ]; do
    echo "Count: $count"
    ((count++))
done

# Until loop
until [ $count -ge 5 ]; do
    echo "Until Count: $count"
    ((count++))
done

# ---------------------------
# 8. Functions
# ---------------------------
greet() {
    local user=$1
    echo "Hello, $user"
}

greet "Alice"

# Return value
add() {
    echo $(($1 + $2))
}
result=$(add 5 3)
echo "Sum: $result"

# ---------------------------
# 9. Arrays
# ---------------------------
fruits=("apple" "banana" "cherry")
echo "First fruit: ${fruits[0]}"
echo "All fruits: ${fruits[@]}"
echo "Number of fruits: ${#fruits[@]}"

# Associative arrays (Bash 4+)
declare -A capitals
capitals[France]="Paris"
echo "Capital of France: ${capitals[France]}"

# ---------------------------
# 10. Arithmetic
# ---------------------------
a=10
b=5
echo "Addition: $((a + b))"
((a++))
echo "Incremented a: $a"

# ---------------------------
# 11. String Operations
# ---------------------------
str="hello world"
echo "Uppercase: ${str^^}"
echo "Replace: ${str/world/bash}"
echo "Substring: ${str:0:5}"

# ---------------------------
# 12. File Handling
# ---------------------------
touch sample.txt
echo "Hello File" > sample.txt      # Overwrite
echo "Append line" >> sample.txt    # Append

if [ -f sample.txt ]; then
    echo "File exists"
fi

# Reading file line by line
while IFS= read -r line; do
    echo "Line: $line"
done < sample.txt

# ---------------------------
# 13. Redirection & Pipes
# ---------------------------
ls > files.txt          # Redirect stdout
ls 2> errors.txt        # Redirect stderr
ls &> all_output.txt    # Redirect both

cat sample.txt | grep "Hello"

# ---------------------------
# 14. Exit Status
# ---------------------------
ls nonexistent_file
echo "Exit status: $?"

# ---------------------------
# 15. Trap (Signal Handling)
# ---------------------------
trap "echo 'Script interrupted'; exit" SIGINT

# ---------------------------
# 16. Select (Menu)
# ---------------------------
select option in Start Stop Exit; do
    echo "You chose $option"
    break
done

# ---------------------------
# 17. Debugging
# ---------------------------
# Run script with:
# bash -x script.sh

set -e  # Exit on error
set -u  # Error on undefined variable
set -o pipefail  # Fail if any command in pipe fails

echo "Script completed."
 ```
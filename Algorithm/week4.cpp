#include <iostream>
#include <string> // untuk string

using namespace std;

int main()
{
    // Bagian 1: Print pesan awal
    cout << "Hello, World!" << endl;
    cout << "This is a C++ program." << endl;

    // Bagian 2: Menampilkan nama dan nilai
    string name = "Iik Muhammad Ikmal";
    int value = 100;
    cout << "Hi, " << name << "! Your value is " << value << "." << endl;

    // Bagian 3: Kalkulator sederhana
    int num1, num2, sum;
    cout << "Enter first number: ";
    cin >> num1;
    cout << "Enter second number: ";
    cin >> num2;
    sum = num1 + num2;
    cout << "The sum is: " << sum << endl;

    return 0;
}
